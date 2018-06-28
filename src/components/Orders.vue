<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Open Contracts</h1>


    <v-card width="100%">
      <v-data-table
        :headers="headers"
        :items="orders"
        :disable-initial-sort="true"
        :rows-per-page-items=[10,25,1000]


      >
        <template slot="items" slot-scope="props" >
          <tr >
            <td >{{ props.item.id }}</td>
            <td >{{ props.item.investment }} {{ props.item.ticker }}</td>
            <td ><a href="">{{ props.item.currency }}</a> {{ props.item.details }}</td>
            <td ><span :class="{'green--text' :props.item.price  > 0, 'red--text': props.item.price  < 0}">{{ props.item.price }}</span> USD</td>
            <td >{{ props.item.value }} USD</td>
            <td ><span :class="{'green--text' :props.item.profit  > 0, 'red--text': props.item.profit  < 0}">{{ props.item.profit }}</span> USD</td>
            <td >{{ props.item.margin }} USD</td>
            <td >{{ props.item.date }}</td>
            <td ><a href="">{{ props.item.action }}</a></td>
          </tr>
        </template>
      </v-data-table>
    </v-card>

  </v-container>

</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {text: 'Order #', align: 'left',value: 'id'},
          { text: 'Investment', value: 'investment', sortable: false },
          { text: 'Details', value: 'details'},
          { text: 'Price', value: 'price'},
          { text: 'Value', value: 'value'},
          { text: 'Profit/L', value: 'profit'},
          { text: 'Margin', value: 'margin'},
          { text: 'Date', value: 'date'},
          { text: 'Action', value: 'action'},

        ],
        orders: [
          {id: 705, investment: '50', currency: 'Bitcoin', ticker: 'BTC', details: 'Buy', price: 6791.43, value: 3071.71, profit: -30, margin: '1.000,00 ', date: '21 June 2018 13:56:01', action: 'Close'},


        ]
      }
    }
  }
</script>

