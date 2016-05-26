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
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Royal Republic", "The Lemmy Stage", 20160610, 1300, 1340, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Alien Ant Farm", "The Lemmy Stage", 20160610, 1405, 1445, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Killswitch Engage", "The Lemmy Stage", 20160610, 1615, 1705, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Korn", "The Lemmy Stage", 20160610, 1910, 2020, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Rammstein", "The Lemmy Stage", 20160610, 2110, 2250, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Avatar", "The Lemmy Stage", 20160611, 1100, 1140, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Beartooth", "The Lemmy Stage", 20160611, 1210, 1250, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Atreyu", "The Lemmy Stage", 20160611, 1320, 1400, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Sixx Am", "The Lemmy Stage", 20160611, 1430, 1520, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Rival Sons", "The Lemmy Stage", 20160611, 1550, 1640, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Megadeth", "The Lemmy Stage", 20160611, 1710, 1820, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Deftones", "The Lemmy Stage", 20160611, 1910, 2020, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Black Sabbath", "The Lemmy Stage", 20160611, 2110, 2250, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Monster Truck", "The Lemmy Stage", 20160612, 1100, 1140, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Amon Amarth", "The Lemmy Stage", 20160612, 1210, 1250, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "The Temperance Movement", "The Lemmy Stage", 20160612, 1320, 1400, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Halestorm", "The Lemmy Stage", 20160612, 1430, 1520, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Shinedown", "The Lemmy Stage", 20160612, 1550, 1640, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Disturbed", "The Lemmy Stage", 20160612, 1710, 1810, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Nightwish", "The Lemmy Stage", 20160612, 1850, 2000, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Iron Maiden", "The Lemmy Stage", 20160612, 2100, 2250, 0, 0, "Sunday")');
		
		
		//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Graveyard", "Zippo Encore Stage", 20160610, 1440, 1510, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Skillet", "Zippo Encore Stage", 20160610, 1530, 1610, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "The Amity Affliction", "Zippo Encore Stage", 20160610, 1635, 1715, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Glassjaw", "Zippo Encore Stage", 20160610, 1735, 1815, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Twin Atlantic", "Zippo Encore Stage", 20160610, 1845, 1930, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "All Time Low", "Zippo Encore Stage", 20160610, 2020, 2130, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Scorpion Child", "Zippo Encore Stage", 20160611, 1155, 1225, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "As Lions", "Zippo Encore Stage", 20160611, 1250, 1320, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Tesseract", "Zippo Encore Stage", 20160611, 1440, 1510, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Bury Tomorrow", "Zippo Encore Stage", 20160611, 1540, 1625, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Architects", "Zippo Encore Stage", 20160611, 1655, 1740, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Skindred", "Zippo Encore Stage", 20160611, 1820, 1910, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Nofx", "Zippo Encore Stage", 20160611, 2020, 2130, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Buck And Evans", "Zippo Encore Stage", 20160612, 1100, 1125, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Whiskey Myers", "Zippo Encore Stage", 20160612, 1145, 1210, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Grand Magus", "Zippo Encore Stage", 20160612, 1235, 1305, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Delain", "Zippo Encore Stage", 20160612, 1330, 1400, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Periphery", "Zippo Encore Stage", 20160612, 1425, 1455, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "One Ok Rock", "Zippo Encore Stage", 20160612, 1520, 1550, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Breaking Benjamin", "Zippo Encore Stage", 20160612, 1615, 1655, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Don Broco", "Zippo Encore Stage", 20160612, 1720, 1800, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Billy Talent", "Zippo Encore Stage", 20160612, 1825, 1910, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Janes Addiction", "Zippo Encore Stage", 20160612, 1940, 2050, 0, 1, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Hill Valley High", "3rd Stage", 20160610, 1300, 1330, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Zoax", "3rd Stage", 20160610, 1355, 1425, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Heck", "3rd Stage", 20160610, 1450, 1520, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "The Wildhearts", "3rd Stage", 20160610, 1855, 1935, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Gutterdammerun", "3rd Stage", 20160610, 2005, 2050, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Shvpes", "3rd Stage", 20160611, 1100, 1130, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Black Peaks", "3rd Stage", 20160611, 1200, 1230, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Turbowolf", "3rd Stage", 20160611, 1300, 1330, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Danko Jones", "3rd Stage", 20160611, 1400, 1430, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Lawnmower Deth", "3rd Stage", 20160611, 1500, 1530, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Escape The Fate", "3rd Stage", 20160611, 1600, 1635, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Anti Flag", "3rd Stage", 20160611, 1705, 1745, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Neck Deep", "3rd Stage", 20160611, 1815, 1855, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Pennywise", "3rd Stage", 20160611, 1925, 2010, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "The Raven Age", "3rd Stage", 20160612, 1100, 1130, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "The King Is Blind", "3rd Stage", 20160612, 1155, 1225, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Devil You Know", "3rd Stage", 20160612, 1250, 1320, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Attila", "3rd Stage", 20160612, 1345, 1415, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Frank Carter & The Rattlesnakes", "3rd Stage", 20160612, 1440, 1510, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Tremonti", "3rd Stage", 20160612, 1535, 1605, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Electric Wizard", "3rd Stage", 20160612, 1635, 1705, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Gojira", "3rd Stage", 20160612, 1735, 1815, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Ghost", "3rd Stage", 20160612, 1845, 1925, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Saxon", "3rd Stage", 20160612, 1955, 2040, 0, 2, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Wierds", "4th Stage", 20160610, 1710, 1735, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Strange Bones", "4th Stage", 20160610, 1800, 1825, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Havok", "4th Stage", 20160610, 1850, 1915, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Counting Days", "4th Stage", 20160610, 1940, 2005, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Fort Hope", "4th Stage", 20160610, 2030, 2055, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Kadavar", "4th Stage", 20160610, 2120, 2150, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Scattering Ashes", "4th Stage", 20160611, 1420, 1445, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Reigning Days", "4th Stage", 20160611, 1510, 1535, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Palisades", "4th Stage", 20160611, 1600, 1625, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Wage War", "4th Stage", 20160611, 1650, 1715, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Milkteeth", "4th Stage", 20160611, 1740, 1805, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Dead!", "4th Stage", 20160611, 1830, 1855, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Slaves (us)", "4th Stage", 20160611, 1920, 1950, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Cane Hill", "4th Stage", 20160611, 2015, 2045, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "The Shrine", "4th Stage", 20160611, 2110, 2140, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Municipal Waste", "4th Stage", 20160611, 2205, 2250, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Muncie Girls", "4th Stage", 20160612, 1650, 1715, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "The Kenneths", "4th Stage", 20160612, 1740, 1805, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Black Foxxes", "4th Stage", 20160612, 1830, 1855, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Ashestoangels", "4th Stage", 20160612, 1920, 1950, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Gold Tiger", "4th Stage", 20160612, 2015, 2045, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Ho99o9", "4th Stage", 20160612, 2110, 2140, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Napalm Death", "4th Stage", 20160612, 2205, 2250, 0, 3, "Sunday")');

	});
	db.transaction(function (tx) {	
		
		//updates or editions here. 
		//new db transactions after each pushed update.

		//tx.executeSql('UPDATE bands SET band_name="Re Animator" WHERE id=37');
		//tx.executeSql('UPDATE bands SET band_name="Pro Pain" WHERE id=22');
		
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Baby Metal", "The Lemmy Stage", 20160610, 1510, 1555, 0, 0, "Friday")');

		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Raveneye", "Zippo Encore Stage", 20160610, 1210, 1235, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Inglorious", "Zippo Encore Stage", 20160611, 1100, 1115, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "The Men That Will Not Be Blamed For Nothing", "Zippo Encore Stage", 20160611, 1120, 1145, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Juliette And The Licks", "Zippo Encore Stage", 20160611, 1630, 1650, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Puppy", "3rd Stage", 20160610, 1335, 1350, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "The Wild Lies", "3rd Stage", 20160612, 1035, 1055, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Raging Speedhorn", "4th Stage", 20160610, 2110, 2200, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Skinny Lister", "4th Stage", 20160610, 2000, 2025, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "From Ashes To New", "4th Stage", 20160610, 1930, 1955, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "The Amorettes", "4th Stage", 20160610, 1720, 1745, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "In Search Of Sun", "4th Stage", 20160610, 1640, 1705, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Wearing Scars", "4th Stage", 20160611, 1450, 1505, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "The King Is Blind", "4th Stage", 20160612, 1610, 1635, 0, 3, "Sunday")');

tx.executeSql('UPDATE bands_2016_v1 SET day=20160610, day_name="Friday" WHERE band_name="As Lions"');
 
tx.executeSql('UPDATE bands_2016_v1 SET stage="3rd Stage", stage_rank=2, start_time=1600, finish_time=1640 WHERE band_name="Kadavar"');

tx.executeSql('UPDATE bands_2016_v1 SET start_time=1900, finish_time=1925 WHERE band_name="Counting Days"');
tx.executeSql('UPDATE bands_2016_v1 SET start_time=1830, finish_time=1855 WHERE band_name="Havok"');
tx.executeSql('UPDATE bands_2016_v1 SET start_time=1600, finish_time=1630, band_name="Weirds" WHERE id=69');
tx.executeSql('UPDATE bands_2016_v1 SET band_name="Good Tiger" WHERE id=89');

tx.executeSql('DELETE FROM bands_2016_v1 WHERE id=61');


});
	db.transaction(function (tx) {	
	tx.executeSql('DELETE FROM bands_2016_v1 WHERE id=60');
	
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Inme", "4th Stage", 20160610, 1450, 1505, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Savage Messiah", "4th Stage", 20160610, 1610, 1635, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Santa Cruz", "Zippo Encore Stage", 20160611, 1610, 1635, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Moses", "3rd Stage", 20160611, 1610, 1635, 0, 2, "Saturday")');

tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "The Dirty Youth", "3rd Stage", 20160612, 1610, 1635, 0, 2, "Sunday")');
		
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Witchsorrow", "4th Stage", 20160612, 1610, 1635, 0, 3, "Sunday")');
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Vukovi", "4th Stage", 20160612, 1610, 1635, 0, 3, "Sunday")');
		tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "The Franklys", "4th Stage", 20160612, 1610, 1635, 0, 3, "Sunday")');
		
		tx.executeSql(' UPDATE bands_2016_v1 SET stage_rank=2, stage="3rd Stage" WHERE band_name="Fort Hope" ');
		tx.executeSql(' UPDATE bands_2016_v1 SET stage_rank=3, stage="4th Stage" WHERE band_name="The King Is Blind" ');
		
		
	tx.executeSql(' UPDATE bands_2016_v1 SET band_name="Gutterdammerung" WHERE band_name="Gutterdammerun" ');
	tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1300, finish_time=1330 WHERE band_name="Royal Republic" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1400, finish_time=1430 WHERE band_name="Alien Ant Farm" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1500, finish_time=1540 WHERE band_name="Baby Metal" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1610, finish_time=1700 WHERE band_name="Killswitch Engage" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1725, finish_time=1825 WHERE band_name="Motorhead Tribute" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1900, finish_time=2010 WHERE band_name="Korn" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2110, finish_time=2250 WHERE band_name="Rammstein" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1300, finish_time=1325 WHERE band_name="Raveneye" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1350, finish_time=1415 WHERE band_name="As Lions" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1445, finish_time=1525 WHERE band_name="Graveyard" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1555, finish_time=1635 WHERE band_name="Skillet" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1705, finish_time=1745 WHERE band_name="The Amity Affliction" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1815, finish_time=1900 WHERE band_name="Glassjaw" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1930, finish_time=2025 WHERE band_name="Twin Atlantic" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2055, finish_time=2205 WHERE band_name="All Time Low" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1300, finish_time=1325 WHERE band_name="Hill Valley High" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1350, finish_time=1415 WHERE band_name="Puppy" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1440, finish_time=1505 WHERE band_name="Zoax" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1530, finish_time=1600 WHERE band_name="Heck" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1625, finish_time=1655 WHERE band_name="Fort Hope" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1720, finish_time=1800 WHERE band_name="Kadavar" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1825, finish_time=1910 WHERE band_name="The Wildhearts" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1940, finish_time=2050 WHERE band_name="Gutterdammerung" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1355, finish_time=1415 WHERE band_name="Weirds" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1440, finish_time=1505 WHERE band_name="In Search Of Sun" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1530, finish_time=1555 WHERE band_name="The Amorettes" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1620, finish_time=1645 WHERE band_name="Strange Bones" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1710, finish_time=1735 WHERE band_name="Havok" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1800, finish_time=1825 WHERE band_name="Counting Days" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1850, finish_time=1915 WHERE band_name="From Ashes To New" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1940, finish_time=2005 WHERE band_name="Skinny Lister" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2030, finish_time=2055 WHERE band_name="Savage Messiah" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2120, finish_time=2150 WHERE band_name="Inme" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2215, finish_time=2255 WHERE band_name="Raging Speedhorn" ');


