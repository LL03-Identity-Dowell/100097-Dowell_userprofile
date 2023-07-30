from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.views import View
<<<<<<< HEAD
from .forms import DeviceIdForm, SetpasswordForm, GeographicalForm, DemographicProfileForm, OrganizationForm, PersonalIDForm, BehaviourForm, UsageProfileForm, InputForm, PsychographicProfileForm, ReferencesProfileForm, VerificationForm
import requests
from django.contrib import messages
from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
import base64



# from django.contrib.sessions.models import Session


# from django.contrib.auth.decorators import login_required



=======
from .forms import DemographicProfileForm, GeographicalForm, PsychographicForm, OrganizationForm, PersonalIDForm, BehaviourForm, UsageProfileForm, InputForm
import base64
import json

    # return render(request, insert_data.html, {'form': form})
# def index_page(request):
#     return render(request, "index.html")

>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604
class FirstnameView(View):
    def get(self, request):
        return HttpResponse()

class LastnameView(View):
    def get(self, request):
        return HttpResponse()

class PhoneNumberView(View):
    def get(self, request):
        return HttpResponse()

class EmailAddressView(View):
    def get(self, request):
        return HttpResponse()

class AddressView(View):
    def get(self, request):
        return HttpResponse()

class PincodeView(View):
    def get(self, request):
        return HttpResponse()

class LocationView(View):
    def get(self, request):
<<<<<<< HEAD
        return HttpResponse()

=======
        return HttpResponse()  
>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604

import json
import base64
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView

# @method_decorator(csrf_exempt, name='dispatch')
# class serverReport(APIView):
#     def get(self, request):
#         return Response({"status": "Server is working."}, status=status.HTTP_200_OK)

def dowellconnection(cluster,database,collection,document,team_member_ID,function_ID,command,field,update_field):
    url = 'http://100002.pythonanywhere.com/'
    data= json.dumps({
      "cluster": cluster,
    #   "platform": platform,
      "database": database,
      "collection": collection,
      "document": document,
      "team_member_ID": team_member_ID,
      "function_ID": function_ID,
      "command": command,
      "field": field,
      "update_field":update_field
       })
    headers = {'content-type': 'application/json'}
    response = requests.request('POST',url, headers=headers,data=data)
    return response.text

def get_user_object(username):
    fields = {"usename": username}
    response_obj = dowellconnection( "login", "login", "user_profile", "user_profile", "1168", "ABCDE", "find", fields, "nil")
    res_obj = json.loads(response_obj)
    try:
        return res_obj["data"]
    except:
        return []

<<<<<<< HEAD

def update(update_fields, files, url):
    # Use this function to update data for profile, password, and organization form
    response = requests.post(url, json=update_fields, files=files)
    return response


# def insert_data(insert_data, user_id):
#     #use this function to update data other than profile,password and organization forms
#     url = "http://100002.pythonanywhere.com/"
#     insert_data["useID"]=user_id
#     payload = json.dumps({
#         "cluster": "login",
#         "database": "login",
#         "collection": "user_profile",
#         "document": "user_profile",
#         "team_member_ID": "1168",
#         "function_ID": "ABCDE",
#         "command": "insert",
#         "field": insert_data,
#         "update_field": {
#             "order_nos": 21
#         },
#         "platform": "bangalore"
#     })
#     headers = {
#         'Content-Type': 'application/json'
#     }

#     response = requests.request("POST", url, headers=headers, data=payload)
#     return response


