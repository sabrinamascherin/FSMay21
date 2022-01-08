$(document).ready(function(){
    $('#submit').click(function(){
             
    });


    $('#username').keyup(function(){
        let username = $('#username').val();

        if(username === ''){
            $('#username').show();
            $('#username').addClass('is-invalid');
            $('#validationServer03Feedback').show().html('You must enter a username.');            
            return;
        }
        else{
            $('#usernameHelp').hide();
        }

        if(username.length < 6){
            $('#username').addClass('is-invalid');
            $('#validationServer03Feedback').show().html('Username must be at least 6 characters.');            
            return;
        }else{
            $('#username').addClass("valid");
        }   
    });

    
    $('#image').keyup(function(){
        let image = $('#image').val();

        if(image === ''){
            $('#image').show();
            $('#image').addClass('is-invalid');
            $('#validationServer03Feedback2').show().html('Cannot be empty.');            
            return;
        }
        else{
            $('#imageHelp').hide();
        }

        if(image.length == 0){
            $('#image').addClass('is-invalid');
            $('#validationServer03Feedback2').show().html('Cannot be empty.');            
            return;
        }   
    });

    
    $('#comment').keyup(function(){
        let comment = $('#comment').val();

        if(comment === ''){
            $('#comment').show();
            $('#comment').addClass('is-invalid');
            $('#validationServer03Feedback3').show().html('Cannot be empty.');            
            return;
        }
        else{
            $('#commentHelp').hide();
        }

        if(comment.length == 0){
            $('#comment').addClass('is-invalid');
            $('#validationServer03Feedback3').show().html('Cannot be empty.');            
            return;
        }
        else{
            $(comment.length > 0);{
                $('#comment').addClass('valid');
                return;
            }
        } 
    });
});