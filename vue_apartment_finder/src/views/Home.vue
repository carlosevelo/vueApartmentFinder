<template>
  <div class="home">
    <div class="header">
      <h1>The Perfect Place is Waiting</h1>
    </div>
    <div class="search">
        <div class="input">
          <form>Enter City, Zipcode, Neighborhood</form>
        </div>
        <div class="search_button">
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
</template>

<script>
export default {
  name: 'Home',

}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-items: center;
}

.header {
  display: grid;
  height: 150px;
  width: 100%;
  margin-top: 10px;
  color: azure;
  font-size: 150%;
}
.search {
  display: grid;
  grid-template-rows: repeat(2,1fr);
  grid-template-columns: repeat(2,1fr);
  width: 50%;
  color: white;
  padding: 10px;
  background-color: rgba(0,0,0,.7);
  border-radius: 15px;
}

</style>