import axios from "axios";
import { authHeader, getJwtToken, getUserIdFromToken } from "./auth";

const API_URL = "http://192.168.50.57:8000";

class Api {
  getListings() {
     return axios.get(API_URL + "/Listings", {});
  }
  getSavedListings(userid) {
    return axios.get(API_URL + `/listings?userid=eq.${userid}`, {});
  }

  // getListingDetail(id) {
  //   return axios.get(API_URL + `/listings?listingid=eq.${id}`);
  // }

  addListing(listing) {
    return axios.post(
      API_URL + "/postlisting",
      {
        ...listing,
        // add user id from JWT token
        userid: getUserIdFromToken(getJwtToken()),
      },
      {
        headers: authHeader(),
      }
    );
  }

  // updateListing(listing) {
  //   return axios.patch(
  //     API_URL + `/listings?listingid=eq.${listing.listingid}`,
  //     listing,
  //     {
  //       headers: authHeader(),
  //     }
  //   );
  // }

  // deleteListing(id) {
  //   return axios.delete(API_URL + `/listings?listingid=eq.${id}`, {
  //     headers: authHeader(),
  //   });
  // }

  publishListing(id) {
    return axios.post(
      API_URL + "/rpc/publish",
      { id: id },
      {
        headers: authHeader(),
      }
    );
  }

  login(email, password) {
    return axios.post(API_URL + "/rpc/login", { email, password });
  }

  signup(email, password, name, isadmin, phonenum,) {
    return axios.post(API_URL + "/rpc/signup", { email, password, name, isadmin, phonenum });
  }
}

export default new Api();