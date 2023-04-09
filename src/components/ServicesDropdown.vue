<template>
    <div>
        <div class="contentt"  v-for="(item, index) in items" :key="index" >
            <div class="headerr" @click="toggleItem(index)" :class="{ active: activeIndex === index }">
                {{ item.headerr }}
            </div>
            <div class="bodyy " :style="{ maxHeight: activeIndex === index ? item.maxHeight + 'px' : 0 }">
                <div style="color: #747474;" class="body-contentt pb-[35px] text-base leading-[26px]">
                    {{ item.bodyy }}
                </div>
            </div>
            <div style="background: #747474;opacity: 0.2;" class="w-[280px] md:w-[395px] translate-x-[10px]  md:translate-x-[51px] pl-10 h-[1px]"></div>
        </div>
        <button class="w-full lg:w-[440px] h-[54px] rounded-xl  bg-blue-violet hover:bg-violet-700 delay-75 duration-10 mt-[36px] text-center verdana font-bold text-white ">
            Explore Solutions and Prices 
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        activeIndex: null,
            items: [
                {
                headerr: 'Domain names. Data Safety and Added Security Services',
                bodyy: 'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim',
                maxHeight: 272 
                },
                {
                headerr: 'Faster 3x Load Time, CDN and Unlimited Charged Cloud  ',
                bodyy: 'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros',
                maxHeight: 272 
                },
                {
                headerr: 'Data analysis. Automated Restore and Backups',
                bodyy: 'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros',
                maxHeight: 272 
                },
                {
                headerr: '24/7/365 Support',
                bodyy: 'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros',
                maxHeight: 272 
                },
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
            const itemBodyy = this.$refs.items[index].querySelector('.bodyy')
            this.items[index].maxHeight = itemBodyy.scrollHeight
        })
        }
    }
}
</script>

<style>
.contentt{
    margin-top:20px;
    max-width:416px;
}
.headerr{
    font-family:'pappins',sans-serif;
    font-size:24px;
    min-height:36px;
    font-weight: 700;
    line-height:30px;
    padding:24px 0 10px 25px;
    cursor:pointer;
    display:flex;
    align-items:center;
    position:relative;
    color: #1F1F1F;
   

}
.headerr::before{
    display:block;
    content:"";
    background:url("../assets/icon-company/angle-right.png") no-repeat;
    width:24px;
    height:24px;
    margin-top:5px;
    position:absolute;
    left:0px;
}
.headerr.active::before{
    display:block;
    content:"";
    background:url("../assets/icon-company/angle-down.png") no-repeat;
    width:24px;
    height:30px;
    margin-top:10px;
    position:absolute;
    left:0px;

}

.headerr.active{
    color: #FF3D00;
}
.bodyy{
    max-height:0;
    overflow:hidden;
    padding-left:25px;
    
}
.translate{
    translate: 108px 37px;
}

@media screen and (min-width: 1024px){
    .headerr{
        padding:24px 0 10px 50px;
    }
    .bodyy{
        padding-left:51px
    }
    .headerr::before{
        left:25px;
    }
    .headerr.active::before{
        left:25px;

    }
}


</style>