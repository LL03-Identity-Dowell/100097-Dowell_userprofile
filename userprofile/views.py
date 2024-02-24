from django.shortcuts import render
from django.core.files.storage import default_storage
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import requests, re
import json
from django.contrib import messages
from userprofile.dowellconnection import dowellconnection
from userprofile.serializers import *
from django.contrib.staticfiles.storage import staticfiles_storage


@api_view(["GET"])  # PostIDs for this API has be cleaned
def personalIds(request):
    user = request.data["Username"]
    data = request.data
    ids = {
        "username": user,
        "voiceID": "",  # mp3
        "faceID": "",  # image
        "biometricID": "",
        "videoID": "",  # mp4
        "IDcard1": "",  # img
        "IDcard2": "",
        "IDcard3": "",
        "IDcard4": "",
        "IDcard5": "",
        "signature": "",  # img
    }
    value = "test"
    for key, value1 in data.items():
        if key in ids.keys():
            # ids[key]=data[key]
            fieldname = key
            value = value1
            print(value1)
        else:
            pass
    if value == "test":
        return Response({"message": "pl use valid key gy"})
    else:
        pass
    file = request.FILES.get(fieldname)
    try:
        if file.name:
            pass
    except:
        return Response({"message": "Accept only images"})
    file_ext = file.name[-4:]
    ls = [
        ".jpg",
        ".JPG",
        "jpeg",
        "JPEG",
        ".png",
        ".PNG",
        ".mp3",
        ".MP3",
        ".mp4",
        ".MP4",
        ".avc1",
        ".vp8",
        ".vp9",
    ]
    if not file_ext in ls:
        return Response(
            {"message": f"pl provide file in required format {file_ext}"},
            status=status.HTTP_400_BAD_REQUEST,
        )
    else:
        pass
    file_name = default_storage.save(file.name, file)
    path = f"https:100097.pythonanywhere.com/media/{file_name}"
    field = {"username": user}
    update = {fieldname: path}
    respid = dowellconnection(
        "login",
        "bangalore",
        "login",
        "personnel_ids",
        "personnel_ids",
        "1252001",
        "ABCDE",
        "update",
        field,
        update,
    )
    respjid = json.loads(respid)
    return Response(respjid)


@api_view(["POST"])
def Deviceid_form(request):
    user = request.data["Username"]
    phoneId = request.data["phoneId"]
    phoneBrand = request.data["phoneBrand"]
    laptopBrand = request.data["laptopBrand"]
    tabletBrand = request.data[
        "tabletBrand"
    ]  # here id is laptopbrand needed to be changed to tabletbrand
    update_fileds = {
        "phone_id": phoneId,
        "brand_model": phoneBrand,
        "laptop_model": laptopBrand,
        "tablet_model": tabletBrand,
    }
    field = {"username": user}
    update = {"deviceIDs": update_fileds}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "update",
        field,
        update,
    )
    respj = json.loads(resp)

    return Response(respj)
    # else:
    #     return Response(resp.error)
    # return Response(update_fileds)


@api_view(["POST"])
def Reference_form(request):
    user = request.data["Username"]
    data = request.data
    field = {"username": user}
    # update = {"reference":update_fileds}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "fetch",
        field,
        "update",
    )
    respj = json.loads(resp)
    # return Response(respj)
    res = respj["data"][0]["reference"]
    for key in data:
        if key in res:
            res[key] = data[key]
        else:
            if key == "Username":
                pass
            else:
                res[key] = data[key]

    field = {"username": user}
    update = {"reference": res}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "update",
        field,
        update,
    )
    respj = json.loads(resp)
    return Response(respj)


@api_view(["POST"])
def Geographic_form(request):
    user = request.data["Username"]
    residing = request.data["residing"]
    city = request.data["city"]
    latitude = request.data["latitude"]
    longitude = request.data["longitude"]
    region = request.data["region"]
    others = request.data["others"]
    update_fileds = {
        "country": residing,
        "city": city,
        "latitude": latitude,
        "longitude": longitude,
        "region": region,
        "others": others,
    }
    field = {"username": user}
    update = {"geographic": update_fileds}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "update",
        field,
        update,
    )
    respj = json.loads(resp)
    return Response(respj)


