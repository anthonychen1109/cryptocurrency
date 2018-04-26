from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class Coin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    symbol = models.CharField(max_length=10, primary_key=True, unique=True)
    name = models.CharField(max_length=128)
    price_usd = models.FloatField()
    price_btc = models.FloatField()

    def __str__(self):
        return self.name

class User(AbstractBaseUser):
    username = models.CharField('username', max_length=150, unique=True)
    email = models.EmailField('email address', unique=True, max_length = 255)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
