from django.contrib.auth.models import User
from django.forms import ModelForm, PasswordInput, CharField

class UserForm(ModelForm):
    password = CharField(widget=PasswordInput())
    verify_password = CharField(widget=PasswordInput())
    class Meta:
        model = User
        fields = ['username', 'password', 'verify_password']
