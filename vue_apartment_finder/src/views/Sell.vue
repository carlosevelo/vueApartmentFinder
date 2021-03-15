<template>
  <div class="sell">
    <div class="page-content-sell">
      <div class="sidebar-div">
        <div class="sidebar-title">
          <h3>Current Listed Postings</h3>
        </div>
      </div>
      <div class="create-new-listing">
        <div>
            <h1>Create New Listing</h1>
        </div>
        <p>Fields marked with * are required.</p>
        <div class="enter-info">
          <div class="apt-name">
            <div class="enter-info-title">
              <h3>Apartment Name: </h3>
            </div>
            <div class="enter-info-field">
              <form style="width: 250px;">Apartment Name</form>
            </div>
          </div>
          <div class="apt-address">
            <div class="enter-info-title">
              <h3>Address: </h3>
            </div>
            <div class="enter-info-field">
              <div class="address1">
                <form style="width: 310px;">Address</form>
                <form style="width: 65px;">Unit No.</form>
              </div>
              <div class="address2">
                <form style="width: 150px;">City</form>
                <form style="width: 60px;">State</form>
                <form style="width: 80px;">Zipcode</form>
              </div>
            </div>
          </div>
          <div class="apt-rent-type">
            <div class="enter-info-title">
              <h3>Type of Rent: </h3>
            </div>
            <div class="enter-info-field">
              <select>
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
              <form style="width: 100px;">Rent Amount</form>
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
              <form style="height: 100px; width: 95%;">Enter a description.</form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sell'
}
</script>

<style scoped>
.page-content-sell {
    display: flex;
    justify-content: center;
}
.page-content-sell * {
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
.create-new-listing {
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
.enter-info-field form {
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