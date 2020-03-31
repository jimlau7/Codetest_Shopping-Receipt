package com.company.Print;

import com.company.Util.Common;
import com.company.Util.Type;

public class Print {
    // format the information of receipt
    private static String content_receipt(String product, String price, String quantity) {
        final int len_quantity = quantity.length();
        final int len_price = price.length();
        String result = product;
        for (int i = product.length(); i <= Type.len_receipt; i++) {
            result += " ";
            if (i == Type.len_receipt_price - len_price) {
                result += price;
                i += len_price;
            }
            if (i == Type.len_receipt - len_quantity)
                result += quantity;
        }
        return result;
    }
    private static String amount_receipt(String amount, String type) {
        final int len_amount = amount.length();
        String result = type;
        for (int i = type.length(); i <= Type.len_receipt; i++) {
            result += " ";
            if (i == Type.len_receipt - len_amount)
                result += amount;
        }
        return result;
    }

    // Print main structure
    public static void header(String input){
        System.out.println("Input:"+input + "\n\n" + "Output" + '\n' );
        System.out.println("item              price        qty");
    }
    public static void content(String product, double price, int quantity){
        System.out.println(content_receipt(product, "$"+String.valueOf(price), String.valueOf(quantity)));
    }
    public static void amount(double subtotal, double tax) {
        System.out.println(amount_receipt( "$" + Common.toFixed(subtotal), "subtotal:"));
        System.out.println(amount_receipt( "$" +Common.toFixed(tax), "tax:"));
        System.out.println(amount_receipt( "$" +Common.toFixed(tax + subtotal), "total:"));
    }

    // Print others
    public static void undefined_location() {
        System.out.println("Undefined Location");
    }
    public static void undefined_receipt() {
        System.out.println("Undefined Shopping Receipt");
    }
    public static void error(Exception err) {
        System.out.println(err);
    }
}
