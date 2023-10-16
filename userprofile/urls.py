from django.urls import path,re_path
from userprofile. views import *
from userprofile import views
from .views import user_profile
# from .views import serverReport, insert_data
app_name = "userprofile"

urlpatterns = [
    re_path(r'^(?:session_id=(?P<session_id>[a-z0-9]))?$',user_profile, name='user_profile'),
    re_path(r'^user/(?:username=(?P<username>[a-z0-9]))?$',views.userdata, name='userdata'),
    re_path(r'^userform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.userform, name='userform'),
    re_path(r'^setpassword/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.setpassword, name='setpassword'),
    re_path(r'^deviceid/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.deviceid, name='deviceid'),
    re_path(r'^personalid/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.personalid, name='personalid'),
    re_path(r'^referenceform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.referenceform, name='referenceform'),
    re_path(r'^verificationform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.verificationform, name='verificationform'),
    re_path(r'^organizationform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.organizationform, name='organizationform'),
    re_path(r'^geographicalform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.geographicalform, name='geographicalform'),
    re_path(r'^demographicform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.demographicform, name='demographicform'),
    re_path(r'^psychographicform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.psychographicform, name='psychographicform'),
    re_path(r'^behaviourform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.behaviourform, name='behaviourform'),
    re_path(r'^usageform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.usageform, name='usageform'),

]



