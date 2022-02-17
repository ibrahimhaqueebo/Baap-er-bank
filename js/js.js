document.getElementById('submitbutton').addEventListener('click',function(){
    const buttonfild=document.getElementById('useremail');
    const userinputte=buttonfild.value;
  
    // get user passwerd
    const passwerdfield=document.getElementById('userpasswerd');
    const userpasswerd=passwerdfield.value;
    if(userinputte == 'ibrahim@gmail.com' && userpasswerd == 'ibrahim007'){
        window.location.href="bangking.html";
    }
})