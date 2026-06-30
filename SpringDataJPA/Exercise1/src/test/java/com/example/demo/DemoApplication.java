package com.example.demo;

import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(DemoApplication.class, args);

        CountryRepository repo = context.getBean(CountryRepository.class);

        System.out.println("\n===== COUNTRY DATA =====");

        List<Country> countries = repo.findAll();

        if (countries.isEmpty()) {
            System.out.println("No data found in table!");
        } else {
            for (Country c : countries) {
                System.out.println(c.getCode() + " -> " + c.getName());
            }
        }
    }
}