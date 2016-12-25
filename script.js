	
document.body.onload = renderRows;
console.log('here')
function renderRows() {
	var table = document.createElement("tbl")
	for(var i = 0 ; i < 13; i++) {
		var row = document.createElement("tr"); 
		var j;
		if(i < 4) {
			j = 9 + i
		} else {
			j = (i + 9 ) % 12 
		}
		var time = document.createElement("td")
		time.className += "time"
		var timeText = document.createTextNode(`${j}:00`); 
  	time.appendChild(timeText);
		if(i <12) {
			var halfTime = document.createElement("p");
			var halfTimeText = document.createTextNode(`${j}:30`);
			halfTime.appendChild(halfTimeText)
			time.appendChild(halfTime)
		}
		var textNode;
		if(i < 3) {
			textNode = 'AM'
		} else {
			textNode = 'PM'
		}
		var dayTime = document.createElement("td")
		dayTime.className += "daytime"
		var dayTimeText = document.createTextNode(`${textNode}`); 
		dayTime.id = i;
		dayTime.appendChild(dayTimeText); 

		var eventDiv = document.createElement('div');
		eventDiv.className = 'events';

		row.appendChild(time)
		row.appendChild(dayTime)
		table.appendChild(row)
	}
	var div = document.getElementById('div1');
	div.appendChild(table)
	div.appendChild(eventDiv)
}

var eventObj = {}	
function layOutDay (events) { 

}


function layOutDay(myEvent) {
	if(myEvent.end <= 720) {
		var eventDiv = document.getElementsByClassName('events')[0];
		var event = document.createElement("div")
		event.className += 'event'

		var eventTitle = document.createElement('div')
		var eventTitleText = document.createTextNode('asdfasdfs')
		eventTitle.className += 'eventText1'
		eventTitle.appendChild(eventTitleText)

		var eventBody = document.createElement('div')
		var eventBodyText = document.createTextNode('asdfasdfs')
		eventBody.className += 'eventText2'
		eventBody.appendChild(eventBodyText)

		event.appendChild(eventTitle)
		event.appendChild(eventBody)
		console.log('asfdasdfasdfasdf', eventDiv, event)
		event.style.position = 'absolute'
		event.style.top = myEvent.start + 40 + 'px';
		event.style.height = myEvent.end - myEvent.start -10 + 'px';
		eventDiv.appendChild(event)
	} else {
		console.log('error, end time is after 9:00 PM')
	}

}


// <!--function addElement () { 
//   // create a new div element 
//   // and give it some content 
//   var newDiv = document.createElement("div"); 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   newDiv.appendChild(newContent); //add the text node to the newly created div. 

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }-->