def insert_data(insert_data, username):
    url = "http://100002.pythonanywhere.com/"
    insert_data['username'] = username
    payload = json.dumps({
           "cluster": "login",
           "database": "login",
           "collection": "user_profile",
           "document": "user_profile",
           "team_member_ID": "1168",
           "function_ID": "ABCDE",
           "command": "insert",
           "field":insert_data,
           "update_field": {},
           "platform": "bangalore",
        })

    headers = {
           'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    return response.text

def update_data(update_fields,username):
    #use this function to update data other than profile,password and organization forms
    url = "http://100002.pythonanywhere.com/"

    payload = json.dumps({
           "cluster": "login",
           "database": "login",
           "collection": "user_profile",
           "document": "user_profile",
           "team_member_ID": "1168",
           "function_ID": "ABCDE",
           "command": "update",
           "field": {
                  'username': username,                                               #   "64537fb72dfb6007eb36dd32",
           },
           "update_field": update_fields,
           "platform": "bangalore"
        })

    headers = {
           'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    return response

def fetch_data(username):
    url = "http://100002.pythonanywhere.com/"

    payload = json.dumps({
           "cluster": "login",
           "database": "login",
           "collection": "user_profile",
           "document": "user_profile",
           "team_member_ID": "1168",
           "function_ID": "ABCDE",
           "command": "fetch",
           "field": {
                  "username": username,
           },
           "update_field": {},
           "platform": "bangalore"
    })

    headers = {
           'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    response_data = response.json()
    # response_data = response_data['data'][0]
    return response_data

# def insert_data(update_fields, _id):
#     url = "http://100002.pythonanywhere.com/"
#     payload = json.dumps({
#         "cluster": "login",
#         "database": "login",
#         "collection": "user_profile",
#         "document": "user_profile",
#         "team_member_ID": "1168",
#         "function_ID": "ABCDE",
#         "command": "fetch",
#         "field": {
#             "_id": _id
#         },
#         "update_field": update_fields,
#         "platform": "bangalore"
#     })
#     headers = {
#         'Content-Type': 'application/json'
#     }
#     response = requests.post(url, headers=headers, data=payload)
#     response_data = json.loads(response.text)
#     return response_data

# def _data(update_fields, user_id):
#     url = "http://100002.pythonanywhere.com/"
#     payload = json.dumps({
#         "cluster": "login",
#         "database": "login",
#         "collection": "user_profile",
#         "document": "user_profile",
#         "team_member_ID": "1168",
#         "function_ID": "ABCDE",
#         "command": "fetch",
#         "field": {
#             "_id": user_id
#         },
#         "update_field": update_fields,
#         "platform": "bangalore"
#     })
#     headers = {
#         'Content-Type': 'application/json'
#     }
#     response = requests.post(url, headers=headers, data=payload)
#     response_data = json.loads(response.text)
#     return response_data

# def user_passes_test(test_func, login_url='https://100014.pythonanywhere.com/?code=100096', redirect_field_name=REDIRECT_FIELD_NAME):
#     def decorator(view_func):
#         @wraps(view_func)
#         def rt_wrapper(request, args, **kwargs):
#             session_id = request.GET.get("session_id", None)
#             if session_id:
#                 url = 'https://100093.pythonanywhere.com/api/userinfo/'
#                 response = requests.post(url, data={'session_id': session_id})
#                 try:
#                     response=response.json()
#                     if test_func(response["userinfo"]["username"]):
#                         request.session["session_id"] = session_id
#                         request.session["dowell_user"] = response
#                         return view_func(request,args, kwargs)
#                 except:
#                     return redirect(login_url)
#             else:
#                 if request.session["session_id"]:
#                     return view_func(request, *args, kwargs)

#         return rt_wrapper
#     return decorator



# def dowell_login_required(function=None, redirect_field_name=REDIRECT_FIELD_NAME, login_url='https://100014.pythonanywhere.com/?code=100096%27):
#     actual_decorator = user_passes_test(
#         lambda is_True: is_True,
#         login_url=login_url,
#         redirect_field_name=redirect_field_name,
#     )
#     if function:
#         return actual_decorator(function)
#     return actual_decorator



# @dowell_login_required
# def test(request):
#     print("Logged in as: ", request.session["user_name"])
#     return JsonResponse({"status":"it is working"})



def userdata(request):
        # create new dataframe containing new values
        username = request.GET.get('username')

        response = {
            "username" : username
        }
        # read our CSV
        url = "http://100002.pythonanywhere.com/"
        # username = 'workflowairahul'
        payload = json.dumps({
              "cluster": "login",
              "database": "login",
              "collection": "user_profile",
              "document": "user_profile",
              "team_member_ID": "1168",
              "function_ID": "ABCDE",
              "command": "fetch",
              "field": {
                      "username": username,
              },
              "update_field": {},
              "platform": "bangalore"
        })

        headers = {
              'Content-Type': 'application/json'
        }

        response = requests.request("POST", url, headers=headers, data=payload)

        res = response.json()
        ls = [key for d in res['data'] for key in d  ]
        ls = set(ls)
        main_data = {}
        for key in ls:
            l = [d[key] for d in res['data'] if key in d]
            main_data[key]=l[0]
    # response_data = response_data['data'][0]

        # data = pd.read_csv('users.csv')  # read CSV
        # data = data.to_dict()  # convert dataframe to dictionary
        return JsonResponse(main_data, safe=False) # return data and 200 OK code

def submit_form(request):
    if request.method == 'POST':

        messages.success(request, 'Form submitted successfully!')
        messages.error(request, 'Form submission failed!')

        return render(request, 'index.html')

# @csrf_exempt
def user_profile(request):
    # url = "http://100002.pythonanywhere.com/"
    url = "https://100014.pythonanywhere.com/api/profile_update/"
    session_id = request.GET.get('session_id')
    api_url = "https://100093.pythonanywhere.com/api/userinfo/"

    myobj = {'session_id': session_id}
    response = requests.post(api_url, data=myobj)
    data = response.json()
    user_profile = data['userinfo']
    user_id = user_profile['userID']
    username = user_profile['username']
    #fetching data from url 100002
    res = fetch_data(username)
    ls = [key for d in res['data'] for key in d  ]
    ls = set(ls)
    main_data = {}
    for key in ls:
      l = [d[key] for d in res['data'] if key in d]
      main_data[key]=l[0]
    context = {}
    context['user_data'] = main_data
    # context['user_data'] = res
    context['user_profile'] = user_profile
    context['form'] = InputForm()
    context['Device_Id'] = DeviceIdForm()
    context['set_password'] = SetpasswordForm()
    context['success'] = 'Password set successfully.'
    context['error_settingpassword'] = 'Error setting password.'
    context['error_passwordmismatch'] = 'Passwords do not match.'
    context['Organization'] = OrganizationForm()
    context['Geographical'] = GeographicalForm()
    context['PersonalID'] = PersonalIDForm()
    context['Behaviour'] = BehaviourForm()
    context['Usage'] = UsageProfileForm()
    context['Demographic'] = DemographicProfileForm()
    context['Psychographic']= PsychographicProfileForm()
    context['references']= ReferencesProfileForm()
    context['verification']= VerificationForm
    context['session_id'] = session_id
    context['processing_form'] = False



    # username = user_profile['username']


    # User_profile_form default values
    context['form'].fields['email_address'].initial = user_profile['email']
    context['form'].fields['phone_number'].initial = user_profile['phone']
    context['form'].fields['city'].initial = user_profile['city']
    context['form'].fields['country'].initial = user_profile['country']
    context['form'].fields['native_language'].initial = user_profile['language']
    path = f"https://100097.pythonanywhere.com/?session_id={session_id}"
    # user_id = userinfo['userID']
    # return render(request, 'index.html', context)


# def user_profile(request):
#     url = "https://100014.pythonanywhere.com/api/profile_update/"
#     session_id = request.GET.get('session_id')
#     api_url = "https://100093.pythonanywhere.com/api/userinfo/"

#     myobj = {'session_id': session_id}
#     response = requests.post(api_url, data=myobj)
#     data = response.json()
#     user_profile = data['userinfo']
#     user_id = user_profile['username']
#     context = {}
#     context['user_profile'] = user_profile
#     context['form'] = InputForm()
#     context['Device_Id'] = DeviceIdForm()
#     context['set_password'] = SetpasswordForm()
#     context['success'] = 'Password set successfully.'
#     context['error_settingpassword'] = 'Error setting password.'
#     context['error_passwordmismatch'] = 'Passwords do not match.'
#     context['Organization'] = OrganizationForm()
#     context['Geographical'] = GeographicalForm()
#     context['PersonalID'] = PersonalIDForm()
#     context['Behaviour'] = BehaviourForm()
#     context['Usage'] = UsageProfileForm()
#     context['session_id'] = session_id
#     username = user_profile['username']

    # return render(request, 'index.html', context)

    # if request.method == 'POST':
    #     button_clicked = None
    #     for key in request.POST.keys():
    #         if key.startswith('button'):
    #             button_clicked = key
    #             break



    if request.method == 'POST':
        # button_clicked = request.POST.get('button_clicked', '')
        # if button_clicked == 'button1':
            user_form = InputForm(request.POST)
            if user_form.is_valid() and 'button1' in request.POST:
                request.session['processing_form'] = True
                context['loading'] = True
                # print(user_form['edit_inputform'])
                first_name=user_form.cleaned_data['first_name']
                last_name=user_form.cleaned_data['last_name']
                phone_number=user_form.cleaned_data['phone_number']
                email_address=user_form.cleaned_data['email_address']
                address=user_form.cleaned_data['address']
                pincode=user_form.cleaned_data['pincode']
                city=user_form.cleaned_data['city']
                country=user_form.cleaned_data['country']
                native_language=user_form.cleaned_data['native_language']
                vision=user_form.cleaned_data['vision']
                user_profile_data = {}
                user_profile_data["username"] = username
                user_profile_data["language_preferences"] = []
                if (len(first_name)!=0): user_profile_data["first_name"]=first_name
                if (len(last_name)!=0): user_profile_data["last_name"]=last_name
                if (len(phone_number)!=0): user_profile_data["phone"]=phone_number
                if (len(email_address)!=0): user_profile_data["email"]=email_address
                if (len(address)!=0): user_profile_data["address"]=address
                if (len(pincode)!=0): user_profile_data["zip_code"]=pincode
                if (len(city)!=0): user_profile_data["city"]=city
                if (len(country)!=0): user_profile_data["country"]=country
                if (len(native_language)!=0): user_profile_data["native_language"]=native_language
                if (len(vision)!=0): user_profile_data["vision"]=vision
                userprofileurl = "https://100014.pythonanywhere.com/api/profile_update/"
                response = update(user_profile_data,userprofileurl, url)
                messages.success(request, 'User Info data updated successfully.')
                # return redirect(request, 'index.html', {'context': context}, using='base.html')
                return redirect(path,{'context': context})


        # if button_clicked == 'button2':
            set_password_form = SetpasswordForm(request.POST)
            if set_password_form.is_valid() and 'button2' in request.POST:
                context['loading'] = True
                username = set_password_form.cleaned_data['username']
                old_password = set_password_form.cleaned_data['old_password']
                new_password = set_password_form.cleaned_data['new_password']

                # if old_password != new_password:
                #     context['error_passwordmismatch'] = 'Passwords do not match.'
                #     return render(request, 'index.html', {'context': context})

                update_fields = {
                "username":username,
                "old_password":old_password,
                "new_password":new_password
                }

                url = 'https://100014.pythonanywhere.com/api/password_change/'
                # response = requests.post(url, json=update_fields,)
                response = update(update_fields,url)
                if response.status_code == 200:
                    messages.success(request, 'Password updated successfully!')
                    context['redirect_url'] = url
                else:
                    messages.error(request, "Password does not match")
                    return redirect(path,{'context': context})
                # else:
                #     return render(request, 'index.html', {'context':context})

        # if button_clicked == 'button3':
            Device_Id_form = DeviceIdForm(request.POST)
            if  Device_Id_form.is_valid() and 'button3' in request.POST:
                context['loading'] = True
                phone_id = Device_Id_form.cleaned_data['phone_id']
                brand_model = Device_Id_form.cleaned_data['brand_model']
                laptop_model = Device_Id_form.cleaned_data['laptop_model']
                tablet_model = Device_Id_form.cleaned_data['tablet_model']

                update_fields = {}
                if phone_id: update_fields['phone_id'] = phone_id
                if brand_model: update_fields['brand_model'] = brand_model
                if laptop_model: update_fields['laptop_model'] = laptop_model
                if tablet_model: update_fields['tablet_model'] = tablet_model


                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)
                        messages.success(request, f"Updated {key} successfully!")
                        # print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        messages.success(request, f"Inserted {key} successfully!")
                        # print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]

                # for key in update_fields:
                #     if key in res:
                #         update_data({key:update_fields[key]},username)
                #         print(f"updated this key: {key}")
                #     else:
                #         insert_data({key:update_fields[key]},username)
                #         print(f"inserted this key: {key}")

                # res = fetch_data(username)
                # context['user_data'] = res
                context['user_data'] = main_data
                context['user_data'] = main_data
                messages.success(request, 'Device Id data updated successfully.')
                # return redirect(request, 'index.html', {'context': context}, using='base.html')
                # return HttpResponseRedirect(path,'index.html',{'context': context})
                return redirect(path,{'context': context})


        # if button_clicked == 'button4':
            PersonalID_form = PersonalIDForm(request.POST, request.FILES)
            if PersonalID_form.is_valid() and 'button4' in request.POST:
                context['loading'] = True
                update_fields = {}
                if request.FILES.get('Voice_ID'):
                    Voice_ID = base64.b64encode(request.FILES.get('Voice_ID', b'').read()).decode()
                    update_fields['voice_id'] = Voice_ID
                if request.FILES.get('Face_ID'):
                    Face_ID = base64.b64encode(request.FILES.get('Face_ID', b'').read()).decode()
                    update_fields['face_id'] = Face_ID
                if request.FILES.get('Biometric_ID'):
                    Biometric_ID = base64.b64encode(request.FILES.get('Biometric_ID', b'').read()).decode()
                    update_fields['biometric_id'] = Biometric_ID
                if request.FILES.get('Video_ID'):
                    Video_ID = base64.b64encode(request.FILES.get('Video_ID', b'').read()).decode()
                    update_fields['video_id'] = Video_ID

                # f = request.FILES['Voice_ID']

                # converted_string = base64.b64encode(request.FILES['Voice_ID'])
                # print(converted_string)


                if request.FILES.get('ID_Card_1'):
                    ID_Card_1 = base64.b64encode(request.FILES.get('ID_Card_1', b'').read()).decode()
                    update_fields['id_card_1'] = ID_Card_1
                if request.FILES.get('ID_Card_2'):
                    ID_Card_2 = base64.b64encode(request.FILES.get('ID_Card_2', b'').read()).decode()
                    update_fields['id_card_2'] = ID_Card_2
                if request.FILES.get('ID_Card_3'):
                    ID_Card_3 = base64.b64encode(request.FILES.get('ID_Card_3', b'').read()).decode()
                    update_fields['id_card_3'] = ID_Card_3
                if request.FILES.get('ID_Card_4'):
                    ID_Card_4 = base64.b64encode(request.FILES.get('ID_Card_4', b'').read()).decode()
                    update_fields['id_card_4'] = ID_Card_4
                if request.FILES.get('ID_Card_5'):
                    ID_Card_5 = base64.b64encode(request.FILES.get('ID_Card_5', b'').read()).decode()
                    update_fields['id_card_5'] = ID_Card_5
                if request.FILES.get('Signature'):
                    Signature = base64.b64encode(request.FILES.get('Signature', b'').read()).decode()
                    update_fields['signature'] = Signature

                # Update PersonalID fields
                # update_fields = {
                #     'voice_id': Voice_ID,
                #     'face_id': Face_ID,
                #     'biometric_id': Biometric_ID,
                #     'video_id': Video_ID,
                #     'id_card_1': ID_Card_1,
                #     'id_card_2': ID_Card_2,
                #     'id_card_3': ID_Card_3,
                #     'id_card_4': ID_Card_4,
                #     'id_card_5': ID_Card_5,
                #     'signature': Signature
                # }

                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)

                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]

                context['user_data'] = main_data
                messages.success(request, 'Personal Id data updated successfully.')
                # return redirect(request, 'index.html', {'context': context}, )
                return redirect(path,{'context': context})

        # if button_clicked == 'button5':
            references_form = ReferencesProfileForm(request.POST, request.FILES)
            if references_form.is_valid() and 'button5' in request.POST:
                context['loading'] = True
                update_fields = {}
                if request.FILES.get('Linkedin'):
                    Linkedin_profile = base64.b64encode(request.FILES.get('Linkedin', b'').read()).decode()
                    update_fields['Linkedin'] = Linkedin_profile
                if request.FILES.get('facebook'):
                    facebook_profile = base64.b64encode(request.FILES.get('facebook', b'').read()).decode()
                    update_fields['facebook_profile'] = facebook_profile
                if request.FILES.get('Instagram'):
                    Instagram_profile = base64.b64encode(request.FILES.get('Instagram', b'').read()).decode()
                    update_fields['Instagram_profile'] =Instagram_profile
                if request.FILES.get('Twitter'):
                    Twitter_profile = base64.b64encode(request.FILES.get('Twitter', b'').read()).decode()
                    update_fields['Twitter_profile'] = Twitter_profile
                if request.FILES.get('Discord'):
                    Discord_profile = base64.b64encode(request.FILES.get('Discord', b'').read()).decode()
                    update_fields['Discord_profile'] = Discord_profile
                if request.FILES.get('Tiktok'):
                    Tiktok_profile = base64.b64encode(request.FILES.get('Tiktok', b'').read()).decode()
                    update_fields['Tiktok_profile'] = Tiktok_profile
                if request.FILES.get('Snapchat'):
                    Snapchat_profile = base64.b64encode(request.FILES.get('Snapchat', b'').read()).decode()
                    update_fields['Snapchat_profile'] = Snapchat_profile
                if request.FILES.get('Pinterest'):
                    Pinterest_profile = base64.b64encode(request.FILES.get('Pinterest', b'').read()).decode()
                    update_fields['Pinterest_profile'] = Pinterest_profile
                if request.FILES.get('Youtube'):
                    Youtube_profile = base64.b64encode(request.FILES.get('Youtube', b'').read()).decode()
                    update_fields['Youtube_profile'] = Youtube_profile
                if request.FILES.get('Whatsapp'):
                    Whatsapp_profile = base64.b64encode(request.FILES.get('Whatsapp', b'').read()).decode()
                    update_fields['Whatsapp_profile'] = Whatsapp_profile
                if request.FILES.get('Tumbir'):
                    Tumbir_profile = base64.b64encode(request.FILES.get('Tumbir', b'').read()).decode()
                    update_fields['Tumbir_profile'] = Tumbir_profile
                if request.FILES.get('Xing'):
                    Xing_profile = base64.b64encode(request.FILES.get('Xing', b'').read()).decode()
                    update_fields['Xing_profile'] = Xing_profile
                if request.FILES.get('Reddit'):
                    Reddit_profile = base64.b64encode(request.FILES.get('Reddit', b'').read()).decode()
                    update_fields['Reddit_profile'] = Reddit_profile
                if request.FILES.get('Academia'):
                    Academia_profile = base64.b64encode(request.FILES.get('Academia', b'').read()).decode()
                    update_fields['Academia_profile'] = Academia_profile

                Personal_Reference_1 = request.POST.get('Personal_Reference_1', '')
                Personal_Reference_2 = request.POST.get('Personal_Reference_2', '')
                Personal_Reference_3 = request.POST.get('Personal_Reference_3', '')
                Personal_Reference_4 = request.POST.get('Personal_Reference_4', '')
                Personal_Reference_5 = request.POST.get('Personal_Reference_5', '')


                # update_fields = {
                #     'Linkedin_profile': Linkedin_profile,
                #     'facebook_profile': facebook_profile,
                #     'Instagram_profile': Instagram_profile,
                #     'Twitter_profile': Twitter_profile,
                #     'Discord_profile': Discord_profile,
                #     'Tiktok_profile': Tiktok_profile,
                #     'Snapchat_profile': Snapchat_profile,
                #     'Pinterest_profile': Pinterest_profile,
                #     'Youtube_profile': Youtube_profile,
                #     'Whatsapp_profile': Whatsapp_profile,
                #     'Tumbir_profile': Tumbir_profile,
                #     'Xing_profile': Xing_profile,
                #     'Reddit_profile': Reddit_profile,
                #     'Academia_profile': Academia_profile,


            #         'Personal_Reference_1': Personal_Reference_1,
            #         'Personal_Reference_2': Personal_Reference_2,
            #         'Personal_Reference_3': Personal_Reference_3,
            #         'Personal_Reference_4': Personal_Reference_4,
            #         'Personal_Reference_5': Personal_Reference_5
            #     }

                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)

                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]

                context['user_data'] = main_data
                messages.success(request, 'Reference data updated successfully.')
                # return redirect(request, 'index.html', {'context': context})
                return redirect(path,{'context': context})


                # res = fetch_data(username)
                # if res and len(res) > 0:
                #     res = res[0]
                #     # Rest of the code that utilizes `res` goes here
                #     for key in update_fields:
                #         if key in res:
                #             update_data({key: update_fields[key]}, username)
                #             print(f"Updated this key: {key}")
                #         else:
                #             insert_data({key: update_fields[key]}, username)
                #             print(f"Inserted this key: {key}")
                # else:
                #     # Handle the case when `res` is empty or contains no elements
                #     # For example, you can display an error message or perform alternative actions
                #     print("Error: No data found for the given username")

        # if button_clicked == 'button6':
            verification_form = VerificationForm(request.POST)
            if verification_form.is_valid() and 'button6' in request.POST:
                context['loading'] = True
                Phone_verification_using_OTP_status = verification_form.cleaned_data['Phone_verification_using_OTP']
                Email_verification_using_OTP_status = verification_form.cleaned_data['Email_verification_using_OTP']
                Voice_Id_verification_status = verification_form.cleaned_data['Voice_Id_verification']
                Face_Id_verification_status = verification_form.cleaned_data['Face_Id_verification']
                Biometric_Id_verification_status = verification_form.cleaned_data['Biometric_Id_verification']
                Voice_Id_verification_status = verification_form.cleaned_data['Voice_Id_verification']
                Id_card_1_verification_status = verification_form.cleaned_data['Id_card_1_verification']
                Id_card_2_verification_status = verification_form.cleaned_data['Id_card_2_verification']
                Id_card_3_verification_status = verification_form.cleaned_data['Id_card_3_verification']
                Id_card_4_verification_status = verification_form.cleaned_data['Id_card_4_verification']
                Id_card_5_verification_status = verification_form.cleaned_data['Id_card_5_verification']
                Signature_verification_status = verification_form.cleaned_data['Signature_verification']
                Socialmedia_profile_verification_status = verification_form.cleaned_data['Socialmedia_profile_verification']
                Personal_reference_verification_status = verification_form.cleaned_data['Personal_reference_verification']
                Personal_verification_by_witness_verification_status = verification_form.cleaned_data['Personal_verification_by_witness_verification']


                update_fields = {
                    'Phone_verification_using_OTP': Phone_verification_using_OTP_status,
                    'Email_verification_using_OTP': Email_verification_using_OTP_status,
                    'Voice_Id_verification': Voice_Id_verification_status,
                    'Face_Id_verification': Face_Id_verification_status,
                    'Biometric_Id_verification': Biometric_Id_verification_status,
                    'Voice_Id_verification': Voice_Id_verification_status,
                    'Id_card_1_verification': Id_card_1_verification_status,
                    'Id_card_2_verification': Id_card_2_verification_status,
                    'Id_card_3_verification': Id_card_3_verification_status,
                    'Id_card_4_verification': Id_card_4_verification_status,
                    'Id_card_5_verification': Id_card_5_verification_status,
                    'Signature_verification': Signature_verification_status,
                    'Socialmedia_profile_verification': Socialmedia_profile_verification_status,
                    'Personal_reference_verification': Personal_reference_verification_status,
                    'Personal_verification_by_witness_verification': Personal_verification_by_witness_verification_status
                }

                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)

                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]
                # for key in update_fields:
                #     if key in res:
                #         update_data({key:update_fields[key]},username)
                #         print(f"updated this key: {key}")
                #     else:
                #         insert_data({key:update_fields[key]},username)
                #         print(f"inserted this key: {key}")

                # res = fetch_data(username)
                context['user_data'] = main_data
                messages.success(request, 'Verification data updated successfully.')
                # return render(request, 'index.html', {'context': context})
                return redirect(path,{'context': context})

        # if button_clicked == 'button7':
            Organization_form = OrganizationForm(request.POST, request.FILES)
            if Organization_form.is_valid() and 'button7' in request.POST:
                context['loading'] = True
                Your_Organization_Name = request.POST.get('Your_Organization_Name')
                Organization_Address = request.POST.get('Organization_Address')
                PINCODE = request.POST.get('PINCODE')
                city_of_your_Organization = request.POST.get('city_of_your_Organization')
                country_of_your_organization = request.POST.get('country_of_your_organization')
                Latitude_of_Organization = request.POST.get('Latitude_of_Organization')
                Longitude_of_Organization = request.POST.get('Longitude_of_Organization')
                Organization_logo = request.FILES.get('Organization_logo')
                Upload_new_logo = request.FILES.get('Upload_new_logo')

                organization_data = {
                    'Your_Organization_Name': Your_Organization_Name,
                    'Organization_Address': Organization_Address,
                    'PINCODE': PINCODE,
                    'city_of_your_Organization': city_of_your_Organization,
                    'country_of_your_organization': country_of_your_organization,
                    'Latitude_of_Organization': Latitude_of_Organization,
                    'Longitude_of_Organization': Longitude_of_Organization,
                }

                files = {}
                if Organization_logo:
                    files['Organization_logo'] = Organization_logo
                if Upload_new_logo:
                    files['Upload_new_logo'] = Upload_new_logo

                # session_id = request.GET.get('session_id')
                url = 'https://100014.pythonanywhere.com/api/profile_update/'
                response = update(organization_data, files, url)
                messages.success(request, 'Organization data updated successfully.')
                return redirect(path,{'context': context})


        # if button_clicked == 'button8':
            Geographical_form = GeographicalForm(request.POST)
            if Geographical_form.is_valid() and 'button8' in request.POST:
                context['loading'] = True
                country = Geographical_form.cleaned_data['country']
                city = Geographical_form.cleaned_data['city']
                latitude = Geographical_form.cleaned_data['latitude']
                longitude = Geographical_form.cleaned_data['longitude']
                region = Geographical_form.cleaned_data['region']
                others_Geographical = Geographical_form.cleaned_data['others_Geographical']

                update_fields = {}
                if country: update_fields['country'] = country
                if city: update_fields['city'] = city
                if latitude: update_fields['latitude'] = latitude
                if longitude: update_fields['longitude'] = longitude
                if region: update_fields['region'] = region
                if others_Geographical: update_fields['others_Geographical'] = others_Geographical

                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)

                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]

                # Update or insert data
                # res = fetch_data(username)
                # for key in update_fields:
                #     if key in res:
                #         update_data({key:update_fields[key]}, username)
                #         print(f"Updated this key: {key}")
                #     else:
                #         insert_data({key:update_fields[key]}, username)
                #         print(f"Inserted this key: {key}")

                # res = fetch_data(username)
                csrf_token = csrf.get_token(request)
                context = {'csrf_token': csrf_token}
                context['user_data'] = main_data
                messages.success(request, 'Geographical data updated successfully.')
                return redirect(path,{'context': context})


        # if button_clicked == 'button9':
            Demographic_form = DemographicProfileForm(request.POST)
            if Demographic_form.is_valid() and 'button9' in request.POST:
                context['loading'] = True
                income_class = Demographic_form.cleaned_data['income_class']
                date_of_birth = Demographic_form.cleaned_data['date_of_birth']
                gender = Demographic_form.cleaned_data['gender']
                parental_status = Demographic_form.cleaned_data['PARENTAL_STATUS']
                education = Demographic_form.cleaned_data['YOUR_EDUCATION']
                occupation = Demographic_form.cleaned_data['YOUR_OCCUPATION']
                family_size = Demographic_form.cleaned_data['FAMILY_SIZE']
                others_demographic = Demographic_form.cleaned_data['OTHERS']

                update_fields = {}
                if income_class: update_fields['income_class'] = income_class
                if date_of_birth: update_fields[' date_of_birth'] = date_of_birth
                if gender: update_fields['gender'] = gender
                if parental_status: update_fields ['parental_status'] = parental_status
                if education: update_fields ['education'] = education
                if occupation: update_fields ['occupation'] = occupation
                if family_size: update_fields ['family_size'] = family_size
                if others_demographic: update_fields ['others_demographic'] = others_demographic

                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)

                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]

                # for key in update_fields:
                #     if key in res:
                #         update_data({key:update_fields[key]},username)
                #         print(f"updated this key: {key}")
                #     else:
                #         insert_data({key:update_fields[key]},username)
                #         print(f"inserted this key: {key}")

                # res = fetch_data(username)
                context['user_data'] = main_data
                messages.success(request, 'Demographic data updated successfully.')
                response = update(update_fields, url)
                return redirect(path,{'context': context})




                # for key in update_fields:
                #     if key in res:
                #         update_data({key: update_fields[key]}, username)
                #         print(f"Updated this key: {key}")
                #     else:
                #         insert_data({key: update_fields[key]}, username)
                #         print(f"Inserted this key: {key}")



        # if button_clicked == 'button10':
            Psychographic_form = PsychographicProfileForm(request.POST)
            if Psychographic_form.is_valid() and 'button10' in request.POST:
                context['loading'] = True
                Life_Style = Psychographic_form.cleaned_data['Your_Life_Style']
                IQ_Level = Psychographic_form.cleaned_data['Your_IQ_level']
                Your_Attitude = Psychographic_form.cleaned_data['Your_Attitude']
                Your_Personality = Psychographic_form.cleaned_data['Your_Personality']
                Others = Psychographic_form.cleaned_data['Others']

                update_fields = {}
                if Life_Style: update_fields['Life_Style'] = Life_Style
                if IQ_Level: update_fields['IQ_Level'] = IQ_Level
                if Your_Attitude: update_fields['Your_Attitude'] = Your_Attitude
                if Your_Personality : update_fields['Your_Personality'] = Your_Personality
                if Others: update_fields['Others_psychographic'] = Others

                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)

                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]

                # res = fetch_data(user_id)
                # for key in update_fields:
                #     if key in res:
                #         update_data({key:update_fields[key]}, user_id)
                #         print(f"Updated this key: {key}")
                #     else:
                #         insert_data({key:update_fields[key]}, user_id)
                #         print(f"Inserted this key: {key}")

                # res = fetch_data(user_id)
                context['user_data'] = main_data
                messages.success(request, 'Psychograhic data updated successfully.')
                return redirect(path,{'context': context})

        # if button_clicked == 'button11':
            Behaviour_form = BehaviourForm(request.POST)
            if Behaviour_form.is_valid() and 'button11' in request.POST:
                context['loading'] = True
                benefits = Behaviour_form.cleaned_data['benefits']
                role = Behaviour_form.cleaned_data['role']
                brand_loyalty = Behaviour_form.cleaned_data['brand_loyalty']
                others_behaviour = Behaviour_form.cleaned_data['others']

                update_fields = {}
                if benefits: update_fields['benefits'] = benefits
                if role: update_fields['role'] = role
                if brand_loyalty: update_fields['brand_loyalty'] = brand_loyalty
                if others_behaviour: update_fields['others_behaviour'] = others_behaviour

                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)

                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]
                # for key in update_fields:
                #     if key in res:
                #         update_data({key:update_fields[key]},username)
                #         print(f"updated this key: {key}")
                #     else:
                #         insert_data({key:update_fields[key]},username)
                #         print(f"inserted this key: {key}")

                # res = fetch_data(username)
                context['user_data'] = main_data
                messages.success(request, 'Behavioural data updated successfully.')
                return redirect(path,{'context': context})

        # if button_clicked == 'button12':
            Usage_form = UsageProfileForm(request.POST)
            if Usage_form.is_valid() and 'button12' in request.POST:
                context['loading'] = True
                usage_rate = Usage_form.cleaned_data['usage_rate']
                awareness = Usage_form.cleaned_data['awareness']
                purpose = Usage_form.cleaned_data['purpose']
                others_usage = Usage_form.cleaned_data['others']

                update_fields = {}
                if usage_rate: update_fields['usage_rate'] = usage_rate
                if awareness: update_fields['role'] = awareness
                if purpose: update_fields['purpose'] = purpose
                if others_usage: update_fields['others_usage'] = others_usage


                for key in update_fields:
                    test_res = [d[key] for d in res['data'] if key in d]
                    if len(test_res):
                        update_data({key:update_fields[key]},username)
                        print(f"updated this key: {key}")
                    else:
                        insert_data({key:update_fields[key]},username)
                        print(f"inserted this key: {key}")
                    main_data['key'] = update_fields[key]
                # for key in update_fields:
                #     if key in res:
                #         update_data({key:update_fields[key]},username)
                #         print(f"updated this key: {key}")
                #     else:
                #         insert_data({key:update_fields[key]},username)
                #         print(f"inserted this key: {key}")

                # res = fetch_data(username)
                context['user_data'] = main_data
                messages.success(request, 'Usage data updated successfully.')
                return render(request, 'index.html', {'context': context})
                # render the response
            return redirect(path,{'context': context})

            # context['show_loading'] = False

    else:

        return render(request, 'index.html', {'context':context})



