	
document.body.onload = renderRows;

function renderRows() {
	var table = document.createElement("tbl")
	for(var i = 1 ; i < 24; i++) {
		var row = document.createElement("tr"); 

		var j = i % 12
		var time = document.createElement("td")
		time.className += "time"
		var timeText = document.createTextNode(`${j}:00`); 
  	time.appendChild(timeText); 

		if(i > 12) {
			textNode = 'AM'
		} else {
			textNode = 'PM'
		}
		var dayTime = document.createElement("td")
		dayTime.className += "daytime"
		var dayTimeText = document.createTextNode(`${textNode}`); 
  	dayTime.appendChild(dayTimeText); 

		var events = document.createElement("td")
		dayTime.className += "events"
		var eventText = document.createTextNode(`klafhjfajlsdljhk`); 
  	time.appendChild(eventText);

		row.appendChild(time)
		row.appendChild(dayTime)
		row.appendChild(events)
		table.appendChild(row)
	}
	var div = document.getElementById('div1');
	document.body.appendChild(table, div)
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
