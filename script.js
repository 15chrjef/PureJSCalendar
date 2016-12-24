	
document.body.onload = renderRows;

function renderRows() {
	var table = document.createElement("tbl")
	for(var i = 0 ; i < 24; i++) {
		var row = document.createElement("tr"); 
		var j;
		if(i === 0) {
			j = 12
		} else if ( i > 12){
			j = (i) % 12
		} else {
			j = (i ) % 13
		}
		var time = document.createElement("td")
		time.className += "time"
		var timeText = document.createTextNode(`${j}:00`); 
  	time.appendChild(timeText); 

		var textNode;
		if(i > 12) {
			textNode = 'AM'
		} else {
			textNode = 'PM'
		}
		var dayTime = document.createElement("td")
		dayTime.className += "daytime"
		var dayTimeText = document.createTextNode(`${textNode}`); 
  	dayTime.appendChild(dayTimeText); 

		var myEvents = document.createElement("td")
		myEvents.className += "events"
		var eventText = document.createTextNode(`klafhjfajlsdljhk`); 
  	myEvents.appendChild(eventText);

		row.appendChild(time)
		row.appendChild(dayTime)
		row.appendChild(myEvents)
		table.appendChild(row)
	}
	var div = document.getElementById('div1');
	document.body.appendChild(table, div)
}
		// (<tr><td class="time">`${i}`:00</td><td class="daytime">AM</td><td class="events">studd</td></tr>)


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