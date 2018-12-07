/*-----------------------Interfaces de Usuario-------------------------*/
/*---------------------Angel Luis Alonso Blazquez----------------------*/
/*---------------------Kevin Santiago Diaz Delgado---------------------*/
/*------------------------Marcos Arroyo Ruiz---------------------------*/
/*--------------------100363923|100363919|100293563--------------------*/

$(document).ready(function(){   //jQuery

    glbVars();
    choose();
    $('.headMenu').hover(showMenu);

    function showMenu(){
        $('#downMenuLanguage').slideToggle();

        switch (JSON.parse(localStorage.getItem('globalVariables')).logged){
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

/* Choose method */

function choose(){

    switch (JSON.parse(localStorage.getItem('globalVariables')).logged){
        case 0:
            show('register');
            break;
        case 1:
            show('persInfForm');
            break;
        case 2:
            show('persInfForm');
            break;
    }
}

/* Pop-up */

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

/* Register in Local Storage */

function regStorage(){
    var error = 0;

    if(document.getElementById('usernameReg').value == ""){
        alert("El campo Nombre de usuario debe estar completo");
    }

    if(document.getElementById('passwordReg').value == ""){
        alert("El campo Contraseña debe estar completo");
        error++;
    }
    if(errPass('passwordReg') != ""){
        alert("Contraseña no válida");
        error++;
    }
    if(document.getElementById('nameReg').value == ""){
        alert("El campo Nombre debe estar completo");
        error++;
    }
    if(document.getElementById('surnameReg').value == ""){
        alert("El campo Apellidos debe estar completo");
        error++;
    }
    if(document.getElementById('emailReg').value == ""){
        alert("El campo Correo debe estar completo");
        error++;
    }
    if(document.getElementById('birthdateReg').value == ""){
        alert("El campo Fecha de nacimiento debe estar completo");
        error++;
    }
    if(document.getElementById('addressReg').value == ""){
        alert("El campo Dirección debe estar completo");
        error++;
    }
    if(!document.getElementById('checkboxReg').checked){
        alert("Debes aceptar las condiciones de uso");
        error++;
    }

    if(error==0){
            
        if(searchStorage('username', 'users') == 1){
            if(document.getElementById('usernameReg').value != ""){
                alert("Nombre de usuario ya en uso. Inténtelo con otro diferente");
            }
            error++;
        }
    }

    if(error==0){
    
        if(searchStorage('email', 'users') == 1){
            if(document.getElementById('emailReg').value != ""){
                alert("Cuenta ya registrada con ese correo. Inténtelo de nuevo con otra cuenta de correo");
            }
            error++;
        }
    }
    
    if(error == 0){
        var data = [];
        data = JSON.parse(localStorage.getItem('users'));

        data[data.length] = {
            username: document.getElementById('usernameReg').value,
            password: document.getElementById('passwordReg').value,
            img: document.getElementById('imgReg').value,
            name: document.getElementById('nameReg').value,
            surname: document.getElementById('surnameReg').value,
            email: document.getElementById('emailReg').value,
            address: document.getElementById('addressReg').value,
            phone: document.getElementById('phoneReg').value,
            birthdate: document.getElementById('birthdateReg').value,
            type: document.getElementById('loggedReg').value
        }
        localStorage.setItem('users', JSON.stringify(data));

        var globalVariables = {
            logged: document.getElementById('loggedReg').value,
            user: document.getElementById('usernameReg')
        }
        localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
        window.location.href = "home.html";
    }
}

function regHostStorage(){
    var error = 0;

    if(document.getElementById('hostPrice').value < 0){
        alert("Precio no válido");
        error++;
    }

    if(error == 0){
        if(regHostStorage('hostName', 'hosts') == 1){
            alert("Nombre ya registrado, inténtelo con otro");
            error++;
        }
    }
    
    if(error == 0){
        var data = [];
        data = JSON.parse(localStorage.getItem('users'));

        data[data.length] = {
            hostName: document.getElementById('hostNameReg').value,
            hostDescription: document.getElementById('hostDescriptionReg').value,
            hostPrice: document.getElementById('hostPriceReg').value,
            hostImg: document.getElementById('hostImgReg').value,
            hostAddress: document.getElementById('hostAddressReg').value
        }
        localStorage.setItem('hosts', JSON.stringify(data));
        alert('Alojamiento añadido con éxito');
    }

}

/* Search in Local Storage */

function searchStorage(key, from){
    var data = [], err = 0, key2 = key + 'Reg';
    data = JSON.parse(localStorage.getItem(from));

    if(from == 'users'){
        if(key == 'username'){
            for(var i=0; i < data.length; i++){
                if(data[i].username == document.getElementById(key2).value){
                    return err = 1;
                }
            }
        }

        if(key == 'email'){
            for(var i=0; i < data.length; i++){
                if(data[i].email == document.getElementById(key2).value){
                    return err = 1;
                }
            }
        }
    }

    if(from == 'hosts'){
        if(key == 'hostName'){
            for(var i=0; i < data.length; i++){
                if(data[i].name == document.getElementById(key2).value){
                    return err = 1;
                }
            }
        }
    }

    return err;
}

/* Addicional functions */

function errPass(pass){ // Check pass
    var err = "";
    var i;
    if(document.getElementById(pass).value.length > 7){ //Comprobacion longitud pass
        err = "La contraseña debe de tener como máximo 8 caracteres";
    }
    else{
        err = "";
    }

    for(i = 0; i < document.getElementById(pass).value.length; i++){ //Comprobacion letras [a-z] y dígitos [0-9]
        if((document.getElementById(pass).value.charCodeAt(i) > 47 && document.getElementById(pass).value.charCodeAt(i) < 58)  || (document.getElementById(pass).value.charCodeAt(i) > 96 && document.getElementById(pass).value.charCodeAt(i) < 123)){
           
        }
        else{
            err = "Los caracteres permitidos son letras [a-z] y dígitos [0-9]"
        }
    }
    if(pass == "passwordReg"){
        document.getElementById("errorPassword").innerHTML = err;
    }
    return err;
}

function clearStorage(){ // Clear LS
    localStorage.clear();
}

function show(toshow){ // Change MainContent display
    document.getElementById("persInfForm").style.display = "none";
    document.getElementById("persInfFormAdv").style.display = "none";
    document.getElementById("addHost").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById(toshow).style.display = "block";
}

function endSession(){ // Logout
    var globalVariables = {
        logged: 0,
        user: 'none'
    }
    localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
    window.location.href = "home.html";
}