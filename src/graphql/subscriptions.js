/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateInstallment = /* GraphQL */ `
  subscription OnCreateInstallment(
    $filter: ModelSubscriptionInstallmentFilterInput
    $id: String
  ) {
    onCreateInstallment(filter: $filter, id: $id) {
      id
      saleID
      installmentNumber
      amount
      dueDate
      paidDate
      status
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
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
      saleID
      installmentNumber
      amount
      dueDate
      paidDate
      status
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
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
      saleID
      installmentNumber
      amount
      dueDate
      paidDate
      status
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
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
      saleID
      invoiceDate
      totalAmount
      paidAmount
      dueAmount
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
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
      saleID
      invoiceDate
      totalAmount
      paidAmount
      dueAmount
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
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
      saleID
      invoiceDate
      totalAmount
      paidAmount
      dueAmount
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $id: String
  ) {
    onCreatePayment(filter: $filter, id: $id) {
      id
      saleID
      amount
      paymentDate
      paymentMethod
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $id: String
  ) {
    onUpdatePayment(filter: $filter, id: $id) {
      id
      saleID
      amount
      paymentDate
      paymentMethod
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment(
    $filter: ModelSubscriptionPaymentFilterInput
    $id: String
  ) {
    onDeletePayment(filter: $filter, id: $id) {
      id
      saleID
      amount
      paymentDate
      paymentMethod
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
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
      description
      price
      stock
      brand
      model
      warehouseID
      warehouse {
        id
        name
        location
        createdAt
        updatedAt
        __typename
      }
      sales {
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
      description
      price
      stock
      brand
      model
      warehouseID
      warehouse {
        id
        name
        location
        createdAt
        updatedAt
        __typename
      }
      sales {
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
      description
      price
      stock
      brand
      model
      warehouseID
      warehouse {
        id
        name
        location
        createdAt
        updatedAt
        __typename
      }
      sales {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $id: String
  ) {
    onCreatePurchase(filter: $filter, id: $id) {
      id
      supplierName
      productName
      quantity
      unitPrice
      totalCost
      purchaseDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $id: String
  ) {
    onUpdatePurchase(filter: $filter, id: $id) {
      id
      supplierName
      productName
      quantity
      unitPrice
      totalCost
      purchaseDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $id: String
  ) {
    onDeletePurchase(filter: $filter, id: $id) {
      id
      supplierName
      productName
      quantity
      unitPrice
      totalCost
      purchaseDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRefund = /* GraphQL */ `
  subscription OnCreateRefund(
    $filter: ModelSubscriptionRefundFilterInput
    $id: String
  ) {
    onCreateRefund(filter: $filter, id: $id) {
      id
      saleID
      refundAmount
      refundDate
      reason
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRefund = /* GraphQL */ `
  subscription OnUpdateRefund(
    $filter: ModelSubscriptionRefundFilterInput
    $id: String
  ) {
    onUpdateRefund(filter: $filter, id: $id) {
      id
      saleID
      refundAmount
      refundDate
      reason
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRefund = /* GraphQL */ `
  subscription OnDeleteRefund(
    $filter: ModelSubscriptionRefundFilterInput
    $id: String
  ) {
    onDeleteRefund(filter: $filter, id: $id) {
      id
      saleID
      refundAmount
      refundDate
      reason
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSale = /* GraphQL */ `
  subscription OnCreateSale(
    $filter: ModelSubscriptionSaleFilterInput
    $id: String
  ) {
    onCreateSale(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        email
        phoneNo
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      saleDate
      totalAmount
      paymentType
      saleProducts {
        nextToken
        __typename
      }
      installments {
        nextToken
        __typename
      }
      refunds {
        nextToken
        __typename
      }
      payment {
        id
        saleID
        amount
        paymentDate
        paymentMethod
        createdAt
        updatedAt
        __typename
      }
      invoice {
        id
        saleID
        invoiceDate
        totalAmount
        paidAmount
        dueAmount
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSale = /* GraphQL */ `
  subscription OnUpdateSale(
    $filter: ModelSubscriptionSaleFilterInput
    $id: String
  ) {
    onUpdateSale(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        email
        phoneNo
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      saleDate
      totalAmount
      paymentType
      saleProducts {
        nextToken
        __typename
      }
      installments {
        nextToken
        __typename
      }
      refunds {
        nextToken
        __typename
      }
      payment {
        id
        saleID
        amount
        paymentDate
        paymentMethod
        createdAt
        updatedAt
        __typename
      }
      invoice {
        id
        saleID
        invoiceDate
        totalAmount
        paidAmount
        dueAmount
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSale = /* GraphQL */ `
  subscription OnDeleteSale(
    $filter: ModelSubscriptionSaleFilterInput
    $id: String
  ) {
    onDeleteSale(filter: $filter, id: $id) {
      id
      customerID
      customer {
        id
        name
        email
        phoneNo
        cnic
        address
        city
        createdAt
        updatedAt
        __typename
      }
      saleDate
      totalAmount
      paymentType
      saleProducts {
        nextToken
        __typename
      }
      installments {
        nextToken
        __typename
      }
      refunds {
        nextToken
        __typename
      }
      payment {
        id
        saleID
        amount
        paymentDate
        paymentMethod
        createdAt
        updatedAt
        __typename
      }
      invoice {
        id
        saleID
        invoiceDate
        totalAmount
        paidAmount
        dueAmount
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSaleProduct = /* GraphQL */ `
  subscription OnCreateSaleProduct(
    $filter: ModelSubscriptionSaleProductFilterInput
    $id: String
  ) {
    onCreateSaleProduct(filter: $filter, id: $id) {
      id
      saleID
      productID
      quantity
      unitPrice
      total
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        description
        price
        stock
        brand
        model
        warehouseID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSaleProduct = /* GraphQL */ `
  subscription OnUpdateSaleProduct(
    $filter: ModelSubscriptionSaleProductFilterInput
    $id: String
  ) {
    onUpdateSaleProduct(filter: $filter, id: $id) {
      id
      saleID
      productID
      quantity
      unitPrice
      total
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        description
        price
        stock
        brand
        model
        warehouseID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSaleProduct = /* GraphQL */ `
  subscription OnDeleteSaleProduct(
    $filter: ModelSubscriptionSaleProductFilterInput
    $id: String
  ) {
    onDeleteSaleProduct(filter: $filter, id: $id) {
      id
      saleID
      productID
      quantity
      unitPrice
      total
      sale {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        description
        price
        stock
        brand
        model
        warehouseID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
      id
      name
      email
      phoneNo
      cnic
      address
      city
      sales {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
      id
      name
      email
      phoneNo
      cnic
      address
      city
      sales {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
      id
      name
      email
      phoneNo
      cnic
      address
      city
      sales {
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
      products {
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
      products {
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
      products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