# def set_password(request):
#     api_url = "https://100093.pythonanywhere.com/api/userinfo/"
#     myobj = {'session_id': '36ht78fmzfzgovk1lq5rqeozkpees1qi'}
#     response = requests.post(api_url, json=myobj)
#     data = response.json()
#     user_profile = data['userinfo']
#     url = "http://100002.pythonanywhere.com/"
#     user_id = user_profile['userID']
#     if request.method == 'POST':
#             form = SetpasswordForm(request.POST)
#             if form.is_valid():
#                 password = form.cleaned_data['password']
#                 confirm_password = form.cleaned_data['confirm_password']

#                 if password != confirm_password:
#                     return render(request, 'set_password.html', {'form': form, 'error': 'Passwords do not match.'})

#                 update_fields = {"password": password}

#                 payload = json.dumps({
#                     "cluster": "login",
#                     "database": "login",
#                     "collection": "user_profile",
#                     "document": "user_profile",
#                     "team_member_ID": "1168",
#                     "function_ID": "ABCDE",
#                     "command": "update",
#                     "field": {
#                         "userID": user_id
#                     },
#                     "update_field": {
#                         "password": password
#                     },
#                     "platform": "bangalore"
#                 })

#                 headers = {
#                     'Content-Type': 'application/json'
#                 }

