console.log('test')

const min = 2020
const max = 2025

const date = () => {

    const d = document.querySelector('#date-picker');
    const errorText = document.querySelector('#error-text');
    const year = d.value.split('-');
    const btnCancel = document.querySelector('#cancel');
    const isCheckSp = document.querySelector('#isCheck');


    console.log("date: " + d.value);
    if (d.value != '') {
        
    }

    console.log('year: ' + year[0]);
    if (year[0] < min || year[0] > max) {
        console.log('y')
        btnCancel.style.visibility = 'visible';
        isCheckSp.style.visibility = 'hidden';
        d.style.border = '2px solid red';
        errorText.innerHTML = 'Error texto'
        errorText.style.color = 'red';
        errorText.style.visibility = 'visible';
    } else {
        btnCancel.style.visibility = 'hidden';
        d.style.border = '2px solid green';
        isCheckSp.style.visibility = 'visible';
        errorText.style.visibility = 'hidden';
    }


}

const clearDate = () => {
    const isRequiere =  true;

    const d = document.querySelector('#date-picker');
    const errorText = document.querySelector('#error-text');
    const span = document.querySelector('#isCheck');
    const btnCancel = document.querySelector('#cancel');
    
    d.value = ''
    span.style.visibility = 'hidden';

    if (isRequiere) {
        d.style.border = '2px solid orange';
        errorText.innerHTML = 'Ingresar fecha'
        errorText.style.color = 'orange';
        errorText.style.visibility = 'visible';
    } else {
        d.style.border = '2px solid black';
        errorText.style.color = 'black';
        errorText.style.visibility = 'hidden';
    }

    btnCancel.style.visibility = 'hidden';
    
}

