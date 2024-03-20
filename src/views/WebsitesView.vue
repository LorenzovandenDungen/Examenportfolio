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
}

nav .nav-list li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid black; /* Simple border, adjust as needed */
}

nav .nav-list li a.active {
  background-color: #e7e7e7; /* Active item background color */
}

.main-content {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.main-content h1 {
  margin-bottom: 20px;
}

footer {
  border-top: 1px solid black; /* Footer border */
  text-align: center;
  padding: 10px 0;
}
</style>
