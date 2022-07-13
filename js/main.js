var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
burger.addEventListener('click',function(){
	if (menu.style.opacity=="" && menu.style.visibility=="") {
		menu.style.opacity = 1;
		menu.style.visibility = 'visible';
	}else{
		menu.style.opacity = "";
		menu.style.visibility = '';
	}
});
