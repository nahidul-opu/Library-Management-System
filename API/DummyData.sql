INSERT INTO `category` (`category_id`, `category_name`, `category_count`, `created_at`, `updated_at`) VALUES
(1, 'Elctrical Engineering', 0, '2022-02-05 21:22:39', '2022-02-07 06:22:28'),
(2, 'Novel', 0, '2022-02-07 00:54:11', '2022-02-07 02:59:48'),
(3, 'Computer Science', 0, '2022-02-06 16:28:45', '2022-02-06 14:46:29'),
(4, 'Biography', 0, '2022-02-07 02:32:15', '2022-02-07 07:12:23'),
(5, 'Poetry', 0, '2022-02-07 05:22:26', '2022-02-07 02:45:07');


INSERT INTO `book` (`book_id`, `isbn`, `title`, `author_name`, `pub_year`, `total_count`, `current_count`, `publisher`, `created_at`, `updated_at`, `category_id`) VALUES
(1, '79-3576-3543-867-', 'cubilia', 'Audra Spencer', 1908, 10, 10, 'Cakewalk', '2022-02-05 21:33:06', '2022-02-07 10:11:51', 1),
(2, '543-0-53-546-654', 'orci luctus et ultrices posuere', 'Hiram Salazar', 1950, 10, 10, 'Apple', '2022-02-06 22:32:26', '2022-02-07 11:50:48', 3),
(3, '83-37-73-29-534', 'eu neque pellentesque', 'Yolanda Rojas', 1922, 10, 10, 'Google', '2022-02-05 22:06:27', '2022-02-06 05:51:43', 2),
(4, '61-21-1321-867-68', 'a sollicitudin orci', 'Arthur Zimmerman', 1929, 10, 10, 'Sibelius', '2022-02-05 21:01:04', '2022-02-06 15:49:25', 2),
(5, '534-89-657897-654', 'nec,', 'Graiden Lynch', 2008, 10, 10, 'Google', '2022-02-07 05:52:59', '2022-02-06 20:12:47', 5),
(6, '57987-13-29-101-3', 'faucibus id, libero.', 'Reed Pugh', 1933, 10, 10, 'Chami', '2022-02-07 12:02:37', '2022-02-07 08:31:07', 1),
(7, '29-657897-543-132', 'sed orci', 'Ella Hensley', 1968, 10, 10, 'Lavasoft', '2022-02-07 10:49:44', '2022-02-06 19:19:45', 1),
(8, '11-7897-61-546-17', 'lectus, a sollicitudin', 'Quentin Hawkins', 1983, 10, 10, 'Amazon', '2022-02-06 08:37:46', '2022-02-05 22:34:49', 5),
(9, '97-67-23-5465-11', 'eu', 'Hamish Robles', 1973, 10, 10, 'Chami', '2022-02-07 00:58:32', '2022-02-07 02:49:51', 5),
(10, '6876-7897-21-43-5', 'tellus lorem eu', 'Hilel Haley', 2015, 10, 10, 'Amazon', '2022-02-06 14:53:31', '2022-02-07 03:09:12', 4),
(11, '534-5465-43-47-65', 'Sed', 'Mollie Gibson', 1963, 10, 10, 'Chami', '2022-02-06 08:46:24', '2022-02-05 22:09:31', 4),
(12, '564-867-534-654-4', 'parturient montes, nascetur ridiculus mus.', 'Dacey Peters', 1918, 10, 10, 'Amazon', '2022-02-05 22:19:49', '2022-02-07 00:21:05', 4),
(13, '59-5465-87654-101', 'odio. Nam interdum enim non', 'Karen Hines', 1936, 10, 10, 'Finale', '2022-02-05 22:46:40', '2022-02-06 04:50:09', 4),
(14, '654-654-3576-8765', 'molestie tortor nibh', 'Orli Heath', 1929, 10, 10, 'Lavasoft', '2022-02-05 18:04:12', '2022-02-06 11:34:35', 4),
(15, '31-79-21-37-29', 'arcu. Vivamus', 'Galena Mckee', 1970, 10, 10, 'Finale', '2022-02-05 21:03:18', '2022-02-07 04:03:55', 3),
(16, '654-987-67-31-0', 'libero', 'Carson Watts', 1994, 10, 10, 'Adobe', '2022-02-06 05:40:02', '2022-02-05 14:04:56', 5),
(17, '79-23-19-1321-13', 'id, libero. Donec consectetuer', 'Bert Petty', 1928, 10, 10, 'Borland', '2022-02-06 13:03:36', '2022-02-06 06:21:47', 1),
(18, '465-543-67-564-35', 'malesuada vel, convallis', 'Carol Walton', 1957, 10, 10, 'Chami', '2022-02-06 00:56:36', '2022-02-05 20:04:12', 2),
(19, '61-71-47-73-89', 'neque tellus, imperdiet non,', 'Stephanie Lawrence', 2014, 10, 10, 'Microsoft', '2022-02-06 12:23:20', '2022-02-06 11:49:07', 3),
(20, '37-59-55464-987-6', 'placerat, orci lacus vestibulum', 'Kaye Meadows', 1947, 10, 10, 'Microsoft', '2022-02-06 12:15:51', '2022-02-06 17:33:08', 1),
(21, '0-17-657897-13-35', 'metus. In nec orci.', 'Quinn Mendoza', 1934, 10, 10, 'Amazon', '2022-02-05 21:46:32', '2022-02-06 23:57:24', 2),
(22, '21-101-7897-13-55', 'condimentum', 'Lewis Lewis', 1908, 10, 10, 'Cakewalk', '2022-02-05 21:08:29', '2022-02-07 02:49:39', 3),
(23, '0-5465-73-43-83', 'magna. Phasellus dolor elit, pellentesque', 'Kibo Bernard', 1918, 10, 10, 'Adobe', '2022-02-05 16:38:03', '2022-02-07 05:51:26', 3),
(24, '55464-534-13-61-6', 'Duis', 'Ann Holland', 1948, 10, 10, 'Google', '2022-02-06 02:02:16', '2022-02-06 08:05:07', 1),
(25, '543-654-31-0-41', 'Donec porttitor tellus non', 'Robin Talley', 1968, 10, 10, 'Microsoft', '2022-02-07 04:22:44', '2022-02-06 00:20:47', 2),
(26, '546-987-654-21-41', 'arcu', 'Timothy Campbell', 1938, 10, 10, 'Finale', '2022-02-06 16:13:20', '2022-02-07 01:18:03', 4),
(27, '47-7897-101-0-41', 'fringilla ornare', 'Blaze Mcmahon', 1998, 10, 10, 'Yahoo', '2022-02-07 00:06:55', '2022-02-06 22:00:42', 2),
(28, '73-8654-564-987-8', 'eleifend, nunc', 'Marah Callahan', 1959, 10, 10, 'Yahoo', '2022-02-07 07:12:27', '2022-02-06 03:06:12', 2),
(29, '0-87654-71-41-59', 'et, lacinia vitae,', 'Austin Cooper', 1962, 10, 10, 'Cakewalk', '2022-02-06 23:51:59', '2022-02-06 04:17:47', 4),
(30, '67-1321-6898-5546', 'Vestibulum ut eros', 'Nola Rios', 1940, 10, 10, 'Borland', '2022-02-07 00:02:27', '2022-02-06 04:16:12', 4),
(31, '3543-465-543-47-3', 'et', 'Kevin Klein', 2020, 10, 10, 'Borland', '2022-02-06 16:13:24', '2022-02-06 16:03:04', 3),
(32, '37-61-657897-654-', 'eu eros. Nam', 'Len Hickman', 1921, 10, 10, 'Chami', '2022-02-07 04:21:02', '2022-02-06 02:55:10', 1),
(33, '57987-7897-29-687', 'mollis. Integer tincidunt', 'Matthew Terry', 2015, 10, 10, 'Borland', '2022-02-07 11:03:18', '2022-02-05 22:43:33', 3),
(34, '67-29-43-654-8765', 'ultrices. Duis', 'Kiona Garcia', 1918, 10, 10, 'Cakewalk', '2022-02-06 05:45:26', '2022-02-05 19:30:28', 3),
(35, '47-6876-534-3576-', 'nec', 'Bert Bonner', 2020, 10, 10, 'Yahoo', '2022-02-06 07:59:23', '2022-02-07 00:57:55', 3),
(36, '21-543-47-57987-1', 'Cras vulputate velit', 'Keith Perkins', 1989, 10, 10, 'Microsoft', '2022-02-06 23:23:05', '2022-02-06 00:22:38', 2),
(37, '3543-87654-564-11', 'scelerisque', 'Patience Chase', 1993, 10, 10, 'Google', '2022-02-06 00:45:03', '2022-02-07 03:17:57', 2),
(38, '87654-11-3576-543', 'tempus non, lacinia', 'Merrill Phillips', 1914, 10, 10, 'Cakewalk', '2022-02-05 23:28:55', '2022-02-06 18:20:50', 4),
(39, '1321-654-101-465-', 'tellus lorem', 'Petra Jarvis', 2005, 10, 10, 'Borland', '2022-02-07 05:59:20', '2022-02-05 19:40:37', 1),
(40, '867-17-657897-865', 'adipiscing', 'Nash Mercer', 1953, 10, 10, 'Adobe', '2022-02-06 06:06:41', '2022-02-07 13:04:06', 2),
(41, '3576-5465-41-654-', 'id magna et ipsum', 'Wanda O\'donnell', 1973, 10, 10, 'Chami', '2022-02-06 19:34:37', '2022-02-05 17:35:43', 5),
(42, '71-17-6898-87654-', 'enim. Nunc', 'Lacota Weeks', 1914, 10, 10, 'Chami', '2022-02-06 13:28:25', '2022-02-05 17:49:19', 4),
(43, '29-23-0-57987-689', 'blandit at, nisi. Cum', 'Barclay Clemons', 1960, 10, 10, 'Adobe', '2022-02-07 11:22:34', '2022-02-05 23:13:02', 2),
(44, '7897-53-17-6876-5', 'bibendum ullamcorper. Duis cursus,', 'Inez Watkins', 2020, 10, 10, 'Lavasoft', '2022-02-06 03:22:03', '2022-02-06 00:43:10', 5),
(45, '23-19-89-73-17', 'mus.', 'Robert Orr', 1917, 10, 10, 'Apple', '2022-02-06 15:20:32', '2022-02-07 05:21:43', 4),
(46, '67-987-43-89-654', 'a felis', 'Caleb Hahn', 2009, 10, 10, 'Yahoo', '2022-02-05 14:07:46', '2022-02-06 03:10:01', 5),
(47, '31-987-657897-71-', 'ullamcorper,', 'Colton Hansen', 1949, 10, 10, 'Apple', '2022-02-07 04:53:29', '2022-02-05 18:34:33', 1),
(48, '83-546-11-6876-67', 'Quisque purus sapien, gravida', 'Kato Shelton', 1917, 10, 10, 'Adobe', '2022-02-06 11:42:39', '2022-02-06 07:11:22', 4),
(49, '657897-57987-53-1', 'Nullam', 'Scarlett Craig', 1919, 10, 10, 'Google', '2022-02-06 16:47:19', '2022-02-06 10:43:58', 4),
(50, '657897-5421-53-5', 'Ma', 'Anisul Haque', 2008, 10, 10, 'Shomoy', '2022-02-06 16:47:19', '2022-02-06 10:43:58', 2);


