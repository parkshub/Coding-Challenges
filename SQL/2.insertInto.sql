-- extra notes

-- when providing the column names they are not in quotes
-- when providing dates have to mention date before providing dates in quotes

INSERT INTO person (first_name, last_name, gender, dob) VALUES ('Anne', 'Smith', 'FEMALE', date '1988-01-09');

INSERT INTO person (first_name, last_name, gender, dob, email) VALUES ('Jake', 'Jones', 'MALE', date '1990-12-31', 'jake@gmail.com');