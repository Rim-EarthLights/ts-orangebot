import dayjs from 'dayjs';
import { Message } from 'discord.js';
import * as Commands from './commands';
import * as BotFunctions from './function';

/**
 * 反応ワードから処理を実行する
 * @param message 渡されたメッセージ
 * @returns
 */
export async function wordSelector(message: Message) {
    if (message.content.match('(言語は|ヘルプ|help)')) {
        Commands.help(message);
        return;
    }
    if (message.content.match('おはよ')) {
        BotFunctions.Mention.morning(message);
        return;
    }
    if (message.content.match('(こんにちは|こんにちわ)')) {
        BotFunctions.Mention.hello(message);
        return;
    }
    if (message.content.match('(こんばんは|こんばんわ)')) {
        BotFunctions.Mention.evening(message);
        return;
    }
    if (message.content.match('(おやすみ|寝るね|ねるね)')) {
        BotFunctions.Mention.goodNight(message);
        return;
    }
    if (message.content.match('ガチャ')) {
        await BotFunctions.Gacha.pickGacha(message);
    }
    if (message.content.match('(かわい|かわよ|可愛い)')) {
        message.reply('えへへ～！ありがと嬉しい～！');
        return;
    }
    if (message.content.match('みかん')) {
        message.reply('はーい！私のこと呼んだ～？');
    }
    if (message.content.match('(好き|すき)')) {
        if (message.content.match('(好き|すき)？')) {
            message.reply('私も好きだよ～！');
        } else {
            message.reply('わわっ……照れちゃうけど嬉しい！私も大好きだよ～！');
        }
        return;
    }
    if (message.content.match('(愛|あい)してる')) {
        message.reply('あ……ぅ……えっと、あ、ありがと……？');
        return;
    }
    if (message.content.match('(綺麗|きれい|美人|美しい)')) {
        message.reply('え、えぇ…！？あ、ありがとね…？');
    }
    if (message.content.match('キスして')) {
        message.reply('な、ななな何を突然………\nえっと………………やっぱりだめ！！');
    }
    if (message.content.match('チョコレート')) {
        const month = dayjs().month();
        const day = dayjs().day();
        if (month === 2 && day === 14) {
            message.reply('あ、もちろんあるよ～！チョコレートどーぞ！:chocolate_bar:');
        } else {
            message.reply('チョコレート美味しいよね～！');
        }
        return;
    }
    if (message.content.match('クッキー')) {
        const month = dayjs().month();
        const day = dayjs().day();
        if (month === 3 && day === 14) {
            message.reply('もしかしてお返し……！？本当にありがとう～！');
        } else {
            message.reply('クッキーおいしいから大好きだよ～！');
        }
        return;
    }
    if (message.content.match('ケーキ')) {
        const month = dayjs().month();
        const day = dayjs().day();
        if (month === 12 && day === 24) {
            message.reply('メリークリスマスだね～！ケーキ一緒に食べよ:cake:');
        } else {
            message.reply('ケーキはやっぱり王道のショートケーキが好きかな～！');
        }
        return;
    }
    if (message.content.match('(ごめん|すみません)')) {
        message.reply('んー……？なにかわるいことしたりした……？気にしてないから大丈夫だよ～！');
        return;
    }
    if (message.content.match('(癒して|癒やして|いやして)')) {
        message.reply('どしたの…？よしよし……');
        return;
    }
    if (message.content.match('(行ってくる|行く|出かける)')) {
        message.reply('どこかお出かけ？気をつけていってらっしゃーい！');
    }
    if (message.content.match('何時')) {
        message.reply(`今の時間は${dayjs().format('HH時mm分')}だよ～！`);
    }
    if (message.content.match('貧乳')) {
        message.reply('………今言っちゃいけないこといった？？？');
    }
    if (message.content.match('つるぺた')) {
        message.reply('つるぺたっていうな～！');
    }
    if (message.content.match('(夕飯|ばんごはん|晩ごはん|晩飯)')) {
        message.reply('晩御飯だ～！今日はなにたべるの～？いっぱい食べてね！');
    }
    if (message.content.match('(にゃあ|にゃー)')) {
        message.reply('にゃ、にゃー？');
    }
    if (message.content.match('ぴょん')) {
        message.reply('ぴょんぴょん！');
    }
    if (message.content.match('(な|撫)でて')) {
        message.reply('ん、どしたの～？よしよしなでなで～……');
    }
    if (message.content.match('((抱|だ)きしめて|ぎゅー|ぎゅっ)')) {
        message.reply('え、えぇ！？う、うーん………ぎ、ぎゅー…？');
    }
    if (message.content.match('(運勢|みくじ)')) {
        await BotFunctions.Gacha.pickOmikuji(message);
        return;
    }
    if (message.content.match('(天気|てんき)')) {
        const cityName = await BotFunctions.Forecast.getPref(message.author.id);
        if (!cityName) {
            message.reply('地域が登録されてないよ！\n@みかんちゃん 地域覚えて [地域]  で登録して！');
            return;
        }
        const when = message.content.match(/今日|明日|\d日後/);
        let day = 0;
        if (when != null) {
            if (when[0] === '明日') {
                day++;
            }
            if (when[0].includes('日後')) {
                const d = when[0].replace('日後', '');
                day = Number(d);
            }
        }
        BotFunctions.Forecast.weather(message, [cityName, day.toString()]);
        return;
    }
    if (message.content.match('地域(覚|憶|おぼ)えて')) {
        const name = message.content.split(' ')[2];
        BotFunctions.Register.save(message, ['pref', name]);
        return;
    }
    if (message.content.match('名前(覚|憶|おぼ)えて')) {
        const name = message.content.split(' ')[2];
        BotFunctions.Register.save(message, ['name', name]);
        return;
    }
    if (message.content.match('誕生日(覚|憶|おぼ)えて')) {
        const name = message.content.split(' ')[2];
        BotFunctions.Register.save(message, ['birth', name]);
        return;
    }
    if (message.content.match(/\d+d\d+/)) {
        const match = message.content.match(/\d+d\d+/);
        if (match == null) {
            return;
        }
        const dice = match[0].split('d');
        await BotFunctions.Dice.roll(message);
        return;
    }
    message.reply('ごめんなさい、わからなかった……');
}
