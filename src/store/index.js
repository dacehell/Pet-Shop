import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const PRODUCT_ENDPOINT = "http://sva.talana.com:8000/api/product/";
// const CATEGORY_ENDPOINT = "http://sva.talana.com:8000/api/product-category/";
// const REGION_ENDPOINT = "http://sva.talana.com:8000/api/region/";
// const COUNTY_ENDPOINT = "http://sva.talana.com:8000/api/county/";
// const PURCHASE_ENDPOINT = "http://sva.talana.com:8000/api/purchase/";
// const PAYMENT_ENDPOINT = "http://sva.talana.com:8000/api/payment/";

export default new Vuex.Store({
  state: {
    products: [],
    category: [],
    region: [],
    county: [],
    purchase: [],
    payment: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    // SET_CATEGORY(state, category) {
    //   state.category = category;
    // },
    // SET_REGION(state, region) {
    //   state.region = region;
    // },
    // SET_COUNTY(state, county) {
    //   state.county = county;
    // },
    // SET_PURCHASE(state, purchase) {
    //   state.purchase = purchase;
    // },
    // SET_PAYMENT(state, payment) {
    //   state.payment = payment;
    // },
  },
  actions: {
    setProducts({ commit }) {
      axios.get(`${PRODUCT_ENDPOINT}`).then((response) => {
        commit("SET_PRODUCTS", response.data);
        console.log(response.data);
      });
    },
  },
  modules: {},
});
