<template>
  <div class="home">
    <div class="header">
      <h1>The Perfect Place is Waiting</h1>
    </div>
    <div class="search">
        <div class="input">
          <input type="text" name="input" placeholder="Enter City, Zip Code, Neighborhood">
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
        <div class="advanced_search">
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
  color: rgb(10, 10, 10);
  font-size: 150%;
}
.search {
  display: grid;
  grid-template-rows: 40px 40px 60px 40px;
  grid-template-columns: repeat(2,1fr);
  width: 50%;
  height: fit-content;
  color: white;
  padding: 10px;
  background-color: rgba(0,0,0,.7);
  border-radius: 15px;
}
.input {
  grid-column: 1/3;
  grid-row: 1/2;
  height: 50px;
  padding-top: 5px;
}
.input input {
  width: 80%;
  height: 25px;
  text-align: center;
}
.search_button {
  grid-column: 1/3;
  grid-row: 2/3;
}
.search_button button {
  height: 30px;
  width: 70px;
}
.filter {
  grid-column: 1/3;
  grid-row: 3/4;
  justify-items: center;
}
.filter h5 {
  margin: 0px;
  padding-bottom: 5px;
}
.filter select {
  width: 165px;
  height: 25px;
  
}
.advanced_search {
  grid-column: 1/3;
  grid-row: 4/5;
  justify-self: center;
  align-self: center;
}
.advanced_search a {
  color: aliceblue;
}

</style>