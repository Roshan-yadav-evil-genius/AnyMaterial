from django.db import models
from UsersAuth.models import Users
# Create your models here.

class Series(models.Model):
    name=models.CharField("Series Name", max_length=50)
    subject = models.CharField("Subject Name", max_length=50)
    chapterName = models.CharField("Chapter Name", max_length=50)
    delete = models.BooleanField("Deleted")

class Notes(models.Model):
    seriesId = models.ForeignKey(Series, verbose_name="Series Id", on_delete=models.CASCADE)
    file = models.FileField("Notes in Pdf format", upload_to="Notes/")
    title=models.CharField("Title For Notes", max_length=50)
    description=models.CharField("Description For Notes", max_length=200)

class CoveredTopics(models.Model):
    noteId=models.ForeignKey(Notes, verbose_name="Notes Id", on_delete=models.CASCADE)
    name = models.CharField("Topic Name", max_length=50)

class Ratings(models.Model):
    noteId = models.ForeignKey(Notes, verbose_name="Notes Id", on_delete=models.CASCADE)
    userId = models.ForeignKey(Users, verbose_name="User Id", on_delete=models.CASCADE)
    rating = models.DecimalField("Rating", max_digits=1, decimal_places=1)

class Reviews(models.Model):
    noteId = models.ForeignKey(Notes, verbose_name="Notes Id", on_delete=models.CASCADE)
    userId = models.ForeignKey(Users, verbose_name="User Id", on_delete=models.CASCADE)
    Reviews = models.CharField("Reviews", max_length=50)