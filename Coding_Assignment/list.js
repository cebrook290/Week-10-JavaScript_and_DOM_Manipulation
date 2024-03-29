let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-assignment').value;
    row.insertCell(1).innerHTML = document.getElementById('new-type').value;
    row.insertCell(2).innerHTML = document.getElementById('new-given-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-due-date').value;
    row.insertCell(4).innerHTML = document.getElementById('new-score').value;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-assigment').value = '';

});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary'
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById( `item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}