package com.example.api.domain.user;

import jakarta.persistence.*;
import lombok.*;

@Table(name="users")
@Entity(name="users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")

public class User {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String senha;

    public String getSenha() {
        return senha;
    }
}
