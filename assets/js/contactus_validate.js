function contactus_validate()
{
	var fn=document.f5.query_name.value;
	var x=document.f5.query_email.value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	var cn=document.f5.query_phone;
	var ln=document.f5.query_phone.value;
	
	var count=0;
	document.getElementById("f_n").innerHTML="";
	document.getElementById("e_a").innerHTML="";
	document.getElementById("m_n").innerHTML="";
	if(fn=="" || fn==null )
	{
		document.getElementById("f_n").innerHTML="Please Enter Name ";
		count=1;
	}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
	{
	document.getElementById("e_a").innerHTML="Not a valid e-mail address";
						count=1;
					}
	var exp1=/^[0-9]+$/;
	var ans=cn.value.match(exp1);
	if(ans==null)
	{
						
		document.getElementById("m_n").innerHTML="Enter only Numeric Value";
		count=1;
		//return false;
	}
	
	if(count==1)
	{
	return false;
	}
}