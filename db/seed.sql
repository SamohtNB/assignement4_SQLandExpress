INSERT INTO users (username) VALUES 
('admin'),
('John Doe');

INSERT INTO autors ( user_id) VALUES 
(2),
(1);

INSERT INTO mods(name, version, description, autor_id) VALUES
('test mod 1', '1.0.0', 'this a bad mod', 1),
('test mod 2', '1.0.0', 'this is a good mod', 2);

INSERT INTO servers(name, autor_id, mod_id) VALUES
('test serv 1', 1, 1),
('test serv 2', 2, 2);
