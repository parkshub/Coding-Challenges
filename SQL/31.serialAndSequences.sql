-- if you type below you can see how many times bigserial has been invoked in last_value
select * from person_id_seq

-- if you type \d person you can see nextval('person_id_seq'::regclass) next to id. if you query...
select nextval('person_id_seq'::regclass)
-- it'll be invoked and the next id of person will be the next number


-- you can restart the sequence number
alter sequence person_id_seq restart with 9