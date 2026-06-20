package Design_principles_and_Patterns.SingletonPatternExample;

public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        Logger logger3 = Logger.getInstance();

        logger1.log("This is the first log message.");
        logger2.log("This is the second log message.");
        logger3.log("This is the third log message.");

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("Singleton verified: All logger instances are the same.");
        } else {
            System.out.println("Logger instances are different.");
        }
    }
}

/*
Output:
Log: This is the first log message.
Log: This is the second log message.
Log: This is the third log message.
Singleton verified: All logger instances are the same.
 */