<template>
  <div class="saved">
    <div class="title">
      <h1>Saved Listings</h1>
    </div>
    <div class="listings">
      <div v-for="post in posts" :key="post.listingId" class="listing">
        <Listings> {{post}}</Listings>
      </div>
    </div>
  </div>
</template>

<script>
import Listings from "@/components/Listings.vue";

export default {
  name: "Saved",
  components: {
    Listings
  }
};
</script>