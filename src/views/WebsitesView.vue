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
      <!-- Updated button styling and position -->
      <div class="button-container">
        <button @click="goToContact">Contact</button>
      </div>
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
  border-bottom: 1px solid black;
}

nav .nav-list li {
  border: 1px solid black;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
}

nav .nav-list li a {
  display: block;
  text-decoration: none;
  color: black;
}

nav .nav-list li a.active {
  background-color: #e7e7e7;
  border-radius: 5px;
}

.main-content {
  flex: 2;
  text-align: center; /* Centered text for the heading and paragraph */
  padding: 20px;
}

.main-content h1 {
  margin-bottom: 20px;
}

.button-container {
  text-align: center; /* Centering the button within its container */
}

.main-content button {
  padding: 1rem 2rem; /* Larger padding for a bigger button */
  font-size: 1.25em; /* Increased font size for visibility */
  border: 3px solid black; /* Thicker border as seen in the image */
  cursor: pointer;
  background-color: white;
  margin-top: 20px; /* Added margin to the top for spacing */
  display: inline-block; /* To apply text-align center from its container */
}

.main-content button:hover {
  background-color: #f8f8f8; /* Slight background color change on hover */
}

footer {
  border-top: 1px solid black;
  text-align: center;
  padding: 10px 0;
}
</style>
