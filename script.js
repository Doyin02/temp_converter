const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');
 function roundNum(num){
    return Math.round(num*100)/100;
 }

function celciusTofahrenheitToKelvin(){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 276.15;
    fahrenheitInput.value = roundNum( fTemp);
    kelvinInput.value =roundNum( kTemp);
};
function fahrenheitTocelciusToKelvin(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value =roundNum( cTemp);
    kelvinInput.value =roundNum( kTemp);
};
function kelvinToCelciusToFarenheit(){
   const kTemp = parseFloat(kelvinInput.value);
   const cTemp = kTemp - 273.15;
   const fTemp = 9/5 * (kTemp - 273) + 32;
   celciusInput.value =roundNum( cTemp);
   fahrenheitInput.value =roundNum( fTemp);
};



celciusInput.addEventListener('input', celciusTofahrenheitToKelvin)
fahrenheitInput.addEventListener('input', fahrenheitTocelciusToKelvin)
kelvinInput.addEventListener('input', kelvinToCelciusToFarenheit)



















































