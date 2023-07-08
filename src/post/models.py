from django.db import models

class Post(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('app.MyUser', on_delete=models.CASCADE)

    def __str__(self):
        return self.content[:50]

    class Meta:
        ordering = ['-created_at']