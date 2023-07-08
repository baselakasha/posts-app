
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from post.views import PostsViewSet

router = routers.DefaultRouter()
router.register(r'post', PostsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('', include('app.urls')),
]
