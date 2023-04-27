const rps_choices = ["rock", "paper", "scissors"];
const rpsls_choices = ["rock", "paper", "scissors", "lizard", "spock"];

export default{
	rps_choices: rps_choices;
	rpsls_choices: rpsls_choices;
	
	
	rpsStd: function () {
		return (
			{ player: random(rps_choices) }
		);
	},

	rps: function (player_choice) {
		const opp_choice = randam(rps_choices)
	
		return (
			{
				player: player_choice,
				opponent: opp_choice,
				result: gameWinner(player_choice, opp_choice)
			}	
		);
	},
	rpslsStd: function () {
		return ( {player: random(rpsls_choices) } );
	},

	rpsls: function(player_choice) {
		const opp_choice = random(rpsls_choices) 
	return ( 
		{ 
			player: player_choice,
			opponent: opp_choice,
			result: gameWinnder(player_choice, opp_choice)
		}
	);
	},
}








