create table users (
	id integer primary key autoincrement,
	login varchar,
	password varchar
);

insert into users (login, password) values ('petroks', 'pupoks'), ('sanohin', 'yaLubluOksi'), ('dima', 'yaPidor'), ('vika', 'sasasa');

update users set password = 'labudilabuda' where id = 4;
delete from users where id = 3; 