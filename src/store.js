import { writable } from 'svelte/store';
import { sortedChannels, allTimezones } from './channelUtils';

function createNyTvStore() {
    const { subscribe, update } = writable({
        selectedChannel: parseInt(localStorage.getItem('selectedChannel'), 10) || 0
    });

    return {
        subscribe,
        setChannel: (channelId) => update(state => {
            localStorage.setItem('selectedChannel', channelId);

            return ({
                ...state,
                selectedChannel: channelId,
            });
        }),
        nextChannel: () => update(state => {
            let channelId = state.selectedChannel + 1;

            if (channelId >= sortedChannels.length) {
                channelId = 0;
            }

            localStorage.setItem('selectedChannel', channelId);

            return ({
                ...state,
                selectedChannel: channelId,
            });
        }),
        prevChannel: () => update(state => {
            let channelId = state.selectedChannel - 1;

            if (channelId < 0) {
                channelId = sortedChannels.length - 1;
            }

            localStorage.setItem('selectedChannel', channelId);

            return ({
                ...state,
                selectedChannel: channelId,
            });
        })
    };
}

export const nytvStore = createNyTvStore();