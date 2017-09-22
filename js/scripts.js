$(document).ready(function(){
    $('nav a').on('click',function(){
        //current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        //Set heading text
        $('h1#heading').text($(this).text());

        //Get and filter link text

        var category = $(this).text().toLowerCase().replace(' ','-');

        //Remove hidden class if home is selected

        if(category == 'home'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        }else{
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).fadeOut('slow').hide().addClass('hidden');
                }else{
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }

            //Stop link behaviour
        return false;
    });

    $('#momo').on('click', function(){

    });

        //div overlay effect on mouse enter
    $('ul#gallery li').on('mouseenter',function(){

            //get data attribute value
        var title = $(this).data('title');
        var descr = $(this).data('descr');
            console.log('jecey');
            //Some validattion
        if(title == null){
            title='';
        }
        if(descr == null){
            descr = 'Click to enlarge';
        }
        //Create overlay div
        $(this).append('<div class="overlay"></div>');
        var overlay = $(this).children('.overlay');

        //add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+descr+'</p>');
        // fade effect
        overlay.fadeIn(800);
    });

    // on mouse leave
    $('ul#gallery li').on('mouseleave', function(){

                console.log('mouse 2mpty');
      var leave = $(this).children('.overlay');
          leave.fadeOut(10);
        //    // create overlay div
        // $(this).append('<div class="overlay-leave"></div>');
        // var overlayLeave = $(this).children('.overlay-leave');
        // //Fade out effect
        // overlayLeave.fadeOut(500);

    });
});