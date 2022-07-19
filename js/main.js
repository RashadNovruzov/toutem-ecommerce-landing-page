var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
burger.addEventListener('click',function(){
	if (menu.style.opacity=="" && menu.style.visibility=="") {
		menu.style.opacity = 1;
		menu.style.visibility = 'visible';
		body.style.overflow = 'hidden';
	}else{
		menu.style.opacity = "";
		menu.style.visibility = '';
		body.style.overflow = 'auto';
	}
});


var body = document.getElementsByTagName('body')[0];
var buttons = document.getElementsByClassName('sun-night');
var mobile_menu = document.getElementsByClassName('mobile-menu')[0];
var header = document.getElementsByClassName('header')[0];
var links = document.querySelectorAll('.menu__list a');
var items = document.querySelectorAll('.explore__item');
var block_buttons = document.querySelectorAll('.button');	
var ads_button = document.querySelectorAll('.ads__button a')[0];
var footer = document.getElementsByTagName('footer')[0];
var blog_header = document.querySelectorAll('.blog__header');
var blog_body = document.querySelectorAll('.blog__body');
var logos = document.getElementsByClassName('logo');
var bags = document.getElementsByClassName('bag');
var searchs = document.getElementsByClassName('search');
var explores = document.getElementsByClassName('explore__icon');

for (var i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	button.addEventListener('click',function(){
		if (body.style.backgroundColor !== 'rgb(31, 41, 55)') {


			body.style.backgroundColor = 'rgb(31, 41, 55)';	
			mobile_menu.style.backgroundColor = 'rgb(31,41,55)';
			header.style.backgroundColor = 'rgb(31,41,55)';
			document.documentElement.style.setProperty('--color','rgb(255,255,255)');
			document.documentElement.style.setProperty('--mob_color','rgb(31,41,55)');
			ads_button.style.backgroundColor = 'rgb(31,45,55)';

			for (var i = 0; i < explores.length; i++) {
				var src = 'img/white-explore-';
				src +=i+1;
				src += '.png';
				console.log(src);
				if ((i+1)===3) {

				}else{
					explores[i].src = src;
				}
				
			}

			for (var i = 0; i < bags.length; i++) {
				bags[i].src = 'img/white-shopping-bag.png';
			}

			for (var i = 0; i < searchs.length; i++) {
				searchs[i].src = 'img/white-search.png';
			}

			for (var i = 0; i < logos.length; i++) {
				logos[i].src = 'img/white-logo.png';
			}

			for (var i = 0; i < blog_body.length; i++) {
				blog_body[i].style.color = 'rgb(255,255,255)';
			}
			for (var i = 0; i < blog_header.length; i++) {
				blog_header[i].style.borderBottom = '2px solid #414B5A';
			}
			for (var i = 0; i < block_buttons.length; i++) {
				block_buttons[i].style.color = 'rgb(31,41,55)';
			}
			for (var i = 0; i < items.length; i++) {
				items[i].style.backgroundColor = 'rgb(31,41,55)';
			}
			for (var i = 0; i < links.length; i++) {
				links[i].style.color = "rgb(255,255,255)";
			}


			ads_button.style.color = 'rgb(255,255,255)';
			footer.style.backgroundColor = '#374151';
			footer.style.border = 'none';


		}else{


			footer.style.backgroundColor = 'rgb(255,255,255)';
			body.style.backgroundColor = 'rgb(255,255,255)';
			mobile_menu.style.backgroundColor = 'rgb(255,255,255)';
			header.style.backgroundColor = 'rgb(255,255,255)';
			document.documentElement.style.setProperty('--color','rgb(31,41,55)');
			document.documentElement.style.setProperty('--mob_color','rgb(255,255,255)');
			ads_button.style.backgroundColor = 'rgb(255,255,255)';

			for (var i = 0; i < explores.length; i++) {
				var src = 'img/explore_';
				src +=i+1;
				src += '.png';
				console.log(src);
				if ((i+1)===3) {

				}else{
					explores[i].src = src;
				}
				
			}

			for (var i = 0; i < bags.length; i++) {
				bags[i].src = 'icons/icon_shopping_bag.png';
			}

			for (var i = 0; i < searchs.length; i++) {
				searchs[i].src = 'icons/icon_search.png';
			}

			for (var i = 0; i < logos.length; i++) {
				logos[i].src = 'img/logo.png';
			}
			for (var i = 0; i < blog_body.length; i++) {
				blog_body[i].style.color = 'rgb(31,41,55)';
			}
			for (var i = 0; i < blog_header.length; i++) {
				blog_header[i].style.borderBottom = '1px solid #F3F4F6';
			}
			for (var i = 0; i < block_buttons.length; i++) {
				block_buttons[i].style.color = 'rgb(255,255,255)';
			}
			for (var i = 0; i < links.length; i++) {
				links[i].style.color = "rgb(31,41,55)";
			}
			for (var i = 0; i < items.length; i++) {
				items[i].style.backgroundColor = 'rgb(255,255,255)';
			}


			ads_button.style.color = 'rgb(31,41,55)';

		}
		
	})
}