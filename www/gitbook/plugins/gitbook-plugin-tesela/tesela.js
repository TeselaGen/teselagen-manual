$( document ).ready(function() {
    $(".summary > .chapter > a").unbind('click').click(function() {
                $(this).parent().find('> ul').slideToggle();
                return false;
           });

    $(".chapter ").find('> a').first().on('click', function(){
	    window.location = "/";
    });

    $(".summary > .chapter > a").parent().find('> ul').hide();
    console.log('ready');
  });
