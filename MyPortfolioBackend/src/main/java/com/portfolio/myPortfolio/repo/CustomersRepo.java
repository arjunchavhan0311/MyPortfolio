package com.portfolio.myPortfolio.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.portfolio.myPortfolio.entity.Customers;

public interface CustomersRepo extends JpaRepository<Customers, Long> {
}
