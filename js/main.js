$(document).ready(function() {
    $( ".card" ).click(function() {
        $( ".card" ).toggleClass( "green" );
        $( ".card__button" ).toggleClass( "green" );
        $( ".card__button" ).toggleClass( "card__button--hidden" );
    });
});