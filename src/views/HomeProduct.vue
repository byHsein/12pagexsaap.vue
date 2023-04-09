<template>
    <div>
        <navbar-home />
        <div
            class="mx-auto px-5 my-0 max-w-[1200px] pt-[100px] md:pt-[220px] mt-[-350px] ">
            <h1 class="pappins text-[36px] text-center font-bold md:pt-0 leading-[50px] mx-auto pt-[50px] md:pr-0">
                Create and Track Content
            </h1>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-[82px]">
                <div>
                    <img class="mx-auto pt-[100px]" src="../assets/icon-home/web-content.png"/>
                    <h1 class="mx-auto text-center font-bold pt-[15px] pappins text-[20px]">
                        Web Content Management
                    </h1>
                    <p class="mx-auto text-center text-base verdana text-Custom leading-[24px] pt-[7px]">
                        Donec gravida est ut velit fringilla, et venenatis nisi
                        euismod. Aenean est turpis, rhoncus quis scelerisque
                    </p>
                </div>
                <div>
                    <img class="mx-auto pt-[100px]" src="../assets/icon-home/digital.png"/>
                    <h1 class="mx-auto text-center font-bold pt-[15px] pappins text-[20px]">
                        Digital Asset Management
                    </h1>
                    <p class="mx-auto text-center text-base verdana text-Custom leading-[24px] pt-[7px]" >
                        Donec gravida est ut velit fringilla, et venenatis nisi
                        euismod. Aenean est turpis, rhoncus quis scelerisque ac,
                        eleifend quis lorem
                    </p>
                </div>
                <div>
                    <img class="mx-auto pt-[100px]" src="../assets/icon-home/headles.png"/>
                    <h1 class="mx-auto text-center font-bold pt-[15px] pappins text-[20px]">
                        Headless CMS
                    </h1>
                    <p class="mx-auto text-center text-base verdana text-Custom leading-[24px] pt-[7px]">
                        DDonec gravida est ut velit fringilla, et venenatis nisi
                        euismod. Aenean est turpis, rhoncus quis
                    </p>
                </div>
            </div>
        </div>
        <div
            class="bg-no-repeat pt-[100px] bg-center top-[150px] vawe21 z-20 relative h-full">
            <div
                class="bg-no-repeat h-full w-screen z-10 bg-center relative top-[-130px] vawe1">
                <div class="mx-auto my-0 px-5 max-w-[1200px]">
                    <div class="block lg:flex">
                        <div class="pt-24 lg:pt-[130px] relative lg:right-[100px] xl:right-[50px] 2xl:right-[150px]">
                            <img class="rounded-md w-[330px] md:h-[370px] md:w-[550px] mx-auto rounded-x-xl rounded-y-xl lg:w-[2500px] h-[250px] lg:h-[420px] lg:pl-1 right-[100px]" src="../assets/bg-home/img2.jpg"/>
                        </div>
                        <div class="relative pt-[100px]">
                            <h1 class=" pappins text-[36px] pt-0 lg:pt-[100px] leading-[51px] font-bold">
                                Why You Should Use a
                                <span style="color: #ff3d00">Content Management System ?</span>
                            </h1>
                            <p class=" text-Custom text-base leading-[26px] pt-8 lg:pt-3">
                                Aenean elementum, quam in commodo accumsan,
                                neque felis fringilla quam, iaculis euismod
                                purus lorem sagittis turpis. Quisque ut
                                ultricies ex. Fusce dictum consequat ipsum et
                                efficitur. Morbi vitae nibh vitae est venenatis
                                elementum vel ut orci
                            </p>
                            <button class="lg:ml-0 pt-[18px] pb-[17px] verdana text-base font-bold rounded-xl mt-5 px-[50px] bg-blue-violet hover:bg-violet-700 duration-75 delay-75 text-[#ffff]">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-[1200px] my-0 px-5">
            <h1 class="pappins font-bold pt-[184px] text-[36px] text-center">
                Who Uses Content Management
            </h1>
            <p class="verdana text-base leading-[24px] text-Custom pt-[5px] lg:px-[260px] text-center">
                Aliquam ut porttitor leo a. Diam donec adipiscing tristique
                risus nec feugiat in. Dui ut ornare lectus sit. Enim sit amet
                venenatis urna. Enim eu turpis egestas pretium aenean
            </p>
            <vidio-player/>
        </div>
        <carousel/>
        <div class="bg-no-repeat h-screen bg-right-top relative line1 ">
            <div class="bg-no-repeat h-screen bg-right-top relative top-[80px] line2">
                <div class="mx-auto max-w-[1200px] px-5 my-0 block lg:flex">
                    <div class="pt-[150px] lg:w-1/2">
                        <h1 class="text-[36px] font-bold pappins leading-[51px]">
                            Indexing, Search, Retrieval
                        </h1>
                        <p style="color: #747474;" class="verdana text-base pt-5 font-normal lg:pr-[50px] leading-[26px]">
                            Sed libero enim sed faucibus turpis in.
                            Turpis massa sed elementum tempus egestas sed sed
                        </p>
                        <div class="flex gap-[17px]  ">
                            <div>
                                <font-awesome-icon class="text-orange-ctm ml-[20px] mt-[18px] font-black text-[24px] leading-[24px] " :icon="['fas', 'check']" /> 
                            </div>
                            <div>
                                <h1 class="pl-3 pt-4 font-bold pappins text-[20px] leading-[30px]">User Groups and Permissions</h1>
                                <p style="color: #747474;" class="pl-3 verdana text-base font-normal lg:pr-[50px] leading-[26px]">Ultrices dui sapien eget mi proin. Aliquam malesuada bibendum arcu vitae elementum curabitur</p>
                            </div>
                        </div>
                        <div class="flex gap-[17px]  ">
                            <div>
                                <font-awesome-icon class="text-orange-ctm ml-[20px] mt-[18px] font-black text-[24px] leading-[24px] " :icon="['fas', 'check']" />
                            </div>
                            <div>
                                <h1 class="pl-3 pt-[13px] font-bold pappins text-[20px] leading-[30px]">Integration with Existing Software Solutions</h1>
                                <p style="color: #747474;" class="pl-3 verdana text-base font-normal lg:pr-[50px] leading-[26px]">Aliquam malesuada bibendum arcu vitae elementum curabitur. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
                            </div>
                        </div>
                        <div class="flex gap-[17px]  ">
                            <div>
                                <font-awesome-icon class="text-orange-ctm ml-[20px] mt-[18px] font-black text-[24px] leading-[24px] " :icon="['fas', 'check']" />
                            </div>
                            <div>
                                <h1 class="pl-3 pt-[13px] font-bold pappins text-[20px] leading-[30px]">Format and Indexing Management</h1>
                                <p style="color: #747474;" class="pl-3 verdana text-base font-normal lg:pr-[150px] leading-[26px]">Malesuada bibendum arcu vitae elementum curabitur. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 pt-12 mx-0 md:mx-auto pt-0 lg:pt-[100px]">
                        <div class="grid md:grid-cols-2 pt-[100px] am:pt-[50px] lg:pt-0 ">
                            <div class="">
                                <div style="box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.0969733);background: #F9FAFF;" class="w-[253px] mx-auto h-[288px] rounded-[12px] bg-white">
                                    <img class="pl-[90px] pt-[30px]"  src="../assets/icon-home/card1.png">
                                    <h1 class=" text-center pappins  font-bold text-base leading-[24px]">Publishing</h1>
                                    <div class="w-[10px] mt-3 h-[4px] mx-auto bg-orange-500"></div>
                                    <p class="verdana text-base pt-3 px-6 text-Custom text-center font-normal leading-[26px]">Aliquam vestibulum morbi blandit cursus risus at ultrices</p>
                                </div>
                                <div style="box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.0969733);background: #F9FAFF;" class="w-[253px] mt-[52px] mx-auto h-[288px] rounded-[12px] bg-white">
                                    <img class="pl-[90px] pt-[30px]"  src="../assets/icon-home/card3.png">
                                    <h1 class=" text-center pappins  font-bold text-base leading-[24px]">Template Library</h1>
                                    <div class="w-[10px] mt-3 h-[4px] mx-auto bg-orange-600"></div>
                                    <p class="verdana text-base pt-3 px-6 text-Custom text-center font-normal leading-[26px]">Aliquam vestibulum morbi blandit cursus risus at ultrices</p>
                                </div>
                            </div>
                            <div class="mt-[52px] pl-0 md:pl-[70px] lg:pl-0">
                                <div style="box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.0969733);background: #F9FAFF;" class="w-[253px] mx-auto h-[288px] rounded-[12px] bg-white">
                                    <img class="pl-[90px] pt-[30px]"  src="../assets/icon-home/card2.png">
                                    <h1 class=" text-center pappins  font-bold text-base leading-[24px]">Version Controls</h1>
                                    <div class="w-[10px] mt-3 h-[4px] mx-auto bg-blue-200"></div>
                                    <p class="verdana text-base pt-3 px-6 text-Custom text-center font-normal leading-[26px]">Aliquam vestibulum morbi blandit cursus risus at ultrices</p>
                                </div>
                                <div style="box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.0969733);background: #F9FAFF;" class="w-[253px] mt-[52px] mx-auto h-[288px] rounded-[12px] bg-white">
                                    <img class="pl-[90px] pt-[30px]"  src="../assets/icon-home/card4.png">
                                    <h1 class=" text-center pappins  font-bold text-base leading-[24px]">Auto Mation</h1>
                                    <div class="w-[10px] mt-3 h-[4px] mx-auto bg-yellow-400"></div>
                                    <p class="verdana text-base pt-3 px-6 text-Custom text-center font-normal leading-[26px]">Aliquam vestibulum morbi blandit cursus risus at ultrices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <div class="pt-[1700px] mt-[-100px] sm:pt-[1400px] md:pt-[1120px] lg:pt-[10px]">
            <drop-down/>
        </div>
        <div class="pt-[700px] lg:pt-[87px]">
            <offer-card/>
        </div>
        <subscribe-form/>
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import NavbarHome from "@/components/NavbarHome.vue";
import VidioPlayer from "../components/VidioPlayer.vue";
import Carousel from "@/components/Carousel.vue";
import DropDown from "@/components/DropDown.vue"
import OfferCard from "@/components/OfferCard.vue"
import SubscribeForm from "@/components/SubcribeForm.vue"
import Footer from "../components/Footer.vue"


export default {
    name: "HomeView",
    components: {
        NavbarHome,
        VidioPlayer,
        Carousel,
        DropDown,
        OfferCard,
        SubscribeForm,
        Footer
    },
};
</script>

<style >
.line1 {
    background-image: url("../assets/bg-home/line1.png");
}
.line2 {
    background-image: url("../assets/bg-home/line2.png");
}
.vawe21 {
    background-image: url("../assets/bg-home/vawe2.png");
}
.vawe1 {
    background-image: url("../assets/bg-home/vawe.png");
}
</style>
