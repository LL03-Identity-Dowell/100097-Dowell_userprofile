from django import forms
from django.contrib.auth.forms import PasswordChangeForm
# creating a form
class InputForm(forms.Form):
<<<<<<< HEAD
    edit_inputform = forms.BooleanField(widget=forms.HiddenInput, initial=True,required=False)
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your first name'}),required=False)
    last_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your last name'}),required=False)
    phone_number = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your phone_number'}),required=False)
    email_address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your email'}),required=False)
    address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your address'}),required=False)
    pincode = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'pin/zipcode'}),required=False)
    city = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'city'}),required=False)
    country = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'country'}),required=False)
    native_language = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'native_language'}),required=False)
    vision = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'vision'}),required=False)

class DeviceIdForm(forms.Form):
    edit_DeviceIdform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    phone_id = forms.CharField(max_length = 200,required=False)
    brand_model = forms.CharField(max_length = 200,required=False)
    laptop_model = forms.CharField(max_length = 200,required=False)
    tablet_model = forms.CharField(max_length = 200,required=False)

class SetpasswordForm(forms.Form):
    edit_Setpasswordform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    username = forms.CharField(max_length=50)
    old_password = forms.CharField(widget=forms.PasswordInput)
    new_password = forms.CharField(widget=forms.PasswordInput)

class OrganizationForm(forms.Form):
    edit_Organizationform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    Your_Organization_Name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your organization name'}),required=False)
    Organization_Address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter organization address'}),required=False)
    PINCODE = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Enter your PIN/ZIP code'}),required=False)
    city_of_your_Organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Organization city'}),required=False)
    country_of_your_organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Organization Country'}),required=False)
    Organization_logo =forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Organization logo'}),required=False)
    Upload_new_logo = forms.FileField(required=False)
    Latitude_of_Organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Latitude of Organization'}),required=False)
    Longitude_of_Organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Longitude of Organization'}),required=False)

class PersonalIDForm(forms.Form):
    edit_PersonalIDform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    Voice_ID = forms.FileField(required=False)
    Face_ID = forms.FileField(required=False)
    Biometric_ID = forms.FileField(required=False)
    Video_ID = forms.FileField(required=False)
    ID_Card_1 = forms.FileField(required=False)
    ID_Card_2 = forms.FileField(required=False)
    ID_Card_3 = forms.FileField(required=False)
    ID_Card_4 = forms.FileField(required=False)
    ID_Card_5 = forms.FileField(required=False)
    Signature = forms.FileField(required=False)
=======
    edit_inputform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    first_name = forms.CharField(max_length = 200)
    last_name = forms.CharField(max_length = 200)
    phone_number = forms.CharField(max_length= 200)
    email_address = forms.EmailField(max_length= 200)
    address = forms.CharField(max_length= 200)
    pincode = forms.CharField(max_length= 200)
    location = forms.CharField(max_length= 200)


class InputForm(forms.Form):
    username = forms.CharField(max_length=50)
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

class OrganizationForm(forms.Form):
    Your_Organization_Name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your organization name'}))
    Organization_Address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter organization address'}))
    PINCODE = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Enter your PIN/ZIP code'}))
    city_of_your_Organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Organization city'}))
    country_of_your_organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Organization Country'}))
    Organization_logo =forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Organization logo'}))
    Upload_new_logo = forms.ImageField()
    Latitude_of_Organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Latitude of Organization'}))
    Longitude_of_Organization = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder': 'Longitude of Organization'}))

    
class PersonalIDForm(forms.Form):
    Voice_ID = forms.FileField()
    Face_ID = forms.FileField()
    Biometric_ID = forms.FileField()
    Video_ID = forms.FileField()
    ID_Card_1 = forms.FileField()
    ID_Card_2 = forms.FileField()
    ID_Card_3 = forms.FileField()
    ID_Card_4 = forms.FileField()
    ID_Card_5 = forms.FileField()
    Signature = forms.FileField()


>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604

class GeographicalForm(forms.Form):
    COUNTRY_CHOICES = [
        ('country1', 'Country 1'),
        ('country2', 'Country 2'),
    ]

    REGION_CHOICES =[
        ('North', 'North'),
        ('South', 'South'),
        ('East', 'East'),
        ('West', 'West'),
        ('Center', 'Center'),
    ]
<<<<<<< HEAD

    country = forms.ChoiceField(choices=COUNTRY_CHOICES, label='Country',required=False)
    city = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your city'}),required=False)
    region = forms.ChoiceField(choices=REGION_CHOICES, label='North')
    latitude = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your latitude'}),required=False)
    longitude = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your longitude'}),required=False)
    others_Geographical = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}),required=False)

=======
    
    country = forms.ChoiceField(choices=COUNTRY_CHOICES, label='Country')
    city = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your city'}))
    region = forms.ChoiceField(choices=REGION_CHOICES, label='North')
    latitude = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your latitude'}))
    longitude = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your longitude'}))
    others = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}))
>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604

