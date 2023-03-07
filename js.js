
        function validation(){
            var user = document.getElementById('user').value;
            var LastName = document.getElementById('lname').value;
            var MobileNumber = document.getElementById('Mobile').value;
            var Emailid =document.getElementById('eid').value;
        
        if(user == ""){
            document.getElementById('username').innerHTML =" ** Please fill the username field";
            return false;
        }
        if((user.length <= 2)||(user.length >20)){
            document.getElementById('username').innerHTML =" ** user length must be 2 to 20 characters";
            return false;
        }
    
        if(! isNaN(user)){
            document.getElementById('username').innerHTML =" ** Numbers not allowed";
            return false;
        }
        
        if(LastName == ""){
            document.getElementById('LastName').innerHTML =" ** Please fill the last name field";
            return false;
        }
        if((LastName.length <= 2)||(LastName.length >20)){
            document.getElementById('LastName').innerHTML =" ** user length must be 2 to 20 characters";
            return false;
        }
        
        if(MobileNumber == ""){
            document.getElementById('MobileNumber').innerHTML =" ** Please fill the mobile no. field";
            return false;
        }
        if(isNaN(MobileNumber)){
            document.getElementById('MobileNumber').innerHTML =" ** user must write only digits not charachters";
            return false;
        }
        if(MobileNumber.length!=10){
            document.getElementById('MobileNumber').innerHTML =" ** user length must be 10 characters";
            return false;
        }


        if(Emailid == ""){
            document.getElementById('Email id').innerHTML =" ** Please fill the email id field";
            return false;
        
        }
        if(Emailid.indexOf('@gmail.com')<= 0){
            document.getElementById('Email id').innerHTML =" ** @ invalid position";
            return false;
        }

    
       
        }
        
        