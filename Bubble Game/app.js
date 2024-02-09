var clutter = "";
for(var i = 1; i<=140; i++)
{
   clutter +=  `<div class="circle"><span>5</span></div>`;
}

document.querySelector("#second").innerHTML = clutter;