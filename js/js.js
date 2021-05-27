/** BIENVENUE DANS LE JAVASCRIPT DE AUTOS  *****************************************************************/


/*VIDEO Acceleration************************************************************************************ */
var vid = document.getElementById("goldcar");
vid.playbackRate = 2;

/*AFFICHAGE NUMERO TELEPHONE******************************************************************************** */
let images = document.querySelector("#lightbulb");
let button = document.querySelector("#bubu");

function numero() {
    if (button.innerHTML == "Obtenir le numéro") {
        images.src="./img/numon.jpg"
        button.textContent = "Disponible 7j/7";
    
    }
    else {
        images.src = "./img/numoff.jpg";
        button.textContent = "Obtenir le numéro";
    }
     }

/* FORMULAIRE DE CONTACT************************************************************************************ */


function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}

button.addEventListener("click", numero);