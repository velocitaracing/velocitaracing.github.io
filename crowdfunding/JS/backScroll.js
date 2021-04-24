var velocity = 0.5;
function update(){ 
    var pos = $(window).scrollTop(); 
    $('#home').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var scrollHeight = $('#home').position().top;
        var height = scrollHeight;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
        // $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
       }); 
       };
    
$(window).bind('scroll', update);
