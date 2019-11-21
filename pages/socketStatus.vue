<template>
  <div class="container">
    <h3>Socket Status</h3>
    <h4>On Connect</h4>
    <div>{{ connect }}</div>

    <h4>On Disconnect</h4>
    <div>{{ disconnect }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    connect: (state) => state.socket.connect,
    disconnect: (state) => state.socket.disconnect
  }),
  mounted() {
    this.socket = this.$nuxtSocket({})
  }
}
</script>
