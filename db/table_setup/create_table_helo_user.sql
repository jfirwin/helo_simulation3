CREATE TABLE helo_users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(200),
    lastname VARCHAR(200),
    gender VARCHAR(1),
    hair VARCHAR(50),
    eye VARCHAR(50),
    hobby VARCHAR(50),
    birthday INTEGER,
    birthmonth INTEGER,
    birthyear INTEGER,
    img VARCHAR(2000),
    auth_id TEXT
)
