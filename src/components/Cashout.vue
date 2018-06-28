<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Cash Out</h1>

    <v-layout row wrap>
      <v-flex d-flex xs12 sm6  class="text-xs-left pa-2">
        <v-card >
          <v-card-text >

            <div class="body-2 mb-3">Available Marinecoin Balance: <strong>44858262.0571 MTC</strong></div>
            <div class="body-2 mb-3">Your wallet: <strong>JiaerRvdY16aJ8SDhSKiWvzyYWri7roM75</strong></div>
            <div class="body-2 mb-3">Enter Withdraw Marinecoin Amount</div>
            <div class="body-2 mb-3">&nbsp;</div>

            <form >
              <v-flex xs12 sm6 >
                <v-text-field
                  label="Amount"

                ></v-text-field>
                <v-btn block color="primary">Withdraw</v-btn>
              </v-flex>
            </form>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 class="text-xs-left pa-2">
        <v-card >
         <v-card-text>
           <div class="body-2 mb-3">MTC exchange rates <a href="">Check Market Depth</a></div>
           <div class="body-2 mb-3">This transaction can be processed once every 48 Hours</div>
           <div class="body-2 mb-3">Available Investment Balance <strong>30182.50</strong> USD</div>
           <div class="body-2 mb-3">Enter USD Amount to buy MTC</div>

            <form>
              <v-flex xs12 sm4 >
                <v-text-field
                  label="Amount"

                  prefix="$"
                ></v-text-field>
                <v-btn block color="success">Buy</v-btn>
              </v-flex>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>


<script>
  export default {
    data () {
      return {
        search: '',

      }
    }
  }
</script>