#                 response = requests.post(url, headers=headers, data=payload)

#                 response_obj = json.loads(response.text)

#             if response.status_code == 200:
#                 return render(request, 'set_password.html', {'form': form, 'success': 'Password set successfully.'})
#             else:
#                 return render(request, 'set_password.html', {'form': form, 'error': 'Error setting password.'})
#     else:
#         form = SetpasswordForm()

#     return render(request, 'set_password.html', {'form': form})



# def Organization_View(request):
#     url = 'http://100002.pythonanywhere.com/'
#     # If the request method is POST, it means that the user has submitted the form
#     if request.method == 'POST':
#         # Create an instance of the OrganizationForm with the data received in the request
#         form = OrganizationForm(request.POST, request.FILES)
#         # If the form is valid, get the cleaned data from the form
#         if form.is_valid():
#             Your_Organization_Name= form.cleaned_data['Your_Organization_Name']
#             Organization_Address = form.cleaned_data['Organization_Address']
#             PINCODE = form.cleaned_data['PINCODE']
#             city_of_your_Organization = form.cleaned_data['city_of_your_Organization']
#             country_of_your_organization = form.cleaned_data['country_of_your_organization']
#             Organization_logo = form.cleaned_data['Organization_logo']
#             Upload_new_logo = form.cleaned_data['Upload_new_logo']
#             Latitude_of_Organization = form.cleaned_data['Latitude_of_Organization']
#             Longitude_of_Organization = form.cleaned_data['Longitude_of_Organization']

