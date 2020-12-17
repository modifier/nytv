<script>
    import { nytvStore } from './store.js';
    import {onDestroy, onMount} from 'svelte';
    import {getCountryName} from './countryNames';

    export let channel;

    let channelElement;

    let flagClass;

    let unsubscribe;

    let countryName;

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

    $: flagClass = 'channel__lang em em-flag-' + channel.countryCode;
    countryName = getCountryName(channel.countryCode);
</script>

<div class="channel"
     class:channel--selected={$nytvStore.selectedChannel === channel.id}
     on:click={selectChannel}
     bind:this={channelElement}>
    <div class="channel__title">
        <span class="channel__name">{ channel.title }</span> <span class="channel__lang">({ channel.lang })</span>
    </div>
    <div class="channel__country">
        <i class={flagClass}></i> { countryName }
    </div>
</div>

<style>
    .channel {
        padding: 0.3em 1em 0.4em;
        cursor: pointer;
    }

    .channel:not(:last-child) {
        margin-bottom: 0.2em;
    }

    .channel:hover {
        background: #f4f4f4;
    }

    .channel__title {
        padding: 0 0 0.2em 0;
        font-size: 11px;
    }

    .channel__name {
        font-size: 15px;
        font-weight: bold;
    }

    .channel--selected,
    .channel--selected:hover {
        background-color: lightsteelblue;
        cursor: default;
    }
</style>