package com.company.SalesTaxRate;

import java.util.Arrays;
import java.util.stream.Stream;

public class SalesTaxRate_NY implements SalesTaxRate {
    // product categories
    String[] food = {"potato chips"};
    String[] clothes = {"shirt"};
    @Override
    public double getSalesTaxRate(){
        final double saleTaxRate = 0.08875;
        return saleTaxRate;
    }
    public String[] getExempt() {
        return Stream.concat(Arrays.stream(food), Arrays.stream(clothes))
                .toArray(String[]::new);
    }
}