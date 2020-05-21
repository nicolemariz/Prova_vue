<template>
  <div class="container">
    <h1>{{prodotto.title}}</h1>
    <h3>{{prodotto.descrizione}}</h3>
    <button class="btn btn-success" @click="goback()">Indietro</button>
  </div>
</template>

<script>
import dataservice from "../dataservice";
export default {
  data: function() {
    return {
      prodotto: dataservice.getProdotto(this.$route.params.id)
    };
  },
  methods: {
    goback: function() {
      this.$router.back();
    }
  }
};
</script>

<style>
</style>
