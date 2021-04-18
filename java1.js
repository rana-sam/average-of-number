var array=[12,53,53,73,08,90];
 var g=array[0];
 for(var x=1; x<array.length; x++)
   {
       if(g<array[x])
       {
           g=array[x];
       }
   }
 
 console.log(g+" is greater number");