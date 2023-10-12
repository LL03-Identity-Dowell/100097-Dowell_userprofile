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

const PersonalReferences
 = () => {
    
  const [activeTab, setActiveTab] = useState('tab1');

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
                        {activeTab === 'linkedin' && <div><LinkedInProfile/></div>}
                        {activeTab === 'facebook' && <div><FacebookProfile/></div>}
                        {activeTab === 'instagram' && <div><InstagramProfile/></div>}
                        {activeTab === 'twitter' && <div><TwitterProfile/></div>}
                        {activeTab === 'discord' && <div><DiscordProfile/></div>}
                        {activeTab === 'tiktok' && <div><TikTokProfile/></div>}
                        {activeTab === 'snapchat' && <div><SnapchatProfile/></div>}
                        {activeTab === 'pinterest' && <div><PinterestProfile/></div>}
                        {activeTab === 'youtube' && <div><YoutubeProfile/></div>}
                        {activeTab === 'whatsapp' && <div><WhatsappProfile/></div>}
                        {activeTab === 'tumblr' && <div><TumblrProfile/></div>}
                        {activeTab === 'xing' && <div><XingProfile/></div>}
                        {activeTab === 'reddit' && <div><RedditProfile/></div>}
                        {activeTab === 'academia' && <div><AcademiaProfile/></div>}
                        {activeTab === 'personal1' && <div><PersonalReferences1/></div>}
                        {activeTab === 'personal2' && <div><PersonalReferences2/></div>}
                        {activeTab === 'personal3' && <div><PersonalReferences3/></div>}
                        {activeTab === 'personal4' && <div><PersonalReferences4/></div>}
                        {activeTab === 'personal5' && <div><PersonalReferences5/></div>}

                    </div>
                </Col>
            </Row>
        </Container>  
    </div>
  );
}

export default PersonalReferences




        
    
