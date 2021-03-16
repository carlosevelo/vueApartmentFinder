<template>
  <div id="app">
    <div id="nav">
      <div id="brand_name">
        <router-link to="/">Apartment Finder</router-link>
      </div>
      <div id="main_links">
        <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/buy">Buy</router-link>
      </div>
      <div>
        <router-link to="/sell">Sell</router-link>
      </div>
      </div>
      <div v-if="loggedIn" id="custom_links">
        <div>
          <router-link to="/logout">Logout</router-link>
        </div>
        <div>
          <router-link to="/profile">Profile</router-link>
        </div>
      </div>
      <div v-else id="custom_links">
        <div>
          <router-link to="/login">Login</router-link>
        </div>
        <div>
          <router-link to="/signup">Sign Up</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <div id="footer">
      <div class="footer_section">
        <h2>Resources</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/carlos-evelo">LinkedIn</a></li>
          <li><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-carlosevelo">GitHub</a></li>
        </ul>
      </div>
      <div class="footer_section">
        <h2>Contact</h2>
        <ul>
          <li><a>Email</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getJwtToken } from "../src/auth.js";

export default {
  name: "",
  data() {
    return {
      loggedIn: false,
    }
  },
  mounted: function() {
    const token = getJwtToken();
    if (token === undefined || token === "undefined" || token === null) {
      this.loggedIn = false;
    }
    else {
      this.loggedIn = true;
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url(IMG_0310.jpeg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: content-box;
}
#nav {
  /* padding: 30px; */
  background-image: linear-gradient(rgb(0,0,0,1),rgb(0,0,0,.0));
  height: 160px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  /* position:fixed;
  top: 0px;
  right: 0px;
  left: 0px; */
}

#nav a {
  font-weight: bold;
  color: #d9e8f7;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #e6dd60;
}

#brand_name {
  grid-column: 1/4;
  text-align: left;
  padding: 20px;
  font-size: 180%;
  text-decoration: none;
}

#main_links {
  grid-column: 4/7;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding: 20px;
  font-size: 110%;
}

#custom_links {
  grid-column: 8/10;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 20px;
}

#footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  position:relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(rgb(0,0,0,0),rgb(0,0,0,1));
  height: 200px;
  padding-top: 60px;
}
    
.footer_section {
  display: grid;
  grid-template-rows: 1fr 3fr;
  justify-items: center;
  width: 100%;
  padding: 10px;
  color: azure;
}

.footer_section ul {
  list-style: none;
  padding: 0px;
}

.footer_section li {
  padding: 5px;
}

.footer_section a {
  text-decoration: none;
  color: #d9e8f7;
}

</style>
