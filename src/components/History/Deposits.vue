<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Deposits history</h1>


    <v-card width="100%">
      <v-data-table
        :headers="headers"
        :items="activities"
        :disable-initial-sort="true"
        :rows-per-page-items=[10,25,1000]


      >
        <template slot="items" slot-scope="props" >
          <tr >
            <td >{{ props.item.amount }} {{ props.item.curr }}</td>
            <td ><a :href="'https://btc.com/' + props.item.details" target="_blank">{{ props.item.details }}</a></td>
            <td >{{ props.item.rate }}</td>
            <td >{{ props.item.credit }} USD</td>
            <td >{{ props.item.date }}</td>
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
          {
            text: 'Deposited', align: 'left',value: 'amount'
          },
          { text: 'Transaction Identification - Txid', value: 'details', sortable: false },
          { text: 'Rate', value: 'rate'},
          { text: 'Credited', value: 'credit'},
          { text: 'Date', value: 'date'}

        ],
        activities: [
          {amount: 1, curr: 'BCA', details: '39c14162fee8440e3815e46eb8ed6719cd41bf6a7a74dbe321c56b7b08b36f59', rate: 6791.43, credit: 7470.57,  date: '21 June 2018 13:56:01'},
          {amount: 12, curr: 'BCA', details: '39c14162fee8440e3815e46eb8ed6719cd41bf6a7a74dbe321c56b7b08b36f59',rate: 6791.43, credit: 7470.57,  date: '21 June 2018 13:56:01'},
          {amount: 12, curr: 'BCA', details: '39c14162fee8440e3815e46eb8ed6719cd41bf6a7a74dbe321c56b7b08b36f59', rate: 6791.43, credit: 7470.57,  date: '21 June 2018 13:56:01'},
          {amount: 1, curr: 'BCA', details: '39c14162fee8440e3815e46eb8ed6719cd41bf6a7a74dbe321c56b7b08b36f59', rate: 6791.43, credit: 7470.57,  date: '21 June 2018 13:56:01'},


        ]
      }
    }
  }
</script>

