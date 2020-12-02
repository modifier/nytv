import { writable } from 'svelte/store';
import { allTimezones } from "./channels";

function createNyTvStore() {
    const { subscribe, set, update } = writable({
        selectedTimezone: allTimezones[0].offset,
        selectedChannel: null,
        autoselect: false
    });

    return {
        subscribe,
            setTimezone: (timezone) => update(state => ({
            ...state,
            selectedTimezone: timezone,
        })),
    };
}

export const nytvStore = createNyTvStore();