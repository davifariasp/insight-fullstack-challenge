package com.example.api.controllers;

import com.example.api.domain.user.RequestUsers;
import com.example.api.domain.user.User;
import com.example.api.domain.user.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersRepository repository;

    @PostMapping("/login")
    public ResponseEntity login (@RequestBody @Validated RequestUsers data){
        Map<String, Object> res = new HashMap<>();
        try {
            Optional<User> response = repository.findByEmail(data.email());
            if (response.isPresent()){
                if(data.senha().equals(response.get().getSenha())){
                    res.put("success", true);
                    return ResponseEntity.ok(res);
                }
                throw new Exception("Senha incorreta");
            } else {
                throw new Exception("Usuário não existe");
            }
        } catch (Exception e) {
            res.put("success", false);
            res.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }
}
