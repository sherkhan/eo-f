<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Withdraws</h1>


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
            <td >{{ props.item.details }}</td>
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
            text: 'Amount', align: 'left',value: 'amount'
          },
          { text: 'Details', value: 'details', sortable: false },
          { text: 'Date', value: 'date'},

        ],
        activities: [
          {amount: 1, curr: 'BCA', details: 'Take profit 100.00 USD -- 1000 Bitcoin Atom Sell Order # 684 @ 0.513082', date: '21 June 2018 13:56:01'},
          {amount: 10, curr: 'BCA', details: 'Bitcoin Atom Sell contract @ $0.64122100 - 1000 BCA Max loss @ 1000 USD T/P 100 USD', date: '22 June 2018 13:56:01'},
          {amount: 102, curr: 'BCA', details: 'Joined MTC round # 6', date: '23 June 2018 13:56:01'},
          {amount: 13, curr: 'BCA', details: 'Bitcoin Atom Buy contract @ $0.63348000 - 40000 BCA Max loss @ 10 USD T/P 100 USD', date: '24 June 2018 13:56:01'},
          {amount: 232, curr: 'BCA', details: 'Transfer to investment account', date: '25 June 2018 13:56:01'},
          {amount: 4343, curr: 'BCA', details: 'Joined MTC round # 3', date: '26 June 2018 13:56:01'},
          {amount: 5544, curr: 'BCA', details: 'Transfer to investment account', date: '27 June 2018 13:56:01'}

        ]
      }
    }
  }
</script>

