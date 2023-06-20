select distinct country_of_birth from person order by country_of_birth



select distinct country_of_birth, email from person order by country_of_birth desc
-- you can also include more than one distincts
-- which would return unique pairs of country of birth and var

-- can also pair with count
select count(distinct(last_name)) from person;
-- instead of simply doing...
select count(first_name) from person
