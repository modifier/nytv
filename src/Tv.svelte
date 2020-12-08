<script>
    import { onDestroy } from 'svelte';
    import { nytvStore } from './store.js';
    import { channels } from './channels.js';

    let selectedTv;

    const unsubscribe = nytvStore.subscribe(state => {
        selectedTv = channels[state.selectedChannel];
    });

    onDestroy(unsubscribe);
</script>

<div class="tv">
    <iframe src={selectedTv.url} class="tv-frame"></iframe>
</div>

<style>
    .tv {
        height: 100%;
        width: 100%;
        background: black;
        padding-left: 1em;
        box-sizing: border-box;
    }

    .tv-frame {
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>