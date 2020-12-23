function change()
{
    btn=document.getElementById("d1");
    img=document.getElementById("img1");
    if(btn.innerHTML=="Hide")
    {
        img.style.visibility="hidden";
        btn.innerHTML="Show";
    }
    else
    {
        img.style.visibility="visible";
        btn.innerHTML="Hide";
    }
}