CREATE TABLE provider (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    additional_info VARCHAR(255)
);