class DemographicProfileForm(forms.Form):
    INCOME_CHOICES = (
        ('Top 10%', 'Top 10%'),
        ('Top 11-20%', 'Top 11-20%'),
        ('Top 20-30%', 'Top 20-30%'),
        ('Top 30-40%', 'Top 30-40%'),
        ('Top 40-50%', 'Top 40-50%'),
        ('Below 50%', 'Below 50%')
    )

    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    )

    PARENTAL_CHOICES = (
        ('Parent', 'Parent'),
        ('Not a Parent', 'Not a Parent')
    )


<<<<<<< HEAD
    income_class = forms.ChoiceField(choices=INCOME_CHOICES)
    date_of_birth = forms.DateField(widget=forms.TextInput(attrs={'placeholder': 'Enter your birth date'}),required=False)
    gender = forms.ChoiceField(choices=GENDER_CHOICES)
    PARENTAL_STATUS = forms.ChoiceField(choices=PARENTAL_CHOICES)
    YOUR_EDUCATION = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your Education'}),required=False)
    YOUR_OCCUPATION = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your occupation'}),required=False)
    FAMILY_SIZE = forms.IntegerField()
    OTHERS = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}),required=False)

class ReferencesProfileForm(forms.Form):
    edit_PersonalIDform = forms.BooleanField(widget=forms.HiddenInput, initial=True)
    Linkedin = forms.FileField(required=False)
    Facebook = forms.FileField(required=False)
    Instagram = forms.FileField(required=False)
    Twitter = forms.FileField(required=False)
    Discord = forms.FileField(required=False)
    Tiktok = forms.FileField(required=False)
    Snapchat = forms.FileField(required=False)
    Pinterest = forms.FileField(required=False)
    Youtube = forms.FileField(required=False)
    Whatsapp = forms.FileField(required=False)
    Tumbir = forms.FileField(required=False)
    Xing = forms.FileField(required=False)
    Reddit = forms.FileField(required=False)
    Academia = forms.FileField(required=False)
    Personal_Reference_1 = forms.CharField(max_length=100, required=False)
    Personal_Reference_2 = forms.CharField(max_length=100, required=False)
    Personal_Reference_3 = forms.CharField(max_length=100, required=False)
    Personal_Reference_4 = forms.CharField(max_length=100, required=False)
    Personal_Reference_5 = forms.CharField(max_length=100, required=False)

class PsychographicProfileForm(forms.Form):
    Life_Style_CHOICES= [
        ('Modern', 'Modern'),
        ('Tradition', 'Tradition'),
        ('Trandsetter', 'Trandsetter'),
    ]

    IQ_Level_CHOICES= [
        ('A140', 'Above 140- "Near" genius or genius'),
        ('120-140', 'Very superior intelligence'),
        ('110-120', 'Superior intelligence'),
        ('90-110', 'Normal, or average, intelligence'),
        ('B90', 'Below average'),
    ]

    Your_Attitude_CHOICES= [
        ('Innovators', 'Innovators'),
        ('Early Adopters', 'Early Adopters'),
        ('Early Majority', 'Early Majority'),
        ('Late Majority', 'Late Majority'),
        ('Laggards', 'Laggards'),
    ]

    Your_Personality_CHOICES=[
        ('Architect', 'Architect'),
        ('Logicain', 'Logician'),
=======
    YOUR_INCOME_CLASS_IN_THE_SOCIETY = forms.ChoiceField(choices=INCOME_CHOICES)
    DATE_OF_BIRTH = forms.DateField(widget=forms.TextInput(attrs={'placeholder': 'Enter your birth date'}))
    GENDER = forms.ChoiceField(choices=GENDER_CHOICES)
    PARENTAL_STATUS = forms.ChoiceField(choices=PARENTAL_CHOICES)
    YOUR_EDUCATION = forms.ChoiceField(widget=forms.TextInput(attrs={'placeholder': 'Enter your Education'}))
    YOUR_OCCUPATION = forms.ChoiceField(widget=forms.TextInput(attrs={'placeholder': 'Enter your occupation'}))
    FAMILY_SIZE = forms.IntegerField()
    OTHERS = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}))

