# FCC_Twitchtv
FCC_Twitchtv



1. Если канал доступен
    отобразить
     - картинку
     - название
     - описание

 2. Если канал не доступен
        отобразить картинку
         сообщение ОФФЛАФН


__

//var data = JSON.parse(request.responseText);

                //console.log(data)


                // true from  urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/featured';

                //var all=data.featured[0].stream.channel
                // var channelName= data.featured[0].stream.channel.display_name
                // var channelLogo=data.featured[0].stream.channel.logo
                // var channelStatus=data.featured[0].stream.channel.status
                // var channelUrl=data.featured[0].stream.channel.url
                // var channelTitle=data.featured[0].title
                // var channelText=data.featured[0].text

                //var all=data.featured[0].stream.channel


https://wind-bow.glitch.me/twitch-api/streams/Fortnite


https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-70x70.png


https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png

esl_sc2
https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg

----
about
https://wind-bow.glitch.me/twitch-api/users/capcomfighters

stream
https://wind-bow.glitch.me/twitch-api/streams/capcomfighters  (актив или неактивн канал ) data.stream ""== null

channel
https://wind-bow.glitch.me/twitch-api/channels/capcomfighters




____

1. проверить  статус

в https://wind-bow.glitch.me/twitch-api/streams/capcomfighters
https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2


 если статус НУЛЛ

 1.1 название статус  оффлайн , ссылка и лого из

 https://wind-bow.glitch.me/twitch-api/users/capcomfighters



иначе

1.2  статус   , ссылка и лого из

https://wind-bow.glitch.me/twitch-api/channels/capcomfighters
