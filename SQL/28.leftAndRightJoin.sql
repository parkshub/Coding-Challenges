-- show records that don't have a foreign key relationship
-- so this would show people that don't have cars
select * from person left join car on person.car_id = car.id;

-- and vice versa, you can also get a list of cars with people assigned to it, but also show cars without assigned

-- you can also get ony the people that have no cars

select * from person left join car on person.car_id = car.id where car.* is NULL


-- right join is the same things, but the parameter left and right determines which one to show all the left or the right one
-- left is what the data is being attached to 
-- right is data that is being attached