/*-----------------------Interfaces de Usuario-------------------------*/
/*---------------------Angel Luis Alonso Blazquez----------------------*/
/*---------------------Kevin Santiago Diaz Delgado---------------------*/
/*------------------------Marcos Arroyo Ruiz---------------------------*/
/*--------------------100363923|100363919|100293563--------------------*/


/* Help */

$(window).ready(function(){
    $('p').click(function(){
          $(this).next().slideToggle();
    })
 });

$(document).ready(function(){   //jQuery

    $('#phoneMenu').hide();
    glbVars();
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

/* Addicional functions */

function clearStorage(){ // Clear LS
    localStorage.clear();
    redirect('home.html');
}

function show(toshow){ // Change MainContent display
    document.getElementById('results-container').style.display = "none";
    document.getElementById('totalResults').style.display = "none";
    document.getElementById('pSecondaryId').style.display = "none";
    document.getElementById('patron').style.display = "none";
    document.getElementById(toshow).style.display = "block";
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

function redirect(where){ // Redirect
    window.location.href = where;
}