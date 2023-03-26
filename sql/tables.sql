-- This is just a sample table and should be replaced.
-- The statements here will be executed when the postgres image is loaded
-- and will create all the necessary tables required for development
CREATE TABLE IF NOT EXISTS testTable
(
    itemId INT          NOT NULL,
    name   varchar(250) NOT NULL,
    PRIMARY KEY (itemId)
);

CREATE TABLE public."user-data" (
	"id PRIMARY KEY" bigserial NOT NULL,
	email varchar(200) NOT NULL,
	username varchar(200) NOT NULL,
	"password" varchar(200) NOT NULL,
	"role" varchar(100) NOT NULL
);

