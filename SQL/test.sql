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

-- get the price of each make and model but display the price that's been discounted by 10%

-- count the number of people in each country

-- get the country and number of people in each country, but only for countries with more than 10 people

-- get email from person and for rows with null  replace with 'email not provided'

-- how would you handle division by zero. This is important because dividing by zero gives you an error. What if you don't want an error and instead want it to be 0 or "something else"

-- get the current date and time with and without the timezone

-- get just the date, just the time

-- subtract one year from now

-- whats the proper way to query if you only want the dates when to take away 10 years?

-- get the day of the week from timestamp

-- get rid of primary key constraint, add the same entry one more time id = 1, then remove that person, then add primary key again, then add the person back

-- get email addresses that have a duplicate

-- different queries for adding and deleting for row and constraints

-- add a constraint unique for email