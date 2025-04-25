/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      phone
      email
      cnic
      address
      city
      invoices {
        items {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            items {
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
            nextToken
            __typename
          }
          installments {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      quotations {
        items {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          totalAmount
          items {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $id: ID
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        phone
        email
        cnic
        address
        city
        invoices {
          items {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotations {
          items {
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
            totalAmount
            items {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
      contactNumber
      stocks {
        items {
          id
          warehouseID
          warehouse {
            id
            name
            location
            contactNumber
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoiceItems {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            quotationItems {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          quantity
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      invoices {
        items {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            items {
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
            nextToken
            __typename
          }
          installments {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
        contactNumber
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoices {
          items {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
      sku
      brand
      unitPrice
      model
      description
      stocks {
        items {
          id
          warehouseID
          warehouse {
            id
            name
            location
            contactNumber
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoiceItems {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            quotationItems {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          quantity
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      invoiceItems {
        items {
          id
          invoiceID
          invoice {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoiceItems {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            quotationItems {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
        nextToken
        __typename
      }
      quotationItems {
        items {
          id
          quotationID
          quotation {
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
            totalAmount
            items {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoiceItems {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            quotationItems {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
        sku
        brand
        unitPrice
        model
        description
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoiceItems {
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotationItems {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStock = /* GraphQL */ `
  query GetStock($id: ID!) {
    getStock(id: $id) {
      id
      warehouseID
      warehouse {
        id
        name
        location
        contactNumber
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoices {
          items {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoiceItems {
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotationItems {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $id: ID
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStocks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        warehouseID
        warehouse {
          id
          name
          location
          contactNumber
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        quantity
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
      customerID
      customer {
        id
        name
        phone
        email
        cnic
        address
        city
        invoices {
          items {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotations {
          items {
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
            totalAmount
            items {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoices {
          items {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        items {
          id
          invoiceID
          invoice {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoiceItems {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            quotationItems {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
        nextToken
        __typename
      }
      installments {
        items {
          id
          invoiceID
          invoice {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
        nextToken
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
        customerID
        customer {
          id
          name
          phone
          email
          cnic
          address
          city
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        installments {
          items {
            id
            invoiceID
            invoice {
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
            dueDate
            paidDate
            amount
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvoiceItem = /* GraphQL */ `
  query GetInvoiceItem($id: ID!) {
    getInvoiceItem(id: $id) {
      id
      invoiceID
      invoice {
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
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        installments {
          items {
            id
            invoiceID
            invoice {
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
            dueDate
            paidDate
            amount
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoiceItems {
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotationItems {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
export const listInvoiceItems = /* GraphQL */ `
  query ListInvoiceItems(
    $id: ID
    $filter: ModelInvoiceItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInvoiceItems(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        invoiceID
        invoice {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            items {
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
            nextToken
            __typename
          }
          installments {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
export const getInstallment = /* GraphQL */ `
  query GetInstallment($id: ID!) {
    getInstallment(id: $id) {
      id
      invoiceID
      invoice {
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
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        installments {
          items {
            id
            invoiceID
            invoice {
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
            dueDate
            paidDate
            amount
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        invoiceID
        invoice {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            items {
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
            nextToken
            __typename
          }
          installments {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
export const getQuotation = /* GraphQL */ `
  query GetQuotation($id: ID!) {
    getQuotation(id: $id) {
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
        invoices {
          items {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotations {
          items {
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
            totalAmount
            items {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      totalAmount
      items {
        items {
          id
          quotationID
          quotation {
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
            totalAmount
            items {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoiceItems {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            quotationItems {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuotations = /* GraphQL */ `
  query ListQuotations(
    $id: ID
    $filter: ModelQuotationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQuotations(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        totalAmount
        items {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuotationItem = /* GraphQL */ `
  query GetQuotationItem($id: ID!) {
    getQuotationItem(id: $id) {
      id
      quotationID
      quotation {
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
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        totalAmount
        items {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoiceItems {
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotationItems {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
export const listQuotationItems = /* GraphQL */ `
  query ListQuotationItems(
    $id: ID
    $filter: ModelQuotationItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQuotationItems(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        quotationID
        quotation {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          totalAmount
          items {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
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
export const customerByPhone = /* GraphQL */ `
  query CustomerByPhone(
    $phone: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByPhone(
      phone: $phone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        phone
        email
        cnic
        address
        city
        invoices {
          items {
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
            warehouseID
            warehouse {
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
            totalAmount
            paidAmount
            paymentMethod
            dueDate
            status
            items {
              items {
                id
                invoiceID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            installments {
              items {
                id
                invoiceID
                dueDate
                paidDate
                amount
                status
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotations {
          items {
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
            totalAmount
            items {
              items {
                id
                quotationID
                productID
                quantity
                pricePerUnit
                totalPrice
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productBySKU = /* GraphQL */ `
  query ProductBySKU(
    $sku: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productBySKU(
      sku: $sku
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        sku
        brand
        unitPrice
        model
        description
        stocks {
          items {
            id
            warehouseID
            warehouse {
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
            productID
            product {
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
            quantity
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        invoiceItems {
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        quotationItems {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const stocksByWarehouse = /* GraphQL */ `
  query StocksByWarehouse(
    $warehouseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stocksByWarehouse(
      warehouseID: $warehouseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        warehouseID
        warehouse {
          id
          name
          location
          contactNumber
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        quantity
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const stocksByProduct = /* GraphQL */ `
  query StocksByProduct(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stocksByProduct(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        warehouseID
        warehouse {
          id
          name
          location
          contactNumber
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        quantity
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const invoicesByCustomer = /* GraphQL */ `
  query InvoicesByCustomer(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoicesByCustomer(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        installments {
          items {
            id
            invoiceID
            invoice {
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
            dueDate
            paidDate
            amount
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const invoicesByWarehouse = /* GraphQL */ `
  query InvoicesByWarehouse(
    $warehouseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoicesByWarehouse(
      warehouseID: $warehouseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoices {
            items {
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
            nextToken
            __typename
          }
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
          items {
            id
            invoiceID
            invoice {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        installments {
          items {
            id
            invoiceID
            invoice {
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
            dueDate
            paidDate
            amount
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const itemsByInvoice = /* GraphQL */ `
  query ItemsByInvoice(
    $invoiceID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByInvoice(
      invoiceID: $invoiceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        invoiceID
        invoice {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            items {
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
            nextToken
            __typename
          }
          installments {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
export const invoiceItemsByProduct = /* GraphQL */ `
  query InvoiceItemsByProduct(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoiceItemsByProduct(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        invoiceID
        invoice {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            items {
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
            nextToken
            __typename
          }
          installments {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
export const installmentsByInvoice = /* GraphQL */ `
  query InstallmentsByInvoice(
    $invoiceID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInstallmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    installmentsByInvoice(
      invoiceID: $invoiceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        invoiceID
        invoice {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
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
            stocks {
              items {
                id
                warehouseID
                productID
                quantity
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            invoices {
              items {
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
              nextToken
              __typename
            }
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
            items {
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
            nextToken
            __typename
          }
          installments {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
export const quotationsByCustomer = /* GraphQL */ `
  query QuotationsByCustomer(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuotationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quotationsByCustomer(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          invoices {
            items {
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
            nextToken
            __typename
          }
          quotations {
            items {
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
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        totalAmount
        items {
          items {
            id
            quotationID
            quotation {
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
            productID
            product {
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
            quantity
            pricePerUnit
            totalPrice
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const itemsByQuotation = /* GraphQL */ `
  query ItemsByQuotation(
    $quotationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuotationItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByQuotation(
      quotationID: $quotationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quotationID
        quotation {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          totalAmount
          items {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
export const quotationItemsByProduct = /* GraphQL */ `
  query QuotationItemsByProduct(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuotationItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quotationItemsByProduct(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        quotationID
        quotation {
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
            invoices {
              items {
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
              nextToken
              __typename
            }
            quotations {
              items {
                id
                customerID
                totalAmount
                createdAt
                updatedAt
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          totalAmount
          items {
            items {
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
            nextToken
            __typename
          }
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
          stocks {
            items {
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
            nextToken
            __typename
          }
          invoiceItems {
            items {
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
            nextToken
            __typename
          }
          quotationItems {
            items {
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
            nextToken
            __typename
          }
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
      nextToken
      __typename
    }
  }
`;
export const expensesByExpenseType = /* GraphQL */ `
  query ExpensesByExpenseType(
    $expenseType: ExpenseType!
    $sortDirection: ModelSortDirection
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    expensesByExpenseType(
      expenseType: $expenseType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