#             # Create a dictionary with the form data to be saved to the database
#             organization_data = {
#                 'Your_Organization_Name': Your_Organization_Name,
#                 'Organization_Address': Organization_Address,
#                 'PINCODE': PINCODE,
#                 'city_of_your_Organization': city_of_your_Organization,
#                 'country_of_your_organization': country_of_your_organization,
#                 'Organization_logo': Organization_logo,
#                 'Upload_new_logo': Upload_new_logo,
#                 'Latitude_of_Organization': Latitude_of_Organization,
#                 'Latitude_of_Organization': Longitude_of_Organization,
#             }

#             user_id = ['userID']

#             payload= json.dumps({
#             "cluster": "login",
#             #   "platform": platform,
#             "database": "login",
#             "collection": "user_profile",
#             "document": "user_profile",
#             "team_member_ID": "1168",
#             "function_ID": "ABCDE",
#             "command": "update",
#             "field": {
#                 "userID": user_id
#                 },
#             "update_field":"update_field"
#             })
#             headers = {'content-type': 'application/json'}
#             response = requests.request('POST',url, headers=headers,data=payload)
#             print(response.text)

#             # Save the organization data to the database
#             # implementation may vary depending on database setup

#             # Return a success message to the user
#             return HttpResponse('Organization added successfully.')
#     else:
#         # If the request method is GET, it means that the user wants to view the form
#         form = OrganizationForm()
#     # Render the form template with the form object
#     return render(request, 'organization.html', {'form': form})



# @method_decorator(csrf_exempt, name='dispatch')

# class PersonalIDView(View):
#     def get(self, request):
#         form = PersonalIDForm()
#         return render(request, 'personal_id.html', {'form':form})


#     def post(self, request):
#         form = PersonalIDForm(request.POST, request.FILES)

#         if not form.is_valid():
#             # Handle form validation errors
#             Voice_ID = request.POST.get('voice_id')
#             Face_ID = request.POST.get('face_id')
#             Biometric_ID = request.POST.get('biometric_id')
#             Video_ID = request.POST.get('video_id')

#             with open(request.FILES['id_card_1'].name, 'rb') as id_card_file:
#                 ID_Card_1 = base64.b64encode(id_card_file.read()).decode()

#             with open(request.FILES['id_card_2'].name, 'rb') as id_card_file:
#                 ID_Card_2 = base64.b64encode(id_card_file.read()).decode()

#             with open(request.FILES['id_card_3'].name, 'rb') as id_card_file:
#                 ID_Card_3 = base64.b64encode(id_card_file.read()).decode()

#             with open(request.FILES['id_card_4'].name, 'rb') as id_card_file:
#                 ID_Card_4 = base64.b64encode(id_card_file.read()).decode()

#             with open(request.FILES['id_card_5'].name, 'rb') as id_card_file:
#                 ID_Card_5 = base64.b64encode(id_card_file.read()).decode()

#             with open(request.FILES['signature'].name, 'rb') as signature_file:
#                 Signature = base64.b64encode(signature_file.read()).decode()

#             user_id = ['_id']
#             data = {
#                 'voice_id': Voice_ID,
#                 'face_id': Face_ID,
#                 'biometric_id': Biometric_ID,
#                 'video_id': Video_ID,
#                 'id_card_1': ID_Card_1,
#                 'id_card_2': ID_Card_2,
#                 'id_card_3': ID_Card_3,
#                 'id_card_4': ID_Card_4,
#                 'id_card_5': ID_Card_5,
#                 'signature': Signature
#             }

#             # Encode data as base64 string


#             # Create payload with encoded data
#             payload = json.dumps({
#                 "cluster": "login",
#                 "database": "login",
#                 "collection": "user_profile",
#                 "document": "user_profile",
#                 "team_member_ID": "1168",
#                 "function_ID": "ABCDE",
#                 "command": "update",
#                 "field": {
#                     "_id": user_id
#                     },
#                 "update_field": {**data},
#                 "platform": "bangalore"
#             })

#             url = 'http://100002.pythonanywhere.com/'
#             headers = {'Content-Type': 'application/json'}
#             response = requests.request('POST', url, headers=headers, data=payload)
#             return HttpResponse(error_msg, status=400)
#         if response.status_code == 200:
#             return HttpResponse('Form submission successful!')
#             # Handle server errors
#         else:
#             error_msg = 'Error!'
#             return HttpResponse(error_msg, status=response.status_code)

# class DemographicProfileView(View):
#     def get(self, request):
#         form = DemographicProfileForm()
#         return render(request, 'demographic_profile.html', {'form': form})

#     def post(self, request):
#         form = DemographicProfileForm(request.POST)

#         if form.is_valid():
#             income_class : form.cleaned_data['income_class']
#             date_of_birth : str(form.cleaned_data['date_of_birth'])
#             gender: form.cleaned_data['gender']
#             parental_status: form.cleaned_data['parental_status']
#             education: form.cleaned_data['education']
#             occupation: form.cleaned_data['occupation']
#             family_size: form.cleaned_data['family_size']
#             others: form.cleaned_data['others']

#             user_id = ['_id']
#             payload = json.dumps({
#                 'cluster': 'login',
#                 'database': 'login',
#                 'collection': 'demographic_profile',
#                 'document': 'demographic_profile',
#                 'team_member_ID': '1168',
#                 'function_ID': 'ABCDE',
#                 'command': 'update',
#                 'update_field': {

#                     'income_class': income_class,
#                     'date_of_birth': date_of_birth,
#                     'gender': gender,
#                     'parental_status': parental_status,
#                     'education': education,
#                     'occupation': occupation,
#                     'family_size': family_size,
#                     'others': others
#                     },
#                     "field": {"_id": user_id},
#                     "platform": "bangalore"
#             }),
#             headers = {
#                 'Content-Type': 'application/json'
#             }

#             response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=payload)

#             if response.status_code == 200:
#                 return HttpResponse('Form submission successful!')
#             else:
#                 return HttpResponse('Error submitting form')
#         else:
#             return render(request, 'demographic_profile.html', {'form': form})

