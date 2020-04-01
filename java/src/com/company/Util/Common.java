package com.company.Util;

import com.company.Print.Print;
import com.company.SalesTaxRate.SalesTaxRate;
import com.company.SalesTaxRate.SalesTaxRate_CA;
import com.company.SalesTaxRate.SalesTaxRate_NA;
import com.company.SalesTaxRate.SalesTaxRate_NY;

import java.text.DecimalFormat;

public class Common {
    public static SalesTaxRate getSalesTaxRate(String input){
        String city = input.substring(input.length() - Type.INDEX_CITY , input.length());
        switch (city) {
            case "NY":
                return new SalesTaxRate_NY();
            case "CA":
                return new SalesTaxRate_CA();
            default:
                Print.undefined_location();
                return new SalesTaxRate_NA();
        }
    }

    public static String getProductName(String string){
        return string.substring(string.indexOf(' ') + 1, string.length());
    }

    public static int getQty(String string){
        return Integer.parseInt(string.substring(0 , string.indexOf(' ')));
    }

    public static double roundup(double price){
        // Rounded up to the nearest 0.05
        if(price > 0) {
            final double rounded = 0.05;
            final int index = 10;      // get two digits after decimal in 0.0x
            final double point_one = 0.1;   // get remaining part when increasing to 0.x0

            double intPart = (int) (price * index);
            price = (price * index - (int) (price * index)) / index;
            if (price - rounded > 0) {
                price += point_one - price;
            } else {
                price += rounded - price;
            }
            price = intPart / index + price;
            price = toFixedWithDouble(price);
        }
        return price;
    }

    public static String toFixed(double price){
        return String.format("%.2f", price);
    }

    protected static double toFixedWithDouble(double price){
        DecimalFormat df = new DecimalFormat("#.###");
        return Double.parseDouble(df.format(price));
    }

}
