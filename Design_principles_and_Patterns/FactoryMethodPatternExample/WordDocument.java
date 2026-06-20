package Design_principles_and_Patterns.FactoryMethodPatternExample;

public class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening Word Document...");
    }

}