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
