# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-18 19:15
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20180418_1827'),
    ]

    operations = [
        migrations.AddField(
            model_name='coin',
            name='slug',
            field=models.SlugField(default=django.utils.timezone.now, max_length=10),
            preserve_default=False,
        ),
    ]
