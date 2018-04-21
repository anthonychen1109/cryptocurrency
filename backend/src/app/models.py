from django.db import models

# Create your models here.
class Coin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    symbol = models.CharField(max_length=10, primary_key=True, unique=True)
    name = models.CharField(max_length=128)
    price_usd = models.FloatField()
    price_btc = models.FloatField()

    def __str__(self):
        return self.name
