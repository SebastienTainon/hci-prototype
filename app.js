$(function() {
    // https://github.com/Stereobit/dragend
    $( ".draggable" ).draggable();

    $('ul.article-list li').hammer().bind("panleft panright",  function(ev) {
        console.log(ev.type +" gesture detected.");
    });

    $('ul.article-list li.slidable').hammer().bind("tap",  function(ev) {
        if ($(this).find('.summary').css('display') === 'none') {
        	$(this).find('.summary').slideDown();
        } else {
        	$(this).find('.summary').slideUp();
        } 	
    });

    $('ul.favourite-articles li.slidable').hammer().bind("tap",  function(ev) {
        if ($(this).find('.summary').css('display') === 'none') {
            $(this).find('.summary').slideDown();
        } else {
            $(this).find('.summary').slideUp();
        }   
    });

    $('ul.article-list li.slidable').hammer().bind("panleft",  function(ev) {
        $(this).css('height', '61px');
        $(this).animate({backgroundColor: "red"}, { duration: 400, queue: false });
        $(this).hide("slide", { direction: "left" }, 700);
    });

    $('ul.favourite-articles li.slidable').hammer().bind("panleft",  function(ev) {
        $(this).css('height', '61px');
        $(this).animate({backgroundColor: "red"}, { duration: 400, queue: false });
        $(this).hide("slide", { direction: "left" }, 700);
    });


    $('ul.favourite-articles li.slidable').hammer().bind("panright",  function(ev) {
        $(this).css('height', '61px');
        $(this).hide("slide", { direction: "right" }, 700, function() {
            $('ul.favourite-articles').hide();
            var id = $(this).attr('article-number');
            $('#article' + id).show("slide", { direction: "left" }, 200);
            $(this).show();
        });
    });

    $('ul.article-list li.slidable').hammer().bind("panright",  function(ev) {
        $(this).css('height', '61px');
        $(this).animate({backgroundColor: "green"}, { duration: 400, queue: false });
        $(this).hide("slide", { direction: "right" }, 700, function() {
            $('ul.article-list').hide();
            var id = $(this).attr('id');
            $('#article' + id).show("slide", { direction: "left" }, 200);
            $('#favourite' + id).show();
        });
    });

    $('#back-button').on('click', function(ev) {
        if ($('ul.article-list').css('display') === 'none') {
            $('.article').hide();
            $('ul.favourite-articles').hide();
            $('ul.article-list').show("slide", { direction: "right" }, 200);

        } 
    });

    $('#favourite-button').on('click', function(ev) {
        $('ul.article-list').hide();
        $('.article').hide();
        $('ul.favourite-articles').show("slide", { direction: "right" }, 200);
    });

});
