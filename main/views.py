from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def menu(request):
    return render(request, "menu.html")

def about(request):
    return render(request, "about.html")

def projects(request):
    return render(request, "projects.html")

def contact(request):
    return render(request, "contact.html")