INSERT INTO `user` (`user_id`,`email`,`name`,`borrow_count`,`contact_no`,`fine`,`created_at`,`updated_at`)
VALUES
  (1,"conubia.nostra@outlook.com","Nell Jensen",0,"01694866767",0,"2022-02-07 12:33:30","2022-02-05 15:17:55"),
  (2,"consequat.lectus@yahoo.org","Kelsie Parks",0,"01587093813",0,"2022-02-05 21:54:37","2022-02-06 02:23:13"),
  (3,"arcu.eu.odio@outlook.com","Nora Deleon",0,"01668566784",0,"2022-02-07 05:34:23","2022-02-07 01:50:16"),
  (4,"quam.dignissim@google.ca","Germaine Michael",0,"01938489544",0,"2022-02-06 20:16:57","2022-02-05 19:24:38"),
  (5,"eu@hotmail.org","Shea Huff",0,"01508770856",0,"2022-02-05 20:12:25","2022-02-05 22:54:56"),
  (6,"massa.rutrum@protonmail.edu","Rhonda Manning",0,"01757322948",0,"2022-02-06 18:28:45","2022-02-06 22:40:13"),
  (7,"tellus.suspendisse@icloud.ca","Gloria Marks",0,"01951987715",0,"2022-02-06 19:08:19","2022-02-06 00:53:39"),
  (8,"aliquam.auctor@icloud.net","Yvette Giles",0,"01615666485",0,"2022-02-07 12:42:59","2022-02-07 04:14:29"),
  (9,"pharetra@icloud.org","Roary Cunningham",0,"01536045134",0,"2022-02-07 11:45:21","2022-02-06 13:12:30"),
  (10,"amet@hotmail.couk","Bernard Baxter",0,"01386323746",0,"2022-02-06 07:55:35","2022-02-07 03:44:23"),
  (11,"ut.erat.sed@icloud.ca","Cara Holder",0,"01368513428",0,"2022-02-06 03:57:00","2022-02-05 19:27:13"),
  (12,"euismod.ac@hotmail.org","Skyler Winters",0,"01667741642",0,"2022-02-06 18:05:12","2022-02-07 00:48:33"),
  (13,"ac@aol.couk","Ainsley Kerr",0,"01985941787",0,"2022-02-06 05:49:56","2022-02-07 10:29:21"),
  (14,"sollicitudin.a@yahoo.com","Madonna Hodges",0,"01738769332",0,"2022-02-06 09:27:08","2022-02-05 18:02:08"),
  (15,"sit.amet.ultricies@google.org","Juliet Bray",0,"01528814521",0,"2022-02-06 17:01:13","2022-02-06 12:04:02"),
  (16,"odio.etiam.ligula@yahoo.net","Peter Suarez",0,"01552162942",0,"2022-02-06 00:02:17","2022-02-05 17:41:38"),
  (17,"nec@protonmail.net","Finn Marsh",0,"01696541938",0,"2022-02-06 15:08:12","2022-02-05 22:26:27"),
  (18,"lacus.quisque@yahoo.org","Aquila Morton",0,"01908230404",0,"2022-02-05 22:08:58","2022-02-07 09:30:20"),
  (19,"justo.praesent.luctus@outlook.net","Dawn Rowland",0,"01334562875",0,"2022-02-06 11:47:05","2022-02-05 18:58:34"),
  (20,"at@google.edu","Walter Hanson",0,"01642544460",0,"2022-02-07 06:17:36","2022-02-06 00:04:20"),
  (21,"cras@google.ca","Malik Barr",0,"01394620465",0,"2022-02-05 18:03:21","2022-02-05 14:23:27"),
  (22,"scelerisque@yahoo.net","Russell Delgado",0,"01593511484",0,"2022-02-05 16:26:47","2022-02-05 23:20:06"),
  (23,"at.sem@protonmail.couk","Malachi Hopper",0,"01503682166",0,"2022-02-06 17:19:15","2022-02-07 12:39:46"),
  (24,"ante.maecenas@hotmail.edu","Uriah Becker",0,"01574771520",0,"2022-02-05 23:51:22","2022-02-06 23:16:52"),
  (25,"egestas.a@yahoo.edu","Hadley Valentine",0,"01579928674",0,"2022-02-07 01:28:25","2022-02-07 07:48:06"),
  (26,"integer.sem@icloud.com","Hasad Campos",0,"01563237772",0,"2022-02-05 21:19:34","2022-02-06 01:35:30"),
  (27,"lorem.tristique@protonmail.edu","Lacy Webster",0,"01928972377",0,"2022-02-07 04:41:26","2022-02-07 03:23:02"),
  (28,"odio.vel.est@protonmail.net","TaShya Parrish",0,"01768437215",0,"2022-02-05 18:04:27","2022-02-07 08:24:57"),
  (29,"lacus@hotmail.edu","Sage Sharpe",0,"01516138535",0,"2022-02-07 00:58:49","2022-02-06 02:32:00"),
  (30,"vitae.purus.gravida@google.couk","Myra Petty",0,"01539256278",0,"2022-02-06 17:26:03","2022-02-06 06:17:52"),
  (31,"maecenas.ornare@yahoo.net","Chloe Lewis",0,"01784252323",0,"2022-02-06 04:36:20","2022-02-05 15:33:44"),
  (32,"lectus.ante@icloud.org","Fallon Mcmahon",0,"01615257166",0,"2022-02-06 03:31:11","2022-02-05 19:28:07"),
  (33,"tincidunt.tempus.risus@outlook.couk","Jerry Medina",0,"01757234178",0,"2022-02-06 17:36:48","2022-02-07 08:06:23"),
  (34,"enim.sed@aol.edu","McKenzie Kim",0,"01727255329",0,"2022-02-06 05:03:06","2022-02-06 00:31:15"),
  (35,"nec.eleifend.non@outlook.ca","Len Elliott",0,"01312340315",0,"2022-02-05 21:23:31","2022-02-05 19:53:10"),
  (36,"dapibus.ligula@yahoo.edu","McKenzie Larsen",0,"01912659628",0,"2022-02-06 10:20:41","2022-02-06 05:08:29"),
  (37,"at.pede.cras@hotmail.edu","Serina Mueller",0,"01734223436",0,"2022-02-07 11:52:43","2022-02-05 19:36:32"),
  (38,"orci.lacus.vestibulum@icloud.couk","Gareth Dickerson",0,"01693687575",0,"2022-02-06 07:39:42","2022-02-06 01:12:06"),
  (39,"amet.orci@aol.couk","Perry Mack",0,"01508784626",0,"2022-02-06 06:41:30","2022-02-05 14:42:34"),
  (40,"at.nisi.cum@icloud.net","Kylie Gray",0,"01337486157",0,"2022-02-06 14:36:08","2022-02-05 20:01:27"),
  (41,"velit.sed.malesuada@aol.com","Halee Wall",0,"01501982827",0,"2022-02-06 18:51:26","2022-02-06 11:15:07"),
  (42,"ipsum.ac@hotmail.org","Hamish Whitfield",0,"01576057295",0,"2022-02-07 11:30:55","2022-02-07 00:29:51"),
  (43,"non.lobortis.quis@outlook.edu","Roth Brown",0,"01537487633",0,"2022-02-05 18:57:24","2022-02-07 13:20:38"),
  (44,"tempus@protonmail.com","Rhona Henry",0,"01583559833",0,"2022-02-07 10:12:08","2022-02-05 15:24:12"),
  (45,"velit@icloud.net","Francesca Livingston",0,"01772427235",0,"2022-02-06 15:55:02","2022-02-07 12:42:31"),
  (46,"lorem.ut@google.couk","Dane Atkins",0,"01328011260",0,"2022-02-06 23:01:40","2022-02-07 06:49:26"),
  (47,"nunc.ut@aol.ca","Colette Sexton",0,"01778144418",0,"2022-02-07 11:19:02","2022-02-06 20:57:21"),
  (48,"sociis@icloud.ca","Keith Ruiz",0,"01944331250",0,"2022-02-06 10:22:32","2022-02-06 18:07:47"),
  (49,"sed@aol.couk","Tobias Schneider",0,"01696737879",0,"2022-02-06 18:20:13","2022-02-05 16:17:18"),
  (50,"metus.aenean@yahoo.edu","Ifeoma Gilmore",0,"01663843313",0,"2022-02-07 11:26:31","2022-02-07 04:09:13");

