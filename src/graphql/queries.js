/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExpense = /* GraphQL */ `
  query GetExpense($id: ID!) {
    getExpense(id: $id) {
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
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $id: ID
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listExpenses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        amount
        expenseType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInstallment = /* GraphQL */ `
  query GetInstallment($id: ID!) {
    getInstallment(id: $id) {
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
export const listInstallments = /* GraphQL */ `
  query ListInstallments(
    $id: ID
    $filter: ModelInstallmentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInstallments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        saleID
        installmentNumber
        amount
        dueDate
        paidDate
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
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
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $id: ID
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInvoices(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $id: ID
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPayments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        saleID
        amount
        paymentDate
        paymentMethod
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: ID
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
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
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $id: ID
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPurchases(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getRefund = /* GraphQL */ `
  query GetRefund($id: ID!) {
    getRefund(id: $id) {
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
export const listRefunds = /* GraphQL */ `
  query ListRefunds(
    $id: ID
    $filter: ModelRefundFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRefunds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        saleID
        refundAmount
        refundDate
        reason
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSale = /* GraphQL */ `
  query GetSale($id: ID!) {
    getSale(id: $id) {
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
export const listSales = /* GraphQL */ `
  query ListSales(
    $id: ID
    $filter: ModelSaleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSales(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSaleProduct = /* GraphQL */ `
  query GetSaleProduct($id: ID!) {
    getSaleProduct(id: $id) {
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
export const listSaleProducts = /* GraphQL */ `
  query ListSaleProducts(
    $id: ID
    $filter: ModelSaleProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSaleProducts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        saleID
        productID
        quantity
        unitPrice
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getWarehouse = /* GraphQL */ `
  query GetWarehouse($id: ID!) {
    getWarehouse(id: $id) {
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
export const listWarehouses = /* GraphQL */ `
  query ListWarehouses(
    $id: ID
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWarehouses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const installmentsBySaleID = /* GraphQL */ `
  query InstallmentsBySaleID(
    $saleID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInstallmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    installmentsBySaleID(
      saleID: $saleID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saleID
        installmentNumber
        amount
        dueDate
        paidDate
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productsByWarehouseID = /* GraphQL */ `
  query ProductsByWarehouseID(
    $warehouseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByWarehouseID(
      warehouseID: $warehouseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const refundsBySaleID = /* GraphQL */ `
  query RefundsBySaleID(
    $saleID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRefundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    refundsBySaleID(
      saleID: $saleID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saleID
        refundAmount
        refundDate
        reason
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const salesByCustomerID = /* GraphQL */ `
  query SalesByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    salesByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        saleDate
        totalAmount
        paymentType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const saleProductsBySaleID = /* GraphQL */ `
  query SaleProductsBySaleID(
    $saleID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSaleProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    saleProductsBySaleID(
      saleID: $saleID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saleID
        productID
        quantity
        unitPrice
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const saleProductsByProductID = /* GraphQL */ `
  query SaleProductsByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSaleProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    saleProductsByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        saleID
        productID
        quantity
        unitPrice
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
