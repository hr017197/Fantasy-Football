const prompt = require('prompt-sync')();

//The following code is tests I ran to see what data would be brought back from the api and how accurate
//it is.

//This code snippet is taken from the rapid api website to access the api.
//Grabs the NFL teams -- this list has the player ids. Those ids are attached to players names and jersey numbers in the player list.
/*
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
	port: null,
	path: '/getNFLTeams?sortBy=standings&rosters=false&schedules=false&topPerformers=true&teamStats=true&teamStatsSeason=2023',
	headers: {
		'x-rapidapi-key': 'a09c37b269msh33777a4df77da3ap1cd9c8jsncc7417bf8707',
		'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
*/

//grab the player list
/*
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
	port: null,
	path: '/getNFLPlayerList',
	headers: {
		'x-rapidapi-key': 'a09c37b269msh33777a4df77da3ap1cd9c8jsncc7417bf8707',
		'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
*/

//Get player information
// Will bring back each curent season stats for the returned players when getStats is true
/*
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
	port: null,
	path: '/getNFLPlayerInfo?playerName=keenan_a&getStats=true',
	headers: {
		'x-rapidapi-key': 'a09c37b269msh33777a4df77da3ap1cd9c8jsncc7417bf8707',
		'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
*/

//grab fantasy points projections
function projections(input){
	//TODO: have a check on the week input. If it is incorrect value/format exit the program
	const http = require('https');

	const options = {
		method: 'GET',
		hostname: 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
		port: null,
		path: `/getNFLProjections?week=${input}&archiveSeason=2024&twoPointConversions=2&passYards=.04&passAttempts=-.5&passTD=4&passCompletions=1&passInterceptions=-2&pointsPerReception=1&carries=.2&rushYards=.1&rushTD=6&fumbles=-2&receivingYards=.1&receivingTD=6&targets=.1&fgMade=3&fgMissed=-1&xpMade=1&xpMissed=-1`,
		headers: {
			'x-rapidapi-key': 'a09c37b269msh33777a4df77da3ap1cd9c8jsncc7417bf8707',
			'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
		}
	};

	const req = http.request(options, function (res) {
		const chunks = []

		res.on('data', function (chunk) {
			chunks.push(chunk)
		});

		res.on('end', function () {
			const body = Buffer.concat(chunks)
			console.log(body.toString())
		})
	})

	req.end()

	//console.log(options)

	//TODO
	//grab longName
	//grab week
	//grab season (this is the year)
	//grab fantasyPoints

	/*
	Example output for 1 of the players for week 10
	 "4372066": {"Kicking": {"fgMade": "1.6", "fgMissed": "0.3", "xpMade": "2.9", "xpMissed": "0.2"}, 
	 "team": "SF", "pos": "PK", "longName": "Jake Moody", "teamID": "28", "playerID": "4372066", 
	 "fantasyPoints": "7.2", "fantasyPointsDefault": {"standard": "7.2", "PPR": "7.2", "halfPPR": "7.2"}}}, 
	 "week": "10", "season": "2024"}}
	*/
}




function main(){ 
	let input = prompt('Please enter what data you would like:/n Fantasy point player projections: enter "F": ')

	//Add a switch case here to switch between
	switch(input){
		case 'f':
		case 'F':
			//prompt user to enter the week they would like the projected points for
			let input = prompt('Please enter what week you are wanting the projection for. 1-18 or "season": ')
			//do a check on the input to ensure it is correct
			projections(input)
			break
		default:
			console.log("The user input does not match the requested input, please try again")

	}
}
main()




//ELEPHANT CODE GRAVEYARD
//