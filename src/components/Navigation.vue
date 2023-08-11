<template>
    <div style="height: 60px;"></div>
    <div class="navigation-bar" style="">
        <nav>
            <ul>
                <li><router-link :to="$router.options.routes[0].path"><img src="../assets/img/nav-timetable.png" :class="{'nav-active': $router.options.routes[0].path == $route.fullPath}"></router-link></li>
                <li><router-link :to="$router.options.routes[1].path"><img src="../assets/img/nav-performance.png" :class="{'nav-active': $router.options.routes[1].path == $route.fullPath}"></router-link></li>
                <li><router-link :to="$router.options.routes[2].path"><img src="../assets/img/nav-home.png" :class="{'nav-active': $router.options.routes[2].path == $route.fullPath}"></router-link></li>
                <li><router-link :to="$router.options.routes[3].path"><img src="../assets/img/nav-announcements.png" :class="{'nav-active': $router.options.routes[3].path == $route.fullPath}"></router-link></li>
                <li><router-link :to="$router.options.routes[4].path"><img src="../assets/img/nav-settings.png" :class="{'nav-active': $router.options.routes[4].path == $route.fullPath}"></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>
.nav-active {
    filter:sepia(100%) contrast(500%)
}
.navigation-bar {
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    z-index: 10;
}
nav {
    background: #f5f5f5;
}
nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    height:60px;
}
nav ul li img {
    width: 32px;
}
</style>