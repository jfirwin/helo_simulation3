UPDATE helo_users
SET
firstname = COALESCE($2, firstname),
lastname = COALESCE($3, lastname),
gender = COALESCE($4, gender),
hair = COALESCE($5, hair),
eye = COALESCE($6, eye),
hobby = COALESCE($7, hobby),
birthday = COALESCE($8, birthday),
birthmonth = COALESCE($9, birthmonth),
birthyear = COALESCE($10, birthyear)
WHERE id = COALESCE($1)

RETURNING birthday, birthmonth, birthyear, eye, firstname, gender, hair, hobby, lastname
