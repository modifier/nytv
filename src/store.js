import { writable } from 'svelte/store';
import { allTimezones, channelsByTimezoneOffsets } from './channels';

function createNyTvStore() {
    let defaultTimezone = allTimezones[0].offset;
    const { subscribe, update } = writable({
        selectedChannel: channelsByTimezoneOffsets[defaultTimezone][0].id
    });

    return {
        subscribe,
        setChannel: (channelId) => update(state => ({
            ...state,
            selectedChannel: channelId,
        })),
    };
}

export const nytvStore = createNyTvStore();