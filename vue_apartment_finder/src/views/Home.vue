<template>
  <div class="home">
    <div class="home-top">
      <div class="home-top-text">
          <h1>The Perfect Place is Waiting</h1>
      </div>
      <div class="search-home">
          <div class="search-box">
              <form>Enter City, Zipcode, Neighborhood</form>
          </div>
          <div class="search-button">
              <button>Search</button>
          </div>
          <div class="filter">
              <h5>Distance:</h5>
              <select>
                  <option>1 mile</option>
                  <option>5 miles</option>
                  <option>10 miles</option>
                  <option>15 miles</option>
                  <option>20 miles</option>
                  <option>30 miles</option>
              </select>
          </div>
          <div class="advanced-search">
              <a href="#">Advanced Search</a>
          </div>
      </div>
    </div>
    <div class="titleandlistings">
      <div class="title">
          <h1>Apartments Near You</h1>
      </div>
      <div class="listings-div">
          <div class="listing">
            <img src="/images/pexels-adrien-olichon-2387674.jpg">
            <div class="details">
              <h3>Belmont Condominiums Unit #137</h3>
              <p>5 miles away</p>
              <p>$380 - $480</p>
              <p>Lovely unit at the base of Y Mountain. Large and spacious. Great roomates. Parking sucks though.</p>
            </div>
            <div class="saveshare">
              <button>Save</button>
            </div>
            <div class="saveshare">
              <button>Share</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

}
</script>

<style scoped>
.home-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 75%;
  background-color: rgba(0,0,0,.7);
  border-radius: 15px;
  margin-top: 10px;
}
.home-top-text {
  width: 30%;
  font-size: 30px;
  color: whitesmoke;
}
.search-home {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 700px;
  color: white;
  padding: 10px;
  border-radius: 15px;
}
.titleandlistings {
  background-color: rgba(0,0,0,.6);
  border-radius: 15px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-top: 10px;
}
.title {
  display: flex;
  justify-content: left;
  color: whitesmoke;
  width: 95%;
  padding: 10px;
  padding-left: 15px;
}
.listings-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
}
.listing {
  display: flex;
  width: 95%;
  max-height: 200px;
  margin-bottom: 15px;
}
.listing img {
  height: 180px;
  width: 240px;
  margin-left: 10px;
  margin-right: 10px;
}
.details {
  width: 800px;
  max-height: 280px;
  color: whitesmoke;
  margin-left: 10px;
  margin-right: 10px;
}
.details * {
  margin: 0px;
}
.saveshare {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 60px;
  height: 90px;
  color: whitesmoke;
  margin-left: 10px;
  margin-right: 10px;
}
.saveshare button {
  height: 30px;
  width: 60px;
  text-align: center;
}

</style>