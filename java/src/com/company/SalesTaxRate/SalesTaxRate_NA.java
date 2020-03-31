package com.company.SalesTaxRate;

// Handling unexpected cases
public class SalesTaxRate_NA implements SalesTaxRate {
    String[] na = {"N/A"};
    @Override
    public double getSalesTaxRate(){
        final double saleTaxRate = 0;
        return saleTaxRate;
    }
    public String[] getExempt(){
        return na;
    }
}