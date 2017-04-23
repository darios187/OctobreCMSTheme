/**
 * Created by BADSISTEMS on 4/21/2017.
 */

$(document).ready(function () {

    //Scroll on a link
    $(function () {
        $("html,body").animate({scrollTop: 0}, 100);

        $('.main-nav ul li a').click(function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 70}, 1000);
        });
    });

    //Slide show
    $(function(){
        // initalizing the first image to class 'top'
        $('.slides img:first').addClass('top');
        //function to alter the image index by changing the class
        var change = function (){
            var curr = $('.slides img.top');
            var next = curr.next();

            // if the next image is not available then
            // set the class-top to the first image
            // then vanish the current image to
            // show the previous next image
            if(!next.length){

                next = $('.slides img:first');
                next.addClass('top');

                curr.animate({opacity: 0.0},1000, function() {
                    curr.removeClass('top');
                    curr.css({opacity: 1.0});
                });

            }else{

                // pick the next image
                // set the opacity to 0
                // den use animation to make it appear
                // above the top image
                next.css({opacity: 0.0})
                    .addClass('top')
                    .animate({opacity: 1.0}, 1000, function() {
                        curr.removeClass('top');
                    });
            }
        }

        // repeat the function execution for every 3 secs
        setInterval(change, 3000 );
    });



});