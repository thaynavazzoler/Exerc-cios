const btnCalcular = document.getElementById("btnCalcular");
const inpuNumero = document.getElementById("inpuNumero");
const saidaTabuada = document.getElementById("saidaTabuada");

btnCalcular.addEventListener("click", () => {
  const num = parseInt(inpuNumero.value);
  let tabuada = "";
  for (let count = 1; count <= 10; count++) {
    tabuada += `${num} x ${count} = ${num * count}<br>`;
  }
  saidaTabuada.innerHTML = tabuada;
});