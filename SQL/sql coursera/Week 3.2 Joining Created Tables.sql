/*use control+shift+/ to comment things out*/
 

SELECT album.title, artist.name
     FROM album JOIN artist
     ON album.artist_id = artist.id

 SELECT album.title, album.artist_id, artist.id, artist.name
     FROM album INNER JOIN artist 
    ON album.artist_id = artist.id;


 SELECT track.title, track.genre_id, genre.id, genre.name
     FROM track CROSS JOIN genre;
/*You would almost never do this, but just for demonstration*/

 SELECT track.title, genre.name 
     FROM track JOIN genre
     ON track.genre_id = genre.id;




 SELECT track.title, artist.name, album.title, genre.name
 	FROM track
     JOIN genre ON track.genre_id = genre.id
     JOIN album ON track.album_id = album.id
     JOIN artist ON album.artist_id = artist.id;


select * from track;
select * from genre;
/*Delete from genre where name='Metal'*/
/*If we were to execute the line above, it would get rid of all entries in genre with metal along with all track's rows with genre_id=2*/

