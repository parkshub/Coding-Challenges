-- try entering a query for...

-- dont run, but write query to insert an entry --> andrew, park, andrew@park.com, male, korea, 880112,
insert into person (first_name, last_name, email, gender, cob, dob) values ('andrew', 'park', 'asdfdas@asdfa', 'adsfaas', date '12312-12312-123')

-- get all the distinct values for countries
select distinct(cob) from person

-- find people using a google.com email, but also consider people from other countries
select email from person where email ilike('%@google.com');
select email from person where email ilike('%@google%');


-- people with birthdays between 2000 and 2023, but only show the last 20 entries but skip the last 10
select * from person where dob between date '2000-01-01' and date '2023-01-01';

-- find people from mexico brazil and china
select * from people where cob in ('Brazil', 'China');

-- find people that are not male

select * from person where gender <> 'Male';

-- get the price for each model, make pair, then get the avg, min and round the values
select make, model, round(avg(price),2) as avg_price from carLong group by make, model;

-- get the price of each make and model but display the price that's been discounted by 10%
select make, model, (price * 0.9) from carLong;

-- count the number of people in each country
select country_of_birth, count(*) from personLong group by country_of_birth;


-- YOU KEEP GETTING THIS WRONG
-- WHEN THERE IS A GROUPBY YOU NEED TO INCLUDE HAVING AND NOT A WHERE CLAUSE
-- get the country and number of people in each country, but only for countries with more than 10 people

select country_of_birth, count(*) as something from personLong group by country_of_birth having count(*) > 50;


-- get email from person and for rows with null  replace with 'email not provided'

select coalesce(email, 'something else') from personLong where email is null;

-- get the current date and time with and without the timezone
select now()::timestamp without time zone;

select now()::date;

-- subtract one year from now

select extract(year from now() - interval '1 year');

-- calculate the age of someone
select age(now(), date '1994-07-12');

-- whats the proper way to query if you only want the dates when to take away 10 years?

select now() - interval '1 year';

-- get the day of the week from timestamp

select extract(dow from now())

-- YOU KEEP GETTING THIS ONE INCORRECT
-- WHEN DROPING PRIMARY KEY YOU HAVE TO SPECIFY IT BY ITS NAME
-- get rid of primary key constraint, add the same entry one more time id = 1, then remove that person, then add primary key again, then add the person back

alter table person drop primary key person_pkey

alter table person add primary key(id)

-- different queries for adding and deleting for row and constraints

insert delete
drop add

-- add a constraint unique for email

alter table person add constraint unique(email);

-- how would you handle dividing by zero?

select coalesce(10/(nullif(0, 0)), 0);

-- add a constraint that says gender cannot equal hello. and what is this type of constraint called?

alter table person add constraint email_constraint check (email <> 'Hello')

-- YOU KEEP GETTING THIS INCORRECT. CONFUSING THE SECOND AND FIRST PARAMETERS
-- explain what nullif does

-- first one is wanted output, second is the check


-- update any record to something else
update person set email = 'something else' where email is null


-- try inserting an entry that already exists but with the error removed

insert into person () values () on conflict(id) do nothing


-- YOU KEEP FORGETTING TO ADD THE PARAMETER FOR ON CONFLICT AND ALSO THE 'DO' CLAUSE WHEN UPDATING
-- try inserting something with the same id, but override the error and update only the email, first name and last name

insert into person() values () on conflict(id) do update set email = Excluded.email

-------------------
-- how do you set up a unique constraint when making a table

create table person (
    person_id uuid primary key not null,
    first_name varchar(150) not null,
    unique(first_name, id)
)

-- how to access available extensions for sql? 
select * from pg_available_extensions

-- add extension uuid-ossp
create extension if not exist 'uuid-ossp'

-- how do you generate a uuid? what command would show you all the functions currently available?

\df

-- create car and person and link car to person with foreign id car_uuid also make email unique for person

create table car (
    car_uid uuid primary key not null,
    name varchar(200) not null
)
create table person (
    person_uid uuid ----,
    car_uid uuid references car(car_uid),
    unique(car_uid, person_uid)
)

-- show all people that have cars with a join

select * from person join car on person.car_uid = car.car_uid
-- or
select * from person join car using (car_uid)

-- show all people that dont have cars and have cars with join, then export as a csv file to desktop \! cd shows current working dir

\copy (select * from person left join car using (car_uid)) to 'dafasf' CSV HEADER;

-- join person and car, but only show person that has nothing for any of columns for car
select * from person left join car using (car_uid) where car.* is null

-- important side notes
-- if you want to use order by and offset/limit you have to call order by before offset or limit which makes sense

-- you knew everything except the end of upserting
-- looking through all the extensions
-- and downloading the extension