
<template>
  <div>
    <h1>Edycja kategorii</h1>
    <div class="alert alert-info">
      <strong>Info!</strong> Ta strona korzysta z testowej wersji api - obsługuje jedynie kategorie o numerach id: 4, 5 i 14
    </div>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label >Identyfikator kategorii:</label>
            <input v-on:keyup="getCategory" v-model="categoryId" class="form-control">
            <div v-if="category.id" > <!--category.category?-->
              <label >Opis:</label>
              <input v-model="category.name" class="form-control" :disabled="disabled"></input>
              <label >Nazwa:</label>
              <textarea v-model="category.description" class="form-control" :disabled="disabled" rows="10"></textarea>
              <label>Kategoria:</label>
              <input v-model="category.name" class="form-control" :disabled="true"></input>
            </div>
          </div>
          <div v-if="category.id" >
            <button v-on:click="save" class="btn btn-default">Zapisz</button>
            <button v-on:click="showOnPage" type="submit" class="btn btn-default">Sprawdź na stronie</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <div>
          <img v-if="category.id" v-bind:src="category.image"></img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        "categoryId": null,
        "category": {},
        "disabled": true
      }
    },
    methods: {
      getCategory: function() {
        this.$https.get('https://private-9eece1-adminpanelmock.apiary-mock.com/category/'+this.categoryId+'?reloadCache=1').then((response) => {
          console.log(response)
          this.category = response.body.category
          this.disabled = false
        }, (response) => {
          this.category = {}
          this.disabled = true
        })

      },
      showOnPage: function() {
        console.log('pokaz')
        window.open('http://ogrodymody.pl' + this.category.url);
      },
      save: function() {
        this.$https.post('https://private-9eece1-adminpanelmock.apiary-mock.com/category/', this.category).then((response) => {
//          console.log('zapisano')
          this.getcategory()
        }, (response) => {
          console.log('blad')
        })
      }
    }
  };

</script>
