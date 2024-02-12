<template>
  <p>/products/ {{ id }}</p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus rerum,
    hic commodi dolore omnis laborum esse laudantium, ut accusantium ducimus
    tempore neque itaque corporis consequuntur. Ab, itaque odio consequatur
    blanditiis eligendi quidem aperiam impedit expedita beatae assumenda non et
    minus aspernatur inventore porro. Cupiditate repudiandae minus, nobis
    molestiae quo unde ducimus modi dolorem corrupti adipisci enim quasi
    tempore, temporibus soluta ratione in. Minus expedita ratione sequi quisquam
    deserunt voluptate esse, ipsum nobis nihil, cumque rem odio dolorem deleniti
    id repellat, vel qui natus et. Ea laudantium aperiam quos exercitationem
    reprehenderit itaque illo minus, temporibus impedit optio. Exercitationem
    obcaecati sapiente optio!
  </p>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
</script>
<style scoped></style>
