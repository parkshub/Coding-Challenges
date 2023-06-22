-- all this does is it doesn't show the error it doesn't actually insert the entry

insert into person (id, first_name, last_name, email, gender, dob, country_of_birth) values (1, 'something', 'nothing', '123', 'asdf', date '2001-1-1', 'somewhere') on conflict (id) do nothing;