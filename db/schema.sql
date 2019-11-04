-- Drops the burgers_db if exists.
DROP DATABASE IF EXISTS burger_db;
-- Create the burgers_db.
CREATE DATABASE burger_db;
-- Switch to or use the burgers_db.
USE burger_db;

-- Create a burgers table with these fields:
CREATE TABLE burgers (

-- id: an auto incrementing int that serves as the primary key.
    id INT NOT NULL AUTO_INCREMENT,
-- burger_name: a string.
    burger_name VARCHAR(40) NOT NULL,
-- devoured: a boolean.
    devoured BOOLEAN DEFAULT false,

    -- tmestmp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- datetme DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
    
);



-- Run the schema.sql and seeds.sql files into the mysql server from the command line

-- Now you're going to run these SQL files.

-- Make sure you're in the db folder of your app.

-- Start MySQL command line tool and login: mysql -u root -p.

-- With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

-- Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

-- Close out of the MySQL command line tool: exit.