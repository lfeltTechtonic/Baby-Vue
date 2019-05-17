<template>
  <v-app>
    <v-content>
      <Nav></Nav>
      <HelloWorld/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav
  },
  data () {
    return {
      //
    }
  }
}
</script>
