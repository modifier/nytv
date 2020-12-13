<script>
    import { onMount } from 'svelte';
    import videojs from 'video.js';
    import 'video.js/dist/video-js.css'

    export let selectedTv;
    let videoPlayer;

    onMount(() => {
        videojs(videoPlayer);
    });
</script>

<video bind:this={videoPlayer} controls class="tv-video video-js" autoplay>
    <source src={selectedTv.video} type="application/x-mpegURL" />
</video>

<style>
    .tv-video {
        width: 100%;
        height: 100%;
    }
</style>