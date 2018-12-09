/*-----------------------Interfaces de Usuario-------------------------*/
/*---------------------Angel Luis Alonso Blazquez----------------------*/
/*---------------------Kevin Santiago Diaz Delgado---------------------*/
/*------------------------Marcos Arroyo Ruiz---------------------------*/
/*--------------------100363923|100363919|100293563--------------------*/

$(document).ready(function(){   //jQuery

    $('#phoneMenu').hide();
    glbVars();
    choose();
    $('.headMenu').hover(showMenu);
    $('#menuIcon').click(phoneMenuToggle);

    /* Menu */

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

    /* Phone Menu */

    function phoneMenuToggle(){
        var log = JSON.parse(localStorage.getItem('globalVariables')).logged;

        if(log == 0){
            $('#menuP0').show();
            $('#menuP1').hide();
            $('#menuP2').hide();
        }
        if(log == 1){
            $('#menuP0').hide();
            $('#menuP1').show();
            $('#menuP2').hide();
        }
        if(log == 2){
            $('#menuP0').hide();
            $('#menuP1').hide();
            $('#menuP2').show();
        }
        $('#phoneMenu').slideToggle();
    }
    
});

/* Global Variables in Local Storage */

function glbVars(){
    if(localStorage.length == 0){
        var users = [], hosts = [];
        var globalVariables = {
            logged: 0, // 0 = unloggued // 1 = loggued // 2 = host account //
            user: 'none',
            host: 'none'
        }
        localStorage.setItem('globalVariables', JSON.stringify(globalVariables));

        localStorage.setItem('users', JSON.stringify(users));

        hosts[0] = {
            hostName: "TRYP Madrid Leganés Hotel",
            hostDescription: "TRYP Madrid Leganés hotel es la mejor opción para alojarte en Leganés. Además, el hotel se encuentra a tan solo 12 km de la Puerta del Sol de Madrid y muy próximo a la Warner Bros Park y al Parque de Nieve Xanadú. El Hotel TRYP Leganés está perfectamente comunicado por las autovías M30, M40 y M50 tanto con la capital como con las zonas industriales del sur: Getafe, Fuenlabrada, Alcorcón. Además está situado junto a los barrios de la capital de Carabanchel y Villaverde.",
            hostPrice: "54€ por noche",
            hostImg1: "https://x.cdrst.com/foto/hotel-sf/fad8/granderesp/hotel-elegance-getafe-zonasnobles-4330a8b.jpg",
            hostImg2: "https://y.cdrst.com/foto/hotel-sf/fad8/granderesp/hotel-elegance-getafe-banio-4330a89.jpg",
            hostImg3: "https://x.cdrst.com/foto/hotel-sf/1139f/granderesp/abad-san-antonio-restauracion-4260019.jpg",
            hostAddress: "Leganés",
            hostAddressHtml: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.5792316786433!2d-3.7660006846067398!3d40.3294949793753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189f5549d2b73%3A0x5ea63cac4566b32f!2sTRYP+Madrid+Legan%C3%A9s+Hotel!5e0!3m2!1ses!2ses!4v1544319472897"
        }
        hosts[1] = {
            hostName: "Hotel Nuevo Madrid",
            hostDescription: "Este hotel elegante se encuentra en el norte de la ciudad, a 10 minutos en coche del centro de convenciones IFEMA y con acceso directo desde la autopista M30. Ofrece centro de fitness y relajación y servicio de traslado gratuito los fines de semana. as habitaciones del Nuevo Madrid presentan una decoración elegante en tonos suaves. Disponen de aire acondicionado, minibar, caja fuerte, TV de pantalla plana vía satélite y WiFi gratuita.",
            hostPrice: "70€ por noche",
            hostImg1: "https://z.cdrst.com/foto/hotel-sf/b17/granderesp/hotel-gran-atlanta-zonasnobles-43309a2.jpg",
            hostImg2: "https://x.cdrst.com/foto/hotel-sf/1b1f/granderesp/hotel-mirador-de-chamartin-habitacion-431776c.jpg",
            hostImg3: "https://centrhotel.com/wp-content/uploads/2017/12/dear_galeria_29.jpg",
            hostAddress: "Madrid",
            hostAddressHtml: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.248556537395!2d-3.671524085098332!3d40.46976587935893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422936c40fb971%3A0xfbcc0d785086e714!2sHotel+Nuevo+Madrid!5e0!3m2!1ses!2ses!4v1544319649852"
        }
        hosts[2] = {
            hostName: "Ibis Murcia",
            hostDescription: "Ibis hotel en Murcia de dos estrellas está situado a 800 metros del casco histórico de la ciudad y a 3 km del Palacio de Congresos y del Parque de Exposiciones. Todas las habitaciones están totalmente equipadas con aire acondicionado, calefacción, televisión y Wifi para ofrecerte el mayor confort. Dispone de servicio de restaurante, snack/bar 24h y parking cubierto, siempre al mejor precio. Sin duda, el mejor establecimiento hotelero low cost en Murcia tanto para viajes de negocios como para aquellos de placer y ocio.",
            hostPrice: "42€ por noche",
            hostImg1: "https://x.cdrst.com/foto/hotel-sf/978d/granderesp/hotel-nuevo-torreluz-zonasnobles-2e1b6fe.jpg",
            hostImg2: "https://z.cdrst.com/foto/hotel-sf/978d/granderesp/hotel-nuevo-torreluz-restauracion-2e1b6f9.jpg",
            hostImg3: "https://y.cdrst.com/foto/hotel-sf/b17/granderesp/hotel-gran-atlanta-habitacion-433099f.jpg",
            hostAddress: "Murcia",
            hostAddressHtml: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.910831725714!2d-1.14508428518948!3d38.00254027971864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63818f72a79a4d%3A0x14b4c5f96e6ed4e0!2sIbis+Murcia!5e0!3m2!1ses!2ses!4v1544320307601"
        }
        localStorage.setItem('hosts', JSON.stringify(hosts));
    }
}

