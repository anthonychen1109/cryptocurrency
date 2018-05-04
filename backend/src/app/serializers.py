from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = models.User

        extra_kwargs = {'password': {'write_only': True}}

        def create(self, validated_data):
            user = User(
                username=validated_data['username']
            )
            user.set_password(validated_data['password'])
            user.save()
            return user
