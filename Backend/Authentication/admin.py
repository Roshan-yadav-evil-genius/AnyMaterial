from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
# Register your models here.

@admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    model=User
    ordering = ["date_joined"]
    list_display=['email', 'get_full_name', 'userType', 'is_staff',"is_superuser"]