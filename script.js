let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let result = document.getElementById('result')


console.log(select)
fetch( 'https://api.frankfurter.app/currencies').then((res)=>res.json())
.then((res)=>displaydropdown(res))


function displaydropdown(res)
{
    //Object.entries -- it is used to convert to an array format
   let cur = Object.entries(res)
   for(let i=0;i<cur.length;i++)
   {
    let opt = `<option value=${cur[i][0]}>${cur[i][0]}</option>`
    //console.log(opt)
    select[0].innerHTML += opt
    select[1].innerHTML += opt
   }

}

btn.addEventListener('click',()=>{

let curr1 = select[0].value 
let curr2 = select[1].value
let inputValue = input.value

    if(curr1===curr2)
        alert("Choose a Different Currency")
        
    else
        convert(curr1,curr2,inputValue)
})

function convert(curr1,curr2,inputValue)
{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
    //alert(`10 GBP = ${data.rates.USD} USD`);
    document.getElementById('result').value=Object.values(data.rates)[0]
  });
}