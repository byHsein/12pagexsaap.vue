<template>
    <header class="h-screen bg-no-repeat bg-right-top outside">
        <div class="h-screen bg-no-repeat bg-right-top deep">
            <div class="bg-no-repeat bg-center floating relative">
                <div class="mx-auto max-w-[1200px] my-0 px-5">
                    <div class="flex h-[102px] justify-between gap-8">
                        <div>
                            <img class="w-[87px] mt-8 h-[28.29px]" src="../assets/icon-home/nav-logo.png">
                        </div>
                        <nav class="hidden md:flex leading-[22px] ">
                        <ul class="main-menu flex mt-[34px] leading-[22px]">
                            <li class="pr-[43px]  text-[18px] text-black  ">
                                Home
                                <font-awesome-icon class="ml-[4px] relative top-[5px]" :icon="['fas', 'angle-down']" />
                                <ul class="dropdown">
                                    <li class="">Product</li>
                                    <router-link to="/company"><li class="pb-7 ">Company</li></router-link>
                                </ul>
                            </li>
                            <router-link to="/About"><li class="pr-[43px]  font-normal text-[18px] text-black hover:text-violet-800  ">About</li></router-link>
                            <router-link to="/Prices"> <li class="pr-[43px]  font-normal text-[18px] text-black hover:text-violet-800  ">Prices</li></router-link>
                            <li class="pr-[43px]  font-normal text-[18px] text-black  ">
                                Pages
                                <font-awesome-icon class="ml-[4px] relative top-[5px]" :icon="['fas', 'angle-down']" />
                                <ul class="dropdown">
                                    <router-link to="/Services"><li class="verdana font-normal text-[18px]">Services</li></router-link>
                                    <router-link to="/Cases"><li>Cases Portfolio</li></router-link>
                                    <router-link to="/CaseDetails"><li>Cases Details</li></router-link>
                                    <router-link to="/CasedetailTeam"><li>Team</li></router-link>
                                    <router-link to="/Faq"><li class="pb-7">FAQ</li></router-link>
                                </ul>
                            </li>
                            <li class=" font-normal pr-[43px] text-[18px] text-black ">
                                Blog
                                <font-awesome-icon class="ml-[4px] relative top-[5px]" :icon="['fas', 'angle-down']" />
                                <ul class="dropdown">
                                    <router-link to="/Blog"><li>Blog</li></router-link>
                                    <router-link to="/BlogSingle"><li class="pb-7">Blog Single</li></router-link>
                                </ul>
                            </li>
                            <router-link to="/Contact"><li class=" pr-[28px] text-[18px] text-black hover:text-violet-800  ">Contact</li></router-link>
                        </ul>
                        <div class="gap-[21px] flex pt-[40px]">
                            <font-awesome-icon class="text-blue-violet" :icon="['fab', 'facebook']" />
                            <font-awesome-icon class="text-blue-violet" :icon="['fab', 'twitter']" />
                            <font-awesome-icon class="text-blue-violet"  :icon="['fas', 'magnifying-glass']" />
                        </div>
                    </nav>
                    <span class="target"></span>
                    <img class="block md:hidden w-[40px] h-[40px] mt-7" src="../assets/icon-home/menu.png">
                    </div>
                </div>
                <div class="mx-auto my-0 max-w-[1200px] px-5 block lg:flex h-[65vh] ">
                    <div class="mt-10 block lg:hidden">
                        <img class="rounded-md w-[330px] md:w-[550px] md:h-[370px] mx-auto h-[250px]" src="../assets/bg-home/img1.jpg">
                    </div>
                    <div>
                        <h1 class="pappins text-[35px]  lg:text-[52px] leading-[40px] lg:leading-[70px] pt-8 lg:pt-[200px] font-bold text-black"><span style="color: #FF3D00;" >Web-Based</span ><br> Publishing System</h1>
                        <p class="text-Custom  text-base leading-[26px] pt-8 lg:pt-3"> Sed dignissim vehicula lorem, ac vulputate leo porta sit amet.
                            Ut commodo nisl et sem sollicitudin gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae
                        </p>
                        <button class="pt-[18px] pb-[17px] text-[#ffff] verdana text-base font-bold rounded-xl mt-5 px-[50px] bg-blue-violet hover:bg-violet-700 duration-75 delay-75">Read more</button>
                    </div>
                    <div class="pt-24 lg:pt-[150px] relative lg:left-[1px] xl:left-[100px] 2xl:left-[150px] hidden lg:block">
                        <img class="rounded-md  rounded-x-xl rounded-y-xl lg:w-[1880px] lg:h-[400px] lg:pl-1 left-[100px]" src="../assets/bg-home/img1.jpg">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name:'NavbarHome',
    components:{
    FontAwesomeIcon
}

}
</script>

<style>

.outside{
    background-image:url('../assets/bg-home/bg-outside.png');
}
.deep{
    background-image:url('../assets/bg-home/bg-deep.png');
}
.floating{
    background-image:url('../assets/bg-home/Floating-details.png');
}
ul li{
    display:inline-block;
    position:relative;
}
ul li ul li{
    padding:20px 0 10px 20px;
    cursor:pointer;
    display:absolute;
}
ul li ul{
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    border-radius:4px;
}
ul li ul.dropdown li{
    display:block;
}
ul li ul.dropdown{
    width:100%;
    position:absolute;
    z-index:999;
    display:none;
}
ul li a:hover{
    color:#3B00AD;
}
ul li:hover ul.dropdown {
    display:block;
}
.content{
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.219624);
    margin-top:20px;
    max-width:480px;
    border-radius:12px;
    background:#fff;
}
.header{
    font-family: verdana;
    font-size:20px;
    min-height:79px;
    font-weight: 700;
    line-height:30px;
    padding:24px 0 20px 50px;
    cursor:pointer;
    display:flex;
    align-items:center;
    position:relative;

}
.header::before{
    display:block;
    content:"";
    background:url("../assets/icon-home/Caret-r.png") no-repeat;
    width:24px;
    height:24px;
    margin-top:5px;
    position:absolute;
    left:30px;
}
.header.active::before{
    display:block;
    content:"";
    background:url("../assets/icon-home/caret-down.png") no-repeat;
    width:24px;
    height:30px;
    margin-top:10px;
    position:absolute;
    left:20px;

}
.header.active{
    color: #FF3D00;
}
.body{
    max-height:0;
    overflow:hidden;
}
.body-content{
    padding-bottom:43px;
    padding-left:50px;
    padding-right:55px
    
    
}
.h-custom{
    height:610px;
    padding-right:5px;
    width:100%;
    position:relative;
    background-color:#fff;
    z-index:30;
    margin:0 auto;
    margin-top:12px;
    border-radius:12px;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.14);
}
.blue-custom{
    background-color: #3B00AD;
}

.orange-custom{
    background-color: #FF3D00;
}
.target {
    position: absolute;
    border-bottom: 4px solid transparent;
    z-index: -1;
    transform: translateX(-60px);
}
.mynav a,.target {
    transition: all .35s ease-in-out;
}
@media screen and (min-width: 450px){
    .h-custom{
        height:490px;

    }
}
@media screen and (min-width: 640px){
    .h-custom{
        height:450px
    }
}
@media screen and (min-width: 768px){
    .h-custom{
        height:450px;
    }
}
@media screen and (min-width: 1024px){
    .h-custom{
        height:380px;
        max-width:1106px;
    }
}
</style>