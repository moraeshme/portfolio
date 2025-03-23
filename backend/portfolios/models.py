from django.db import models
from django.contrib.auth.models import User
from themes.models import Theme

class Portfolio(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    theme = models.ForeignKey(Theme, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    content = models.JSONField()  # conteúdo estruturado
