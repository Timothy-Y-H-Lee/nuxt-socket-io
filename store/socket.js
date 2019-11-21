export const state = () => ({
  connect: '',
  disconnect: ''
})

export const mutations = {
  onConnect(state) {
    state.connect = 'connected'
  },

  onDisconnect(state, info) {
    state.disconnect = info
  }
}
