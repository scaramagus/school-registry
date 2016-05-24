from django.conf.urls import include, url

import registry.api.urls
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^api/', include(registry.api.urls)),
]
