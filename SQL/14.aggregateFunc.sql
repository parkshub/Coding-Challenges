-- https://www.postgresql.org/docs/9.5/functions-aggregate.html

select max(price) from car;

select avg(price) from car;

select round(avg(price), 2) from car;
-- rounding to two decimal places

select make, sum(price) from car group by make