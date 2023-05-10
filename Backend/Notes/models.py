from django.db import models
from django.core.validators import FileExtensionValidator, MaxValueValidator, MinValueValidator
from django.core.exceptions import ValidationError
# from django.contrib.auth.models import User
from Authentication.models import User
# Create your models here.


class BaseModel(models.Model):
    # Dont allow to pass values for these fields
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Topics(BaseModel):
    name = models.CharField("Topics", max_length=100,
                            blank=False, help_text="Name of the tag", unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]
        verbose_name = "Topics"
        verbose_name_plural = "Topics"


class Branch(BaseModel):
    name = models.CharField("Topics", max_length=200,
                            blank=False, help_text="Name of the tag", unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]
        verbose_name = "Branch"
        verbose_name_plural = "Branches"


class Playlist(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField("Title", max_length=100,
                             blank=False, help_text="Title of the Playlist")
    description = models.CharField(
        "Title", max_length=200, blank=True, help_text="Description of Playlist")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["created_on"]

        verbose_name = "Playlist"
        verbose_name_plural = "Playlist"


# Notes Validators
def Only_Teacher(pk):
    user = User.objects.get(id=pk)
    if user.userType != "TE":
        raise ValidationError('Only teachers can upload books')


class Notes(BaseModel):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, validators=[Only_Teacher])

    title = models.CharField("Title", max_length=100,
                             blank=False, help_text="Title of the note")
    description = models.TextField("Description of Notes", blank=False)

    # Cover photo and notes file TODO: Remove default value in production
    thumbnail = models.ImageField("Notes Cover", upload_to="Notes/covers", blank=True, validators=[
                                  FileExtensionValidator(["jpg", "png"])], help_text="Title of the note")
    notes = models.FileField("Notes pdf or word file", validators=[FileExtensionValidator(
        ['doc', "docx", "pdf"])], upload_to="Notes/notes", blank=False, help_text="Notes file in pdf format", default="Notes/notes/default.pdf")

    # Price and visibility
    price = models.DecimalField("Price", max_digits=10, decimal_places=2,
                                blank=False, help_text="Price of the notes in INR")
    public = models.BooleanField(
        "Public", default=True, help_text="Public notes can be Purchased and viewed by anyone")

    # Playlist
    playlist = models.ForeignKey(
        Playlist, on_delete=models.DO_NOTHING, null=True, blank=True)

    # Covered Topics in notes
    topics = models.ManyToManyField(Topics, verbose_name="Covered Topics",
                                    blank=False, help_text="Notes that are tagged with this tag")
    branch = models.ManyToManyField(
        Branch, verbose_name="For Branch", default="All")

    def __str__(self):
        return f"By : {self.author.get_full_name()} Title : {self.title}"

    class Meta:
        ordering = ["created_on", "-updated_on"]
        verbose_name = "Notes"
        verbose_name_plural = "Notes"


class Comments(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.ForeignKey(Notes, on_delete=models.CASCADE)

    comment = models.TextField("Comment", blank=False)

    class Meta:
        ordering = ["created_on"]
        unique_together = [["user", "note"]]

        verbose_name = "Comment"
        verbose_name_plural = "Comments"


class Likes(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.ForeignKey(Notes, on_delete=models.CASCADE)

    # if like is false then delete entry only store when it is true
    like = models.BooleanField("Like", blank=True,null=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, validators=[MaxValueValidator(5.0),MinValueValidator(0.0),],null=True,blank=True)

    class Meta:
        ordering = ["created_on"]
        unique_together = [["user", "note"]]

        verbose_name = "Like"
        verbose_name_plural = "Likes"


class Cart(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.ForeignKey(Notes, on_delete=models.CASCADE)

    # if product is not saved for later then show in cart else show in save for later section
    ForLater = models.BooleanField("Save for Later", default=False)

    class Meta:
        ordering = ["created_on"]
        unique_together = [["user", "note"]]

        verbose_name = "Cart"
        verbose_name_plural = "Cart"
