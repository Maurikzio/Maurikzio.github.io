var myButton = document.getElementById('goUp');


    window.onscroll = function (){
        'use strict';
        if(window.pageYOffset >= 12100){
            myButton.style.display = 'block';
            //console.log(window.pageYOffset);
        }else{
            myButton.style.display = 'none';
        }
    }

    function myScroll(go){
        $('HTML, BODY').animate({ scrollTop: go }, 800);
        return false;
    }
    
function initCanvas(x, y, max, myId){
    var ctx = document.getElementById(myId).getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;

    // var res = (1.5 * max)/ 24;
    var res = (2.8 * max)/ 50;
    var angle = 0.0;

    ctx.font = "30px Lato";
    ctx.fillText(max+'%',50, 85);

    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = "rgb(235, 235, 235)";
    ctx.arc(75,75,65,0,2*Math.PI);
    ctx.stroke();

    function animate(){
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = "rgb(120, 205, 251)";
        //aqui iba desde empezaba desde 0*Math.PI....
        ctx.arc(x,y,65,1.8*Math.PI,angle += 0.01 *Math.PI);        
        ctx.stroke();
        if(angle.toFixed(2) >= res){
                clearInterval(animateInterval);
            }
        //console.log(angle);
        ctx.restore();
    
    }

    var animateInterval = setInterval(animate, 10);

}

var overlay = document.getElementById('spinnerOut');

window.addEventListener('load', function(){
    overlay.style.display = 'none';
})



$(document).ready(function(){

    $("#scrollImg").mouseover(function(){
        
        var div = $("#scrollImg"); 
        var x = div.position();
        this.style.cursor = 'pointer';
        this.src = "app/images/scroll3.png";
    });
    $("#scrollImg").mouseleave(function(){
        this.src = "app/images/scroll1.png";
    });
    
    $(".back").hide();

    initCanvas(75, 75, 58, 'myCanvas');
    initCanvas(75, 75, 75, 'myCanvas2');
    initCanvas(75, 75, 80, 'myCanvas3');
    initCanvas(75, 75, 95, 'myCanvas4');

    // $("#scrollImg").mouseover(function(){
        
    //     var div = $("#scrollImg"); 
    //     var x = div.position();
    //     this.style.cursor = 'pointer';
    //     this.src="../images/scroll3.png";
    // });
    // $("#scrollImg").mouseleave(function(){
    //     this.src="../images/scroll1.png";
    // });
    var colImgs = document.querySelectorAll('.recImg');
    var colContent = document.querySelectorAll('.recent-wrk');
    var fltr = document.querySelectorAll('.filter');
    var overlay = document.querySelectorAll('.overlay');

    //all
        $(fltr[0]).on('click',function(){
            for(var i = 0; i < 9; i++){
                colContent[i].style.opacity = '1';
            }
            alert(colContent.length);
        }).on('mouseleave' ,function(){
            
        });
    //websites
        $(fltr[1]).on('click',function(){
            for(var i = 0; i < 9; i++){       
                if(i == 1 || i == 7){
                    colContent[i].style.opacity = '1';
                }else{
                    colContent[i].style.opacity = '.5';
                }
            }
        }).on('mouseleave' ,function(){
    
        });
    //graphic
        $(fltr[2]).on('click',function(){
            for(var i = 0; i < 9; i++){       
                if(i == 0 || i == 2 ){
                    colContent[i].style.opacity = '1';
                }else{
                    colContent[i].style.opacity = '.5';
                }
            }
        }).on('mouseleave' ,function(){
    
        });
    //identity
        $(fltr[3]).on('click',function(){
            for(var i = 0; i < 9; i++){       
                if(i == 5 || i == 7){
                    colContent[i].style.opacity = '1';
                }else{
                    colContent[i].style.opacity = '.5';
                }
            }
        }).on('mouseleave' ,function(){
    
        });
    //mobile apps
        $(fltr[4]).on('click',function(){
            for(var i = 0; i < 9; i++){       
                if(i == 4 || i == 5){
                    colContent[i].style.opacity = '1';
                }else{
                    colContent[i].style.opacity = '.5';
                }
            }
        }).on('mouseleave' ,function(){
    
        });

        var temp = 1;

        $("#addMore").click(function(){
            $(".back").toggle();
            ++temp;

            if(temp % 2 == 0){
                this.value = "less";
            }else{
                this.value = "load more";
            }

            //alert(temp);
        });


    

});


function getPositionOfElement(elId){
    var myElement = $(elId);
    var y = myElement.position();
    //console.log(y.top);
    return y.top;
}

function taskMyCountdown(elMax, elId){
    var show = document.getElementById(elId);
    var limit = 0;
    var myInterval = setInterval(myCountdown, 10);

    function myCountdown(){
        if(limit == elMax){
            clearInterval(myInterval);
        }else{
            if(elMax > 1000){
                limit += 50;
                show.textContent = limit;
            }else if(elMax < 100){
                limit += 2;
                show.textContent = limit;
            }
            else{
                limit += 5  
                show.textContent = limit;
            }
        }
    }
}
$(window).on('scroll', function(){
    //'use strict';
       
        if(window.pageYOffset >= getPositionOfElement('#most')){
            taskMyCountdown(2000, 'factor1');
            taskMyCountdown(240, 'factor2');
            taskMyCountdown(120, 'factor3');
            taskMyCountdown(50, 'factor4');
            $(window).off('scroll');
        }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:true,
    navText:['<i class="fa fa-circle" style="color: black; font-size:15px"></i>', '<i class="fa fa-circle" style="color: black; font-size:15px; margin: 0 1rem;"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });


//slider1
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("contenido-twitter");


  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}

  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  x[slideIndex-1].style.display = "block";  

}
//slider 2
var slideIndexa = 1;
showDivsa(slideIndexa);

function plusDivsa(n) {
  showDivsa(slideIndexa += n);
}

function showDivsa(n) {
  var i;
  var y = document.getElementsByClassName("contenido-quote");


  if (n > y.length) {slideIndexa = 1}    
  if (n < 1) {slideIndexa = y.length}

  for (i = 0; i < y.length; i++) {
	 y[i].style.display = "none";  
  }

  y[slideIndexa-1].style.display = "block";  

}