# class GeographicalView(View):
#     def get(self, request):
#         # Render the form for users to input their geographical information
#         form = GeographicalForm()
#         return render(request, 'geographical.html', {'form': form})

#     def post(self, request):
#         # Handle form submission
#         form = GeographicalForm(request.POST)
#         if form.is_valid():
#             # Gettng the form data
#             country = form.cleaned_data['country']
#             city = form.cleaned_data['city']
#             latitude = form.cleaned_data['latitude']
#             longitude = form.cleaned_data['longitude']
#             region = form.cleaned_data['region']
#             others = form.cleaned_data['others']

#             # Creating the payload data
#             user_id = ['_id']
#             payload_data = {
#                 "cluster": "login",
#                 "database": "login",
#                 "collection": "geographical_profile",
#                 "document": "geographical_profile",
#                 "team_member_ID": "1168",
#                 "function_ID": "ABCDE",
#                 "command": "upadate",
#                 "update_field":{

#                         "country": country,
#                         "city": city,
#                         "latitude": latitude,
#                         "longitude": longitude,
#                         "region": region,
#                         "others": others,

#                 },
#                 "field": {"_id": user_id},
#                 "platform": "bangalore"
#             }

#             # Converting the payload data to JSON in the field is very neccessary
#             payload = json.dumps(payload_data)

#             # Setting the headers
#             headers = {
#                 'Content-Type': 'application/json'
#             }

#             # Making the API request
#             url = "http://100002.pythonanywhere.com/"
#             response = requests.post(url, headers=headers, data=payload)

#             if response.status_code == 200:
#                 # Redirect to a success page
#                 return HttpResponse('Organization added successfully.')
#             else:
#                 # If the API request fails, render the form again with an error message
#                 form.add_error(None, 'Failed to submit form. Please try again later.')
#                 return render(request, 'geographical.html', {'form': form})
#         else:
#             # If the form is not valid, render the form again with error messages.
#             return render(request, 'geographical.html', {'form': form})

# PersonalID_form = PersonalIDForm(request.POST, request.FILES)
            # if PersonalID_form.is_valid():
            #     Voice_ID = request.POST.get('voice_id')
            #     Face_ID = request.POST.get('face_id')
            #     Biometric_ID = request.POST.get('biometric_id')
            #     Video_ID = request.POST.get('video_id')

            #     with open(request.FILES['id_card_1'].name, 'rb') as id_card_file:
            #         ID_Card_1 = base64.b64encode(id_card_file.read()).decode()

            #     with open(request.FILES['id_card_2'].name, 'rb') as id_card_file:
            #         ID_Card_2 = base64.b64encode(id_card_file.read()).decode()

            #     with open(request.FILES['id_card_3'].name, 'rb') as id_card_file:
            #         ID_Card_3 = base64.b64encode(id_card_file.read()).decode()

            #     with open(request.FILES['id_card_4'].name, 'rb') as id_card_file:
            #         ID_Card_4 = base64.b64encode(id_card_file.read()).decode()

            #     with open(request.FILES['id_card_5'].name, 'rb') as id_card_file:
            #         ID_Card_5 = base64.b64encode(id_card_file.read()).decode()

            #     with open(request.FILES['signature'].name, 'rb') as signature_file:
            #         Signature = base64.b64encode(signature_file.read()).decode()


            #     update_fields = {
            #         'voice_id': Voice_ID,
            #         'face_id': Face_ID,
            #         'biometric_id': Biometric_ID,
            #         'video_id': Video_ID,
            #         'id_card_1': ID_Card_1,
            #         'id_card_2': ID_Card_2,
            #         'id_card_3': ID_Card_3,
            #         'id_card_4': ID_Card_4,
            #         'id_card_5': ID_Card_5,
            #         'signature': Signature
            #     }

            #     for key in update_fields:
            #         if key in res:
            #             update_data({key:update_fields[key]},user_id)
            #             print(f"updated this key: {key}")
            #         else:
            #             insert_data({key:update_fields[key]},user_id)
            #             print(f"inserted this key: {key}")

            #     res = fetch_data(user_id)
            #     context['user_data'] = res

            #     return render(request, 'index.html', {'context': context})



            # References_form = ReferencesProfileForm(request.POST, request.FILES)
            # with open(request.FILES['Linkedin'].name, 'rb') as id_card_file:
            #     Linkedin_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['facebook'].name, 'rb') as id_card_file:
            #     facebook_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Instagram'].name, 'rb') as id_card_file:
            #     Instagram_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Twitter'].name, 'rb') as id_card_file:
            #     Twitter_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Discord'].name, 'rb') as id_card_file:
            #     Discord_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Tiktok'].name, 'rb') as id_card_file:
            #     Tiktok_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Snapchat'].name, 'rb') as id_card_file:
            #     Snapchat_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Pinterest'].name, 'rb') as id_card_file:
            #     Pinterest_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Youtube'].name, 'rb') as id_card_file:
            #     Youtube_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Whatsapp'].name, 'rb') as id_card_file:
            #     Whatsapp_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Tumbir'].name, 'rb') as id_card_file:
            #     Tumbir_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Xing'].name, 'rb') as id_card_file:
            #     Xing_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Reddit'].name, 'rb') as id_card_file:
            #     Reddit_profile = base64.b64encode(id_card_file.read()).decode()
            # with open(request.FILES['Academia'].name, 'rb') as id_card_file:
            #     Academia_profile = base64.b64encode(id_card_file.read()).decode()

            # Personal_Reference_1 = request.POST.get('Personal_Reference_1', '')
            # Personal_Reference_2 = request.POST.get('Personal_Reference_2', '')
            # Personal_Reference_3 = request.POST.get('Personal_Reference_3', '')
            # Personal_Reference_4 = request.POST.get('Personal_Reference_4', '')
            # Personal_Reference_5 = request.POST.get('Personal_Reference_5', '')

            # update_fields = {
            # 'Linkedin_profile': Linkedin_profile,
            # 'facebook_profile': facebook_profile,
            # 'Instagram_profile': Instagram_profile,
            # 'Twitter_profile': Twitter_profile,
            # 'Discord_profile': Discord_profile,
            # 'Tiktok_profile': Tiktok_profile,
            # 'Snapchat_profile': Snapchat_profile,
            # 'Pinterest_profile': Pinterest_profile,
            # 'Youtube_profile': Youtube_profile,
            # 'Whatsapp_profile': Whatsapp_profile,
            # 'Tumbir_profile': Tumbir_profile,
            # 'Xing_profile': Xing_profile,
            # 'Reddit_profile': Reddit_profile,
            # 'Academia_profile': Academia_profile,
            # 'Personal_Reference_1': Personal_Reference_1,
            # 'Personal_Reference_2': Personal_Reference_2,
            # 'Personal_Reference_3': Personal_Reference_3,
            # 'Personal_Reference_4': Personal_Reference_4,
            # 'Personal_Reference_5': Personal_Reference_5,
            # }

            # for key, value in update_fields.items():
            #     if key in res:
            #         update_data({key: value}, user_id)
            #         print(f"Updated this key: {key}")
            #     else:
            #         insert_data({key: value}, user_id)
            #         print(f"Inserted this key: {key}")

            # res = fetch_data(user_id)
            # context['user_data'] = res

            # return render(request, 'index.html', {'context': context})


# class BehaviourProfile(View):
#     def get(self, request):
#         form = BehaviourForm()
#         return render(request, 'behaviourprofile.html', {'form': form})

#     def post(self, request):
#         form = BehaviourForm(request.POST)
#         if form.is_valid():
#             benefits = form.cleaned_data['benefits']
#             role = form.cleaned_data['role']
#             brand_loyalty = form.cleaned_data['brand_loyalty']
#             others = form.cleaned_data['others']

#             user_id = ['_id']
#             payload = json.dumps({
#                 "cluster": "login",
#                 "database": "login",
#                 "collection": "behaviour_profile",
#                 "document": "behaviour_profile",
#                 "team_member_ID": "1168",
#                 "function_ID": "ABCDE",
#                 "command": "update",
#                 "update_field": {

#                         "benefits": benefits,
#                         "role": role,
#                         "brand_loyalty": brand_loyalty,
#                         "others": others

#                 },
#                 "field": {"_id": user_id},
#                 "platform": "bangalore"
#             })

#             headers = {
#                 'Content-Type': 'application/json'
#             }

#             response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=payload)

#             if response.status_code == 200:
#                 return HttpResponse('Form submission successful!')
#             else:
#                 return HttpResponse('Error submitting form')
#         else:
#             return render(request, 'behaviourprofile.html', {'form': form})

# class UsageProfileView(View):
#     def get(self, request):
#         form = UsageProfileForm()
#         return render(request, 'usage_profile.html', {'form': form})

#     def post(self, request):
#         form = UsageProfileForm(request.POST)
#         if form.is_valid():
#             usage_rate = form.cleaned_data['usage_rate']
#             awareness = form.cleaned_data['awareness']
#             purpose = form.cleaned_data['purpose']
#             others = form.cleaned_data['others']

#             user_id = ['_id']
#             payload = {
#                 "cluster": "login",
#                 "database": "login",
#                 "collection": "usage_profile",
#                 "document": "usage_profile",
#                 "team_member_ID": "1168",
#                 "function_ID": "ABCDE",
#                 "command": "update",
#                 "update_field": {

