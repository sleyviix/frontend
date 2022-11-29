import {getters} from '../plugins/common/base.js'


const state = () => ({
  all: []
});

export default {
  state,
  mutations: {
    SET_PARKINGPLACES(state, parkingPlaces) {
      state.all = parkingPlaces
    }
  },
  actions: {
    async ENSURE({commit}) {
        commit('SET_PARKINGPLACES', [
          {
          "id": 1,
          "name": "Chandler Larson",
          "post": "37757",
          "coordinates": {
            "lng": -1.824377,
            "lat": 52.488583
          },
          "total_spots": 0,
          "free_spots": 0
        },
        ]
        )
      }
    },
  getters: {
    ...getters
  }
}