/* Choose method */

function choose(){
    var log = JSON.parse(localStorage.getItem('globalVariables')).logged;

    if(log == 0){
        show('register');
    }
    if(log == 1){
        show('persInfForm');
    }
    if(log == 2){
        show('persInfForm');
    }
    showInf();
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
                    user: data[i].username,
                    host: 'none'
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
            
        if(searchStorage('username', 'users', 'Reg') == 1){
            if(document.getElementById('usernameReg').value != "" || document.getElementById('usernameReg').value == "none"){
                alert("Nombre de usuario ya en uso. Inténtelo con otro diferente");
            }
            error++;
        }
    }

    if(error==0){
    
        if(searchStorage('email', 'users', 'Reg') == 1){
            if(document.getElementById('emailReg').value != ""){
                alert("Cuenta ya registrada con ese correo. Inténtelo de nuevo con otra cuenta de correo");
            }
            error++;
        }
    }
    
    if(error == 0){
        var data = [], reservesArray = [];
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
            type: document.getElementById('loggedReg').value,
            reserves: reservesArray
        }
        localStorage.setItem('users', JSON.stringify(data));

        var globalVariables = {
            logged: document.getElementById('loggedReg').value,
            user: document.getElementById('usernameReg').value,
            host: 'none'
        }
        localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
        window.location.href = "home.html";
    }
}

function regHostStorage(){
    var error = 0;

    if(document.getElementById('hostNameReg').value == "" || document.getElementById('hostDescriptionReg').value == "" || document.getElementById('hostPriceReg').value == "" || document.getElementById('hostImg1Reg').value == "" || document.getElementById('hostImg2Reg').value == "" || document.getElementById('hostImg3Reg').value == "" || document.getElementById('hostAddressReg').value == "" || document.getElementById('hostAddressHtmlReg').value == ""){
        alert("Debe rellenar todos los campos");
        error++;
    }

    if(error == 0){
        if(document.getElementById('hostPriceReg').value < 0){
            alert("Precio no válido");
            error++;
        }
    }

    if(error == 0){
        if(searchStorage('hostName', 'hosts', 'Reg') > 0){
            alert("Nombre ya registrado, inténtelo con otro");
            error++;
        }
    }
    
    if(error == 0){
        var data = [];
        data = JSON.parse(localStorage.getItem('hosts'));

        data[data.length] = {
            hostName: document.getElementById('hostNameReg').value,
            hostDescription: document.getElementById('hostDescriptionReg').value,
            hostPrice: document.getElementById('hostPriceReg').value,
            hostImg1: document.getElementById('hostImg1Reg').value,
            hostImg2: document.getElementById('hostImg2Reg').value,
            hostImg3: document.getElementById('hostImg3Reg').value,
            hostAddress: document.getElementById('hostAddressReg').value,
            hostAddressHtml: document.getElementById('hostAddressHtmlReg').value
        }
        localStorage.setItem('hosts', JSON.stringify(data));
        alert('Alojamiento añadido con éxito');
    }

}

/* Search in Local Storage */

