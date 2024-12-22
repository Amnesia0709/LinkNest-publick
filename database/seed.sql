INSERT INTO Links(`url`, `title`, `interest_level_id`)
VALUES  ("https://www.youtube.com/", "Youtube", 8),
        ("https://qna.habr.com/", "Habr", 6);

INSERT INTO categories(`name`)
VALUES  ("Видео"),
        ("Статьи"),
        ("Русский язык"),
        ("Позновательный материал"),
        ("Темная тема");

INSERT INTO linkscategories(`link_id`, `category_id`)
VALUES  (1, 1),
        (1, 4),
        (1, 5),
        (2, 2),
        (2, 3);

INSERT INTO comments(`comment`, `link_id`)
VALUES  ("Stoked to have the collaboration 'Floating, Drifting' with Lawrence Walthe", 1),
        ("Listening to this after finally getting the news of being cancer free. Sending love and light to", 1),
        ("On my birthday, all I want is for the person reading this to be healthy, happy, and loved", 2);

INSERT INTO authors(`author`)
VALUES  ("Чад Хёрли"),
        ("Стив Чен"),
        ("Денис Крючков");

INSERT INTO linksauthors(`link_id`, `author_id`)
VALUES  (1, 1),
        (1, 2),
        (2, 3);

-- Увелечения лимита вывода
SET SESSION group_concat_max_len = 10000;

-- Вывод всех данных отсотрированных по id URL
SELECT 
    `Links`.url, 
    `Links`.title, 
    GROUP_CONCAT(DISTINCT `Comments`.comment SEPARATOR "; ") as comments, 
    GROUP_CONCAT(DISTINCT `Categories`.name SEPARATOR ", ") as categories,
    `InterestLevels`.interest_level,
    `Links`.date_added,
    GROUP_CONCAT(DISTINCT `Authors`.author SEPARATOR ", ") as authors
FROM 
    Links
LEFT JOIN 
    `Comments` ON `Links`.id = `Comments`.link_id
LEFT JOIN 
    `LinksCategories` on `Links`.id = `LinksCategories`.link_id
LEFT JOIN 
    `Categories` on `LinksCategories`.category_id = `Categories`.id
LEFT JOIN
    `InterestLevels` on `Links`.interest_level_id = `InterestLevels`.id
LEFT JOIN
    `LinksAuthors` on `Links`.id = `LinksAuthors`.link_id
LEFT JOIN
    `Authors` on `LinksAuthors`.author_id = `Authors`.id
GROUP BY
    `Links`.id
ORDER BY 
    `Links`.id ASC;