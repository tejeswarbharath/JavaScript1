var object = document.querySelector('img');
var b=0
object.onclick=function()
{
	if(b==0)
	{
        object.style.width = "500px";
        object.style.height="550px";
        b=1;
    }
    else if(b==1)
	{
		object.style.width = "250px";
		object.style.height="190px";
		b=0;
	}
}