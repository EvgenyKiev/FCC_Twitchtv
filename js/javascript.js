window.addEventListener("load", function() {
    console.log("All resources finished loading!");
    // console.log (document.getElementById('insert'))


         //   var streamChannel = ["freecodecamp","capcomfighters","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx",  "noobs2ninjas","Hearthstone","J4CKIECHAN",	"TheJWittz"];
    var streamChannel = ["freecodecamp","ESL_SC2", "OgamingSC2"];

         // var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/featured';
          //var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/esl_hearthstone'


    //
    for (var i = 0; i < streamChannel.length; i++) {

      var  streamIDChannel=streamChannel[i];

        trequest(streamIDChannel);

    }

    // var el = document.getElementById("temp");
    // el.addEventListener("click", modifyT, false);


    var all_el = document.getElementById("allChannels");
    var actve_el = document.getElementById("activeChannels");
    var noactve_el = document.getElementById("noactiveChannels");



    all_el.addEventListener("click",allChannels,false);
    actve_el.addEventListener("click",activeChannels,false);
    noactve_el.addEventListener("click",noactiveChannels,false);


    function allChannels() {
                console.log ('all_')

    }

    function activeChannels() {

        console.log ('online')

    }

    function noactiveChannels() {

        console.log ('offline')

    }


    function trequest(streamIDChannel) {
        var request = new XMLHttpRequest();
        var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/'+streamIDChannel;
        request.open('GET', urlsrc, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);

                var channelName = streamIDChannel;
                var channelLogo = 'offline';
                var channelStatus ='offline';
                var channelUrl = 'https://www.twitch.tv/'+streamIDChannel;


                if (data.stream !== null) {

                    channelStatus = data.stream.channel.status;
                    channelName = data.stream.channel.name;
                    channelLogo = data.stream.channel.logo;
                    channelUrl = data.stream.channel.url;

                }

                    //console.log(all)
                    console.log(channelName);
                    console.log(channelLogo);
                    console.log(channelStatus);
                    console.log(channelUrl);

                    insertblock();

                    function insertblock(){
                        var d1 = document.getElementById("insert");
                        var innahtml= '<div class="row marketing"><div class="col-md-12" id="insertchannel"><div class="flex-container"><div class="column1"><img src='+channelLogo+'></div><div class="column bg-alt"><h5> <a href='+channelUrl+'>'+channelName+'</a></h5><p>'+channelStatus+'</p></div></div></div></div>';

                        // console.log(innahtml);
                        d1.insertAdjacentHTML('beforeend', innahtml)
                    }


                // else
                //     {console.log(streamIDChannel+' channel is offline' +' go to url '+'https://twitch.tv/'+streamIDChannel)};

            //end If  this.status >= 200 && this.status < 400
            }

            else {
                console.log('We reached our target server, but it returned an error');

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



});