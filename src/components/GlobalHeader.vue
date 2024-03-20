<template>
  <header class="global-header">
    <nav class="navigation">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/websites">Websites</RouterLink></li>
        <li><RouterLink to="/tarieven">Tarieven</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/offerte">Offerte</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.global-header {
  /* Styles for the header */
}
.navigation ul {
  display: flex;
  list-style: none;
  /* More styles */
}
/* Rest of the styles */
</style>
