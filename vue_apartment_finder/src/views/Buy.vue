<template>
  <div class="buy">
    <div class="page-content-buy">
      <div class="allListings">
        <div v-for="listing in allListings" :key="listing.id">
          <Listing :listing="listing"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Listing from "../components/Listing.vue";
import Api from "../api.js"
export default {
  name: 'Buy',
  components: {
    Listing,
  },
  data() {
    return {
      allListings: Api.getListings(),
    }
  }
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