@api_view(["POST"])
def Demographic_form(request):
    user = request.data["Username"]
    income = request.data["income"]  # change the id from country to income
    dateOfBirth = request.data["dateOfBirth"]
    gender = request.data["gender"]
    parent = request.data["parent"]
    education = request.data["education"]
    occupation = request.data["occupation"]
    familySize = request.data["familySize"]
    others = request.data["others"]
    update_fileds = {
        "income_class": income,
        "date_of_birth": dateOfBirth,
        "gender": gender,
        "parental_status": parent,
        "education": education,
        "occupation": occupation,
        "family_size": familySize,
        "others_demographic": others,
    }
    field = {"username": user}
    update = {"demographic": update_fileds}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "update",
        field,
        update,
    )
    respj = json.loads(resp)

    return Response(respj)


@api_view(["POST"])
def Psychographic_form(request):
    user = request.data["Username"]
    lifestyle = request.data["lifestyle"]
    iqlevel = request.data["iqlevel"]
    attitude = request.data["attitude"]
    personality = request.data["personality"]
    others = request.data["others"]
    update_fileds = {
        "Life_Style": lifestyle,
        "IQ_Level": iqlevel,
        "Your_Attitude": attitude,
        "Your_Personality": personality,
        "Others_psychographic": others,
    }
    field = {"username": user}
    update = {"psychographic": update_fileds}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "update",
        field,
        update,
    )
    respj = json.loads(resp)

    return Response(respj)


@api_view(["POST"])
def Behaviour_form(request):
    user = request.data["Username"]
    benefits = request.data["benefits"]
    buying = request.data["buying"]
    brand = request.data["brand"]
    others = request.data["others"]
    update_fileds = {
        "benefits": benefits,
        "role": buying,
        "brand_loyalty": brand,
        "others_behaviour": others,
    }
    field = {"username": user}
    update = {"behavioural": update_fileds}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "update",
        field,
        update,
    )
    respj = json.loads(resp)

    return Response(respj)


@api_view(["POST"])
def Usage_form(request):
    user = request.data["Username"]
    favoriteProduct = request.data["favoriteProduct"]
    awareness = request.data["awareness"]
    purpose = request.data["purpose"]
    others = request.data["others"]
    update_fileds = {
        "usage_rate": favoriteProduct,
        "awareness_level": awareness,
        "purpose": purpose,
        "others": others,
    }
    field = {"username": user}
    update = {"usage": update_fileds}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "update",
        field,
        update,
    )
    respj = json.loads(resp)

    return Response(respj)


@api_view(["POST"])
def GetProfile(request):
    user = request.data["Username"]
    userId = request.data["userID"]
    profile = {
        "username": "",
        "userID": "",
        "reference": {},
        "demographic": {},
        "psychographic": {},
        "deviceIDs": {},
        "behavioural": {},
        "geographic": {},
        "usage": {},
    }

    try:
        pdate = {"userID": userId}
        resp = dowellconnection(
            "login",
            "bangalore",
            "login",
            "user_profile",
            "user_profile",
            "1168",
            "ABCDE",
            "fetch",
            pdate,
            "nil",
        )
        respj = json.loads(resp)

    except:
        pass
    try:
        idfield = {"username": user}
        idresp = dowellconnection(
            "login",
            "bangalore",
            "login",
            "personnel_ids",
            "personnel_ids",
            "1252001",
            "ABCDE",
            "fetch",
            idfield,
            "update",
        )
        idrespj = json.loads(idresp)

    except:
        pass
    if len(idrespj["data"]) > 0:
        respj["data"][0]["personalids"] = idrespj["data"][0]
    else:
        ids = {
            "username": user,
            "userID": userId,
            "voiceID": "",
            "faceID": "",
            "biometricID": "",
            "videoID": "",
            "IDcard1": "",
            "IDcard2": "",
            "IDcard3": "",
            "IDcard4": "",
            "IDcard5": "",
            "signature": "",
        }
        fieldid = ids
        resid = dowellconnection(
            "login",
            "bangalore",
            "login",
            "personnel_ids",
            "personnel_ids",
            "1252001",
            "ABCDE",
            "insert",
            fieldid,
            "update",
        )
        iddate = {"userID": userId}
        respid1 = dowellconnection(
            "login",
            "bangalore",
            "login",
            "personnel_ids",
            "personnel_ids",
            "1252001",
            "ABCDE",
            "fetch",
            iddate,
            "update",
        )
        respjid = json.loads(respid1)
        respj["data"][0]["personalids"] = respjid["data"][0]
    if len(respj["data"]) > 0:
        return Response(respj["data"])
    else:
        profile["username"] = user
        profile["userID"] = userId
        field1 = profile
        res = dowellconnection(
            "login",
            "bangalore",
            "login",
            "user_profile",
            "user_profile",
            "1168",
            "ABCDE",
            "insert",
            field1,
            "nil",
        )
        pdate = {"userID": userId}
        resp = dowellconnection(
            "login",
            "bangalore",
            "login",
            "user_profile",
            "user_profile",
            "1168",
            "ABCDE",
            "fetch",
            pdate,
            "nil",
        )
        respj = json.loads(resp)
        return Response(respj["data"])


