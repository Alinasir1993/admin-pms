import Itemcategories from './item-categories.json'
import Items from './items.json'
import Order from './order.json'
import stores from './stores.json'
import discounts from './discounts.json'
import extra_charges from './extra-charges.json'
import taxes from './taxes.json'
import units from './units.json'
import suppliers from './suppliers.json'
import products from './products.json'
import stocks from './stocks.json'
import requests from './requests.json'
import purchaseOrders from './purchase-orders.json'
import grns from './grns.json'
import qualityCheck from './quality-check.json'
import requestPurchaseOrders from './request-purchase-orders.json'
import requestOrderPlaced from './request-order-placed.json'
import addToStock from './add-to-stock.json'
import goodsReturned from './goods-returned.json'
import posLocations from './pos-locations.json'
import inventoryWithdrawal from './inventory-withdrawal.json'




export default {
    Itemcategories: {
        ...Itemcategories
    },
    Items: {
        ...Items
    },
    Order: {
        ...Order
    },
    stores: {
        ...stores
    },
    discounts: {
        ...discounts
    },
    extra_charges: {
        ...extra_charges
    },
    taxes: {
        ...taxes
    },
    units: {
        ...units
    },
    suppliers: {
        ...suppliers
    },
    products: {
        ...products
    },
    stocks: {
        ...stocks
    },
    requests: {
        ...requests
    },
    purchaseOrders: {
        ...purchaseOrders
    },
    grns: {
        ...grns
    },
    qualityCheck: {
        ...qualityCheck
    },
    requestPurchaseOrders: {
        ...requestPurchaseOrders
    },
    requestOrderPlaced: {
        ...requestOrderPlaced
    },
    addToStock: {
        ...addToStock
    },
    goodsReturned: {
        ...goodsReturned
    },
    posLocations: {
        ...posLocations
    },
    inventoryWithdrawal:{
        ...inventoryWithdrawal
    }
}