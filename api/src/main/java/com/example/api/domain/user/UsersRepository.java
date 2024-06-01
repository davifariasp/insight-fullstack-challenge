package com.example.api.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Number> {

    Optional<User> findByEmail(String email);

}
