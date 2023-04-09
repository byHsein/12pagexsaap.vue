<template>
    <div class="bg-no-repeat relative   bg-right h-full subscribe">
        <div class="mx-auto  relative max-w-[1200px] my-0 px-5 ">
            <div class="pt-[109px]">
                <h1 class="pappins font-bold w-full lg:w-[533px] text-[52px] leading-[66px]" style="color: #1F1F1F;" >Are you ready to start? </h1>
                <h1 class="pappins font-bold text-[36px] leading-[52px] text-blue-violet" >28 day Free Trial</h1>
                <p class="verdana w-full lg:w-[533px] pt-[19px] text-base leading-[26px] font-normal " style="color: #747474;">
                    Vivamus ultrices bibendum magna, ac volutpat nisi hendrerit eget. Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus nibh vel ex faucibus consequat
                </p>
                <div class="block md:flex  pt-[20px] gap-[12.62px]">
                    <div>
                        <input v-model="email" @blur="valdiateEmail" :class="{ error: errorMessage }" class="w-full lg:w-[331.12px] h-[54px] pl-[16px] verdana text-base rounded-xl" style="background: rgba(216, 216, 216, 0.221099); border: 1px solid rgba(116, 116, 116, 0.289909);" type="text" placeholder="Enter your e-mail">
                        <p v-if="errorMessage" class="text-red-600 verdana">{{ errorMessage }}</p>
                    </div>
                    <button type="submit" class="mt-3 lg:mt-0 rounded-xl verdana font-bold text-base leading-[19px] text-center text-white bg-Custom-orange hover:bg-orange-600 delay-75 duration-10 w-full  lg:w-[192.26px] h-[54px] " style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0969733);">Get Free Trial</button>
                </div> 
                <p class="verdana w-full lg:w-[533px] text-[12px]  leading-[24px] font-normal pt-[24px]"><span class="text-orange-ctm"> *</span> Aenean rhoncus ultricies semper. Mauris et cursus est. Maecenas cursus nibh vel ex faucibus consequat</p>
            </div>
        </div>
        <img class="absolute right-[340px] top-[300px]" src="../assets/bg-company/cube4.png" alt="">
        <img class="absolute right-[430px] top-[160px]" src="../assets/bg-company/cube5.png" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            errorMessage:''
        }
    },
    methods:{
        valdiateEmail(){
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!this.email){
                this.errorMessage = "Email is required"
            }else if(!regex.test(this.email)){
                this.errorMessage = "Please enter a valid email address"
            }else{
                this.errorMessage = ""
            }
        }
    }
}
</script>

<style>
.subscribe{
    background-image: url('../assets/bg-company/Subscribe.png');
}
</style>