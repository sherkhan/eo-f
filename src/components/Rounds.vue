<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Rounds</h1>
    <v-layout row wrap>
    <v-flex d-flex xs12 sm4 lg4 class="text-xs-left pa-2">
      <v-card >
        <v-card-text >

          <h3 class="subheading mb-3">Deposit Balance: <strong>16305.28 USD</strong></h3>
          <h3 class="subheading mb-3">Round Balance: <strong>0.00 USD</strong></h3>


        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex  xs12 sm8 lg8 class="text-xs-left pa-2">
      <v-card >
        <v-card-title primary-title> <h4 class="">Enter USD amount to join</h4></v-card-title>
        <v-card-text >
          <form>
            <v-flex xs12 sm4 offset-sm4>
              <v-text-field
                label="Amount"

                prefix="$"
              ></v-text-field>
              <v-btn block color="success">Join Round</v-btn>
            </v-flex>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 class="pa-2 text-xs-center">
      <v-card >
        <v-card-title primary-title> <h3 class="headline">3257.79 USD Round Contract</h3></v-card-title>
        <v-divider></v-divider>
        <v-card-text >
          <p>Current total round deposits: <strong>3100.00 USD</strong></p>
          <p>OPEN: More than 24 hours remaining</p>
        </v-card-text>
      </v-card>
    </v-flex>

    </v-layout>
    <v-layout row wrap>


      <v-flex v-for="item in items" :key="item.id" xs12 sm4 class="pa-2 text-xs-center">
          <v-card >
            <v-card-title primary-title ><h4 class="mb-0">{{item.title}}</h4></v-card-title>
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
        {title: 'Total Reward', amount: '13,334,266', symbol: 'MTC'},
        {title: 'Free Distribution', amount: '5,636,320', symbol: 'MTC'},
        {title: 'Exchange Buyout', amount: '7,697,946',symbol: 'MTC'},

        {title: 'Fixed MTC Price', amount: '0.000578', symbol: 'USD'},
        {title: 'Current MTC Price', amount: '0.000288', symbol: 'USD'},
        {title: 'Target MTC Price', amount: '0.000615', symbol: 'USD'},

        {title: 'Your Deposit', amount: '0', symbol: 'USD'},
        {title: 'MTC Balance', amount: '44,858,262.06', symbol: 'MTC'},
        {title: 'MTC Holdings', amount: '12,919.18', symbol: 'USD'},

        {title: 'Your Current Share', amount: '0', symbol: '%'},
        {title: 'Your Current Reward', amount: '0', symbol: 'MTC'},
        {title: 'Your Cost', amount: '0', symbol: 'USD'},
      ]
    })
  }
</script>

<style scoped>
  h4, h3 {
    margin: auto
  }
</style>
