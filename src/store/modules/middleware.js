export default{
    state: {
        user: {
            login: false,
        }

    },
    getters: {
        auth(state) {
            return state.user
        }
    }
}