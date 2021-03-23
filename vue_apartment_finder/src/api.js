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
  getComplexid(street) {
    let complexid;
    axios.get(API_URL + `/complex?street=eq.${street}`)
      .then((response) => {
        complexid = response.complexid;
      })
    return complexid;
  }

  addComplex(aptname, city, zipcode, address, state) {
    return axios.post(
      API_URL + "/rpc/createcomplex",
      {
        name: aptname,
        street: address,
        city: city,
        state: state,
        zipcode: zipcode,
      },
      {
        headers: authHeader(),
      }
    );
  }
  addUnit(numrooms, unitnum, unittype, bldgnum, numbaths, complexid, price) {
    return axios.post(
      API_URL + "/rpc/createunit",
      {
        numrooms: numrooms,
        unitnum: unitnum,
        unittype: unittype,
        bldgnum: bldgnum,
        numbaths: numbaths,
        complexid: complexid,
        price: price,
      },
      {
        headers: authHeader(),
      }
    );
  }
  addListing(listing) {
    return axios.post(
      API_URL + "/rpc/createlisting",
      { 
        userid: getUserIdFromToken(getJwtToken()),
        // unitid: ,
        description: listing.description,
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