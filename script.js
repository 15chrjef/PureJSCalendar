	
document.body.onload = renderRows;
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

function layOutDay(myEvents) {
	var myNode = document.getElementsByClassName('events')
	while (myNode.firstChild) {
  	myNode.removeChild(myNode.firstChild);
	}	
	myEvents.forEach(function(myEvent) {
		if(myEvent.end <= 720) {
			var eventRow = eventHasConflicts(myEvent)
			var event = document.createElement('td')
			event.className += 'event'
			event.start = myEvent.start
			event.end = myEvent.end

			//generate the title for the event
			var eventTitle = document.createElement('div')
			var eventTitleText = document.createTextNode('Header')
			eventTitle.className += 'eventText1'
			eventTitle.appendChild(eventTitleText)
			
			//generate the subheader for the event
			var eventBody = document.createElement('div')
			var eventBodyText = document.createTextNode('Subheader')
			eventBody.className += 'eventText2'
			eventBody.appendChild(eventBodyText)

			event.appendChild(eventTitle)
			event.appendChild(eventBody)
			event.style.position = 'absolute'
			event.style.top = myEvent.start + 40 + 'px';
			event.style.height = myEvent.end - myEvent.start -10 + 'px';
			event.style.width = 540 + 'px'
			console.log('eventRow', eventRow)
			if(!eventRow) {
				console.log('we do not have a div')
				eventRow = document.createElement("tr")
				eventRow.start = myEvent.start
				eventRow.end = myEvent.end
				eventRow.setAttribute('style',`top: ${0}px`)
				eventRow.className = 'eventRow'
				eventRow.appendChild(event)
				var eventTable = document.getElementsByClassName('events')[0];
				eventTable.appendChild(eventRow)
			} else {
				console.log('we have a div!!!!!!')
				if(eventRow.start > myEvent.start) {
					console.log('resettng div!!!!!!')
					eventRow.start = myEvent.start
				} else if (eventRow.end < myEvent.end) {
					console.log('resettng div!!!!!!')
					eventRow.end = myEvent.end
				}
				var t = Number(eventRow.childNodes[0].style.top.substr(0,3))

				var w = 500/ (eventRow.childNodes.length + 1)
				eventRow.style.top = t
				event.setAttribute('style',`width: ${w}px`)
				event.style.top = myEvent.start + 40 + 'px';

				console.log(event.style)
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

function eventHasConflicts(myEvent) {
	var events = document.getElementsByClassName('events')[0].childNodes
	if(events.length > 0) {
		for( var i = 0; i < events.length; i++) {
			 console.log('divvvvvinffffooooo', events[i].start,events[i].end, myEvent.start, myEvent.end )
			if((!(events[i].start > myEvent.start && events[i].start > myEvent.end) && !(events[i].end < myEvent.start))) {
				return events[i]
			}
		}
	}
}