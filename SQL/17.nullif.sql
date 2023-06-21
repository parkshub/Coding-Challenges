-- handling division by zero

select coalesce(10 / nullif(0, 0), 0)
-- what the nullif is saying is... if the second value matches the second value return a 0 and coalesce it to 0 if the value is null.
-- reason this works is because dividing by zero gives you an error but dividing by null gives you null