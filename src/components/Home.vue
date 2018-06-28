<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Home</h1>
    <v-card width="100%">

      <v-card-title>
<v-flex sm6 xs12 offset-sm6 offset-xs0>
  <v-text-field
    v-model="search"
    append-icon="search"
    label="Search"
    single-line
    hide-details
  ></v-text-field>
</v-flex>

      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="currencies"
        :search="search"
        :disable-initial-sort="true"
        :rows-per-page-items=[50,200,1000]


      >
        <template slot="items" slot-scope="props" >
          <tr @click="stateGo(props.item.link)" class="hovered">
            <td ><a href="">{{ props.item.name }}</a></td>
            <td >{{ props.item.symbol }}</td>
            <td >$ {{ props.item.quotes.USD.price }}</td>
            <td ><span :class="{'green--text' :props.item.quotes.USD.percent_change_1h  > 0, 'red--text': props.item.quotes.USD.percent_change_1h  < 0}">{{ props.item.quotes.USD.percent_change_1h }}</span></td>
            <td ><span :class="{'green--text' :props.item.quotes.USD.percent_change_24h  > 0, 'red--text': props.item.quotes.USD.percent_change_24h  < 0}">{{ props.item.quotes.USD.percent_change_1h  }}</span></td>
            <td >{{ props.item.rank }}x</td>
          </tr>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </v-container>

</template>

<style lang="scss">
  .hovered:hover {
    cursor: pointer;
  }
</style>


<script>
  import axios from 'axios'
  import _ from 'lodash'
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Markets',
            align: 'left',
            value: 'name'
          },
          { text: 'Symbol', value: 'symbol' },
          { text: 'Price', value: 'price', sortable: false  },
          { text: '1h change', value: 'hourse_change' , sortable: false },
          { text: '24h change', value: 'day_change', sortable: false  },
          { text: 'Leverage', value: 'leverage', sortable: false  }
        ],
        currencies: []
      }
    },
    methods: {
      stateGo: function (data) {
        this.$router.push('/'+data);
      }
    },
    created () {
      axios.get('static/data/currency.json')
        .then(response =>{
          this.currencies = _.toArray(response.data.data)
          _.forEach(this.currencies, function(value, key) {
            value.link = 'overview'
          })


        })
        .catch(error =>{
          console.log(error);
        })
    }
  }
</script>

