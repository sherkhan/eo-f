<template>
  <v-container fluid grid-list-md>
    <h1 class="display-2 mb-4">Settings</h1>

    <v-alert outline
      :value="alert"
      type="success"
      transition="scale-transition"
    >
      Sucsess.
    </v-alert>

      <v-tabs
        slot="extension"
        v-model="tab"

        grow
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-container fluid>
              <v-layout row>
                <v-flex xs12 sm3>
                  <v-subheader>Your Marinecoin wallet</v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field class="mt-negative-1"
                    prefix="MTC"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-btn color="primary" @click="alert = !alert">update</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-container fluid>
              <v-layout row>

                <v-flex >
                  <v-text-field

                    label="Name"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>

                <v-flex >
                  <v-text-field

                    label="Surname"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>

                <v-flex >
                  <v-text-field

                    label="Email"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>

                <v-flex >
                  <v-btn color="primary" @click="alert = !alert">update</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="password"
                :append-icon="p1 ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (p1 = !p1)"
                :type="p1 ? 'password' : 'text'"
                name="input-10-1"
                label="Enter your password"
                hint="At least 8 characters"
                min="8"
                counter
              ></v-text-field>
              <v-text-field
                v-model="passwordconfirm"
                :append-icon="p2 ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (p2 = !p2)"
                :type="p2 ? 'password' : 'text'"
                name="input-10-1"
                label="Confirm your password"
                hint="At least 8 characters"
                min="8"
                counter
              ></v-text-field>
              <v-layout row>

                <v-flex >
                  <v-btn color="primary" @click="alert = !alert">update</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        alert: false,
        p1: true,
        p2: true,
        tab: null,
        valid: false,
        password: '',
        passwordconfirm: '',
        items: [
          'Wallets', 'Personal', 'Security',
        ],
        passwordRules: [
          this.password != this.passwordconfirm || 'passwords is not the same'

        ],
      }
    }
  }
</script>
<style>
  .mt-negative-1 {
    margin-top: -10px;
  }
</style>
