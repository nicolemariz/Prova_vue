export default {
  getProdotti: function() {
    return [
      { id: "1", title: "Titolo 1", descrizione: "Descrizione 1" },
      { id: "2", title: "Titolo 2", descrizione: "Descrizione 2" },
      { id: "3", title: "Titolo 3", descrizione: "Descrizione 3" },
      { id: "4", title: "Titolo 4", descrizione: "Descrizione 4" }
    ];
  },
  getProdotto: function(id) {
    return this.getProdotti().filter(p => id === p.id)[0];
  }
};
