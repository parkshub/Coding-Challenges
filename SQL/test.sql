-- REVIEW THIS
-- REVIEW THIS
-- REVIEW THIS
-- look up when exactly you need to use group by
-- look up when exactly you need to use group by

-- try entering a query for...
-- dont run, but write query to insert an entry --> andrew, park, andrew@park.com, male, korea, 880112,
insert into person (first_name, email, cob, dob) values ('asdf', 'asdf', 'asdf', date '1944-12-12')

-- get all the distinct values for countries
select distinct(country) from person

-- find people using a google.com email, but also consider people from other countries
select email from person where email ilike('%.com');

-- people with birthdays between 2000 and 2023, but only show the last 20 entries but skip the last 10
select * from person where dob between date '2000-01-01' and date '2023-01-01';

-- find people from mexico brazil and china
select * from person where cob in ('South Korea', 'China');

-- find people that are not male
select * from person where gender <> 'Male';

-- get the price for each model, make pair, then get the avg, min and round the values
select make, model, avg(price) from car group by make, model;

-- get the price of each make and model but display the price that's been discounted by 10%
-- why is that we need to include price in the group by????

select make, model, (price * 0.8) from car group by price, make, model;

-- count the number of people in each country

select country_of_birth, count(*) from personLong group by country_of_birth;

-- YOU KEEP GETTING THIS WRONG
-- WHEN THERE IS A GROUPBY YOU NEED TO INCLUDE HAVING AND NOT A WHERE CLAUSE
-- get the country and number of people in each country, but only for countries with more than 10 people

select country_of_birth, count(*) from personLong group by country_of_birth having count(*) > 10;

-- get email from person and for rows with null  replace with 'email not provided'

select *, coalesce(email, 'email not provided') from personLong;

-- get the current date and time with and without the timezone
select now()::time

-- subtract one year from now
select now() - interval '1 year'

-- calculate the age of someone
select age(now(), date '1994-07-12');

-- whats the proper way to query if you only want the dates when to take away 10 years?
select Extract(year from now() - interval '10 years')


-- get the day of the week from timestamp
select Extract(dow from now())


-- YOU KEEP GETTING THIS ONE INCORRECT
-- WHEN DROPING PRIMARY KEY YOU HAVE TO SPECIFY IT BY ITS NAME


-- get rid of primary key constraint, add the same entry one more time id = 1, then remove that person, then add primary key again, then add the person back


-- add a constraint unique for email


-- how would you handle dividing by zero?


-- add a constraint that says gender cannot equal hello. and what is this type of constraint called?


-- YOU KEEP GETTING THIS INCORRECT. CONFUSING THE SECOND AND FIRST PARAMETERS
-- explain what nullif does

-- update any record to something else

-- try inserting an entry that already exists but with the error removed


-- YOU KEEP FORGETTING TO ADD THE PARAMETER FOR ON CONFLICT AND ALSO THE 'DO' CLAUSE WHEN UPDATING
-- try inserting something with the same id, but override the error and update only the email, first name and last name


-------------------
-- how do you set up a unique constraint when making a table


-- how to access available extensions for sql? 

-- add extension uuid-ossp

-- how do you generate a uuid? what command would show you all the functions currently available?
-- create car and person and link car to person with foreign id car_uuid also make email unique for person

-- show all people that have cars with a join



-- show all people that dont have cars and have cars with join, then export as a csv file to desktop \! cd shows current working dir

-- join person and car, but only show person that has nothing for any of columns for car


-- important side notes
-- if you want to use order by and offset/limit you have to call order by before offset or limit which makes sense

-- you knew everything except the end of upserting
-- looking through all the extensions
-- and downloading the extension