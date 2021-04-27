let xmlhttp3 = new XMLHttpRequest();
xmlhttp3.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let slno = data[i]["gsx$_cn6ca"]["$t"];
      let name = data[i]["gsx$_cokwr"]["$t"];
      let contact = data[i]["gsx$_cpzh4"]["$t"];

    //   console.log(slno);

    //   document.getElementById("amount").innerHTML = slno;

    //   document.getElementById("contrib").innerHTML = name;

    //   document.getElementById()

    //   var $myList = $('<td>');
    //   $myList.append('<td>' + name + '</td>');

    //   $('#myNames').append($myList);

    document.getElementById("customers").innerHTML +=
        "<tr>" +
        "<td>" +
        slno +
        "</td>" +
        "<td>" +
        name +
        "</td>" +
        "<td> <a href=\"tel:" +
        contact +
        "\"</a> " + contact + "</td>" +
        "</tr>";

    }
  }
};



xmlhttp3.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1SsECQq1V5Di8EjCYiHPnfclG2R7CBs43hSqV4bPPahk/1/public/full?alt=json",
  true
);
xmlhttp3.send();