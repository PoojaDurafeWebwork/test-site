var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//document.querySelector('h1').textContent ="hello world!";

var myImage = document.querySelector('img');

myImage.onclick = function (){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox_icon.png'){
		myImage.setAttribute('src','images/firefox2.png');
	}else{
		myImage.setAttribute('src','images/firefox_icon.png')
	}
}