@api_view(["POST"])
def MyWorkspace(request):
    user = request.data["Username"]
    userId = request.data["userID"]
    workspace = request.data["workspace_name"]  # change the id from country to income
    org_addr = request.data["org_address"]
    pin = request.data["PIN"]
    city = request.data["city"]
    country = request.data["country"]
    org_logo = request.data["org_logo"]
    latitude = request.data["latitude"]
    longitude = request.data["longitude"]
    try:
        if org_logo.name:
            pass
    except:
        return Response({"message": "It allows only images"})
    file_ext = org_logo.name[-4:]
    ls = [
        ".jpg",
        ".JPG",
        "jpeg",
        "JPEG",
        ".png",
        ".PNG",
        ".MP3",
        ".mp3",
        ".MP4",
        ".mp4",
    ]
    if not file_ext in ls:
        return Response({"message": f"pl provide files required format {file_ext}"})
    else:
        pass
    file_name = default_storage.save(org_logo.name, org_logo)
    path = f"https:100097.pythonanywhere.com/media/{file_name}"
    update_fileds = {
        "workspace_name": workspace,
        "org_address": org_addr,
        "PIN": pin,
        "city": city,
        "country": country,
        "org_logo": path,
        "latitude": latitude,
        "longitude": longitude,
    }
    field = {"username": user}
    resp = dowellconnection(
        "login",
        "bangalore",
        "login",
        "user_profile",
        "user_profile",
        "1168",
        "ABCDE",
        "fetch",
        field,
        "update",
    )
    rresp = json.loads(resp)
    if len(rresp["data"]) > 0:
        update = {"myworkspace": update_fileds}
        resp = dowellconnection(
            "login",
            "bangalore",
            "login",
            "user_profile",
            "user_profile",
            "1168",
            "ABCDE",
            "update",
            field,
            update,
        )
        respj = json.loads(resp)
        return Response(respj)
    else:
        my_fileds = {
            "workspace_name": "",
            "org_address": "",
            "PIN": "",
            "city": "",
            "country": "",
            "org_logo": "",
            "latitude": "",
            "longitude": "",
        }


"""
API for Create / Update Users Permissions and Section 
"""


