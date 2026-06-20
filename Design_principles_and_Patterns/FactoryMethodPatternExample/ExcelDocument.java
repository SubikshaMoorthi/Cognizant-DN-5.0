package Design_principles_and_Patterns.FactoryMethodPatternExample;

public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Excel Document...");
    }

}