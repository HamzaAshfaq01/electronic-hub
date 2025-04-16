/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExpense = /* GraphQL */ `
  mutation CreateExpense(
    $input: CreateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    createExpense(input: $input, condition: $condition) {
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
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
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
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
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
export const createInstallment = /* GraphQL */ `
  mutation CreateInstallment(
    $input: CreateInstallmentInput!
    $condition: ModelInstallmentConditionInput
  ) {
    createInstallment(input: $input, condition: $condition) {
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
export const updateInstallment = /* GraphQL */ `
  mutation UpdateInstallment(
    $input: UpdateInstallmentInput!
    $condition: ModelInstallmentConditionInput
  ) {
    updateInstallment(input: $input, condition: $condition) {
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
export const deleteInstallment = /* GraphQL */ `
  mutation DeleteInstallment(
    $input: DeleteInstallmentInput!
    $condition: ModelInstallmentConditionInput
  ) {
    deleteInstallment(input: $input, condition: $condition) {
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
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
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
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
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
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
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
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
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
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
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
export const createRefund = /* GraphQL */ `
  mutation CreateRefund(
    $input: CreateRefundInput!
    $condition: ModelRefundConditionInput
  ) {
    createRefund(input: $input, condition: $condition) {
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
export const updateRefund = /* GraphQL */ `
  mutation UpdateRefund(
    $input: UpdateRefundInput!
    $condition: ModelRefundConditionInput
  ) {
    updateRefund(input: $input, condition: $condition) {
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
export const deleteRefund = /* GraphQL */ `
  mutation DeleteRefund(
    $input: DeleteRefundInput!
    $condition: ModelRefundConditionInput
  ) {
    deleteRefund(input: $input, condition: $condition) {
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
export const createSale = /* GraphQL */ `
  mutation CreateSale(
    $input: CreateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    createSale(input: $input, condition: $condition) {
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
export const updateSale = /* GraphQL */ `
  mutation UpdateSale(
    $input: UpdateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    updateSale(input: $input, condition: $condition) {
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
export const deleteSale = /* GraphQL */ `
  mutation DeleteSale(
    $input: DeleteSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    deleteSale(input: $input, condition: $condition) {
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
export const createSaleProduct = /* GraphQL */ `
  mutation CreateSaleProduct(
    $input: CreateSaleProductInput!
    $condition: ModelSaleProductConditionInput
  ) {
    createSaleProduct(input: $input, condition: $condition) {
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
export const updateSaleProduct = /* GraphQL */ `
  mutation UpdateSaleProduct(
    $input: UpdateSaleProductInput!
    $condition: ModelSaleProductConditionInput
  ) {
    updateSaleProduct(input: $input, condition: $condition) {
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
export const deleteSaleProduct = /* GraphQL */ `
  mutation DeleteSaleProduct(
    $input: DeleteSaleProductInput!
    $condition: ModelSaleProductConditionInput
  ) {
    deleteSaleProduct(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
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
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
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
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
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