@api_view(["POST"])
def update_permissions(request):
    """
    How this API work ?

    This API is used to either create an empty user profile with section1..6 + idverification if the profile isnt created
    If the profile is there then, from request body we check if we have section or idverification and then we update that dictionary in the userprofile
    """

    # Validate data using serializer
    serializer = UserSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(
            {"success": False, "error": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Extract validated data
    validated_data = serializer.validated_data
    userID = validated_data.get("userID")
    username = validated_data.get("username")
    section = validated_data.get("section")
    idverification = validated_data.get("idverification")

    if idverification and section:
        return Response(
            {
                "success": False,
                "error": "You can't update both section & idverification at the same time",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    if not idverification and not section:
        return Response(
            {"success": False, "error": "Section or Idverification not Found"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if not username or not userID:
        return Response(
            {"success": False, "error": "username or userId field is required"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    userdetails = {"username": username}
    try:
        # Try to Fetch user profile data from 'user_profile' collection
        response_validate_user = json.loads(
            dowellconnection(
                "login",
                "bangalore",
                "login",
                "user_profile",
                "user_profile",
                "1168",
                "ABCDE",
                "fetch",
                userdetails,
                "null",
            )
        )
        response_data = response_validate_user["data"]

        # User Profile found, (username is valid)
        if len(response_data) > 0:
            username_in_datbase = response_data[0].get("username")
            userID_in_datbase = response_data[0].get("userID")

            # Validate username && userId
            if username != username_in_datbase or userID != userID_in_datbase:
                return Response(
                    {"success": False, "error": "username or userID is Invalid!"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

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

            # Response has Data so,Update the Section Field
            if len(response["data"]) > 0:
                # The request is for updating 'section'
                if section:
                    # Validate the section_name value using REGEX
                    section_name = section["Section_Name"].lower()
                    # Regex to Check section value format explicitly! must be 'section1'...'section6'
                    section_pattern = re.compile(r"^section[1-6]$")

                    if not section_pattern.match(section_name):
                        return Response(
                            {
                                "success": False,
                                "error": "Invalid 'section' value! Must be in Format 'section1'",
                            },
                            status=status.HTTP_400_BAD_REQUEST,
                        )

                    # update_fields = {section_name: section_form_data}
                    update_fields = {section_name: section}
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
                            {
                                "success": True,
                                "message": "User Data updated Successfully",
                            },
                            status=status.HTTP_200_OK,
                        )
                    else:
                        return Response(
                            {"success": False, "error": "Updating Data Failed!"},
                            status=status.HTTP_400_BAD_REQUEST,
                        )

                # The request is for updating 'idverification'
                elif idverification:
                    update_fields = {"idverification": idverification}
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
                            {
                                "success": True,
                                "message": "User Data updated Successfully",
                            },
                            status=status.HTTP_200_OK,
                        )
                    else:
                        return Response(
                            {"success": False, "error": "Updating Data Failed!"},
                            status=status.HTTP_400_BAD_REQUEST,
                        )

            # User Data doesnt Exists so Create a User Data with Empty Section Data
            else:
                empty_section_form = {
                    "MyProfile": False,
                    "VerifyUsername_Password_Strength": False,
                    "DeviceDetails": False,
                    "PersonalIDs": False,
                    "PersonalReferences": False,
                    "IDVerification_Status": False,
                    "OrganisationDetails": False,
                    "GeographicProfile": False,
                    "DemographicProfile": False,
                    "PsychographicProfile": False,
                    "BehaviouralProfile": False,
                    "UsageProfile": False,
                }

                empty_id_verification_form = {
                    "phone_Verification": "Not_Started",
                    "email_Verification": "Not_Started",
                    "voiceID_Verification": "Not_Started",
                    "faceID_Verification": "Not_Started",
                    "biometricID_Verification": "Not_Started",
                    "videoID_Verification": "Not_Started",
                    "idCard1_Verification": "Not_Started",
                    "idCard2_Verification": "Not_Started",
                    "idCard3_Verification": "Not_Started",
                    "idCard4_Verification": "Not_Started",
                    "idCard5_Verification": "Not_Started",
                    "signature_Verification": "Not_Started",
                    "socialMedia_Verification": "Not_Started",
                    "personalReference_Verification": "Not_Started",
                    "personal_Verification_By_Witness": "Not_Started",
                    "organisation_Verification": "Not_Started",
                }

                user_data_field = {
                    "username": username,
                    "userID": userID,
                    "section1": empty_section_form,
                    "section2": empty_section_form,
                    "section3": empty_section_form,
                    "section4": empty_section_form,
                    "section5": empty_section_form,
                    "section6": empty_section_form,
                    "idverification": empty_id_verification_form,
                }
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
        else:
            return Response(
                {"success": False, "error": "username or userID is Invalid!"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    except Exception as e:
        return Response(
            {"success": False, "error": str(e)}, status=status.HTTP_400_BAD_REQUEST
        )


"""
API for Fetching all user section / Update ID Verification
"""


@api_view(["POST"])
def get_user_sections(request):
    username = request.data.get("username", None)
    session_id = request.data.get("session_id", None)

    if not username or not session_id:
        return Response(
            {"success": False, "error": "username or session_id field is required"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    session_json = {"session_id": session_id}
    response_validate_session_id = requests.post(
        "https://100014.pythonanywhere.com/api/userinfo/", json=session_json
    )
    session_data = response_validate_session_id.json()

    # The session_id response contains error message which will make the response length 1 so,check if the response is valid by comparing it to length more than 1.
    if len(session_data) > 1:
        userdetails = {"username": username}
        try:
            response_validate_user = json.loads(
                dowellconnection(
                    "login",
                    "bangalore",
                    "login",
                    "user_profile",
                    "user_profile",
                    "1168",
                    "ABCDE",
                    "fetch",
                    userdetails,
                    "null",
                )
            )
            response_data = response_validate_user["data"]

            # username is Valid
            if len(response_data) > 0:
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

                # user doesnt have a profile yet
                if not response["data"]:
                    return Response(
                        {
                            "success": True,
                            "data": {},
                            "message": "User doesn't have a profile yet",
                        },
                        status=status.HTTP_200_OK,
                    )
                else:
                    response_user_data = response["data"][0]
                    all_section_data = {}
                    count = 0
                    for i in response_user_data:
                        if "section" in i:
                            count += 1
                            all_section_data[f"section{count}"] = response_user_data[i]
                    data = {"success": True, "data": all_section_data}
                    return Response(data, status=status.HTTP_200_OK)

            else:
                return Response(
                    {"success": False, "error": "Invalid username"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        except Exception as e:
            return Response(
                {"success": False, "error": str(e)}, status=status.HTTP_400_BAD_REQUEST
            )
    else:
        return Response(
            {"success": False, "error": "Invalid session_id"},
            status=status.HTTP_400_BAD_REQUEST,
        )


@api_view(["POST"])
def get_user_idverifications(request):
    username = request.data.get("username", None)
    session_id = request.data.get("session_id", None)

    if not username or not session_id:
        return Response(
            {"success": False, "error": "username or session_id field is required"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    session_json = {"session_id": session_id}
    response_validate_session_id = requests.post(
        "https://100014.pythonanywhere.com/api/userinfo/", json=session_json
    )
    session_data = response_validate_session_id.json()

    # The session_id response contains error message which will make the response length 1 so,check if the response is valid by comparing it to length more than 1.
    if len(session_data) > 1:
        userdetails = {"username": username}
        try:
            response_validate_user = json.loads(
                dowellconnection(
                    "login",
                    "bangalore",
                    "login",
                    "user_profile",
                    "user_profile",
                    "1168",
                    "ABCDE",
                    "fetch",
                    userdetails,
                    "null",
                )
            )
            response_data = response_validate_user["data"]

            # username is Valid
            if len(response_data) > 0:
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

                # user doesnt have a profile yet
                if not response["data"]:
                    return Response(
                        {
                            "success": True,
                            "data": {},
                            "message": "User doesn't have a profile yet",
                        },
                        status=status.HTTP_200_OK,
                    )
                else:
                    response_user_data = response["data"][0]
                    all_idverification_data = response_user_data["idverification"]
                    data = {"success": True, "data": all_idverification_data}
                    return Response(data, status=status.HTTP_200_OK)

            else:
                return Response(
                    {"success": False, "error": "Invalid username"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        except Exception as e:
            return Response(
                {"success": False, "error": str(e)}, status=status.HTTP_400_BAD_REQUEST
            )
    else:
        return Response(
            {"success": False, "error": "Invalid session_id"},
            status=status.HTTP_400_BAD_REQUEST,
        )
