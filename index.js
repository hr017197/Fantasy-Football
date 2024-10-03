
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

//grab fantasy points projections
/*
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
	port: null,
	path: '/getNFLProjections?week=season&archiveSeason=2024&twoPointConversions=2&passYards=.04&passAttempts=-.5&passTD=4&passCompletions=1&passInterceptions=-2&pointsPerReception=1&carries=.2&rushYards=.1&rushTD=6&fumbles=-2&receivingYards=.1&receivingTD=6&targets=.1&fgMade=3&fgMissed=-1&xpMade=1&xpMissed=-1',
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
