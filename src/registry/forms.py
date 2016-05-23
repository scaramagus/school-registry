from django import forms

from .models import Student


class StudentAdminForm(forms.ModelForm):

    class Meta:
        model = Student
        fields = ['classroom', 'first_name', 'last_name', 'gender', 'age']

    def clean_classroom(self):
        classroom = self.cleaned_data['classroom']
        student_count = classroom.student_set.exclude(
            pk=self.instance.pk
        ).count()

        if student_count > classroom.capacity:
            raise ValidationError('The classroom has reached its maximum capacity.')
        return classroom
