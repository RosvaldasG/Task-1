/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
// Adding task on click

document.getElementById("submit-btn").addEventListener("click", (event) => {
  const inputValue = document.getElementById("search").value;
  const yourValue = document.createElement("h1");
  const kiloLb = document.createElement("h1");
  const kiloGr = document.createElement("h1");
  const kiloOz = document.createElement("h1");
  const textApend = document.getElementById("output");
  let formText = document.getElementById("search");

  kiloLb.textContent = inputValue * 2.2046 + " svarai (lb)";
  kiloGr.textContent = inputValue * 1000 + " gramų (g)";
  kiloOz.textContent = inputValue * 35.274 + " uncijos (oz)";
  yourValue.textContent = inputValue + " kg yra:";

  textApend.innerHTML = null;
  textApend.append(yourValue, kiloLb, kiloGr, kiloOz);
  event.preventDefault();
  formText.value = "";
});
