package com.portfolio.myPortfolio.services;
/*
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.portfolio.myPortfolio.entity.Customers;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class WhatsAppService {

    @Value("${twilio.account-sid}")
    private String accountSid;

    @Value("${twilio.auth-token}")
    private String authToken;

    @Value("${twilio.whatsapp.from}")
    private String from;

    @Value("${twilio.whatsapp.to}")
    private String to;

    @PostConstruct
    public void init() {
        Twilio.init(accountSid, authToken);
    }

    public void sendWhatsAppMessage(Customers c) {

        String text =
                "New Portfolio Contact\n\n" +
                "Name: " + c.getName() + "\n" +
                "Phone: " + c.getPhoneno() + "\n" +
                "Email: " + c.getEmail() + "\n" +
                "Subject: " + c.getSubject() + "\n" +
                "Message: " + c.getMessage() + "\n" +
                "Location: " + c.getLocation();

        Message.creator(
                new PhoneNumber(to),
                new PhoneNumber(from),
                text
        ).create();
    }
}
*/