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
select * from person where gender <> 'Male'