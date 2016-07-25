function _month1()
{	
	document.getElementById("_month").innerHTML="";
		for(i=0;i<=12;i++)
		{
			if(i==0)
			{
				document.getElementById("_month").innerHTML="<option value="+i+">SELECT MONTH</option>";
			}
			if(i>0)
			{
				document.getElementById("_month").innerHTML=document.getElementById("_month").innerHTML+"<option value="+i+">"+i+"</option>";
			}
		}
}
function _date1()
{	
	document.getElementById("_date").innerHTML="";
	var b=document.f1._month;
		//alert(b);
		var len=b.length;
		//alert(len);
		for(i=0;i<len;i++)
		{
			//alert(b[i].selected);
			if(b[i].selected)
			{
				
				ch11=b[i].value;
				//alert(ch11);
			}
		}
		if(parseInt(ch11%2)==0 && ch11!=8)
		{
			for(i=0;i<=30;i++)
			{
				if(i==0)
				{
					document.getElementById("_date").innerHTML="<option value="+i+">SELECT DATE</option>";
				}
				if(i>0)
				{
					document.getElementById("_date").innerHTML=document.getElementById("_date").innerHTML+"<option value="+i+">"+i+"</option>";
				}
			}
		}
		else //if(parseInt(ch11%2)!=0 || ch11==8)
		{
			//alert(ch11);
			for(i=0;i<=31;i++)
			{
				if(i==0)
				{
					document.getElementById("_date").innerHTML="<option value="+i+">SELECT DATE</option>";
				}
				if(i>0)
				{
					document.getElementById("_date").innerHTML=document.getElementById("_date").innerHTML+"<option value="+i+">"+i+"</option>";
				}
			}
			
		}
}
function _year1()
{	
	document.getElementById("_year").innerHTML="";
		for(i=1900;i<=2016;i++)
		{
			if(i==1900)
			{
				document.getElementById("_year").innerHTML="<option value="+i+">SELECT YEAR</option>";
			}
			if(i>1900)
			{
				document.getElementById("_year").innerHTML=document.getElementById("_year").innerHTML+"<option value="+i+">"+i+"</option>";
			}
		}
}
function validate()
{
	var fn=document.f1.first_name.value;
	var ln=document.f1.last_name.value;
	var pw=document.f1._password.value;
    var ch=document.f1.terms_condition;
	var len=ch.length;
	var count=0;
	var mn=document.f1.mobile_number;
	var rpw=document.f1.confirm_password.value;
	var x = document.f1.email_address.value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	var un=document.f1.user_name.value;
	var dt = document.f1._date;
	var mt = document.f1._month;
	var yy = document.f1._year;
	var usn=document.getElementById("u_n_a").innerHTML;
	var emd=document.getElementById("e_a_a").innerHTML;
	var mbn=document.getElementById("m_n_a").innerHTML;
	document.getElementById("f_n").innerHTML="";
	document.getElementById("l_n").innerHTML="";
	document.getElementById("c_p_s").innerHTML="";
	document.getElementById("e_a").innerHTML="";
	document.getElementById("m_n").innerHTML="";
	document.getElementById("terms_condition").innerHTML="";
	document.getElementById("t_c").innerHTML="";
	document.getElementById("u_n").innerHTML="";
	document.getElementById("d_b").innerHTML="";
	if(fn=="" || fn==null )
	{
		document.getElementById("f_n").innerHTML="Please Enter First Name ";
		count=1;
	}
	if(ln=="" || ln==null )
	{
	document.getElementById("l_n").innerHTML="Please Enter Last Name ";
	count=1;
	}
	/*if(un=="" || un==null )
	{
		document.getElementById("u_n").innerHTML="Please Enter a User Name ";
		count=1;
	}*/
	if(un.length < 6)
	{
							
		document.getElementById("u_n").innerHTML="Username should be of minimum 6 characters";
		count=1;
	}
	if(pw.length > 16 || pw.length < 8)
	{
							
		document.getElementById("c_p_s").innerHTML="Password should be of minimum 8 characters and maximum 16 characters";
		count=1;
	}
	if(pw!==rpw || pw=="" || pw==null || rpw=="" || rpw==null)
	{
					
	document.getElementById("c_p_s").innerHTML="Password mismatch";
	count=1;
	}
					
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
	{
	document.getElementById("e_a").innerHTML="Not a valid e-mail address";
						count=1;
					}
						var exp1=/^[0-9]+$/;
						var ans=mn.value.match(exp1);
						if(ans==null)
						{
						
							document.getElementById("m_n").innerHTML="Enter only Numeric Value";
							count=1;
						}
							if(mn.value.length > 10 || mn.value.length < 10)
							{
							
								document.getElementById("m_n").innerHTML="Enter 10 digit of Contact Number";
								count=1;
							}
								if(ch.checked==false)
								{
									document.getElementById("t_c").innerHTML="Please Check our Terms and Condition";
									count=1;
								}
	 if (dt.value =="" || mt.value=="" || yy.value=="" || dt.value==0 || mt.value==0 || yy.value==1900 || dt.value ==null || mt.value==null || yy.value==null ) 
	   {
			document.getElementById("d_b").innerHTML="Please Select valid date Of Birth";
			count=1;
        }
		if(usn!="Username Available")
		{
		count=1;
		}
		if(emd!="")
		{
		count=1;
		}
		if(mbn!="")
		{
		count=1;
		}
							
							
						
					
					
		
			
		if(count==1)
		return false;
	
}	
function checkAvailability() {
	jQuery.ajax({
	url: "check_availability.php",
	data:'username='+$("#user_name").val(),
	type: "POST",
	success:function(data){
		$("#u_n_a").html(data);
	},
	error:function (){}
	});
}
function checkEmailAvailability() {
	jQuery.ajax({
	url: "check_Email_availability.php",
	data:'email='+$("#email_address").val(),
	type: "POST",
	success:function(data){
		$("#e_a_a").html(data);
	},
	error:function (){}
	});
}
function checkPhoneAvailability() {
	jQuery.ajax({
	url: "check_Phone_availability.php",
	data:'phone='+$("#mobile_number").val(),
	type: "POST",
	success:function(data){
		$("#m_n_a").html(data);
	},
	error:function (){}
	});
}
	/*if(pw!==rpw || pw=="" || pw==null || rpw=="" || rpw==null)
	{
		str1=str1+"** Mis Match password <br>";//+<br>;
		document.getElementById("ps").innerHTML="*";
		//alert("Mis match password ")
		document.getElementById("up1").innerHTML=str1;
		//alert(str1);
		//return false;
		return false;
	}
	var exp1=/^[0-9]+$/;
	var ans=mn.value.match(exp1);
	if(ans==null)
	{
		str1=str1+"** Enter only Numeric Value <br>";//+<br>;
		document.getElementById("mn").innerHTML="*";
		//alert("Please enter digits only");
		//mn.value="";
		//mn.focus();
		document.getElementById("up1").innerHTML=str1;
		//return false;
		return false;
	}
	if(mn.value.length > 10 || mn.value.length < 10)
	{
		
		str1=str1+"** Enter 10 digit of Contact Number <br>";
		document.getElementById("mn").innerHTML="*";
		//alert("Please enter 10 digits only");
		//mn.value="";
		//mn.focus();
		document.getElementById("up1").innerHTML=str1;
		//return false;
		return false;
	}
	
	if(document.getElementById("r1").checked==false && document.getElementById("r2").checked==false)
	{
		str1=str1+"** Please select gender <br>";//+<br>;
		document.getElementById("gn").innerHTML="*";
		//("Please select gender ");
		document.getElementById("up1").innerHTML=str1;
		//return false;
		return false;
	}
	for(i=0;i<len;i++)
	{
		if(ch[i].checked==true)
		{
			count=1;
			
		}
	}
	if(count==0)
	{
		str1=str1+"** Please select atleast one hobby <br>";//+<br>;
		document.getElementById("hb").innerHTML="*";
		//alert("Please select atleast one hobby");
		document.getElementById("up1").innerHTML=str1;
		//return false;
	}
	if(document.f1.CITY.value=="select_city")
	{
		str1=str1+"** Please select a City <br>";//+<br>;
		document.getElementById("cn").innerHTML="*";
		//alert("Please select a city ");
		document.getElementById("up1").innerHTML=str1;
		return false;
	}
	/*if(str!=" ")
	{
	alert(str);
	//document.getElementById("up1").innerHTML=str;
	return false
	}
}*/