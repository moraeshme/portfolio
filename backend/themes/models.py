from django.db import models

# Create your models here.

class Theme(models.Model):
    name = models.CharField(max_length=50, unique=True)
    primary_color = models.CharField(max_length=7) # HEX
    secondary_color = models.CharField(max_length=7)
    background_color = models.CharField(max_length=7)

    def __str__(self):
        return self.name
