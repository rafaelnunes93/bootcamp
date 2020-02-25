    $(function() {
        $('.chart').easyPieChart({
            size:120,
            barColor:'#50fa7b',
            scaleColor:false,
            lineWidth:15,
            trackColor:'#373737',
            lineCap:'circle',
            animate: 3000 // animation dutarion
        });
    });


    jQuery(document).ready(function(){
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },5000);
        });
    });