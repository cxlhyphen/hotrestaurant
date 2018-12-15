//FE Scripts

//Grab form data
//on button submit...
$("#submit").on("click", function() {

    event.preventDefault();

    let newRes = {
        name: $("#name").val().trim(),
        number: $("#phone").val().trim(),
        emailadd: $("#emailadd").val().trim(),
        guests: $("#guests").val().trim()
    };

    console.log(newRes);

});

//POST form data to server
let URL = window.location.origin;

//$.post(url,[data],[callback],[type]);
/*
Parameter Description:
url: request url from which you want to submit & retrieve the data.
data: json data to be sent to the server with request as a form data.
callback: function to be executed when request succeeds.
type: data type of the response content.
*/

$.post(URL+"/api/tables", newRes, function(newRes) {
    //

    //
});