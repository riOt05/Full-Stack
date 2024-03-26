package com.spotlight.sri.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.spotlight.sri.dto.Request.EventRequest;
import com.spotlight.sri.dto.Response.BasicResponse;
import com.spotlight.sri.model.Event;
import com.spotlight.sri.repository.EventRepository;
import com.spotlight.sri.service.EventService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @SuppressWarnings("null")
    @Override
    public BasicResponse<String> postEvent(EventRequest eventRequest) {
        Optional<Event> ifEventExists = eventRepository.findByEventName(eventRequest.getEventName());

        if (ifEventExists.isPresent()) {
            return BasicResponse.<String>builder().message("Event already exists with email id "+eventRequest.getEventName())
            .data("").build();
        }

        var event = Event.builder()
                   .eventName(eventRequest.getEventName())
                   .eventType(eventRequest.getEventType())
                   .description(eventRequest.getDescription())
                   .suitableFor(eventRequest.getSuitableFor())
                   .maxParticipantsCount(eventRequest.getMaxParticipantsCount())
                   .charges(eventRequest.getCharges())
                   .build();

        eventRepository.save(event);
        return BasicResponse.<String>builder().message("Event Added Successfully").data("").build();
    }

    @Override
    public BasicResponse<Event> getEvents() {
        return BasicResponse.<Event>builder().message("Read All Events").dataList(eventRepository.findAll()).build();
    }

    @SuppressWarnings("null")
    @Override
    public BasicResponse<Event> updateEvent(EventRequest eventRequest) {

        Optional<Event> ifEventExist = eventRepository.findById(eventRequest.getEventId());

        if (ifEventExist.isPresent()) {
            Event existingEvent = ifEventExist.get();

            existingEvent.setMaxParticipantsCount(eventRequest.getMaxParticipantsCount());
            existingEvent.setCharges(eventRequest.getCharges());

            eventRepository.save(existingEvent);

            return BasicResponse.<Event>builder().message("Event updated successfully").build();
        }

        else {
            return BasicResponse.<Event>builder().message("Event with name '" + eventRequest.getEventName() + "' not found").build();
        }
    }

    @SuppressWarnings("null")
    @Override
    public BasicResponse<String> deleteEvent(EventRequest eventRequest) {

        Optional<Event> ifEventExist = eventRepository.findById(eventRequest.getEventId());

        if (ifEventExist.isPresent()) {
           eventRepository.deleteById(eventRequest.getEventId());

            return BasicResponse.<String>builder().message("Event Deleted successfully").build();
        }

        else {
            return BasicResponse.<String>builder().message("Event something went wrong").build();
        }

    }    



    
    
}
