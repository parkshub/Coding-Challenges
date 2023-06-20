-- instead of doing...
select * from person where country_of_birth = 'Brazil' or country_of_birth = 'China' or country_of_birth = 'Mexico'
-- we can do...

select * from person where country_of_birth in ('Brazil', 'Mexico', 'China') order by country_of_birth desc
-- we can think of 'in' like includes
-- also things in paranthesis are considered an array

-- can even do things like 
select * from person where country_of_birth in ('Brazil', 'Mexico') order by country_of_birth desc limit 50