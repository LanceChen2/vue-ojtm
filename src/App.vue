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

</script>

<template>
    <h2>Hello, Vue!!</h2>
    <ClockComponent />
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
    <BindingDemo /> 
</template>

<style scoped></style>
