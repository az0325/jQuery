create database hfjq_race_info;

CREATE USER 'root'@'localhost' IDENTIFIED BY '1234';
GRANT SELECT, INSERT, UPDATE, DELETE ON hfjq_race_info.* TO 'root'@'localhost';

USE hfjq_race_info;

CREATE TABLE runners(
    runner_id INT not null AUTO_INCREMENT,
    first_name VARCHAR(100) not null,
    last_name VARCHAR(100) not null,
    gender VARCHAR(1) not null,
    finish_time VARCHAR(10),
    PRIMARY KEY (runner_id)
);


INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('John', 'Smith', 'm', '25:31');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Jacob', 'Walker', 'm', '25:54');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Mary', 'Brown', 'g', '26:01');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Jenny', 'Pierce', 'f', '26:04');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Frank', 'Jones', 'm', '26:08');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Bob', 'Hope', 'm', '26:38');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Jane', 'Smith', 'f', '28:04');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Ryan', 'Rice', 'm', '28:24');

INSERT INTO runners (first_name, last_name, gender, finish_time)
VALUES ('Justin', 'Jones', 'm', '29:14');