import ct from 'countries-and-timezones';
import channels from './channels';

const timezoneReg = /([-+]\d+):(\d+)/;

export const sortedChannels = sortChannelsByTimezones(channels);

function sortChannelsByTimezones(channels) {
    return [...channels].sort((channelA, channelB) => {
        const offsetA = getTimezoneOffset(channelA);
        const offsetB = getTimezoneOffset(channelB);

        return compareTimezones(offsetA, offsetB);
    });
}

function getTimezoneOffset(channel) {
    const timezone = ct.getTimezone(channel.timezoneName);

    return 'dstOffsetStr' in timezone ? timezone.dstOffsetStr : timezone.utcOffsetStr;
}

function getChannelsByTimezoneOffsets() {
    const channelsByTimezones = {};
    for (let id = 0; id < sortedChannels.length; id++) {
        const channel = sortedChannels[id];
        const offset = getTimezoneOffset(channel);

        channelsByTimezones[offset] = [...channelsByTimezones[offset] || [], {...channel, id}];
    }

    return channelsByTimezones;
}

export const channelsByTimezoneOffsets = getChannelsByTimezoneOffsets();

function compareTimezones(a, b) {
    const [_a, signedValueA] = a.match(timezoneReg);
    const [_b, signedValueB] = b.match(timezoneReg);

    let offsetA = parseInt(signedValueA, 10);
    let offsetB = parseInt(signedValueB, 10);

    return (offsetA > offsetB ? 1 : (offsetA === offsetB ? 0 : -1));
}

function getAllTimezones() {
    return [...Object.entries(channelsByTimezoneOffsets)]
        .map(([offset, channels]) => ({timezoneName: channels[0].timezoneName, offset}))
        .sort((a, b) => {
            return compareTimezones(a.offset, b.offset);
        });
}

export const allTimezones = getAllTimezones();