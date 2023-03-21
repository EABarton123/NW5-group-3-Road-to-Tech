-- This is just a sample table and should be replaced.
-- The statements here will be executed when the postgres image is loaded
-- and will create all the necessary tables required for development
CREATE TABLE IF NOT EXISTS testTable
(
    itemId INT          NOT NULL,
    name   varchar(250) NOT NULL,
    PRIMARY KEY (itemId)
);

CREATE TABLE public.user_data (
	"id primary key" bigserial not NULL,
	email character varying(120) not NULL,
	username character varying(50) not NULL,
	"password" character varying(200) not NULL
);

