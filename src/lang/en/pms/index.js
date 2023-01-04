import amenities from './amenities.json'
import room_types from './room-types.json'
import rate_types from './rate-types.json'
import rooms from './rooms.json'
import bed_types from './bed-types.json'
import currencies from './currencies.json'
import payment_methods from './payment-methods.json'
import transportation_modes from './transportation-modes.json'
import identity_types from './identity-types.json'
import guest_categories from './guest-categories.json'
import holidays from './holidays.json'
import seasons from './seasons.json'
import discounts from './discounts.json'
import business_sources from './business-sources.json'
import companies from './companies.json'
import markets from './markets.json'
import extra_charges from './extra-charges.json'
import taxes from './taxes.json'
import template_categories from './template-categories.json'
import emailTemplates from './email-templetes.json'
import locations from './locations.json'
import businesses from './businesses.json'
import managers from './managers.json'
import bookings from './bookings.json'
import smsTemplates from './smsTemplates.json'
import devices from './devices.json'
import sms_gateways from './sms-gateways.json'
import email_gateways from './email-gateways.json'
import magazines from './magazines.json'
import auto_replies from './auto-replies.json'
import payment_gateways from './payment-gateways.json'
import service_request_routings from './service-request-routings.json'
import messaging_request_routing from './messaging-request-routing.json'
import room_features from './room-features.json'
import room_locations from './room-locations.json'
import sms from './sms.json'
import serviceRequest from './service-request.json'
import viewComplaints from './view-complaints.json'
import viewComps from './view-comps.json'
import viewMessages from './view-messages.json'
import viewPurchases from './view-purchases.json'
import viewPayments from './view-payments.json'
import viewFolio from './view-folio.json'
import viewReviews from './view-reviews.json'
import viewServiceRequests from './view-service-requests.json'
import posLocations from './pos-locations.json'
import lostFound from './lost-found.json'
import activities from './activities.json'
import activitiesBookings from './activities-bookings.json'
import activitiesManifest from './activities-manifest.json'
import activitiesCategories from './activities-categories.json'
import roomItems from './room-items.json'
import minibarItems from './minibar-items.json'
import inventoryItems from './inventory-items.json'
import inventoryItemRequests from './inventory-item-requests.json'
import inventoryPurchaseOrders from './inventory-purchase-orders.json'
import inventoryOrderPlaced from './inventory-order-placed.json'
import inventoryItemOrderReceived from './inventory-item-order-received.json'
import inventoryItemQualityCheck from './inventory-item-quality-check.json'
import inventoryAddToStock from './inventory-add-to-stock.json'
import inventoryItemReturned from './inventory-item-returned.json'
import units from './units.json'
import suppliers from './suppliers.json'
import activitiesCalendar from './activities-calendar.json'
import inventory from './inventory.json'
import meal_plans from './meal-plans.json'
import inventoryWithdrawal from './inventory-withdrawal.json'
import roomTypeCategories from './room-type-categories.json'
import storageArea from './storage-area.json'
import preferences from './preferences.json'
import preferenceTypes from './preferenceTypes.json'
import credit from './credit.json'

import Order from '../store/order.json' // store order



export default {
    amenities: {
        ...amenities,
    },
    room_types: {
        ...room_types
    },
    rate_types: {
        ...rate_types
    },
    rooms: {
        ...rooms
    },
    bed_types: {
        ...bed_types
    },
    currencies: {
        ...currencies
    },
    payment_methods: {
        ...payment_methods
    },
    transportation_modes: {
        ...transportation_modes
    },
    identity_types: {
        ...identity_types
    },
    guest_categories: {
        ...guest_categories
    },
    holidays: {
        ...holidays
    },
    seasons: {
        ...seasons
    },
    discounts: {
        ...discounts
    },
    business_sources: {
        ...business_sources
    },
    companies: {
        ...companies
    },
    markets: {
        ...markets
    },
    extra_charges: {
        ...extra_charges
    },
    taxes: {
        ...taxes
    },
    template_categories: {
        ...template_categories
    },
    emailTemplates: {
        ...emailTemplates
    },
    locations: {
        ...locations
    },
    businesses: {
        ...businesses
    },
    managers: {
        ...managers
    },
    bookings: {
        ...bookings
    },
    smsTemplates: {
        ...smsTemplates
    },
    devices: {
        ...devices,
    },
    sms_gateways: {
        ...sms_gateways,
    },
    email_gateways: {
        ...email_gateways,
    },
    magazines: {
        ...magazines,
    },
    auto_replies: {
        ...auto_replies,
    },
    payment_gateways: {
        ...payment_gateways,
    },
    service_request_routings: {
        ...service_request_routings,
    },
    messaging_request_routing: {
        ...messaging_request_routing,
    },
    room_features: {
        ...room_features,
    },
    room_locations: {
        ...room_locations,
    },
    sms: {
        ...sms,
    },
    serviceRequest: {
        ...serviceRequest,
    },
    viewComplaints: {
        ...viewComplaints,
    },
    viewComps: {
        ...viewComps,
    },
    viewMessages: {
        ...viewMessages,
    },
    viewPurchases: {
        ...viewPurchases,
    },
    viewPayments: {
        ...viewPayments,
    },
    viewReviews: {
        ...viewReviews,
    },
    viewServiceRequests: {
        ...viewServiceRequests,
    },
    posLocations: {
        ...posLocations,
    },
    lostFound: {
        ...lostFound,
    },
    activities: {
        ...activities,
    },
    activitiesBookings: {
        ...activitiesBookings,
    },
    activitiesCategories: {
        ...activitiesCategories,
    },
    activitiesManifest: {
        ...activitiesManifest,
    },
    roomItems: {
        ...roomItems,
    },
    minibarItems: {
        ...minibarItems,
    },
    Order: {
        ...Order
    },
    inventoryItems: {
        ...inventoryItems
    },
    inventoryItemRequests: {
        ...inventoryItemRequests
    },
    inventoryPurchaseOrders: {
        ...inventoryPurchaseOrders
    },
    inventoryOrderPlaced: {
        ...inventoryOrderPlaced
    },
    inventoryItemOrderReceived: {
        ...inventoryItemOrderReceived
    },
    inventoryItemQualityCheck: {
        ...inventoryItemQualityCheck
    },
    inventoryAddToStock: {
        ...inventoryAddToStock
    },
    inventoryItemReturned: {
        ...inventoryItemReturned
    },
    units: {
        ...units
    },
    suppliers: {
        ...suppliers
    },
    activitiesCalendar:{
        ...activitiesCalendar
    },
    inventory:{
        ...inventory
    },
    meal_plans:{
        ...meal_plans
    },
    inventoryWithdrawal:{
        ...inventoryWithdrawal
    },
    viewFolio:{
        ...viewFolio
    },
    roomTypeCategories:{
        ...roomTypeCategories
    },
    storageArea:{
        ...storageArea
    },
    preferences:{
        ...preferences
    },
    preferenceTypes:{
        ...preferenceTypes
    },
    credit:{
        ...credit
    }
}
