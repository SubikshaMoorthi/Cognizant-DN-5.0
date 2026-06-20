package Design_principles_and_Patterns.FactoryMethodPatternExample;

public class FactoryMethodTest {
    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();

    }

}

/*Output:
Opening Word Document...
Opening PDF Document...
Opening Excel Document...
 */