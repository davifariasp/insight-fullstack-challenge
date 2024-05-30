package com.example.api.controllers;

import com.example.api.domain.provider.Provider;
import com.example.api.domain.provider.ProviderRepository;
import com.example.api.domain.provider.RequestProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/provider")
public class ProviderController {
    @Autowired
    private ProviderRepository repository;


    //create
    @PostMapping
    public ResponseEntity<String> createProvider(@RequestBody @Validated RequestProvider data){
        Provider newProvider = new Provider(data);

        repository.save(newProvider);

        System.out.println(data);

        return ResponseEntity.ok().build();
    }

    //read
    @GetMapping("/all")
    public ResponseEntity<List<Provider>> readAllProviders() {
        try {
            List<Provider> allProviders = repository.findAll();
            return ResponseEntity.ok(allProviders);
        } catch (Exception e) {
            // Use a logging framework instead of System.err
            // Example: Logger logger = LoggerFactory.getLogger(ProviderController.class);
            // logger.error("Error reading file", e);
            System.err.println("Error fetching providers: " + e.getMessage());

            // Return an appropriate error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping
    public ResponseEntity<Provider> readProvider(@RequestParam Long id) {
        try {
            Provider newProvider = repository.findById(id).get();
            return ResponseEntity.ok(newProvider);
        } catch (Exception e) {
            System.err.println("Error fetching providers: " + e.getMessage());
            // Return an appropriate error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    //update
    @PutMapping
    public ResponseEntity<String> updateProvider(@RequestParam("id") Long id, @RequestBody @Validated RequestProvider data){
        Provider provider = repository.findById(id).get();

        provider.setName(data.name());
        provider.setContact(data.contact());
        provider.setType(data.type());
        provider.setAdditionalInfo(data.additionalInfo());

        repository.save(provider);

        return ResponseEntity.ok("atualizou");
    }

    //delete
    @DeleteMapping
    public ResponseEntity<String> removeProvider(@RequestParam Long id){
        try {
            repository.deleteById(id);
            return ResponseEntity.ok("deletado com sucesso");
        } catch (Exception e) {
            System.err.println("Error fetching providers: " + e.getMessage());
            // Return an appropriate error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
