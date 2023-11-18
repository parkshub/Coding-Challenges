CREATE TABLE make (
    id SERIAL,
    name VARCHAR(128) UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE model (
  id SERIAL,
  name VARCHAR(128),
  make_id INTEGER REFERENCES make(id) ON DELETE CASCADE,
  PRIMARY KEY(id)
);

/*Inserting values into make*/
insert into make (name) values ('Chevrolet');
insert into make (name) values ('Ford');

/*Inserting values into model*/
insert into model (name, make_id) values ('Impala Limited', '1');
insert into model (name, make_id) values ('Impala Police', '1');
insert into model (name, make_id) values ('Impala eAssist', '1');
insert into model (name, make_id) values ('Fiesta SFE', '2');
insert into model (name, make_id) values ('Fiesta SFE FWD', '2');

/*Testing Select*/
SELECT make.name, model.name
    FROM model
    JOIN make ON model.make_id = make.id
    
    
SELECT make.name, model.name
    FROM make
    JOIN model ON model.make_id = make.id
  

SELECT make.name, model.name
	from model
	join make on model.make_id=make.id
