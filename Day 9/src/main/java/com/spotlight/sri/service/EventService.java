package com.spotlight.sri.service;

import com.spotlight.sri.dto.Request.EventRequest;
import com.spotlight.sri.dto.Response.BasicResponse;
import com.spotlight.sri.model.Event;

public interface EventService {

	BasicResponse<String> postEvent(EventRequest eventRequest);

    BasicResponse<Event> updateEvent(EventRequest eventRequest);

    BasicResponse<Event> getEvents();

    BasicResponse<String> deleteEvent(EventRequest eventRequest);

    


    
}