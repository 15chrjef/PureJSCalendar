	
document.body.onload = renderRows;
//function to create table and time stamps from 9AM to 9PM
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

		var eventDiv = document.createElement('table');
		eventDiv.className = 'events';

		row.appendChild(time)
		row.appendChild(dayTime)
		table.appendChild(row)
	}
	var div = document.getElementById('div1');
	div.appendChild(table)
	div.appendChild(eventDiv)
}

//function to add events
function layOutDay(myEvents) {
	var myNode = document.getElementsByClassName('events')[0]
	while (myNode.childNodes.length > 0) {
  	myNode.removeChild(myNode.firstChild);
	}	
	myEvents.forEach(function(myEvent) {
		//console log an error if the time entered is not in the range
		if(myEvent.end <= 720) {
			var eventRow = eventHasConflicts(myEvent)
			var event = document.createElement('td')
			event.className += 'event'
			event.start = myEvent.start
			event.end = myEvent.end

			//generate the title for the event
			var eventTitle = generateTextNode('Header', 'eventText1')
			
			//generate the subheader for the event
			var eventBody = generateTextNode('Subheader', 'eventText2')

			event.appendChild(eventTitle)
			event.appendChild(eventBody)
			event.style.position = 'absolute'
			event.style.top = myEvent.start + 40 + 'px';
			event.style.height = myEvent.end - myEvent.start -10 + 'px';
			event.style.width = 540 + 'px'
			//create a new row in our event table if no conflict is found
			if(!eventRow) {
				eventRow = document.createElement("tr")
				eventRow.start = myEvent.start
				eventRow.end = myEvent.end
				eventRow.setAttribute('style',`height: ${myEvent.end - myEvent.start -10}px`) + 'px'; 
				eventRow.className = 'eventRow'
				eventRow.appendChild(event)
				var eventTable = document.getElementsByClassName('events')[0];
				eventTable.appendChild(eventRow)
				// if we have a conflict, add the event to the conflicting row
			} else {
				if(eventRow.start > myEvent.start) {
					eventRow.start = myEvent.start
				} else if (eventRow.end < myEvent.end) {
					eventRow.end = myEvent.end
				}
				var t = Number(eventRow.childNodes[0].style.top.substr(0,3))
				//variable w as referenced in instructions
				var w = 500/ (eventRow.childNodes.length + 1)
				eventRow.style.top = t
				event.setAttribute('style',`width: ${w}px`)
				event.style.top = myEvent.start + 40 + 'px';

				//resetting attributes of the row and the row's children
				for( var j = 0; j < eventRow.childNodes.length; j++) {
					var top = eventRow.childNodes[j].style.top
					eventRow.childNodes[j].setAttribute('style',`width: ${w}px`)
					eventRow.setAttribute('style',`top: ${t}px`)
					eventRow.childNodes[j].style.top = top;
				}
				eventRow.appendChild(event);
			}
		} else {
			console.log('error, end time is after 9:00 PM')
		}
	})
}

//function to check if the event we are adding has any potential conflicts
function eventHasConflicts(myEvent) {
	var events = document.getElementsByClassName('events')[0].childNodes
	if(events.length > 0) {
		for( var i = 0; i < events.length; i++) {
			if((!(events[i].start > myEvent.start && events[i].start > myEvent.end) && !(events[i].end < myEvent.start))) {
				return events[i]
			}
		}
	}
}

//function to generate the text nodes for an event
function generateTextNode (text, className){
		var node = document.createElement('div')
		var nodeText = document.createTextNode(text)
		node.className += className
		node.appendChild(nodeText)
		return node
}