//sat
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1100, finish_time=1135 WHERE band_name="Avatar" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1205, finish_time=1245 WHERE band_name="Beartooth" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1315, finish_time=1355 WHERE band_name="Atreyu" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1425, finish_time=1510 WHERE band_name="Sixx Am" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1540, finish_time=1630 WHERE band_name="Rival Sons" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1700, finish_time=1800 WHERE band_name="Megadeth" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1840, finish_time=1950 WHERE band_name="Deftones" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2050, finish_time=2230 WHERE band_name="Black Sabbath" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1130, finish_time=1155 WHERE band_name="Santa Cruz" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1220, finish_time=1250 WHERE band_name="Inglorious" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1315, finish_time=1345 WHERE band_name="The Men That Will Not Be Blamed For Nothing" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1410, finish_time=1440 WHERE band_name="Scorpion Child" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1505, finish_time=1535 WHERE band_name="Tesseract" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1600, finish_time=1630 WHERE band_name="Bury Tomorrow" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1655, finish_time=1735 WHERE band_name="Juliette And The Licks" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1805, finish_time=1845 WHERE band_name="Architects" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1915, finish_time=2015 WHERE band_name="Skindred" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2045, finish_time=2155 WHERE band_name="Nofx" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1100, finish_time=1125 WHERE band_name="Moses" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1150, finish_time=1220 WHERE band_name="Shvpes" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1245, finish_time=1315 WHERE band_name="Black Peaks" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1340, finish_time=1410 WHERE band_name="Turbowolf" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1435, finish_time=1505 WHERE band_name="Danko Jones" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1530, finish_time=1600 WHERE band_name="Lawnmower Deth" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1625, finish_time=1655 WHERE band_name="Escape The Fate" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1720, finish_time=1800 WHERE band_name="Anti Flag" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1825, finish_time=1910 WHERE band_name="Neck Deep" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1940, finish_time=2040 WHERE band_name="Pennywise" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1100, finish_time=1125 WHERE band_name="Scattering Ashes" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1150, finish_time=1215 WHERE band_name="Wearing Scars" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1240, finish_time=1305 WHERE band_name="Reigning Days" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1330, finish_time=1355 WHERE band_name="Palisades" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1420, finish_time=1445 WHERE band_name="Wage War" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1510, finish_time=1535 WHERE band_name="Milkteeth" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1600, finish_time=1625 WHERE band_name="Dead!" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1650, finish_time=1720 WHERE band_name="Slaves (us)" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1750, finish_time=1820 WHERE band_name="Cane Hill" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1850, finish_time=1920 WHERE band_name="The Shrine" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1950, finish_time=2035 WHERE band_name="Municipal Waste" ');


