<template>
  <div class="vertical-container">
    <nav>
      <ul class="nav-list">
        <li><a href="/home">Home</a></li>
        <li><a href="/websites" class="active">Websites</a></li>
        <li><a href="/tarieven">Tarieven</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/offerte">Offerte</a></li>
      </ul>
    </nav>
    <section class="main-content">
      <h1>Werkwijze</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <button @click="goToContact">Contact</button>
    </section>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    goToContact() {
      // Logic to navigate to the contact page
    }
  }
}
</script>

<style scoped>
.vertical-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

nav .nav-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid black; /* Adds a bottom border to the nav bar */
}

nav .nav-list li {
  border: 1px solid black;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
}

nav .nav-list li a {
  display: block;
  text-decoration: none;
  color: black; /* Sets the text color to black */
}

nav .nav-list li a.active {
  background-color: #e7e7e7; /* Active item background color */
  border-radius: 5px; /* Rounded corners for the active link */
}

.main-content {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.main-content h1 {
  margin-bottom: 20px;
}

.main-content button {
  padding: 1.5rem 3rem; /* Increase padding to make the button larger */
  font-size: 1.25em; /* Increase font size */
  border: 3px solid black; /* Make border thicker */
  cursor: pointer;
  background-color: white; /* Set button background to white */
  margin-top: 20px; /* Add space above the button */
}

.main-content button:hover {
  background-color: #f8f8f8; /* Change background on hover */
}

footer {
  border-top: 1px solid black; /* Footer border */
  text-align: center;
  padding: 10px 0;
}
</style>
