-- you can add the constraint with specified name, otherwise postgres will name it for you
alter table person add constraint unique_email_address unique(email)

alter table person add constraint unique(email)


-- review of how to drop constraints
alter table person drop constraint unique_email_address -- or whichever name postgres assigned it