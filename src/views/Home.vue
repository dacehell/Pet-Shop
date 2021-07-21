<template>
  <div>
    <NavBar />
    <v-row>
      <v-col cols="4">
        <h2 class="pt-4">Categorias</h2>
      </v-col>
      <v-col cols="8"><CardProducts /> </v-col>
    </v-row>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import CardProducts from "../components/CardProducts.vue";
export default {
  name: "Home",

  components: {
    NavBar,
    CardProducts,
  },
};
</script>
