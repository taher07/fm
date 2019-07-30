/*function addCap(op,amt=0,narr)
{
    const cur = localStorage.getItem("totalCapAmount")
    if(op === "add")
        amt+=parseInt(cur);
    else
        amt-=parseInt(cur);
    localStorage.setItem("totalCapAmount",amt);
    localStorage.setItem("narration",narr)
}
function addExp(op,amt,narr)
{
    const cur = localStorage.getItem("totalExpAmount")
    if(op === "add")
    {
        amt+=parseInt(cur);
        const am = localStorage.getItem("totalCapAmount")

    }
}*/
let nature;
let op;
let amt;
let narr;
function addSomething(e)
{
    e.preventDefault()
    nature = document.getElementById("nature").value;
    op = document.getElementById("operation").value;
    amt = document.getElementById('amt').value;
    narr = document.getElementById('narr').value;
    console.log(nature,op,amt,narr)
    /*if(nature === "Capital")
    {
        addCap(op,amt,narr);
    }
    else
    {
        addExp(op,amt,narr);
    }*/
    writeOverHere = () => {
        let ob = document.getElementsByClassName("addHere");
        let today = new Date;
        console.log(nature,op,amt,narr);
        if(nature === "Capital")
        {
            ob.innerHTML = `<tr>
                <td>${today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()}</td>
                <td>${op}</td>
                <td></td>
                <td>${amt}</td>
                <td>${narr}</td>
            </tr>`
        }
        else {
            ob.innerHTML = `<tr>
                <td>${today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear()}</td>
                <td>${op}</td>
                <td>${amt}</td>
                <td></td>
                <td>${narr}</td>
            </tr>`
        }
    }
}