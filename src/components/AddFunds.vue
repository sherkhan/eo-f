<template>
  <v-container fluid grid-list-md>
  <h1 class="display-2 mb-4">Add Funds</h1>
    <h3>No recent deposits, leave this page open after your deposit</h3>
<p>Investment Account Balance
  <strong>30085.00 USD</strong></p>

  <v-data-table
    :headers="headers"
    :items="currencies"

    hide-actions
    item-key="name"
  >
    <template slot="items" slot-scope="props">
      <tr class="no-hover">
        <td>{{ props.item.name }}</td>
        <td >{{ props.item.ticker }}</td>
        <td class="text-xs-center">
          <span v-if="!props.item.address">
            <v-btn :loading="props.item.address"
                       @click.native="getAddress(props.item.ticker)"
                       big block outline color="indigo">
            Click here to create {{ props.item.name }} Deposit Address
            <span slot="loader" class="loader">
            <v-icon light>cached</v-icon>
            </span>
            </v-btn>
          </span>
          <span v-else>{{ props.item.address }}</span>
        </td>
        <td>
          <v-tooltip top>
            <v-btn slot="activator" icon small><v-icon small>file_copy</v-icon></v-btn>
            <span>Copy</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn slot="activator" icon small><v-icon small>autorenew</v-icon></v-btn>
            <span>Obtain a new address</span>
          </v-tooltip>

          </td>
        <td >{{ props.item.deposit_balance }} USD</td>
        <td >{{ props.item.rates }} USD</td>

      </tr>
    </template>

  </v-data-table>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        showAddress: false,
        loader: null,
        gettingAddress: null,
        headers: [
          {
            text: 'Currency',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Ticker', value: 'ticker', sortable: false },
          { text: 'Address', value: 'address', sortable: false, align: 'center', },
          { text: '', value: '', sortable: false },
          { text: 'Deposit Balance', value: 'deposit_balance', sortable: false },

          { text: 'Rates', value: 'rates', sortable: false }

        ],
        currencies: [
            {
              name: 'Bitcoin',
              ticker: 'BTC',
              address: false,
              deposit_balance: '16305.28',
              rates: '6139.62'
            },
            {
              name: 'Litecoin',
              ticker: 'LTC',
              address: false,
              deposit_balance: '36305.28',
              rates: '80.12'
            },{
              name: 'Marinecoin',
              ticker: 'MTC',
              address: false,
              deposit_balance: '33305.28',
              rates: '0.00013'
            },{
              name: 'Bitcoin Cash',
              ticker: 'BCH',
              address: false,
              deposit_balance: '33305.28',
              rates: '810'
            },{
              name: 'Doge',
              ticker: 'DOGE',
              address: false,
              deposit_balance: '33305.28',
              rates: '0.004'
            },{
              name: 'Dash',
              ticker: 'DASH',
              address: false,
              deposit_balance: '33305.28',
              rates: '250'
            },
          ]
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (
          this[l] = false,
          this.showAddress = true
        ), 3000)

        this.loader = null
      }
    },
    methods: {
      getAddress (curr) {
        this.loader = 'gettingAddress'
        let currency = _.findIndex(this.currencies, function(item) { return item.ticker == curr; })
        this.currencies[currency].address = 'JiaerRvdY16aJ8SDhSKiWvzyYWri7roM75'

      }
    }
  }
</script>

<style lang="scss">
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .loader {
    animation: loader 1s infinite;
    display: flex;
  }

  .deposit-adress {
    background: #BDBDBD;
    margin: 10px 0;
  }
  .no-hover {
    &:hover {
      background: inherit;
     }
  }
</style>
