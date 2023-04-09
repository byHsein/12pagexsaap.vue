<template>
    <div>
        <Navbar/>
        <div>
            <div class="bg-no-repeat bg-top h-[35vh] vawe-tb">
                <div class="bg-no-repeat bg-top h-[30vh] vawee">
                    <div class="bg-no-repeat bg-right relative h-[30vh] right-[130px] details"></div>
                    <div class="mx-auto max-w-[1200px] relative top-[-250px] my-0 px-5">
                        <h1 class="pappins text-[52px] leading-[66px] font-bold">
                            Services
                        </h1>
                        <p class="verdana text-base leading-[26px] font-normal text-Custom pt-[17px]">
                            Home / Pages / Services
                        </p>
                    </div>
                </div>
                <img class="w-[43px] h-[43px] absolute right-[500px] top-[230px]" src="../assets/icon-company/Oval.png" alt=""/>
                <img class="w-[30px] h-[30px] absolute right-[165px] top-[140px]" src="../assets/icon-company/Oval1.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[412px] top-[335px]" src="../assets/icon-company/Oval2.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[620px] top-[230px]" src="../assets/icon-company/Oval4.png" alt=""/>
            </div>
        </div>
        <ServicesCard/>
        <div class="h-[132vh]" >
            <div class="bg-no-repeat  w-full relative top-[185.23px] bg-top shape" >
                <div class="h-[85vh] relative top-[185px]  " style="background-color: #F9FAFF;">
                    <div class="bg-no-repeat relative top-[100px] bg-bottom h-full shape " >
                        <div class="mx-auto max-w-[1200px] my-0 px-5">
                            <div class="mt-[-100px]">
                                <h1 class="pappins relative top-[-140px] text-[36px] font-bold leading-[54px] text-center">Full-Service Website<br> <span style="color:#3B00AD">Domain and Hosting</span></h1>
                            </div>
                            <div class="block lg:flex gap-0 lg:gap-[100px]">
                                <div class="w-full   lg:w-1/2">
                                    <img class="mx-auto w-full block lg:hidden h-[300px] sm:h-[500px] md:h-[600px] lg:h-[716px] pt-[50px]" src="../assets/bg-company/hosting.png" alt="">    
                                    <img class="mx-auto w-full ml-0 lg:ml-[-580px] hidden lg:block absolute lg:w-[1160.1px] h-[716px] mt-[-100px]" src="../assets/bg-company/hosting.png" alt="">    
                                </div>
                                <div class="top-0 lg:top-[-85px] relative">
                                    <services-dropdown/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[80vh] bg-white pt-[400px] lg:pt-0">
            <div class="mx-auto max-w-[1200px] px-5 ">
                <div>
                    <h1 class="pappins pt-[54px] text-[36px] leading-[54px] text-center font-bold " style="color: #1F1F1F;">
                        Content Management <br><span style="color:#FF3D00 ;">SEO Services</span>
                    </h1>
                </div>
                <div class="block lg:flex gap-2" >     
                    <div>
                        <img class="w-full pt-[53px] mx-auto block lg:hidden" src="../assets/bg-company/service-img2.jpg" alt="">
                    </div>
                    <div class="w-full lg:w-1/2 ">
                        <services-dropceo/>
                    </div>   
                    <div class="w-1/2 mt-[140px]">
                        <img class="absolute hidden w-full lg:w-[500px]  xl:w-[925.06px] lg:block right-0  h-[556.41px] "  src="../assets/bg-company/service-img2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[131vh] lg:pt-[200px] sm:pt-[1300px]  pt-[900px]" >
            <div class="bg-no-repeat  w-full relative top-[185.23px] bg-top shape">
                <div class="h-[85vh] relative top-[185px]  " style="background-color: #F9FAFF;">
                    <div class="bg-no-repeat relative top-[100px] bg-bottom h-full  shape">
                        <div class="mx-auto max-w-[1200px] my-0 px-5">
                            <div class="mt-[-100px]">
                                <h1 class="pappins relative top-[-140px] text-[36px] font-bold leading-[54px] text-center">Web and Software Development<br> <span style="color:#3B00AD">Applications and Testing</span></h1>
                            </div>
                            <div class="block lg:flex gap-0 lg:gap-[40px]">
                                <div class="w-full   lg:w-1/2">
                                    <img class="mx-auto w-full block lg:hidden h-[300px] sm:h-[500px] md:h-[600px] lg:h-[716px] pt-[50px]" src="../assets/bg-company/testing.jpg" alt="">    
                                    <img class="mx-auto w-full ml-0 lg:ml-[-580px] hidden lg:block absolute lg:w-[1295.1px] h-[716px] mt-[-100px]" src="../assets/bg-company/testing.jpg" alt="">    
                                </div>
                                <div class=" lg:mt-[-115px]">
                                    <services-droptesting/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-[1250px] md:pt-[1800px] lg:pt-0">
            <FreeTrial/>
        </div>
        <div class="pt-[200px]">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ServicesCard from '@/components/ServicesCard.vue';
import ServicesDropdown from '@/components/ServicesDropdown.vue'
import ServicesDropceo from '@/components/ServicesDropceo.vue';
import ServicesDroptesting from '@/components/ServicesDroptesting.vue'
import FreeTrial from '@/components/FreeTrial.vue';
import Footer from '@/components/Footer.vue';



export default {
    components:{
    Navbar,
    ServicesCard,
    ServicesDropdown,
    ServicesDropceo,
    ServicesDroptesting,
    FreeTrial,
    Footer,
    Footer
}
}
</script>

<style>
.shape{
    background-image: url('../assets/bg-company/Shape.png');
}
</style>