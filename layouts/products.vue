<template>
  <header class="shadow-sm bg-white">
    <nav class="container max-auto p-4">
      <NuxtLink to="/" class="font-bold">Nuxt Dojo Merch</NuxtLink>
    </nav>
  </header>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/products/abc">Products abc</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div class="container mx-auto p-4"><slot /></div>

  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
