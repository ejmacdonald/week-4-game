//establish some gloal variables
var wins = 0;
var losses = 0;
var total_score = 0;
var target_number;
var buttonArray=[];

//clears everything, sets random values for target and gems
function reset_game(){
		target_number = Math.floor((Math.random() * 102) + 19);
		for (i=0; i<=3; i++) {
			buttonArray[i]=Math.floor((Math.random() * 12) + 1);
		}
		total_score = 0;
		$(".score").text(total_score);
		$(".target").text(target_number);
		$(".wins").text(wins);
		$(".losses").text(losses);

}

//check to see if we are on or over the target
function check_results() {
	setTimeout(function() {
		if (total_score == target_number) {
				wins++;
				alert ("you win!");
				reset_game();
		}
		else if (total_score > target_number) {
			losses++;
			alert ("you lose!");
			reset_game();
		}
	}, 200);
}

//reset everything...probably unnecessary
reset_game();



//anytime a gem is clicked, run this
$(".gem").on("click", function() {
	var indexValue = $(this).attr("value");
	total_score += buttonArray[indexValue];
	$(".score").text(total_score);
	check_results();
});



