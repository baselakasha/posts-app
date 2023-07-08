from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer, CreatePostSerializer

class PostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
   
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_serializer_class(self):
        if self.action == 'create':
            return CreatePostSerializer
        return PostSerializer
