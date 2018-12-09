/*-----------------------Interfaces de Usuario-------------------------*/
/*---------------------Angel Luis Alonso Blazquez----------------------*/
/*---------------------Kevin Santiago Diaz Delgado---------------------*/
/*------------------------Marcos Arroyo Ruiz---------------------------*/
/*--------------------100363923|100363919|100293563--------------------*/

$(document).ready(function(){   //jQuery

    glbVars();
    $('.headMenu').hover(showMenu);

    function showMenu(){
        $('#downMenuLanguage').slideToggle();
        var log = JSON.parse(localStorage.getItem('globalVariables')).logged;

        if(log == 0){
            $('#downMenuUnlogged').slideToggle();
        }
        if(log == 1){
            $('#downMenuLogged').slideToggle();
        }
        if(log == 2){
            $('#downMenuHost').slideToggle();
        }
    }
    
});

/* Global Variables in Local Storage */

function glbVars(){
    if(localStorage.length == 0){
        var users = [], hosts = [];
        var globalVariables = {
            logged: 0, // 0 = unloggued // 1 = loggued // 2 = host account //
            user: 'none'
        }
        localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('hosts', JSON.stringify(hosts));
    }
}

/* Login */

function login(){
    var data = [], found = 0;
    data = JSON.parse(localStorage.getItem('users'));

    for(var i=0; i < data.length; i++){
        if(data[i].username == document.getElementById('usernameLog').value){
            if(data[i].password == document.getElementById('passwordLog').value){
                var globalVariables = {
                    logged: data[i].type,
                    user: data[i].username
                }
                localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
                window.location.href = "home.html";
                found++;
            }
            i = data.length;
        }
    }
    if(found < 1){alert("Login incorrecto");}
}

/* Pop-up */

var popupVisible = false;

function changePopUpStatus(element, i){
    var popup = document.getElementById("popup");

    if(!popupVisible){
        popup.classList = "popupVisible";
        popupVisible = true; 
    }
    else if(popupVisible){
        popup.classList = "popupNotVisible";
        popupVisible = false;
    } 
}

/* Slide */

window.addEventListener('load', function() {

    var slideIndex = 0;
    showSlides();
    function showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,5000);
    }

});

/* Addicional functions */

function clearStorage(){ // Clear LS
    localStorage.clear();
}

function show(){ // Change MainContent display
    document.getElementById('pay').style.display = "none";
    document.getElementById('paid').style.display = "block";
}

function endSession(){ // Logout
    var globalVariables = {
        logged: 0,
        user: "none"
    }
    localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
    window.location.href = "home.html";
}

function redirect(where){ // Redirect
    window.location.href = where;
}

function payButton(){
    if(document.getElementById('numTarjeta-1').value == "" || document.getElementById('numTarjeta-2').value == "" || document.getElementById('numTarjeta-3').value == "" || document.getElementById('numTarjeta-4').value == "" || document.getElementById('nombreYApellido').value == "" || document.getElementById('ccv').value == ""){
        alert('Rellene todos los campos antes de continuar')
    }
    else{
        show();
    }
}
