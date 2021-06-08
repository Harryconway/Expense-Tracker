let addexpense = document.querySelector('.addExpense');
addexpense.addEventListener('click', displayDetails);

let row = 1;
function displayDetails() {
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let price = document.getElementById('price').value;

    if (!name || !date || !price) {
        alert('Please fill in every input field.');
        return;
    }

    let display = document.getElementById('display');
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = `$${price} `;

    row++;
}