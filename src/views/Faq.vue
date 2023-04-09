<template>
    <div>
        <Navbar/>
        <div>
            <div class="bg-no-repeat bg-top h-[35vh] vawe-tb">
                <div class="bg-no-repeat bg-top h-[30vh] vawee">
                    <div class="bg-no-repeat bg-right relative h-[30vh] right-[130px] details"></div>
                    <div class="mx-auto max-w-[1200px] relative top-[-250px] my-0 px-5">
                        <h1 class="pappins text-[52px] leading-[66px] font-bold">
                            FAQ
                        </h1>
                        <p class="verdana text-base leading-[26px] font-normal text-Custom pt-[17px]">
                            Home / Pages / FAQ
                        </p>
                    </div>
                </div>
                <img class="w-[43px] h-[43px] absolute right-[500px] top-[230px]" src="../assets/icon-company/Oval.png" alt=""/>
                <img class="w-[30px] h-[30px] absolute right-[165px] top-[140px]" src="../assets/icon-company/Oval1.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[412px] top-[335px]" src="../assets/icon-company/Oval2.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[620px] top-[230px]" src="../assets/icon-company/Oval4.png" alt=""/>
            </div>
        </div>
        <div class="pt-[59.07px]">
            <div class="mx-auto max-w-[1200px] my-0 px-5">
                <div>
                    <h1 class="pappins text-[36px] font-bold leading-[54px] text-center">Easy to get started<br> <span style="color:#3B00AD">Frequently Asked Questions</span></h1>
                </div>
                <div class="block lg:flex ">
                    <div>
                        <div>
                            <img class="mx-auto max-w-[342px] md:max-w-[535px] pt-[50px]" src="../assets/bg-company/bs.png" alt="">
                        </div>
                        <img class="max-w-[355px] md:max-w-[632px] h-[300px] md:h-[474px] rounded-md mx-auto relative top-[-200px] lg:top-[-320px] right-[1px] lg:right-[290px]" src="../assets/bg-company/img2.jpg" alt="">
                    </div>
                        <vtwo-dropdown/>
                </div>
            </div>
        </div>
        <DropDown/>
        <div class="pt-[800px] lg:pt-0">
            <QuestionForm/>
        </div>
        <div class="pt-[230px]">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import VtwoDropdown from '@/components/VtwoDropdown.vue';
import DropDown from '@/components/DropDown.vue';
import QuestionForm from '@/components/QuestionForm.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navbar,
        VtwoDropdown,
        DropDown,
        QuestionForm,
        Footer
    },
};
</script>

<style>

</style>
