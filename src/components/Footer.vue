<template>
    <div class="bg-no-repeat bg-top h-[409px] top-[-120px] placeholder  relative z-0 ">
        <div class=" bg-no-repeat bg-top h-[634px] top-[30px] placeholder2 relative">
            <div class="mx-auto max-w-[1200px] my-0 px-5">
                <div class="grid lg:grid-cols-3">
                    <div class="pt-[150px] lg:pt-[190px] ">
                        <img src="../assets/icon-home/logo.png">
                        <p class="verdana text-[16px] pt-[19px] leading-[24px] font-normal ">
                            Aliquam rhoncus nunc turpis, sit amet malesuada elit dignissim vel. Nullam sed nunc ut nibh vestibulum mattis. Sed sed laoreet turpis
                        </p>
                        <div class="flex pt-[12px]">
                            <img src="../assets/icon-home/phone.png" alt="">
                            <p class="verdana text-base leading-[19px] pl-[18px] font-normal">234-456-678</p>
                        </div>
                        <div class="flex pt-[17px]">
                            <img src="../assets/icon-home/email.png" alt="">
                            <p class="verdana text-base leading-[19px] pl-[18px] font-normal">xsaap@emailaddress.fh</p>
                        </div>
                        <div class="flex gap-[21px] pt-[39px]">
                            <img src="../assets/icon-home/Facebook.png" alt="">
                            <img src="../assets/icon-home/Instagram.png" alt="">
                            <img src="../assets/icon-home/Twitter.png" alt="">
                        </div>
                    </div>
                    <div class="pt-10 lg:pt-[190px] pl-0 lg:pl-[200px] relative" >
                        <h1 class="pappins font-bold text-[24px] leading-[36px]"> info:</h1>
                        <li class="verdana text-base leading-[24px]">Services</li>
                        <li class="verdana text-base leading-[24px]">prices</li>
                        <li class="verdana text-base leading-[24px]">FAQ</li>
                        <li class="verdana text-base leading-[24px]">Team and Careers</li>
                    </div>
                    <div class="pt-10 lg:pt-[190px] pl-0 lg:pl-[190px] ">
                        <h1 class="pappins font-bold text-[24px] leading-[36px]">Abous us</h1>
                        <li class="verdana text-base leading-[24px]">Home</li>
                        <li class="verdana text-base leading-[24px]">About</li>
                        <li class="verdana text-base leading-[24px]">Contact Us</li>
                        <li class="verdana text-base leading-[24px]">Blog</li>
                    </div>
                </div>
            </div>
            <router-link to="/">
                <div class="cursor-pointer">
                    <img class="absolute right-[10px] md:right-[90px] top-[493.5px] w-[48px] h-[48px]" src="../assets/icon-home/icon_chat.png" alt="">
                    <div class="absolute pl-[30px] pt-[15px] right-[35px]  md:right-[115px] top-[402px] w-[190px] message h-[86px]">
                        <div class="flex " >
                            <p class="verdana text-base text-Custom font-normal pr-2">Hello!</p>
                            <font-awesome-icon :icon="['fas', 'hand-sparkles']" bounce />   
                        </div>
                        <p class="verdana text-base text-Custom font-normal">I’m here to help!</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.placeholder{
    background-image: url('../assets/bg-home/Placeholder.png');
}
.placeholder2{
    background-image:url('../assets/bg-home/Placeholder2.png');
}
.message{
    background-image: url('../assets/icon-home/Message.png');
}
</style>