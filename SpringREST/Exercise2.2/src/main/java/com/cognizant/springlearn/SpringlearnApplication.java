package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.springlearn.model.Country;

@SpringBootApplication
public class SpringlearnApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringlearnApplication.class, args);
    }

    @Bean
    public Country country() {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = (Country) context.getBean("country");

        context.close();

        return country;
    }
}