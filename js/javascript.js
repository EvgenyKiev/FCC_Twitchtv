window.addEventListener("load", function() {
    console.log("All resources finished loading!");


    var request = new XMLHttpRequest();
    request.open('GET', 'https://wind-bow.glitch.me/twitch-api/streams/23932774784', true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var data = JSON.parse(this.response);
            
            console.log(data)

        } else {
            // We reached our target server, but it returned an error

        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();


})