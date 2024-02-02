// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';

// Set all the buttons
var subjectButton = document.getElementById('subject_btn');
var verbButton = document.getElementById('verb_btn');
var adjectiveButton = document.getElementById('adjective_btn');
var nounButton = document.getElementById('noun_btn');
var placeButton = document.getElementById('place_btn');
var speakButton = document.getElementById('speak_btn');
var resetButton = document.getElementById('reset_btn');
var randomButton = document.getElementById('random_btn');

// Initialize all the options
var subjects = [
	"The turkey",
	"Mom",
	"Dad",
	"The dog",
	"My teacher",
	"The elephant",
	"The cat"
];
var verbs = [
	"sat on",
	"ate",
	"danced with",
	"saw",
	"doesn't like",
	"kissed"
];
var adjectives = [
	"a funny",
	"a scary",
	"a goofy",
	"a slimy",
	"a barking",
	"a fat"
];
var nouns = [
	"goat",
	"monkey",
	"fish",
	"cow",
	"frog",
	"bug",
	"worm"
];
var places = [
	"on the moon",
	"on the chair",
	"in my spaghetti",
	"in my soup",
	"on the grass",
	"in my shoes"
];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function pickItem(array) {
	// Pick a random item from an array
	return array[Math.floor(Math.random() * array.length)];
}

function pickAndSpeak(array) {
	// Pick an item randomly, concatenate it into textToSpeak and speak it to the user
    let item = pickItem(array);
	textToSpeak += ' '  + item;
	speakNow(item);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

// Onclick handlers for each of the buttons to pick randomly an item
subjectButton.onclick = function() {
	pickAndSpeak(subjects);
}
verbButton.onclick = function() {
	pickAndSpeak(verbs);
}
adjectiveButton.onclick = function() {
	pickAndSpeak(adjectives);
}
nounButton.onclick = function() {
	pickAndSpeak(nouns);
}
placeButton.onclick = function() {
	pickAndSpeak(places);
}

// Onclick handler for resetting the game
resetButton.onclick = function() {
	textToSpeak = '';
}

// Onclick handler for generating a full random sentence
randomButton.onclick = function() {
	let subject =  pickItem(subjects);
	let verb = pickItem(verbs);
	let adjective = pickItem(adjectives);
	let noun = pickItem(nouns);
	let place = pickItem(places);

	let text = subject +  " " + verb + " " + adjective + " " + noun + " " + place;
	speakNow(text);
}
