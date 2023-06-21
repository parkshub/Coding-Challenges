-- we can choose a default value when value is missing

select coalesce(null, null, 1, 10) as number
-- here we're saying that if the first value is not present try the second and so forth

select *, coalesce(email, 'email not provided') from person