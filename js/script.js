

var cats = [{
    clickCount: 0,
    catName: "Barney",
    catImg: "cat0.png"
}, {
    clickCount: 0,
    catName: "Heathcliff",
    catImg: "cat1.png"
}, {
    clickCount: 0,
    catName: "Bubblegum",
    catImg: "cat2.png"
}, {
    clickCount: 0,
    catName: "Honeybear",
    catImg: "cat3.png"
}, {
    clickCount: 0,
    catName: "Whiskers",
    catImg: "cat4.png"
}];

/*
  <figure class="figure center-block">
      <img id="cat-img" class="img-responsive" src="cat-images/roster.png" width="315" height="315" alt="vector cat image" />
  </figure>
  <div id="cat-click-counts" class="bg-success click-counts p-t"></div>
*/

// jquery variables
var $catList = $('#cat-list');
var $clickCounts = $('#cat-click-counts');
var $catImg = $('#cat-img');


function updateCat(num) {
    cats[num].clickCount++;
    $catImg.attr("src", "cat-images/" + cats[num].catImg);
    $clickCounts.text("The click count for " + cats[num].catName + " is " + cats[num].clickCount);
}

for (var i = 0; i < cats.length; i++) {
  // create html for entry in cat list
    $catList.append('<li id="cat' + i + '" class="list-group-item">' +
        cats[i].catName +
        '</li>'
    );

    // This is the cat we're on...
    var elem = $("#cat"+i);

    // ... and when we click,
    elem.click((function (numCopy) {
        return function () {
            updateCat(numCopy);
        };
    })(i));

}
