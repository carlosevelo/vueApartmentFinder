<template>
  <div class="buy">
    <div class="allListings">
      <Listing :listing="listing" v-for="listing in allListings" :key="listing.listingid"/>
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
      allListings: "",
    }
  },
  mounted: function() {
    Api.getListings()
      .then((response) => {
        this.allListings = response.data;
      })
  }
}
</script>

<style scoped>
.buy{

}
.allListings {
  display: grid;
  padding-left: 200px;
  padding-right: 200px;
}
</style>