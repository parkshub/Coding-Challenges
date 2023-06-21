select 5 + 10
-- can also do * / - ^
-- can also use % for remainders


-- 
-- aggregate operators
-- discount price of each car by 10%
select *, round(price * 0.1) round(price - price * 0.1) from car;
-- as you can see when you run above, column name is the aggregate function 'round', you can change that by using alias