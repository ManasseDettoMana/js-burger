
let bottone = document.getElementById("bottone_panino");
let nomePanino = document.getElementById("nome_panino");

bottone.addEventListener('click', function(){
    let prezzo=20;
        
   if(nomePanino.value.length === 0){
       alert("Inserisci il nome di un panino");
   }else{
        let ingredienti = document.getElementsByClassName("ingredienti");

        for(let i=0;i<ingredienti.length;i++){
            let costoIngredienti = 2.5;
            if(ingredienti[i].checked == true){
                prezzo+=costoIngredienti;
            }
        }
        let codiciSconto = ["PANINO2021", "BOORGIR2021", "MARSATTACK2021"];             

        let coupon = document.getElementById("coupon");

        if(codiciSconto.includes(coupon.value)){
            let sconto = (prezzo * 20)/100;
            prezzo-=sconto;
        }      
        console.log(prezzo);
    }
    document.getElementById("prezzo").innerHTML += '<span>' + prezzo + '</span>';



});