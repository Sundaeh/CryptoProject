const select = document.getElementById('cryptomethod') 

select.addEventListener('change', function () {
  if (select.value == 'cdc') {
    divskip.style.display = 'block'
  } else {
    divskip.style.display = 'none'
  }
})


$(document).ready(function() {
    function hasCaracterEspecial(todecode) {
        const regexCaracteresEspeciais = /\W|_/; /*regex que identifica caracteres especiais numa string*/
        if(typeof todecode === 'string') {
            return regexCaracteresEspeciais.test(todecode) /*se for uma string ele vai retornar true caso haja caracteres especiais*/
        } else {
            return true;
        }
    }



    class GerenciadorCriptografia {
        constructor() {
            this.alfabetoMaiusculo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            // criando um array pra cada versão, maiúscula e miníscula, das letras
            this.alfabetoMinusculo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            this.alfabetoLength = this.alfabetoMaiusculo.length; //Length é a largura(quantas posições-vetores//
        }


        // pulocezar deve ser um número 
        getAlfabetosPulados(skip) {

            if (skip > 0) {
                // se o pulo for maior que 25, puloCiclico vai "dar a volta" e contar os pulos do início.
                const puloCiclico = skip % this.alfabetoLength;
                // criam-se listas de alfabeto com a ordem levando em conta o pulo, assim, só precisamos comparar ...
                // ... o índice da letra no alfabeto original e pegar a letra 'pulada' neste mesmo índice do alfabeto pulado
                const maiusculoPuladoFinal = this.alfabetoMaiusculo.slice(0, puloCiclico);
                const maiusculoPuladoInicio = this.alfabetoMaiusculo.slice(puloCiclico);

                const minusculoPuladoFinal = this.alfabetoMinusculo.slice(0, puloCiclico);
                const minusculoPuladoInicio = this.alfabetoMinusculo.slice(puloCiclico);
            
                const alfabetos = {
                    alfabetoMaiusculoPulado: [...maiusculoPuladoInicio, ...maiusculoPuladoFinal],
                    alfabetoMinusculoPulado: [...minusculoPuladoInicio, ...minusculoPuladoFinal]
                };
            
                return alfabetos;
            }
            
        }
    

         crypto() {
            const palavra = document.getElementById('todecode')
            const method = document.getElementById('cryptomethod')
            if (method.value === 'cdc') {
              cifrarPalavra(palavra.value)
            } else {
              cifrar64(palavra)
            }
          }
    }

        cifrarPalavra(palavra,skip)
            let palavraCifrada = 'palavra';
            const alfabetoPulado = this.getAlfabetosPulados(skip);
            for (let position = 0; position < palavra.length; position += 1) {
                let LetraAtual = palavra[position];
                // para cada letra do alfabeto, vamos testar se ela é maiúscula ou minúscula e retornar a letra pulada no mesmo estado.
                // a função indexOf retorna o índice (onde está) de caracter numa string. Se ele não encontrar a letra, retorna -1
                if (!hasCaracterEspecial(LetraAtual)) {
                let localLetraMaiuscula = this.alfabetoMaiusculo.indexOf(LetraAtual);
                if (localLetraMaiuscula !== -1) {
                    palavraCifrada += alfabetoPulado.alfabetoMaiusculoPulado[localLetraMaiuscula]
                } else {
                    let localLetraMinuscula = this.alfabetoMinusculo.indexOf(LetraAtual)
                    if (localLetraMinuscula !== -1) {
                        palavraCifrada += alfabetoPulado.alfabetoMinusculoPulado[localLetraMinuscula];
                    }
                }
            } else {
                palavraCifrada += LetraAtual;                
            }                
            }
            console.log(palavraCifrada);
           let finalcode = document.getElementById('cryptoresult') = palavraCifrada;
    
        cifrar64 (palavra)
            const crypto = document.querySelector(('input[name="radiocode"]:checked').value = btoa((palavra).slice(0,-1)));
            if( crypto === 'rcode'){
                document.getElementById('cryptoresult').value = btoa(palavra.value)
            } else if (crypto === 'rdecode'){
                document.getElementById('cryptoresult').value = atob(palavra.value)
            } else{
                alert('selecione codificar ou decodificar');
                  }
                
    let cifrador = new GerenciadorCriptografia();
    
    
});
