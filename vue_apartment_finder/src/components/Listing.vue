<template>
  <div class="listings">
    <div class="listing">
      <img >
      <div class="details">
        <h3>{{listing.address}}</h3>
        <p>{{listing.price}}</p>
        <p>{{listing.details}}</p>
      </div>
      <div class="saveshare">
        <button>Share</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listing",
  props: ['listing'],
};
</script>

<style scoped>

</style>