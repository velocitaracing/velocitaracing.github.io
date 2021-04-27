var velocity = 0.5;
function update(){ 
    var pos = $(window).scrollTop(); 
    $('#career-heading-new').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var scrollHeight = $('#home').position().top;
        var height = scrollHeight;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
        // $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
       }); 
       };
    
$(window).bind('scroll', update);




var heading = $("#propHeading");
var iconButton = $(".slabs");
iconButton.on("click", function() {
    $("#propHeading").removeClass('aos-animate');
    $("#propOne").removeClass('aos-animate');
    $("#goodies").removeClass('aos-animate');
    $("#myImage").removeClass('aos-animate');
    setTimeout(function() {
        $("#propHeading").addClass('aos-animate');
        $("#propOne").addClass('aos-animate');
        $("#goodies").addClass('aos-animate');
        $("#myImage").addClass('aos-animate');
    }, 200);
});