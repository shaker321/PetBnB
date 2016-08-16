# Schema Information

## pets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null
age         | integer   | not null
breed       | string    | not null
temperament | text      | not null
vaccinations| text      | not null
lat         | integer   | not null
lng         | integer   | not null
user_id     | integer   | not null, foreign key (references users), indexed
location_id | integer   | not null, foreign key (references locations), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
rating          | integer   | not null
description     | text      |
user_id         | integer   | not null, foreign key (references users), indexed
pet_id          | integer   | not null, foreign key (references pets), indexed

## locations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
center_lat      | integer   | not null
center_lng      | integer   | not null
