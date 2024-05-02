export class EmojiConverter {
    public emojiMapping: Record<string, string> = {
        '[微笑]': '😊',
        '[撇嘴]': '😚',
        '[色]': '😍',
        '[发呆]': '😳',
        '[得意]': '😏',
        '[流泪]': '😢',
        '[害羞]': '😳',
        '[闭嘴]': '😶',
        '[睡]': '😴',
        '[大哭]': '😭',
        '[尴尬]': '😳',
        '[发怒]': '😠',
        '[调皮]': '😜',
        '[呲牙]': '😁',
        '[惊讶]': '😲',
        '[难过]': '😔',
        '[囧]': '😳',
        '[抓狂]': '😤',
        '[吐]': '😝',
        '[偷笑]': '😏',
        '[愉快]': '😊',
        '[白眼]': '🙄',
        '[傲慢]': '😏',
        '[困]': '😴',
        '[惊恐]': '😱',
        '[憨笑]': '😊',
        '[悠闲]': '😎',
        '[咒骂]': '😠',
        '[疑问]': '❓',
        '[嘘]': '😶',
        '[晕]': '😵',
        '[衰]': '😞',
        '[骷髅]': '💀',
        '[敲打]': '👊',
        '[Bye]': '👋',
        '[擦汗]': '😅',
        '[抠鼻]': '👃',
        '[鼓掌]': '👏',
        '[坏笑]': '😏',
        '[右哼哼]': '😒',
        '[鄙视]': '😏',
        '[委屈]': '😔',
        '[快哭了]': '😢',
        '[阴险]': '😏',
        '[亲亲]': '😘',
        '[可怜]': '😢',
        '[笑脸]': '😊',
        '[生病]': '😷',
        '[脸红]': '😳',
        '[破涕为笑]': '😂',
        '[恐惧]': '😨',
        '[Let Down]': '😞',
        '[无语]': '😶',
        '[嘿哈]': '👍',
        '[捂脸]': '🤦‍♂️',
        '[奸笑]': '😏',
        '[机智]': '🤔',
        '[皱眉]': '😠',
        '[耶]': '✌️',
        '[吃瓜]': '🍿',
        '[加油]': '💪',
        '[汗]': '😓',
        '[天啊]': '😱',
        '[Emm]': '🤔',
        '[社会社会]': '👏',
        '[旺柴]': '🐶',
        '[好的]': '👌',
        '[打脸]': '🤦‍♂️',
        '[哇]': '😮',
        '[翻白眼]': '🙄',
        '[666]': '👍',
        '[让我看看]': '🤔',
        '[叹气]': '😔',
        '[苦涩]': '😔',
        '[裂开]': '😂',
        '[嘴唇]': '👄',
        '[爱心]': '❤️',
        '[心碎]': '💔',
        '[拥抱]': '🤗',
        '[强]': '💪',
        '[弱]': '🤕',
        '[握手]': '🤝',
        '[胜利]': '✌️',
        '[Salute]': '🎖️',
        '[勾引]': '😏',
        '[拳头]': '👊',
        '[OK]': '👌',
        '[合十]': '🙏',
        '[啤酒]': '🍺',
        '[咖啡]': '☕',
        '[蛋糕]': '🍰',
        '[玫瑰]': '🌹',
        '[凋谢]': '🥀',
        '[菜刀]': '🔪',
        '[炸弹]': '💣',
        '[便便]': '💩',
        '[月亮]': '🌙',
        '[太阳]': '☀️',
        '[庆祝]': '🎉',
        '[礼物]': '🎁',
        '[红包]': '🧧',
        '[發]': '💫',
        '[福]': '🈚',
        '[烟花]': '🎆',
        '[Firecracker]': '🧨',
        '[猪头]': '🐷',
        '[跳跳]': '🐸',
        '[发抖]': '😨',
        '[转圈]': '🔄',
        '[Smile]': '😊',
        '[Grimace]': '😬',
        '[Drool]': '🤤',
        '[Scowl]': '😡',
        '[CoolGuy]': '😎',
        '[Sob]': '😭',
        '[Shy]': '😳',
        '[Silent]': '😶',
        '[Sleep]': '😴',
        '[Cry]': '😢',
        '[Awkward]': '😳',
        '[Angry]': '😠',
        '[Tongue]': '😋',
        '[Grin]': '😁',
        '[Surprise]': '😲',
        '[Frown]': '😞',
        '[Blush]': '😊',
        '[Scream]': '😱',
        '[Puke]': '🤮',
        '[Chuckle]': '😊',
        '[Joyful]': '😊',
        '[Slight]': '😏',
        '[Smug]': '😏',
        '[Drowsy]': '😪',
        '[Panic]': '😱',
        '[Laugh]': '😆',
        '[Commando]': '😎',
        '[Scold]': '😠',
        '[Shocked]': '😲',
        '[Shhh]': '🤫',
        '[Dizzy]': '😵',
        '[Toasted]': '🍻',
        '[Skull]': '💀',
        '[Hammer]': '🔨',
        // '[Bye]': '👋',
        '[Speechless]': '😶',
        '[NosePick]': '👃',
        '[Clap]': '👏',
        '[Trick]': '🎩',
        '[Bah！R]': '😏',
        '[Pooh-pooh]': '😏',
        '[Shrunken]': '😳',
        '[TearingUp]': '😢',
        '[Sly]': '😏',
        '[Kiss]': '😘',
        '[Whimper]': '😔',
        '[Happy]': '😊',
        '[Sick]': '🤒',
        '[Flushed]': '😳',
        '[Lol]': '😆',
        '[Terror]': '😱',
        // '[Let Down]': '😞',
        '[Duh]': '😑',
        '[Hey]': '👋',
        '[Facepalm]': '🤦‍♂️',
        '[Smirk]': '😏',
        '[Smart]': '🤔',
        '[Concerned]': '🤔',
        '[Yeah!]': '👍',
        '[Onlooker]': '👀',
        '[GoForIt]': '💪',
        '[Sweats]': '😅',
        '[OMG]': '😱',
        // '[Emm]': '🤔',
        '[Respect]': '🙌',
        '[Doge]': '🐕',
        '[NoProb]': '👌',
        '[MyBad]': '🤦‍♂️',
        '[Wow]': '😮',
        '[Boring]': '😑',
        '[Awesome]': '😎',
        '[LetMeSee]': '🤔',
        '[Sigh]': '😔',
        '[Hurt]': '😢',
        '[Broken]': '💔',
        '[Lips]': '👄',
        '[Heart]': '❤️',
        '[BrokenHeart]': '💔',
        '[Hug]': '🤗',
        '[ThumbsUp]': '👍',
        '[ThumbsDown]': '👎',
        '[Shake]': '🤝',
        '[Peace]': '✌️',
        // '[Salute]': '🎖️',
        '[Beckon]': '👋',
        '[Fist]': '✊',
        // '[OK]': '👌',
        '[Worship]': '🙏',
        '[Beer]': '🍺',
        '[Coffee]': '☕',
        '[Cake]': '🍰',
        '[Rose]': '🌹',
        '[Wilt]': '🥀',
        '[Cleaver]': '🔪',
        '[Bomb]': '💣',
        '[Poop]': '💩',
        '[Moon]': '🌙',
        '[Sun]': '☀️',
        '[Party]': '🎉',
        '[Gift]': '🎁',
        '[Packet]': '🧧',
        '[Rich]': '💫',
        '[Blessing]': '🈚',
        '[Fireworks]': '🎆',
        // '[Firecracker]': '🧨',
        '[Pig]': '🐷',
        '[Waddle]': '🐧',
        '[Tremble]': '😨',
        '[Twirl]': '🔄'
    };

    convert(text: string): string {
        let convertedText = text;
        for (const emojiText in this.emojiMapping) {
            if (Object.prototype.hasOwnProperty.call(this.emojiMapping, emojiText)) {
                const emojiUnicode = this.emojiMapping[emojiText];
                const emojiRegex = new RegExp(emojiText.replace('[', '\\[').replace(']', '\\]'), 'g');
                convertedText = convertedText.replace(emojiRegex, emojiUnicode);
            }
        }
        return convertedText;
    }
}
