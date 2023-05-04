from django.urls import path
from UsersAuth import views
urlpatterns = [
    path('',views.index ),
]
