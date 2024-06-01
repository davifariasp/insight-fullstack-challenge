package com.example.api.domain.user;

import com.example.api.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UsersRepository extends JpaRepository<User, Number> {

    Optional<User> findByEmail(String email);

}
