from rest_framework import viewsets

from .serializers import SchoolSerializer
from ..models import School


class SchoolViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
