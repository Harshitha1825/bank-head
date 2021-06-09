let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
    var sender = document.getElementById("sender").value;
    var receiver = document.getElementById("receiver").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var accountNumber = parseInt(document.getElementById("accountNumber").value);

    if (accountNumber.toString().length < 6){
        alert("Account Number Is Invalid")
    }
    else if (!sender || !receiver || !enterAmount || !accountNumber){
        alert("Please fill all the boxes");
    }
    else if (enterAmount < 500) {
   	    alert("<500 amount not allowed")
    } 
    else if (enterAmount > 20000) {
        alert("Insufficient Balance. Please enter Amount")
    } 
    else {
        var senderAmount = sender + "_Bank_Balance";
        var findUserBankAccount = receiver + "_Bank_Balance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        var senderTotal = parseInt(document.getElementById(senderAmount).innerHTML) - enterAmount;
        document.getElementById(senderAmount).innerHTML = senderTotal;
        alert(` Transaction Successfully Completed...!!  
        ${enterAmount} Rs is sent to ${receiver}.`)
      
    //Transaction History Details....

        var transEle = document.createElement("li");
        var textArea = document.createTextNode(`${sender} sent ${enterAmount} Rs to 
        ${receiver} on
        ${Date()}`);
        transEle.appendChild(textArea);
        var element = document.getElementById("transaction-history");
        element.insertBefore(transEle, element.firstChild);

    }
}

var row=11;

function displayDetails() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var balance = parseInt(document.getElementById('balance').value);

    if(!name || !email || !balance) {
        alert("please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = row;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = Math.floor(100000 + Math.random()*900000);
    cell5.innerHTML = balance;
    cell6.innerHTML = "View";



    var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) + balance
    document.getElementById("myAccountBalance").innerText = myAccountBalance;

    alert("Registration Successfull...!!");

    row++;

}