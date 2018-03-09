<template>
    <div class="pc-non-inferiority">
        <label class="pc-non-inf-label">
            Use non inferiority test
            <input type="checkbox" v-model="enabled">
        </label>
    </div>
</template>

<script>
export default {
    props: [ 'lockedField' ],
    data () {
        return {
        }
    },
    computed: {
        enabled: {
            get () {
                return this.$store.state.nonInferiority.enabled
            },
            set (newValue) {
                this.$store.dispatch('change:noninferiority', {
                    prop: 'enabled',
                    value: newValue
                })
            }
        },
        isRelative () {
            return this.$store.state.nonInferiority.selected == 'relative'
        }
    }
}

</script>

<style>

.pc-non-inf-label {
    white-space: nowrap;
}

.pc-non-inf-treshold {
    display: flex;
    align-items: center;
}

.pc-non-inf-treshold-input {
    margin-left: 5px;
}

</style>
