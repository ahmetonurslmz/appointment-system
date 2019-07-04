export default {
    computed: {
        suser() {
            return this.$store.state.sessionUser.data
        }
    }

}