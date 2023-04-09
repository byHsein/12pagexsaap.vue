<template>
    <div>
        <Navbar/>
        <div>
            <div class="bg-no-repeat bg-top h-[35vh] vawe-tb">
                <div class="bg-no-repeat bg-top h-[30vh] vawee">
                    <div class="bg-no-repeat bg-right relative h-[30vh] right-[130px] details"></div>
                    <div class="mx-auto max-w-[1200px] relative top-[-250px] my-0 px-5">
                        <h1 class="pappins text-[52px] leading-[66px] font-bold">
                            Case Details
                        </h1>
                        <p class="verdana text-base leading-[26px] font-normal text-Custom pt-[17px]">
                            Home / Pages / Case Detail
                        </p>
                    </div>
                </div>
                <img class="w-[43px] h-[43px] absolute right-[500px] top-[230px]" src="../assets/icon-company/Oval.png" alt=""/>
                <img class="w-[30px] h-[30px] absolute right-[165px] top-[140px]" src="../assets/icon-company/Oval1.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[412px] top-[335px]" src="../assets/icon-company/Oval2.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[620px] top-[230px]" src="../assets/icon-company/Oval4.png" alt=""/>
            </div>
        </div>
        <div class="mx-auto max-w-[1200px] px-5 my-0">
            <div class="block lg:flex justify-center gap-[25px]">
                <div class="grid pt-[100.07px]  grid-cols1 gap-[50px]">
                    <img class=" mx-auto lg:w-[474px] h-[330]" src="../assets/bg-company/traffic3.jpg" alt="">
                    <img class=" mx-auto lg:w-[474px] h-[330]" src="../assets/bg-company/traffic2.jpg" alt="">
                    <img class=" mx-auto lg:w-[474px] h-[330]" src="../assets/bg-company/traffic1.jpg" alt="">
                </div>
                <div class="w-full lg:pt-[84.07px] pl-0 lg:pl-[71px]  lg:w-1/2">
                    <h1 class="pappins font-bold text-[36px] leading-[51px] " style="color: #1F1F1F;">Traffic analysis for International Target  Sales</h1>
                    <p class="verdana  pt-[13px]  pr-0 lg:pr-[50px] font-normal text-base leading-[26px]" style="color:#747474;">
                        Malesuada bibendum arcu vitae elementum curabitur vitae. Quis enim lobortis scelerisque fermentum dui faucibus. In tellus integer feugiat scelerisque varius. Eget mi proin sed libero enim sed faucibus turpis. Nunc aliquet bibendum enim facilisis gravida neque convallis
                    </p>
                    <div class="flex gap-12 pt-[10px]">
                        <h1 class="pappins text-base font-bold">Client:</h1>
                        <h1 class="pappins text-base font-normal" style="color:#1F1F1F">“Aenean” Company</h1>
                    </div>
                    <div class="flex gap-[60px] pt-[10px]">
                        <h1 class="pappins text-base font-bold">Date:</h1>
                        <h1 class="pappins text-base font-normal" style="color:#1F1F1F">January-March, 2020</h1>
                    </div>
                    <div class="flex gap-[35px] pt-[10px]">
                        <h1 class="pappins text-base font-bold">Website:</h1>
                        <h1 class="pappins text-base font-normal" style="color:#1F1F1F">aenean.com</h1>
                    </div>
                    <div class="flex gap-[29px] pt-[10px]">
                        <h1 class="pappins text-base font-bold">Services:</h1>
                        <h1 class="pappins text-base font-normal" style="color:#1F1F1F">
                            Data Analysis, SEO Optimization, Redevelopment Custom Applications, Traffic Tracking, Optimization Delyvery Zones
                        </h1>
                    </div>
                    <div class="flex pl-[99px] gap-[21px] pt-[39px]">
                        <img src="../assets/icon-home/Facebook.png" alt="">
                        <img src="../assets/icon-home/Instagram.png" alt="">
                        <img src="../assets/icon-home/Twitter.png" alt="">
                    </div>
                    <div class="flex pt-[52px] gap-[30px]">
                        <h1 class="pappins font-bold text-base " style="color: #1F1F1F;">Client<br> review:</h1>
                        <img class="w-[60px] h-[60px] rounded-[30px] " src="../assets/bg-company/woman2.png" alt="">
                        <div>
                            <h1 class="pappins font-bold text-[20px] leading-[30px]">Miranda Frasilian</h1>
                            <p class="pappins text-base font-normal" style="color: #747474;">CEO</p>
                        </div>
                    </div>
                    <div class="verdana pt-[23px] px-0 lg:px-[70px] text-[20px] leading-[32px] font-normal"><i>
                        “Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies”
                    </i></div>
                </div>
            </div>
        </div>
        <CarouselImage/>
        <CaseBlog/>
        <SubcribeForm/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import CarouselImage from '@/components/CarouselImage.vue';
import CaseBlog from '@/components/CaseBlog.vue';
import SubcribeForm from '@/components/SubcribeForm.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navbar,
        CarouselImage,
        CaseBlog,
        SubcribeForm,
        Footer
    }
}
</script>

<style>

</style>