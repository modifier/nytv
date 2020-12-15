<script>
    import { nytvStore } from './store.js';
    import {onDestroy, onMount} from 'svelte';

    export let channel;

    let channelElement;

    let flagClass;

    let unsubscribe;

    onMount(() => {
        unsubscribe = nytvStore.subscribe(state => {
            if (state.needToScrollIntoView && state.selectedChannel === channel.id) {
                channelElement && channelElement.scrollIntoView();
                nytvStore.resetScrollIntoView();
            }
        });
    });

    onDestroy(unsubscribe);

    function selectChannel() {
        nytvStore.setChannel(channel.id);
    }

    $: flagClass = 'channel__lang em em-flag-' + channel.lang;
</script>

<div class="channel"
     class:channel--selected={$nytvStore.selectedChannel === channel.id}
     on:click={selectChannel}
     bind:this={channelElement}>
    <i class={flagClass}></i> <span class="channel__name">{ channel.title }</span>
</div>

<style>
    .channel {
        padding: 0.4em 1em;
        cursor: pointer;
    }

    .channel:hover {
        background: #f4f4f4;
    }

    .channel--selected,
    .channel--selected:hover {
        background-color: lightsteelblue;
        cursor: default;
    }

    .channel__lang {
        width: 1.2em;
        height: 1.2em;
        vertical-align: bottom;
    }
</style>