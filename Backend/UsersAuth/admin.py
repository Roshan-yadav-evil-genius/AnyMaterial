from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from UsersAuth.models import Users
# Register your models here.
@admin.register(Users)
class OwnersAdmin(UserAdmin):
    model = Users
    list_display = ["id", "email", "get_full_name", "is_staff", "is_superuser"]
    list_display_links = ["id",'email']

    ordering = ['id']

    fieldsets = [
        ("Authentication", {'fields': ["email", "password"]}),
        ("Personal Info", {'fields': ["avatar", "first_name", "last_name","userType"]}),
        ("User Privilege", {'fields': ["is_superuser", "is_staff"]}),
        ("Account Info", {'fields': [
         "is_active", "date_joined", "last_login"]}),
    ]
