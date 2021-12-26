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

<div class="tv" class:tv--redirect={'redirect' in selectedTv}>
    {#if 'video' in selectedTv}
        {#key selectedTv.video}
            <VideoTv {selectedTv} />
        {/key}
    {:else if 'redirect' in selectedTv}
        <div class="tv-align">
            <a class="tv-redirect-button" href={selectedTv.redirect} target="_blank">Open in a separate tab</a>
        </div>
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

    .tv--redirect {
        background: #f4f4f4;
    }

    .tv-align {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tv-redirect-button {
      border: 2px #111111 solid;
      border-radius: 5px;
      padding: 5px 7px;
      background-color: white;
      transition: 0.3s all;
    }

    .tv-redirect-button:hover {
      text-decoration: none;
      background-color: ghostwhite;
      box-shadow: #666666 2px 2px 7px 0;
    }

    .tv-frame {
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>