<template>
  <div class="card">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.descrizione}}</p>
    <a class="btn btn-success" @click="vediDettagli()">Scopri di più</a>
  </div>
</template>

<script>
import itemMixin from "../itemmixin";

export default {
  mixins: [itemMixin]
};
</script>

<style>
.card {
  display: inline-flex;
  width: 33%;
}
.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
