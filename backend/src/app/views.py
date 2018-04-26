from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from rest_framework import generics
from rest_framework.response import Response
from .forms import UserForm
from . import serializers
from . import models
from django import forms

# Create your views here.

def add_user(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return HttpResponseRedirect('../login/')
    else:
        form = UserCreationForm()

    return render(request, 'adduser.html', {'form': form})

class ListCoins(generics.ListAPIView):
    queryset = models.Coin.objects.all()
    serializer_class = serializers.CoinSerializer

class ListCreateCoin(generics.ListCreateAPIView):
    serializer_class = serializers.CoinSerializer

    def get_queryset(self):
        coin_name = self.kwargs['coin_name']
        return models.Coin.objects.filter(symbol=coin_name.upper())
