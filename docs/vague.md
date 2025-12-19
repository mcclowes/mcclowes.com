---
sidebar_position: 4
---

# Vague

A constraint and probability-based programming language for describing and generating realistic data.

[GitHub](https://github.com/mcclowes/vague)

## The Problem

Traditional fake data tools require manual wiring of constraints, relationships, and edge cases. Generating realistic test data that respects business rules is tedious and error-prone. Validation logic often lives separately from generation logic, leading to inconsistencies.

## The Solution

Vague treats ambiguity as a first-class primitive. Declare the shape of valid data and let the runtime determine how to populate it. One schema serves dual purposes: generating test data and validating production data. Think "OpenAPI meets property-based testing."

## Key Features

- **Probabilistic distribution** - Weighted probability across options
- **Constraint encoding** - Hard constraints ensure data consistency
- **Cross-record references** - Link records to filtered instances of other collections
- **Computed fields** - Aggregation functions like `sum()`, `count()`, `avg()`
- **Conditional logic** - Fields exist only when conditions are met
- **Statistical distributions** - Gaussian, lognormal, exponential, Poisson, Beta

## Example

```
schema Customer {
  name: string,
  status: 0.8: "active" | 0.2: "inactive"
}

schema Invoice {
  customer: any of customers,
  amount: decimal in 100..10000,
  assume amount > 0
}

dataset TestData {
  customers: 50 of Customer,
  invoices: 200 of Invoice
}
```

## Integration

- **OpenAPI** - Import schemas from specs and populate examples
- **CSV I/O** - Generate and validate CSV data
- **Schema inference** - Reverse-engineer Vague schemas from existing JSON or CSV
- **Validation** - Validate generated data against OpenAPI specifications

## Usage

```bash
npm install -g vague-lang
vague generate schema.vague -o output.json
vague generate schema.vague -f csv --seed 123
```
