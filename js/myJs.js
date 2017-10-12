function showLinks() {
    // document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.opacity = "0.8";
}
function hiddeLinks(){
	document.getElementById("demo").style.opacity = "0";
}

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

function getPositionOfElement(elId){
    var myElement = $(elId);
    var y = myElement.position();
    //console.log(y.top);
    return y.top;
}

//var done = printPositionOfElement();

    $(window).on('scroll', function(){
        'use strict';
        if(window.pageYOffset > getPositionOfElement('#most')){
            taskMyCountdown(2000, 'factor1');
            $(window).off('scroll');
        }
        if(window.pageYOffset > getPositionOfElement('#most')){
            taskMyCountdown(240, 'factor2');
            $(window).off('scroll');
        }
         if(window.pageYOffset > getPositionOfElement('#most')){
            taskMyCountdown(120, 'factor3');
            $(window).off('scroll');
        }
        if(window.pageYOffset > getPositionOfElement('#most')){
            taskMyCountdown(50, 'factor4');
            $(window).off('scroll');
        }
    });

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

// var div = $("#scrollImg"); 
// var x = div.position();
// this.style.cursor = 'pointer';
// this.src="images/scroll3.png";
// //this.style.right= '10px';
// // div.animate({left: '55%'}, "slow");
// // div.animate({left: x.left}, "slow");
// for(var i = 0; i < 2; i++){
//     div.animate({top: x.top+5}, "fast");
//     div.animate({top: x.top}, "fast");
//     //alert(x.left);
// }

// window.onload = function(){
// 			if(window.jQuery){
// 				alert('jquery working');
// 			}else{
// 				alert('jquery doesnt work');
// 			}
// 		};



// $('#goUp').click(function(){
//     $('HTML, BODY').animate({ scrollTop: 300 }, 1000);
//     return false;
//    //alert("hola mundo");
// });

function myScroll(go){
    $('HTML, BODY').animate({ scrollTop: go }, 800);
    return false;
}

// var scrollImg = document.getElementById('imgScroll');

// $(document).ready(function(){
//     scrollImg.onmouseover(function(){
//         var dummyScroll = $('#imgScroll');
//         scrollImg.style.cursor = 'pointer';
//         dummyScroll.animate({left: '100px'}, "slow");
//         //scrollImg.style.cursor = 'pointer';
//     });
// });

// $(document).ready(function(){
//     $("#imgScroll").mouseover(function(){
//         var div = $("#imgScroll"); 
//         this.style.cursor = 'pointer';
//         this.style.right = '10px';
//         //div.animate({rigth: '100px'}, "slow");
//         //div.animate({top: '10px'}, "slow");
//     });
// });

var overlay = document.getElementById('spinnerOut');
window.addEventListener('load', function(){
    overlay.style.display = 'none';
})



$(document).ready(function(){
    
    $(".back").hide();
    

    $("#scrollImg").mouseover(function(){
        
        var div = $("#scrollImg"); 
        var x = div.position();
        this.style.cursor = 'pointer';
        this.src="images/scroll3.png";
        //this.style.right= '10px';
        // div.animate({left: '55%'}, "slow");
        // div.animate({left: x.left}, "slow");
        for(var i = 0; i < 2; i++){
            div.animate({top: x.top+5}, "fast");
            div.animate({top: x.top}, "fast");
            //alert(x.left);
        }

    });
    $("#scrollImg").mouseleave(function(){
        this.src="images/scroll1.png";
    });

    
   

    // $(".filter").click(function(){
    //     var colImgs = document.querySelectorAll('.recImg');
    //     colImgs[0].style.borderRadius = '50%';
    // });
    var colImgs = document.querySelectorAll('.recImg');
    var colContent = document.querySelectorAll('.recent-wrk');
    var fltr = document.querySelectorAll('.filter');

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


// $("#addMore").click(function(){
//     var tag = 1;
//     for(var i = 0; i < 3; i ++){
//     var newElements = document.getElementById('addHere');
//     newElements.innerHTML += "<li class='recent-wrk col-6 col-lg-4'><div class='image'><img src='images/OurWork/recentWork/recent"+(tag++)+".png' class='recImg'><div class='overlay'><div class='linki'> <span class='fa fa-search'></span><span class='fa fa-link'></span></div></div></div><div class='recWorkDesc'><h4>UI / UX</h4> <p class='description'>Mobile interaction CRM for field reps</p></div></li>";
//     }
// });