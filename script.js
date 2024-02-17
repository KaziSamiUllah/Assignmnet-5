const seatButtons = document.getElementsByClassName('seat');
for (seat of seatButtons) {
    const seatNum = seat.innerText;
    seat.addEventListener('click', function () {
        console.log(seatNum);
        addItemToBill(seatNum);
        

    })
}

function addItemToBill(item) {
    var container = document.getElementById('bill-table')
    var newTableRow = document.createElement('tr')
    var seatID = document.createElement('td');
    seatID.innerText = item;
    var seatClass = document.createElement('td');
    seatClass.innerText = "Economy";
    var fare = document.createElement('td');
    fare.innerText = "550";
    newTableRow.appendChild(seatID);
    newTableRow.appendChild(seatClass);
    newTableRow.appendChild(fare);
    container.appendChild(newTableRow)
}