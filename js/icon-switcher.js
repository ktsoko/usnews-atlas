      $('#color').change(function(){
        if($(this).val() == 'colors'){ 
          $(".card-section .icon").css('fill', '#111111');
          $(".card-section.top.flush.text-center").css('background-color', '#fff');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'link'){ 
          $(".card-section .icon").css('fill', '#115abf');
          $(".card-section.top.flush.text-center").css('background-color', '#fff');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'muted'){
          $(".card-section .icon").css('fill', '#666666');
          $(".card-section.top.flush.text-center").css('background-color', '#fff');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'pro'){
          $(".card-section .icon").css('fill', '#0abba4');
          $(".card-section.top.flush.text-center").css('background-color', '#fff');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'con'){
          $(".card-section .icon").css('fill', '#f06e65');
          $(".card-section.top.flush.text-center").css('background-color', '#fff');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'badge'){
          $(".card-section .icon").css('fill', '#ffc14e');
          $(".card-section.top.flush.text-center").css('background-color', '#13325d');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'white'){
          $(".card-section .icon").css('fill', '#fff');
          $(".card-section.top.flush.text-center").css('background-color', '#13325d');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'coal'){
          $(".card-section .icon").css('fill', '#888888');
          $(".card-section.top.flush.text-center").css('background-color', '#fff');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'iron'){
          $(".card-section .icon").css('fill', '#cccccc');
          $(".card-section.top.flush.text-center").css('background-color', '#13325d');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'steel'){
          $(".card-section .icon").css('fill', '#c0cadd');
          $(".card-section.top.flush.text-center").css('background-color', '#13325d');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
      });
      $('#sizes').change(function(){
        if($(this).val() == 'sizes'){ 
          $(".card-section .icon").css('width', '3rem');
          $(".card-section .icon").css('height', '3rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'tiny'){ 
          $(".card-section .icon").css('width', '0.625rem');
          $(".card-section .icon").css('height', '0.625rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'smallest'){
          $(".card-section .icon").css('width', '0.75rem');
          $(".card-section .icon").css('height', '0.75rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'smaller'){
          $(".card-section .icon").css('width', '0.875rem');
          $(".card-section .icon").css('height', '0.875rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'small'){
          $(".icon").css('width', '1rem');
          $(".icon").css('height', '1rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'medium'){
          $(".card-section .icon").css('width', '1.5rem');
          $(".card-section .icon").css('height', '1.5rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'large'){
          $(".card-section .icon").css('width', '2rem');
          $(".card-section .icon").css('height', '2rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'larger'){
          $(".card-section .icon").css('width', '3rem');
          $(".card-section .icon").css('height', '3rem');
          $(".icon-row").removeClass('large-up-4').addClass('large-up-8');
          $(".icon-row").removeClass('small-up-2').addClass('small-up-4');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'largest'){
          $(".card-section .icon").css('width', '4rem');
          $(".card-section .icon").css('height', '4rem');
          $(".icon-row").removeClass('large-up-8').addClass('large-up-4');
          $(".icon-row").removeClass('small-up-4').addClass('small-up-2');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'x-large'){
          $(".card-section .icon").css('width', '5rem');
          $(".card-section .icon").css('height', '5rem');
          $(".icon-row").removeClass('large-up-8').addClass('large-up-4');
          $(".icon-row").removeClass('small-up-4').addClass('small-up-2');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'x-larger'){
          $(".card-section .icon").css('width', '6rem');
          $(".card-section .icon").css('height', '6rem');
          $(".icon-row").removeClass('large-up-8').addClass('large-up-4');
          $(".icon-row").removeClass('small-up-4').addClass('small-up-2');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'x-largest'){
          $(".card-section .icon").css('width', '7rem');
          $(".card-section .icon").css('height', '7rem');
          $(".icon-row").removeClass('large-up-8').addClass('large-up-4');
          $(".icon-row").removeClass('small-up-4').addClass('small-up-2');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
      });
      $('#rotation').change(function(){
        if($(this).val() == 'rotation'){ 
          $(".card-section .icon").css('transform', 'rotate(360deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(360deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(360deg)');
          $(".card-section .icon").css('transform', 'scale(1,1)');
          $(".card-section .icon").css('-webkit-transform', 'scale(1,1)');
          $(".card-section .icon").css('-m-transform', 'scale(1,1)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'rotate-45'){ 
          $(".card-section .icon").css('transform', 'rotate(45deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(45deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(45deg)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'rotate-90'){
          $(".card-section .icon").css('transform', 'rotate(90deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(90deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(90deg)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'rotate-135'){
          $(".card-section .icon").css('transform', 'rotate(135deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(135deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(135deg)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'rotate-180'){
          $(".card-section .icon").css('transform', 'rotate(180deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(180deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(180deg)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'rotate-225'){
          $(".card-section .icon").css('transform', 'rotate(225deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(225deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(225deg)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'rotate-270'){
          $(".card-section .icon").css('transform', 'rotate(270deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(270deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(270deg)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'rotate-315'){
          $(".card-section .icon").css('transform', 'rotate(315deg)');
          $(".card-section .icon").css('-webkit-transform', 'rotate(315deg)');
          $(".card-section .icon").css('-m-transform', 'rotate(315deg)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'flip-horizontal'){
          $(".card-section .icon").css('transform', 'scale(-1,1)');
          $(".card-section .icon").css('-webkit-transform', 'scale(-1,1)');
          $(".card-section .icon").css('-m-transform', 'scale(-1,1)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
        if($(this).val() == 'flip-vertical'){
          $(".card-section .icon").css('transform', 'scale(1,-1)');
          $(".card-section .icon").css('-webkit-transform', 'scale(1,-1)');
          $(".card-section .icon").css('-m-transform', 'scale(1,-1)');
          $(".card-section .icon").css('transition', '300ms linear all');
          $(".card-section .icon").css('-webkit-transition', '300ms linear all');
          $(".card-section .icon").css('-m-transition', '300ms linear all');
        }
      });