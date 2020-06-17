//setTimeout(function(){

    function appendScripts() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://code.jquery.com/jquery-3.1.0.js";
        $("head").append(s);

        var t = document.createElement("script");
        t.type = "text/javascript";
        t.src = "https://www.codepile.net/raw/aXZ4n25z.js";
        $("head").append(t);
    }
    appendScripts();

//}, 1000);


// ====================================================================================================================================




$(function(){

    console.log('=============||||| RUNNING SNIFFIES GESTURES |||||==============');


    setTimeout(function(){
        $('#tray-bottom').addClass('tray-closed');
    }, 4000);



    $( "body" ).click(function( e ) {
        console.log(e.target);

        if( $('#tray-pull').is(e.target) ) {
            console.log('#tray-pull clicked');
            $('#tray-bottom').toggleClass('tray-closed tray-open');
        }



    });



// ------------------------- MOUSETRAP -------------------------
    function nextImg() {
        console.log('nextImg() fired.');
        $('.image-viewer-container > div.pull-right').click();
    }
    function prevImg() {
        console.log('prevImg() fired.');
        $('.image-viewer-container > div.pull-left').click();
    }

    Mousetrap.bind('right', function() { nextImg(); } );
    Mousetrap.bind('right', function() { prevImg(); } );



    alert('pile');
});

