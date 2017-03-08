
<template>
  <div>
    <h1>Edycja produktu</h1>
    <div class="alert alert-info">
      <strong>Info!</strong> Ta strona korzysta z testowej wersji api - obsługuje jedynie produkty o numerach id: 143, 200, 300, 400 i 500
    </div>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label >Identyfikator produktu:</label>
            <input v-on:keyup="getProduct" v-model="productId" class="form-control">
          </div>
          <div v-if="product.id" >
            <b>Lokalizacja:</b>
            <ol class="breadcrumb">
              <li v-for="crumb in product.breadcrumb">{{crumb.id}}-{{crumb.name}}</li>
            </ol>
            <ol class="breadcrumb">
              <li><b>Producent:</b> {{product.brand}}</li>
              <li><b>Centa:</b> {{product.formattedPrice}} PLN</li>
              <li><b>Poprzednia cena:</b> {{product.formatedPreviousPrice}} PLN</li>
            </ol>
            <div class="form-group">
              <label >Opis:</label>
              <input v-model="product.name" class="form-control" :disabled="disabled">
              <label >Nazwa:</label>
              <textarea v-model="product.description" class="form-control" :disabled="disabled" rows="10"></textarea>
              <label>Kategoria:</label>
              <input v-model="product.category.name" class="form-control" :disabled="true">
            </div>
            <div class="form-inline">
              <label for="isArchived">Archiwizacja (0/1):</label>
              <input v-model="product.archived" class="form-control isArchived" id="isArchived" min="0" max="1" maxlength="1">
              <label for="isHidden">Ukrywanie (0/1):</label>
              <input v-model="product.hidden" class="form-control isHidden" id="isHidden" min="0" max="1" maxlength="1">
            </div>
          </div>
          <div v-if="product.id" class="form-group text-center">
            <button v-on:click="save" class="btn btn-default">Zapisz</button>
            <button v-on:click="showOnPage" type="submit" class="btn btn-default">Sprawdź na stronie</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <div>
          <img v-if="product.id" v-bind:src="product.image"></img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        "productId": null,
        "product": {},
        "disabled": true
      }
    },
    methods: {
      getProduct: function() {
        this.$http.get('http://private-9eece1-adminpanelmock.apiary-mock.com/product/'+this.productId+'?reloadCache=1').then((response) => {
          console.log(response)
          console.log(response.body.breadcrumb)
          this.product = response.body
          this.disabled = false
        }, (response) => {
          this.product = {}
          this.disabled = true
        })

      },
      showOnPage: function() {
        console.log('pokaz')
        window.open('http://ogrodymody.pl' + this.product.url);
      },
      save: function() {
        this.$http.post('http://private-9eece1-adminpanelmock.apiary-mock.com/product/', this.product).then((response) => {
//          console.log('zapisano')
          this.getProduct()
        }, (response) => {
          console.log('blad')
        })
      }
    }
  };

</script>
