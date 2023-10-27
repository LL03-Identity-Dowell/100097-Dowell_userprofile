from django.shortcuts import render

# import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import json
from django.contrib import messages
from userprofile.dowellconnection import dowellconnection
# import json
@api_view(["POST"])
def Profile_create(request):
    user=request.data["Username"]
    userId=request.data["userID"]
    profile={
        "username":"",
        "userID":"",
        "reference":{},
        "demographic":{},
        "psychographic":{},
        "deviceIDs":{},
        "behavioural":{},
        "geographic":{},
        "usage":{},    
    }
    
    try:
        field={'username': user}
        resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","fetch",field,"nil")
        respj=json.loads(resp)
    except:
        pass
    if len(respj['data'])>0:
        return Response({'message':"ok"})
    else:
        profile["username"]=user
        profile["userID"]=userId
        #insert the data to database
        field1=profile
        res=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","insert",field1,"nil")
        response=json.loads(res)
        return Response(response)

    


def index(request):
    return render(request, 'index.html')

@api_view(["POST"])
def Profile(request):
    user=request.data["Username"]
    api_url = "https://100014.pythonanywhere.com/api/profile_view/"
    myobj = {'username': user}
    response = requests.post(api_url, data=myobj)
    data = response.json()
    return Response(data)

@api_view(["POST"])
def Userprofile_form(request):
    user=request.data["Username"]
    firstName=request.data["firstName"]
    lastName=request.data["lastName"]
    phoneNumber=request.data["phoneNumber"]
    yourEmial=request.data["yourEmial"]
    yourAddress=request.data["yourAddress"]
    pin_zipcode=request.data["pin/zipcode"]
    city=request.data["city"] #"id needs to be changed from pin/zipcode to city"
    country=request.data["country"]
    yourDesignation=request.data["yourDesignation"]
    yourTeamCode=request.data["yourTeamCode"]
    nativeLanguage=request.data["nativeLanguage"]
    nationality=request.data["nationality"]
    yourPhoto=request.data["yourPhoto"]
    formFile=request.data["formFile"]
    yourVision=request.data["yourVision"]
    update_fileds={
        "first_name":firstName,
        "last_name":lastName,
        "phone":phoneNumber,
        "email":yourEmial,
        "address":yourAddress,
        "zip_code":pin_zipcode,
        "city":city,
        "country":country,
        "yourDesignation":yourDesignation,
        "yourTeamCode":yourTeamCode,
        " nationality": nationality,
        "yourPhoto":yourPhoto,
        "formFile":formFile,
        "native_language":nativeLanguage,
        "vision":yourVision,
    }
    return Response(update_fileds)

@api_view(["POST"])
def Setpassword(request):
    user=request.data["Username"]
    old_password=request.data["currentpassword"]
    new_password=request.data["newPassword"]
    # confirm_password=request.data["confirmPassword"]
    url = 'https://100014.pythonanywhere.com/api/password_change/'
    update_fields = {
                "username":user,
                "old_password":old_password,
                "new_password":new_password,
                }
    response = requests.post(url, json=update_fields)
    data = response.json()
    if data['message']=='success':
        return Response({'message': 'Password changed successfully!'})
    else:
        return Response(data)

