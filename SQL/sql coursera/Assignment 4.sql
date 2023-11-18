DROP TABLE student CASCADE;


CREATE TABLE student (
    id SERIAL,
    name VARCHAR(128) UNIQUE,
    PRIMARY KEY(id)
);


insert into student(name) values ('Arooba');
insert into student(name) values ('Karleigh');
insert into student(name) values ('Nicol');
insert into student(name) values ('Shalanna');
insert into student(name) values ('Stefan');
insert into student(name) values ('Maryum');
insert into student(name) values ('Cesar');
insert into student(name) values ('Elyse');
insert into student(name) values ('Frances');
insert into student(name) values ('Nuwaira');
insert into student(name) values ('Jaymi');
insert into student(name) values ('Kimberley');
insert into student(name) values ('Seerat');
insert into student(name) values ('Sophi');
insert into student(name) values ('Veronica');

select * from student

DROP TABLE course CASCADE;


CREATE TABLE course (
    id SERIAL,
    title VARCHAR(128) UNIQUE,
    PRIMARY KEY(id)
);

insert into course (title) values('si106');
insert into course (title) values('si110');
insert into course (title) values('si206');



DROP TABLE roster CASCADE;


CREATE TABLE roster (
    id SERIAL,
    student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
    course_id INTEGER REFERENCES course(id) ON DELETE CASCADE,
    role INTEGER,
    UNIQUE(student_id, course_id),
    PRIMARY KEY (id)
);



insert into roster(student_id, course_id, role) values(1,1,1);
insert into roster(student_id, course_id, role) values(2,1,0);
insert into roster(student_id, course_id, role) values(3,1,0);
insert into roster(student_id, course_id, role) values(4,1,0);
insert into roster(student_id, course_id, role) values(5,1,0);
insert into roster(student_id, course_id, role) values(6,2,1);
insert into roster(student_id, course_id, role) values(7,2,0);
insert into roster(student_id, course_id, role) values(8,2,0);
insert into roster(student_id, course_id, role) values(9,2,0);
insert into roster(student_id, course_id, role) values(10,2,0);
insert into roster(student_id, course_id, role) values(11,3,1);
insert into roster(student_id, course_id, role) values(12,3,0);
insert into roster(student_id, course_id, role) values(13,3,0);
insert into roster(student_id, course_id, role) values(14,3,0);
insert into roster(student_id, course_id, role) values(15,3,0);



SELECT student.name, course.title, roster.role
    FROM student 
    JOIN roster ON student.id = roster.student_id
    JOIN course ON roster.course_id = course.id
    ORDER BY course.title, roster.role DESC, student.name;