CREATE OR REPLACE FUNCTION createcomplex(name varchar, 
	street varchar, city varchar, "state" varchar, 
	zipcode varchar)
RETURNS BOOLEAN AS $$
BEGIN
INSERT INTO complex("name", city, zipcode, street, "state")
	VALUES (createpost.complexname, createpost.city, 
		createpost.zipcode, createpost.street, createpost.state);
	RETURN TRUE;

END;
$$ LANGUAGE plpgsql;