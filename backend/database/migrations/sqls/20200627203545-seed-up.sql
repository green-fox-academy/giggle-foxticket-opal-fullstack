CREATE TABLE Users
(
    id       INTEGER PRIMARY KEY AUTO_INCREMENT,
    username varchar(25),
    email    varchar(25),
    password varchar(25)
);

INSERT INTO Users (username, email, password)
VALUES ('Marci the King', 'marci@marci.com', 'LemonFlavouredBanana');
