class Variavel{
    

    constructor(){
        this.arrayVariaveis = [];

    }


    salvar(){
        let variavel = this.lerDados();

        this.adicionar(variavel);


        this.tabelaFrequencia();

  

    }

    lerDados(){
    
    let variavel = {}

    variavel.variavel = document.getElementById('variavel').value;  
    variavel.frequencia = document.getElementById('frequencia').value;

    return variavel;

    }

    adicionar(variavel){
        this.arrayVariaveis.push(variavel);
    }



    tabelaFrequencia(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i <= this.arrayVariaveis.length; i++){

            let tr = tbody.insertRow();


            let td_frequência = tr.insertCell();
            let td_variaveis = tr.insertCell();



            td_frequência.innerText = this.arrayVariaveis[i].frequencia;
            td_variaveis.innerText = this.arrayVariaveis[i].variavel;
        }
       

    }

    tabelaResultados(){

            let tbodyResultados = document.getElementById('tbodyResultados');
            tbodyResultados.innerText = '';
    
            for(let i = 0; i < this.arrayVariaveis.length; i++){
    
                let tr = tbody.insertRow();
    
    
                let td_frequência = tr.insertCell();
                let td_variaveis = tr.insertCell();
    
                td_frequência.innerText = this.arrayVariaveis[i].frequencia;
                td_variaveis.innerText = this.arrayVariaveis[i].variavel;
            }
    }

    moda(){
        for(let i; i<= (this.arrayVariaveis.length - 1); i++){
            for(let j; j <= (this.arrayVariaveis.length - 1); i++){
                if(j.variavel == i.variavel && this.arrayVariaveis[j] != this.arrayVariaveis[i]){
                    i.frequencia = i.frequencia + j.frequencia;
                    this.arrayVariaveis.slice(j);
                    break;
                }
            }
            
        }

    }

    


    salvarVariavel(){

    }


}


var variavel = new Variavel();