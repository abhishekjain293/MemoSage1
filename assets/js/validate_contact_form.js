$(function() 
	{
		$('#d_date').datepick({dateFormat: 'yyyy-mm-dd'});
		
	})
function contact_validate()
{
	var fn=document.f2.contact_name.value;
	var ln=document.f2.contact_number.value;
	var pw=document.f2.contact_email_address.value;
	var count=0;
	var atpos = pw.indexOf("@");
	var dotpos = pw.lastIndexOf(".");
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
	var ans=ln.value.match(exp1);
	if(ans==null)
	{
						
		document.getElementById("m_n").innerHTML="Enter only Numeric Value";
		count=1;
	}
	if(count==1)
	return false;
}