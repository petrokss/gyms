create table users (
	id integer primary key autoincrement,
	login varchar,
	password varchar
);

insert into users (login, password) values ('petroks', 'pupoks'), ('sanohin', 'yaLubluOksi'), ('dima', 'yaPidor'), ('vika', 'sasasa');

update users set password = 'labudilabuda' where id = 4;
delete from users where id = 3; 

insert into gyms (name, adress, photo) values ('Smartass', 'Zhilyanskaya 41A', '__dirname + /src/photos/smartass.jpg'), ('Hiitworks', 'Verkhniy Val 2,', '__dirname + /src/photos/hiitworks.jpg'), ('Vityaz', 'Andrew Sheptytsky 20', '__dirname + /src/photos/vityaz.jpg')
