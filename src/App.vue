<script setup>
import ApiStyle from './components/ApiStyle.vue';
import BindingComponent from './components/BindingComponent.vue';
import BindingDemo from './components/BindingDemo.vue';
import BmiCalculator from './components/BmiCalculator.vue';
import ClockComponent from './components/ClockComponent.vue';
import CountComponent from './components/CountComponent.vue';
import EventBinding from './components/EventBinding.vue';
import FirstComponent from './components/FirstComponent.vue';
import HasBook from './components/HasBook.vue';
import SecondComponent from './components/SecondComponent.vue';
import ThirdComponent from './components/ThirdComponent.vue';
import WeekDay from './components/WeekDay.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
    <h2 id="apph2">Hello, Vue!!</h2>
    <RouterLink to="/">首頁</RouterLink> |
    <RouterLink to="/about">關於我們</RouterLink> |
    <RouterLink to="/xyz">聯絡我們</RouterLink> |
    <RouterLink :to="{name: 'home'}">首頁</RouterLink> |
    <RouterLink :to="{name: 'about'}">關於我們</RouterLink> |
    <RouterLink :to="{name: 'contact'}">聯絡我們</RouterLink> |
    <RouterLink :to="{name: 'member', params: {id:'10'}}">會員中心</RouterLink> |

    <hr>
    <RouterView />
    <!-- <HomeView />
    <AboutView /> 
    <ContactView /> -->

    <!-- <ClockComponent />
    <BmiCalculator />
    <EventBinding /> 
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
    <ApiStyle />    
    <CountComponent />
    <BindingComponent/>
    <WeekDay />
    <HasBook />
    <hr>
    <BindingDemo />  -->
</template>

<style scoped>
#apph2 {
    color: red;
}
</style>
