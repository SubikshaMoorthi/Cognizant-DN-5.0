package Data_Structures_and_Algorithms.FinancialForecasting;

public class ForecastTest {

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 3;

        double futureValue = FinancialForecast.calculateFutureValue(currentValue, growthRate,years );

        System.out.println("Current Value : Rs." + currentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : Rs. %.2f%n", futureValue);
    }

}

/* Output:
Current Value : Rs.10000.0
Growth Rate   : 10.0%
Years         : 3
Future Value  : Rs. 13310.00
*/