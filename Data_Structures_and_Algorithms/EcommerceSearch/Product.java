package Data_Structures_and_Algorithms.EcommerceSearch;

public class Product {
    int id;
    String name;
    String category;

    public Product(int id, String name, String category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
    
    public void display() {
        System.out.println("Product ID: " + id);
        System.out.println("Product Name: " + name);
        System.out.println("Product Category: " + category);
    }

}
