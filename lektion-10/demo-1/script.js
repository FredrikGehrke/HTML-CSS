$(function() {

    $('#regForm').submit((e) => {
        e.preventDefault();

        if($('#email').val() === '') {
            // console.log('värdet är tomt');
            $('#email').addClass('is-invalid'); // Om det blir fel.
            $('#email').focus();
        } else {
            $('#firstName').removeClass('is-invalid'); // Ta bort klassen.
            $('#firstName').addClass('is-valid'); // Lägg till valid.
        }

        if($('#lastName').val() === '') {
            $('#lastName').addClass('is-invalid');
            $('#lastName').focus();
        } else {
            $('#lastName').removeClass('is-invalid'); // Ta bort klassen.
            $('#lastName').addClass('is-valid'); // Lägg till valid.
        }



    });

});



// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }