function convert() {
  let suhu = parseFloat(document.getElementById("inputSuhu").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let hasil = "";

  if (isNaN(suhu)) {
    hasil = "Masukkan angka yang valid!";
  } else if (from === to) {
    hasil = `${suhu} tetap ${suhu}`;
  } else {
    let celsius;

    // konversi input ke Celsius dulu
    switch(from) {
      case "celsius":
        celsius = suhu;
        break;
      case "fahrenheit":
        celsius = (suhu - 32) * 5/9;
        break;
      case "kelvin":
        celsius = suhu - 273.15;
        break;
    }

    // konversi dari Celsius ke target
    switch(to) {
      case "celsius":
        hasil = `${suhu} ${fromSymbol(from)} = ${celsius.toFixed(2)} °C`;
        break;
      case "fahrenheit":
        hasil = `${suhu} ${fromSymbol(from)} = ${(celsius * 9/5 + 32).toFixed(2)} °F`;
        break;
      case "kelvin":
        hasil = `${suhu} ${fromSymbol(from)} = ${(celsius + 273.15).toFixed(2)} K`;
        break;
    }
  }

  document.getElementById("hasil").innerText = hasil;
}

function fromSymbol(unit) {
  switch(unit) {
    case "celsius": return "°C";
    case "fahrenheit": return "°F";
    case "kelvin": return "K";
  }
}
