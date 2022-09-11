

function action(){
    let income = +n1.value;
    const deduction = 12950;
    const baket1 = 10275;
    const baket2 = 41775;
    const baket3 = 89075;
    const baket4 = 170050;
    const baket5 = 215950;
    const baket6 = 539900;
    
    
    

    if( income < deduction){
      return out.innerHTML = '$0';
      
    }else {
        const incomeTax = income - deduction;
        
        
        if( incomeTax >= 0 && incomeTax <= baket1){
            const resultBaket1 = (incomeTax - 0) * 0.1;
            return out.innerHTML = resultBaket1;
        } 
        
        if( incomeTax > baket1 && incomeTax <= baket2){
            const resultBaket2 = ( (incomeTax - baket1) * 0.12) + ( baket1 * 0.1);
            return out.innerHTML = resultBaket2;
        }

        if (incomeTax > baket2 && incomeTax <= baket3){
            const resultBaket3 = ( (incomeTax - baket2) * 0.22) + (( baket2 - baket1)* 0.12)+ (baket1 * 0.1);
            return out.innerHTML = resultBaket3;
        }
        
        if (incomeTax > baket3 && incomeTax <= baket4){
            const resultBaket4 = ( (incomeTax - baket3) * 0.24) + ( (baket3 - baket2) * 0.22)+ (( baket2 - baket1)* 0.12)+ (baket1 * 0.1) ;
            return out.innerHTML = resultBaket4;
        }

        if (incomeTax > baket4 && incomeTax <= baket5){
            const resultBaket5 = ( (incomeTax - baket4) * 0.32) +( ( baket4- baket3) * 0.24) + ( (baket3 - baket2) * 0.22)+ (( baket2 - baket1)* 0.12)+ (baket1 * 0.1) ;
            return out.innerHTML = resultBaket5;
        }
       
        if (incomeTax > baket5 && incomeTax <= baket6){
            const resultBaket6 = ( (incomeTax - baket5) * 0.35) + ( (baket5 - baket4) * 0.32) + ( ( baket4- baket3) * 0.24) + ( (baket3 - baket2) * 0.22)+ (( baket2 - baket1)* 0.12)+ (baket1 * 0.1) ;
            return out.innerHTML = resultBaket6;
        }

        if (incomeTax > baket6 ){
            const resultBaket7 = ( (incomeTax - baket6) * 0.37) + ( (baket6 - baket5) * 0.35)+ ( (baket5 - baket4) * 0.32) + ( ( baket4- baket3) * 0.24) + ( (baket3 - baket2) * 0.22)+ (( baket2 - baket1)* 0.12)+ (baket1 * 0.1) ;
            return out.innerHTML = resultBaket7;
        }
    }

    
}