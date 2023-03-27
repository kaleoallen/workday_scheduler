// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


 


 $(function () {
  var nineAm = $("#hour-9");
var tenAm = $("#hour-10");
var elevenAm = $("#hour-11");
var twelvePm = $("#hour-12");
var onePm = $("#hour-13");
var twoPm = $("#hour-14");
var threePm = $("#hour-15");
var fourPm = $("#hour-16");
var fivePm = $("#hour-17");
var saveBtns = $(".saveBtn");
 
var currentHour = moment().format('h:mm:ss a');
 var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
 
 nineAm.val(localStorage.getItem("9"))
 tenAm.val(localStorage.getItem("10"))
 elevenAm.val(localStorage.getItem("11"))
 twelvePm.val(localStorage.getItem("12"))
 onePm.val(localStorage.getItem("1"))
 twoPm.val(localStorage.getItem("2"))
 threePm.val(localStorage.getItem("3"))
 fourPm.val(localStorage.getItem("4"))
 fivePm.val(localStorage.getItem("5"))
 var hour = moment().hours();
var textAreas = $(".description")
for (let i = 9; i < textAreas.length +9; i++) {
  if(hour>i){
    $(`#hour-${i}`).addClass("past")
  }
  if(hour<i){
    $(`#hour-${i}`).addClass("future")
  }
  if(hour==i){
    $(`#hour-${i}`).addClass("present")
  }
}


saveBtns.on("click", function(e){
  console.log(e.target)
  console.log($(`#hour-${e.target.value}`).val())
  localStorage.setItem(e.target.value,$(`#hour-${e.target.value}`).val())
})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
