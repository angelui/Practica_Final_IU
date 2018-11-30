/*-----------------------Interfaces de Usuario-------------------------*/
/*---------------------Angel Luis Alonso Blazquez----------------------*/
/*---------------------Kevin Santiago Diaz Delgado---------------------*/
/*------------------------Marcos Arroyo Ruiz---------------------------*/
/*--------------------100363923|100363919|100293563--------------------*/

$(document).ready(function(){   //jQuery

    $('.headMenu').hover(showMenu);

    function showMenu(){
        $('#downMenuLanguage').slideToggle();
        $('#downMenuUnlogged').slideToggle();
    }
    
});