package com.spotlight.sri.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventRequest {
    private String eventId;
    private String eventName;
    private String eventType;
    private String description;
    private String suitableFor;
    private String maxParticipantsCount;
    private Integer charges;
}
