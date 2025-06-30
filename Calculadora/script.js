const screen = document.querySelector('.screen');

function addNumber(value) {
    if(screen.textContent == '0') {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
    return;
}

function deleteInfo() {
    screen.textContent = '0';
    return;
}

function evaluateInfo() {
    try {
        screen.textContent = eval(screen.textContent.replace('X', '*'));
    } catch(error) {
        screen.textContent = 'ERROR. OPERACIÓN NO VÁLIDA';
    }
    return;
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if(value === 'DE' || value === 'C') {
            deleteInfo();
        } else if(value === '=') {
            evaluateInfo();
        } else {
            addNumber(value);
        }
    })
})