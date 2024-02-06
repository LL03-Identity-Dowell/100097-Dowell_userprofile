from django.urls import path,re_path
from userprofile. views import *
from userprofile import views
# from .views import user_profile
# from .views import serverReport, insert_data
app_name = "userprofile"

urlpatterns = [
#     re_path(r'^(?:session_id=(?P<session_id>[a-z0-9]))?$',user_profile, name='user_profile'),
#     re_path(r'^user/(?:username=(?P<username>[a-z0-9]))?$',views.userdata, name='userdata'),
#     re_path(r'^userform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.userform, name='userform'),
#     re_path(r'^setpassword/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.setpassword, name='setpassword'),
#     re_path(r'^deviceid/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.deviceid, name='deviceid'),
#     re_path(r'^personalid/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.personalid, name='personalid'),
#     re_path(r'^referenceform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.referenceform, name='referenceform'),
#     re_path(r'^verificationform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.verificationform, name='verificationform'),
#     re_path(r'^organizationform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.organizationform, name='organizationform'),
#     re_path(r'^geographicalform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.geographicalform, name='geographicalform'),
#     re_path(r'^demographicform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.demographicform, name='demographicform'),
#     re_path(r'^psychographicform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.psychographicform, name='psychographicform'),
#     re_path(r'^behaviourform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.behaviourform, name='behaviourform'),
#     re_path(r'^usageform/(?:session_id=(?P<session_id>[a-z0-9]))?$', views.usageform, name='usageform'),
      
      path('create_profile', views.Profile_create, name='Profile_create'),
      path('', views.index, name='index'),
      path('profile', views.Profile, name='profile'),
      path('Userprofile_form', views.Userprofile_form, name='Userprofile_form'),
      path('Setpassword', views.Setpassword, name='Setpassword'),
      path('Deviceid_form', views.Deviceid_form, name='Deviceid_form'),
      path('Reference_form', views.Reference_form, name='Reference_form'),
      path('Idverification_form', views.Idverification_form, name='Idverification_form'),
      path('Organization_form', views.Organization_form, name='Organization_form'),
      path('Geographic_form', views.Geographic_form, name='Geographic_form'),
      path('Demographic_form', views.Demographic_form, name='Demographic_form'),
      path('Psychographic_form', views.Psychographic_form, name='Psychographic_form'),
      path('Behaviour_form', views.Behaviour_form, name='Behaviour_form'),
      path('usage_form', views.Usage_form, name='usage_form'),
      path('getprofile', views.GetProfile, name='getprofile'),
      path('getids', views.personalIds, name='getids'),
      path('postids', views.personalIds, name='postids'),
      path("personalref",views.PersonalRef,name="personalref"),
      path("faceid",views.FaceID,name="faceid"),
      path("myworkspace",views.MyWorkspace,name="myworkspace"),
      path("update_permissions",views.update_permissions),
      path("get_user_sections",views.get_user_sections),
]