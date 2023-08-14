function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


//   var nav=document.querySelector('nav');
//   window.addEventListener("scroll",function(){
//       if(window.pageYOffset>100){
//           nav.classList.add('bg-dark','shadow')
//           nav.classList.add('text-secondary','shadow')
//       }
//       else{
//           nav.classList.remove('bg-dark','shadow')
//           nav.classList.remove('text-secondary','shadow')
//       }
//   })

  var thumbnails = document.getElementsByClassName('product-image');

var activeImages = document.getElementsByClassName('active');
for (var i = 0; i < thumbnails.length; i++) {
    console.log(activeImages)
    thumbnails[i].addEventListener('click', function () {

        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active')
        document.getElementById('product-image').src = this.src
    })
}
//Initial References
let imageContainer = document.getElementById("image-container");
let productImage = document.getElementById("product-image");
let overlay = document.getElementById("overlay");
let mouseOverlay = document.getElementById("mouse-overlay");

//events object(stores events for touch,mouse)
let events = {
mouse: {
move: "mousemove",
},
touch: {
move: "touchmove",
},
};

//initially blank
let deviceType = "";

//Checks for device type
function isTouchDevice() {
try {
//We try to create touch event (it would fail for desktops and throw error)
deviceType = "touch";
document.createEvent("TouchEvent");
return true;
} catch (e) {
deviceType = "mouse";
return false;
}
}

//hides overlay
const hideElement = () => {
overlay.style.display = "none";
mouseOverlay.style.display = "none";
};

//Check device so that deviceType variable is set to touch or mouse
isTouchDevice();

/*In addEventListener we use the events object to set the event so deviceType would be set to touch or mouse since we called 'isTouchDevice()' above
E.g:
if deviceType = "mouse" => the statement for event would be events[mouse].move which equals to mousemove.
if deviceType = "touch" => the statement for event would be events[touch].move which equals to touchstart.
*/

imageContainer.addEventListener(events[deviceType].move, (e) => {
//Try, catch to avoid any errors for touch screens
try {
//pageX and pageY return the position of client's cursor from top left pf screen
var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
} catch (e) {}
//get image height and width
let imageWidth = imageContainer.offsetWidth;
let imageHeight = imageContainer.offsetHeight;

//check if mouse goes out of image container
if (
imageWidth - (x - imageContainer.offsetLeft) < 15 ||
x - imageContainer.offsetLeft < 15 ||
imageHeight - (y - imageContainer.offsetTop) < 15 ||
y - imageContainer.offsetTop < 15
) {
hideElement();
} else {
overlay.style.display = "block";
mouseOverlay.style.display = "inline-block";
}

var posX = ((x - imageContainer.offsetLeft) / imageWidth).toFixed(4) * 100;
var posY = ((y - imageContainer.offsetTop) / imageHeight).toFixed(4) * 100;

//set background position to above obtained values
overlay.style.backgroundPosition = posX + "%" + posY + "%";

//move the overlay with cursor
mouseOverlay.style.top = y + "px";
mouseOverlay.style.left = x + "px";
});

addToCartButton = document.querySelectorAll(".add-to-cart-button");
document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
addToCartButton.addEventListener('click', function() {
addToCartButton.classList.add('added');
setTimeout(function(){
addToCartButton.classList.remove('added');
}, 2000);
});
});


// cart starts here

$(document).ready(function(){
	
	
	var textInput = $('#inputshop').val();
	
	$(".b-popup").hide();
	
	
	if (localStorage.getItem('shoplistlocal')) {
    	$('.list').html(localStorage.getItem('shoplistlocal'));
	}
			
	
    $("#market .items").on("click",function(e){
		$('.count').css({"display":"block"});
    	var itemvalue =  $(this).html();
		$('.list').append('<li    class="item">'+$(this).html()+'</li>');
		var shoplistlocal = $('.list').html();
		localStorage.setItem('shoplistlocal', shoplistlocal);
		return false;
    });

	  			
	$(".list").on("click", ".item", function () {
    	$(this).remove();
		  $('.count').css({"display":"block"});
		  var itemlength = $(".app-body li").length;
		  $('.count').text(itemlength);
		  var shoplistlocal = $('.list').html();
    	localStorage.setItem('shoplistlocal', shoplistlocal);
		return false;
    });
	
	    			 
     $(".closepopup").click(function(){
	 $(".b-popup").hide(200);
    });
	

    $(".openpopup").click(function(){
		if ($('.item').is('li')) {
		$(".b-popup").fadeIn(200);}
	else {
		$(".tooltipshop2").animate({marginLeft: "20px",easing: "easeout",opacity:"1"},300);
		$(".tooltipshop2").delay(900).animate({opacity:"0",marginLeft: "-90px"});
	}
	});
    $("#send").click(function(){
		var itemname = $("#inputname").val();
		var itememail = $("#inputemail").val();
		var itemtel = $("#inputtel").val();
		var shopbox = $(".app-body").html();
		$.ajax({
			url: "sendmessege.php",
			type: "post",
			dataType: "json",
			  data: {
				 "itemname": user_name,
				 "itememail": user_email,
				 "itemtel": user_comment,
				 "shopbox": user_money
			  },
			 success: function() {
				 alert("Ваше сообщение отправлено!");
				 
				  }
	});
		});
		
		$('.closewindow').click(function(){
			$('.app').fadeOut(500);
		});	
	    	$('#tray').click(function(){
			$('.app').fadeIn(500);
		});	
		
		
	$('.items').click(function() {
		var itemlength = $(".app-body li").length;
		$('.count').text(itemlength);	
	});
		
		
	$(".openpopup2").click(function() {
   		window.localStorage.clear();
		$('.list').children().remove();
		$('.count').hide();
    	return false;
	});		
});


