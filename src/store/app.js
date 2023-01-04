import Cookies from 'js-cookie'

// languages json files
import enLang from '@/lang/en/index.js'
import esLang from '@/lang/es/index.js'

const app = {
  state: {
    language: Cookies.get('language') || 'en',
    size: Cookies.get('size') || 'medium',
    pos_location_info: Cookies.get('pos_location_info') ? JSON.parse(Cookies.get('pos_location_info')) : {id: null, name: ""}, // counter
  },
  getters: {
    getTrans(state){ // respective language
      if(state.language=='en')
        return enLang
      else if(state.language=='es')
        return esLang
      else
        return enLang // default
    },
    getDefaultTrans(){ // default languge
      return enLang
    },
    getCurrentLanguage(state){
      return state.language
    },
    getPosLocationInfo(state){
      return state.pos_location_info
    },
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    SET_SIZE: (state, size) => {
      state.size = size
      Cookies.set('size', size)
    },
    SET_POS_LOCATION_INFO: (state, info) => {
      state.pos_location_info = {
        id: info.id, 
        name: info.name, 
        short_code: info.short_code, 
        table_type: info.table_type, 
        table_id: info.table_id, 
        table_id_name: info.table_id_name
      };
      Cookies.set('pos_location_id', state.pos_location_info.id);
      Cookies.set('pos_location_info', JSON.stringify(state.pos_location_info))
    },
    RESET_POS_LOCATION_INFO: () => {
      Cookies.remove('pos_location_id');
      Cookies.remove('pos_location_info');
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size)
    },
    setPosLocationInfo({ commit }, info){
      commit('SET_POS_LOCATION_INFO', info)
    },
    resetPosLocationInfo({ commit }){
      commit('RESET_POS_LOCATION_INFO', {})
    },
  }
}

export default app