#                         "usage_rate": usage_rate,
#                         "awareness": awareness,
#                         "purpose": purpose,
#                         "others": others,

#                 },
#                 "field": {"_id": user_id},
#                 "platform": "bangalore"
#             }

#             headers = {
#                 'Content-Type': 'application/json'
#             }

#             response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=json.dumps(payload))

#             if response.status_code == 200:
#                 return HttpResponse('Form submission successful!')
#             else:
#                 return HttpResponse('Form submission failed!')
#         else:
#             return render(request, 'usage_profile.html', {'form': form})
=======
def update_document(collection, document_id, update_fields):
    api_url = "https://100093.pythonanywhere.com/api/userinfo/"
    myobj = { 'session_id': '963qyami9rw70l7fm0kvsv0doiu7c9ej'}
    response = requests.post(api_url,json = myobj)
    data = response.json()
    user_profile = data['userinfo']
    user_id = user_profile['userID']
    
    payload = json.dumps({
        "cluster": "login",
        "database": "login",
        "collection": collection,
        "document": document_id,
        "team_member_ID": "1168",
        "function_ID": "ABCDE",
        "command": "update",
        "field": {
            "_id": user_id
        },
        "update_field": update_fields,
        "platform": "bangalore"
    })

    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=payload)

    response_obj = json.loads(response.text)

    if response_obj['status'] == 'success':
        return True
    else:
        return False



def update_user(request):
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():      
            user_id = user_id()
            api_url = f"https://100093.pythonanywhere.com/api/user/{user_id}/"
            myobj = { 'session_id': '963qyami9rw70l7fm0kvsv0doiu7c9ej'}
            response = requests.post(api_url,json = myobj)
            data = response.json()
            user_profile = data['user']

            user_profile['firstName'] = form.cleaned_data['first_name']
            user_profile['lastName'] = form.cleaned_data['last_name']
            user_profile['email'] = form.cleaned_data['email']
            
            payload = json.dumps({
                "cluster": "login",
                "database": "login",
                "collection": "user_profile",
                "document": "user_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "field": {
                    "_id": user_id
                },
                "update_field": user_profile,
                "platform": "bangalore"
            })

            headers = {
                'Content-Type': 'application/json'
            }

            response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=payload)

            response_obj = json.loads(response.text)
            
            if response.status_code == 200:
                return render(request, 'update_user.html', {'form': form, 'success': 'Profile updated successfully.'})
            else:
                return render(request, 'update_user.html', {'form': form, 'error': 'Error updating profile.'})
    else:
        user_id = user_id()
        api_url = f"https://100093.pythonanywhere.com/api/user/{user_id}/"


# @login_required(login_url='https://100014.pythonanywhere.com/en/')
def user_profile(request):
    # session_id = request.GET['session_id']
    api_url = "https://100093.pythonanywhere.com/api/userinfo/"
    myobj = { 'session_id': '963qyami9rw70l7fm0kvsv0doiu7c9ej'}
    response = requests.post(api_url,json = myobj)
    data = response.json()
    user_profile = data['userinfo']
    url = "http://100002.pythonanywhere.com/"
    user_id = user_profile['userID']

    if request.method == 'POST':

        if 'edit_inputform' in request.POST:
            form = InputForm(request.POST)
            if form.is_valid():
                first_name=form.cleaned_data['first_name']
                last_name=form.cleaned_data['last_name']
                phone_number=form.cleaned_data['phone_number']
                email_address=form.cleaned_data['email_address']
                address=form.cleaned_data['address']
                pincode=form.cleaned_data['pincode']
                location=form.cleaned_data['location']

                payload = json.dumps({
                "cluster": "login",
                "database": "login",
                "collection": "user_profile",
                "document": "user_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "field": {
                    #identify username or id
                    "_id":user_id
                },
                "update_field": {
                    "order_nos": 21,
                    "profile": {
                        "first_name": first_name,
                        "last_name": last_name,
                        "phone number": phone_number,
                        "email": email_address,
                        "address": address,
                        "pincode": pincode,
                        "location": location
                    },
                },
                "platform": "bangalore"
                })

                headers = {
                'Content-Type': 'application/json'
                }

                response = requests.request("POST", url, headers=headers, data=payload)
                print(response.text)
                print("hi")
        if 'edit_deviceidform' in request.POST:
            device_id_form = DeviceIdForm(request.POST)
            if  device_id_form.is_valid():
                phone_id = device_id_form.cleaned_data['phone_id']
                brand_model = device_id_form.cleaned_data['brand_model']
                laptop_model = device_id_form.cleaned_data['laptop_model']
                tablet_model = device_id_form.cleaned_data['tablet_model']
                payload = json.dumps({
                "cluster": "login",
                "database": "login",
                "collection": "user_profile",
                "document": "user_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "field": {
                     "_id":user_id
                },
                "update_field": {
                    "order_nos": 21
                },
                "platform": "bangalore"
                })

                headers = {
                'Content-Type': 'application/json'
                }

                response = requests.request("POST", url, headers=headers, data=payload)
        # context ={}
        # context['form']= InputForm()
        # context['device_id']=DeviceIdForm()
        form = InputForm()
        return render(request, "index.html",{'form':form,'user_profile':user_profile})


        return HttpResponse('Form submission successful!')

    else:
        form = InputForm()
        # context ={}

        # context['form']= InputForm()
        # context['device_id']=DeviceIdForm()
        return render(request, 'index.html', {'user_profile':user_profile,'form':form})


def update_password(user_id, password):
   
    payload = json.dumps({
        "cluster": "login",
        "database": "login",
        "collection": "user_profile",
        "document": "user_profile",
        "team_member_ID": "1168",
        "function_ID": "ABCDE",
        "command": "update",
        "field": {
            "_id": user_id
        },
        "update_field": {
            "password": password
        },
        "platform": "bangalore"
    })

    headers = {
        'Content-Type': 'application/json'
    }
    
    response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=payload)
    response_obj = json.loads(response.text)
    return response_obj['status']

def set_password(request):
    api_url = "https://100093.pythonanywhere.com/api/userinfo/"
    myobj = {'session_id': '963qyami9rw70l7fm0kvsv0doiu7c9ej'}
    response = requests.post(api_url, json=myobj)
    data = response.json()
    user_profile = data['userinfo']
    url = "http://100002.pythonanywhere.com/"
    user_id = user_profile['userID']
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():
            password = form.cleaned_data['password']
            confirm_password = form.cleaned_data['confirm_password']

            if password != confirm_password:
                return render(request, 'set_password.html', {'form': form, 'error': 'Passwords do not match.'})

            update_fields = {"password": password}

            payload = json.dumps({
                "cluster": "login",
                "database": "login",
                "collection": "user_profile",
                "document": "user_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "field": {
                    "_id": user_id
                },
                "update_field": {
                    "password": password
                },
                "platform": "bangalore"
            })

            headers = {
                'Content-Type': 'application/json'
            }

            response = requests.post(url, headers=headers, data=payload)

            response_obj = json.loads(response.text)

            if response.status_code == 200:
                return render(request, 'set_password.html', {'form': form, 'success': 'Password set successfully.'})
            else:
                return render(request, 'set_password.html', {'form': form, 'error': 'Error setting password.'})
    else:
        form = InputForm()

    return render(request, 'set_password.html', {'form': form})



def Organization_View(request):
    url = 'http://100002.pythonanywhere.com/'
    # If the request method is POST, it means that the user has submitted the form
    if request.method == 'POST':
        # Create an instance of the OrganizationForm with the data received in the request
        form = OrganizationForm(request.POST, request.FILES)
        # If the form is valid, get the cleaned data from the form
        if form.is_valid():
            Name= form.cleaned_data['Name']
            address = form.cleaned_data['address']
            zipcode = form.cleaned_data['zipcode']
            city = form.cleaned_data['city']
            country = form.cleaned_data['country']
            organization_logo = form.cleaned_data['orgainzation logo']
            upload_logo = form.cleaned_data['upload logo']
            latitude = form.cleaned_data['latitude']
            longitude = form.cleaned_data['longitude']

            # Create a dictionary with the form data to be saved to the database
            organization_data = {
                'Name': Name,
                'address': address,
                'zipcode': zipcode,
                'city': city,
                'country': country,
                'organization logo': organization_logo,
                'upload logo': upload_logo,
                'latitude': latitude,
                'longitude': longitude,
            }

            user_id = ['_id']
                        
            payload= json.dumps({
            "cluster": "login",
            #   "platform": platform,
            "database": "login",
            "collection": "user_profile",
            "document": "user_profile",
            "team_member_ID": "1168",
            "function_ID": "ABCDE",
            "command": "update",
            "field": {
                "_id": user_id
                },
            "update_field":"update_field"
            })
            headers = {'content-type': 'application/json'}
            response = requests.request('POST',url, headers=headers,data=payload)
            print(response.text)

            # Save the organization data to the database
            # implementation may vary depending on database setup

            # Return a success message to the user
            return HttpResponse('Organization added successfully.')
    else:
        # If the request method is GET, it means that the user wants to view the form
        form = OrganizationForm()
    # Render the form template with the form object
    return render(request, 'organization.html', {'form': form})


@method_decorator(csrf_exempt, name='dispatch')

