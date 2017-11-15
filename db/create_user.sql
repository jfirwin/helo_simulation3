INSERT INTO helo_users (auth_id)
VALUES ($1)
RETURNING *
