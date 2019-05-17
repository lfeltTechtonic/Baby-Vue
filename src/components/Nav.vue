<template>
  <v-toolbar color="grey darken-1" dark>
    <v-toolbar-title>Baby Cooke</v-toolbar-title>
    <v-spacer></v-spacer>
     
    <v-toolbar-items class="hidden-sm-and-down">
        
        <router-link to="/info">
      <v-btn flat>Info</v-btn>
        </router-link>

       <router-link to="/photos">
      Photos
      </router-link>

       <router-link to="/count">
      <v-btn flat>Counting Down</v-btn>
      </router-link>

    </v-toolbar-items>
  </v-toolbar>
</template>