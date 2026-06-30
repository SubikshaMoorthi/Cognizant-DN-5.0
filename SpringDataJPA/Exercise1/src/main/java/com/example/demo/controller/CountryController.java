package com.example.demo.controller;

import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private final CountryRepository repo;

    public CountryController(CountryRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Country> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return repo.save(country);
    }
    
    @DeleteMapping("/{code}")
    public void deleteCountry(@PathVariable String code) {
        repo.deleteById(code);
    }
    
    @PutMapping("/{code}")
    public Country updateCountry(@PathVariable String code,
                                 @RequestBody Country updatedCountry) {

        Country existing = repo.findById(code)
                .orElseThrow(() -> new RuntimeException("Country not found: " + code));

        existing.setName(updatedCountry.getName());

        return repo.save(existing);
    }
}