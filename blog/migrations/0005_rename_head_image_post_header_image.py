# Generated by Django 4.1.1 on 2022-09-20 01:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_alter_post_head_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='head_image',
            new_name='header_image',
        ),
    ]
