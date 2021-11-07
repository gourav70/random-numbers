for(var i=1;i<=15000;i++)
{
    document.write("\n");
    document.write(i);
}

setInterval(randomnumber,2000);

function randomnumber(){
    var r = Math.floor( Math.random() * 5000);
    document.write("\n");
   document.write(r);
   
   

   }
   