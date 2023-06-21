
-- this is what we get when we \d person
-- Indexes:
--     "person_pkey" PRIMARY KEY, btree (id)

-- is a constraint that only one person per primary key, and this is how you would drop that constraint
alter table person drop constraint person_pkey

-- this is how to add a primary constraint aka primary key
alter table person add primary key (id)

-- this is how to delete row
delete from person where id = 1