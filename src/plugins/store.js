import { defineStore } from 'pinia';
import crypto from '@/plugins/crypto';

export const useMainStore = defineStore('main', {
    state: () => ({
        // boss属性
        boss: {
            name: '',
            text: '',
            time: 0,
            desc: '',
            level: 0,
            dodge: 0,
            attack: 0,
            health: 0,
            conquer: false,
            defense: 0,
            critical: 0,
            maxhealth: 0
        },
        // 玩家属性
        player: {
            zc: false,
            age: 1,
            pet: {},
            time: 0,
            name: '玩家',
            dark: false,
            npcs: [],
            wife: {},
            pets: [],
            wifes: [],
            props: {
                money: 999999999999,
                flying: 9999,
                qingyuan: 9999,
                rootBone: 9999,
                currency: 9999,
                cultivateDan: 9999,
                strengtheningStone: 9999
            },
            score: 0,
            level: 0,
            dodge: 0.66,
            points: 9999,
            attack: 10,
            health: 5201314,
            critical: 0.88,
            defense: 888,
            taskNum: 0,
            version: 0.8,
            currency: 0,            
            maxHealth: 5201314,
            inventory: [],
            isNewbie: false,
            shopData: [],
            equipment: {
                sutra: {},
                armor: {},
                weapon: {},
                accessory: {}
            },
            achievement: {
                pet: [],
                monster: [],
                equipment: []
            },
            script: '',
            cultivation: 0,
            currentTitle: null,
            reincarnation: 0,
            maxCultivation: 100,
            backpackCapacity: 5201314,
            sellingEquipmentData: [],
            highestTowerFloor: 1,
            rewardedTowerFloors: [],
            nextGameTimes: {
                rps: null,
                dice: null,
                fortune: null,
                secretrealm: 0,
                gamblingStone: null
            },
            gameWins: 0,
            gameLosses: 0,
            checkinDays: 0,
            checkinStreak: 0,
            lastCheckinDate: null,
            fortuneTellingDate: null
        },
        // 怪物信息
        monster: {
            name: '',
            // 气血
            health: 0,
            // 攻击
            attack: 0,
            // 防御
            defense: 0,
            // 闪避率
            dodge: 0,
            // 暴击
            critical: 0
        },
        mapData: {
            y: 0,
            x: 0,
            map: []
        },
        mapScroll: 0,
        fishingMap: [],
    }),
    persist: {
        key: 'vuex',
        paths: ['boss', 'player'],
        storage: localStorage,
        serializer: {
            serialize: (state) => {
                return JSON.stringify({
                    boss: state.boss,//crypto.encryption(state.boss),
                    player: state.player//crypto.encryption(state.player)
                });
            },
            deserialize: (value) => {
                const state = JSON.parse(value);
                return {
                    boss: state.boss,//crypto.decryption(state.boss),
                    player: state.player//crypto.decryption(state.player)
                };
            }
        }
    }
});