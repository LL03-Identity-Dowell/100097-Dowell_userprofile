from django.shortcuts import render
from django.core.files.storage import default_storage
# import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
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
    data=request.data
    field={'username': user}
    #update = {"reference":update_fileds}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","fetch",field,"update")
    respj=json.loads(resp)
    #return Response(respj)
    res=respj["data"][0]["reference"]
    for key in data:
        if key in res:
            res[key]=data[key]
        else:
            if key=="Username":
                pass
            else:
                res[key]=data[key]

    field={'username': user}
    update = {"reference":res}
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

@api_view(["POST"])
def GetProfile(request):
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
        pdate = {"userID":userId}
        resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","fetch",pdate,"nil")
        respj=json.loads(resp)
        
    except:
        pass
    try:
        idfield={'username': user}
        idresp=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","fetch",idfield,"update")
        idrespj=json.loads(idresp)

    except:
        pass
    if len(idrespj['data'])>0:
        respj["data"][0]["personalids"]=idrespj["data"][0]
    else:
        ids={
            "username":user,
            "userID":userId,
            "voiceID":"",
            "faceID":"",
            "biometricID":"",
            "videoID":"",
            "IDcard1":"",
            "IDcard2":"",
            "IDcard3":"",
            "IDcard4":"",
            "IDcard5":"",
            "signature":""
        }
        fieldid=ids
        resid=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","insert",fieldid,"update")
        iddate = {"userID":userId}
        respid1=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","fetch",iddate,"update")
        respjid=json.loads(respid1)
        respj["data"][0]["personalids"]=respjid["data"][0]
    if len(respj['data'])>0:
        return Response(respj["data"])
    else:
        profile["username"]=user
        profile["userID"]=userId
        field1=profile
        res=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","insert",field1,"nil")
        pdate = {"userID":userId}
        resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","fetch",pdate,"nil")
        respj=json.loads(resp)
        return Response(respj["data"])
@api_view(["POST","GET"])
def personalIds(request):
    user=request.data["Username"]
    data=request.data
    ids={
        "username":user,
        "voiceID":"", #mp3
        "faceID":"", #image
        "biometricID":"", 
        "videoID":"", #mp4
        "IDcard1":"", #img
        "IDcard2":"",
        "IDcard3":"",
        "IDcard4":"",
        "IDcard5":"",
        "signature":"" #img
    }
    value="test"
    for key, value1 in data.items():
        if key in ids.keys():
            #ids[key]=data[key]
            fieldname=key
            value=value1
            print(value1)
        else:
            pass
    if value=="test":
        return Response({"message":"pl use valid key gy"})
    else:
        pass
    file=request.FILES.get(fieldname)
    try:
        if file.name:
            pass
    except:
        return Response({"message":"Accept only images"})
    file_ext = file.name[-4:]
    ls=[".jpg",".JPG","jpeg","JPEG",".png",".PNG",".mp3",".MP3",".mp4",".MP4"]
    if not file_ext in ls:
        return Response({"message":f"pl provide file in required format {file_ext}"},status=status.HTTP_400_BAD_REQUEST)
    else:
        pass
    file_name = default_storage.save(file.name, file)
    path=f"https:100097.pythonanywhere.com/media/{file_name}"
    field={'username': user}
    update = {fieldname:path}
    respid=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","update",field,update)
    respjid=json.loads(respid)
    return Response(respjid)

def PersonalRef(request):
    user=request.data["Username"]
    userId=request.data["userID"]
    usrid = {"userID":userId}
    respusr=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","fetch",usrid,"nil")
    usrresp=json.loads(respusr)
@api_view(["POST"])
def FaceID(request):
    user=request.data["Username"]
    userId=request.data["userID"]
    ids={
        "username":user,
        "userID":userId,
        
        "faceID":"",    
    }
    usrid = {"userID":userId}
    respusr=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","fetch",usrid,"nil")
    usrresp=json.loads(respusr)
    if len(usrresp['data'])>0:
        return Response(usrresp["data"])
    else:
        fieldids=ids
        res=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","insert",fieldids,"nil")
        pdate = {"userID":userId}
        resp=dowellconnection("login","bangalore","login","personnel_ids","personnel_ids","1252001","ABCDE","fetch",pdate,"nil")
        respj=json.loads(resp)
        return Response(respj["data"])
