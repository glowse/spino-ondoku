const STORAGE_KEY = 'spinoOndokuMissionProgressV5';
const OLD_KEYS = ['spinoOndokuMissionProgressV3', 'spinoOndokuMissionProgressV4'];
const missions = [
  {
    "id": "mission1",
    "no": 1,
    "title": "川底に眠る光る化石",
    "goal": "短い説明文を、観察しながらゆっくり読む",
    "rewardIcon": "🐟",
    "rewardName": "光る化石スタンプ",
    "image": "assets/mission-1.jpg",
    "checks": [
      "声に出して最初の一文を読めた",
      "化石の様子を想像しながら読めた",
      "途中で止まっても戻れた",
      "自分のペースを守れた"
    ],
    "pages": [
      {
        "focus": "観察するように読む",
        "title": "机の上の標本",
        "text": "イオリくんの机には、図鑑とルーペと、小さな石の標本が置かれていた。石の表面には、魚の骨のような線が、かすかに残っている。\n\nただの飾りではない。何千万年も前の生きものが、時間の中で形を変え、今ここに届いたものだ。イオリくんは、まず一行ずつ声に出し、見つけたことを確かめることにした。"
      },
      {
        "focus": "細部に気づく",
        "title": "青白い光",
        "text": "ルーペを近づけたとき、化石のふちが青白く光った。強い光ではない。水の底で月が揺れるような、静かで冷たい光だった。\n\nイオリくんは息を止めかけて、すぐにゆっくり吐いた。急がなくていい。驚いたときほど、言葉を短く区切って読む。"
      },
      {
        "focus": "情景を読む",
        "title": "水の記憶",
        "text": "光は机の上に、小さな川の影を映した。流れの向こうには、シダの森と、低く広がる雲が見える。\n\n図鑑のページでしか知らなかった白亜紀が、今、声のすぐ近くにある。イオリくんは、最初のミッションが始まったことを感じた。"
      },
      {
        "focus": "意味のまとまりで読む",
        "title": "最初の手がかり",
        "text": "化石の下には、細い文字が浮かび上がった。\n\n「川を見つけよ。流れは、過去へ向かう。」\n\n短い文なのに、不思議な重さがあった。イオリくんは、言葉の意味を追いながら、もう一度ゆっくり読み直した。"
      },
      {
        "focus": "ミッション確認",
        "title": "声に出す合図",
        "text": "音読は、速さを競うものではない。声に出した瞬間、物語の扉が少しだけ開く。\n\nイオリくんは化石を手に取り、落ち着いて言った。\n\n「川底に眠る、光る化石。」"
      }
    ]
  },
  {
    "id": "mission2",
    "no": 2,
    "title": "氾濫原に残された足跡",
    "goal": "濁音や硬い音を、あわてず確かめて読む",
    "rewardIcon": "👣",
    "rewardName": "大きな足跡スタンプ",
    "image": "assets/mission-2.jpg",
    "checks": [
      "足跡の説明を読めた",
      "か・が・た・だを落ち着いて読めた",
      "情景を想像しながら読めた",
      "最後まで進めた"
    ],
    "pages": [
      {
        "focus": "場所を想像する",
        "title": "泥の平原",
        "text": "気がつくと、イオリくんは広い川のそばに立っていた。水は浅く、岸辺にはやわらかい泥が広がっている。\n\nそこは、川が何度もあふれてできた氾濫原だった。足を踏み入れると、くつの底がゆっくり沈み、ぬれた土の匂いが上がってくる。"
      },
      {
        "focus": "音を確かめる",
        "title": "三本の指",
        "text": "泥の上には、三本の指を広げた大きな跡が続いていた。ひとつ、ふたつ、みっつ。どの跡も、イオリくんの足よりずっと大きい。\n\n「か」「が」「た」「だ」。硬い音を急いで読むと、足もと言葉がすべりやすい。彼は、音を一つずつ置くように読んだ。"
      },
      {
        "focus": "推理する",
        "title": "尾のあと",
        "text": "足跡の横には、細長い線が何本も残っていた。まるで重い尾が、泥の表面に触れながら進んだようだった。\n\nどんな恐竜が、ここを通ったのだろう。肉食なのか、水辺にすむ種類なのか。読むことは、ただ文字を追うだけではなく、手がかりを集めることでもある。"
      },
      {
        "focus": "リズムを整える",
        "title": "川風",
        "text": "川風が吹くたびに、浅い水面が銀色に揺れた。遠くで鳥のような生きものが鳴き、草の間から小さな虫が飛び出す。\n\nイオリくんは、足跡の向きと川の流れを見くらべた。声も同じだ。風に押されるように急がず、流れに合わせて進めばいい。"
      },
      {
        "focus": "ミッション確認",
        "title": "足跡の先へ",
        "text": "足跡は川の上流へ向かっていた。そこには、まだ見ぬ生きものの気配がある。\n\nイオリくんは、胸の中で少しだけ緊張しながら言った。\n\n「氾濫原に残された足跡を、追ってみよう。」"
      }
    ]
  },
  {
    "id": "mission3",
    "no": 3,
    "title": "スピノサウルスの影",
    "goal": "長い恐竜名を、意味で区切って読む",
    "rewardIcon": "🦕",
    "rewardName": "スピノサウルススタンプ",
    "image": "assets/mission-3.jpg",
    "checks": [
      "スピノサウルスを区切って読めた",
      "長い文を一息ずつ読めた",
      "緊張しても声に出せた",
      "読み終えたあと戻って確認できた"
    ],
    "pages": [
      {
        "focus": "気配を読む",
        "title": "水面のゆらぎ",
        "text": "川の向こうで、水面が大きく揺れた。波は岸まで届き、泥の上に残った足跡を少しずつ消していく。\n\nイオリくんは、図鑑で見た背中の帆を思い出した。もし本当にあの恐竜なら、ここから先は、声を落ち着かせて進まなければならない。"
      },
      {
        "focus": "観察文を読む",
        "title": "帆を持つ影",
        "text": "川辺の泥に残された跡は、ただの足あとではなかった。三本の鋭い指先が深く沈み、そのまわりには重い尾が触れたような線まで続いている。\n\nイオリくんは図鑑で見たスピノサウルスの骨格図を思い出し、胸の奥が少し熱くなった。"
      },
      {
        "focus": "長い名前を区切る",
        "title": "スピノ・サウルス",
        "text": "長い名前は、無理に一気に読まなくていい。\n\nスピノ。\nサウルス。\nスピノ・サウルス。\n\n分けて読めば、言葉は少しずつ形を見せる。イオリくんは、名前を確かめるように、低い声で読み直した。"
      },
      {
        "focus": "物語を読む",
        "title": "読む冒険の入口",
        "text": "もしこの川が白亜紀へつながっているのなら、ここは「読む冒険」の入口かもしれない。\n\n風の向きと水の流れを確かめながら、彼は息を整え、一行ずつ意味を追うように声に出した。急がなくていい。大切なのは、見つけたことを自分の言葉でたしかめることだ。"
      },
      {
        "focus": "ミッション確認",
        "title": "向き合う",
        "text": "水面の奥から、巨大な影が静かに立ち上がった。背中の帆が夕方の光を受け、川そのものが息をしているように見える。\n\nイオリくんは一歩下がらず、はっきりと言った。\n\n「スピノサウルスの影を、見つけた。」"
      }
    ]
  },
  {
    "id": "mission4",
    "no": 4,
    "title": "白亜紀の川を渡れ",
    "goal": "場面の動きに合わせて、リズムよく読む",
    "rewardIcon": "🌊",
    "rewardName": "川わたりスタンプ",
    "image": "assets/mission-4.jpg",
    "checks": [
      "川の流れを想像して読めた",
      "短い文と長い文を切り替えられた",
      "リズムを保てた",
      "最後まで声を出せた"
    ],
    "pages": [
      {
        "focus": "流れを読む",
        "title": "浅瀬の道",
        "text": "川は広く、見た目よりも流れが速かった。水面には細かい波が走り、沈んだ木の枝がゆっくり回っている。\n\nスピノサウルスは浅い場所を選び、足を一歩ずつ置いた。その動きには、川をよく知る生きものだけが持つ落ち着きがあった。"
      },
      {
        "focus": "リズムを読む",
        "title": "水音",
        "text": "ざぶん。\nざぶん。\n\n短い音を読むときは、体の中に小さなリズムを作る。イオリくんは、水音に合わせて声を出した。速くならなくていい。一定の速さで進むことが、いちばん強い。"
      },
      {
        "focus": "説明を読む",
        "title": "魚の群れ",
        "text": "足もとを、小さな魚の群れが銀色に走った。スピノサウルスの長い口は、水面の動きを追っている。\n\nけれど、今は狩りの時間ではない。川を渡り、向こう岸にある古い森へたどり着くことが、このミッションの目的だった。"
      },
      {
        "focus": "緊張を読む",
        "title": "深い流れ",
        "text": "川の中央だけ、色が急に濃くなっていた。そこは深く、流れも強い。イオリくんは手をぎゅっと握りかけた。\n\nそれでも、声は小さく整える。怖い場面ほど、読む速さを落とす。言葉を一つずつ岸に置くように進めば、向こう側が見えてくる。"
      },
      {
        "focus": "ミッション確認",
        "title": "向こう岸",
        "text": "最後の一歩で、水しぶきが高く上がった。足もとは固い土に変わり、川の音が少し遠くなる。\n\nイオリくんは、濡れた袖を見て笑った。\n\n「白亜紀の川を、渡りきった。」"
      }
    ]
  },
  {
    "id": "mission5",
    "no": 5,
    "title": "ティラノサウルスの気配",
    "goal": "緊張する場面でも、間を取って読む",
    "rewardIcon": "🦖",
    "rewardName": "ティラノ気配スタンプ",
    "image": "assets/mission-5.jpg",
    "checks": [
      "ドキドキする場面を読めた",
      "間を取って読めた",
      "強い言葉を急がず読めた",
      "不安になっても戻れた"
    ],
    "pages": [
      {
        "focus": "静けさを読む",
        "title": "森が止まる",
        "text": "森に入ったとたん、周囲の音がすっと消えた。虫の羽音も、遠くの水音も、急に遠ざかったように感じる。\n\nイオリくんは、静けさにも種類があることに気づいた。これは、何かが近くにいるときの静けさだ。"
      },
      {
        "focus": "重い音を読む",
        "title": "地面の震え",
        "text": "ドン。\n\n足もとの小石が跳ねた。\n\nドン。\n\n次の音は、少し近い。ティラノサウルスという名前が頭に浮かんだ瞬間、心臓の音まで大きくなった。"
      },
      {
        "focus": "落ち着く言葉",
        "title": "呼吸を戻す",
        "text": "あわてると、文字は急に遠くなる。そんなときは、一度息を吐いてから、見えている言葉だけを読む。\n\n全部を完璧に読もうとしなくていい。今の一行を、自分の速さで読めばいい。"
      },
      {
        "focus": "迫力を読む",
        "title": "王者の影",
        "text": "木々の間から、巨大な頭がゆっくり現れた。厚い首、鋭い歯、太い後ろ足。まさに白亜紀の王者だった。\n\nけれどイオリくんは、逃げる前に観察した。恐怖だけでなく、事実を読む。そこにあるものを、声にして確かめる。"
      },
      {
        "focus": "ミッション確認",
        "title": "一歩下がって読む",
        "text": "ティラノサウルスは、風下の匂いを探るように頭を上げた。今なら、静かに離れられる。\n\nイオリくんは小さくうなずき、落ち着いた声で言った。\n\n「ティラノサウルスの気配を、読んだ。」"
      }
    ]
  },
  {
    "id": "mission6",
    "no": 6,
    "title": "失われた巣を追って",
    "goal": "問いかけ文と説明文を、声の調子で読み分ける",
    "rewardIcon": "🪽",
    "rewardName": "巣さがしスタンプ",
    "image": "assets/mission-6.jpg",
    "checks": [
      "問いかけ文を読めた",
      "長い恐竜名を分けて読めた",
      "説明文を落ち着いて読めた",
      "声の調子を工夫できた"
    ],
    "pages": [
      {
        "focus": "問いかける",
        "title": "割れた殻",
        "text": "森の奥で、白い卵の殻が見つかった。割れ目は新しく、まわりの草には踏み倒されたあとがある。\n\nイオリくんはしゃがみこみ、そっとたずねるように読んだ。\n\n「この巣は、だれのものですか。」"
      },
      {
        "focus": "長い名前を読む",
        "title": "トリケラトプス",
        "text": "低い草をかき分けて、トリケラトプスの親子が現れた。三本の角と大きなえり飾りは、遠くからでもすぐにわかる。\n\nトリケラ。\nトプス。\nトリケラトプス。\n\n長い名前は、分けて読むと落ち着いて届く。"
      },
      {
        "focus": "空を見る",
        "title": "プテラノドンの影",
        "text": "空を横切る影が、地面をすばやく走った。見上げると、プテラノドンが大きな翼を広げて旋回している。\n\n「この巣を見ませんでしたか。」\n\n問いかける文は、最後を少しだけ上げる。イオリくんは、相手に届く声を想像して読んだ。"
      },
      {
        "focus": "手がかりを整理する",
        "title": "折れた枝",
        "text": "卵の殻、踏み倒された草、折れた枝。ばらばらに見えた手がかりは、向きをそろえると一本の線になった。\n\nその線は、川辺の岩場へ続いている。読むことも同じだ。一つの文が次の文を呼び、物語の道を作っていく。"
      },
      {
        "focus": "ミッション確認",
        "title": "巣の場所",
        "text": "岩場の陰に、古い巣があった。中には、まだ温かさの残る卵が一つ。\n\nイオリくんは、声を強くしすぎないようにして言った。\n\n「失われた巣を、見つけた。」"
      }
    ]
  },
  {
    "id": "mission7",
    "no": 7,
    "title": "川辺の約束",
    "goal": "やさしい声で、感情のある文を読む",
    "rewardIcon": "👶",
    "rewardName": "川辺の約束スタンプ",
    "image": "assets/mission-7.jpg",
    "checks": [
      "やさしい声で読めた",
      "気持ちを込めて読めた",
      "会話文を落ち着いて読めた",
      "自分の言葉で確かめられた"
    ],
    "pages": [
      {
        "focus": "静かな場面",
        "title": "夕方の川辺",
        "text": "夕方の川辺は、昼間よりずっと静かだった。水面には赤い空が映り、遠くの森は黒い影になっている。\n\nスピノサウルスは川の中に立ち、まるで流れの番人のように、周りを見守っていた。"
      },
      {
        "focus": "やさしく読む",
        "title": "小さな声",
        "text": "草の陰から、小さな恐竜が顔を出した。迷っていたのだろう。体には泥がつき、目だけが不安そうに光っている。\n\nイオリくんは、声を少しやわらかくして読んだ。\n\n「もう、大丈夫。」"
      },
      {
        "focus": "会話を読む",
        "title": "スピノサウルスの返事",
        "text": "スピノサウルスは、低く短く鳴いた。その声は大きいのに、川を荒らすような音ではなかった。\n\nイオリくんには、それが返事のように聞こえた。\n\n「この川を、忘れない。」"
      },
      {
        "focus": "考えを読む",
        "title": "読む力",
        "text": "声に出して読むと、ただの文字が自分の中で形を持ちはじめる。怖かった場面も、うまく言えなかった言葉も、もう一度たしかめることができる。\n\nイオリくんは思った。読む力は、急いで進む力ではない。止まりながらでも、戻りながらでも、最後まで歩く力だ。"
      },
      {
        "focus": "ミッション確認",
        "title": "約束",
        "text": "川の向こうで、最後の光が消えかけていた。イオリくんはスピノサウルスの影を見上げ、静かにうなずいた。\n\n「また読むよ。自分のペースで。」\n\nそれが、川辺の約束だった。"
      }
    ]
  },
  {
    "id": "mission8",
    "no": 8,
    "title": "音読ミッション達成",
    "goal": "物語全体をふり返り、達成感を持って読む",
    "rewardIcon": "🏆",
    "rewardName": "音読ミッション達成スタンプ",
    "image": "assets/mission-8.jpg",
    "checks": [
      "最後のページを読めた",
      "これまでの冒険を思い出せた",
      "自分のペースを認められた",
      "音読ミッションを達成できた"
    ],
    "pages": [
      {
        "focus": "ふり返る",
        "title": "八つの手がかり",
        "text": "机の上には、八つのスタンプが並んでいた。化石、足跡、川、巣、そしてスピノサウルスの影。\n\nどれも、ただ集めた印ではない。イオリくんが声に出し、考え、止まりながらも進んだ証だった。"
      },
      {
        "focus": "気づきを読む",
        "title": "読めた日のこと",
        "text": "すらすら読めた日もあれば、同じ言葉で何度も止まった日もあった。けれど、それで冒険が失敗になることはなかった。\n\n声に出したこと。ゆっくり読んだこと。戻って読み直したこと。その全部が、ミッションの一部だった。"
      },
      {
        "focus": "自分の言葉",
        "title": "ぼくの速度",
        "text": "誰かと同じ速さで進まなくてもいい。イオリくんには、イオリくんの速度がある。\n\nその速度で読んだからこそ、見つけられた景色があった。文字の奥にある川の音や、恐竜の息づかいまで、しっかり感じられた。"
      },
      {
        "focus": "達成の場面",
        "title": "伝説の一ページ",
        "text": "化石の光が、最後のページを照らした。そこには、白亜紀の川辺に立つイオリくんと、静かに寄りそうスピノサウルスの姿が描かれている。\n\nページの下には、短い言葉が刻まれていた。\n\n「声に出した者だけが、この道を見つける。」"
      },
      {
        "focus": "最後の音読",
        "title": "ミッション達成",
        "text": "イオリくんは、深く息を吸った。\n\nそして、最後の一文を、自分の声で読んだ。\n\n「きょうりゅう音読ミッション、達成。」\n\n急がなくていい。これからも、声に出せた一歩が、次の冒険につながっていく。"
      }
    ]
  }
];

