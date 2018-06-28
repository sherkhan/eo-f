<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Account overview</h1>

    <v-layout row wrap>
      <v-flex v-for="item in items" :key="item.id" xs12 sm4 class="pa-2">
          <v-card>
            <v-card-title primary-title><h4 class="mb-0">{{item.title}}</h4></v-card-title>
            <v-divider></v-divider>
            <v-card-text >
              {{item.amount}} {{ item.symbol}}
            </v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>






</template>

<script>
  export default {
    data: () => ({
      size: 'sm',
      items: [
        {title: 'Deposit Balance', amount: '150', symbol: 'USD'},
        {title: 'Investment Balance', amount: '150', symbol: 'USD'},
        {title: 'Round Balance', amount: '150',symbol: 'USD'},
        {title: 'Open Contracts', amount: '150', symbol: 'USD'},
        {title: 'Open Contracts Net', amount: '150', symbol: 'USD'},
        {title: 'Balances Total', amount: '150', symbol: 'USD'},
        {title: 'MTC Balance', amount: '150', symbol: 'MTC'},
        {title: 'MTC Holdings', amount: '150', symbol: 'MTC'},
        {title: 'Current MTC Price', amount: '0.000351', symbol: 'USD'}
      ]
    })
  }
</script>
