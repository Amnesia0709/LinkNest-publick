USE linknest;

CREATE TABLE interestlevels(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `interest_level` INT NOT NULL UNIQUE
);

-- Таблица Links
CREATE TABLE links(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL UNIQUE,
    `title` VARCHAR(255) NOT NULL,
    `interest_level_id` INT NOT NULL,
    `date_added` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`interest_level_id`) REFERENCES interestlevels(`id`)
);

-- Таблица Categories
CREATE TABLE categories(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL UNIQUE
);

-- Промежуточная таблица между Links и Categories
CREATE TABLE linkscategories (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `link_id` INT,
    `category_id` INT,
    FOREIGN KEY (`link_id`) REFERENCES links(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`category_id`) REFERENCES categories(`id`) ON DELETE CASCADE
);

-- Таблица Authors
CREATE TABLE authors(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `author` VARCHAR(255) NOT NULL UNIQUE
);

-- Таблица LinksAuthors
CREATE TABLE linksauthors(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `link_id` INT NOT NULL,
    `author_id` INT NOT NULL,
    FOREIGN KEY (`link_id`) REFERENCES links(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`author_id`) REFERENCES authors(`id`) ON DELETE CASCADE
);

CREATE TABLE comments(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `comment` VARCHAR(255) NOT NULL,
    `link_id` INT NOT NULL,
    FOREIGN KEY (`link_id`) REFERENCES links(`id`)
);

INSERT INTO interestlevels(`interest_level`)
VALUES  (1),
        (2),
        (3),
        (4),
        (5),
        (6),
        (7),
        (8),
        (9),
        (10);
