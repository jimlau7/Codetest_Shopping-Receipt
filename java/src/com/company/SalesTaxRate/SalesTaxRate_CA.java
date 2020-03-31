package com.company.SalesTaxRate;

public class SalesTaxRate_CA implements SalesTaxRate {
    // product categories
    String[] food = {"potato chips"};

    @Override
    public double getSalesTaxRate(){
        final double saleTaxRate = 0.0975;
        return saleTaxRate;
    }
    public String[] getExempt(){
        return food;
    }
}