<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">Trendible</router-link>
            </div>
            <div class="nav-links">
                <ul>
                    <router-link class="link" :to="#">Home</router-link>
                    <router-link class="link" :to="#">Articles</router-link>
                    <router-link class="link" :to="#">Create Post</router-link>
                    <router-link class="link" :to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <menuIcon/>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';

export default {
    name: 'navigation',
    components: {
        menuIcon
    }  
};
</script>

<style lang="scss" scoped>

</style>