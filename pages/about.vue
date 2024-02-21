<template>
  <h1>About</h1>
  <div>{{ data }}</div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP", {
  method: "post",
  body: {
    age: 30,
  },
});
</script>

<stylescoped>

</stylescoped>
