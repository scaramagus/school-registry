from django.contrib import admin
from .forms import StudentAdminForm

from .models import School, Classroom, Student


@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    pass


@admin.register(Classroom)
class ClassroomAdmin(admin.ModelAdmin):
    pass


@admin.register(Student)
class ClassroomAdmin(admin.ModelAdmin):
    form = StudentAdminForm
