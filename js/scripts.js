var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
/*
document.querySelector("input").addEventListener("input", function() {
  let newFontSize = (48 - this.value.length);
  if (newFontSize > 30) newFontSize = 30;
  if (newFontSize < 12) newFontSize = 12;
  this.style.fontSize = newFontSize + "px";
});
