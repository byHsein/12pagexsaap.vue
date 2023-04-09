<template>
    <div>
        <div class="mx-auto max-w-[1200px] my-0 px-5">
            <div class="sldier overflow-hidden max-w-[1200px]">
                <div class="slides" :style="{ transform }">
                    <div class="slide">
                        <div class="oval h-[45vh] bg-center relative bg-no-repeat ">
                            <div class="">
                                <div class="flex gap-[75.5px] pt-[130px] justify-center items-center">
                                    <div class="prev " @click="prevSlide">
                                        <font-awesome-icon class="text-black hover:text-[#747474]" :icon="['fas', 'angle-left']" />
                                    </div>
                                    <p class="pappins font-bold text-[20px] leading-[30px] text-center">Ralf Timbarland</p>
                                    <div class="next" @click="nextSlide">
                                        <font-awesome-icon class="text-black hover:text-[#747474]" :icon="['fas', 'angle-right']" />
                                    </div>    
                                </div>
                                <p style="color: #747474;" class="text-base verdana leading-[24px] text-center">CEO</p>
                                <p class="text-center  lg:px-[230px] pt-[18px] verdana italic font-normal text-[20px] leading-[32px]">“Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam
                                    pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies”
                                </p>
                                <div class="flex gap-[19px] mt-[25px] justify-center ">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="slide">
                        <div class="oval h-[45vh] bg-center relative bg-no-repeat ">
                            <div class="">
                                <div class="flex gap-[72px] pt-[130px] justify-center items-center">
                                    <div class="prev" @click="prevSlide">
                                        <font-awesome-icon class="text-black hover:text-[#747474]" :icon="['fas', 'angle-left']" />
                                    </div>
                                    <p class="pappins font-bold text-[20px] leading-[30px] text-center">Alex Justin </p>
                                    <div class="next" @click="nextSlide">
                                        <font-awesome-icon class="text-black hover:text-[#747474]" :icon="['fas', 'angle-right']" />
                                    </div>    
                                </div>
                                <p style="color: #747474;" class="text-base verdana leading-[24px] text-center">MANAGER</p>
                                <p class="text-center  lg:px-[230px] pt-[18px] verdana italic font-normal text-[20px] leading-[32px]">“Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam
                                    pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies”
                                </p>
                                <div class="flex gap-[19px] mt-[25px] justify-center ">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/no-rate.png" alt="">
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="slide">
                        <div class="oval h-[45vh] bg-center relative bg-no-repeat ">
                            <div class="">
                                <div class="flex gap-[75.5px] pt-[130px] justify-center items-center">
                                    <div class="prev" @click="prevSlide">
                                        <font-awesome-icon class="text-black hover:text-[#747474]" :icon="['fas', 'angle-left']" />
                                    </div>
                                    <p class="pappins font-bold text-[20px] leading-[30px] text-center">Daniel Joss Simons</p>
                                    <div class="next" @click="nextSlide">
                                        <font-awesome-icon class="text-black hover:text-[#747474]" :icon="['fas', 'angle-right']" />
                                    </div>    
                                </div>
                                <p style="color: #747474;" class="text-base verdana leading-[24px] text-center">CTC</p>
                                <p class="text-center  lg:px-[230px] pt-[18px] verdana italic font-normal text-[20px] leading-[32px]">“Vitae nunc sed velit dignissim sodales ut eu. Cras semper auctor neque vitae tempus quam
                                    pellentesque nec nam. Etiam sit amet nisl purus. Amet aliquam id diam maecenas ultricies”
                                </p>
                                <div class="flex gap-[19px] mt-[25px] justify-center ">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/rating.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/no-rate.png" alt="">
                                    <img class="w-[21px]" src="../assets/icon-home/no-rate.png" alt="">
                                </div>
                            </div>  
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'Carousel',
    data(){
        return{
            currentSlide:0
        }
    },
    computed: {
        transform() {
        return `translateX(-${this.currentSlide *33}%)`;
        },
    },
    methods: {
        nextSlide() {
        this.currentSlide = (this.currentSlide  + 1 ) % 3;
        },
        prevSlide() {
        this.currentSlide = (this.currentSlide + 2 )%3 ;
        },
    },
}

</script>

<style>
.oval{
    background-image:url('../assets/icon-home/bg-oval.png');
}
.slider {
    height: 100vh;
    overflow: hidden;
  
}

.slides {
    display: flex;
    height: 100%;
    width: 300%;
    transition: transform 0.7s;
  
}
.slide {
    flex: 2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

}
</style>
