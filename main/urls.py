from main import views
from django.urls import path

urlpatterns = [
    path("", views.index, name="index"),
    path("menu", views.menu, name="menu"),
    path("about", views.about, name="about"),
    path("projects", views.projects, name="projects"),
    path("contact", views.contact, name="contact"),
]