<script>
    import { onDestroy } from 'svelte';
    import { nytvStore } from './store.js';
    import { sortedChannels } from './channelUtils';
    import VideoTv from './VideoTv.svelte';

    let selectedTv;

    const unsubscribe = nytvStore.subscribe(state => {
        selectedTv = sortedChannels[state.selectedChannel];
    });

    onDestroy(unsubscribe);
</script>

<div class="tv">
    {#if 'video' in selectedTv}
        {#key selectedTv.video}
            <VideoTv {selectedTv} />
        {/key}
    {:else}
    <iframe src={selectedTv.url} class="tv-frame" title={selectedTv.title}></iframe>
    {/if}
</div>

<style>
    .tv {
        height: 100%;
        width: 100%;
        background: black;
        box-sizing: border-box;
    }

    .tv-frame {
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>