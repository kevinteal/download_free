// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Main Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE IF EXISTS bands');
		//tx.executeSql('DROP TABLE IF EXISTS bands_2016_v1');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands_2016_v1 (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Royal Republic", "The Lemmy Stage", 20161006, 1300, 1340, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Alien Ant Farm", "The Lemmy Stage", 20161006, 1405, 1445, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Killswitch Engage", "The Lemmy Stage", 20161006, 1615, 1705, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Korn", "The Lemmy Stage", 20161006, 1910, 2020, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Rammstein", "The Lemmy Stage", 20161006, 2110, 2250, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Avatar", "The Lemmy Stage", 20161106, 1100, 1140, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Beartooth", "The Lemmy Stage", 20161106, 1210, 1250, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Atreyu", "The Lemmy Stage", 20161106, 1320, 1400, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Sixx Am", "The Lemmy Stage", 20161106, 1430, 1520, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Rival Sons", "The Lemmy Stage", 20161106, 1550, 1640, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Megadeth", "The Lemmy Stage", 20161106, 1710, 1820, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Deftones", "The Lemmy Stage", 20161106, 1910, 2020, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Black Sabbath", "The Lemmy Stage", 20161106, 2110, 2250, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Monster Truck", "The Lemmy Stage", 20161206, 1100, 1140, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Amon Amarth", "The Lemmy Stage", 20161206, 1210, 1250, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "The Temperance Movement", "The Lemmy Stage", 20161206, 1320, 1400, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Halestorm", "The Lemmy Stage", 20161206, 1430, 1520, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Shinedown", "The Lemmy Stage", 20161206, 1550, 1640, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Disturbed", "The Lemmy Stage", 20161206, 1710, 1810, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Nightwish", "The Lemmy Stage", 20161206, 1850, 2000, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Iron Maiden", "The Lemmy Stage", 20161206, 2100, 2250, 0, 0, "Sunday")');
		
		
		//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Graveyard", "Zippo Encore Stage", 20161006, 1440, 1510, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Skillet", "Zippo Encore Stage", 20161006, 1530, 1610, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "The Amity Affliction", "Zippo Encore Stage", 20161006, 1635, 1715, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Glassjaw", "Zippo Encore Stage", 20161006, 1735, 1815, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Twin Atlantic", "Zippo Encore Stage", 20161006, 1845, 1930, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "All Time Low", "Zippo Encore Stage", 20161006, 2020, 2130, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Scorpion Child", "Zippo Encore Stage", 20161106, 1155, 1225, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "As Lions", "Zippo Encore Stage", 20161106, 1250, 1320, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Tesseract", "Zippo Encore Stage", 20161106, 1440, 1510, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Bury Tomorrow", "Zippo Encore Stage", 20161106, 1540, 1625, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Architects", "Zippo Encore Stage", 20161106, 1655, 1740, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Skindred", "Zippo Encore Stage", 20161106, 1820, 1910, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Nofx", "Zippo Encore Stage", 20161106, 2020, 2130, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Buck And Evans", "Zippo Encore Stage", 20161206, 1100, 1125, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Whiskey Myers", "Zippo Encore Stage", 20161206, 1145, 1210, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Grand Magus", "Zippo Encore Stage", 20161206, 1235, 1305, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Delain", "Zippo Encore Stage", 20161206, 1330, 1400, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Periphery", "Zippo Encore Stage", 20161206, 1425, 1455, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "One Ok Rock", "Zippo Encore Stage", 20161206, 1520, 1550, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Breaking Benjamin", "Zippo Encore Stage", 20161206, 1615, 1655, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Don Broco", "Zippo Encore Stage", 20161206, 1720, 1800, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Billy Talent", "Zippo Encore Stage", 20161206, 1825, 1910, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Janes Addiction", "Zippo Encore Stage", 20161206, 1940, 2050, 0, 1, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Hill Valley High", "3rd Stage", 20161006, 1300, 1330, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Zoax", "3rd Stage", 20161006, 1355, 1425, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Heck", "3rd Stage", 20161006, 1450, 1520, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "The Wildhearts", "3rd Stage", 20161006, 1855, 1935, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Gutterdammerun", "3rd Stage", 20161006, 2005, 2050, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Shvpes", "3rd Stage", 20161106, 1100, 1130, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Black Peaks", "3rd Stage", 20161106, 1200, 1230, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Turbowolf", "3rd Stage", 20161106, 1300, 1330, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Danko Jones", "3rd Stage", 20161106, 1400, 1430, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Lawnmower Deth", "3rd Stage", 20161106, 1500, 1530, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Escape The Fate", "3rd Stage", 20161106, 1600, 1635, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Anti Flag", "3rd Stage", 20161106, 1705, 1745, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Neck Deep", "3rd Stage", 20161106, 1815, 1855, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Pennywise", "3rd Stage", 20161106, 1925, 2010, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "The Raven Age", "3rd Stage", 20161206, 1100, 1130, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "The King Is Blind", "3rd Stage", 20161206, 1155, 1225, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Devil You Know", "3rd Stage", 20161206, 1250, 1320, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Attila", "3rd Stage", 20161206, 1345, 1415, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Frank Carter & The Rattlesnakes", "3rd Stage", 20161206, 1440, 1510, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Tremonti", "3rd Stage", 20161206, 1535, 1605, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Electric Wizard", "3rd Stage", 20161206, 1635, 1705, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Gojira", "3rd Stage", 20161206, 1735, 1815, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Ghost", "3rd Stage", 20161206, 1845, 1925, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Saxon", "3rd Stage", 20161206, 1955, 2040, 0, 2, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Wierds", "4th Stage", 20161006, 1710, 1735, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Strange Bones", "4th Stage", 20161006, 1800, 1825, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Havok", "4th Stage", 20161006, 1850, 1915, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Counting Days", "4th Stage", 20161006, 1940, 2005, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Fort Hope", "4th Stage", 20161006, 2030, 2055, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Kadavar", "4th Stage", 20161006, 2120, 2150, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Scattering Ashes", "4th Stage", 20161106, 1420, 1445, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Reigning Days", "4th Stage", 20161106, 1510, 1535, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Palisades", "4th Stage", 20161106, 1600, 1625, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Wage War", "4th Stage", 20161106, 1650, 1715, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Milkteeth", "4th Stage", 20161106, 1740, 1805, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Dead!", "4th Stage", 20161106, 1830, 1855, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Slaves (us)", "4th Stage", 20161106, 1920, 1950, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Cane Hill", "4th Stage", 20161106, 2015, 2045, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "The Shrine", "4th Stage", 20161106, 2110, 2140, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Municipal Waste", "4th Stage", 20161106, 2205, 2250, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Muncie Girls", "4th Stage", 20161206, 1650, 1715, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "The Kenneths", "4th Stage", 20161206, 1740, 1805, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Black Foxxes", "4th Stage", 20161206, 1830, 1855, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Ashestoangels", "4th Stage", 20161206, 1920, 1950, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Gold Tiger", "4th Stage", 20161206, 2015, 2045, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Ho99o9", "4th Stage", 20161206, 2110, 2140, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Napalm Death", "4th Stage", 20161206, 2205, 2250, 0, 3, "Sunday")');

	});
	db.transaction(function (tx) {	
		
		//updates or editions here. 
		//new db transactions after each pushed update.

		//tx.executeSql('UPDATE bands SET band_name="Re Animator" WHERE id=37');
		//tx.executeSql('UPDATE bands SET band_name="Pro Pain" WHERE id=22');
		
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Baby Metal", "The Lemmy Stage", 20161006, 1510, 1555, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Raveneye", "Zippo Encore Stage", 20161006, 1210, 1235, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Inglorious", "Zippo Encore Stage", 20161106, 1100, 1115, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "The Men That Will Not Be Blamed For Nothing", "Zippo Encore Stage", 20161106, 1120, 1145, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Juliette And The Licks", "Zippo Encore Stage", 20161106, 1630, 1650, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Puppy", "3rd Stage", 20161006, 1335, 1350, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "The Wild Lies", "3rd Stage", 20161206, 1035, 1055, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Raging Speedhorn", "4th Stage", 20161006, 2110, 2200, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Skinny Lister", "4th Stage", 20161006, 2000, 2025, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "From Ashes To New", "4th Stage", 20161006, 1930, 1955, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "The Amorettes", "4th Stage", 20161006, 1720, 1745, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "In Search Of Sun", "4th Stage", 20161006, 1640, 1705, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Wearing Scars", "4th Stage", 20161106, 1450, 1505, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "The King Is Blind", "4th Stage", 20161206, 1610, 1635, 0, 3, "Sunday")');

tx.executeSql('UPDATE bands_2016_v1 SET day=20161006, day_name="Friday" WHERE band_name="As Lions"');
 
tx.executeSql('UPDATE bands_2016_v1 SET stage="3rd Stage", stage_rank=2, start_time=1600, finish_time=1640 WHERE band_name="Kadavar"');

tx.executeSql('UPDATE bands_2016_v1 SET start_time=1900, finish_time=1925 WHERE band_name="Counting Days"');
tx.executeSql('UPDATE bands_2016_v1 SET start_time=1830, finish_time=1855 WHERE band_name="Havok"');
tx.executeSql('UPDATE bands_2016_v1 SET start_time=1600, finish_time=1630, band_name="Weirds" WHERE id=69');
tx.executeSql('UPDATE bands_2016_v1 SET band_name="Good Tiger" WHERE id=89');

tx.executeSql('DELETE FROM bands_2016_v1 WHERE id=61');

		set_up_main_page();
	});
}













