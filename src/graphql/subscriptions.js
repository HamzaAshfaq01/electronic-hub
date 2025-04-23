/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $id: String
  ) {
    onCreateCustomer(filter: $filter, id: $id) {
      id
      name
      phone
      email
      cnic
      address
      city
      invoices {
        nextToken
        __typename
      }
      quotations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $id: String
  ) {
    onUpdateCustomer(filter: $filter, id: $id) {
      id
      name
      phone
      email
      cnic
      address
      city
      invoices {
        nextToken
        __typename
      }
      quotations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $id: String
  ) {
    onDeleteCustomer(filter: $filter, id: $id) {
      id
      name
      phone
      email
      cnic
      address
      city
      invoices {
        nextToken
        __typename
      }
      quotations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
    $id: String
  ) {
    onCreateWarehouse(filter: $filter, id: $id) {
      id
      name
      location
      contactNumber
      stocks {
        nextToken
        __typename
      }
      invoices {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
    $id: String
  ) {
    onUpdateWarehouse(filter: $filter, id: $id) {
      id
      name
      location
      contactNumber
      stocks {
        nextToken
        __typename
      }
      invoices {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
    $id: String
  ) {
    onDeleteWarehouse(filter: $filter, id: $id) {
      id
      name
      location
      contactNumber
      stocks {
        nextToken
        __typename
      }
      invoices {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $id: String
  ) {
    onCreateProduct(filter: $filter, id: $id) {
      id
      name
      sku
      brand
      unitPrice
      model
      description
      stocks {
        nextToken
        __typename
      }
      invoiceItems {
        nextToken
        __typename
      }
      quotationItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $filter: ModelSubscriptionProductFilterInput
    $id: String
  ) {
    onUpdateProduct(filter: $filter, id: $id) {
      id
      name
      sku
      brand
      unitPrice
      model
      description
      stocks {
        nextToken
        __typename
      }
      invoiceItems {
        nextToken
        __typename
      }
      quotationItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $filter: ModelSubscriptionProductFilterInput
    $id: String
  ) {
    onDeleteProduct(filter: $filter, id: $id) {
      id
      name
      sku
      brand
      unitPrice
      model
      description
      stocks {
        nextToken
        __typename
      }
      invoiceItems {
        nextToken
        __typename
      }
      quotationItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock(
    $filter: ModelSubscriptionStockFilterInput
    $id: String
  ) {
    onCreateStock(filter: $filter, id: $id) {
      id
      warehouseID
      warehouse {
        id
        name
        location
        contactNumber
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock(
    $filter: ModelSubscriptionStockFilterInput
    $id: String
  ) {
    onUpdateStock(filter: $filter, id: $id) {
      id
      warehouseID
      warehouse {
        id
        name
        location
        contactNumber
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock(
    $filter: ModelSubscriptionStockFilterInput
    $id: String
  ) {
    onDeleteStock(filter: $filter, id: $id) {
      id
      warehouseID
      warehouse {
        id
        name
        location
        contactNumber
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $id: String
  ) {
    onCreateInvoice(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        phone
        email
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      warehouseID
      warehouse {
        id
        name
        location
        contactNumber
        createdAt
        updatedAt
        __typename
      }
      totalAmount
      paidAmount
      paymentMethod
      dueDate
      status
      items {
        nextToken
        __typename
      }
      installments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $id: String
  ) {
    onUpdateInvoice(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        phone
        email
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      warehouseID
      warehouse {
        id
        name
        location
        contactNumber
        createdAt
        updatedAt
        __typename
      }
      totalAmount
      paidAmount
      paymentMethod
      dueDate
      status
      items {
        nextToken
        __typename
      }
      installments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $id: String
  ) {
    onDeleteInvoice(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        phone
        email
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      warehouseID
      warehouse {
        id
        name
        location
        contactNumber
        createdAt
        updatedAt
        __typename
      }
      totalAmount
      paidAmount
      paymentMethod
      dueDate
      status
      items {
        nextToken
        __typename
      }
      installments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInvoiceItem = /* GraphQL */ `
  subscription OnCreateInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
    $id: String
  ) {
    onCreateInvoiceItem(filter: $filter, id: $id) {
      id
      invoiceID
      invoice {
        id
        customerID
        warehouseID
        totalAmount
        paidAmount
        paymentMethod
        dueDate
        status
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      pricePerUnit
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInvoiceItem = /* GraphQL */ `
  subscription OnUpdateInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
    $id: String
  ) {
    onUpdateInvoiceItem(filter: $filter, id: $id) {
      id
      invoiceID
      invoice {
        id
        customerID
        warehouseID
        totalAmount
        paidAmount
        paymentMethod
        dueDate
        status
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      pricePerUnit
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInvoiceItem = /* GraphQL */ `
  subscription OnDeleteInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
    $id: String
  ) {
    onDeleteInvoiceItem(filter: $filter, id: $id) {
      id
      invoiceID
      invoice {
        id
        customerID
        warehouseID
        totalAmount
        paidAmount
        paymentMethod
        dueDate
        status
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      pricePerUnit
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInstallment = /* GraphQL */ `
  subscription OnCreateInstallment(
    $filter: ModelSubscriptionInstallmentFilterInput
    $id: String
  ) {
    onCreateInstallment(filter: $filter, id: $id) {
      id
      invoiceID
      invoice {
        id
        customerID
        warehouseID
        totalAmount
        paidAmount
        paymentMethod
        dueDate
        status
        createdAt
        updatedAt
        __typename
      }
      dueDate
      paidDate
      amount
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInstallment = /* GraphQL */ `
  subscription OnUpdateInstallment(
    $filter: ModelSubscriptionInstallmentFilterInput
    $id: String
  ) {
    onUpdateInstallment(filter: $filter, id: $id) {
      id
      invoiceID
      invoice {
        id
        customerID
        warehouseID
        totalAmount
        paidAmount
        paymentMethod
        dueDate
        status
        createdAt
        updatedAt
        __typename
      }
      dueDate
      paidDate
      amount
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInstallment = /* GraphQL */ `
  subscription OnDeleteInstallment(
    $filter: ModelSubscriptionInstallmentFilterInput
    $id: String
  ) {
    onDeleteInstallment(filter: $filter, id: $id) {
      id
      invoiceID
      invoice {
        id
        customerID
        warehouseID
        totalAmount
        paidAmount
        paymentMethod
        dueDate
        status
        createdAt
        updatedAt
        __typename
      }
      dueDate
      paidDate
      amount
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateQuotation = /* GraphQL */ `
  subscription OnCreateQuotation(
    $filter: ModelSubscriptionQuotationFilterInput
    $id: String
  ) {
    onCreateQuotation(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        phone
        email
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      totalAmount
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateQuotation = /* GraphQL */ `
  subscription OnUpdateQuotation(
    $filter: ModelSubscriptionQuotationFilterInput
    $id: String
  ) {
    onUpdateQuotation(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        phone
        email
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      totalAmount
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteQuotation = /* GraphQL */ `
  subscription OnDeleteQuotation(
    $filter: ModelSubscriptionQuotationFilterInput
    $id: String
  ) {
    onDeleteQuotation(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        phone
        email
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      totalAmount
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateQuotationItem = /* GraphQL */ `
  subscription OnCreateQuotationItem(
    $filter: ModelSubscriptionQuotationItemFilterInput
    $id: String
  ) {
    onCreateQuotationItem(filter: $filter, id: $id) {
      id
      quotationID
      quotation {
        id
        customerID
        totalAmount
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      pricePerUnit
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateQuotationItem = /* GraphQL */ `
  subscription OnUpdateQuotationItem(
    $filter: ModelSubscriptionQuotationItemFilterInput
    $id: String
  ) {
    onUpdateQuotationItem(filter: $filter, id: $id) {
      id
      quotationID
      quotation {
        id
        customerID
        totalAmount
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      pricePerUnit
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteQuotationItem = /* GraphQL */ `
  subscription OnDeleteQuotationItem(
    $filter: ModelSubscriptionQuotationItemFilterInput
    $id: String
  ) {
    onDeleteQuotationItem(filter: $filter, id: $id) {
      id
      quotationID
      quotation {
        id
        customerID
        totalAmount
        createdAt
        updatedAt
        __typename
      }
      productID
      product {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        createdAt
        updatedAt
        __typename
      }
      quantity
      pricePerUnit
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense(
    $filter: ModelSubscriptionExpenseFilterInput
    $id: String
  ) {
    onCreateExpense(filter: $filter, id: $id) {
      id
      title
      description
      amount
      expenseType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense(
    $filter: ModelSubscriptionExpenseFilterInput
    $id: String
  ) {
    onUpdateExpense(filter: $filter, id: $id) {
      id
      title
      description
      amount
      expenseType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense(
    $filter: ModelSubscriptionExpenseFilterInput
    $id: String
  ) {
    onDeleteExpense(filter: $filter, id: $id) {
      id
      title
      description
      amount
      expenseType
      createdAt
      updatedAt
      __typename
    }
  }
`;
