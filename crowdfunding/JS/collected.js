let xmlhttp3 = new XMLHttpRequest();
xmlhttp3.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$_cn6ca"]["$t"]

    //   var $myList = $('<li>');
    //   $myList.append('<li>' + name + '</li>');

      $('#collected-amt').append(name);
        // console.log(name);
    //   document.getElementById("").innerHTML = amount;

    }
  }
};



xmlhttp3.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1KvbMBSvscvb6A6OsVDAfA3AIMb22OEwsWpUSbEPAt_E/1/public/full?alt=json",
  true
);
xmlhttp3.send();