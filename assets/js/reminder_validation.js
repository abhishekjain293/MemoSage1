function reminder_validation()
{
	var fn=document.f3.event_name.value;
	var cn=document.f3.event_date.value;
	var pw=document.f3.frequency.value;
	var count=0;
	document.getElementById("f_n").innerHTML="";
	document.getElementById("e_a").innerHTML="";
	document.getElementById("m_n").innerHTML="";
	if(fn=="" || fn==null )
	{
		document.getElementById("f_n").innerHTML="Please Enter Reminder Name ";
		count=1;
	}
	if(cn=="" ||cn==null )
	{
		document.getElementById("e_a").innerHTML="Please Enter a Reminder date ";
		count=1;
	}
	if(pw=="" ||pw==null || pw==0 )
	{
		document.getElementById("m_n").innerHTML="Please Enter The Frequency of Reminder ";
		count=1;
	}
	if(count==1)
	{
	return false;
	}
}