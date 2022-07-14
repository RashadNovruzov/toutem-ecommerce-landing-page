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


var items = document.getElementsByClassName('explore__item');
var objects_item = {};
var texts = document.getElementsByClassName('explore-item__text');
for (var i = 0; i < items.length; i++) {
	items[i].addEventListener('click',function(){
		var text = objects_item.this;
		console.log(text);
		if (this.style.backgroundColor!=="rgb(95, 215, 136)") {
			this.style.backgroundColor="rgb(95, 215, 136)";
		}else if(this.style.backgroundColor=="rgb(95, 215, 136)"){
			this.style.backgroundColor="#F9FAFB";
		}
	})
}

