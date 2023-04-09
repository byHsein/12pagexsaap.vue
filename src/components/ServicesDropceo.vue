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
                headerr: 'Keeping track of Content. Regulary Updating',
                bodyy: 'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros. Nulla facilisis id ipsum id dignissim',
                maxHeight: 272 
                },
                {
                headerr: 'Unlimited User Groups and Permissions ',
                bodyy: 'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros',
                maxHeight: 272 
                },
                {
                headerr: 'SEO link Building and Optimizing Tools for your website',
                bodyy: 'Cras lorem justo, pretium sit amet urna vitae, fermentum consectetur ante. Nunc accumsan sit amet nisl vulputate lobortis. Nullam egestas tortor quis pharetra tempus. Sed risus mauris, pulvinar quis laoreet quis, ornare quis eros',
                maxHeight: 272 
                },
                {
                headerr: 'Review website analytics to see how many visitors your site is getting',
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
