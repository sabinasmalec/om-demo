<template>
  <div>
    <h1>Lista transakcji</h1>
    <button v-on:click="getTransactions" class="btn btn-default">Sprawdź na stronie</button>
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>
            Program
          </th>
          <th>
            Wartość
          </th>
          <th>
            Prowizja
          </th>
          <th>
            Data
          </th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(transaction, index) in transactions">
        <td>{{transaction.programName}}</td>
        <td>{{transaction.orderCost}}</td>
        <td>{{transaction.commission}}</td>
        <td>{{transaction.auctionDate}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        "transactions": []
      }
    },
    methods: {
      getTransactions: function() {
        this.$https.get('https://private-9eece1-adminpanelmock.apiary-mock.com/transactions').then((response) => {
         console.log('ok')
          this.transactions = response.body.transactions
//          this.disabled = false
        }, (response) => {
          this.transactions = []
//          this.product = {}
//          this.disabled = true
        })
      }
    },
    mounted: function() {
      this.getTransactions()
    }
  };

</script>
