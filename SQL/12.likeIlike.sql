select * from person where email like '&@google.com'

-- but some people might be from different countries and have different .coms
-- in that case we can use another wildcard operator

select * from person where email like '%google.%'

-- this is saying we want 5 characters followed by @google.%
select * from person where email like '_____@google.%'