export default {
  props: ["item"],
  methods: {
    vediDettagli: function() {
      console.log("Vedi dettagli", this.item);
      this.$router.push({ path: "/prodotto/" + this.item.id });
    }
  }
};
