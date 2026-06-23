BEGIN
    FOR rec IN (
        SELECT CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || rec.CustomerID
            || ' has a loan due on '
            || TO_CHAR(rec.DueDate, 'DD-MON-YYYY')
        );

    END LOOP;
END;
/

-- OUTPUT:
-- Reminder: Customer 101 has a loan due on 03-JUL-2026
-- Reminder: Customer 103 has a loan due on 13-JUL-2026
-- Reminder: Customer 104 has a loan due on 18-JUL-2026