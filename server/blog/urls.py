from django.urls import path
from .views import home, create

urlpatterns = [
    path("", home, name="home"), #this makes a get request and executes the home function
    path("create/", create, name="create")
]