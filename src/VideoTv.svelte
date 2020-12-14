<script>
    import { onMount, onDestroy } from 'svelte';
    import videojs from 'video.js';
    import 'video.js/dist/video-js.css'

    export let selectedTv;
    let videoPlayer;
    let player;

    onMount(() => {
        player = videojs(videoPlayer.querySelector('video'));
    });

    onDestroy(() => {
        player.dispose();
    });
</script>

<div bind:this={videoPlayer} class="tv-video">
    <video controls class="tv-video video-js" autoplay>
        <source src={selectedTv.video} type="application/x-mpegURL" />
    </video>
</div>

<style>
    .tv-video {
        width: 100%;
        height: 100%;
    }
</style>