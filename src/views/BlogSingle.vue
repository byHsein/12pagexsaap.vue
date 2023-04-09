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
                            Home / Blog / Single Post
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
                        <img class="w-full lg:w-[662px] h-[300px]  md:h-[385.45px] rounded-xl relative z-10" src="../assets/bg-company/data-analys.jpg" style="box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.267455);" alt="">
                        <div class="w-[130px] h-[28px] ml-[14px] mt-[-20px] relative z-20 rounded-tl-xl rounded-br-xl bg-orange-400 ">
                            <p class="text-center verdana text-[11px] pt-1.5 font-bold" style="color: #FFFFFF;">Data Analysis</p>
                        </div>
                        <div class="flex pt-[25px]">
                            <img class="pt-1 pb-2" src="../assets/icon-company/Calendar.png" alt="">
                            <p class=" pl-3 verdana text-base leading-[26px] font-normal" style="color: #747474;">September 19, 2020 / by T. Jonson</p>
                        </div>
                        <h1 class="pappins text-[36px] pt-[7px] leading-[51px] font-bold " style="color: #1F1F1F;">Extremely Important Qualities Of An Effective Saas</h1>
                        <p class="verdana text-[24px] leading-[36px] font-normal pr-0 lg:pr-10 pt-[22px]" style="color:#1F1F1F; ">
                            Integer iaculis tellus et libero fermentum blandit. Pellentesque elementum vel quam ac imperdiet. Nunc sollicitudin metus sed lectus auctor pharetra. Pellentesque elit risus, ullamcorper a fringilla vitae
                        </p>   
                        <div class="pt-[30px]">
                            <p class="verdana pr-0 lg:pr-[70px] text-base font-normal" style="color: #747474;">
                                Integer iaculis tellus et libero fermentum blandit.
                                Pellentesque elementum vel quam ac imperdiet.
                                Nunc sollicitudin metus sed lectus
                                auctor pharetra. Pellentesque elit risus, ullamcorper a fringilla vitae,
                                tempor sit amet est. Mauris in elementum dui, at congue quam. Fusce magna dolor,
                                laoreet vitae pulvinar id, ultricies eu magna
                                . Nullam in mi ante. Ut dui neque, placerat in libero ut
                            </p>
                        </div>
                        <div>
                            <img class="pt-[64px]" src="../assets/bg-company/quote.png" alt="">
                        </div>
                    </div>
                </div>
                <RecentPost/>
            </div>
            <div class="w-full pt-[64px] lg:w-[665px]">
                <p class="verdana text-base leading-[26px] font-normal" style="color: #747474;">
                    Curabitur cursus turpis magna, sit amet consequat leo suscipit eu. Aenean eu lectus quam.
                    Vestibulum ante  Morbi sit amet feugiat dui. Nam venenatis sed ante eu iaculis. Vivamus vitae
                    efficitur augue. Curabitur sollicitudin lorem ut dolor elementum efficitur. Duis bibendum mi a
                    nisl suscipit, ut iaculis purus aliquet. Suspendisse non nulla in augue sagittis interdum ac
                    vitae odio. Curabitur ut tellus magna. Duis dignissim, nisl eget ultrices laoreet,nisi quam
                    consectetur sem, eu ultrices velit urna bibendum neque.<br><br> Integer iaculis tellus et libero
                    fermentum blandit. Pellentesque elementum vel quam ac imperdiet. Nunc sollicitudin metus sed
                    lectus auctor pharetra. Pellentesque elit risus, ullamcorper a fringilla vitae, tempor sit amet est.
                    Mauris in elementum dui, at congue quam. Fusce magna dolor, laoreet vitae pulvinar id, ultricies
                    eu magna. Nullam in mi ante. Ut dui neque, placerat in libero ut
                </p>
            </div>
            <div class="flex pt-[70px] w-full lg:w-[665px] justify-between">
                <div class="flex items-center">
                    <p class="verdana font-normal text-[18px] leading-[22px]" style="color: #747474;">Share</p>
                    <img class="pl-[21px]" src="../assets/icon-home/Nav-Facebook.png" alt="">
                    <img class="pl-[25px]" src="../assets/icon-home/Nav-Twitter.png" alt="">
                    <img class="pl-[24px]" src="../assets/icon-home/Pinterest.png" alt="">
                </div>
                <div class="flex items-center gap-[13px]">
                    <img src="../assets/icon-home/Comment.png" alt="">
                    <p class="verdana text-[18px] leading-[22px] font-normal" style="color: #747474;" >2 Comments</p>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-[1200px] px-5 ">
            <div class="w-full lg:w-[665px] mt-[79px] h-[1px] " style="background: #747474;opacity: 0.5;"></div>
            <div>
                <h1 class="pappins text-[36px] pt-[56px] leading-[51px] font-bold" style="color: #1F1F1F;">Recent Posts:</h1>
            </div>
            <div class="block lg:flex pt-[56px] gap-[34px] items-center">
                <div>
                    <img class="w-[316px] relative z-10 h-[200px] rounded-xl" src="../assets/bg-company/testing.jpg" alt="">
                    <div class="w-[130px] h-[28px] relative z-20 mt-[-15px] ml-2 rounded-tl-[12px] rounded-br-[12px]" style="background-color: #3B00AD;" >
                        <p class="text-center verdana text-[11px] leading-[24px] font-bold text-white">Uncategorized</p>
                    </div>
                    <h1 class="pappins font-bold text-[20px] leading-[30px]" style="color: #1F1F1F;">The Secrets Behind Full Unix<br> Shell Prices</h1>
                    <p class="verdana text-base font-normal" style="color: #747474;">September 8, 2020 /  by A. Logan</p>
                </div>
                <div class="pt-10 lg:pt-0">
                    <img class="w-[316px] relative z-10 h-[200px] rounded-xl" src="../assets/bg-company/technology.jpg" alt="">
                    <div class="w-[130px] h-[28px] relative z-20 mt-[-15px] ml-2 rounded-tl-[12px] rounded-br-[12px]" style="background-color: #FF3D00;" >
                        <p class="text-center verdana text-[11px] leading-[24px] font-bold text-white">Technology</p>
                    </div>
                    <h1 class="pappins font-bold text-[20px] leading-[30px]" style="color: #1F1F1F;">Tactics That Are Bound To<br> Simplify Applications</h1>
                    <p class="verdana text-base font-normal" style="color: #747474;">September 10, 2020 /  by A. Logan</p>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-[1200px] px-5 my-0">
            <div class="w-full lg:w-[665px] mt-[79px] h-[1px] " style="background: #747474;opacity: 0.5;"></div>
            <div>
                <h1 class="pappins font-bold text-[36px] pt-[76px] leading-[51px]" style="color: #1F1F1F;">Comments:</h1>
            </div>
            <div class="w-full lg:w-[668px] h-[231px] rounded-xl" style="background: rgba(213, 213, 217, 0.514);">
                <div class="flex items-center gap-[30px]">
                    <img class="pl-[26px] mt-[-30px]" src="../assets/icon-company/Avatar.png" alt="">
                    <div >
                        <h1 class="pappins pt-[47px] font-bold text-base ">Helen Anderson</h1>
                        <p class="verdana pr-0 lg:pr-[70px] pt-[8px] text-base leading-[26px] font-normal" style="color: #747474;" >
                            Nunc quis lacinia felis, at maximus ligula. Fusce molestie pretium scelerisque.
                            Etiam in justo vestibulum, tempor erat id, malesuada sem. Vestibulum et varius
                        </p>
                        <p class="pt-[11px] verdana text-[14px] leading-[17px] font-bold" style="color: #3B00AD;"><a href=""> Reply ➜</a></p>
                    </div>
                </div>
            </div>
            <div class="w-full ml-0 lg:ml-[55px] mt-[29px] lg:w-[668px] h-[231px] rounded-xl" style="background: rgba(213, 213, 217, 0.514);">
                <div class="flex items-center gap-[30px]">
                    <img class="pl-[26px] mt-[-30px]" src="../assets/icon-company/Avatar.png" alt="">
                    <div >
                        <h1 class="pappins pt-[47px] font-bold text-base ">Helen Anderson</h1>
                        <p class="verdana pr-0 lg:pr-[70px] pt-[8px] text-base leading-[26px] font-normal" style="color: #747474;" >
                            Nunc quis lacinia felis, at maximus ligula. Fusce molestie pretium scelerisque.
                            Etiam in justo vestibulum, tempor erat id, malesuada sem. Vestibulum et varius
                        </p>
                        <p class="pt-[11px] verdana text-[14px] leading-[17px] font-bold" style="color: #3B00AD;"><a href=""> Reply ➜</a></p>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="pappins font-bold text-[36px] leading-[51px] pt-[93px]">Leave a Reply:</h1>
            </div>
            <div class="pt-[27px]">
                <input class="w-full verdana text-base font-normal lg:w-[663px] h-[54px] pl-[16px] rounded-xl" type="text" placeholder="Your name" style="background: rgba(216, 216, 216, 0.221099);border: 1px solid rgba(116, 116, 116, 0.289909);">
            </div>
            <div class="pt-[20px]">
                <input class="w-full verdana text-base font-normal lg:w-[663px] h-[54px] pl-[16px] rounded-xl" type="text" placeholder="Your e-mail" style="background: rgba(216, 216, 216, 0.221099);border: 1px solid rgba(116, 116, 116, 0.289909);">
            </div>
            <div class="pt-[21px]">
                <textarea class="w-full verdana text-base font-normal pt-[20px] pl-[18px] lg:w-[665px] h-[185px] rounded-xl" placeholder="Your message" style="background: rgba(216, 216, 216, 0.221099);border: 1px solid rgba(116, 116, 116, 0.289909);"></textarea>
            </div>
            <div class="pt-[39px]">
                <button class="w-[248px] orange-custom hover:bg-orange-600 duration-10 delay-75 h-[54px] verdana text-base font-bold text-white text-center rounded-xl " style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0969733);">Reply</button>
            </div>
        </div>
        <CarouselImage/>
        <SubcribeForm/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import RecentPost from '@/components/RecentPost.vue';
import CarouselImage from '@/components/CarouselImage.vue';
import SubcribeForm from '@/components/SubcribeForm.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navbar,
        RecentPost,
        CarouselImage,
        SubcribeForm,
        Footer
    }
}
</script>

<style>

</style>