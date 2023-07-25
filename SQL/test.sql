-- REVIEW THIS
-- REVIEW THIS
-- REVIEW THIS
-- look up when exactly you need to use group by
-- look up when exactly you need to use group by

-- try entering a query for...
-- dont run, but write query to insert an entry --> andrew, park, andrew@park.com, male, korea, 880112,
insert into person (first_name, last_name, email, gender, cob, dob) values ('', date '1990-23-12');

-- get all the distinct values for countries
select distinct(country_of_birth) from person;

-- find people using a google.com email, but also consider people from other countries
select * from person where email ilike ('%.com');

-- people with birthdays between 2000 and 2023, but only show the last 20 entries but skip the last 10
select * from person where dob between date '' and date ''

-- find people from mexico brazil and china
select * from personLong where country_of_birth in ('Brazil', 'China')

-- find people that are not male
select * from personLong where gender <> 'Male';


-- get the price for each model, make pair, then get the avg, min and round the values

select price, make from carLong group by make, price order by price desc;

-- get the price of each make and model but display the price that's been discounted by 10%
select (price * 0.8), model, make from carLong group by model, make, price;

-- count the number of people in each country
select country_of_birth, count(country_of_birth) from personLong group by country_of_birth;

-- get the country and number of people in each country, but only for countries with more than 10 people
select country_of_birth, count(country_of_birth) from personLong group by country_of_birth having count(country_of_birth) > 10;

-- get email from person and for rows with null replace with 'email not provided'
select email, coalesce(email, 'email not found') from personLong where email is null;

-- get the current date and time with and without the timezone
select now()::timestamp without time zone

-- subtract one year from now
select now() - interval '1 year';

-- calculate the age of someone
select age(now(), date '1993-01-29');

-- whats the proper way to query if you only want the dates when to take away 10 years?
select Extract(year from now() - interval '10 years')

-- get the day of the week from timestamp
select Extract(dow from now());

-- get rid of primary key constraint, add the same entry one more time id = 1, then remove that person, then add primary key again, then add the person back
alter table add primary key id

-- add a constraint unique for email
alter table personLong add constraint unique_email_address unique(email);

-- how would you handle dividing by zero?
select coalesce(0 / nullif(0, 0), null);

-- add a constraint that says gender cannot equal hello. and what is this type of constraint called?
alter table person add constraint gender_constraint check (gender <> 'hello')

-- YOU KEEP GETTING THIS INCORRECT. CONFUSING THE SECOND AND FIRST PARAMETERS
-- explain what nullif does

-- update any record to something else!!!!!!!!!!!!!!!!!!!!!!!
-- !!!!!!!!!!!!THIS IS WRONG!!!!!!!!!!!!!!!!!
update personLong set email = 'something else'

-- try inserting an entry that already exists but with the error removed
-- !!!!!!!!!!!!THIS IS WRONG!!!!!!!!!!!!!!!!!
insert into personLong (email) values ('hello') on conflict(email) update set email = Excluded.email;


-- YOU KEEP FORGETTING TO ADD THE PARAMETER FOR ON CONFLICT AND ALSO THE 'DO' CLAUSE WHEN UPDATING
-- try inserting something with the same id, but override the error and update only the email, first name and last name


-------------------
-- how do you set up a unique constraint when making a table
create table newPerson(
    new_uid uuid primary key,
    name varchar(150) not null,
    car_uid uuid,
    unique(new_uid),
    unique(car_uid)
)

-- how to access available extensions for sql? 
-- add extension uuid-ossp

select * from pg_available_extensions;
create extension if not exists 'uuid-ossp '

-- how do you generate a uuid? what command would show you all the functions currently available?
\df
uuid_generate_v4()
-- create car and person and link car to person with foreign id car_uuid also make email unique for person

create table carErase(
    car_uid uuid primary key,
    name varchar(150) not null,
    unique(car_uid)
);

create table personErase(
    person_uid uuid primary key,
    car_uid uuid references carErase(car_uid),
    name varchar(150) not null,
    unique(person_uid),
    unique(car_uid)
);


-- show all people that have cars with a join
select * from personLong join carLong on personLong.car_uid = carLong.car_uid;

-- show all people that dont have cars and have cars with join, then export as a csv file to desktop \! cd shows current working dir
\copy (selection) to 'path' CSV Header

-- join person and car, but only show person that has nothing for any of columns for car












-- important side notes
-- if you want to use order by and offset/limit you have to call order by before offset or limit which makes sense

-- you knew everything except the end of upserting
-- looking through all the extensions
-- and downloading the extension