function searchStorage(key, from, keyS){
    var data = [], err = 0, key2 = key + keyS;
    data = JSON.parse(localStorage.getItem(from));

    if(from == 'users'){
        if(key == 'username'){
            for(var i=0; i < data.length; i++){
                if(data[i].username == document.getElementById(key2).value){
                    err++;
                }
            }
        }

        if(key == 'email'){
            for(var i=0; i < data.length; i++){
                if(data[i].email == document.getElementById(key2).value){
                    err++;
                }
            }
        }
    }

    if(from == 'hosts'){
        if(key == 'hostName'){
            for(var i=0; i < data.length; i++){
                if(data[i].hostName == document.getElementById(key2).value){
                    err++;
                }
            }
        }
    }

    return err;
}

/* Change form button */

function changeForm(toForm){
    show(toForm);
    showInf();
}

/* Add basic info */

function showInf(){
    var data = [], glbVars;
    data = JSON.parse(localStorage.getItem('users'));
    glbVars = JSON.parse(localStorage.getItem('globalVariables'));

    for(var i=0; i < data.length; i++){
        if(data[i].username == glbVars.user){

            document.getElementById('usernameInf').value = data[i].username;
            document.getElementById('passwordInf').value = data[i].password;
            document.getElementById('imgInf').value = data[i].img;
            document.getElementById('nameInf').value = data[i].name;
            document.getElementById('surnameInf').value = data[i].surname;
            document.getElementById('emailInf').value = data[i].email;
            document.getElementById('addressInf').value = data[i].address;
            document.getElementById('phoneInf').value = data[i].phone;
            document.getElementById('birthdateInf').value = data[i].birthdate;

            i = data.length;
        }
    }
}

/* Change user account variables */

function updateInf(){
    var error = 0;
    if(searchStorage('email', 'users', 'Inf') > 1 || document.getElementById('emailInf').value == ""){
        if(document.getElementById('emailInf').value != ""){
            alert("Cuenta ya registrada con ese correo. Inténtelo de nuevo con otra cuenta de correo");
        }
        else{
            alert("Campo Email no válido");
        }
        error++;
    }
    
    if(error == 0){
        var data = [], glbVars = [];
        data = JSON.parse(localStorage.getItem('users'));
        glbVars = JSON.parse(localStorage.getItem('globalVariables'));

        for(var i=0; i < data.length; i++){
            if(data[i].username == glbVars.user){

                data[i].name = document.getElementById('nameInf').value;
                data[i].surname = document.getElementById('surnameInf').value;
                data[i].email = document.getElementById('emailInf').value;
                data[i].address = document.getElementById('addressInf').value;
                data[i].phone = document.getElementById('phoneInf').value;
                data[i].birthdate = document.getElementById('birthdateInf').value;
                
                localStorage.setItem('users', JSON.stringify(data));
                alert("Actualizado con éxito");
                i = data.length;
            }
        }
    }
}

function updateInfAdv(){
    var error = 0;
    if(searchStorage('username', 'users', 'Inf') > 1 || document.getElementById('usernameInf').value == ""){
        if(document.getElementById('usernameInf').value != ""){
            alert("Cuenta ya registrada con ese nombre se usuario. Inténtelo de nuevo con otro");
        }
        else{
            alert("Campo Nombre de usuario no válido");
        }
        error++;
    }
    
    if(error == 0){
        var data = [], glbVars = [];
        data = JSON.parse(localStorage.getItem('users'));
        glbVars = JSON.parse(localStorage.getItem('globalVariables'));

        for(var i=0; i < data.length; i++){
            if(data[i].username == glbVars.user){

                data[i].username = document.getElementById('usernameInf').value;
                data[i].password = document.getElementById('passwordInf').value;
                data[i].img = document.getElementById('imgInf').value;

                localStorage.setItem('users', JSON.stringify(data));

                var globalVariables = {
                    logged: glbVars.logged,
                    user: document.getElementById('usernameInf').value,
                    host: 'none'
                }
                localStorage.setItem('globalVariables', JSON.stringify(globalVariables));

                alert("Actualizado con éxito");
                i = data.length;
            }
        }
    }
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

function showH(){ // Change MainContent display
    if(JSON.parse(localStorage.getItem('globalVariables')).logged == 2){
        document.getElementById("persInfForm").style.display = "none";
        document.getElementById("persInfFormAdv").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("addHost").style.display = "block";
    }
    else{
        alert('Acción no permitida');
    }
}

function endSession(){ // Logout
    var globalVariables = {
        logged: 0,
        user: 'none',
        host: 'none'
    }
    localStorage.setItem('globalVariables', JSON.stringify(globalVariables));
    window.location.href = "home.html";
}