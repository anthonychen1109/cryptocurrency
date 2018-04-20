from django.shortcuts import render
from django.contrib.auth import login
from django.http import HttpResponseRedirect
from rest_framework import generics
from rest_framework.response import Response
from .forms import UserForm
from . import serializers
from . import models

# Create your views here.

def add_user(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            new_user = User.objects.create_user(**form.cleaned_data)
            login(new_user)
            # redirect, or however you want to get to the main view
            return HttpResponseRedirect('main.html')
    else:
        form = UserForm()

    return render(request, 'adduser.html', {'form': form})

class ListCoins(generics.ListAPIView):
    queryset = models.Coin.objects.all()
    serializer_class = serializers.CoinSerializer

class ListCoin(generics.ListAPIView):
    serializer_class = serializers.CoinSerializer

    def get_queryset(self):
        coin_name = self.kwargs['coin_name']
        return models.Coin.objects.filter(symbol=coin_name.upper())
