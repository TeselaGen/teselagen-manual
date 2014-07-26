$( document ).ready(function() {
        $(".summary > .chapter > a").click(function() {
                $(this).parent().find('> ul').slideToggle();
                return false;
            });

        $(".chapter ").find('> a').first().on('click', function(){
		window.location = "/manual/";   
	    });


        $(".summary > .chapter > a").parent().find('> ul').hide();
    });
