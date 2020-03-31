package com.company;

import com.company.Print.Print;
import com.company.SalesTaxRate.SalesTaxRate;
import com.company.Util.Common;
import com.company.Util.Type;
import java.util.Arrays;

public class Main {
    public static void main(String[] args)throws Exception {
        // input
        final String input = " Location: CA, 1 book at 17.99, 1 potato chips at 3.99";
        // final String input = " Location: NY, 1 book at 17.99, 3 pencils at 2.99";
        // final String input = " Location: NY, 2 pencils at 2.99, 1 shirt at 29.99";

        // Split by terms (",")
        String[] parts = input.split(Type.TERM_INPUT_SPLIT);
        double subtotal = 0;
        double tax = 0;

        SalesTaxRate salesTaxRate = Common.getSalesTaxRate(parts[0]);
        try{
            if(parts.length > 1){
                // Display header of receipt
                Print.header(input);
                int index = 0;
                for (String part: parts){
                    if(index > 0){
                        // Split by terms (" at ")
                        String[] purchase = part.split(Type.TERM_PURCHASED_SPLIT);
                        String product = Common.getProductName(purchase[0]);
                        int quantity = Common.getQty(purchase[0]);
                        double price = Double.parseDouble(purchase[1]);

                        //  Not exempt || items with tax
                        if(!Arrays.stream(salesTaxRate.getExempt()).anyMatch(product::equals)){
                            tax += Common.roundup(salesTaxRate.getSalesTaxRate() * price * quantity);
                        }
                        subtotal += price* quantity;
                        // Display the purchased record
                        Print.content(product, price, quantity);
                    }
                    index++;
                }
                // Display total amount for the receipt
                Print.amount(subtotal,tax);
            }else{
                // Display error for undefined receipt input
                Print.undefined_receipt();
            }
        }catch (Exception err){
            Print.error(err);
        }
    }

}