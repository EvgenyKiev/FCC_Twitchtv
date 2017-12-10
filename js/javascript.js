window.addEventListener("load", function() {
    console.log("All resources finished loading!");

            var streamChannel = ["freecodecamp","capcomfighters","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

         // var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/featured';
          //var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/esl_hearthstone'



    //
    for (var i = 0; i < streamChannel.length; i++) {

      var  streamIDChannel=streamChannel[i]

        trequest(streamIDChannel)

    }

    //


         //'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?'

         // https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?'

         //https://wind-bow.glitch.me/twitch-api/streams/esl_hearthstone

    // capcomfighters    "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

    //test
    // for (var i=0; i<streamChannel.length;i++)
    // {
    //     console.log(i)
    // }


    function trequest(streamIDChannel) {
        var request = new XMLHttpRequest();

        var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/'+streamIDChannel


        request.open('GET', urlsrc, true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);
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
                if (data.stream !== null) {
                    var channelName = data.stream.channel.name;
                    var channelLogo = data.stream.channel.logo;
                    var channelStatus = data.stream.channel.status;
                    var channelUrl = data.stream.channel.url;

                    //console.log(all)
                    console.log(channelName);
                    console.log(channelLogo);
                    console.log(channelStatus);
                    console.log(channelUrl);
                }
                else
                    {console.log(streamIDChannel+' channel is offline' +' go to url '+'https://twitch.tv/'+streamIDChannel)};



            } else {
                console.log('We reached our target server, but it returned an error')

            }
        };

        request.onerror = function () {
            console.log('There was a connection error of some sort')
        };

        request.send();

    }



        //
        // for (var i = 0; i < jpars[1].length; i++) {
        //
        //     Array.prototype.forEach.call(paras, function (para) {
        //
        //         if (para.getAttribute("class") === "row")
        //
        //             para.parentNode.removeChild(para);
        //
        //         console.log('if (paras) delete')
        //
        //     });
        // }

        //



})