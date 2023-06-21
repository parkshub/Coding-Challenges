-- timestamps record when the original records was created or when the record was updated and etc.

-- dates for birthdays and etc.

select now()::time with time zone

select now()::date without time zone


-- how to subtract one year from now
select now() - interval '1 year';
-- there a lot you can do...like months minutes, hours, weeks, etc.


select now()::date - interval '10 years'
-- why is the above counter intuitive
-- because if you provide ::date you're only getting the date, but once you add the interval operator it gives you the timestamp as well but 00:00:00
-- best way to do it is to...
select (now() - interval '10 years')::date


-- you can also extract specific values from a timestamp using extract()
select extract(year from now());
-- also pretty granular and can do things like...months, day, century, seconds, and dow which day of week