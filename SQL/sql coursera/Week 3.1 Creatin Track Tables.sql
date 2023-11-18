CREATE TABLE artist (
  id SERIAL, 
  name VARCHAR(128) UNIQUE,
  primary KEY(id)
);

CREATE TABLE album (
  id SERIAL, 
  title VARCHAR(128) UNIQUE,
  artist_id INTEGER REFERENCES artist(id) ON DELETE CASCADE,
  PRIMARY KEY(id)
);

/*The REFERENCES is contraint foreign key i guess?*/

/*ON DELETE OPTION*/
	/*Default/RESTRICT-dont allow changes that break the contraint*/
	/*CASCADE-adust child rows by removing or updating to maintain consistency*/
	/*SET NULL-set the foreign key columns in the child rows to null*/
		/*If you want to use set null you have to specify INTEGER/VARCHAR/etc then NULL*/

/*Im guessing the parent row is the part that comes after REFERENCES*/

CREATE TABLE genre (
  id SERIAL,
  name VARCHAR(128) UNIQUE,
  primary KEY(id)
);

CREATE TABLE track (
  id SERIAL,
  title VARCHAR(128),  
  len INTEGER, 
  rating INTEGER, 
  count INTEGER,
  album_id INTEGER REFERENCES genre(id) ON DELETE CASCADE, 
  genre_id INTEGER REFERENCES album(id) ON DELETE CASCADE, 
  UNIQUE(title, album_id),
  PRIMARY KEY(id)
);

INSERT INTO artist (name) VALUES ('Led Zeppelin');

INSERT INTO artist (name) VALUES ('AC/DC');

SELECT * FROM artist;

INSERT INTO album (title, artist_id) VALUES ('Who Made Who', 2);
INSERT INTO album (title, artist_id) VALUES ('IV', 1);

INSERT INTO genre (name) VALUES ('Rock');
INSERT INTO genre (name) VALUES ('Metal');


INSERT INTO track (title, rating, len, count, album_id, genre_id)
VALUES ('Black Dog', 5, 297, 0, 2, 1) ;
INSERT INTO track (title, rating, len, count, album_id, genre_id)
VALUES ('Stairway', 5, 482, 0, 2, 1) ;
INSERT INTO track (title, rating, len, count, album_id, genre_id)
VALUES ('About to Rock', 5, 313, 0, 1, 2) ;
INSERT INTO track (title, rating, len, count, album_id, genre_id)
VALUES ('Who Made Who', 5, 207, 0, 1, 2) ;







