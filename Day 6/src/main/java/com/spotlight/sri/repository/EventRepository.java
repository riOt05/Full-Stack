package com.spotlight.sri.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spotlight.sri.model.Event;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;


public interface EventRepository extends JpaRepository<Event, String> {

    Optional<Event> findByEventName(String eventName);

    @Transactional
    @Query(value = "select json_object('event_id', e.event_id, 'event_name', e.event_Name, 'description', e.description, 'suitable_For', e.suitable_for, 'max' , e.max_participants_count, 'charges', e.charges) from sn_event e", nativeQuery = true )
    public List<String> getAll();
    
    


    
}

