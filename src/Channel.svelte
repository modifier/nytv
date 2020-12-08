<script>
    import { nytvStore } from './store.js';

    export let channel;
    export let id;

    let flagClass;

    function selectChannel() {
        nytvStore.setChannel(id);
    }

    $: flagClass = 'channel__lang em em-flag-' + channel.lang;
</script>

<div class="channel" class:channel--selected={$nytvStore.selectedChannel === id} on:click={selectChannel}>
    <i class={flagClass}></i> <span class="channel__name">{ channel.title }</span>
</div>

<style>
    .channel {
        padding: 0.2em 1em;
        cursor: pointer;
    }

    .channel:hover {
        background: #f4f4f4;
    }

    .channel--selected,
    .channel--selected:hover {
        background-color: mintcream;
        cursor: default;
    }

    .channel__lang {
        width: 1.2em;
        height: 1.2em;
        vertical-align: bottom;
    }
</style>