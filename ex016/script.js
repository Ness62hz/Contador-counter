

function somar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var contagem = window.document.getElementById('contagem')
    var res = window.document.getElementById('res')
    var ini1 = Number(inicio.value)
    var fim1 = Number(fim.value)
    var contagem1 = Number(contagem.value)


        
    if ( inicio.value.length == 0 || fim.value.length == 0 || contagem.value.length ==0){
        window.alert('Dados faltando')
    }else{
        if (contagem1 <= 0){
            window.alert('Não pode começar a contagem com 0')
            contagem1 = 1
        }
        if (ini1 < fim1){ 
            for (ini1; ini1 <= fim1; ini1 = ini1 + contagem1){
                res.innerHTML += `${ini1} `
            }
       
        } else {
            for (ini1; ini1 >= fim1; ini1 = ini1 - contagem1){
                res.innerHTML += `${ini1} `
            }
        }      
    }
    
    
        
}