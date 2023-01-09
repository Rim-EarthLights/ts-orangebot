/**
 * ガチャ品
 */

import { ICON } from '../constants';

export const GACHA_LIST = [
    {
        rare: 'UUR',
        icon: ICON.CROWN,
        name: 'プレミアムお食事券(PayPay or Steamギフト券10,000円分)',
        is_present: 1,
        weight: 1
    },
    {
        rare: 'UUR',
        icon: ICON.CROWN,
        name: 'プレミアムお食事券(PayPay or Steamギフト券5,000円分)',
        is_present: 1,
        weight: 4
    },
    {
        rare: 'UUR',
        icon: ICON.CROWN,
        name: 'プレミアムお食事券(PayPay or Steamギフト券3,000円分)',
        is_present: 1,
        weight: 5
    },
    {
        rare: 'UR',
        icon: ICON.SPARKLES,
        name: 'みかんちゃんに対応ワード追加券',
        is_present: 1,
        weight: 3
    },
    {
        rare: 'UR',
        icon: ICON.SPARKLES,
        name: '封印されしりむの右腕',
        is_present: 0,
        weight: 3
    },
    {
        rare: 'UR',
        icon: ICON.SPARKLES,
        name: 'プレミアムお食事券(PayPay or Steamギフト券500円分)',
        is_present: 1,
        weight: 5
    },
    {
        rare: 'UR',
        icon: ICON.SPARKLES,
        name: 'プレミアムお食事券(PayPay or Steamギフト券1,000円分)',
        is_present: 1,
        weight: 3
    },
    {
        rare: 'UR',
        icon: ICON.SPARKLES,
        name: 'プレミアムお食事券(PayPay or Steamギフト券1,500円分)',
        is_present: 1,
        weight: 2
    },
    {
        rare: 'UR',
        icon: ICON.SPARKLES,
        name: 'プレミアムお食事券(PayPay or Steamギフト券2,000円分)',
        is_present: 1,
        weight: 1
    },
    {
        rare: 'SSR',
        icon: ICON.STAR + ICON.TICKETS,
        name: 'ガチャ+20連チケット',
        is_present: 0,
        reroll: 20,
        weight: 8
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: '初音ミクフィギュア',
        is_present: 0,
        weight: 2
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: '鏡音リンフィギュア',
        is_present: 0,
        weight: 2
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: '鏡音レンフィギュア',
        is_present: 0,
        weight: 2
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: '巡音ルカフィギュア',
        is_present: 0,
        weight: 2
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: 'りむの無くしたメガネ',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: '壊れたジョイコン3点セット',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: 'とんこつラーメン+半チャーハンセット',
        is_present: 0,
        weight: 2
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: 'もぎもぎフルーツグミ',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: '飲むフルーツゼリー',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: 'ノイズキャンセリングイヤホン',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SSR',
        icon: ICON.STAR,
        name: 'めあの写真',
        is_present: 0,
        weight: 3
    },
    {
        rare: 'SR',
        icon: ICON.TICKETS,
        name: 'ガチャ+10連チケット',
        is_present: 0,
        reroll: 10,
        weight: 5
    },
    {
        rare: 'SR',
        name: '棘竜の天鱗',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SR',
        name: '火竜の紅玉',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SR',
        name: '黒蝕竜の天鱗',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SR',
        name: '斬竜の天鱗',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SR',
        name: 'ゲーミングノートPC',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SR',
        name: 'ごはん200g',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'SR',
        name: '黒烏龍茶1,000ml',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: '塩タン1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'カルビ1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'ハンバーグ1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'ハラミ1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'コカ・コーラ 500ml',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'アクエリアス 500ml',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'ハチノス1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'ハツ1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'ミノ1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'ホルモン1人前',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: '七味唐辛子',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'R',
        name: 'たまねぎスープ',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'UC',
        name: '温州みかん',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'UC',
        name: '龍の髭',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'UC',
        name: '唐辛子',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'UC',
        name: '烏龍茶 500ml',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'UC',
        name: 'チキンナゲット',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'UC',
        name: 'たまごスープ',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'C',
        name: '綿棒',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'C',
        name: '鼻がかゆくなるマスク',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'C',
        name: 'ダンボール',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'C',
        name: '水素水',
        is_present: 0,
        weight: 1
    },
    {
        rare: 'C',
        name: 'お吸いもの',
        is_present: 0,
        weight: 1
    }
];
