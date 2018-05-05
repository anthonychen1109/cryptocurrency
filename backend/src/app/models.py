from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100, primary_key=True)
    password = models.CharField(max_length=48)

    def __str__(self):
        return self.username
