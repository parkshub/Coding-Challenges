select * from person join car on person.car_id = car.id;

-- you may want to enter \x before running the query above, its expanded display

-- you can select specific columns from each table

select person.first_name, car.model, car.price from person join car on person.car_id = car.id;