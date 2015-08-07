$("#new-fortune").on("click", function() {
  $.get("/new-fortune.json", function(newFortune) {
    $("#fortune").text(newFortune["fortune"]);
  });
});

$("#hello-world").on("click", function() {
  $.get("/hello_world", function(data) {
		window.location.href = "hello_world"
		console.log(data);
		$(".result").html(data);
  });
});

$("#home").on("click", function() {
  $.get("/index", function(data) {
		window.location.href = "index"
		console.log(data);
		$(".result").html(data);
  });
});
