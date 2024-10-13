const stack = [];
const stackTable = document.getElementById('stack-table');
const inputField = document.getElementById('stack-input');
const pushButton = document.getElementById('push-btn');
const popButton = document.getElementById('pop-btn');

function updateStackDisplay() {
    const cells = stackTable.getElementsByTagName('td');

    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = ''; 
    }

    for (let i = 0; i < stack.length; i++) {
        cells[cells.length - 1 - i].textContent = stack[i];
    }
}

pushButton.addEventListener('click', () => {
    const value = inputField.value;
    if (value) {
        stack.push(value); 
        inputField.value = ''; 
        updateStackDisplay(); 
    }
});

popButton.addEventListener('click', () => {
    if (stack.length > 0) {
        stack.pop(); 
        updateStackDisplay(); 
    }
});
