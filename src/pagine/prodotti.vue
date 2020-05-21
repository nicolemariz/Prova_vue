<template>
   <div class="container">
      <div class="row">
        <div class="col mt-3 text-right">
          <button class="btn btn-primary" @click="gridView = !gridView">Toggle</button>
        </div>
      </div>
      <br>
      <object-list :objects="prodotti">
        <template v-slot:default="{ object }">
          <list-item v-if="!gridView" :item="object"></list-item>
          <card-item v-if="gridView" :item="object"></card-item>
        </template>
      </object-list>
    </div>
</template>

<script>
import objectList from "../components/objectList";
import listItem from "../components/listItem";
import cardItem from "../components/cardItem";

import dataservice from '../dataservice';
export default {components: { objectList, listItem, cardItem },
  data: function() {
    return {
      gridView: false,
      prodotti: dataservice.getProdotti()
    };
  }

}
</script>

<style>

</style>
