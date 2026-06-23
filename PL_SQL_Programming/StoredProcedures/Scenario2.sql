CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_Department VARCHAR2,
    p_Bonus NUMBER
)
AS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_Bonus / 100)
    WHERE Department = p_Department;

    COMMIT;

END;
/

BEGIN
    UpdateEmployeeBonus('HR',10);
END;
/


-- OUTPUT:
-- The procedure UpdateEmployeeBonus compiled.