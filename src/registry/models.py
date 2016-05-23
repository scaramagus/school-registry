from django.db import models


class School(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)


class Classroom(models.Model):
    school = models.ForeignKey(School)

    number = models.PositiveSmallIntegerField()
    capacity = models.PositiveSmallIntegerField()


class Student(models.Model):
    MALE = 'M'
    FEMALE = 'F'

    GENDER_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female')
    )

    classroom = models.ForeignKey(Classroom)

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    age = models.PositiveSmallIntegerField()

    def get_full_name(self):
        return '{} {}'.format(first_name, last_name)
