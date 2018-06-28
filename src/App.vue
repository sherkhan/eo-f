<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in pages">
          <v-layout v-if="item.heading" :key="item.heading" row align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item.icon"

          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content @click="$router.push(child.link)">
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="$router.push(item.link)" >

              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>

          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

          <img class="toolbar__logo" src="static/images/eol.png" alt="Exchange options">


        <span class="hidden-sm-and-down">Exchange Options</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-menu bottom offset-y>
        <v-btn flat slot="activator">Sherkhan <v-icon right dark>settings</v-icon></v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in settings" :key="i" @click="$router.push(item.link)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>


    </v-toolbar>
    <v-content>
      <v-container fluid >
        <v-layout >
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<style lang="scss">
  th:focus {
    outline: none
  }
  .toolbar{
    &__logo {
      display: inline-flex;
      justify-content: center;
      position: relative;
      text-align: center;
      vertical-align: middle;
      max-width: 60px
    }
  }
</style>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      pages: [
        { icon: 'home', text: 'Home' , link: '/'},
        { icon: 'trending_up', text: 'Markets', link: '/markets' },
        { icon: 'visibility', text: 'Overview', link: '/overview' },
        { icon: 'history',
          text: 'History',
          children: [
            { icon: 'remove', text: 'Activity', link: '/history/activity'},
            { icon: 'remove', text: 'Deposits' , link: '/history/deposits'},
            { icon: 'remove',text: 'Rewards' , link: '/history/rewards'},
            { icon: 'remove', text: 'Withdraws', link: '/history/withdraws'}
          ]
        },
        { icon: 'attach_money',
          text: 'Add funds',
          link:'/addfunds'

        },
        { icon: 'replay', text: 'Rounds', link: '/rounds' },
        { icon: 'publish', text: 'Orders', link: '/orders' },
        { icon: 'move_to_inbox', text: 'Cash out', link: '/cashout' }
      ],
      settings: [
        { title: 'Settings', link: '/settings' },
        { title: 'Logout' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
