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
    let ob = document.getElementById("ac-table");
    let today = new Date;
    if(entry.nature === "Capital")
    {
        let row = document.createElement('tr');
        ob.appendChild(row);
        let c = Array(5);
        let values = [`${today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()}`,
        `${entry.operation}`,
        `${entry.amount}`,
        `${entry.narr}`];
        for(let i=0;i<4;i++)
        {
            c[i] = document.createElement('td')
            row.appendChild(c[i])
            c[i].innerHTML = values[i];
        }
    }
    else {
        let row = document.createElement('tr');
        ob.appendChild(row);
        let c = Array(5);
        let values = [`${today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()}`,
        `${entry.operation}`,
        `${entry.amount}`,
        `${entry.narr}`];
        for(let i=0;i<2;i++)
        {
            c[i] = document.createElement('td')
            row.appendChild(c[i])
            c[i].innerHTML = values[i];
        }
        c[2] = document.createElement('td');
        row.appendChild(c[2]);
        c[3] = document.createElement('td')
        row.appendChild(c[3]);
        c[3].innerHTML = values[2];
        c[4] = document.createElement('td')
        row.appendChild(c[4]);
        c[4].innerHTML = values[3];
    }
}
