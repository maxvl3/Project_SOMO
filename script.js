function updateValues() {
  var sector1 =
    Math.round(document.getElementById("sector1").value / 1000000) * 1000000;
  var sector2 =
    Math.round(document.getElementById("sector2").value / 1000000) * 1000000;
  var sector3 =
    Math.round(document.getElementById("sector3").value / 1000000) * 1000000;
  var total = sector1 + sector2 + sector3;
  if (total > 1400000000) {
    var diff = total - 1400000000;
    if (document.activeElement === document.getElementById("sector1")) {
      sector1 -= diff;
      document.getElementById("sector1").value = sector1;
    }
    if (document.activeElement === document.getElementById("sector2")) {
      sector2 -= diff;
      document.getElementById("sector2").value = sector2;
    }
    if (document.activeElement === document.getElementById("sector3")) {
      sector3 -= diff;
      document.getElementById("sector3").value = sector3;
    }
  }
  var remaining = 1400000000 - total;
  if (remaining < 0) {
    remaining = 0;
  }
  var sector1Value = sector1,
    sector2Value = sector2,
    sector3Value = sector3,
    remainingValue = remaining;
  if (sector1 >= 1000000000) {
    sector1Value = (sector1 / 1000000000).toFixed(1) + " Billion";
  } else if (sector1 >= 1000000) {
    sector1Value = (sector1 / 1000000).toFixed(1) + " Million";
  }
  if (sector2 >= 1000000000) {
    sector2Value = (sector2 / 1000000000).toFixed(1) + " Billion";
  } else if (sector2 >= 1000000) {
    sector2Value = (sector2 / 1000000).toFixed(1) + " Million";
  }
  if (sector3 >= 1000000000) {
    sector3Value = (sector3 / 1000000000).toFixed(1) + " Billion";
  } else if (sector3 >= 1000000) {
    sector3Value = (sector3 / 1000000).toFixed(1) + " Million";
  }
  if (remaining >= 1000000000) {
    remainingValue = (remaining / 1000000000).toFixed(1) + " Billion";
  } else if (remaining >= 1000000) {
    remainingValue = (remaining / 1000000).toFixed(1) + " Million";
  }
  var sector1Percent = ((sector1 / 1400000000) * 100).toFixed(2) + "%";
  var sector2Percent = ((sector2 / 1400000000) * 100).toFixed(2) + "%";
  var sector3Percent = ((sector3 / 1400000000) * 100).toFixed(2) + "%";
  document.getElementById("sector1Value").innerHTML =
    "$" + sector1Value + " " + sector1Percent;
  document.getElementById("sector2Value").innerHTML =
    "$" + sector2Value + " " + sector2Percent;
  document.getElementById("sector3Value").innerHTML =
    "$" + sector3Value + " " + sector3Percent;
  document.getElementById("remaining").innerHTML = "$" + remainingValue;
}