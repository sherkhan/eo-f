<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Rewards</h1>


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
            text: 'MTC Amount', align: 'left',value: 'amount'
          },
          { text: 'Balance Activity', value: 'details', sortable: false },
          { text: 'Date', value: 'date'},

        ],
        activities: [
          {amount: 38250239.4998, details: 'MTC round contract reward', date: '21 June 2018 13:56:01'},
          {amount: 6608022.5572897, details: 'MTC round contract reward', date: '22 June 2018 13:56:01'},


        ]
      }
    }
  }
</script>