class PsychographicForm(forms.Form):
    MODERN_CHOICES= (
        ('Mordern', 'Mordern'),
        ('Traditional', 'Traditional'),
        ('Trendsetter', 'Trendsetter'),
    )

    IQ_LEVEL_CHOICES= (
        ('Above 140- "Near" genius or genius', 'Above 140- "Near" genius or genius'),
        ('120-140 - very superior intelligence', '120-140 - very superior intelligence'),
        ('110-120 - very superior intelligence', '110-120 - very superior intelligence'),
        ('90-110 - normal, or average or intelligence', '90-110 - normal, or average or intelligence'),
        ('Below 90 - Below average', 'Below 90 - Below average')
    )

    ATITTUDE_CHOICES=(
        ('Innovators', 'innovators'),
        ('Early Adopters', 'Early Adopters'),
        ('Early Majoity', 'Early Majoity'),
        ('Late Majority', 'Late Majority'),
        ('Laggards', 'Laggards')
    )

    PERSONALITY_CHOICES=[
        ('Architect', 'Architect'),
        ('Logician', 'Logician'),
>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604
        ('Commander', 'Commander'),
        ('Advocate', 'Advocate'),
        ('Mediator', 'Mediator'),
        ('Protagonist', 'Protagonist'),
<<<<<<< HEAD
        ('Campainger', 'Campaigner'),
=======
        ('Campaigner', 'Campaigner'),
>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604
        ('Logistician', 'Logistician'),
        ('Defender', 'Defender'),
        ('Executive', 'Executive'),
        ('Consul', 'Consul'),
        ('Virtuoso', 'Virtuoso'),
        ('Adventurer', 'Adventurer'),
        ('Enterpernuer', 'Enterpernuer'),
<<<<<<< HEAD
        ('Entrtainer', 'Entertainer'),
    ]
    Your_Life_Style= forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter Life Style'}),required=False)
    Your_IQ_level= forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter IQ Level'}),required=False)
    Your_Attitude= forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter Attitude'}),required=False)
    Your_Personality= forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter Personality'}),required=False)
    Others= forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter Others'}),required=False)

VERIFICATION_CHOICES = (
    ('not_started', 'Not started'),
    ('in_progress', 'In progress'),
    ('accepted', 'Accepted after Verification'),
    ('rejected', 'Rejected after Verification'),
)

class VerificationForm(forms.Form):
    Phone_verification_using_OTP = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Email_verification_using_OTP = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Voice_Id_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Face_Id_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Biometric_Id_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Voice_Id_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Id_card_1_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Id_card_2_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Id_card_3_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Id_card_4_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Id_card_5_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Signature_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Socialmedia_profile_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Personal_reference_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)
    Personal_verification_by_witness_verification = forms.ChoiceField(choices=VERIFICATION_CHOICES, widget=forms.RadioSelect,required=False)

=======
        ('Entertainer', 'Entertainer'),
    ]

    Your_Life_Style = forms.ChoiceField(choices=MODERN_CHOICES),
    Your_IQ_Level = forms.ChoiceField(choices= IQ_LEVEL_CHOICES),
    Your_Atittude = forms.ChoiceField(choices=ATITTUDE_CHOICES),
    Your_PERSONALITY = forms.ChoiceField(choices=PERSONALITY_CHOICES),
    Others = forms.ChoiceField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}))
>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604

class BehaviourForm(forms.Form):
    BENEFITS_CHOICES = [
        ('convenience', 'Convenience'),
        ('long_lasting', 'Long Lasting'),
        ('economy', 'Economy'),
        ('value_for_money', 'Value for Money'),
        ('mobility', 'Mobility'),
    ]
    ROLE_CHOICES = [
        ('initiator', 'Initiator'),
        ('influencer', 'Influencer'),
        ('decider', 'Decider'),
        ('gatekeeper', 'Gatekeeper'),
        ('buyer', 'Buyer'),
        ('user', 'User'),
    ]
    LOYALTY_CHOICES = [
        ('1', '1 (Low)'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5 (High)'),
    ]
    benefits = forms.ChoiceField(choices=BENEFITS_CHOICES)
    role = forms.ChoiceField(choices=ROLE_CHOICES)
    brand_loyalty = forms.ChoiceField(choices=LOYALTY_CHOICES)
<<<<<<< HEAD
    others = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}),required=False)

=======
    others = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}))
>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604

class UsageProfileForm(forms.Form):
    USAGE_RATE_CHOICES = (
        ('heavy', 'Heavy'),
        ('medium', 'Medium'),
        ('light', 'Light'),
    )
    AWARENESS_CHOICES = (
        ('unaware', 'Unaware'),
        ('aware', 'Aware'),
        ('interested', 'Interested'),
        ('enthusiastic', 'Enthusiastic'),
    )
    PURPOSE_CHOICES = (
        ('home', 'Home'),
        ('work', 'Work'),
        ('leisure', 'Leisure'),
        ('personal', 'Personal'),
        ('gift', 'Gift'),
    )

    usage_rate = forms.ChoiceField(choices=USAGE_RATE_CHOICES)
    awareness = forms.ChoiceField(choices=AWARENESS_CHOICES)
    purpose = forms.ChoiceField(choices=PURPOSE_CHOICES)
<<<<<<< HEAD
    others = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}),required=False)
=======
    others = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Other details'}))

# class IdVerificationForm(forms.Form):
#     phone_number = forms.CharField(max_length=20)
#     email_address = forms.EmailField()
#     phone_otp = forms.CharField(max_length=6, required=False, widget=forms.TextInput(attrs={'placeholder': 'Enter OTP'}))
#     email_otp = forms.CharField(max_length=6, required=False, widget=forms.TextInput(attrs={'placeholder': 'Enter OTP'}))


>>>>>>> 1a1c35f3ced8f1eba7f2e4211e6c030071f7e604
