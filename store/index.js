export const state = () => ({})

export const getters = {

}

export const mutations = {

}

export const actions = {
    async getEvents() {
        let res = await this.$axios.get('/activities?limit=6&offset=0')
        return res;
    }
  }