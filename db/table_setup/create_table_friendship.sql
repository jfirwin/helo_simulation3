CREATE TABLE friendships (
    id SERIAL PRIMARY KEY,
    initiator INTEGER REFERENCES users(id),
    befriended INTEGER REFERENCES users(id)
);
