<template>
    <div class="mx-auto max-w-[1200px] px-5 my-0">
        <div>
            <div>
                <h1 class="pappins text-[36px] pt-[55.07px] leading-[54px] font-bold text-center" style="color: #1F1F1F;">Services that Speed Up Succes</h1>
                <p class="verdana text-base font-normal px-0 pt-[4px] lg:px-[220px] text-center text-Custom ">
                    Integer mauris ipsum, consequat tincidunt orci eu, consectetur tempus est. Sed posuere sem a convallis maximus. Curabitur consequat dignissim nisl, at efficitur justo
                </p>
            </div>
            <div class="grid gap-5 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[24px]">
                <div class="card shadow-hover1" @mouseover="showButton(1)" @mouseleave="hideButton(1)">
                    <div class="w-[345px] mx-auto h-[372px] rounded-xl bg-white hv-custom ">
                        <img class="items-center pt-[19px] pl-[141px]" src="../assets/icon-company/s-Icon1.png" alt="">
                        <h1 class="pappins pt-[18px] px-[35px] text-[20px] leading-[30px] font-bold text-center" style="color: #1F1F1F;">
                            Full-Service Website, Domain and Hosting
                        </h1>
                        <p class="verdana px-[30px] pt-[12px] font-normal text-base text-center text-Custom ">
                            Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium
                        </p>
                        <div class="hidden-box" :class="{ 'visible': isButtonVisible[1] }">
                            <button class="verdana mx-[108px] text-base hide leading-[19px] font-bold text-center mt-[35px] ;" style="color:#3B00AD;">Read more ➜</button>
                        </div>
                    </div>
                </div>
                <div class="card shadow-hover2"  @mouseover="showButton(2)" @mouseleave="hideButton(2)">
                    <div class="w-[345px] mx-auto h-[372px] rounded-xl bg-white hv-custom ">
                        <img class="items-center pt-[19px] pl-[141px]" src="../assets/icon-company/s-Icon2.png" alt="">
                        <h1 class="pappins pt-[18px] px-[35px] text-[20px] leading-[30px] font-bold text-center" style="color: #1F1F1F;">
                            Content Management with SEO Services
                        </h1>
                        <p class="verdana px-[30px] pt-[12px] font-normal text-base text-center text-Custom ">
                            Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium
                        </p>
                        <div class="hidden-box" :class="{ 'visible': isButtonVisible[2] }">
                            <button class="verdana mx-[108px] text-base hide leading-[19px] font-bold text-center mt-[35px] ;" style="color:#3B00AD;">Read more ➜</button>
                        </div>
                    </div>
                </div>
                <div class="card shadow-hover3"  @mouseover="showButton(3)" @mouseleave="hideButton(3)">
                    <div class="w-[345px] mx-auto h-[372px] rounded-xl bg-white hv-custom ">
                        <img class="items-center pt-[19px] pl-[141px]" src="../assets/icon-company/s-icon3.png" alt="">
                        <h1 class="pappins pt-[18px] px-[35px] text-[20px] leading-[30px] font-bold text-center" style="color: #1F1F1F;">
                            Web and Software Development
                        </h1>
                        <p class="verdana px-[30px] pt-[12px] font-normal text-base text-center text-Custom ">
                            Nulla lacus ipsum, tincidunt in dui sit amet, fringilla vehicula tellus. Duis posuere gravida nibh a sollicitudin. Nulla pretium
                        </p>
                        <div class="hidden-box" :class="{ 'visible': isButtonVisible[3] }">
                            <button class="verdana mx-[108px] text-base hide leading-[19px] font-bold text-center mt-[35px] ;" style="color:#3B00AD;">Read more ➜</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        isButtonVisible: [false, false, false, false],
        };
    },
    methods: {
        showButton(cardIndex) {
        this.isButtonVisible[cardIndex] = true;
        },
        hideButton(cardIndex) {
        this.isButtonVisible[cardIndex] = false;
        },
    },
}
</script>

<style>
.shadow-hover1:hover{
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.0969733);
    border-radius: 12px;
}
.shadow-hover2:hover{
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.0969733);
    border-radius: 12px;
}
.shadow-hover3:hover{
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.0969733);
    border-radius: 12px;
}
.hidden-box{
    display: none;
}
.visible{
    display: block;
}

</style>