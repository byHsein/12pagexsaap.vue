<template>
    <div>
        <navbar/>
        <div class="bg-no-repeat relative z-0 bg-top h-screen blue-bg" >
            <div class="bg-no-repeat  bg-center h-screen top-[110px] relative vawe" >
                <div class="bg-no-repeat relative z-10 bg-right-top top-[-100px] h-screen cubes">
                    <div class="block lg:flex">
                        <div class="w-full lg:w-1/2">
                            <img class="w-[1528.52px]  relative top-[166px] h-[724.67px] hidden lg:block" src="../assets/bg-company/img1.jpg" alt="">
                        </div>
                        <div class="w-full lg:w-1/2">
                            <div  class="mx-auto my-0 w-[1/2] max-w-[1200px] px-5">
                                <h1 class="pappins text-[52px] leading-[70px] lg:leading-[78px] lg:pt-[258px]  font-bold text-white"><span class="text-orange-ctm">Xsaap</span><br>New Hosting Solutions</h1>
                                <p class="verdana text-white text-base leading-[24px] pr-0 lg:pr-[300px] pt-5">
                                    Sed dignissim vehicula lorem, ac vulputate leo porta sit amet. Ut commodo nisl et sem sollicitudin gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                                </p>
                                <button class="w-[197px] h-[54px] px-[50px] py-[17px] verdana text-base mt-[25px] leading-[19px] text-center bg-Custom-orange hover:bg-orange-800 delay-75 duration-10 text-white rounded-[12px]" style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img class="md:w-[550px] block lg:hidden md:h-[350px] rounded-md  w-[330px] h-[200px] relative top-[100px] mx-auto" src="../assets/bg-company/img1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-no-repeat h-screen  mt-[-330px] bg-top vawe2" >
            <div class="mx-auto max-w-[1200px] my-0 px-5">
                <div class="w-full top-[80px] relative z-0 h-[292px] lg:h-[192px] rounded-xl bg-white " style="box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.263385);">
                    <div class="lg:flex gap-[17px] pt-[53px] ">
                        <div >
                            <input  type="text" v-model="email" @blur="validateEmail" :class="{ error: errorMessage }"   style="background: rgba(216, 216, 216, 0.221099);border: 1px  solid rgba(116, 116, 116, 0.289909);" class="w-full lg:w-[534px] pl-[16px] h-[54px] ml-0 lg:ml-[79px] rounded-[12px]" placeholder="Enter your e-mail">
                            <p class="pl-[10px] lg:pl-[80px] pt-1 text-red-600 verdana" v-if="errorMessage">{{ errorMessage }}</p>
                        </div>
                        <button type="submit" class="w-full bg-blue-violet hover:bg-indigo-800 duration-10 delay-75 lg:w-[397px] mt-3 lg:mt-0  verdana text-[16px] leading-[19px]  align-center text-white font-bold h-[54px] rounded-[12px]">Subscribe for Free Trial Period</button>
                    </div>
                    <p class="verdana text-[12px] leading-[24px] pt-[17px] text-center">* Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus nibh vel ex faucibus consequat</p>
                </div>
                <div class="pt-[210px] ">
                    <h1 class="pappins text-[36px] leading-[54px] font-bold text-center " style="color: #1F1F1F;">Increased Website Performance</h1>
                    <p class="verdana pt-[9px] px-0 lg:px-[220px] text-base font-normal text-center" style="color: #747474">Dolor mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo</p>
                </div>
            </div>
        </div>
        <div class="max-w-[1200px] mx-auto px-5 my-0">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[-200px] sm:mt-[-300px] md:mt-[-400px] lg:mt-[-500px] gap-[35px]">
                <div class="w-[345px] h-[271px] rounded-xl ">
                    <div class="flex pl-[19px] pt-[29px] mx-auto">
                        <div class="w-[60px] h-[60px] rounded-[8px]" style="background-color: #F9FAFF;box-shadow: 1px 1px 4px rgba(31, 31, 31, 0.177775);">
                            <img class="pl-[20px] pt-[18px] " src="../assets/icon-company/1.png" alt="">
                        </div>
                        <h1 class="pappins pl-[30px] text-[20px] leading-[30px] font-bold " style="color: #1F1F1F;">
                            Get Your Domain<br> and  Hosting
                        </h1>
                    </div>
                    <p class="pl-[27px] pr-[26px] pt-[23px] verdana text-base leading-[26px]" style="color: #747474;">
                        In vel magna quam. Curabitur volutpat, augue nec dapibus congue, dolor erat gravida augue, at venenatis magna nisl at ligula. In tempor  maximus
                    </p>
                </div>
                <div class="w-[345px] h-[271px] rounded-xl ">
                    <div class="flex pl-[19px] pt-[29px] mx-auto">
                        <div class="w-[60px] h-[60px] rounded-[8px]" style="background-color: #F9FAFF;box-shadow: 1px 1px 4px rgba(31, 31, 31, 0.177775);">
                            <img class="pl-[16px] pt-[18px]" src="../assets/icon-company/2.png" alt="">
                        </div>
                        <h1 class="pappins pl-[30px] font-bold text-[20px] leading-[30px]  " style="color: #1F1F1F;">
                            Payment Gateway <br>and Sell On-line
                        </h1>
                    </div>
                    <p class="pl-[27px] pr-[26px] pt-[23px] verdana text-base leading-[26px]" style="color: #747474;">
                        Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium
                    </p>
                </div>
                <div class="w-[345px] h-[271px] rounded-xl ">
                    <div class="flex pl-[19px] pt-[29px] mx-auto">
                        <div class="w-[60px] h-[60px] rounded-[8px]" style="background-color: #F9FAFF;box-shadow: 1px 1px 4px rgba(31, 31, 31, 0.177775);">
                            <img class="pl-[18px] pt-[18px]" src="../assets/icon-company/3.png" alt="">
                        </div>
                        <h1 class="pappins pl-[30px] font-bold text-[20px] leading-[30px]  " style="color: #1F1F1F;">
                            Security SSL<br> certificate
                        </h1>
                    </div>
                    <p class="pl-[27px] pr-[26px] pt-[23px] verdana text-base leading-[26px]" style="color: #747474;">
                        Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium
                    </p>
                </div>
                <div class="w-[345px] h-[271px] rounded-xl ">
                    <div class="flex pl-[19px] pt-[29px] mx-auto">
                        <div class="w-[60px] h-[60px] rounded-[8px]" style="background-color: #F9FAFF;box-shadow: 1px 1px 4px rgba(31, 31, 31, 0.177775);">
                            <img class="pl-[20px] pt-[18px]" src="../assets/icon-company/4.png" alt="">
                        </div>
                        <h1 class="pappins pl-[30px] font-bold text-[20px] leading-[30px]  " style="color: #1F1F1F;">
                            Unlimited Storage<br> for All the Files
                        </h1>
                    </div>
                    <p class="pl-[27px] pr-[26px] pt-[23px] verdana text-base leading-[26px]" style="color: #747474;">
                        In vel magna quam. Curabitur volutpat, augue nec dapibus congue, dolor erat gravida augue, at venenatis magna nisl at ligula. In tempor  maximus
                    </p>
                </div>
                <div class="w-[345px] h-[271px] rounded-xl ">
                    <div class="flex pl-[19px] pt-[29px] mx-auto">
                        <div class="w-[60px] h-[60px] rounded-[8px]" style="background-color: #F9FAFF;box-shadow: 1px 1px 4px rgba(31, 31, 31, 0.177775);">
                            <img class="pl-[16px] pt-[18px]" src="../assets/icon-company/5.png" alt="">
                        </div>
                        <h1 class="pappins pl-[30px] font-bold text-[20px] leading-[30px]  " style="color: #1F1F1F;">
                            Backups and <br> Restore
                        </h1>
                    </div>
                    <p class="pl-[27px] pr-[26px] pt-[23px] verdana text-base leading-[26px]" style="color: #747474;">
                        Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium
                    </p>
                </div>
                <div class="w-[345px] h-[271px] rounded-xl ">
                    <div class="flex pl-[19px] pt-[29px] mx-auto">
                        <div class="w-[60px] h-[60px] rounded-[8px]" style="background-color: #F9FAFF;box-shadow: 1px 1px 4px rgba(31, 31, 31, 0.177775);">
                            <img class="pl-[21px] pt-[18px]" src="../assets/icon-company/6.png" alt="">
                        </div>
                        <h1 class="pappins pl-[30px] font-bold text-[20px] leading-[30px]  " style="color: #1F1F1F;">
                            One-click Install,<br> Integrating apps
                        </h1>
                    </div>
                    <p class="pl-[27px] pr-[26px] pt-[23px] verdana text-base leading-[26px]" style="color: #747474;">
                        Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-no-repeat w-full relative bg-right-top shape" >
            <div class="h-[90vh] relative top-[185px]  " style="background-color: #F9FAFF;">
                <div class="mx-auto max-w-[1200px] my-0 px-5">
                    <div>
                        <h1 class="pappins text-[32px] md:text-[36px] font-bold leading-[54px] text-center">Digital Innovation at Speed and Cost<br> <span style="color:#3B00AD">Our Additional Solutions</span></h1>
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
        </div>
        <div class=" pt-[880px]  lg:pt-[200px]" style="background: #F9FAFF;">
            <div class="mx-auto max-w-[1200px] my-0 px-5">
                <div class="block lg:flex">
                    <div  class="mx-auto block lg:hidden left-1 lg:left-[140px] mt-10 max-w-[640px] relative max-h-[360px] rounded-[12px] rounded-t-[12px] ">
                        <vidio-player/>
                    </div>
                    <div class="lg:w-1/2">
                        <div class="pt-10 lg:pt-0">
                            <h1 class="pappins font-bold text-[36px] leading-[51px]">Advanced Features</h1>
                            <p class="verdana font-normal text-[16px] leading-[26px] pt-3 pr-0 lg:pr-[35px]" style="color: #747474;">
                                Maecenas est arcu, sagittis eget ante semper, ornare rhoncus tellus. In ac arcu at velit sollicitudin ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam eu euismod quam. Vivamus commodo hendrerit est, sed vestibulum quam mollis semper. Etiam tristique rutrum lectus a consequat. Praesent tristique cursus tellus, in ultricies
                            </p>
                        </div>
                        <div class="flex pt-[26px]">
                            <div>
                                <h1 class="text-center pappins font-bold text-[52px] leading-[78px]" style="color: #3B00AD;">350</h1>
                                <P class="pappins text-center font-bold pr-0 lg:pr-[37px] text-base leading-[24">Ready to Use Templates</P>
                            </div>
                            <div class="w-[1px] h-[112px] " style="background-color: #d8d8d8;"></div>
                            <div class="pl-0 lg:pl-[33px]">
                                <h1 class="text-center pappins font-bold  text-[52px] leading-[78px]" style="color: #3B00AD;">+ 1.9 m</h1>
                                <p class="pappins text-center font-bold text-base leading-[24">Currently Hosted and<br> Supported Websites</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-[43%]">
                        <div class="mx-auto hidden lg:block  lg:mt-[-10px] left-1 lg:left-[140px] mt-10 w-100 relative h-100 rounded-[12px] rounded-t-[12px]">
                            <vidio-player/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  class="h-[145vh] sm:h-[120vh] md:h-[80vh] lg:h-[65vh] relative z-10 shape1 bg-bottom bg-no-repeat  ">
            <div class=" bg-white-custom">
                <div class="mx-auto  max-w-[1200px] my-0 px-5">
                    <div class="pt-[100px]">
                        <div class="grid  grid-cols-1 gap-[35px] md:grid-cols-2 lg:grid-cols-3 ">
                            <div>
                                <div class="flex">
                                    <img class="pb-[2rem]" src="../assets/icon-company/one.png" alt="">
                                    <h1 class="pappins text-[24px] pl-[26px] leading-[36px] font-bold">Unlimited MySQL<br> Databases</h1>
                                </div>
                                <p class="verdana text-[16px] leading-[26px] pt-[9px] font-normal" style="color:#747474">
                                    Nulla et eleifend metus. Vestibulum sodales ac est in varius. Fusce venenatis morbi a fermentum dolor, a efficitur ante. Pellentesque habitant
                                </p>
                            </div>
                            <div>
                                <div class="flex">
                                    <img class="pb-[2rem]" src="../assets/icon-company/two.png" alt="">
                                    <h1 class="pappins text-[24px] pl-[26px] leading-[36px] font-bold">Support PhP</h1>
                                </div>
                                <p class="verdana text-[16px] leading-[26px] pt-[9px] font-normal" style="color:#747474">
                                    Vestibulum sodales ac est in varius. Fusce venenatis. Maecenas est arcu, sagittis eget ante semper, ornare rhoncus
                                </p>
                            </div>
                            <div>
                                <div class="flex">
                                    <img class="pb-[2rem]" src="../assets/icon-company/three.png" alt="">
                                    <h1 class="pappins text-[24px] pl-[26px] leading-[36px] font-bold">Server Side  Includes. Subversion Repository</h1>
                                </div>
                                <p class="verdana text-[16px] leading-[26px] pt-[9px] font-normal" style="color:#747474">
                                    Sed in est accumsan lacus scelerisque viverra. Nulla et eleifend metus. Vestibulum sodales ac est in varius. Fusce venenatis
                                </p> 
                            </div>
                            <div>
                                <div class="flex">
                                    <img class="pb-[2rem]" src="../assets/icon-company/four.png" alt="">
                                    <h1 class="pappins text-[24px] pl-[26px] leading-[36px] font-bold">Full Unix Shell and Additional Support</h1>
                                </div>
                                <p class="verdana text-[16px] leading-[26px] pt-[9px] font-normal" style="color:#747474">
                                    Nulla et eleifend metus. Vestibulum sodales ac est in varius. Fusce venenatis morbi a fermentum dolor, a efficitur ante. Pellentesque habitant
                                </p>
                            </div>
                            <div>
                                <div class="flex">
                                    <img class="pb-[2rem]" src="../assets/icon-company/five.png" alt="">
                                    <h1 class="pappins text-[24px] pl-[26px] leading-[36px] font-bold">Reseller and Sub Accounts</h1>
                                </div>
                                <p class="verdana text-[16px] leading-[26px] pt-[9px] font-normal" style="color:#747474">
                                    Vestibulum sodales ac est in varius. Fusce venenatis. Maecenas est arcu, sagittis eget ante semper, ornare rhoncus
                                </p>
                            </div>
                            <div>
                                <div class="flex">
                                    <img class="py-4" src="../assets/icon-company/six.png" alt="">
                                    <h1 class="pappins text-[24px] pl-[26px] leading-[36px] font-bold">Unlimited Users and Websites</h1>
                                </div>
                                <p class="verdana text-[16px] leading-[26px] pt-[9px] font-normal" style="color:#747474">
                                    Sed in est accumsan lacus scelerisque viverra. Nulla et eleifend metus. Vestibulum sodales ac est in varius. Fusce venenatis 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <sponsor/>
        <div class="pt-10">
            <features/>
        </div>
        <free-trial/>
        <div class="pt-[200px]">
            <Footer/>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import VtwoDropdown from '@/components/VtwoDropdown.vue';
