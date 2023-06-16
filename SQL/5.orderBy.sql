select * from person order by country_of_birth desc
-- by default it orders in asc order
-- null values are considered higher values

select * from person order by country_of_birth, id
-- if more columns are given for orders it first sorts by country of birth, then if too people have the same country, it sorts by id