<template>
  <div class="listing">
    <div class="image">
      <!-- <img src="#"> -->
      <h3>Image Here</h3>
    </div>
    <div class="details">
      <h3>{{listing.name}} {{listing.street}}</h3>
      <p><strong>City: </strong> {{listing.city}}</p>
      <p><strong>Zipzode: </strong> {{listing.zipcode}}</p>
      <p><strong>Availability: </strong> {{availability}}</p>
      <p><strong>Rent Price: </strong> ${{price}}</p>
    </div>
    <div class="buttons"> 
      <button>Save</button>
      <button>Share</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listing",
  props: ['listing'],
  data() {
    return {
      availability: "",
      price: "",
    }
  },
  mounted: function() {
    if (this.listing.available === "true") {
      this.availability = "Yes";
    }
    else {
      this.availability = "No";
    }
    this.price = this.listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  }
};
</script>

<style scoped>
.listing {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: rgba(0, 0, 0, .7);
  border-radius: 15px;
  margin-bottom: 15px;
}
.image {
  grid-column: 1/4;
  align-self: center;
  height: 85%;
  margin-left: 10px;
  background-color: gainsboro;
}
.image * {
}
.details {
  grid-column: 4/10;
  color: azure;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr .25fr .25fr 1fr ;
}
.details h3 {
  grid-column: 1/3;
}
.details p {
  margin: 0;
}
.buttons {
  grid-column: 10/11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.buttons button {
  width: 60px;
  margin: 10px;
}
</style>