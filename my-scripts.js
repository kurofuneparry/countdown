function CountDown(date) {
	this.diff = function() {return new Date(new Date(date - Date.now()))};
	this.years = function() {return this.diff().getUTCFullYear() - 1970;}
	this.months = function() {return this.diff().getUTCMonth();}
	this.days = function() {return this.diff().getUTCDate() - 1;}
	this.hours = function() {return this.diff().getUTCHours();}
	this.minutes = function() {return this.diff().getUTCMinutes();}
	this.seconds = function() {return this.diff().getUTCSeconds();}
}

times = ["years", "months", "days", "hours", "minutes", "seconds"];

if(localStorage.getItem("date") == null) {
	localStorage.setItem("date", new Date(Date.now()).toISOString().slice(0,16));
}

input = document.getElementById("input");
input.value = localStorage.getItem("date");

message = document.getElementById("message");

function update() {
	localStorage.setItem("date", input.value);
	date = new CountDown(new Date(input.value));

	message.innerHTML = "";
	for (let i=0; i < times.length; i++) {
		message.innerHTML += "<p>" + times[i] + ": " + date[times[i]]() + "</p>";
	}
}

setInterval(update, 1000);
