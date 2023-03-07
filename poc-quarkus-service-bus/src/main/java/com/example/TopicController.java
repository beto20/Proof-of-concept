package com.example;

import com.fasterxml.jackson.core.JsonProcessingException;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Produces(MediaType.WILDCARD)
@Consumes(MediaType.WILDCARD)
@ApplicationScoped
@Path("/api")
public class TopicController {

    @Inject
    TopicService topicService;

    @POST
    @Path("/topic-pub")
    public String getTopic(Request request) throws InterruptedException, JsonProcessingException {
        topicService.sendMessage(request);
        topicService.sendMessageBatch();
        return "topic";
    }

    @GET
    @Path("/topic-sub")
    public String getTopic2() throws InterruptedException {
        TopicSubs.receiveMessages();
        return "topic";
    }

}
