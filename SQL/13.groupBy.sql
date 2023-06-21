-- this counts the number of people in each country
select country_of_birth, count(*) from person group by country_of_birth order by country_of_birth;


-- HAVING keyword allows you to do things after aggregation
select country_of_birth, count(*) from person group by country_of_birth having count(*) > 50 order by count;
-- order by usually comes at the end
-- and having needs to come right after group by