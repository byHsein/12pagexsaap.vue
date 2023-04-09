<template>
    <div class="bg-no-repeat pt-[167px] bg-center w-screen float-b">
        <div class="mx-auto max-w-[1200px] my-0 px-5">
            <div class="h-custom">
                <p class="text-center pt-[49px] font-bold pappins text-[36px]">
                    Are you ready to start?
                </p>
                <p class="text-center text-Custom font-normal verdana pt-[15px] px-0 lg:px-[200px] text-[16px] leading-[26px]">
                    Vivamus ultrices bibendum magna, ac volutpat nisi hendrerit
                    eget. Aenean rhoncus ultricies semper. Mauris et cursus est.
                    Maecenas cursus nibh vel ex faucibus consequat
                </p>
                <div class="lg:flex gap-[17px] pt-10">
                    <div>
                        <input type="text" v-model="email" @blur="validateEmail" :class="{ error: errorMessage }" class="input-custom w-full lg:w-[534px] pl-[16px] h-[54px] ml-0 lg:ml-[79px] rounded-[12px]" placeholder="Enter your e-mail"/>
                        <p class="text-sm verdana pl-[17px] lg:pl-[80px] text-red-600" v-if="errorMessage">{{ errorMessage }}</p>
                    </div>
                    <button type="submit" class="w-full bg-Custom-orange hover:bg-orange-600 duration-10 delay-75 lg:w-[397px] mt-3 lg:mt-0 verdana text-[16px] leading-[19px] align-center text-white font-bold h-[54px] rounded-[12px]">
                        Subscribe for Free Trial Period
                    </button>
                </div>
                <p
                    class="text-center pt-[31px] verdana z-20 relative text-[12px] font-bold leading-[24px]">
                    <span style="color: #ff3d00">*</span> Aenean rhoncus
                    ultricies semper. Mauris et cursus est. Maecenas cursus nibh
                    vel ex faucibus consequat
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
};
</script>

<style>
.input-custom{
    background-color: rgba(216, 216, 216, 0.221099);
    border: 1px solid rgba(116, 116, 116, 0.289909);
}
.error{
    border-color: red;
    border:1px solid red;
}
.float-b {
    background-image: url("../assets/bg-home/Float-b.png");
}
.bg-btn-orange{
    background-color: #FF3D00;
}

.h-custom {
    height: 610px;
    padding-right: 5px;
    width: 100%;
    position: relative;
    background-color: #fff;
    z-index: 30;
    margin: 0 auto;
    margin-top: 12px;
    border-radius: 12px;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.14);
}
@media screen and (min-width: 450px) {
    .h-custom {
        height: 490px;
    }
}
@media screen and (min-width: 640px) {
    .h-custom {
        height: 450px;
    }
}
@media screen and (min-width: 768px) {
    .h-custom {
        height: 450px;
    }
}
@media screen and (min-width: 1024px) {
    .h-custom {
        height: 380px;
        max-width: 1106px;
    }
}
</style>
