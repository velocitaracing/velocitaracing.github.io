var velocity = 0.5;
function update(){ 
    var pos = $(window).scrollTop(); 
    $('#home').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = 0;
        $(this).css('backgroundPosition', '50% ' + (pos * velocity) +  'px');
        // $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
       }); 
       };
    
$(window).bind('scroll', update);
