var wins = 0;
var losses = 0;
var total_score = 0;

reset_game();


$(".gem_1").on("click", function() {
	total_score = total_score + button_1;
	$(".score").text(total_score);
	check_results();
});

$(".gem_2").on("click", function() {
	total_score = total_score + button_2;
	$(".score").text(total_score);
	check_results();

});

$(".gem_3").on("click", function() {
	total_score = total_score + button_3;
	$(".score").text(total_score);
	check_results();
});

$(".gem_4").on("click", function() {
	total_score = total_score + button_4;
	$(".score").text(total_score);
	check_results();
});

function check_results() {
	if (total_score == target_number) {
		wins++;
		reset_game();
		alert ("you win!");
	}
	else if (total_score > target_number) {
		losses++;
		reset_game();
		alert ("you lose!");
	}
}

function reset_game(){
		target_number = Math.floor((Math.random() * 40) + 1);
		button_1 = Math.floor((Math.random() * 10) + 1);
		button_2 = Math.floor((Math.random() * 10) + 1);
		button_3 = Math.floor((Math.random() * 10) + 1);
		button_4 = Math.floor((Math.random() * 10) + 1);
		console.log("target_number: " + target_number);
		console.log("button_1: " + button_1);
		console.log("button_2: " + button_2);
		console.log("button_3: " + button_3);
		console.log("button_4: " + button_4);
		total_score = 0;
		$(".score").text(total_score);
		$(".target").text(target_number);
		$(".wins").text(wins);
		$(".losses").text(losses);

}