@api_view(["POST"])
def Deviceid_form(request):
    user=request.data["Username"]
    phoneId=request.data["phoneId"]
    phoneBrand=request.data["phoneBrand"]
    laptopBrand=request.data["laptopBrand"]
    tabletBrand=request.data["tabletBrand"] #here id is laptopbrand needed to be changed to tabletbrand
    update_fileds={
        "phone_id":phoneId,
        "brand_model":phoneBrand,
        "laptop_model":laptopBrand,
        "tablet_model":tabletBrand,
    }
    field={'username': user}
    update = {"deviceIDs":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
    respj=json.loads(resp)
    
    return Response(respj)
    # else:
    #     return Response(resp.error)
    # return Response(update_fileds)


@api_view(["POST"])
def Reference_form(request):
    user=request.data["Username"]
    linkedin_profile=request.data["linkedin_profile"]
    facebook_profile=request.data["facebook_profile"]
    instagram_profile=request.data["instagram_profile"]
    twitter_profile=request.data["twitter_profile"] #here id is laptopbrand needed to be changed to tabletbrand
    discord_profile = request.data["discord_profile"]
    tiktok_profile = request.data["tiktok_profile"]
    snapchat_profile = request.data["snapchat_profile"]
    pinterest_profile = request.data["pinterest_profile"]
    youtube_profile = request.data["youtube_profile"]
    whatsapp_profile = request.data["whatsapp_profile"]
    tumblr_profile = request.data["tumblr_profile"]
    xing_profile = request.data["xing_profile"]
    reddit_profile = request.data["reddit_profile"]
    academia_profile = request.data["academia_profile"]
    personal_reference_1 = request.data["personal_reference_1"]
    personal_reference_2 = request.data["personal_reference_2"]
    personal_reference_3 = request.data["personal_reference_3"]
    personal_reference_4 = request.data["personal_reference_4"]
    personal_reference_5 = request.data["personal_reference_5"]
    
    update_fileds={
        "Linkedin":linkedin_profile,
        "facebook_profile":facebook_profile,
        "Instagram_profile":instagram_profile,
        "Twitter_profile":twitter_profile,
        "Discord_profile":discord_profile,
        "Tiktok_profile":tiktok_profile,
        "Snapchat_profile":snapchat_profile,
        "Pinterest_profile":pinterest_profile,
        "Youtube_profile":youtube_profile,
        "Whatsapp_profile":whatsapp_profile,
        "Tumbir_profile":tumblr_profile,
        "Xing_profile":xing_profile,
        "Reddit_profile":reddit_profile,
        "Academia_profile":academia_profile,
        "Personal_Reference_1":personal_reference_1,
        "Personal_Reference_2":personal_reference_2,
        "Personal_Reference_3":personal_reference_3,
        "Personal_Reference_4":personal_reference_4,
        "Personal_Reference_5":personal_reference_5,
    }
    field={'username': user}
    update = {"reference":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
    respj=json.loads(resp)
    
    return Response(respj)

@api_view(["POST"])
def Idverification_form(request):
    user=request.data["Username"]
    phone1=request.data["phone1"]
    email1=request.data["email1"]
    face1=request.data["face1"]
    videoId1 = request.data["videoId1"]
    idcard1_1 = request.data["idcard1-1"]
    idcard1_1 = request.data["idcard1-1"]
    idcard1_2 = request.data["idcard1-2"]
    idcard1_3 = request.data["idcard1-3"]
    idcard1_4 = request.data["idcard1-4"]

    laptopBrand=request.data["laptopBrand"]
    tabletBrand=request.data["tabletBrand"] #here id is laptopbrand needed to be changed to tabletbrand
    update_fileds={
        "phone_id":phoneId,
        "brand_model":phoneBrand,
        "laptop_model":laptopBrand,
        "tablet_model":tabletBrand,
    }
    return Response(update_fileds)

@api_view(["POST"])
def Organization_form(request):
    user=request.data["Username"]
    yourOrganization=request.data["yourOrganization"]
    yourOrgAddress=request.data["yourOrgAddress"]
    pin_zipcode=request.data["pin/zipcode"]
    city=request.data["city"]
    country=request.data["country"]
    orgLogo=request.data["orgLogo"]
    logoFile=request.data["logoFile"]
    orgLatitude=request.data["orgLatitude"]
    orgLongitude=request.data["orgLongitude"]
    update_fileds={
                    'Your_Organization_Name': yourOrganization,
                    'Organization_Address': yourOrgAddress,
                    'PINCODE': pin_zipcode,
                    'city_of_your_Organization': city,
                    'country_of_your_organization': country,
                    'orgLogo':orgLogo,
                    'logoFile':logoFile,
                    'Latitude_of_Organization': orgLatitude,
                    'Longitude_of_Organization': orgLongitude,
    }
    return Response(update_fileds)


@api_view(["POST"])
def Geographic_form(request):
    user=request.data["Username"]
    residing=request.data["residing"]
    city=request.data["city"]
    latitude=request.data["latitude"]
    longitude=request.data["longitude"]
    region=request.data["region"]
    others=request.data["others"]
    update_fileds={
        "country":residing,
        "city":city,
        "latitude":latitude,
        "longitude":longitude,
        "region":region,
        "others":others,
    }
    field={'username': user}
    update = {"geographic":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
    respj=json.loads(resp)
    return Response(respj)

@api_view(["POST"])
def Demographic_form(request):
    user=request.data["Username"]
    income=request.data["income"] #change the id from country to income
    dateOfBirth=request.data["dateOfBirth"]
    gender=request.data["gender"]
    parent=request.data["parent"]
    education=request.data["education"]
    occupation=request.data["occupation"]
    familySize=request.data["familySize"]
    others=request.data["others"]
    update_fileds={
        "income_class":income,
        "date_of_birth":dateOfBirth,
        "gender":gender,
        "parental_status":parent,
        "education":education,
        "occupation":occupation,
        "family_size":familySize,
        "others_demographic":others,
    }
    field={'username': user}
    update = {"demographic":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
    respj=json.loads(resp)
    
    return Response(respj)

@api_view(["POST"])
def Psychographic_form(request):
    user=request.data["Username"]
    lifestyle=request.data["lifestyle"]
    iqlevel=request.data["iqlevel"]
    attitude=request.data["attitude"]
    personality=request.data["personality"]
    others=request.data["others"]
    update_fileds={
        "Life_Style":lifestyle,
        "IQ_Level":iqlevel,
        "Your_Attitude":attitude,
        "Your_Personality":personality,
        "Others_psychographic":others,
    }
    field={'username': user}
    update = {"psychographic":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
    respj=json.loads(resp)
    
    return Response(respj)

@api_view(["POST"])
def Behaviour_form(request):
    user=request.data["Username"]
    benefits=request.data["benefits"]
    buying=request.data["buying"]
    brand=request.data["brand"]
    others=request.data["others"]
    update_fileds={
        "benefits":benefits,
        "role":buying,
        "brand_loyalty":brand,
        "others_behaviour":others,
    }
    field={'username': user}
    update = {"behavioural":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
    respj=json.loads(resp)
    
    return Response(respj)

@api_view(["POST"])
def Usage_form(request):
    user=request.data["Username"]
    favoriteProduct=request.data["favoriteProduct"]
    awareness=request.data["awareness"]
    purpose=request.data["purpose"]
    others=request.data["others"]
    update_fileds={
        "usage_rate":favoriteProduct,
        "awareness_level":awareness,
        "purpose":purpose,
        "others":others,
    }
    field={'username': user}
    update = {"usage":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
    respj=json.loads(resp)
    
    return Response(respj)
