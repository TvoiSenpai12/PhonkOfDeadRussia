const mail = document.getElementById('floatingInput');
const textMessage = document.getElementById('exampleFormControlTextarea1');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const check = document.getElementById('checkbox');


form.addEventListener('submit', (e) => {
    let messages = [];

    if (textMessage.value === '' || textMessage.value == null) {
        messages.push('Введите сообщение')
    }

    if (mail.value === '' || mail.value == null) {
        messages.push('Введите почту')
    }

    if (check.checked == false) {
        messages.push('Подтвердите соглашение')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ');
    }

})
