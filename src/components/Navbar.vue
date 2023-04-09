<template>
<section>
    <div class="mx-auto my-0 max-w-[1200px] px-5">
        <div class="flex h-[102px] justify-between gap-10">
            <div>
                <img class="w-[87px] mt-8  h-[28.39px]" src="../assets/icon-home/nav-logo.png">
            </div>
            <nav class=" hidden md:flex    ">
                <ul class="main-menu flex mt-[34px] leading-[22px]">
                    <li class="pr-[43px] text-[18px] text-black  ">
                        Home
                        <font-awesome-icon class="ml-[4px] relative top-[5px]" :icon="['fas', 'angle-down']" />
                        <ul class="dropdown">
                            <router-link to="/"><li class="verdana font-normal text-[18px]">Product</li></router-link>
                            <router-link to="/Company"><li class="pb-7 cursor-pointer">Company</li></router-link>
                        </ul>
                    </li>
                    <router-link to="/About"><li class="pr-[43px] text-[18px] text-black hover:text-violet-800 cursor-pointer ">About</li></router-link>
                    <router-link to="/Prices"><li class="pr-[43px] text-[18px] text-black hover:text-violet-800 cursor-pointer ">Prices</li></router-link>
                    <li class="pr-[43px] text-[18px] text-black  ">
                        Pages
                        <font-awesome-icon class="ml-[4px] relative top-[5px]" :icon="['fas', 'angle-down']" />
                        <ul class="dropdown">
                            <router-link to="/Services"><li class="verdana font-normal text-[18px]">Services</li></router-link>
                            <router-link to="/Cases"><li class="verdana font-normal text-[18px]">Cases Portfolio</li></router-link>
                            <router-link to="/CaseDetails"><li class="verdana font-normal text-[18px]">Cases Details</li></router-link>
                            <router-link to="/CasedetailTeam"><li class="verdana font-normal text-[18px]">Team</li></router-link>
                            <router-link to="/Faq"><li class="pb-7">FAQ</li></router-link>
                        </ul>
                    </li>
                    <li class="pr-[43px] text-[18px] text-black   ">
                        Blog
                        <font-awesome-icon class="ml-[4px] relative top-[5px]" :icon="['fas', 'angle-down']" />
                        <ul class="dropdown cursor-pointer">
                            <router-link to="/Blog"><li class="verdana font-normal text-[18px]">Blog</li></router-link>
                            <router-link to="/BlogSingle"><li class="pb-7">Blog Single</li></router-link>
                        </ul>
                    </li>
                    <router-link to="/Contact"><li class="pr-[28px] text-[18px] text-black hover:text-violet-800 cursor-pointer ">Contact</li></router-link>
                </ul>
                <div class="gap-[21px] flex pt-[40px]">
                    <font-awesome-icon class="text-blue-violet" :icon="['fab', 'facebook']" />
                    <font-awesome-icon class="text-blue-violet" :icon="['fab', 'twitter']" />
                    <font-awesome-icon class="text-blue-violet"  :icon="['fas', 'magnifying-glass']" />
                </div>
            </nav>
            <img class="open-menu block md:hidden w-[40px] h-[40px] mt-7" src="../assets/icon-home/menu.png">
        </div>
    </div>

</section>
</template>

<script>
export default {

}
</script>

<style>

</style>