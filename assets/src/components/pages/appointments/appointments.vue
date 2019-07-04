<template>

</template>
<script>
export default {
    created() {
        this.$store.dispatch('appointmentsDetails')
    },
    computed: {
        appointments() {
            return this.$store.state.appointments.data
        }
    }
}
</script>
