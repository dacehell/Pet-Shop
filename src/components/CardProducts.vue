<template>
  <div>
    <template>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            class="col-lg-4 col-md-6 col-sm-12"
            v-for="(product, index) in products"
            :key="index"
          >
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="product.photo"
              >
              </v-img>

              <v-card-subtitle class="pb-0">
                {{ product.name }}
              </v-card-subtitle>

              <v-card-text class="text--primary"> </v-card-text>
              Price:${{ product.price }}
              <v-card-actions>
                <v-btn color="orange" text>
                  Share
                </v-btn>

                <v-icon>mdi-cart</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["setProducts"]),
  },
  created() {
    this.setProducts();
  },
};
</script>
