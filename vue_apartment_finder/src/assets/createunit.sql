CREATE OR REPLACE FUNCTION createunit(numrooms varchar, unitnum varchar, 
  unittype varchar, bldgnum varchar, numbaths varchar, 
  price varchar)
RETURNS BOOLEAN AS $$
BEGIN
INSERT INTO unit(numrooms, unitnum, unittype, bldgnum, numbaths, complexid, price)
	VALUES (CAST(createunit.numrooms AS integer), CAST(createunit.unitnum AS integer), createunit.unittype, 
    CAST(createunit.bldgnum AS integer), CAST(createunit.numbaths AS integer), CAST(createunit.price AS integer));
	RETURN TRUE;

END
$$ LANGUAGE plpgsql;