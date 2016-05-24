from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin

from registry import views

urlpatterns = [
    url(r'^', views.home, name='home'),
    url(r'^admin/', admin.site.urls),
]
