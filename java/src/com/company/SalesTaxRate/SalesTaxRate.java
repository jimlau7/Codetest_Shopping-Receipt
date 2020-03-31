package com.company.SalesTaxRate;

/*
    Different country with different products, exempt items and sales tax rate
 */

public interface SalesTaxRate {
    double getSalesTaxRate();
    String[] getExempt();
}