-- This is just a sample table and should be replaced.
-- The statements here will be executed when the postgres image is loaded
-- and will create all the necessary tables required for development
CREATE TABLE IF NOT EXISTS testTable
(
    itemId INT          NOT NULL,
    name   varchar(250) NOT NULL,
    PRIMARY KEY (itemId)
);