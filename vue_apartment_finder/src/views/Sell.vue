<template>
  <div class="sell">
    <!-- <div class="sidebar-div">
      <div class="sidebar-title">
        <h3>Current Listed Postings</h3>
      </div>
    </div> -->
    <div class="new-listing">
      <div>
          <h1>Create New Listing</h1>
      </div>
      <p>Fields marked with * are required.</p>
      <form name="form" @submit.prevent="handlePost" class="enter-info">
        <div class="apt-name">
          <div class="enter-info-title">
            <h3>Apartment Name: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="aptName" type="text" name="aptName" placeholder="Apartment Name"/>
          </div>
        </div>
        <div class="apt-address">
          <div class="enter-info-title">
            <h3>Address: </h3>
          </div>
          <div class="enter-info-field">
            <div class="address1">
              <input v-model="address" type="text" name="address" placeholder="Address"/>
              <input v-model="unitnum" type="text" name="unitnum" placeholder="Unit Number"/>
            </div>
            <div class="address2">
              <input v-model="city" type="text" name="city" placeholder="City"/>
              <input v-model="state" type="text" name="state" placeholder="State"/>
              <input v-model="zipcode" type="text" name="zipcode" placeholder="Zipcode"/>
            </div>
          </div>
        </div>
        <div class="apt-rent-type">
          <div class="enter-info-title">
            <h3>Type of Rent: </h3>
          </div>
          <div class="enter-info-field">
            <select v-model="rentType">
              <option value="0">Type of Rent</option>
              <option value="1">Month-to-Month</option>
              <option value="2">Contract (12 months)</option>
              <option value="3">Contract (6 months)</option>
            </select>
          </div>
        </div>
        <div class="apt-rent-amount">
          <div class="enter-info-title">
            <h3>Rent Amount: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="rentAmount" type="text" name="rentAmount" placeholder="Rent Amount"/>
          </div>
        </div>
        <div class="apt-amenities">
          <div class="enter-info-title">
              <h3>Amenities: </h3>
          </div>
          <div class="enter-info-field">
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Pool
            </label>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Clubhouse
            </label>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Washer/Dryer
            </label>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Gym
            </label>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Parking
            </label>
          </div>
        </div>
        <div class="apt-description">
          <div class="enter-info-title">
            <h3>Description: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="description" type="text" name="decription" placeholder="Enter a description"/>
          </div>
        </div>
        <div >
          <button>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: 'Sell',
  data() {
    return {
      aptName: "",
      address: "",
      unitnum: "",
      city: "",
      state: "",
      zipcode: "",
      rentType: "",
      rentAmount: "",
      amenitites: "",
      description: "",
    }
  },
  methods: {
    handlePost() {
      Api.addListing(this.data)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>
.sell {
    display: flex;
    justify-content: center;
}
.sell * {
    color: whitesmoke;
}
.sidebar-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 10px;
    background-color: rgba(0,0,0,.6);
    border-radius: 15px;
}
.sidebar-title {
    text-align: center;
    color: whitesmoke;
}
.new-listing {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    margin: 10px;
    background-color: rgba(0,0,0,.6);
    border-radius: 15px;
    padding-bottom: 15px;
}
.enter-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 99%;
}
.apt-name {
    display: flex;
    align-items: center;
    width: 95%;
}
.apt-address {
    display: flex;
    align-items: center;
    width: 95%;
}
.apt-rent-type {
    display: flex;
    align-items: center;
    width: 95%;
}
.apt-rent-amount {
    display: flex;
    align-items: center;
    width: 95%;
}
.apt-amenities {
    display: flex;
    align-items: center;
    width: 95%;
}
.apt-description {
    display: flex;
    width: 95%;
}
.enter-info-title {
    width: 30%;
}
.enter-info-field {
    width: 70%;
}
.enter-info-field input {
    background-color: whitesmoke;
    margin: 5px;
    color: gray;
    text-align: center;
}
.address1 {
    display: flex;
    justify-content: left;
}
.address2 {
    display: flex;
    justify-content: left;
}
</style>