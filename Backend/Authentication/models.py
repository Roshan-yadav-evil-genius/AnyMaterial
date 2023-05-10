from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager


class User(AbstractUser):
    username = None
    email = models.EmailField("Email address", max_length=100, unique=True)

    avatar = models.ImageField(verbose_name="Avatar", upload_to="Avatars/",blank=True,null=True)
    userType = models.CharField(verbose_name="Type", max_length=2,choices=[("ST", "Student"),("TE", "Teacher")],default="")

    search_field = ('email')
    readonly_fields = ('date_joined', 'last_login')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


    def __str__(self):
        return self.email
