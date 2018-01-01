window.addEventListener("load", function() {
    //console.log("All resources finished loading!");
    var activity=2;

    //var streamChannel = ["freecodecamp","ESL_SC2", "OgamingSC2"];
    var streamChannel = ["freecodecamp","capcomfighters","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx",  "noobs2ninjas","Hearthstone","J4CKIECHAN",	"TheJWittz"];
    var channelName,
        channelStatus,
        channelLogo,
        channelUrl;

    var el = document.getElementsByClassName("row marketing");

    allChannels(activity);

    ////filtration

    var all_el = document.getElementById("allChannels");

    var actve_el = document.getElementById("activeChannels")

    var noactve_el = document.getElementById("noactiveChannels");



    all_el.addEventListener("click",allChannels,false);

    actve_el.addEventListener("click",activeChannels,false);

    noactve_el.addEventListener("click",noactiveChannels,false);


    function allChannels()
    {

        var activity=2;

         for (var i in streamChannel) {

            var  streamIDChannel=streamChannel[i];

            if (el) {

                clearlist(el);
            }

            trequest(streamIDChannel,activity);


        }

    }

    function activeChannels() {

        var activity=1;

        for (var i in streamChannel) {

            var  streamIDChannel=streamChannel[i];


            if (el) {

                clearlist(el);

            }

            trequest(streamIDChannel,activity);


        }

    }

    function noactiveChannels() {

        var activity=0;

        for (var i in streamChannel) {

            var  streamIDChannel=streamChannel[i];

            if (el) {

                clearlist(el);

            }


            trequest(streamIDChannel,activity);



        }

    }

    ///end filtration


    function trequest(streamIDChannel,activity) {

        var request = new XMLHttpRequest();

        var urlsrc = 'https://wind-bow.glitch.me/twitch-api/streams/'+streamIDChannel;

        request.open('GET', urlsrc, true);

        request.onload = function () {

            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);

                if (data.stream == null && activity !==1  ) {

                    offtrequest(streamIDChannel)
                }

                else if (activity !==0 ) {

                    channelStatus = data.stream.channel.status;
                    channelName = data.stream.channel.name;
                    channelLogo = data.stream.channel.logo;
                    channelUrl = data.stream.channel.url;

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

                channelStatus = 'offline';

                channelLogo = data.logo;

                channelUrl = 'https://www.twitch.tv/'+streamIDChannel

                channelName = data.display_name;


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

    //del
    function  clearlist(el) {

        console.log('if (paras) delete')


            Array.prototype.forEach.call(el, function (para) {

                if (para.getAttribute("class") === "row marketing")

                    para.parentNode.removeChild(para);



            });


    }

    // end del







    //close  window.addEventListener
});