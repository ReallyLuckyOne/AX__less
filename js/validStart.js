"use strict"

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form__home');
    form.addEventListener('submit', formSend);
    
    async function formSend(e) {
        e.preventDefault();
        
        let error = formValidate(form);
        
        if (error === 0) {
            alert('Дякую за те, що тицьнули :) Наразі воно не працює через брак знань, плак-плак');
        } else {
            alert('Хмм, цікаво чи багато людей потицькало сюди, щоб перевірити чи шось станеться, ахаха. Заповніть все правильно :)');
        }
    }
    
    function formValidate(form) {
    
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        
        for (let index = 0; index < formReq.length; index++) {
        
            const input = formReq[index];
            formRemoveError(input);
            
            if(input.classList.contains('_email')) {
            
                if(emailTest(input)) {
                
                    formAddError(input);
                    error++;
                }            
            } else {
                
                    if(input.value === '') {
                    
                        formAddError(input);
                        error++;
                    }
                }

        }
        return error;
    }
    
    function formAddError(input) {
    
        input.parentElement.classList.add('_erroriwe');
        input.classList.add('_erroriwe');
    }
    function formRemoveError(input) {
    
        input.parentElement.classList.remove('_erroriwe');
        input.classList.remove('_erroriwe');
    }
        function emailTest(input) {
    
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});