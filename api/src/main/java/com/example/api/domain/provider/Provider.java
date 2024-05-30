package com.example.api.domain.provider;
import lombok.*;

import jakarta.persistence.*;

@Table(name="provider")
@Entity(name="provider")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")

//lombok -> cria os metodos getter e setters em tempo de execucao

public class Provider {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String contact;
    private String type;
    private String additionalInfo;

    public Provider(RequestProvider requestProvider){
        this.name = requestProvider.name();
        this.contact = requestProvider.contact();
        this.type = requestProvider.type();
        this.additionalInfo = requestProvider.additionalInfo();
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
}
