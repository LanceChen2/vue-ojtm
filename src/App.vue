<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
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
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import DirectiveComponent from './components/DirectiveComponent.vue';
import ChildComponent from './components/ChildComponent.vue';
import { ref } from 'vue';
import FancyButton from './components/FancyButton.vue';
import CategoriesComponent from './components/CategoriesComponent.vue';

const message = ref('這個訊息來自App.vue')
const count = ref(50)
const myEventHandler = data => {
    //data使用接收子組件傳過來的資料
    console.log(data);
}

const likesEventHandler = data => {
    count.value = data
}

</script>

<template>
    <HeaderComponent></HeaderComponent>
    <JumbotronComponent></JumbotronComponent>
    <div class="container mt-3">
    <RouterView></RouterView>
    <hr>
    <CategoriesComponent></CategoriesComponent>

    <!-- <FancyButton>
        <i class="bi bi-airplane-fill"></i> 送出
    </FancyButton>
    <FancyButton>
        <i class="bi bi-apple"></i> 登入
    </FancyButton>
    <FancyButton>
        <i class="bi bi-arrow-down-left-circle-fill"></i> 加入購物車
    </FancyButton> -->
    <!-- <DirectiveComponent></DirectiveComponent> -->
    <!-- :message="message" -->
     <!-- message, likes是自訂的屬性 -->
    <!-- <ChildComponent :message :likes="count" @myEvent="myEventHandler" @likesEvent="likesEventHandler"></ChildComponent>  -->
    <!-- myEvent自訂的事件, myEventHandler是myEvent事件觸發後會執行的func -->
    <!-- myEvent事件會在子組件透過 emit('myEvent')來觸發 -->
    

    <!-- <h2 id="apph2">Hello, Vue!!</h2> -->
    <!-- <RouterLink to="/">首頁</RouterLink> |
    <RouterLink to="/about_ispan">關於我們</RouterLink> |
    <RouterLink to="/contact">聯絡我們</RouterLink> | -->
    <!-- <RouterLink :to="{name: 'home'} " activeClass="active">首頁</RouterLink> |
    <RouterLink :to="{name: 'about'}" activeClass="active">關於我們</RouterLink> |
    <RouterLink :to="{name: 'contact'}" activeClass="active">聯絡我們</RouterLink> |
    <RouterLink :to="{name: 'member', params: {id:'10'}}" activeClass="active">會員中心</RouterLink> |
    <RouterLink :to="{name: 'todos' }" activeClass="active">待做事項</RouterLink> | -->

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
    </div>
    <FooterComponent></FooterComponent>
</template>

<style scoped>
#apph2 {
    color: red;
}

.active{
    background-color: yellowgreen;
}
</style>
