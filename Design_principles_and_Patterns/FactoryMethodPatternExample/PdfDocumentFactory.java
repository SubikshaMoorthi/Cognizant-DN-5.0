package Design_principles_and_Patterns.FactoryMethodPatternExample;

public class PdfDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PdfDocument();
    }

}