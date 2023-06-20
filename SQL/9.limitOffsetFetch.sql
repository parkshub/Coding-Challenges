select * from person limit 10
-- this is the same as above, but written in sql standard
select * from person fetch first 10 row only

select * from person fetch first row only


-- this'll show everyone after the 5th person
select * from person offset 5

-- this will show first 10 people but starting from the 6th person
select * from person offset 5 limit 10
