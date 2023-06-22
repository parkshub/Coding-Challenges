-- if there is a conflict in data that already exits and one that you want to insert, you can tell sql to only update the ones that you think need to be updated

insert into person (id, first_name, last_name, email, gender, dob, country_of_birth) values (1, 'something', 'nothing', '123', 'asdf', date '2001-1-1', 'somewhere') on conflict (id) do update set email = Exluded.email, first_name = Excluded.first_name, last_name = Excluded.last_name
-- instead of inserting a new entry it will update the 3 specified columns when there is a conflict(id)