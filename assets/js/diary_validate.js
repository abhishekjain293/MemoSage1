function diary_validate()
{
	var fn=document.f4.d_time.value;
	var cm=document.f4.d_diary.value;
	var count=0;
	document.getElementById("f_n").innerHTML="";
	document.getElementById("e_a").innerHTML="";
	if(fn=="" || fn==null )
	{
		document.getElementById("f_n").innerHTML="Please Enter Time ";
		count=1;
	}
	if(cm=="" || cm==null )
	{
		document.getElementById("e_a").innerHTML="Please Write Something ";
		count=1;
	}
	if(count==1)
	{
	return false;
	}
}