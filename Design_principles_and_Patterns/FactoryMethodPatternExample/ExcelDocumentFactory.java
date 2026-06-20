package Design_principles_and_Patterns.FactoryMethodPatternExample;

public class ExcelDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }

}