from django.views.generic import TemplateView, UpdateView

from app.models import MyUser

class HomePageView(TemplateView):
    template_name = 'app/index.html'

class UpdateProfileView(UpdateView):
    model = MyUser
    template_name = 'app/profile.html'
    success_url = "/"
    fields = ['first_name', 'last_name', 'email']