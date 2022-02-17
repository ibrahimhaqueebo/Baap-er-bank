document.getElementById('depositebutton').addEventListener('click',function () {
    const inputdopiset=document.getElementById('userdeposit');
    const depositamount=inputdopiset.value;
    const depostiontext=parseFloat(depositamount);
 
    
    // deposit amount show
    const deposittatile=document.getElementById('deposittatole');
    const previyes=deposittatile.innerText;
    const previeusde=parseFloat(previyes);
    const tatolede=depostiontext+previeusde;
    deposittatile.innerText=tatolede;

    // tatole balance

    const balancetatole=document.getElementById('blance');
    const balancetatoletext=balancetatole.innerText;
    const newbalance=parseFloat(balancetatoletext);
    const newtatolebalance=newbalance+depostiontext;
    balancetatole.innerText=newtatolebalance;
    

    inputdopiset.value='';

    
})

// updating withdrow

document.getElementById('Withdrawbutton').addEventListener('click',function () {
    const withdrowinputtext=document.getElementById('userWithdraw');
    const withdrowamount=withdrowinputtext.value;
    const withdrowamounttatole=parseFloat(withdrowamount);

    // withdrow balance
    const withrowchangbalace=document.getElementById('withdrow-balance');
    const withdrowbalanceall=withrowchangbalace.innerText;
    const withdrownewbalance=parseFloat(withdrowbalanceall);
    const withdrowbalancetatole1=withdrowamounttatole+withdrownewbalance;
    withrowchangbalace.innerText=withdrowbalancetatole1;

    // tatole balance add
    const balancewithdrow=document.getElementById('blance');
    const balancewithdrowtext=balancewithdrow.innerText;
    const taxtbalancewithdrow=parseFloat(balancewithdrowtext);
    const addnewbalance=taxtbalancewithdrow-withdrowamounttatole;
    balancewithdrow.innerText=addnewbalance;

    withdrowinputtext.value='';
    
    
})