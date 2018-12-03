/*-----------------------Interfaces de Usuario-------------------------*/
/*---------------------Angel Luis Alonso Blazquez----------------------*/
/*---------------------Kevin Santiago Diaz Delgado---------------------*/
/*------------------------Marcos Arroyo Ruiz---------------------------*/
/*--------------------100363923|100363919|100293563--------------------*/

var logged = 2; // 0 = unloggued // 1 = loggued // 2 = host account //

$(document).ready(function(){   //jQuery

    $('.headMenu').hover(showMenu);

    function showMenu(){
        $('#downMenuLanguage').slideToggle();

        switch (logged){
            case 0:
                $('#downMenuUnlogged').slideToggle();
                break;
            case 1:
                $('#downMenuLogged').slideToggle();
                break;
            case 2:
                $('#downMenuHost').slideToggle();
                break;
        }
    }
    
});

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

function show(toshow){
    document.getElementById("persInfForm").style.display = "none";
    document.getElementById("persInfFormAdv").style.display = "none";
    document.getElementById("addHost").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById(toshow).style.display = "block";
}

function endSession(){
    logged = 0;
    window.location.href = "home.html";
}