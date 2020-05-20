	"use strict";
	$(document).ready(function() {
	    $('#external-events .fc-event').each(function() {

	        // store data so the calendar knows to render an event upon drop
	        $(this).data('event', {
	            title: $.trim($(this).text()), // use the element's text as the event title
	            stick: true // maintain when user navigates (see docs on the renderEvent method)
	        });

	        // make the event draggable using jQuery UI
	        $(this).draggable({
	            zIndex: 999,
	            revert: true, // will cause the event to go back to its
	            revertDuration: 0 //  original position after the drag
	        });

	    });



	    $('#calendar').fullCalendar({
	        header: {
	            left: 'prev,next today',
	            center: 'title',
	            right: 'month,agendaWeek,agendaDay,listMonth'
	        },
	        defaultDate: '2020-05-01',
	        navLinks: true, // can click day/week names to navigate views
	        businessHours: true, // display business hours
	        editable: true,
	        droppable: true, // this allows things to be dropped onto the calendar
	        drop: function() {

	            // is the "remove after drop" checkbox checked?
	            if ($('#checkbox2').is(':checked')) {
	                // if so, remove the element from the "Draggable Events" list
	                $(this).remove();
	            }
	        },
	        events: [{
	                title: 'Business Lunch',
	                start: '2020-05-03T13:00:00',
	                constraint: 'businessHours',
					borderColor: '#FC6180',
					backgroundColor: '#FC6180',
					textColor: '#fff'
	            }, {
	                title: 'Meeting is going on',
	                start: '2020-05-05T11:00:00',
	                constraint: 'availableForMeeting',
	                editable: true,
	                borderColor: '#4680ff',
	                backgroundColor: '#4680ff',
	                textColor: '#fff'
	            }, {
	                title: 'Conference is available',
	                start: '2020-05-06',
	                end: '2020-05-08',
					borderColor: '#93BE52',
					backgroundColor: '#93BE52',
					textColor: '#fff'
	            }, {
	                title: 'Party',
	                start: '2020-05-06',
	                end: '2020-05-08',
					borderColor: '#FFB64D',
					backgroundColor: '#FFB64D',
					textColor: '#fff'
	            },

	            // areas where "Meeting" must be dropped
	            {
	                id: 'availableForMeeting',
	                start: '2020-05-25T10:00:00',
	                end: '2020-05-28T16:00:00',
	                rendering: 'background',
					borderColor: '#ab7967',
					backgroundColor: '#ab7967',
					textColor: '#fff'
	            }, {
	                id: 'availableForMeeting',
	                start: '2020-04-10T10:00:00',
	                end: '2020-04-15T16:00:00',
	                rendering: 'background',
					borderColor: '#39ADB5',
					backgroundColor: '#39ADB5',
					textColor: '#fff'
	            },

	            // red areas where no events can be dropped
	            {
	                start: '2020-05-21',
	                end: '2020-05-24',
	                overlap: false,
	                rendering: 'background',
					borderColor: '#FFB64D',
					backgroundColor: '#FFB64D',
	                color: '#d8d6d6'
	            }, {
	                start: '2020-05-24',
	                end: '2020-05-26',
	                overlap: false,
	                rendering: 'background',
					borderColor: '#ab7967',
					backgroundColor: '#ab7967',
	                color: '#d8d6d6'
	            }
	        ],
			// dayClick: function( date, jsEvent, view) {
				// if (moment().format('YYYY-MM-DD') === date.format('YYYY-MM-DD') || date.isAfter(moment())) {
					// var c_dates = $(this).data('date');
					// $(".popup_wrapper").addClass("open_popup").fadeIn(100);
					// $(".showdate").text(c_dates);
					// $(".cal_modal_events").text(events);
					// $(".close_btn").on("click", function(){
						// $(this).parents(".popup_wrapper").removeClass("open_popup").fadeOut(100);
					// });
				// } else {
					// // Else part is for past dates
				// }

			// },			
	    });
	});
