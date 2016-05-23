from django.db import models


class School(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Classroom(models.Model):
    school = models.ForeignKey(School)

    number = models.PositiveSmallIntegerField()
    capacity = models.PositiveSmallIntegerField()

    def __str__(self):
        return '{}, Classroom {}'.format(self.school.name, self.number)


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
        return '{} {}'.format(self.first_name, self.last_name)

    def __str__(self):
        return self.get_full_name()
