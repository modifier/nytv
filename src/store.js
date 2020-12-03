import { writable } from 'svelte/store';
import { allTimezones, channelsByTimezoneOffsets } from './channels';

function createNyTvStore() {
    let defaultTimezone = allTimezones[0].offset;
    const { subscribe, update } = writable({
        selectedTimezone: defaultTimezone,
        selectedChannel: channelsByTimezoneOffsets[defaultTimezone][0].id,
        autoselect: false
    });

    return {
        subscribe,
        setTimezone: (timezone) => update(state => ({
            ...state,
            selectedTimezone: timezone,
        })),
        setChannel: (channelId) => update(state => ({
            ...state,
            selectedChannel: channelId,
        })),
    };
}

export const nytvStore = createNyTvStore();