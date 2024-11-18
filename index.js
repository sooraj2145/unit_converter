/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter_to_feet = 3.281;
const liter_to_gallon = 0.264;
const kilogram_to_pound = 2.204;

let convertButton = document.getElementById('converter-btn');
let lengthVal = document.getElementById('length-description');
let volVal = document.getElementById('volume-description');
let massVal = document.getElementById('mass-description');

function unitConverter(){
    const inputVal = Number(document.getElementById('input-val').value);

    const meterToFeet = (inputVal*meter_to_feet).toFixed(3);
    const feetToMeters = (inputVal / meter_to_feet).toFixed(3);

    const literToGallon = (inputVal*liter_to_gallon).toFixed(3);
    const gallonToLiter = (inputVal / liter_to_gallon).toFixed(3);

    const kilogramToPound = (inputVal*kilogram_to_pound).toFixed(3);
    const poundToKilograms = (inputVal / kilogram_to_pound).toFixed(3);

    lengthVal.textContent = `${inputVal} meters = ${meterToFeet} feet | ${inputVal} feet = ${feetToMeters} meters`;
    volVal.textContent = `${inputVal} liters = ${literToGallon} gallons | ${inputVal} gallons = ${gallonToLiter} liters`;
    massVal.textContent = `${inputVal} kilos = ${kilogramToPound} pounds | ${inputVal} pounds = ${poundToKilograms} kilos`;



}

convertButton.addEventListener('click', unitConverter);