const praiseMessages = [
  '声に出せた。それだけでミッションは進んでいる。',
  'ゆっくり読めたね。速度より、確かめる力が大切。',
  '止まっても戻れた。読み方を自分で選べている。',
  '一行ずつ進めた。しっかり冒険になっているよ。',
  '今の読み方、落ち着いていてよかった。'
];
const supportMessages = [
  '止まっても大丈夫。前の言葉に戻って、もう一度始めよう。',
  '息を長く吐いてから読むと、次の一行に入りやすいよ。',
  '急がなくていい。意味のまとまりで区切って読もう。',
  '言葉が出にくいときは、最初の一音だけそっと出してみよう。',
  '読むことも、話すことも、自分のペースで進めていい。'
];

const readerArtByMission = Object.fromEntries(
  missions.map((m) => [m.id, m.pages.map((p, idx) => ({
    image: `assets/reader-${m.no}-${idx + 1}.jpg`,
    caption: p.title
  }))])
);
missions.forEach((m) => {
  m.pages.forEach((p, idx) => {
    const art = readerArtByMission[m.id][idx];
    p.image = art.image;
    p.artCaption = art.caption;
  });
});
function loadProgress() {
  const blank = { completedMissions: {}, stamps: {}, fontSize: 21, lastMission: 0 };
  for (const key of [STORAGE_KEY, ...OLD_KEYS]) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const saved = JSON.parse(raw);
      return { ...blank, ...saved, completedMissions: saved.completedMissions || {}, stamps: saved.stamps || {} };
    } catch(e) {}
  }
  return blank;
}
let progress = loadProgress();
let view = { screen: 'home', missionIndex: Math.min(progress.lastMission || 0, missions.length - 1), pageIndex: 0, readPages: {}, toast: '' };
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function esc(v) { return String(v ?? '').replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch])); }
function missionDoneCount() { return missions.filter(m => progress.completedMissions[m.id]).length; }
function stampCount() { return missions.filter(m => progress.stamps[m.id]).length; }
function nextMissionIndex() { const i = missions.findIndex(m => !progress.completedMissions[m.id]); return i < 0 ? missions.length - 1 : i; }
function startMission(i) { view = { screen:'reader', missionIndex:i, pageIndex:0, readPages:{}, toast:'' }; progress.lastMission = i; saveProgress(); render(); }
function home() { view.screen='home'; view.toast=''; render(); }
function currentMission() { return missions[view.missionIndex]; }
function currentPage() { return currentMission().pages[view.pageIndex]; }
function setFont(delta) { progress.fontSize = Math.max(18, Math.min(28, (progress.fontSize || 21) + delta)); saveProgress(); render(); }
function markRead() {
  view.readPages[view.pageIndex] = true;
  view.toast = praiseMessages[Math.floor(Math.random()*praiseMessages.length)];
  setTimeout(() => { view.toast=''; render(); }, 1800);
  render();
}
function support() {
  view.toast = supportMessages[Math.floor(Math.random()*supportMessages.length)];
  setTimeout(() => { view.toast=''; render(); }, 2600);
  render();
}
function prevPage() { if (view.pageIndex > 0) { view.pageIndex--; view.toast=''; render(); } }
function nextPage() {
  const m=currentMission();
  if (view.pageIndex < m.pages.length - 1) { view.pageIndex++; view.toast=''; render(); return; }
  progress.completedMissions[m.id] = true;
  progress.stamps[m.id] = true;
  progress.lastMission = view.missionIndex;
  saveProgress();
  view.screen = 'success';
  view.toast='';
  render();
}
function readAgain() { view = { screen:'reader', missionIndex:view.missionIndex, pageIndex:0, readPages:{}, toast:'' }; render(); }
function nextMission() { const n = Math.min(view.missionIndex + 1, missions.length - 1); startMission(n); }
function resetProgress() {
  if (!confirm('進捗とスタンプをリセットしますか？')) return;
  progress = { completedMissions: {}, stamps: {}, fontSize: 21, lastMission: 0 };
  saveProgress();
  view = { screen:'home', missionIndex:0, pageIndex:0, readPages:{}, toast:'' };
  render();
}
function pageParagraphs(text) {
  return esc(text).split(/\n\s*\n/).map(p => `<p>${p.replace(/\n/g,'<br>')}</p>`).join('');
}
function renderProgressCards() {
  return `<section class="progressCards" aria-label="進捗">
    <article class="progressCard"><span class="progressIcon">▰</span><div><b>できたミッション</b><strong>${missionDoneCount()} / ${missions.length}</strong><i><em style="width:${missionDoneCount()/missions.length*100}%"></em></i></div></article>
    <article class="progressCard accent"><span class="progressIcon">◆</span><div><b>あつめたスタンプ</b><strong>${stampCount()} / ${missions.length}</strong><i><em style="width:${stampCount()/missions.length*100}%"></em></i></div></article>
  </section>`;
}
function renderHome() {
  const next = nextMissionIndex();
  return `<main class="screen homeScreen">
    <section class="homeHero">
      <div class="heroText">
        <span class="eyebrow">きょうりゅう</span>
        <h1>音読ミッション</h1>
        <p class="subtitle">イオリくんとスピノサウルス</p>
        <p class="lead">声に出して読むと、物語の手がかりがつながっていく。急がず、一行ずつ、自分のペースで進もう。</p>
      </div>
      <div class="heroArt" role="img" aria-label="白亜紀の川辺に立つスピノサウルス"></div>
    </section>
    ${renderProgressCards()}
    <section class="promisePanel">
      <h2>音読隊の約束</h2>
      <p>正しく読むことだけが目的ではありません。声に出せたこと、ゆっくり読めたこと、止まっても戻れたことを大切にします。</p>
    </section>
    <section class="missionList" aria-label="ミッション一覧">
      <div class="sectionTitle"><span>⌖</span><h2>ミッション一覧</h2></div>
      <div class="missionGrid">${missions.map((m,i) => {
        const done = !!progress.completedMissions[m.id];
        const isNext = !done && i === next;
        const locked = i > next && !progress.completedMissions[m.id];
        return `<button class="missionCard ${done?'done':''} ${isNext?'next':''}" onclick="startMission(${i})">
          <span class="missionNo">${m.no}</span>
          <img src="${m.image}" alt="" loading="lazy">
          <span class="missionInfo"><b>${esc(m.title)}</b><small>${esc(m.goal)}</small></span>
          <span class="missionBadge ${done?'ok':isNext?'next':'lock'}">${done?'できた':isNext?'つぎはこれ':locked?'未完了':'読む'}</span>
        </button>`;
      }).join('')}</div>
    </section>
  </main>`;
}
function renderReader() {
  const m=currentMission(), p=currentPage();
  const pageNo = view.pageIndex + 1;
  const percent = pageNo / m.pages.length * 100;
  return `<main class="screen readerScreen">
    <header class="missionHeader">
      <button class="iconButton" onclick="home()" aria-label="ホームへ">☰</button>
      <div class="missionTitleBlock"><small>ミッション${m.no}</small><h1>${esc(m.title)}</h1><div class="pageProgress"><span style="width:${percent}%"></span></div><p>${pageNo} / ${m.pages.length}ページ</p></div>
      <div class="profileBadge"><span>足跡</span><b>イオリくん</b><i>Lv.12</i></div>
    </header>
    <section class="readingLayout">
      <aside class="readingArt" style="background-image:url('${esc(p.image)}')" role="img" aria-label="${esc(p.artCaption)}の場面イラスト"><div class="artCaption">${esc(p.artCaption)}</div></aside>
      <article class="readingPanel">
        <div class="readLabel"><span>□</span>物語を読もう</div>
        <h2>${esc(p.title)}</h2>
        <div class="focus">${esc(p.focus)}</div>
        <div class="storyText" style="font-size:${progress.fontSize || 21}px">${pageParagraphs(p.text)}</div>
        <div class="readerControls">
          <button class="outline" onclick="prevPage()" ${view.pageIndex===0?'disabled':''}>‹ 前へ</button>
          <button class="primary ${view.readPages[view.pageIndex]?'read':''}" onclick="markRead()">読めた！</button>
          <button class="outline gold" onclick="nextPage()">${view.pageIndex < m.pages.length-1 ? '次へ ›' : '成功へ ›'}</button>
        </div>
        <div class="subControls">
          <button onclick="setFont(-1)">A− 文字サイズ</button>
          <button onclick="setFont(1)">A＋ 文字サイズ</button>
          <button onclick="support()">盾 おまもり</button>
        </div>
        <p class="supportLine">ゆっくりで大丈夫。話すことも、読むことも、どちらも大切な一歩です。</p>
      </article>
    </section>
    ${view.toast ? `<div class="toast">${esc(view.toast)}</div>` : ''}
  </main>`;
}
function renderSuccess() {
  const m=currentMission();
  return `<main class="screen successScreen">
    <section class="successCard">
      <div class="successArt"><img src="${m.image}" alt=""></div>
      <div class="successBody">
        <span class="result">MISSION CLEAR</span>
        <h1>ミッション成功！</h1>
        <p>${esc(m.title)}を最後まで読みました。</p>
        <div class="stampReward"><span>${m.rewardIcon}</span><b>${esc(m.rewardName)}</b></div>
        <section class="todayCheck"><h2>今日のチェック</h2>${m.checks.map((c,i)=>`<label><input type="checkbox"> <span>${esc(c)}</span></label>`).join('')}</section>
        <div class="successControls"><button class="primary" onclick="readAgain()">もう一回読む</button><button class="outline" onclick="home()">ホームへ</button><button class="outline gold" onclick="nextMission()" ${view.missionIndex>=missions.length-1?'disabled':''}>次のミッション</button></div>
      </div>
    </section>
  </main>`;
}
function renderShell(inner) {
  return `<div class="app">
    ${inner}
    <nav class="bottomNav" aria-label="アプリ内メニュー">
      <button onclick="home()" class="${view.screen==='home'?'active':''}"><span>⌂</span>ホーム</button>
      <button onclick="startMission(nextMissionIndex())"><span>▤</span>物語</button>
      <button onclick="support()"><span>◉</span>おまもり</button>
      <button onclick="home()"><span>◆</span>スタンプ</button>
      <button onclick="resetProgress()"><span>↺</span>リセット</button>
    </nav>
  </div>`;
}
function render() {
  const app=document.getElementById('app');
  const inner = view.screen === 'home' ? renderHome() : view.screen === 'reader' ? renderReader() : renderSuccess();
  app.innerHTML = renderShell(inner);
}
window.startMission=startMission; window.home=home; window.prevPage=prevPage; window.nextPage=nextPage; window.markRead=markRead; window.support=support; window.setFont=setFont; window.readAgain=readAgain; window.nextMission=nextMission; window.resetProgress=resetProgress;
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
render();
