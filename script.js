    $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
          $(".navbar").css("background" , "#36255a");
        }
  
        else{
            $(".navbar").css("background" , "none");  	
        }
    });
    $('#save-info').click(function(){
        var name = $('#name').val();
        var phone = $('#phone-no').val();
        var email = $('#email').val();
        var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var email2 = email_regex.test(email);
        if(name == ""){
            $('#name_err').html('Name is Required');
            return false
        }else{
            $('#name_err').html('');
        }
        if(phone == ""){
            $('#phone_err').html('Phone Number is Required');
            return false
        }else{
            $('#phone_err').html('');
        }
        if(email == ""){
            $('#email_err').html('Email is Required');
            return false
        }
        else if(!email2){
            $('#email_err').html('Please enter valid email');
            return false
        }
        else{
            $('#email_err').html('');
        }
    });
    $('#save-info_b').click(function(){
        var name_b = $('#name_b').val();
        var phone_b = $('#country-code').val();
        var email_b = $('#email_b').val();
        var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var email = email_regex.test(email_b);
        if(name_b == ""){
            $('#name_err_b').html('Name is required');
            return false
        }else{
            $('#name_err_b').html('');
        }
        if(phone_b == ""){
            $('#phone_err_b').html('Phone No is required');
            return false
        }else{
            $('#phone_err_b').html('');
        }if(email_b == ""){
            $('#email_err_b').html('Email is required');
            return false
        }else if(!email){
            $('#email_err_b').html('Please enter valid email');
            return false
        }else{
            $('#email_err_b').html('');
        }
        $('<a href="bayz-101-brochure.pdf" download>')[0].click();
    });

    $('#country-code').on('input', function(){
        $('#country-code').val($('#country-code').val().replace(/[^0-9]/g,''));
    });

    });
