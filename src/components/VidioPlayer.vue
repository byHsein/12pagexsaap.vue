<template>
    <div>
        <div class="max-w-[1200px] mx-auto px-5 my-0">
            <div class="relative">
                <video
                    @play="handlePlay"
                    ref="vidioPlayer"
                    class="mx-auto mt-10 w-100 h-100 rounded-[12px] z-0 rounded-t-[12px]"
                    width="915"
                    height="473"
                    controls
                >
                    <source src="../assets/mp4/motifasi.mp4" type="video/mp4" />
                </video>
                <img
                    v-if="!isPlaying"
                    @click="playVidio"
                    :class="{ hidden: isPlaying }"
                    class="play-button absolute cursor-pointer top-[50%] left-[50%] w-[80px] h-[80px]"
                    src="../assets/icon-home/Play-btn.png "
                    alt=""
                />
                <img
                    v-else-if="isPlaying"
                    @click="pauseVidio"
                    :class="{ hidden: isPaused }"
                    class="play-button absolute cursor-pointer top-[50%] left-[50%] w-[80px] h-[80px]"
                    src="../assets/icon-home/pause.png"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
            isPaused: false,
        };
    },
    methods: {
        playVidio() {
            this.$refs.vidioPlayer.play();
        },
        pauseVidio() {
            this.$refs.vidioPlayer.pause();
            this.pauseVidio = false;
        },
        handlePlay() {
            this.isPlaying = true;
            this.isPaused = true;
        },
    },
};
</script>

<style>
.play-button {
    transform: translate(-50%, -50%);
}
</style>
