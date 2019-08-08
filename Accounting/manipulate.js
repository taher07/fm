let entry = {
    folio: 0,
    narr: "",
    nature: "",
    operation: "",
    amount: 0
}

function addSomething(e)
{
    e.preventDefault()
    entry.folio++;
    entry.amount = parseInt(document.getElementById('amt').value);
    entry.nature = document.getElementById("nature").value;
    entry.operation = document.getElementById("operation").value;
    entry.narr = document.getElementById('narr').value;
    console.log(entry)
}
writeOverHere = entry => {
    let ob = document.getElementsByClassName("addHere");
    let today = new Date;
    console.log(nature,op,amt,narr);
    if(nature === "Capital")
    {
        ob.innerHTML = `<tr>
            <td>${today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()}</td>
            <td>${entry.operation}</td>
            <td></td>
            <td>${entry.amount}</td>
            <td>${entry.narr}</td>
        </tr>`
    }
    else {
        ob.innerHTML = `<tr>
            <td>${today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()}</td>
            <td>${entry.operation}</td>
            <td>${entry.amount}</td>
            <td></td>
            <td>${entry.narr}</td>
        </tr>`
    }
}
