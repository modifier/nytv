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

<iframe src={selectedTv.url}></iframe>