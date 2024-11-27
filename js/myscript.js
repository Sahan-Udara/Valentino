function loadData(name){
	if(name="btn1"){
		document.getElementById("para").innerHTML="The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface.";
		document.getElementById("image1").src"images/iphone.jpg"
	}
	else if(name=="btn2"){
		document.getElementById("para").innerHTML="Nokia is a Finnish communications and information technology company.";
		document.getElementById("image1").src"images/nokia.jpg"		
	}
	else if(name=="btn3"){
		document.getElementById("para").innerHTML="Samsung, South Korean company that is one of the world's largest producers of electronic devices.";
		document.getElementById("image1").src"images/samsung.jpg"		
	}
	else if(name=="btn4"){
		document.getElementById("para").innerHTML="Oppo (stylized in Letter case) is a Chinese consumer electronics manufacturer headquartered in Dongguan, Guangdong.";
		document.getElementById("image1").src"images/oppo.jpg"		
	}
	
	
	
	else{
	alert("Invalid");
	}
}