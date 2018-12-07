/*-----------------------Interfaces de Usuario-------------------------*/
/*---------------------Angel Luis Alonso Blazquez----------------------*/
/*---------------------Kevin Santiago Diaz Delgado---------------------*/
/*------------------------Marcos Arroyo Ruiz---------------------------*/
/*--------------------100363923|100363919|100293563--------------------*/

var logged = 0; // 0 = unloggued // 1 = loggued // 2 = host account //

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

/*falta hacer la funcion de pagar y que ponga el mensaje de exito*/