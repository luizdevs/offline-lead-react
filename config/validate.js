/**
 * Valida um endereço de e-mail
 * 
 * @param {string} email E-mail a ser validado;
 * @return {boolean} Retorna 'true' ou 'false'; 
 */
 export function email(email){
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(typeof(email) == "string"){
        if(er.test(email)){ return true; }
    }else if(typeof(email) == "object"){
        if(er.test(email.value)){
            return true; 				
        }
    }else{
            return false;
    }
}