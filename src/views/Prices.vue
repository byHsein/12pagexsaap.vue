<template>
    <div>
        <Navbar />
        <div>
            <div class="bg-no-repeat bg-top h-[35vh] vawe-tb">
                <div class="bg-no-repeat bg-top h-[30vh] vawee">
                    <div class="bg-no-repeat bg-right relative h-[30vh] right-[130px] details"></div>
                    <div class="mx-auto max-w-[1200px] relative top-[-250px] my-0 px-5">
                        <h1 class="pappins text-[52px] leading-[66px] font-bold">
                            Prices
                        </h1>
                        <p class="verdana text-base leading-[26px] font-normal text-Custom pt-[17px]">
                            Home / Prices
                        </p>
                    </div>
                </div>
                <img class="w-[43px] h-[43px] absolute right-[500px] top-[230px]" src="../assets/icon-company/Oval.png" alt=""/>
                <img class="w-[30px] h-[30px] absolute right-[165px] top-[140px]" src="../assets/icon-company/Oval1.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[412px] top-[335px]" src="../assets/icon-company/Oval2.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[620px] top-[230px]" src="../assets/icon-company/Oval4.png" alt=""/>
            </div>          
        </div>
        <div class="mx-auto max-w-[1200px] px-5">
            <div>
                <h1 class="pappins text-center text-[36px] pt-5 leading-[54px] font-bold">Digital Innovation at Speed and Cost <br /><span style="color: #3b00ad">Our Additional Solutions</span>
                </h1>
            </div>
            <div class="block lg:flex">
                <div>
                    <img class="w-[375px] md:w-[663.61px] mx-auto pt-8 lg:ml-[-45px] md:h-[721px] h-[500px]" src="../assets/bg-company/prices-img.jpg" alt=""/>
                </div>
                <div>
                    <VtwoDropdown />
                </div>
            </div>
        </div>
        <div class="pb-[128px] pt-[117px]">
            <OfferCard />
        </div>
        <DropDown />
        <div class="pt-[300px] lg:pt-42">
            <Features />
        </div>
        <div class="bg-white-500 h-[446px] mt-[162px]">
            <Carousel />
        </div>
        <sponsor-ship/>
        <div class="pt-[200px]">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import VtwoDropdown from "@/components/VtwoDropdown.vue";
import OfferCard from "@/components/OfferCard.vue";
import DropDown from "@/components/DropDown.vue";
import Features from "@/components/Features.vue";
import Carousel from "@/components/Carousel.vue";
import SponsorShip from "@/components/SponsorShip.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Navbar,
        VtwoDropdown,
        OfferCard,
        DropDown,
        Features,
        Carousel,
        SponsorShip,
        Footer
    },
};
</script>

<style></style>
