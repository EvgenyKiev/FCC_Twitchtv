window.addEventListener("load", function() {
    console.log("All resources finished loading!");


    var request = new XMLHttpRequest();
    request.open('GET', 'https://wind-bow.glitch.me/twitch-api/streams/featured', true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            // var data = JSON.parse(this.response);
            var data = JSON.parse(request.responseText);
            
            //console.log(data)

            var all=data.featured[0].stream.channel


            var channelName= data.featured[0].stream.channel.display_name

            var channelLogo=data.featured[0].stream.channel.logo

           var channelStatus=data.featured[0].stream.channel.status
           var channelUrl=data.featured[0].stream.channel.url

            var channelTitle=data.featured[0].title
            var channelText=data.featured[0].text




            //console.log(all)
            console.log(channelName)
            console.log(channelLogo)
            console.log(channelStatus)
            console.log(channelUrl)
            console.log(channelTitle)
            console.log(channelText)







        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();


})