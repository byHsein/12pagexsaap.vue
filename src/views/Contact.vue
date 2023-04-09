<template>
    <div>
        <Navbar/>
        <div>
            <div class="bg-no-repeat bg-top h-[35vh] vawe-tb">
                <div class="bg-no-repeat bg-top h-[30vh] vawee">
                    <div class="bg-no-repeat bg-right relative h-[30vh] right-[130px] details"></div>
                    <div class="mx-auto max-w-[1200px] relative top-[-250px] my-0 px-5">
                        <h1 class="pappins text-[52px] leading-[66px] font-bold">
                            Contact Us
                        </h1>
                        <p class="verdana text-base leading-[26px] font-normal text-Custom pt-[17px]">
                            Home / Contact
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
            <div>
                <h1 class="pappins pt-[60.07px] text-center font-bold text-[36px] leading-[54px]" style="color: #1F1F1F;">Attention to Every Client</h1>
                <p class="verdana text-base pt-3 px-0 lg:px-[210px] font-normal text-center" style="color: #747474;">
                    Integer mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[37px]">
                <div class=" mx-auto w-[345px] h-[291px] rounded-xl bg-white hover:shadow-lg">
                    <img class="pl-[136px] pt-[53px]" src="../assets/icon-company/contact1.png" alt="">
                    <h1 class="text-center pappins text-[20px] font-bold leading-[30px]">Office address</h1>
                    <p class="text-center pt-2 text-base font-normal" style="color: #747474;">74 Highfield Road <br> London <br> NW59 0LU</p>
                </div>
                <div class=" mx-auto w-[345px] h-[291px] rounded-xl bg-white hover:shadow-lg">
                    <img class="pl-[136px] pt-[53px]" src="../assets/icon-company/contact2.png" alt="">
                    <h1 class="text-center pappins text-[20px] font-bold leading-[30px]">Phone Numbers</h1>
                    <p class="text-center pt-2 text-base font-normal" style="color: #747474;">+44 20 7946 0380 <br> +44 20 7946 0295</p>
                </div>
                <div class=" mx-auto w-[345px] h-[291px] rounded-xl bg-white hover:shadow-lg">
                    <img class="pl-[136px] pt-[53px]" src="../assets/icon-company/contact3.png" alt="">
                    <h1 class="text-center pappins text-[20px] font-bold leading-[30px]">E-mail & Live Chats</h1>
                    <p class="text-center pt-2 text-base font-normal" style="color: #747474;">xsaap@emailaddress.fh</p>
                    <div class="flex justify-center items-center gap-[25px] pt-[20px]">
                        <img src="../assets/icon-company/Whatsapp.png" alt="">
                        <img src="../assets/icon-company/messenger.png" alt="">
                        <img src="../assets/icon-company/chat.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pt-[82px]">
                <iframe class="w-full mx-auto lg:w-[1105px] h-[403px] rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.7137710085717!2d109.63690031491294!3d-7.60609447729028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ab56972b6de83%3A0xaa39bd7ba2c5a727!2sMushola%20Sabilal%20Muttaqin!5e0!3m2!1sid!2sid!4v1673878364072!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <QuestionForm/>
        <div class="pt-[200px]">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import QuestionForm from '@/components/QuestionForm.vue'
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navbar,
        QuestionForm,
        Footer
    }
}
</script>

<style>

</style>