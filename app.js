$(function() {
    // https://github.com/Stereobit/dragend
    $( ".draggable" ).draggable();

    $('ul.article-list li').hammer().bind("panleft panright tap",  function(ev) {
        console.log(ev.type +" gesture detected.");
    });
});
