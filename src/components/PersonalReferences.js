import React,{useState} from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LinkedInProfile from './personalReferences/LinkedInProfile'
import AcademiaProfile from './personalReferences/AcademiaProfile'
import DiscordProfile from './personalReferences/DiscordProfile'
import FacebookProfile from './personalReferences/FacebookProfile'
import InstagramProfile from './personalReferences/InstagramProfile'
import PersonalReferences1 from './personalReferences/PersonalReference1'
import PersonalReferences2 from './personalReferences/PersonalReference2'
import PersonalReferences3 from './personalReferences/PersonalReference3'
import PersonalReferences4 from './personalReferences/PersonalReference4'
import PersonalReferences5 from './personalReferences/PersonalReference5'
import PinterestProfile from './personalReferences/PinterestProfile'
import RedditProfile from './personalReferences/RedditProfile'
import SnapchatProfile from './personalReferences/SanpchatProfile'
import TikTokProfile from './personalReferences/TikTokProfile'
import TumblrProfile from './personalReferences/TumblrProfile'
import TwitterProfile from './personalReferences/TwitterProfile'
import WhatsappProfile from './personalReferences/WhatsappProfile'
import XingProfile from './personalReferences/XingProfile'
import YoutubeProfile from './personalReferences/YoutubeProfile'

const PersonalReferences = (userData) => {
    
  const [activeTab, setActiveTab] = useState('tab1');
  const referenceLinks = userData._reference
  const linkedinLink = referenceLinks.Linkedin
  const facebookLink = referenceLinks.Facebook_profile
  const instagramLink = referenceLinks.Instagram
  const twitterLink = referenceLinks.Twitter
  const discordLink = referenceLinks.Discord
  const tiktokLink = referenceLinks.Tiktok
  const snapchatLink = referenceLinks.Snapchat
  const pinterestLink = referenceLinks.Pinterest
  const youtubeLink = referenceLinks.Youtube
  const whatsappLink = referenceLinks.Whatsapp
  const tumblrLink = referenceLinks.Tumbir
  const xingLink = referenceLinks.xing_profile
  const redditLink = referenceLinks.Reddit
  const academiaLink = referenceLinks.academia_profile
  const perRefLink1 = referenceLinks.personal_reference_1
  const perRefLink2 = referenceLinks.personal_reference_2
  const perRefLink3 = referenceLinks.personal_reference_3
  const perRefLink4 = referenceLinks.personal_reference_4
  const perRefLink5 = referenceLinks.personal_reference_5
  


  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
        <Container>
            <p className="myProfile text-white fw-bold text-center">01. Personal References</p>
            <Row>
                <Col lg={3}>
                    <Row>
                        <Col>                            
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('linkedin')}>Linkedin Profile
                            </Button><i className="bi bi-caret-right-fill"></i>
                        
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('facebook')}>Facebook Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('instagram')}>Instagram Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('twitter')}>Twitter Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('discord')}>Discord Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('tiktok')}>Tiktok Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('snapchat')}>Snapchat Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('pinterest')}>Pinterest Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('youtube')}>Youtube Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('whatsapp')}>Whatsapp Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('tumblr')}>Tumblr Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('xing')}>Xing Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('reddit')}>Reddit Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('academia')}>Academia Profile
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('personal1')}>Personal Reference 1
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('personal2')}>Personal Reference 2
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('personal3')}>Personal Reference 3
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('personal4')}>Personal Reference 4
                            </Button>
                            <Button className='personalBtn'
                                onClick={() => handleTabClick('personal5')}>Personal Reference 5 
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={9}>
                    <div>
                        {activeTab === 'linkedin' && <div><LinkedInProfile userData={userData} linkedinLink={linkedinLink}/></div>}
                        {activeTab === 'facebook' && <div><FacebookProfile userData={userData} facebookLink={facebookLink}/></div>}
                        {activeTab === 'instagram' && <div><InstagramProfile userData={userData} instagramLink={instagramLink}/></div>}
                        {activeTab === 'twitter' && <div><TwitterProfile userData={userData} twitterLink={twitterLink}/></div>}
                        {activeTab === 'discord' && <div><DiscordProfile userData={userData} discordLink={discordLink}/></div>}
                        {activeTab === 'tiktok' && <div><TikTokProfile userData={userData} tiktokLink={tiktokLink}/></div>}
                        {activeTab === 'snapchat' && <div><SnapchatProfile userData={userData} snapchatLink={snapchatLink}/></div>}
                        {activeTab === 'pinterest' && <div><PinterestProfile userData={userData} pinterestLink={pinterestLink}/></div>}
                        {activeTab === 'youtube' && <div><YoutubeProfile userData={userData} youtubeLink={youtubeLink}/></div>}
                        {activeTab === 'whatsapp' && <div><WhatsappProfile userData={userData} whatsappLink={whatsappLink}/></div>}
                        {activeTab === 'tumblr' && <div><TumblrProfile userData={userData} tumblrLink={tumblrLink}/></div>}
                        {activeTab === 'xing' && <div><XingProfile userData={userData} xingLink={xingLink}/></div>}
                        {activeTab === 'reddit' && <div><RedditProfile userData={userData} redditLink={redditLink}/></div>}
                        {activeTab === 'academia' && <div><AcademiaProfile userData={userData} academiaLink={academiaLink}/></div>}
                        {activeTab === 'personal1' && <div><PersonalReferences1 userData={userData} perRefLink1={perRefLink1}/></div>}
                        {activeTab === 'personal2' && <div><PersonalReferences2 userData={userData} perRefLink2={perRefLink2}/></div>}
                        {activeTab === 'personal3' && <div><PersonalReferences3 userData={userData} perRefLink3={perRefLink3}/></div>}
                        {activeTab === 'personal4' && <div><PersonalReferences4 userData={userData} perRefLink4={perRefLink4}/></div>}
                        {activeTab === 'personal5' && <div><PersonalReferences5 userData={userData} perRefLink5={perRefLink5}/></div>}

                    </div>
                </Col>
            </Row>
        </Container>  
    </div>
  );
}

export default PersonalReferences




        
    
