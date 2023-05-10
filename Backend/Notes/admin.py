from django.contrib import admin
from .models import Notes,Topics,Cart,Likes,Comments,Playlist,Branch
# Register your models here.

# admin.site.register(Note)
@admin.register(Notes)
class NotesAdmin(admin.ModelAdmin):
    list_display = ("title","thumbnail","price","public","created_on","updated_on",)

@admin.register(Topics)
class TopicsAdmin(admin.ModelAdmin):
    list_display = ("name","created_on","updated_on",)
@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ("name","created_on","updated_on",)

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display=["user","ForLater","note"]

@admin.register(Likes)
class LikesAdmin(admin.ModelAdmin):
    list_display=["user","like","note"]

@admin.register(Comments)
class CommentAdmin(admin.ModelAdmin):
    list_display=["user","comment","note"]

@admin.register(Playlist)
class BundleAdmin(admin.ModelAdmin):
    list_display=["user","title","created_on"]

