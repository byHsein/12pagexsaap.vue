<template>
    <div class="bg3 bg-no-repeat h-screen ">
        <div class="mx-auto my-0 px-5 max-w-[1200px]">
            <div class="block lg:flex ">
                <div class="pt-[212px]" >
                    <h1 style="color: #1f1f1f;" class="pappins text-center sm:text-left lg:pr-[590px] font-bold text-[36px] pt-24 ">How to Choose your Xsaap Plan?</h1>
                    <div class="content1"  v-for="(item, index) in items" :key="index" >
                        <div class="header1" @click="toggleItem(index)" :class="{ active: activeIndex === index }">
                            {{ item.header1 }}
                        </div>
                        <div class="body1" :style="{ maxHeight: activeIndex === index ? item.maxHeight + 'px' : 0 }">
                            <div style="color: #747474;" class="body-content1 text-base leading-[26px]">
                                {{ item.body1 }}
                            </div>
                        </div>
                    </div> 
                    <div class="flex gap-5 pt-[40px]">
                        <div style="color: #3B00AD;" class="text-base font-bold verdana leading-[19px]"><a href="#">Read more</a></div>
                        <img class=" justify-center pt-1" src="../assets/icon-home/arrow-right.png">
                    </div>
                </div>
                <div class="">
                    <img class="2xl:max-w-[979px] lg:max-w-[500px] xl:max-w-[600px] mx-auto h-[508.8px] right-0 absolute mt-[260px]  rounded-sm" src="../assets/bg-home/img3.jpg">
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

export default {
    data() {
        return {
        activeIndex: null,
            items: [
                {
                header1: 'Use Case and Solutions',
                body1: 'Cras lorem justo, pretium sit amet urna vitae fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim',
                maxHeight: 272 
                },
                {
                header1: 'Budget',
                body1: 'Cras lorem justo, pretium sit amet urna vitae fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim',
                maxHeight: 272
                },
                {
                    header1:'Number of Users and Work Space',
                    body1:'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim',
                    maxHeight: 272
                },
                {
                    header1:'Specific Functionality',
                    body1:'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim',
                    maxHeight:272
                }
            ]
        }
    },
    methods: {
        toggleItem(index) {
        if (this.activeIndex === index) {
            this.activeIndex = null
        } else {
            this.activeIndex = index
        }
        this.$nextTick(() => {
            const itemBody1 = this.$refs.items[index].querySelector('.body1')
            this.items[index].maxHeight = itemBody1.scrollHeight
        })
        }
    }
}
</script>

<style>
.bg3{
    background-image: url('../assets/bg-home/Bg3.png');
}
.content1{
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.219624);
    margin-top:20px;
    max-width:480px;
    border-radius:12px;
    background:#fff;
}
.header1{
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
.header1::before{
    display:block;
    content:"";
    background:url("../assets/icon-home/Caret-r.png") no-repeat;
    width:24px;
    height:24px;
    margin-top:5px;
    position:absolute;
    left:30px;
}
.header1.active::before{
    display:block;
    content:"";
    background:url("../assets/icon-home/caret-down.png") no-repeat;
    width:24px;
    height:30px;
    margin-top:10px;
    position:absolute;
    left:20px;

}
.header1.active{
    color: #FF3D00;
}
.body1{
    max-height:0;
    overflow:hidden;
}
.body-content1{
    padding-bottom:43px;
    padding-left:50px;
    padding-right:55px
    
    
}


</style>