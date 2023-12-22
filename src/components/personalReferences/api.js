// api.js
const apiUrl = 'https://100097.pythonanywhere.com/Reference_form';

export const postData = async (msg,link,username) => {
    if(msg == "linkedIn"){
       var linedin_link = link
    }else if(msg == "facebook"){
       var facebook_link = link
    }else if(msg == "instagram"){
        var instagram_link = link
    }else if(msg == "twitter"){
        var twitter_link = link
    }else if(msg == "discord"){
        var discord_link = link
    }else if(msg == "tiktok"){
        var tiktok_link = link
    }else if(msg == "snapchat"){
        var snapchat_link = link
    }else if(msg == "pinterest"){
        var pinterest_link = link
    }else if(msg == "youtube"){
        var youtube_link = link
    }else if(msg == "whatsapp"){
        var whatsapp_link = link
    }else if(msg == "tumblr"){
        var tumblr_link = link
    }else if(msg == "xing"){
        var xing_link = link
    }else if(msg == "reddit"){
        var reddit_link = link
    }else if(msg == "academia"){
        var academia_link = link
    }else if(msg == "personalReference1"){
        var personalReferencelink1 = link
    }else if(msg == "personalReference2"){
        var personalReferencelink2 = link
    }else if(msg == "personalReference3"){
        var personalReferencelink3 = link
    }else if(msg == "personalReference4"){
        var personalReferencelink4 = link
    }else if(msg == "personalReference5"){
        var personalReferencelink5 = link
    }
    let data={
        Username:username,
        linkedin_profile:linedin_link,
        facebook_profile:facebook_link,
        instagram_profile:instagram_link,
        twitter_profile: twitter_link,
        discord_profile: discord_link,
        tiktok_profile: tiktok_link,
        snapchat_profile: snapchat_link,
        pinterest_profile: pinterest_link,
        youtube_profile: youtube_link,
        whatsapp_profile: whatsapp_link,
        tumblr_profile: tumblr_link,
        xing_profile: xing_link,
        reddit_profile: reddit_link,
        academia_profile: academia_link,
        personal_reference_1: personalReferencelink1,
        personal_reference_2: personalReferencelink2,
        personal_reference_3:personalReferencelink3,
        personal_reference_4: personalReferencelink3,
        personal_reference_5: personalReferencelink5,
    }
  try {
    const response = await fetch(`${apiUrl}/endpoint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during API call:', error);
    throw error;
  }
};
