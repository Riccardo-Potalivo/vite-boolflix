<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <h2 class="text-danger ">Boolflix</h2>

            <div class="d-flex">
                <input class="form-control me-2 "
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    v-model="searchValue"
                    @keyup.enter="filterName">
                <button class="btn btn-outline-danger" @click="filterName">Search</button>
            </div>

        </div>
    </nav>
</template>

<script>
    import { store } from '../data/store.js';

    export default {
        name: 'NavbarComponent',

        methods: {
            filterName() {
                store.params.query = this.searchValue;
                this.$emit('filterChange')            
            }
        },

        
    }
</script>

<style lang="scss" scoped>

</style>