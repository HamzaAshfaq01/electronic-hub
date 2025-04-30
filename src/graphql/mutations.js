/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
          advance
          month
          percentage
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
                advance
                month
                percentage
                createdAt
                updatedAt
                __typename
              }
              productID
              product {
                id
                name
                sku
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
          advance
          month
          percentage
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
                advance
                month
                percentage
                createdAt
                updatedAt
                __typename
              }
              productID
              product {
                id
                name
                sku
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
          advance
          month
          percentage
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
                advance
                month
                percentage
                createdAt
                updatedAt
                __typename
              }
              productID
              product {
                id
                name
                sku
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
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
                advance
                month
                percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
          advance
          month
          percentage
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
                advance
                month
                percentage
                createdAt
                updatedAt
                __typename
              }
              productID
              product {
                id
                name
                sku
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
                advance
                month
                percentage
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
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
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
                advance
                month
                percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
          advance
          month
          percentage
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
                advance
                month
                percentage
                createdAt
                updatedAt
                __typename
              }
              productID
              product {
                id
                name
                sku
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
                advance
                month
                percentage
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
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
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
                advance
                month
                percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
                advance
                month
                percentage
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
                advance
                month
                percentage
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
          advance
          month
          percentage
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
                advance
                month
                percentage
                createdAt
                updatedAt
                __typename
              }
              productID
              product {
                id
                name
                sku
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
                advance
                month
                percentage
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      sku
      revisedIP
      straightDiscount
      specialDiscount
      semiAnnual
      collectionDiscount
      smIncentive
      brand
      model
      unitPrice
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
                advance
                month
                percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      sku
      revisedIP
      straightDiscount
      specialDiscount
      semiAnnual
      collectionDiscount
      smIncentive
      brand
      model
      unitPrice
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
                advance
                month
                percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      sku
      revisedIP
      straightDiscount
      specialDiscount
      semiAnnual
      collectionDiscount
      smIncentive
      brand
      model
      unitPrice
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
                advance
                month
                percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
export const createStock = /* GraphQL */ `
  mutation CreateStock(
    $input: CreateStockInput!
    $condition: ModelStockConditionInput
  ) {
    createStock(input: $input, condition: $condition) {
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
            advance
            month
            percentage
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const updateStock = /* GraphQL */ `
  mutation UpdateStock(
    $input: UpdateStockInput!
    $condition: ModelStockConditionInput
  ) {
    updateStock(input: $input, condition: $condition) {
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
            advance
            month
            percentage
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const deleteStock = /* GraphQL */ `
  mutation DeleteStock(
    $input: DeleteStockInput!
    $condition: ModelStockConditionInput
  ) {
    deleteStock(input: $input, condition: $condition) {
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
            advance
            month
            percentage
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
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
            advance
            month
            percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
            advance
            month
            percentage
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
      advance
      month
      percentage
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            advance
            month
            percentage
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
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
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
            advance
            month
            percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
            advance
            month
            percentage
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
      advance
      month
      percentage
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            advance
            month
            percentage
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
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
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
            advance
            month
            percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
            advance
            month
            percentage
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
      advance
      month
      percentage
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
            advance
            month
            percentage
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
export const createInvoiceItem = /* GraphQL */ `
  mutation CreateInvoiceItem(
    $input: CreateInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    createInvoiceItem(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
              advance
              month
              percentage
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
        advance
        month
        percentage
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const updateInvoiceItem = /* GraphQL */ `
  mutation UpdateInvoiceItem(
    $input: UpdateInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    updateInvoiceItem(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
              advance
              month
              percentage
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
        advance
        month
        percentage
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const deleteInvoiceItem = /* GraphQL */ `
  mutation DeleteInvoiceItem(
    $input: DeleteInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    deleteInvoiceItem(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
              advance
              month
              percentage
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
        advance
        month
        percentage
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const createInstallment = /* GraphQL */ `
  mutation CreateInstallment(
    $input: CreateInstallmentInput!
    $condition: ModelInstallmentConditionInput
  ) {
    createInstallment(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
              advance
              month
              percentage
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
        advance
        month
        percentage
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
export const updateInstallment = /* GraphQL */ `
  mutation UpdateInstallment(
    $input: UpdateInstallmentInput!
    $condition: ModelInstallmentConditionInput
  ) {
    updateInstallment(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
              advance
              month
              percentage
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
        advance
        month
        percentage
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
export const deleteInstallment = /* GraphQL */ `
  mutation DeleteInstallment(
    $input: DeleteInstallmentInput!
    $condition: ModelInstallmentConditionInput
  ) {
    deleteInstallment(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
                revisedIP
                straightDiscount
                specialDiscount
                semiAnnual
                collectionDiscount
                smIncentive
                brand
                model
                unitPrice
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
              advance
              month
              percentage
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
        advance
        month
        percentage
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
export const createQuotation = /* GraphQL */ `
  mutation CreateQuotation(
    $input: CreateQuotationInput!
    $condition: ModelQuotationConditionInput
  ) {
    createQuotation(input: $input, condition: $condition) {
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
export const updateQuotation = /* GraphQL */ `
  mutation UpdateQuotation(
    $input: UpdateQuotationInput!
    $condition: ModelQuotationConditionInput
  ) {
    updateQuotation(input: $input, condition: $condition) {
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
export const deleteQuotation = /* GraphQL */ `
  mutation DeleteQuotation(
    $input: DeleteQuotationInput!
    $condition: ModelQuotationConditionInput
  ) {
    deleteQuotation(input: $input, condition: $condition) {
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
            advance
            month
            percentage
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
            revisedIP
            straightDiscount
            specialDiscount
            semiAnnual
            collectionDiscount
            smIncentive
            brand
            model
            unitPrice
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
export const createQuotationItem = /* GraphQL */ `
  mutation CreateQuotationItem(
    $input: CreateQuotationItemInput!
    $condition: ModelQuotationItemConditionInput
  ) {
    createQuotationItem(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const updateQuotationItem = /* GraphQL */ `
  mutation UpdateQuotationItem(
    $input: UpdateQuotationItemInput!
    $condition: ModelQuotationItemConditionInput
  ) {
    updateQuotationItem(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
export const deleteQuotationItem = /* GraphQL */ `
  mutation DeleteQuotationItem(
    $input: DeleteQuotationItemInput!
    $condition: ModelQuotationItemConditionInput
  ) {
    deleteQuotationItem(input: $input, condition: $condition) {
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
        revisedIP
        straightDiscount
        specialDiscount
        semiAnnual
        collectionDiscount
        smIncentive
        brand
        model
        unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              advance
              month
              percentage
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
              revisedIP
              straightDiscount
              specialDiscount
              semiAnnual
              collectionDiscount
              smIncentive
              brand
              model
              unitPrice
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
      expenseTypeID
      expenseType {
        id
        name
        expenses {
          items {
            id
            title
            description
            amount
            expenseTypeID
            expenseType {
              id
              name
              expenses {
                nextToken
                __typename
              }
              createdAt
              updatedAt
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
      expenseTypeID
      expenseType {
        id
        name
        expenses {
          items {
            id
            title
            description
            amount
            expenseTypeID
            expenseType {
              id
              name
              expenses {
                nextToken
                __typename
              }
              createdAt
              updatedAt
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
      expenseTypeID
      expenseType {
        id
        name
        expenses {
          items {
            id
            title
            description
            amount
            expenseTypeID
            expenseType {
              id
              name
              expenses {
                nextToken
                __typename
              }
              createdAt
              updatedAt
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createExpenseType = /* GraphQL */ `
  mutation CreateExpenseType(
    $input: CreateExpenseTypeInput!
    $condition: ModelExpenseTypeConditionInput
  ) {
    createExpenseType(input: $input, condition: $condition) {
      id
      name
      expenses {
        items {
          id
          title
          description
          amount
          expenseTypeID
          expenseType {
            id
            name
            expenses {
              items {
                id
                title
                description
                amount
                expenseTypeID
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
export const updateExpenseType = /* GraphQL */ `
  mutation UpdateExpenseType(
    $input: UpdateExpenseTypeInput!
    $condition: ModelExpenseTypeConditionInput
  ) {
    updateExpenseType(input: $input, condition: $condition) {
      id
      name
      expenses {
        items {
          id
          title
          description
          amount
          expenseTypeID
          expenseType {
            id
            name
            expenses {
              items {
                id
                title
                description
                amount
                expenseTypeID
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
export const deleteExpenseType = /* GraphQL */ `
  mutation DeleteExpenseType(
    $input: DeleteExpenseTypeInput!
    $condition: ModelExpenseTypeConditionInput
  ) {
    deleteExpenseType(input: $input, condition: $condition) {
      id
      name
      expenses {
        items {
          id
          title
          description
          amount
          expenseTypeID
          expenseType {
            id
            name
            expenses {
              items {
                id
                title
                description
                amount
                expenseTypeID
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