class PersonalIDView(View):
    def get(self, request):
        form = PersonalIDForm()
        return render(request, 'personal_id.html', {'form':form})
        

    def post(self, request):
        Voice_ID = request.POST.get('voice_id')
        Face_ID = request.POST.get('face_id')
        Biometric_ID = request.POST.get('biometric_id')
        Video_ID = request.POST.get('video_id')
        
        with open(request.FILES['id_card_1'].name, 'rb') as id_card_file:
            ID_Card_1 = base64.b64encode(id_card_file.read()).decode()
        
        with open(request.FILES['id_card_2'].name, 'rb') as id_card_file:
            ID_Card_2 = base64.b64encode(id_card_file.read()).decode()
        
        with open(request.FILES['id_card_3'].name, 'rb') as id_card_file:
            ID_Card_3 = base64.b64encode(id_card_file.read()).decode()
        
        with open(request.FILES['id_card_4'].name, 'rb') as id_card_file:
            ID_Card_4 = base64.b64encode(id_card_file.read()).decode()
        
        with open(request.FILES['id_card_5'].name, 'rb') as id_card_file:
            ID_Card_5 = base64.b64encode(id_card_file.read()).decode()

        with open(request.FILES['signature'].name, 'rb') as signature_file:
            Signature = base64.b64encode(signature_file.read()).decode()

        data = {
            'voice_id': Voice_ID,
            'face_id': Face_ID,
            'biometric_id': Biometric_ID,
            'video_id': Video_ID,
            'id_card_1': ID_Card_1,
            'id_card_2': ID_Card_2,
            'id_card_3': ID_Card_3,
            'id_card_4': ID_Card_4,
            'id_card_5': ID_Card_5,
            'signature': Signature
        }

        # Encode data as base64 string
        
        user_id = ['_id']
        # Create payload with encoded data
        payload = json.dumps({
            "cluster": "login",
            "database": "login",
            "collection": "user_profile",
            "document": "user_profile",
            "team_member_ID": "1168",
            "function_ID": "ABCDE",
            "command": "update",
            "field": {
                "_id": user_id
                },
            "update_field": {**data},
            "platform": "bangalore"
        })

        url = 'http://100002.pythonanywhere.com/'
        headers = {'Content-Type': 'application/json'}
        response = requests.request('POST', url, headers=headers, data=payload)
        print(response.text)
        return HttpResponse('Form submission successful!')
    


class GeographicalView(View):
    def get(self, request):
        # Render the form for users to input their geographical information
        form = GeographicalForm()
        return render(request, 'geographical.html', {'form': form})

    def post(self, request):
        # Handle form submission
        form = GeographicalForm(request.POST)
        if form.is_valid():
            # Gettng the form data
            country = form.cleaned_data['country']
            city = form.cleaned_data['city']
            latitude = form.cleaned_data['latitude']
            longitude = form.cleaned_data['longitude']
            region = form.cleaned_data['region']
            others = form.cleaned_data['others']

            # Creating the payload data
            user_id = ['_id']
            payload_data = {
                "cluster": "login",
                "database": "login",
                "collection": "geographical_profile",
                "document": "geographical_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "upadate",
                "update_field":{
                
                        "country": country,
                        "city": city,
                        "latitude": latitude,
                        "longitude": longitude,
                        "region": region,
                        "others": others,
                    
                },
                "field": {"_id": user_id},
                "platform": "bangalore"
            }

            # Converting the payload data to JSON in the field is very neccessary 
            payload = json.dumps(payload_data)

            # Setting the headers
            headers = {
                'Content-Type': 'application/json'
            }

            # Making the API request
            url = "http://100002.pythonanywhere.com/"
            response = requests.post(url, headers=headers, data=payload)

            if response.status_code == 200:
                # Redirect to a success page
                return render(request, 'geographical.html')
            else:
                # If the API request fails, render the form again with an error message
                form.add_error(None, 'Failed to submit form. Please try again later.')
                return render(request, 'geographical.html', {'form': form})
        else:
            # If the form is not valid, render the form again with error messages.
            return render(request, 'geographical.html', {'form': form})


class DemographicProfileView(View):
    def get(self, request):
        form = DemographicProfileForm()
        return render(request, 'demographic_profile.html', {'form': form})

    def post(self, request):
        form = DemographicProfileForm(request.POST)

        if form.is_valid():
            income_class : form.cleaned_data['INCOME_CLASS']
            date_of_birth : str(form.cleaned_data['DATE_OF_BIRTH'])
            gender: form.cleaned_data['GENDER']
            parental_status: form.cleaned_data['PARENTAL_STATUS']
            education: form.cleaned_data['EDUCATION']
            occupation: form.cleaned_data['OCCUPATION']
            FAMILY_SIZE: form.cleaned_data['FAMILY_SIZE']
            OTHERS: form.cleaned_data['OTHERS']

            user_id = ['_id']
            payload = {
                'cluster': 'login',
                'database': 'login',
                'collection': 'demographic_profile',
                'document': 'demographic_profile',
                'team_member_ID': '1168',
                'function_ID': 'ABCDE',
                'command': 'update',
                'update_field': {
                 
                    'income_class': income_class,
                    'date_of_birth': date_of_birth,
                    'gender': gender,
                    'parental_status': parental_status,
                    'education': education,
                    'occupation': occupation,
                    'FAMILY_SIZE': FAMILY_SIZE,
                    'OTHERS': OTHERS
                    },
                    "field": {"_id": user_id},
                    "platform": "bangalore"
                    }
            headers = {'Content-Type': 'application/json','Accept': 'application/json'}
            r = requests.post(url = 'http://100002.pythonanywhere.com/', json=payload, headers=headers)
            if r.status_code == 200:
                return HttpResponse('Data saved successfully!')
            else:
                return render(request, 'demographic_profile.html', {'form': form})


class PsychographicView(View):
    def get(self, request):
        form = PsychographicForm()
        return render(request, 'psychographic_profile.html', {'form': form})

    def post(self, request):
        form = PsychographicForm(request.POST)
        if form.is_valid():
            lifestyle = form.cleaned_data['lifestyle']
            iq_level = form.cleaned_data['iq_level']
            attitude = form.cleaned_data['attitude']
            personality = form.cleaned_data['personality']
            others = form.cleaned_data['others']

            user_id = ['_id']
            payload = {
                "cluster": "login",
                "database": "login",
                "collection": "psychographic_profile",
                "document": "psychographic_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "update_field": {
                    
                        "lifestyle": lifestyle,
                        "iq_level": iq_level,
                        "attitude": attitude,
                        "personality": personality,
                        "others": others,
                    
                },
                "field": {"_id": user_id},
                "platform": "bangalore"
            }

            headers = {
                'Content-Type': 'application/json'
            }

            response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=json.dumps(payload))

            if response.status_code == 200:
                return HttpResponse('Form submission successful!')
            else:
                return HttpResponse('Form submission failed!')
        else:
            return render(request, 'psychographic_profile.html', {'form': form})


class BehaviourProfile(View):
    def get(self, request):
        form: BehaviourForm()
        return render(request, 'behaviourprofile.html', {'form': form})

    def post(self, request):
        form = BehaviourForm(request.POST)
        if form.is_valid():
            benefits = form.cleaned_data['benefits']
            role = form.cleaned_data['role']
            brand_loyalty = form.cleaned_data['brand_loyalty']
            others = form.cleaned_data['others']

            user_id = ['_id']
            payload = json.dumps({
                "cluster": "login",
                "database": "login",
                "collection": "behaviour_profile",
                "document": "behaviour_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "update_field": {
                 
                        "benefits": benefits,
                        "role": role,
                        "brand_loyalty": brand_loyalty,
                        "others": others
                    
                },
                "field": {"_id": user_id},
                "platform": "bangalore"
            })

            headers = {
                'Content-Type': 'application/json'
            }

            response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=payload)

            if response.status_code == 200:
                return HttpResponse('Form submission successful!')
            else:
                return HttpResponse('Error submitting form')
        else:
            return render(request, 'behaviourprofile.html', {'form': form})


class UsageProfileView(View):
    def get(self, request):
        form = UsageProfileForm()
        return render(request, 'usage_profile.html', {'form': form})

    def post(self, request):
        form = UsageProfileForm(request.POST)
        if form.is_valid():
            usage_rate = form.cleaned_data['usage_rate']
            awareness = form.cleaned_data['awareness']
            purpose = form.cleaned_data['purpose']
            others = form.cleaned_data['others']

            user_id = ['_id']
            payload = {
                "cluster": "login",
                "database": "login",
                "collection": "usage_profile",
                "document": "usage_profile",
                "team_member_ID": "1168",
                "function_ID": "ABCDE",
                "command": "update",
                "update_field": {
                     
                        "usage_rate": usage_rate,
                        "awareness": awareness,
                        "purpose": purpose,
                        "others": others,
                    
                },
                "field": {"_id": user_id},
                "platform": "bangalore"
            }

            headers = {
                'Content-Type': 'application/json'
            }

            response = requests.post("http://100002.pythonanywhere.com/", headers=headers, data=json.dumps(payload))

            if response.status_code == 200:
                return HttpResponse('Form submission successful!')
            else:
                return HttpResponse('Form submission failed!')
        else:
            return render(request, 'usage_profile.html', {'form': form})
>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604
