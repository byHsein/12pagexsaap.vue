<template>
    <div>
        <Navbar/>
        <div>
            <div class="bg-no-repeat bg-top h-[35vh] vawe-tb">
                <div class="bg-no-repeat bg-top h-[30vh] vawee">
                    <div class="bg-no-repeat bg-right relative h-[30vh] right-[130px] details"></div>
                    <div class="mx-auto max-w-[1200px] relative top-[-250px] my-0 px-5">
                        <h1 class="pappins text-[52px] leading-[66px] font-bold">
                            Blog
                        </h1>
                        <p class="verdana text-base leading-[26px] font-normal text-Custom pt-[17px]">
                            Home / Blog
                        </p>
                    </div>
                </div>
                <img class="w-[43px] h-[43px] absolute right-[500px] top-[230px]" src="../assets/icon-company/Oval.png" alt=""/>
                <img class="w-[30px] h-[30px] absolute right-[165px] top-[140px]" src="../assets/icon-company/Oval1.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[412px] top-[335px]" src="../assets/icon-company/Oval2.png" alt=""/>
                <img class="w-[15px] h-[15px] absolute right-[620px] top-[230px]" src="../assets/icon-company/Oval4.png" alt=""/>
            </div>
        </div>
        <div class="max-w-[1200px] px-5 my-0 mx-auto">
            <div class="block lg:flex">
                <div class="w-full lg:w-[724px]">
                    <div class="pt-[77.07px]" >
                        <img class="w-full lg:w-[662px] h-[300px]  md:h-[385.45px] rounded-xl relative z-10" src="../assets/bg-company/galeri5.jpg" style="box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.267455);" alt="">
                        <div class="w-[130px] h-[28px] ml-[14px] mt-[-20px] relative z-20 rounded-tl-xl rounded-br-xl bg-blue-violet ">
                            <p class="text-center verdana text-[11px] pt-1.5 font-bold text-white">
                                Uncategorized
                            </p>
                        </div>
                        <div class="flex pt-[25px]">
                            <img class="pt-1 pb-2" src="icon-company/Calendar.png" alt="">
                            <p class=" pl-3 verdana text-base leading-[26px] font-normal text-Custom">
                                September 19, 2020 / by T. Jonson
                            </p>
                        </div>
                        <h1 class="w-full lg:w-[610px] pappins text-[36px] pt-[7px] leading-[51px] font-bold text-dark ">
                            8 Strategies That Are Proven To Cheapen Data Analysis
                        </h1>
                        <p class="w-full lg:w-[610px] pt-3 verdana text-base leading-[26px] font-normal text-Custom">
                            Curabitur cursus turpis magna,
                            sit amet consequat leo suscipit eu.
                            Aenean eu lectus quam. Vestibulum ante  
                        </p>
                        <div class="verdana pt-5 pl-5 font-bold text-base leading-[19px] text-blue-violet"><a href="#">
                            Read more ➜
                        </a></div>
                    </div>
                    <div class="pt-[70px]" >
                        <img class="w-full lg:w-[662px] h-[300px]  md:h-[385.45px] rounded-xl relative z-10" src="../assets/bg-company/galeri11.jpg" style="box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.267455);" alt="">
                        <div class="w-[130px] h-[28px] ml-[14px] mt-[-20px] relative z-20 rounded-tl-xl rounded-br-xl bg-blue-violet ">
                            <p class="text-center verdana text-[11px] pt-1.5 font-bold text-white">
                                Data Analysis
                            </p>
                        </div>
                        <div class="flex pt-[25px]">
                            <img class="pt-1 pb-2" src="icon-company/Calendar.png" alt="">
                            <p class=" pl-3 verdana text-base leading-[26px] font-normal text-Custom">
                                September 19, 2020 / by T. Jonson
                            </p>
                        </div>
                        <h1 class="w-full lg:w-[610px] pappins text-[36px] pt-[7px] leading-[51px] font-bold text-dark ">
                            Extremely Important Qualities Of An Effective Saas
                        </h1>
                        <p class="w-full lg:w-[610px] pt-3 verdana text-base leading-[26px] font-normal text-Custom">
                            Curabitur cursus turpis magna,
                            sit amet consequat leo suscipit eu.
                            Aenean eu lectus quam. Vestibulum ante   
                        </p>
                        <div class="verdana pt-5 pl-5 font-bold text-base leading-[19px] text-blue-violet"><a href="#">Read more ➜</a></div>   
                    </div>
                </div>
                <RecentPost/>
            </div>
            <div class="pt-[74px]">
                <img class="w-full lg:w-[630px] h-[216px]" src="../assets/bg-company/Quote-post.png" alt="">
            </div>
            <div class="pt-[75px]" >
                <img class="w-full lg:w-[662px] h-[300px]  md:h-[385.45px] rounded-xl relative z-10" src="../assets/bg-company/technology.jpg" style="box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.267455);" alt="">
                <div class="w-[130px] h-[28px] ml-[14px] mt-[-20px] relative z-20 rounded-tl-xl rounded-br-xl bg-blue-violet ">
                    <p class="text-center verdana text-[11px] pt-1.5 font-bold text-white">
                        Technology
                    </p>
                </div>
                <div class="flex pt-[25px]">
                    <img class="pt-1 pb-2" src="icon-company/../assets/Calendar.png" alt="">
                    <p class=" pl-3 verdana text-base leading-[26px] font-normal text-Custom">
                        September 18, 2020 / by T. Jonson
                    </p>
                </div>
                <h1 class="w-full lg:w-[610px] pappins text-[36px] pt-[7px] leading-[51px] font-bold text-dark ">September 18, 2020 / by T. Jonson</h1>
                <p class="w-full lg:w-[610px] pt-3 verdana text-base leading-[26px] font-normal text-Custom">
                    Curabitur cursus turpis magna,
                    sit amet consequat leo suscipit eu.
                    Aenean eu lectus quam. Vestibulum ante     
                </p>
                <div class="verdana pt-5 pl-5 font-bold text-base leading-[19px] text-blue-violet"><a href="#">Read more ➜</a></div>   
            </div>
        </div>
        <div class="pt-[126.57px]">
            <div class="bg-no-repeat h-[946.03px] bg-center bg-blog"> 
                <CaseBlog/>
            </div>
        </div>
        <div class="pt-[1000px] md:pt-[500px] lg:pt-[0px]">
            <FreeTrial/>
        </div>
        <div class="pt-[250px]">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import RecentPost from '@/components/RecentPost.vue'
import CaseBlog from '@/components/CaseBlog.vue';
import FreeTrial from '@/components/FreeTrial.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navbar,
        RecentPost,
        CaseBlog,
        FreeTrial,
        Footer
    }
}
</script>

<style>
.bg-blog{
    background-image: url('../assets/bg-company/Bg-blog.png');
}
</style>