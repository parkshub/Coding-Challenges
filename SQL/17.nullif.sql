-- handling division by zero

select coalesce(10 / nullif(0, 0), 0)
-- what the nullif is saying is... nullif parameter = condition
-- so if the first value equals the second value, then it's null
-- reason this works is because dividing by zero gives you an error but dividing by null gives you null