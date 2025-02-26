export default {
  Booking: {
    list: '/bookings',
    new: '/bookings/new/{listingid}',
    accept: '/bookings/accept/{bookingid}',
    decline: '/bookings/decline/{bookingid}',
    delete: '/bookings/{bookingid}',
  },

  Listing: {
    list: '/listings',
    new: '/listings/new',
    detail: '/listings/{listingid}',
    update: '/listings/{listingid}',
    delete: '/listings/{listingid}',
    publish: '/listings/publish/{listingid}',
    unpublish: '/listings/unpublish/{listingid}',
    review: '/listings/{listingid}/review/{bookingid}'
  },

  User: {
    login: '/user/auth/login',
    register: '/user/auth/register',
    logout: '/user/auth/logout'
  },

  Stock: {
    detail: '/stock/detail'
  }
}
