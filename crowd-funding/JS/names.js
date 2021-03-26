let xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$_cn6ca"]["$t"]

      var $myList = $('<li>');
      $myList.append('<li>' + name + '</li>');

      $('#myNames').append($myList);
        console.log(name);
    //   document.getElementById("").innerHTML = amount;

    }
  }
};



xmlhttp2.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1zB52YS8CeXJuyG0syOU3vUTXCqZxckh8I6w9S42xGE0/1/public/full?alt=json",
  true
);
xmlhttp2.send();