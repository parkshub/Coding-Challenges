-- try entering a query for...

-- dont run, but write query to insert an entry --> andrew, park, andrew@park.com, male, korea, 880112,

insert into person (first_name, last_name, email, gender, country_of_birth, dob) values ('Andrew', 'Park', 'andrew@park.com', 'male', 'Korea', date '1994-02-10');

-- get all the distinct values for countries
select distinct(country_of_birth) from person;

-- find people using a google.com email, but also consider people from other countries
select * from person where email ilike ('%@%.com');

-- people with birthdays between 2000 and 2023, but only show the last 20 entries but skip the last 10
select * from person where dob between date '2000-01-01' and date '2023-01-01' offset 10 limit 10 order by id;

-- find people from countries that start with a 'p' --> specifically use 'p%'
select * from personLong where cob ilike ('p%');

-- find people from mexico brazil and china
select * from personLong where country_of_birth in ('Mexico', 'Brazil', 'China');

-- find people that are not male
select * from personLong where gender <> 'male';

-- get the price for each model, make pair, then get the avg, min and round the values
select *, avg(price) from carLong;

-- get the price of each make and model but display the price that's been discounted by 10%
select *, (0.9 * price) as discounted from car;

-- count the number of people in each country
select country_of_birth, count(*) from personLong group by country_of_birth;

-- get the country and number of people in each country, but only for countries with more than 10 people
select country_of_birth, count(*) from personLong group by country_of_birth having count(*) > 10;

-- get email from person and for rows with null  replace with 'email not provided'

select coalesce(email, 'email not provided') from personLong;

-- get the current date and time with and without the timezone
select now()::date;
select now()::timestamp without time zone;

-- subtract one year from now
select now() - interval '1 year';

-- calculate the age of someone
select age(now(), date '1994-07-12');


-- whats the proper way to query if you only want the dates when to take away 10 years?
select extract('year' from now() - interval '10 years');

-- get the day of the week from timestamp
select extract('dow' from now());

-- get rid of primary key constraint, add the same entry one more time id = 1, then remove that person, then add primary key again, then add the person back
alter table person drop primary key (id);
alter table person add primary key (id);

-- different queries for adding and deleting for row and constraints
delete and insert for rows
drop or create table for tables
add or drop for constraints

delete from personLong where id = 2;

-- add a constraint unique for email
alter table person add constraint unique_email_constraint unique(email);

-- how would you handle dividing by zero?
select coalesce(0/ nullif(0,0), 0);

-- add a constraint that says gender cannot equal hello. and what is this type of constraint called?
alter table person add constraint gender_constraint check (gender <> 'hello'); -- check constraint

-- add a constraints that states emails can be whatever meaning '%'
alter table person add constraint email_constraint check (email ilike ('%'));

-- update any record to something else
update person set email = 'something else' where id = 1;

-- try inserting an entry that already exists but with the error removed
insert into person (first_name) values ('Andrew') on conflict do nothing;

-- try inserting something with the same id, but override the error and update only the email, first name and last name
insert into perosn (first_name) values ('Andrew') on conflict update set email = Excluded.email;

-------------------
-- how do you set up a unique constraint when making a table
unique(id) -- on a separate row

-- difference when adding a primary key and unique constraint
constraint add primary key
constriant add unique(id)

-- how to access available extensions for sql? 
select * from pg_available_extensions

-- add extension uuid-ossp
-- how do you generate a uuid? what command would show you all the functions currently available?
create extension if not exists 'uuid-ossp'

-- create car and person and link car to person with foreign id car_uuid also make email unique for person
create table car (
    car_uid uuid primary key not null,
    price numeric(19, 2) not null
)

create table person (
    person_uid uuid primary key not null,
    first_name varchar(150) not null,
    email varchar(150) not null,
    car_uid uuid references car(car_uid),
    unique(email)
)

-- show all people that have cars with a join
select * from people join car on person.car_uid = car.car_uid;

-- show all people that dont have cars and have cars with join, then export as a csv file to desktop \! cd shows current working dir
\copy (select * from person left join car using (car_uid)) to 'C:/Users/Andrew/Desktop/erase.csv' CSV HEADER;

-- join person and car, but only show person that has nothing for any of columns for car
select * from person left join car using (car_uid) where car.* is null;

-- important side notes
-- if you want to use order by and offset/limit you have to call order by before offset or limit which makes sense