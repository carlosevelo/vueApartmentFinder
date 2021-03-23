CREATE OR REPLACE FUNCTION createlisting(userid varchar, unitid varchar,
  "description" varchar)
RETURNS BOOLEAN AS $$
BEGIN
INSERT INTO listing(userid, unitid, "description")
	VALUES (createlisting.userid, createlisting.unitid, createlisting.description);
	RETURN TRUE;

END
$$ LANGUAGE plpgsql;