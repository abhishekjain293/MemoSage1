
function contact_validate()
{
	var fn=document.f2.contact_name.value;
	var cn=document.f2.contact_number;
	var ln=document.f2.contact_number.value;
	var pw=document.f2.contact_email_address.value;
	var count=0;
	document.getElementById("f_n").innerHTML="";
	document.getElementById("e_a").innerHTML="";
	document.getElementById("m_n").innerHTML="";
	if(fn=="" || fn==null )
	{
		document.getElementById("f_n").innerHTML="Please Enter Name ";
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
$(function() 
	{
		$('#d_date').datepick({dateFormat: 'yyyy-mm-dd'});
		
	})