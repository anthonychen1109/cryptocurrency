from rest_framework import serializers
from .models import Coin

class CoinSerializer(serializers.ModelSerializer):
    class Meta:
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
        fields = '__all__'
        lookup_field = 'slug'
        model = Coin
