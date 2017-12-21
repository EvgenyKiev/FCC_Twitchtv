window.addEventListener("load", function() {
    console.log("All resources finished loading!");


    //var streamChannel = ["freecodecamp","ESL_SC2", "OgamingSC2"];
    var streamChannel = ["freecodecamp","capcomfighters","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx",  "noobs2ninjas","Hearthstone","J4CKIECHAN",	"TheJWittz"];


    for (var i in streamChannel) {

        var  streamIDChannel=streamChannel[i];
        trequest(streamIDChannel);

       // console.log(streamIDChannel);

    }


    function trequest(streamIDChannel) {
        var request = new XMLHttpRequest();
        var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/'+streamIDChannel;
        request.open('GET', urlsrc, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);
               // console.log(data)


                if (data.stream == null) {

                    offtrequest(streamIDChannel)
                }

                else {
                    console.log(streamIDChannel+' is online ')


                    var channelStatus = data.stream.channel.status;
                    var channelName = data.stream.channel.name;
                    var channelLogo = data.stream.channel.logo;
                    var channelUrl = data.stream.channel.url;
                    //
                    //  console.log(channelName);
                    //  console.log(channelLogo);
                    console.log(channelStatus);
                    //  console.log(channelUrl);

                    insertblock();

                    function insertblock(){
                        var d1 = document.getElementById("insert");
                        var innahtml= '<div class="row marketing"><div class="col-md-12" id="insertchannel"><div class="flex-container"><div class="column1"><img src='+channelLogo+'></div><div class="column bg-alt"><h5> <a href='+channelUrl+'>'+channelName+'</a></h5><p>'+channelStatus+'</p></div></div></div></div>';

                        // console.log(innahtml);
                        d1.insertAdjacentHTML('beforeend', innahtml)
                    }
                }






            }
        }





        request.onerror = function () {
            console.log('There was a connection error of some sort')
        };

        request.send();


   //end xhr
    };


        // xhr if offline

    function offtrequest(streamIDChannel) {
        var request = new XMLHttpRequest();
        var urlsrc = 'https://wind-bow.glitch.me/twitch-api/users/'+streamIDChannel;
        request.open('GET', urlsrc, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);
                console.log(streamIDChannel+' is offline ')

               var channelStatus = 'offline';
                var  channelLogo = data.logo;
                var channelUrl = 'https://www.twitch.tv/'+streamIDChannel
               var channelName = data.display_name;

                console.log (channelStatus)
                console.log (channelLogo)
                console.log (data._links.self)

                insertblock2();

                function insertblock2(){
                    var d1 = document.getElementById("insert");
                    var innahtml= '<div class="row marketing"><div class="col-md-12" id="insertchannel"><div class="flex-container"><div class="column1"><img src='+channelLogo+'></div><div class="column bg-alt"><h5> <a href='+channelUrl+'>'+channelName+'</a></h5><p>'+channelStatus+'</p></div></div></div></div>';

                    // console.log(innahtml);
                    d1.insertAdjacentHTML('beforeend', innahtml)
                }




            }
        }





        request.onerror = function () {
            console.log('There was a connection error of some sort')
        };

        request.send();


        //end xhr
    };


    ///







    //close  window.addEventListener
});