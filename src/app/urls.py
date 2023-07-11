from django.urls import path
from app import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('update-profile/<int:pk>', views.UpdateProfileView.as_view(), name='update-profile'),
]