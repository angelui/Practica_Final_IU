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

function clearStorage(){
    localStorage.clear();
}

function glbVars(){
    if(localStorage.length == 0){
        var users = [], hosts = [];
        var globalVariables = {
            logged: 0, // 0 = unloggued // 1 = loggued // 2 = host account //
            user: "none"
        }
        localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('hosts', JSON.stringify(hosts));
    }
}

/* Login */

function login(){
    var data = [];
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
            }
            i = data.length;
        }
    }
}

var popupVisible = false;

function changePopUpStatus(element, i){
    var popup = document.getElementById("popup");
    var popupContainer = document.getElementById("popup-container");
    var caller = element;
    var callerClass = element.className;
    var index = i;
    /*
    if(callerClass.localeCompare("lastOptitle") == 1){
        var image = document.getElementById("popup-img");
        var name = document.getElementById("popup-name");
        var webDir = document.getElementById("popup-webDir");
        var description = document.getElementById("popup-description");
        var imgSrc = caller.previousElementSibling.src;
        var descSrc = caller.nextElementSibling.innerHTML;
        var txtArray = caller.innerHTML.split("<br><br>");
        var contact = document.getElementById("popup-tlfno");
        var econClass = document.getElementById("popup-econ");
        
        image.src = imgSrc;
        image.alt = txtArray[0];
        description.innerHTML = descSrc;
        if(index == 0){
            webDir.href = "https://www.marinabaysands.com";
            name.innerHTML = txtArray[0].concat("<br><br>","10 Bayfront Avenue, ", txtArray[1]);
            contact.innerHTML = "Tlfno: +65 6688 8888";
            econClass.innerHTML = "Clase económica: muy alta";
        } 
        else if(index == 1){
            webDir.href = "https://www.espanol.marriott.com/hotels/travel/madwi-the-westin-palace-madrid/";
            name.innerHTML = txtArray[0].concat("<br><br>","Plaza de las Cortes, 7, 28014, ", txtArray[1]);
            contact.innerHTML = "Tlfno: +34 913 60 80 00";
            econClass.innerHTML = "Clase económica: alta";
        }
        else if(index == 2){
            webDir.href = "http://hotelclarkbudapest.hu/";
            name.innerHTML = txtArray[0].concat("<br><br>","1, Clark Ádám tér, 1013, ", txtArray[1]);
            contact.innerHTML = "Tlfno: +36 20 515 2886";
            econClass.innerHTML = "Clase económica: alta";
        }
        else if(index == 3){
            webDir.href = "https://www.hotel-ariane.fr/es/";
            name.innerHTML = txtArray[0].concat("<br><br>","35 rue de la Sablière, 75014, ", txtArray[1]);
            contact.innerHTML = "Tlfno: +33 (0)1 45 45 67 13";
            econClass.innerHTML = "Clase económica: alta";
        }
         
        popup.classList = "popupVisible";
        popupVisible = true;
    }*/

    if(!popupVisible){
        popup.classList = "popupVisible";
        popupVisible = true; 
    }
    else if(popupVisible){
        popup.classList = "popupNotVisible";
        popupVisible = false;
    } 
}

function endSession(){
    var globalVariables = {
        logged: 0,
        user: 'none'
    }
    localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
    window.location.href = "home.html";
}