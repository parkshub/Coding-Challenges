-- allows use to add a constraint based on bolean condition

alter table person add constraint email_constraint check (email ilike ('%.com'))

alter table person add constraint gender_constraint check (gender <> 'hello');