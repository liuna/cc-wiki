function setCookie(c_name,value,expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function getCookie(c_name){
	if (document.cookie.length>0)
  	{
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{	 
	        	c_start=c_start + c_name.length+1 
 	        	c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
	        		return unescape(document.cookie.substring(c_start,c_end))
        	} 
  	}
	return ""
}

function loginQQ(){
	setCookie('loginWeibo','QQ',1)	
	window.open("http://"+ccHost+":"+ccPort+"/"+ccWiki+"/includes/login/qqweibo3.htm", 'newwindow', 'height=600, width=800, top=50, left=100, toolbar=no, menubar=no, scrollbars=no,resizable=yes,location=no, status=no');
}

function loginSina(){
	setCookie('loginWeibo','Sina',1)
	window.open("http://"+ccHost+":"+ccPort+"/"+ccWiki+"/includes/login/sinaweibo3.htm", 'newwindow', 'height=600, width=800, top=50, left=100, toolbar=no, menubar=no, scrollbars=no,resizable=yes,location=no, status=no');
}

function postWeibo(){
        var textobj=document.getElementById('weibocontent');
        var text=textobj.value;
	var login=getCookie('loginWeibo');

	var xmlhttp=false;
	var url="";
	try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	}catch(e){
		try{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e2){
			xmlhttp=false;
		}
	}
	if(!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp=new XMLHttpRequest();
	}

	if(login!=null && login!=""){
		if(login=='QQ'){
			//alert('QQ发布：'+text);
			url="http://"+ccHost+":"+ccPort+"/"+ccWiki+"/includes/qqweiboUpdate.php?content="+text;	
		}
		else if(login=='Sina'){
			//alert('新浪发布：'+text);
			url="http://"+ccHost+":"+ccPort+"/"+ccWiki+"/includes/sinaweiboUpdate.php?status="+encodeURIComponent(text);
		}
		xmlhttp.open('GET',url,false);
		xmlhttp.send();
		var res='1';
		if(xmlhttp.readyState == 4 && xmlhttp.status == "200"){
			res=xmlhttp.responseText;
		}
		alert(res);
	}
	else{
		alert("You should login weibo first!");
	}
}