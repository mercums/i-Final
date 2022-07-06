let selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  }
  else {
    updateRecord(formData);
  }
  resetForm();
}

// Retrieve the data
function readFormData() {
  let formData = {};
  formData['cerealName'] = document.getElementById('cerealName').value;
  formData['hotCold'] = document.getElementById('hotCold').value;
  formData['calories'] = document.getElementById('calories').value;
  return formData;
}

// Insert the data
function insertNewRecord(data) {
  let table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.cerealName;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.hotCold;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.calories;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

// Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('cerealName').value = selectedRow.cells[0].innerHTML;
  document.getElementById('hotCold').value = selectedRow.cells[1].innerHTML;
  document.getElementById('calories').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.cerealName;
  selectedRow.cells[1].innerHTML = formData.hotCold;
  selectedRow.cells[2].innerHTML = formData.calories;
}

// Delete the data
function onDelete(td) {
  if (confirm('Do you want to delete this record?')) {
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rowIndex);
    resetForm();
  }
}

// Reset the data
function resetForm () {
  document.getElementById('cerealName').value = '';
  document.getElementById('hotCold').value = '';
  document.getElementById('calories').value = '';
  selectedRow = null;
}