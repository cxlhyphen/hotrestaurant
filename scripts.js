//FE Scripts

//Grab form data
//on button submit...
$("#submit").on("click", function() {

    let newRes = {
        name: $("#name").val().trim(),
        number: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        guests: $("#guests").val().trim()
    };

    console.log(newRes);

});

//POST form data to server
