from django.urls import path
from app import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
]