$(document).ready(function(){


    //$('.square1').click(function(){
    //    $(this).css("background-color","#001a79");
    //});
    //$('.square2').click(function(){
    //    $(this).css("background-color","#001a79");
    //});
    //$('.square3').click(function(){
    //    $(this).css("background-color","#001a79");
    //});
    //$('.square4').click(function(){
    //    $(this).css("background-color","#001a79");
    //});


    $(function () {
        $('#tables').each(function () {
            if (this.href == location) { // sprawdzamy, czy adres odnoœnika jest równy aktualnemu adresowi
                $(this).css('background-color', 'white');
            }
        });
    });




});