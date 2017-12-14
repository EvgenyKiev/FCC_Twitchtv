window.addEventListener("load", function() {
    console.log("All resources finished loading!");
    // console.log (document.getElementById('insert'))


            var streamChannel = ["freecodecamp","capcomfighters","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx",  "noobs2ninjas","Hearthstone","J4CKIECHAN",	"TheJWittz"]

         // var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/featured';
          //var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/esl_hearthstone'





    //
    for (var i = 0; i < streamChannel.length; i++) {

      var  streamIDChannel=streamChannel[i]

        trequest(streamIDChannel)






    }


    function trequest(streamIDChannel) {
        var request = new XMLHttpRequest();
        var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/'+streamIDChannel
        request.open('GET', urlsrc, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);

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




                    insertblock();
                    function insertblock(){
                        var d1 = document.getElementById("insert");
                        //console.log(d1);
                       // var innahtml ='<div class="row marketing"><div class="col-md-10" id="insertchannel"><h4>'+channelName+'</h4><div class="block"><img src='+channelLogo+'><p></p><p>'+channelUrl+'</p></div></div></div>'
                       //  var innahtml ='<div class="row marketing"><div class="col-md-10" id="insertchannel"><h4>'+channelName+'</h4><div class="block"><img src='+channelLogo+'><p>'+channelStatus+'</p><p>'+channelUrl+'</p></div></div></div>'

                        var innahtml ='<div class="row marketing"><div class="col-md-12" id="insertchannel"><h4>'+channelName+'</h4><div class="flex-container"><div class="column"><img src='+channelLogo+'></div><div class="column bg-alt"><p>'+channelStatus+'</p><p>'+channelUrl+'</p></div></div></div>'

                      //  console.log(innahtml);
                        d1.insertAdjacentHTML('beforeend', innahtml)

                    }







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