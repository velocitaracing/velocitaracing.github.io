let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let amount = data[i]["gsx$_cn6ca"]["$t"];
      let contributors = data[i]["gsx$_cokwr"]["$t"];

      document.getElementById("amount").innerHTML = amount;

      document.getElementById("contrib").innerHTML = contributors;

      

        // console.log(name);
    }
  }
};



xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1zVN1xlBxek22KInXgoHodrP48nHBiCbAAZaO2Z0htX8/1/public/full?alt=json",
  true
);
xmlhttp.send();