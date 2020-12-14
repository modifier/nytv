import ct from 'countries-and-timezones';

export const channels = [
    {
        timezoneName: 'Europe/Dublin',
        title: 'TG4',
        lang: 'ie',
        url: 'https://www.tg4.ie/en/player/watch-live/home/',
        video: 'https://csm-e-tg4ie.tls1.yospace.com/csm/live/195340990.m3u8'
    },
    {
        timezoneName: 'Europe/London',
        title: 'Sky News',
        lang: 'gb',
        url: 'https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1'
    },
    {
        timezoneName: 'Asia/Seoul',
        title: 'KBS',
        lang: 'kr',
        url: 'https://www.youtube.com/embed/4gwqZYZ-OSw?autoplay=1'
    },
    {
        timezoneName: 'Pacific/Fiji',
        title: 'Fiji TV',
        lang: 'fj',
        url: 'https://livestream.com/accounts/19514369/events/6947821/player?enableInfoAndActivity=true&defaultDrawer&autoPlay=true&mute=false'
    },
    {
        timezoneName: 'Pacific/Auckland',
        title: 'Parliament',
        lang: 'nz',
        url: 'https://ondemand.parliament.nz',
        video: 'https://ptvlive.kordia.net.nz/out/v1/daf20b9a9ec5449dadd734e50ce52b74/index.m3u8'
    },
    {
        timezoneName: 'Pacific/Guam',
        title: 'Гуам',
        lang: 'gu',
        url: 'https://livestream.com/accounts/10612724/events/8102121/player?enableInfoAndActivity=true&defaultDrawer=&autoPlay=true'
    },
    {
        timezoneName: 'Australia/Sydney',
        title: 'ABC News',
        lang: 'au',
        url: 'https://www.youtube.com/embed/W1ilCy6XrmI?autoplay=1'
    },
    {
        timezoneName: 'Asia/Tokyo',
        title: 'NHK World',
        lang: 'jp',
        url: 'https://www3.nhk.or.jp/nhkworld/common/player/tv/live/embed/embed.html'
    },
    {
        timezoneName: 'Asia/Taipei',
        title: 'FTVN',
        lang: 'tw',
        url: 'https://www.youtube.com/embed/XxJKnDLYZz4?autoplay=1'
    },
    {
        timezoneName: 'Asia/Shanghai',
        title: 'CGTN',
        lang: 'cn',
        url: 'https://www.cgtn.com/tv',
        video: 'https://news.cgtn.com/resource/live/english/cgtn-news.m3u8'
    },
    {
        timezoneName: 'Asia/Dhaka',
        title: 'TV One',
        lang: 'bd',
        url: 'https://www.tvoneuk.tv',
        video: 'https://cdn.appv.jagobd.com:444/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/tvoneuksni.stream/playlist.m3u8'
    },
    {
        timezoneName: 'Indian/Maldives',
        title: 'Maldives TV',
        lang: 'mv',
        url: 'https://maldivestv.mv',
        video: 'https://58bdd3c8ef31c.streamlock.net/live/smil:maldivestv.smil/playlist.m3u8'
    },
    {
        timezoneName: 'Asia/Karachi',
        title: 'Indus News',
        lang: 'pk',
        url: 'https://www.youtube.com/embed/D9KHbHipoJ4?autoplay=1'
    },
    {
        timezoneName: 'Asia/Karachi',
        title: 'ARY',
        lang: 'pk',
        url: 'https://live.arydigital.tv',
        video: 'https://6zklx4wryw9b-hls-live.5centscdn.com/arydigital/f7b44cfafd5c52223d5498196c8a2e7b.sdp/playlist.m3u8'
    },
    {
        timezoneName: 'Asia/Tashkent',
        title: 'Uzreport TV',
        lang: 'uz',
        url: 'https://uzreport.news/live',
        video: 'https://vspnmy3kvpzu7q.data.mediastore.eu-central-1.amazonaws.com/live.m3u8'
    },
    {
        timezoneName: 'Asia/Dubai',
        title: 'Al Arabiya',
        lang: 'ae',
        url: 'https://www.youtube.com/embed/_M7Kcs8el-Q?autoplay=1'
    },
    {
        timezoneName: 'Asia/Dubai',
        title: 'Dubai One',
        lang: 'ae',
        url: 'https://www.awaan.ae/live/10/One-Tv',
        video: 'https://dminnvll.cdn.mangomolo.com/dubaione/smil:dubaione.stream.smil/playlist.m3u8'
    },
    {
        timezoneName: 'Europe/Istanbul',
        title: 'TRT World',
        lang: 'tr',
        url: 'https://www.youtube.com/embed/CV5Fooi8YJA?autoplay=1'
    },
    {
        timezoneName: 'Europe/Moscow',
        title: 'Channel One',
        lang: 'ru',
        url: 'https://www.1tv.ru/iframed/embedlive.html'
    },
    {
        timezoneName: 'Europe/Moscow',
        title: 'Belarus 24',
        lang: 'by',
        url: 'https://belarus24.by',
        video: 'https://stream.hoster.by/belarus24hd/livehd/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTIvMTQvMjAyMCA4OjA5OjM4IFBNJmhhc2hfdmFsdWU9T2VUOGtnc1NmMnc2cmt4VU5DWnJpUT09JnZhbGlkbWludXRlcz0xMjA='
    },
    {
        timezoneName: 'Africa/Nairobi',
        title: 'Universal TV',
        lang: 'so',
        url: 'https://www.universaltvsomali.net/home'
    },
    {
        // Renews youtube linke every once in a while
        timezoneName: 'Africa/Nairobi',
        title: 'KTN News',
        lang: 'ke',
        url: 'https://www.youtube.com/embed/O3Gib2QEipY?autoplay=1'
    },
    {
        // No broadcasting in Russia
        timezoneName: 'Europe/Bucharest',
        title: 'TBR',
        lang: 'ro',
        url: 'https://www.tvrplus.ro',
        video: 'https://mn-nl.mncdn.com/tvr1_hd_live/smil:tvr1_hd_live.smil/index.m3u8'
    },
    {
        timezoneName: 'Africa/Johannesburg',
        title: 'CNBC',
        lang: 'za',
        url: 'https://www.youtube.com/embed/CV5Fooi8YJA?autoplay=1'
    },
    {
        timezoneName: 'Africa/Johannesburg',
        title: 'Gqama TV',
        lang: 'za',
        url: 'http://www.gqama.tv/live.php'
    },
    {
        timezoneName: 'Africa/Cairo',
        title: 'Alghad TV',
        lang: 'eg',
        url: 'https://www.youtube.com/embed/s_lfbFjs_Yw?autoplay=1'
    },
    {
        timezoneName: 'Europe/Stockholm',
        title: 'Expressen TV',
        lang: 'se',
        url: 'https://www.squidtv.net/europe/sweden/sweden-013.html',
        video: 'https://httpcache0-03837-cachelive2.dna.ip-only.net/03837-cachelive2/smil:03837_tx2_720p/playlist.m3u8'
    },
    {
        timezoneName: 'Atlantic/Reykjavik',
        title: 'RUV',
        lang: 'is',
        url: 'https://www.ruv.is/ruv',
        video: 'https://ruvruverl-live-hls.secure.footprint.net/2d4ff135084b046167dd4941f8a3333b8579db5b-1607976271/ruv/ruverl/index.m3u8'
    },
    {
        timezoneName: 'Atlantic/Cape_Verde',
        title: 'RTP Africa',
        lang: 'cv',
        url: 'https://www.rtp.pt/play/direto/rtpafrica',
        video: 'https://streaming-live.rtp.pt/liverepeater/smil:rtpafrica.smil/playlist.m3u8?pxt_rtp'
    },
];

function getChannelsByTimezoneOffsets() {
    const channelsByTimezones = {};
    for (let id = 0; id < channels.length; id++) {
        const channel = channels[id];
        const timezone = ct.getTimezone(channel.timezoneName);
        const offset = 'dstOffsetStr' in timezone ? timezone.dstOffsetStr : timezone.utcOffsetStr;

        channelsByTimezones[offset] = [...channelsByTimezones[offset] || [], {...channel, id}];
    }

    return channelsByTimezones;
}

export const channelsByTimezoneOffsets = getChannelsByTimezoneOffsets();

const timezoneReg = /([-+]\d+):(\d+)/;

function getAllTimezones() {
    return [...Object.entries(channelsByTimezoneOffsets)]
        .map(([offset, channels]) => ({timezoneName: channels[0].timezoneName, offset}))
        .sort((a, b) => {
            const [_a, signedValueA] = a.offset.match(timezoneReg);
            const [_b, signedValueB] = b.offset.match(timezoneReg);

            return (parseInt(signedValueA, 10) > parseInt(signedValueB, 10) ? 1 : -1);
        });
}

export const allTimezones = getAllTimezones();

export default channels;