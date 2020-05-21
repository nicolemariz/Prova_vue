<template>
  <div class="row align-items-center">
    <div class="col-8">
      <h3>{{item.title}}</h3>
      <p>{{item.descrizione}}</p>
    </div>
    <div class="col-4 text-right">
      <button class="btn btn-sm btn-success" @click="vediDettagli()">Dettaglio</button>
    </div>
  </div>
</template>

<script>
import itemMixin from "../itemmixin";
export default {
  mixins: [itemMixin]
};
</script>

<style scoped>
.row {
  border-bottom: 1px solid grey;
}
</style>
