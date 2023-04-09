<template>
    <div class="bg-no-repeat bg-center h-[639.17px] mt-[127.83px] case-d-bg" >
        <div class="mx-auto max-w-[1200px] px-5 my-0">
            <h1 class="text-center pappins pb-[42px] text-[36px] leading-[54px] font-bold pt-[106.17px]">Recent Cases</h1>
                <div class="mx-auto max-w-[1200px] px-5 my-0">
                    <carousel :items-to-show="1">
                        <slide v-for="slide in 3" :key="slide">
                                <div class="w-full lg:w-[275px] h-[233px]">
                                    <img src="../assets/bg-company/resent1.jpg" alt="">
                                </div>
                                <div class="w-full lg:w-[275px] h-[233px]">
                                    <img src="../assets/bg-company/resent2.jpg" alt="">
                                </div>
                                <div class="w-full lg:w-[275px] h-[233px]">
                                    <img src="../assets/bg-company/resent3.jpg" alt="">
                                </div>
                                <div class="w-full lg:w-[275px] h-[233px]">
                                    <img src="../assets/bg-company/resent4.jpg" alt="">
                                </div>
                        </slide>
                    
                        <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                    </carousel>
                </div>
            </div>
        </div>    
</template>


<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    }    

</script>

<style>
.carousel__pagination-button{
    display: flex;
    margin:0 16px;
    margin-top: 46px;
    width:8px;
    height: 8px;
    border-radius: 100% !important;
    background-color:  rgba(116, 116, 116, 0.45195)!important;
}
.carousel__pagination-button::after{
    opacity: 0;
}

.carousel__pagination-button--active {
    background-color: #3B00AD!important;
    width: 14px;
    height: 14px;
    margin-top: 46px;
}
  
.carousel__next{
    overflow:  hidden !important;
}
.carousel__icon{
    opacity: 0;
}
.case-d-bg{
    background-image: url('../assets/bg-company/case-d-bg.png');
}
</style>