//Exercicio com ternário
/*
function validaMaioridade(anoNascimento)  {
    return anoNascimento < 2003 ? "Liberação autorizada" : anoNascimento == 2003 ? "Validar documento de identidade" : 
    "ATENÇÃO:Liberação NÃO autorizada" ;
}
    const resultado = (validaMaioridade(2006));
    console.log(resultado);
*/
    // Exercicio com if, else if e else.

    function validaMaioridade(anoNascimento)  {
    if (anoNascimento < 2003) {
       return  "Liberação autorizada";
    }else if (anoNascimento == 2003) {
        return "Validar documento de identidade";
    } else {
         return "ATENÇÃO:Liberação NÃO autorizada" ;
    }
}
    const resultado = (validaMaioridade(2003));
    console.log(resultado);
