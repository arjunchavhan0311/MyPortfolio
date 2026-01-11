package com.portfolio.myPortfolio.services;

import org.springframework.stereotype.Service;

import com.portfolio.myPortfolio.entity.Customers;
import com.portfolio.myPortfolio.repo.CustomersRepo;

@Service
public class CustomerService {

    private final CustomersRepo customersRepo;
    private final EmailService emailService;
  //  private final WhatsAppService whatsAppService;

    public CustomerService(CustomersRepo customersRepo,
                           EmailService emailService
    /*                       WhatsAppService whatsAppService*/) {

        this.customersRepo = customersRepo;
        this.emailService = emailService;
      //  this.whatsAppService = whatsAppService;
    }

    public void saveContact(Customers customers) {

        customersRepo.save(customers); // ✅ ALWAYS save to DB

        try {
            emailService.sendContactMail(customers);
        } catch (Exception e) {
            System.out.println("Email failed: " + e.getMessage());
        }

        try {
            //whatsAppService.sendWhatsAppMessage(customers);
        } catch (Exception e) {
            System.out.println("WhatsApp failed: " + e.getMessage());
        }
    }
}
