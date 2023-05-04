from django.db import models
from django.contrib.auth.models import AbstractUser
from UsersAuth.managers import CustomUserManager


class Users(AbstractUser):
    username = None
    email = models.EmailField("Email address", max_length=100, unique=True)

    avatar = models.ImageField(
        verbose_name="Profile pic",
        upload_to="images/Users/Avatar")

    userType = models.CharField(
        verbose_name="User Type",
        max_length=2,
        choices=[
            ("ST", "Student"),
            ("TE", "Teacher")
        ])

    search_field = ('email')
    readonly_fields = ('date_joined', 'last_login')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    class Meta:
        verbose_name = 'Owner'
        verbose_name_plural = 'Owners'

    def __str__(self):
        return self.email
