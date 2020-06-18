var apikey = "?key=AIzaSyAZbFAimTZCyGjA_Y_ezaolVW-9hgPdUeM"
$('#location-button').click(function () {
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            $.get("https://maps.googleapis.com/maps/api/geocode/json" + apikey + "&latlng=" +
                position.coords.latitude + "," + position.coords.longitude + "&sensor-false", function (data) {
                    console.log(data);
                })

            var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap" + apikey + "&center=" +
                position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensoe=false";
            $('#output').append(img);

        });
    else
        console.log("geolocation is not supported");
});