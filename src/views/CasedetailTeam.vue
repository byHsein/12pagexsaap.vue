<template>
    <div>
        <Navbar/>
        <div class="bg-no-repeat bg-top h-[35vh] vawe-tb">
            <div class="bg-no-repeat bg-top h-[30vh] vawee">
                <div class="bg-no-repeat bg-right relative h-[30vh] right-[130px] details"></div>
                <div class="mx-auto max-w-[1200px] relative top-[-250px] my-0 px-5">
                    <h1 class="pappins text-[52px] leading-[66px] font-bold">
                        Case Details
                    </h1>
                    <p class="verdana text-base leading-[26px] font-normal text-Custom pt-[17px]">
                        Pages / Case Details
                    </p>
                </div>
            </div>
            <img class="w-[43px] h-[43px] absolute right-[500px] top-[230px]" src="../assets/icon-company/Oval.png" alt=""/>
            <img class="w-[30px] h-[30px] absolute right-[165px] top-[140px]" src="../assets/icon-company/Oval1.png" alt=""/>
            <img class="w-[15px] h-[15px] absolute right-[412px] top-[335px]" src="../assets/icon-company/Oval2.png" alt=""/>
            <img class="w-[15px] h-[15px] absolute right-[620px] top-[230px]" src="../assets/icon-company/Oval4.png" alt=""/>
        </div>
        <div class="mx-auto max-w-[1200px] px-5 my-0 ">
            <div>
                <h1 class="pappins pt-[55.07px] font-bold text-[36px] leading-[54px] text-center " style="color: #1F1F1F;">Think. Research. Doing the Best Way</h1>
                <p class="verdana text-base pt-2 text-center px-0 lg:px-[210px] font-normal text-Custom">
                    Integer mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo
                </p>
                <div>
                    <VidioPlayer/>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-[1200px] px-5 my-0">
            <div>
                <h1 class="pappins font-bold pt-[129px] text-[36px] leading-[54px] text-center" style="color: #1F1F1F;">Meet the Team</h1>
                <p class="verdana text-base pt-2 px-0 lg:px-[230px] font-normal text-center text-Custom " >
                    Maximus mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo
                </p>
            </div>
        </div>
        <TeamCard/>
        <information/>
        <div class="relative z-0 mt-[-50px] bg-white">
            <Carousel/>
        </div>
        <div class="pt-36">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import VidioPlayer from '@/components/VidioPlayer.vue';
import TeamCard from '@/components/TeamCard.vue'
import information from '@/components/information.vue';
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navbar,
        VidioPlayer,
        TeamCard,
        information,
        Carousel,
        Footer
    }
}
</script>

<style>

</style>