var totalTickets = 0;
var total = 0;
var seatButtons = document.querySelectorAll(".seat");
for (seat of seatButtons) {
    const seatNum = seat.innerText;
    seat.addEventListener('click', function() {
        this.classList.add('bg-green-200'); 
        // console.log(seat);
        addItemToBill(seatNum);
        totalTickets = totalTickets + 1;
        // console.log(totalTickets);
        changeInnerTextByID('small-green' , totalTickets)
        total = total + 550;
        changeInnerTextByID('total', total);
        this.disabled = true;
    }
    )
 
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