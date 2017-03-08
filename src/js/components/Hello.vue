
<template>
  <div>
    <h1>Panel administratora</h1>
    <li><router-link to="transaction">Transakcje</router-link></li>
    <li><router-link to="product">Produkty</router-link></li>
    <li><router-link to="category">Kategorie</router-link></li>
    <h2>Monitory</h2>
    <div v-for="(site, index) in sites">
      <div class="label label-success" v-bind:class="{'label-danger': site.status == 9}">{{ site.url }}</div>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        "sites": []
      }
    },
    methods: {
      getSites: function() {
        this.$http.get('https://private-9eece1-adminpanelmock.apiary-mock.com/monitors').then((response) => {
//          console.log('zapisano')
          console.log(response.body.monitors)
        this.sites = response.body.monitors
      }, (response) => {
          console.log('blad')
        })
      }
    },
    mounted: function() {
      this.getSites()
    }
  };

</script>
