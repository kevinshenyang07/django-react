from django.conf.urls import include, url

from django.contrib import admin
admin.autodiscover()

from django.views.generic import TemplateView
import api.views

# Examples:
# url(r'^$', 'gettingstarted.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^api/', include('api.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
