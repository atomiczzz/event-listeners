// GO!
var menu = {
	showing : true
}
	

var hide = document.querySelector('#hideButton');
var nav = document.querySelector('#navi');

hide.addEventListener('click',function(){
	if(menu.showing){
		nav.style.opacity ='0';
		menu.showing = false;
	}
	else{
		nav.style.opacity = '1';
		menu.showing = true;
	}
})

//task 2
var KEYCODES = {
	enter:13
}

var itemNode = document.querySelector('.guest-list')
var input=document.querySelector('.inputBox');

input.addEventListener('keydown', function(eventObj){
  if (eventObj.keyCode === KEYCODES.enter) {
  	var liNode = document.createElement('li');
  	liNode.innerHTML += eventObj.target.value;
  	itemNode.appendChild(liNode);
  	eventObj.target.value = '';

  	}
 })



//task 3
