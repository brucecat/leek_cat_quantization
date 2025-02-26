import request from './request';
import { urls } from '.'

export function netLogin(data) {
  return request.post(urls.User.login, data, {
    noAuth: true
  })
}

export function netRegister(data) {
  return request.post(urls.User.register, data, {
    noAuth: true
  })
}

export function netLogout() {
  return request.post(urls.User.logout, {}, {})
}

export function netGetListings() {
  return request.get(urls.Listing.list, {})
}

export function netAddListings(data) {
  return request.post(urls.Listing.new, data, {})
}

export function netGetOneListing(id) {
  return request.get(String(urls.Listing.detail).replace('{listingid}', id), {})
}

export function netUpdateListing(id, data) {
  return request.put(String(urls.Listing.update).replace('{listingid}', id), data, {})
}

export function netDeleteListing(id) {
  return request.delete(String(urls.Listing.delete).replace('{listingid}', id), {})
}

export function netPublishListing(id, data = {}) {
  return request.put(String(urls.Listing.publish).replace('{listingid}', id), data, {})
}

export function netUnpublishListing(id, data = {}) {
  return request.put(String(urls.Listing.unpublish).replace('{listingid}', id), data, {})
}

export function netReviewListing(listingid, bookingid, data = {}) {
  return request.put(String(urls.Listing.review).replace('{listingid}', listingid).replace('{bookingid}', bookingid), data, {})
}

export function netGetBookings() {
  return request.get(urls.Booking.list, {})
}

export function netAddBooking(listingid, data) {
  return request.post(String(urls.Booking.new).replace('{listingid}', listingid), data, {})
}

export function netAcceptBooking(bookingid) {
  return request.put(String(urls.Booking.accept).replace('{bookingid}', bookingid), {}, {})
}

export function netDeclineBooking(bookingid) {
  return request.put(String(urls.Booking.decline).replace('{bookingid}', bookingid), {}, {})
}

export function netDelBooking(bookingid) {
  return request.delete(String(urls.Booking.delete).replace('{bookingid}', bookingid), {})
}


export function netGetStockDetail(params) {
  return request.post(urls.Stock.detail, params, {})
}