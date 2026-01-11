package com.portfolio.myPortfolio.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.portfolio.myPortfolio.entity.Customers;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactMail(Customers customers) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);          // ✅ REQUIRED
        message.setTo(fromEmail);            // send to yourself
        message.setSubject("New Portfolio Contact");

        message.setText(
                "Name: " + customers.getName() + "\n" +
                "Email: " + customers.getEmail() + "\n" +
                "Phone: " + customers.getPhoneno() + "\n" +
                "Subject: " + customers.getSubject() + "\n" +
                "Location: " + customers.getLocation() + "\n\n" +
                "Message:\n" + customers.getMessage()
        );

        mailSender.send(message);
    }
}
