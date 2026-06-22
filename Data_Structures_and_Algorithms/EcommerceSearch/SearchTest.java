package Data_Structures_and_Algorithms.EcommerceSearch;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Camera", "Electronics"),
                new Product(102, "Laptop", "Electronics"),
                new Product(103, "Mouse", "Accessories"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "Tablet", "Electronics")
        };

        String searchItem = "Mouse";

        System.out.println("LINEAR SEARCH");

        Product result1 = Searches.linearSearch(products, searchItem);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Product not found.");

        System.out.println();

        System.out.println("BINARY SEARCH");

        Product result2 = Searches.binarySearch(products, searchItem);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Product not found.");

    }

}

/*Output:

LINEAR SEARCH
Product ID: 103
Product Name: Mouse
Product Category: Accessories

BINARY SEARCH
Product ID: 103
Product Name: Mouse
Product Category: Accessories

 */