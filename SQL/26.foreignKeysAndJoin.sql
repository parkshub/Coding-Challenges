create table car (
    id bigserial not null primary key,
    make varchar(150) not null,
    model varchar(150) not null,
    price numeric(19, 2) not null
);

create table person (
    id bigserial not null primary key,
    first_name varchar(150) not null,
    last_name varchar(150) not null,
    gender varchar(150) not null,
    email varchar(150),
    dob date not null,
    cob varchar(150) not null,
    car_id bigint references car (id),
    unique (car_id) -- by specifying unique we are saying two people cannot own the same car
    -- you would need to create car table first before this, because person has a reference to car table, without it there would be an error
);

insert into person (first_name, last_name, email, gender, dob, cob) values ('Brenden', 'Rossander', 'brossander0@addthis.com', 'Male', '2023-02-14', 'Poland');
insert into person (first_name, last_name, email, gender, dob, cob) values ('Marti', 'Bente', 'mbente1@delicious.com', 'Female', '2023-03-25', 'Russia');
insert into person (first_name, last_name, email, gender, dob, cob) values ('Cherie', 'Pountain', null, 'Female', '2022-07-16', 'China');

insert into car (make, model, price) values ('Scion', 'tC', 79250.86);
insert into car (make, model, price) values ('Saab', '9-3', 83864.73);
insert into car (make, model, price) values ('Kia', 'Sorento', 96703.58);
-------------------------------------------------------------------------------

-- way to input foreign key to person
update person set car_id = 1 where id = 1;