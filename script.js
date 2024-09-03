/*These are all the variables that we have */
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

//To put all the country list in drop down
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        //initially from corrency is USD
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        //to currency is INR
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

//This function to update the flag 
const updateFlag =(element)=>{
    let currCode = element.value;
    let countryCode=countryList[currCode];
    // console.log(countryCode);
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}

//this to perform all the operation to do conversion 
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();//this is to preven from reloading the form
    let amount = document.querySelector(".amount input");
    let amtVal=amount.value;
    console.log(amtVal);
    if(amtVal===""||amtVal<0){
        amtVal=1;
        amount.value="1";
    }
    // console.log(fromCurr.value,toCurr.value);
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    // console.log(URL);
    let response =await fetch(URL);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // console.log(rate);
    let conversion =parseFloat(amtVal*rate).toFixed(4);
    // console.log(Math.floor(conversion));
    msg.innerText=`${amtVal} ${fromCurr.value} = ${conversion} ${toCurr.value}`;
})