function fewpintsCopy() {
  // Get the text field
  var copyText = document.getElementById("fewpints");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

var myhref = document.getElementById("nav-links-pages");
// Get a reference to "myfield".
var myfield = document.getElementById("nav-links");
// Attach an event listener to "myhref", which gets notifier when "myhref" is clicked.
myhref.addEventListener("click", function () {
  // "myhref" is click. So, uncheck "myfield"
  myfield.checked = false;
});