@api_view(["POST"])    
def MyWorkspace(request):
    user=request.data["Username"]
    userId=request.data["userID"]
    workspace=request.data["workspace_name"] #change the id from country to income
    org_addr=request.data["org_address"]
    pin=request.data["PIN"]
    city=request.data["city"]
    country=request.data["country"]
    org_logo=request.data["org_logo"]
    latitude=request.data["latitude"]
    longitude=request.data["longitude"]
    try:
        if org_logo.name:
            pass
    except:
        return Response({"message":"It allows only images"})
    file_ext = org_logo.name[-4:]
    ls=[".jpg",".JPG","jpeg","JPEG",".png",".PNG",".MP3",".mp3",".MP4",".mp4"]
    if not file_ext in ls:
        return Response({"message":f"pl provide files required format {file_ext}"})
    else:
        pass
    file_name = default_storage.save(org_logo.name, org_logo)
    path=f"https:100097.pythonanywhere.com/media/{file_name}"
    update_fileds={
        "workspace_name":workspace,
        "org_address":org_addr,
        "PIN":pin,
        "city":city,
        "country":country,
        "org_logo":path,
        "latitude":latitude,
        "longitude":longitude,
    }
    field={'username': user}
    resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","fetch",field,"update")
    rresp=json.loads(resp)
    if len(rresp['data'])>0:
        update = {"myworkspace":update_fileds}
        resp=dowellconnection("login","bangalore","login","user_profile","user_profile","1168","ABCDE","update",field,update)
        respj=json.loads(resp)
        return Response(respj)
    else:
         my_fileds={
        "workspace_name":"",
        "org_address":"",
        "PIN":"",
        "city":"",
        "country":"",
        "org_logo":"",
        "latitude":"",
        "longitude":"",
    }
        


"""
API for Create / Update Users Permissions and Section 
"""
@api_view(["POST"])
def update_permissions(request):
    username = request.data.get("username", None)
    userID = request.data.get("userID", None)
    section = request.data.get("section", None)

    if username == None:
        return Response(
            {"success": False, "error": "username field is required"},
            status=status.HTTP_400_BAD_REQUEST,
        )
    else:
        # Sections Form Data
        form_data = {
            # Providing Default Value as NONE Explicitly
            "MyProfile": request.data.get("MyProfile", None),
            "VerifyUsername_Password_Strength": request.data.get(
                "VerifyUsername_Password_Strength", None
            ),
            "DeviceDetails": request.data.get("DeviceDetails", None),
            "PersonalIDs": request.data.get("PersonalIDs", None),
            "PersonalReferences": request.data.get("PersonalReferences", None),
            "IDVerification_Status": request.data.get("IDVerification_Status", None),
            "OrganisationDetails": request.data.get("OrganisationDetails", None),
            "GeographicProfile": request.data.get("GeographicProfile", None),
            "DemographicProfile": request.data.get("DemographicProfile", None),
            "PsychographicProfile": request.data.get("PsychographicProfile", None),
            "BehaviouralProfile": request.data.get("BehaviouralProfile", None),
            "UsageProfile": request.data.get("UsageProfile", None),
        }

        section_form = {}

        # Create a section_form that stores form_data values which is not NONE
        for key, value in form_data.items():
            if value != None:
                section_form[key] = value

        userdetails = {"username": username}
        try:
            response = json.loads(
                dowellconnection(
                    "login",
                    "bangalore",
                    "login",
                    "idverfication",
                    "idverfication",
                    "1253001",
                    "ABCDE",
                    "fetch",
                    userdetails,
                    "null",
                )
            )
            if len(response["data"]) > 0:
                # Response has Data so,Update the Section Field
                update_fields = {section: section_form}
                update_response = json.loads(
                    dowellconnection(
                        "login",
                        "bangalore",
                        "login",
                        "idverfication",
                        "idverfication",
                        "1253001",
                        "ABCDE",
                        "update",
                        userdetails,
                        update_fields,
                    )
                )
                if update_response["isSuccess"]:
                    return Response(
                        {"success": True, "message": "User Data updated Successfully"},
                        status=status.HTTP_200_OK,
                    )
                else:
                    return Response(
                        {"success": False, "error": "Updating Data Failed!"},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

            else:
                # User Data doesnt Exists so Create a User Data with Empty Section Data
                user_data_field = {
                    "username": username,
                    "userID": userID,
                    "section1": {},
                    "section2": {},
                    "section3": {},
                    "section4": {},
                    "section5": {},
                    "section6": {},
                }
                try:
                    insert_response = json.loads(
                        dowellconnection(
                            "login",
                            "bangalore",
                            "login",
                            "idverfication",
                            "idverfication",
                            "1253001",
                            "ABCDE",
                            "insert",
                            user_data_field,
                            "null",
                        )
                    )
                    if insert_response["isSuccess"]:
                        return Response(
                            {
                                "success": True,
                                "message": "User Data Inserted Successfully",
                            },
                            status=status.HTTP_201_CREATED,
                        )
                    else:
                        return Response(
                            {"success": False, "error": "Inserting Data Failed!"},
                            status=status.HTTP_400_BAD_REQUEST,
                        )
                except Exception as e:
                    return Response(
                        {"success": False, "error": str(e)},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

        except Exception as e:
            return Response(
                {"success": False, "error": str(e)}, status=status.HTTP_400_BAD_REQUEST
            )