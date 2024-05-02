from django.urls import path
from .views import home, create, update, delete

urlpatterns = [
    path("", home, name="home"), #this makes a get request and executes the home function
    path("create/", create, name="create"),
    path("update/", update, name="update"),
    path("delete/", delete, name="delete"),
]