//sun
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1100, finish_time=1130 WHERE band_name="Monster Truck" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1200, finish_time=1240 WHERE band_name="Amon Amarth" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1310, finish_time=1355 WHERE band_name="The Temperance Movement" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1425, finish_time=1510 WHERE band_name="Halestorm" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1540, finish_time=1630 WHERE band_name="Shinedown" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1700, finish_time=1800 WHERE band_name="Disturbed" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1840, finish_time=1950 WHERE band_name="Nightwish" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=2050, finish_time=2250 WHERE band_name="Iron Maiden" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1100, finish_time=1125 WHERE band_name="Buck & Evans" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1145, finish_time=1210 WHERE band_name="Whiskey Myers" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1230, finish_time=1255 WHERE band_name="Grand Magus" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1315, finish_time=1345 WHERE band_name="Delain" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1410, finish_time=1440 WHERE band_name="Periphery" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1505, finish_time=1535 WHERE band_name="One Ok Rock" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1600, finish_time=1640 WHERE band_name="Breaking Benjamin" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1705, finish_time=1745 WHERE band_name="Don Broco" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1810, finish_time=1855 WHERE band_name="Billy Talent" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1925, finish_time=2035 WHERE band_name="Janes Addiction" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1100, finish_time=1125 WHERE band_name="The Wild Lies" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1150, finish_time=1220 WHERE band_name="The Raven Age" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1245, finish_time=1315 WHERE band_name="The Dirty Youth" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1340, finish_time=1410 WHERE band_name="Attila" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1435, finish_time=1505 WHERE band_name="Frank Carter & The Rattlesnakes" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1530, finish_time=1600 WHERE band_name="Tremonti" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1625, finish_time=1655 WHERE band_name="Electric Wizard" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1720, finish_time=1800 WHERE band_name="Gojira" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1825, finish_time=1910 WHERE band_name="Ghost" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1940, finish_time=2040 WHERE band_name="Saxon" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1100, finish_time=1125 WHERE band_name="The Franklys" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1150, finish_time=1215 WHERE band_name="Vukovi" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1240, finish_time=1305 WHERE band_name="Witchsorrow" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1330, finish_time=1355 WHERE band_name="The King Is Blind" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1420, finish_time=1445 WHERE band_name="Muncie Girls" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1510, finish_time=1535 WHERE band_name="The Kenneths" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1600, finish_time=1625 WHERE band_name="Black Foxxes" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1650, finish_time=1720 WHERE band_name="Ashestoangels" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1750, finish_time=1820 WHERE band_name="Good Tiger" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1850, finish_time=1920 WHERE band_name="Ho99o9" ');
tx.executeSql(' UPDATE bands_2016_v1 SET start_time=1950, finish_time=2035 WHERE band_name="Napalm Death" ');



});
db.transaction(function (tx) {	

tx.executeSql(' UPDATE bands_2016_v1 SET stage="The Maverick Stage" WHERE stage="3rd Stage" ');
tx.executeSql(' UPDATE bands_2016_v1 SET stage="The Dogtooth Stage" WHERE stage="4th Stage" ');

tx.executeSql(' UPDATE bands_2016_v1 SET day=20160610 WHERE day=20161006 ');
tx.executeSql(' UPDATE bands_2016_v1 SET day=20160611 WHERE day=20160611 ');
tx.executeSql(' UPDATE bands_2016_v1 SET day=20160612 WHERE day=20161206 ');

		set_up_main_page();
	});
}