import VidioPlayer from '@/components/VidioPlayer.vue';
import Sponsor from '@/components/Sponsor.vue';
import Features from '@/components/Features.vue';
import FreeTrial from '@/components/FreeTrial.vue';
import Footer from '@/components/Footer.vue';

export default {
    name:'',
    components:{
        Navbar,
        VtwoDropdown,
        VidioPlayer,
        Sponsor,
        Features,
        FreeTrial,
        Footer
    },
    data() {
        return {
            email: "",
            errorMessage: "",
        };
    },
    methods: {
        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.email) {
                this.errorMessage = "Email is required";
            } else if (!regex.test(this.email)) {
                this.errorMessage = "Please enter a valid email address";
            } else {
                this.errorMessage = "";
            }
        },
    },
}
</script>
<style>
.error{
    border-color: #fff;
    border:1px solid red;
}
.blue-bg{
    background-image: url('../assets/bg-company/Bg.png');
}
.vawe{
    background-image:url('../assets/bg-company/vawe-middle.png')
}
.vawe2{
    background-image:url('../assets/bg-company/vawe.png')
}
.cubes{
    background-image:url('../assets/bg-company/cubes.png');
}
.shape{
    background-image: url('../assets/bg-company/Shape.png');
}
.shape1{
    background-image: url('../assets/bg-company/Shape1.png');
}
</style>