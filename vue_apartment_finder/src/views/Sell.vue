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
            <input v-model="aptname" type="text" name="name" placeholder="Apartment Name"/>
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
        <div class="apt-rent-amount">
          <div class="enter-info-title">
            <h3>Rent Amount: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="price" type="text" name="price" placeholder="Rent Amount"/>
          </div>
        </div>
        <div class="apt-rent-amount">
          <div class="enter-info-title">
            <h3>Number of rooms: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="numrooms" type="text" name="numrooms" placeholder="Number of rooms"/>
          </div>
        </div>
        <div class="apt-rent-amount">
          <div class="enter-info-title">
            <h3>Unit Type: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="unittype" type="text" name="unittype" placeholder="Unit type"/>
          </div>
        </div>
        <div class="apt-rent-amount">
          <div class="enter-info-title">
            <h3>Building Number: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="bldgnum" type="text" name="bldgnum" placeholder="Building Number"/>
          </div>
        </div>
        <div class="apt-rent-amount">
          <div class="enter-info-title">
            <h3>Number of baths: </h3>
          </div>
          <div class="enter-info-field">
            <input v-model="numbaths" type="text" name="numbaths" placeholder="Number of baths"/>
          </div>
        </div>
        <div class="apt-rent-amount">
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
      aptname: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      
      numrooms: "",
      unitnum: "",
      unittype: "",
      bldgnum: "",
      numbaths: "",
      price: "",
      
      description: "",
    }
  },
  methods: {
    handlePost() {
      let complexid = "";
      Api.addComplex(this.aptname, this.city, this.zipcode, this.address, this.state)
        .then(() => { 
          complexid = Api.getComplexid(this.address);
          Api.addUnit(this.numrooms, this.unitnum, this.unittype, this.bldgnum, this.numbaths, complexid, this.price)
            .then(() => {
              Api.addListing(this.description)
                .then(() => {
                  this.$router.push("/");
                })
                .catch((error) => {
                  console.log(error);
                })
            })
            .catch((error) => {
              console.log(error);
            })
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
button span {
  color: black !important;;
}
</style>