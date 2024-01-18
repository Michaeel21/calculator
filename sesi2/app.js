 function fungsi(char){
     const Operator = ['+', '-','/','*']
     return Operator.includes(char);
 }
  function bilangan(value){
  const display = document.getElementById('display');
  const laschar = display.value.slice(-1);
  
    if (fungsi(laschar) && fungsi(value)){
        display.value = display.value.slice(0,-1) + value;
}else{
    display.value  += value;
}

}
function hapus(){
    document.getElementById('display').value = '';
}
function hasil(){
   const hasilvalue = document.getElementById('display').value;
   try{
   const hasil = eval(hasilvalue)
   document.getElementById('display').value += " = " + hasil;
   }catch(error){
   
   }
   
}

 
 
 
 
 
 
 
 
 
 
 
 
 
 