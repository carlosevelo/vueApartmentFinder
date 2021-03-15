<template>
  <div class="buy">
    <div class="page-content-buy">
      <div class="filters-div">
        <div class="filter-title">
          <h3>Filters</h3>
        </div>
        <div class="rent-type">
          <div class="rent-type-title">
            <h5>Rent Type</h5>
          </div>
          <div class="rent-type-list">
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Month-to-Month
            </label>
            <br>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Contract (12 months)
            </label>
            <br>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Contract (6 months)
            </label>
            <br>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              All
            </label>
          </div>
        </div>
        <div class="price">
          <div class="price-title">
              <h5>Price</h5>
          </div>
          <div class="price-list">
            <div>
              <h6>Min</h6>
              <select>
                <option value="0">Min</option>
                <option value="1">$250</option>
                <option value="2">$300</option>
                <option value="3">$350</option>
                <option value="4">$400</option>
                <option value="5">$450</option>
                <option value="6">$500</option>
              </select>
            </div>
            <div>
              <h6>Max</h6>
              <select>
                <option value="0">Min</option>
                <option value="1">$250</option>
                <option value="2">$300</option>
                <option value="3">$350</option>
                <option value="4">$400</option>
                <option value="5">$450</option>
                <option value="6">$500</option>
              </select>
            </div>
          </div>
        </div>
        <div class="location">
          <div class="location-title">
            <h5>Location</h5>
          </div>
          <div class="location-list">
            <form>City, Zipcode, Neighborhood</form>
            <select>
              <option value="0">Miles</option>
              <option value="1">1 mile</option>
              <option value="2">5 miles</option>
              <option value="3">10 miles</option>
              <option value="4">15 miles</option>
              <option value="5">20 miles</option>
            </select>
          </div>
        </div>
        <div class="amenities">
          <div class="amenities-title">
              <h5>Amenities</h5>
          </div>
          <div class="amenities-list">
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Pool
            </label>
            <br>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Washer/Dryer
            </label>
            <br>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Parking
            </label>
            <br>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              Clubhouse
            </label>
            <br>
            <label>
              <input type="checkbox">
              <span class="checkmark"></span>
              TV
            </label>
          </div>
        </div>
      </div>
      <div class="pre-search-results">
        <div>
          <h1>Start With a Quick Search</h1>
        </div>
        <div>
          <button>Search Near Me</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buy',

}
</script>

<style scoped>
.page-content-buy {
    display: flex;
    justify-content: center;
}
.page-content-buy * {
    color: whitesmoke;
}
.filters-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 10px;
    background-color: rgba(0,0,0,.6);
    border-radius: 15px;
}
.filter-title {
    text-align: center;
    color: whitesmoke;
}
.rent-type, .price, .location, .amenities {
    display: flex;
    justify-content: center;
    width: 99%;
    height: 150px;
}
.rent-type-title, .price-title, .location-title, .amenities-title {
    text-align: center;
    width: 25%;
    height: 150px;
    margin: 10px;
    color: whitesmoke;
}
.rent-type-list, .price-list, .location-list, .amenities-list {
    text-align: left;
    width: 70%;
    height: 150px;
    margin: 10px;
    color: whitesmoke;
}
.price-list {
    display: flex;
}
.location-list form {
    background-color: whitesmoke;
    color: gray;
}
.pre-search-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    margin: 10px;
    background-color: rgba(0,0,0,.6);
    border-radius: 15px;
}
.pre-search-results button{
    color: black;
}

</style>