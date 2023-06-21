-- try entering a query for...

-- dont run, but write query to insert an entry --> andrew, park, andrew@park.com, male, korea, 880112,
insert into person (first_name, last_name, email, gender, country_of_birth, dob) values ('Andrew', 'Park', 'andrew@park.com', 'Male', 'Korea', date '88-01-12')

-- get all the distinct values for countries
select distinct(country_of_birth) from person

-- find people using a google.com email, but also consider people from other countries
select * from person where email ilike ('%@google%')

-- people with birthdays between 2000 and 2023, but only show the last 20 entries but skip the last 10
select * from person where dob between date '2000-01-01' and date '2023-01-01' order by dob desc offset 10 limit 10

-- find people from countries that start with a 'p' --> specifically use 'p%'
select * from person where country_of_birth ilike('p%')

-- find people from mexico brazil and china
select * from person where country_of_birth in ('Brazil', 'China')

-- find people that are not male
select * from person where gender <> ilike 'male'


-- get the price for each model, make pair, then get the avg, min and round the values
select make, round(avg(price), 2) as avg_price from car group by make;

-- get the price of each make and model but display the price that's been discounted by 10%
select *, (price * 0.9) as discounted from car;

-- count the number of people in each country
select country_of_birth, count(*) from person group by country_of_birth;


-- get the country and number of people in each country, but only for countries with more than 10 people
select country_of_birth, count(*) from person group by country_of_birth having count(*) > 10

-- get email from person and for rows with null  replace with 'email not provided'
select coalesce(email, 'email not provided') from person;


-- get the current date and time with and without the timezone
select now()::timestamp without time zone;
select now()::timestamp with time zone;


-- get just the date, just the time
select now()::date
select now()::time


-- subtract one year from now
select now() - interval '1 year'

-- whats the proper way to query if you only want the dates when to take away 10 years?
select extract(year from now()-interval '1 year');


-- get the day of the week from timestamp
select extract(dow from now())
-- this will not work
-- select now()::dow

-- get rid of primary key constraint, add the same entry one more time id = 1, then remove that person, then add primary key again, then add the person back
alter table person drop constraint person_pkey;
delete from person where id = 1;
insert into person (first_name, last_name blah~~~) values ('asda', 'asd', 'blah')
alter table person add primary key (id)


-- different queries for adding and deleting for row and constraints
-- you insert and delete row
-- you drop and add constraints

-- add a constraint unique for email
alter table person add constraint unique_email_address unique(email)
-- or
alter table person add constraint unique(email)

-- what does nullif do?
-- nullif(x, y) means isx matches the second value return null, if not return x