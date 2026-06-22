package Data_Structures_and_Algorithms.EcommerceSearch;

public class Searches {
    public static Product linearSearch(Product[] products, String searchName) {
        for (Product product : products) {
            if (product.name.equalsIgnoreCase(searchName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String searchName) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].name.compareToIgnoreCase(searchName);

            if (comparison == 0) {
                return products[mid];
            } 
            else if (comparison < 0) {
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }
        return null;
    }
}