package Design_principles_and_Patterns.FactoryMethodPatternExample;

public class WordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }

}