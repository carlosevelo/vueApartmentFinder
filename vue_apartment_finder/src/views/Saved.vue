<template>
  <div class="saved">
    <div class="title">
      <h1>Saved Listings</h1>
    </div>
    <div class="listings">
      <div v-for="listing in allSavedListings" :key="listing.id">
        <Listing :listing="listing"/>
      </div>
    </div>
  </div>
</template>

<script>
import Listing from "@/components/Listing.vue";
import Api from '../api';
import { getJwtToken, getUserIdFromToken } from "../auth";

export default {
  name: "Saved",
  components: {
    Listing
  },
  data() {
    return {
      userid: getUserIdFromToken(getJwtToken()),
      allSavedListings: Api.getSavedListings(this.userid),
    }
  }
};
</script>