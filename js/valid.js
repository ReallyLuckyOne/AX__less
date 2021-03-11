"use strict"

function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {

    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function emailTest(input) {

    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

document.addEventListener('DOMContentLoaded', function () {

    const formCon = document.getElementById('form__Contact');
    formCon.addEventListener('submit', formSendMessage);

    async function formSendMessage(e) {
        e.preventDefault();

        let error = formValidate(formCon);

        if (error === 0) {
            alert('Ви все ввели вірно, уря. І форма би відіслалась, якби не відсутність знань :( Дані не стираються після успішного введення');
        } else {
            alert('Підсвічування червоним вказує на відсутність або неправильність введення даних. Перевірте і натисніть ще раз SEND MESSAGE. При правильному введенні виведеться інше повідомлення, а червоне підсвічування зникне. Дякую :)');
        }
    }


    function formValidate(formCon) {

        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {

            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {

                if (emailTest(input)) {

                    formAddError(input);
                    error++;
                }
            } else {

                if (input.value === '') {

                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

});


document.addEventListener('DOMContentLoaded', function () {

    const formHome = document.getElementById('form__home');
    formHome.addEventListener('submit', formGetStarted);

    async function formGetStarted(e) {
        e.preventDefault();

        let error = formValidate(formHome);

        if (error === 0) {
            alert('Ви все ввели вірно, уря. І форма би відіслалась, якби не відсутність знань :( Дані не стираються після успішного введення');
        } else {
            alert('Підсвічування червоним вказує на відсутність або неправильність введення даних. Перевірте і натисніть ще раз Get Started. При правильному введенні виведеться інше повідомлення, а червоне підсвічування зникне. Дякую :)');
        }
    }


    function formValidate(formHome) {

        let error = 0;
        let formReqi = document.querySelectorAll('._reqi');

        for (let index = 0; index < formReqi.length; index++) {

            const input = formReqi[index];
            formRemoveError(input);

            if (input.classList.contains('_emmail')) {

                if (emailTest(input)) {

                    formAddError(input);
                    error++;
                }
            } else {

                if (input.value === '') {

                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

});