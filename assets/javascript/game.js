var wins = 0;
var losses = 0;
var total_score = 0;

//assign target value and button values:
var target_number = Math.floor((Math.random() * 90) + 10);
var button_1 = Math.floor((Math.random() * 10) + 1);
var button_2 = Math.floor((Math.random() * 10) + 1);
var button_3 = Math.floor((Math.random() * 10) + 1);
var button_4 = Math.floor((Math.random() * 10) + 1);

console.log("target_number: " + target_number);
console.log("button_1: " + button_1);
console.log("button_2: " + button_2);
console.log("button_3: " + button_3);
console.log("button_4: " + button_4);

//display target number and initial guess value
document.getElementById("target_number").textContent = target_number;


$(".button-1").on("click", function() {
	total_score = total_score + button_1;
	$(".score").text(total_score);
	check_results();
});

$(".button-2").on("click", function() {
	total_score = total_score + button_2;
	$(".score").text(total_score);
	check_results();

});

$(".button-3").on("click", function() {
	total_score = total_score + button_3;
	$(".score").text(total_score);
	check_results();
});

$(".button-4").on("click", function() {
	total_score = total_score + button_4;
	$(".score").text(total_score);
	check_results();
});

function check_results() {
	if (total_score == target_number) {
		alert ("you win!");
	}
	else if (total_score > target_number) {
		alert ("you lose!");
	}
}