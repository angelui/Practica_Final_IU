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
    alert("Login incorrecto");
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

/* Addicional functions */

function clearStorage(){ // Clear LS
    localStorage.clear();
}

function show(toshow){ // Change MainContent display
    document.getElementById(toshow).style.display = "block";
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