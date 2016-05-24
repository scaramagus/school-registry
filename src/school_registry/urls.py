from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin

import registry.urls

urlpatterns = [
    url(r'^', include(registry.urls)),
    url(r'^admin/', include(admin.site.urls)),
]
