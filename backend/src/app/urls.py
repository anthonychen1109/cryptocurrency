from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^create/', views.UserCreate.as_view(), name='create'),
    url(r'^users/', views.UserList.as_view(), name='list'),
]
