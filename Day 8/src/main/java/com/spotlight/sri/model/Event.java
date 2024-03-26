package com.spotlight.sri.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sp_event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String eventId;

	private String eventName;
  	private String eventType;
  	private String description;
  	private String suitableFor;
  	private String maxParticipantsCount;
  	private Integer charges;

    @ManyToMany
  	private List<Customer> customers;

  	@OneToMany
  	private List<Booking> bookings;


}

