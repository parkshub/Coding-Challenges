-- universally unique identifiers

-- uid ossp

select * from pg_available_extensions

create extension if not exists "uuid-ossp";
-- if not exists only installs if it hasn't been installed yet
-- !! it has to be in double quotes


-- how to generate a uuid
\df -- will give you a list of functions

select uuid_generate_v4();

create table car (
    car_uid uuid not null primary key,
    make varchar(150) not null,
    model varchar(150) not null,
    price numeric(19, 2) not null
);

create table person (
    person_uid uuid primary key not null,
    first_name varchar(150) not null,
    last_name varchar(150) not null,
    email varchar(150),
    gender varchar(150) not null,
    dob date not null,
    cob varchar(150) not null,
    car_uid uuid references car(car_uid),
    unique(email),
    unique(car_uid)
);


insert into person (person_uid, first_name, last_name, email, gender, dob, cob) values (uuid_generate_v4(), 'Brenden', 'Rossander', 'brossander0@addthis.com', 'Male', '2023-02-14', 'Poland');
insert into person (person_uid, first_name, last_name, email, gender, dob, cob) values (uuid_generate_v4(), 'Marti', 'Bente', 'mbente1@delicious.com', 'Female', '2023-03-25', 'Russia');
insert into person (person_uid, first_name, last_name, email, gender, dob, cob) values (uuid_generate_v4(), 'Cherie', 'Pountain', null, 'Female', '2022-07-16', 'China');

insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Scion', 'tC', 79250.86);
insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Saab', '9-3', 83864.73);
insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Kia', 'Sorento', 96703.58);


-- when foreign key and primary key have the same name...instead of using join on person.car_id = car.id you can just do...
select * from person join car using (car_uid);