/**
 * ZenOracle Fortune Database — fortunes.js
 * ─────────────────────────────────────────
 * 每条签诗的数据结构：
 *
 *  {
 *    id:             Number   签号（1–100）
 *    title:          String   签名，含吉凶等级，如 "The First Lot (Superior)"
 *    poem:           String   签诗正文（英文）
 *    meaning:        String   典故／历史背景（The Ancient Story 栏目）
 *    explanation:    String   神谕解释（Divine Explanation 大字）
 *    interpretation: String   深层解读（小字副文）
 *    advice: {
 *      Love:    String   感情建议
 *      Career:  String   事业建议
 *      Wealth:  String   财运建议
 *    }
 *  }
 *
 * 填写说明：
 *   - 按签号 1–100 顺序填写，不要跳号
 *   - 吉凶等级参考：Superior（上上）/ Good（上）/ Fair（中）/
 *                   Caution（下）/ Unfavorable（下下）
 *   - poem 建议保持 8–14 个英文单词，韵律感强
 *   - explanation / interpretation 可中英混排，但保持风格统一
 * ─────────────────────────────────────────
 */

const FORTUNES_DB = [

  // ── 第 1 签 ──────────────────────────────
  {
    id: 1,
    title: "The First Lot (Superior)",
    poem: "Heaven and earth open; a perfect match is made.",
    meaning: "Pangu separates sky from earth — the primordial act of creation. All things find their rightful place.",
    explanation: "This represents a powerful new beginning in every area of your life.",
    interpretation: "Success is assured when you move forward with sincerity and integrity.",
    advice: {
      Love:    "A soulmate connection is drawing near; remain open-hearted.",
      Career:  "A major promotion or exciting new venture is strongly favored.",
      Wealth:  "Fresh streams of abundance are beginning to flow your way.",
    },
  },

  // ── 第 2 签 ──────────────────────────────
  {
  id: 2,
  title: "The Second Lot (Good)",
  poem: "The whale is not yet transformed, still guarding the river. One day it will soar, then leap over the Dragon Gate in one bound.",
  meaning: "A whale still small in the ocean — not yet king. In all matters, advance or retreat according to the right timing.",
  explanation: "The timing is not ripe yet. When it is, the achievement will be huge.",
  interpretation: "Endure when you need to endure. Be patient when you need to be patient. Wait for the right time — your success and fame are still ahead.",
  advice: {
    Love:    "The conditions aren't fully ready, so don't force it. When the time comes, a wonderful romance awaits — be patient and let it develop naturally.",
    Career:  "Opportunities haven't appeared yet. Use this time to strengthen your foundation and prepare; when the timing improves, great days will follow.",
    Wealth:  "It is not yet time to profit. Wait for the market to turn — when it does, the returns will be quite impressive.",
  },
  },
  
  {
  id: 3,
  title: "The Third Lot (Caution)",
  poem: "Rushing through wind and rain, going out and coming back. After carrying mud to build its nest, in the end the nest collapses back into mud.",
  meaning: "A swallow braves wind and rain to build its home from mud — yet the nest returns to mud. No matter how hard you try, you end up right where you started.",
  explanation: "All your hard work will be in vain.",
  interpretation: "You use all kinds of strategies, busy from morning till night. Who would have known that in the end, nothing will be accomplished.",
  advice: {
    Love:    "You work hard to find or build love, but it keeps returning to zero. It is better to live peacefully and enjoy your freedom rather than exhaust yourself chasing what won't come.",
    Career:  "No matter how hard you work, rewards will not follow. Focus on improving your core skills first rather than chasing opportunities that lead nowhere.",
    Wealth:  "Gains and losses will cancel each other out. Avoid borrowing money — whatever you earn will simply go toward repayment and interest.",
  },
  },
  
  {
  id: 4,
  title: "The Fourth Lot (Good)",
  poem: "The broken diamond mirror is put back together again. From now on the household will change for the better, bringing more blessings, wealth, and children.",
  meaning: "A broken mirror made whole again — what is lost can be regained, what has fallen can rise, what is separated can reunite.",
  explanation: "A broken mirror can be made whole again. What is down can rise again. What is lost can be regained.",
  interpretation: "Although it takes effort and worry, in the end there will be compensation. Like washing sand to find gold.",
  advice: {
    Love:    "A breakup may occur, but reunion follows. Past lovers can find their way back to each other — patience and understanding are the bridge that leads to lasting happiness.",
    Career:  "One failure is part of the journey. Rise again the second time and your career will truly prosper — each setback is preparing you for stronger ground.",
    Wealth:  "You may lose money first, but profit will follow. Delay major transactions where possible — waiting will prove more advantageous.",
  },
  },
  {
  id: 5,
  title: "The Fifth Lot (Superior)",
  poem: "Digging the ground with a hoe to find a spring — yet when you least expect it, you'll meet a true friend, and together walk hand in hand up to the blue sky.",
  meaning: "Dig for a spring and it is difficult at first, then easy later. You try hard to pick a flower and it won't bloom; you casually plant a willow and it grows into shade.",
  explanation: "Work hard and manage things practically — only then will good results come. This lot also promises a true friend who will walk beside you toward success.",
  interpretation: "Go with the flow — that is where the real opportunity lies. Haste makes waste; too much tension and you break the bowl.",
  advice: {
    Love:    "The more you chase love, the more it runs away. When you stop forcing it and live naturally, your destined partner appears by pure chance — let it come to you.",
    Career:  "Don't chase short-term gains or force results. Keep a calm and steady mindset, do your work well, and the right partner or opportunity will arrive when least expected.",
    Wealth:  "Handle investments lightly and don't obsess over returns. A relaxed, unhurried approach to money actually brings better outcomes than anxious chasing.",
  },
  },
  {
  id: 6,
  title: "The Sixth Lot (Superior)",
  poem: "Throwing yourself under the cliff to feed the birds and rabbits — only a true great man would do this. A person who can give up themselves and walk the world freely — there is none.",
  meaning: "The self-sacrificing spirit is the rarest of all. Heroes emerge in troubled times, and true friends are revealed in great difficulty.",
  explanation: "This lot belongs to those willing to give themselves for others. Power and position are given to those who are generous — true greatness lies in sacrifice.",
  interpretation: "No fish in your meal, yet your body is clean and you are happy. Wait for the right time and happiness will come. Take on the responsibility — it depends on your own ability.",
  advice: {
    Love:    "Show dedication and willingness to give — that wins hearts. Love must go through adversity before you can see who your true partner really is; tolerance and sacrifice restore what is broken.",
    Career:  "When the economy is down and times are tough, that is your real opportunity — but you must have genuine ability to seize it and stand above the crowd.",
    Wealth:  "The right time to invest is when all others are struggling. Extraordinary courage and clear vision in volatile moments are what separate those who profit from those who don't.",
  },
},

{
  id: 7,
  title: "The Seventh Lot (Caution)",
  poem: "Rushing around, facing layer after layer of danger, dragging through mud and water, crossing mountains again. After traveling thousands of miles, you still can't return.",
  meaning: "Carrying a heavy burden while trying to cross mountains — things feel stuck and difficult. Life is like a vast ocean; learning to let go and take things lightly is a blessing.",
  explanation: "Moving forward you may gain something; stepping back is difficult. It is best to stick with what you already have and not aim too high.",
  interpretation: "Even though things feel stuck, go with the flow and find peace wherever you are. Don't daydream — trying too hard only makes things heavier without bringing good results.",
  advice: {
    Love:    "Go with the flow and accept things as they are. Trying hard to force love feels exhausting and never brings good results; after a breakup, give yourself time rather than rushing to find someone new.",
    Career:  "Your reputation and credit from the very beginning matter most — build them well. If things don't start well, they only get harder. Grab the first opportunity and give it everything.",
    Wealth:  "The longer you stay invested, the bigger the loss may become. If you make any profit, take it and stop. Short-term moves are favored; long-term positions are not recommended now.",
  },
},

{
  id: 8,
  title: "The Eighth Lot (Good)",
  poem: "Old pine and cypress trees planted long ago — rain, snow, wind, and frost cannot destroy them. One day they will surely become greatly useful, achieving fame as pillars of the nation.",
  meaning: "Success requires many years and countless trials — like steel forged through a thousand hammerings. Hard training shapes talent; accumulating good deeds brings blessings.",
  explanation: "This is a long journey. You must go through extended challenges before reaching prosperity. What you need most is perseverance — only then will real success come.",
  interpretation: "Wind and frost appear even on flat ground. Your destined connection has long been fixed. Fields and silkworms will yield abundant harvest — the family fortune will rise and prosper.",
  advice: {
    Love:    "After going through many years of storms and hardships, your love will finally bear fruit. When love is stuck or broken, patience and willingness to wait are the only way to restore it.",
    Career:  "This is a long-term venture requiring repeated tests and failures before you perform outstandingly. Keep an unyielding spirit — perseverance is the only path to real success.",
    Wealth:  "Investment won't bring quick profits. Hold on for a long time before you reap big gains. Steady, quiet effort over many years is what eventually brings abundant returns.",
  },
},

{
  id: 9,
  title: "The Ninth Lot (Superior)",
  poem: "Your spiritual heart is as clear as a mirror, just like the bright moon hanging perfectly in the sky. This matter is best told straight — look inward and the answer will come.",
  meaning: "The bright moon in the sky — upright, honest, and selfless. Use good people wisely and you can win the world; turn inward to cultivate yourself and you will find liberation.",
  explanation: "In everything, look back at yourself and do honest self-reflection. If you do that, you will always find the right answer.",
  interpretation: "Your heart is upright and honest. Reason is clear and the rules are lenient. With compassion and selflessness, you can walk the world freely.",
  advice: {
    Love:    "Before pursuing or committing, look honestly at yourself — your qualities, your readiness, your sincerity. Self-reflection is the foundation of any love worth having.",
    Career:  "Apply the principles of wisdom and integrity when managing your work. Build real skills and ability — once you are truly capable, recognition and success follow naturally.",
    Wealth:  "Choose investment targets with strong fundamentals. Follow proper rules and market principles rather than chasing shortcuts — sound judgment built on honest assessment wins.",
  },
},

{
  id: 10,
  title: "The Tenth Lot (Good)",
  poem: "A priceless treasure is hidden in the cabinet, yet you keep searching in faraway places. It's like using a lamp to look for fire — better to put it down and stop tiring yourself out.",
  meaning: "You already hold a treasure but don't see it. Blessings and fortune are right in front of you — a calm heart with few desires is the true source of happiness.",
  explanation: "The treasure is inside yourself and right at home. Once you realize it is already with you and start using it, life becomes wonderful.",
  interpretation: "Eating from this bowl while eyeing the next one. A beggar carrying a pearl. Stop looking outside — learn to be content with what is already yours.",
  advice: {
    Love:    "Stop looking far away for love — it is right around you in daily life, probably someone you already know. Your destined person is closer than you think.",
    Career:  "Discover the strengths of your current work and develop them fully. Do your best right where you are — there is no need to go elsewhere to find success.",
    Wealth:  "If you are not short of money, there is no need to chase investments. Buy only for genuine use, not speculation. Contentment with what you have is its own form of wealth.",
  },
  },

  {
  id: 11,
  title: "The Eleventh Lot (Superior)",
  poem: "You're hoping for something good, and the joy is beyond words. In the end, everything will turn out wonderfully — a noble person will lead you into a place full of noble people.",
  meaning: "Turning misfortune into blessing. Gaining benefit from harm. A helpful person appears at the right moment and opens new doors.",
  explanation: "There may be some obstacles at first, but everything will settle down peacefully in the end. A noble person will give you a hand.",
  interpretation: "Turning bad luck into good fortune. You've been working hard, and even family and friends are running around helping you — in the end, your wish will come true.",
  advice: {
    Love:    "The people around you are willing to help. Whether pursuing someone new or saving an existing relationship, let friends and family support you — a noble person may be the one who introduces your match.",
    Career:  "You can get the job you apply for, especially with a recommendation. External changes will benefit your career, and helpful people will surround you at work.",
    Wealth:  "With help from noble people, profit will come. Investment, business, and property transactions all benefit from timely assistance — don't be afraid to accept support.",
  },
},

{
  id: 12,
  title: "The Twelfth Lot (Good)",
  poem: "The worst is over — good times are finally coming. When you meet the right moment, your determination will bring harmony and success.",
  meaning: "Misfortune leaving and fortune arriving. Like picking silk from hemp — it takes effort, but you will get there. You will gain fortune through disaster.",
  explanation: "This is the classic after extreme bad luck comes great fortune. Your prosperity is just around the corner.",
  interpretation: "There may be tears, but eventually everything will become clear. As long as you set your mind to it and keep working hard, good results are on the way.",
  advice: {
    Love:    "Your best window for love is approaching — grab the chance when it comes and don't miss it. If your relationship has already weathered storms and reconciled, it is ready to move forward.",
    Career:  "You may go through a dark period, but once you get through it you will see light again. The beginning of a new venture will be tough, but passing that low point is when real growth begins.",
    Wealth:  "Even if finances haven't been great before, good luck is coming soon. The best months to make moves are ahead — stay patient and position yourself to act when the timing arrives.",
  },
},

{
  id: 13,
  title: "The Thirteenth Lot (Superior)",
  poem: "Born into good fortune, thanks to the lord's favor you receive the golden fish pouch. Your name will spread across the four seas — something truly worth celebrating.",
  meaning: "A carp leaping through the Dragon Gate — everything changes for the better. A prisoner suddenly pardoned; a sick person meeting a great doctor.",
  explanation: "Your path has generally been smooth. Even if you hit a bottleneck now, kindness and integrity will bring help at critical moments.",
  interpretation: "Always keep benevolence, integrity, and fairness in business and life — then your name will spread far and wide and wise people will guide you through.",
  advice: {
    Love:    "Your destined relationship is coming like a prisoner being released — naturally and soon. The person likely has good background or excellent qualities; keep proper balance in the relationship to sustain it.",
    Career:  "Your past performance has been excellent and this current hurdle can be passed. The more you do, the better it gets — your reputation will become well known over time.",
    Wealth:  "If you are stuck, you can get out. Good investment opportunities are approaching and goods that have been sitting will finally move — great timing is ahead.",
  },
},

{
  id: 14,
  title: "The Fourteenth Lot (Good)",
  poem: "Just like a fairy crane escaping its cage, you break free from all restraints. North, south, east, west — no obstacles anywhere. You can fly straight up to the ninth heaven as you wish.",
  meaning: "Overnight success — like a crane flying out of its cage, soaring freely across the world. Your talents will finally be recognized and you can go wherever you want.",
  explanation: "Your heart is free of worries. The road ahead is smooth and open. You can do as you please and feel completely at ease.",
  interpretation: "After all the hardship, your abilities will finally be seen. Like warm currents in winter or a cool breeze in summer — ease and freedom are returning to your life.",
  advice: {
    Love:    "Your loneliness is ending. Love will come naturally — your destined person is drawing near. If already broken up, free yourself from pain and look forward; finding new love will not be difficult.",
    Career:  "After all the heartaches, your talents will finally be recognized and your strengths fully used. Give this final push everything you have — a bright and prosperous chapter awaits.",
    Wealth:  "The difficult times are ending and profit is moving your way. After being stuck for a long time, big opportunities are opening up — returns will keep increasing.",
  },
},

{
  id: 15,
  title: "The Fifteenth Lot (Caution)",
  poem: "Suddenly disaster strikes right at your door. The egg is broken, the nest is empty — nowhere left to rest. You must stay calm and keep your heart steady.",
  meaning: "A broken egg and an empty nest. Good advice ignored leads to a tired heart. Arguments bring trouble — be careful not to lose something big over a small dispute.",
  explanation: "Conflicts and quarrels are the source of difficulty here. Hold steady, avoid friction with others, and wait for the right time.",
  interpretation: "You didn't listen to good advice and brought trouble on yourself. This sign is a reminder: step back from competition, keep a low profile, and protect what matters most.",
  advice: {
    Love:    "Speak more kindly, build a good image, and keep good intentions. Reducing conflict and showing more care will gradually improve your romantic luck.",
    Career:  "Competition with others in the same field can easily hurt you. It is wiser to step back than to fight. If things get ugly, choose to back down and wait for better timing.",
    Wealth:  "If the market looks bad, don't jump in. Stay calm and wait for clear signs of improvement before making any moves — patience now prevents bigger losses later.",
  },
  },
{
  id: 16,
  title: "The Sixteenth Lot (Good)",
  poem: "Your furrowed brows will suddenly relax. Like a piece of fine jade buried in the mud — once a skilled craftsman picks it up, it shines bright again.",
  meaning: "The clouds part and the sun appears. A good person finally gets their chance. With a noble person's guidance, hidden treasure is discovered.",
  explanation: "Your confusion or stuck situation can now be resolved. Thanks to a noble person or expert's guidance, you'll finally discover your own hidden value.",
  interpretation: "What you gain, you won't lose. There is benefit even in loss. Bad people meet misfortune, while good people enjoy smooth luck.",
  advice: {
    Love:    "Approach with a sincere and upright attitude — you'll discover the person you like is actually a really good match. Focus on their good points rather than dwelling on the bad, and love can be restored.",
    Career:  "You have hidden skills that just need the right person to recognize them. Showcase your strengths clearly, find someone with good insight, and you will break through the bottleneck.",
    Wealth:  "Always use proper, honest methods. Don't take shortcuts or speculate — integrity attracts more customers and more opportunity over time.",
  },
},

{
  id: 17,
  title: "The Seventeenth Lot (Caution)",
  poem: "Don't listen to gossip about who's right or wrong. If you take lies as the truth, how can a picture of a cake ever fill your stomach?",
  meaning: "Drawing a cake to satisfy hunger — what you seek will turn out empty, more illusion than reality. Stop listening to rumors and use your time to improve yourself instead.",
  explanation: "Your heart is restless. Just like a painted cake — you can look but you can't eat it. Repent sincerely and accumulate hidden merits to improve your situation.",
  interpretation: "In daily life, stop wasting time on gossip about others. Use your free time to chant, reflect, or improve yourself — it brings far more peace and progress.",
  advice: {
    Love:    "Don't actively seek romance right now — even if you find someone, it will likely end in disappointment. Focus on inner cultivation and peace; your romantic luck will improve in time.",
    Career:  "Profits you expect often turn out empty. The difficulties you face come from karmic obstacles — repent, keep your integrity, and do more good deeds to gradually turn things around.",
    Wealth:  "You will likely suffer losses — this is not a good time to invest or speculate. Give generously to charity to break the cycle and begin shifting your fortune.",
  },
},

{
  id: 18,
  title: "The Eighteenth Lot (Superior)",
  poem: "The golden crow sinks in the west, the rabbit rises in the east. Day and night keep cycling through the ages. Scholars, farmers, workers, and merchants will all feel satisfied.",
  meaning: "A bright moon rising in the east — everything will go as you wish. Things are turning upward from the bottom; the Yin side is now gaining strength and becoming favorable.",
  explanation: "Your heart is free of worries. Whatever you do will succeed. Like an arrow on a drawn bow — once released, it will hit the target.",
  interpretation: "Women have the advantage; inner and spiritual pursuits are favored over material chasing. Service, creativity, and inner cultivation are the paths that thrive now.",
  advice: {
    Love:    "Women should take the initiative — it will help love develop smoothly. Whether single, pursuing someone, or trying to reconcile, the conditions are favorable for love to progress.",
    Career:  "Choose industries that serve inner needs and make people feel genuinely happy. Focus on service quality, good interpersonal skills, and inner cultivation — these are what bring lasting success.",
    Wealth:  "To succeed in investing, strengthen your inner qualities — especially patience and steady character. Making others feel safe and confident is the real secret to closing any deal.",
  },
},

{
  id: 19,
  title: "The Nineteenth Lot (Caution)",
  poem: "When your boat reaches the rushing rapids, why fight against the wild wind and crashing waves? Wait until the wind calms and the waves settle — then sail home safely without danger.",
  meaning: "A boat sailing through dangerous rapids — the current timing is not suitable for big moves. Wait until the stormy period passes before pursuing anything.",
  explanation: "Launching a boat in fast water is risky. Success will come when the timing is right — patience now prevents disaster later.",
  interpretation: "Don't chase titles, salary, or appearances. Match the right person to the right role, and choose paths that genuinely suit your strengths and personality.",
  advice: {
    Love:    "The timing is not yet right. Choose a partner based on how well your personalities fit together — not looks or wealth. If personalities clash badly, there is no need to force a reunion.",
    Career:  "Only pursue opportunities that truly match your strengths and where you can perform well. Don't fight for every opening — waiting for the right fit produces far better results.",
    Wealth:  "Besides timing, only invest in things that match your personality and knowledge — that is your real advantage. Don't focus only on price; choose based on genuine suitability.",
  },
},

{
  id: 20,
  title: "The Twentieth Lot (Superior)",
  poem: "After long spring rains, the sky finally clears. Old troubles are over, new wishes come true. Watch yourself leap straight into the fairy land of Penglai.",
  meaning: "Sunshine after endless rain — the difficult times are finally becoming clear and you are breaking free toward better days. What was uncertain will become stable.",
  explanation: "Gods and Buddhas are protecting you. Even if there is disaster, it won't be dangerous. The road ahead is safe and peaceful — you will return home in glory.",
  interpretation: "If situations were unclear before, they will become obvious soon. If relationships were uncertain, they will become stable. The fog is lifting across every area of life.",
  advice: {
    Love:    "You've been stuck for a long time, but the sun is rising now. A good person will appear and you'll feel the connection. Misunderstandings in existing relationships will clear and things can be made whole again.",
    Career:  "After many months of ups and downs, results are finally becoming clear. You've worked hard for years — the frustration is gone and it's time to move up to the next level.",
    Wealth:  "The dark clouds are scattering after years of poor results. Look for good opportunities, give more to charity, and your gains will be even better than before.",
  },
  },

  {
  id: 21,
  title: "The Twenty-First Lot (Superior)",
  poem: "Yin and Yang come together — it's all decided by heaven. Just watch when the dragon and snake start to move, bringing happy reunion.",
  meaning: "When Yin and Yang are in balance, two opposite sides finally enter a state of harmony. Whatever you hoped to unite has its own destined timing.",
  explanation: "Your plans will go exactly as you wish. What has been separate will come together — in the Dragon or Snake period, things will start to move and harmonize.",
  interpretation: "Meeting is not by chance — your connection is destined by heaven. Two people, matters, or situations that seemed apart are now entering balance.",
  advice: {
    Love:    "Your destined love is written in the stars. In the Dragon or Snake month, show more kindness and care — a real relationship or marriage can naturally form from what already exists.",
    Career:  "People and matters that didn't match well before are now improving. Everything will go much more smoothly from here — your time has finally arrived to perform freely.",
    Wealth:  "The turning point for profit and loss is approaching. Whether to buy or sell, trust your own judgment — the conditions for a successful transaction are finally falling into place.",
  },
},

{
  id: 22,
  title: "The Twenty-Second Lot (Good)",
  poem: "All the fields around are dry and thirsty. After a long drought, suddenly three days of heavy rain fall. Now we know one rain is worth a thousand pieces of gold.",
  meaning: "Sweet rain after a long drought — something you have struggled with for a long time is finally getting breathing room. This rare opportunity must not be wasted.",
  explanation: "Crops will yield twice as much. The sick will meet good medicine. If you miss this chance, it will be very hard to get another opportunity for success.",
  interpretation: "You must make good use of this rare opening to fully develop and completely escape the difficult situation. Don't be half-hearted or keep looking for something better.",
  advice: {
    Love:    "Your romantic luck has been hard to come by — cherish what appears in front of you. Let go of overly high ideals, nurture this connection sincerely, and a rare and beautiful love can be yours.",
    Career:  "This is a rare and valuable chance for your career. The process will be tough and requires strong perseverance, but if you persist you will eventually enjoy sweet success.",
    Wealth:  "Past performance has been poor, but this time is different. A real opportunity to turn things around is here — seize it tightly, as good chances like this come only once.",
  },
},

{
  id: 23,
  title: "The Twenty-Third Lot (Superior)",
  poem: "You want to climb the heavenly cassia tree and reach the moon palace — why worry that the heavenly gate won't open for you? A noble person will personally escort you over the mountain ridge.",
  meaning: "Reaching for the heavenly cassia — success and honor are within reach. Once you have the key, even the most difficult door will open.",
  explanation: "Make a fresh start — get rid of the old and bring in the new. With special skills already in hand, why worry you won't have a career or blessings to enjoy?",
  interpretation: "If you've earned recognition, why worry about fortune? If you've found the treasure, why worry things won't work out? A noble person will appear and good news will naturally follow.",
  advice: {
    Love:    "With good conditions already in place, why worry love won't come? Show more respect and care for the person you like — a noble person may bring good news when you least expect it.",
    Career:  "Since you already have special skills, there is no need to fear you can't shine. With one strong ability and solid inner qualities, you will naturally stand out with glory.",
    Wealth:  "Managing money depends on your own ability and sharp insight. Build good relationships and maintain an excellent reputation — that is the real way to attract lasting wealth.",
  },
},

{
  id: 24,
  title: "The Twenty-Fourth Lot (Caution)",
  poem: "You can't become neighbors, you can't build a family — like a fool chasing bubbles. In the end, everything becomes a tangled mess.",
  meaning: "A foolish person losing virtue — people act carelessly and miss the point, so their efforts get no results. A solid foundation must be built before any plan can succeed.",
  explanation: "You didn't listen to good advice, so trouble came. You broke promises, so disasters followed. Only a righteous heart and straight principles can avoid further disaster.",
  interpretation: "To make something work, certain basic conditions are necessary. Stop breaking the fundamental rules — only by correcting these mistakes can you solve the root problem.",
  advice: {
    Love:    "First correct your own character — only when your personality is healthy and balanced will a good match appear. Stop being petty, show more care, and improve how you treat others.",
    Career:  "Always follow the right path in your career and business. Walking the proper way and obeying ethical rules is the only foundation that brings lasting good results.",
    Wealth:  "To do well in investing or business, strictly follow proper financial and business ethics. If you break the rules, losses will follow — rational and principled decisions are everything.",
  },
},

{
  id: 25,
  title: "The Twenty-Fifth Lot (Good)",
  poem: "You've already passed through so many layers of worry and danger. From now on there will be no more misfortune — you'll meet a noble person who helps you achieve great success.",
  meaning: "Relaxing your mind and making your own plans. This matter has gone through many crises, but can now finally settle down peacefully — thanks to the guidance of a wise person.",
  explanation: "You have reason on your side. Illness will heal and plans will go well. It is like finding a spring in a dry well — relief is coming from an unexpected source.",
  interpretation: "Keep a broad and generous heart and good solutions will appear naturally. If your own ability isn't enough, go find a wise person — their guidance will make all the difference.",
  advice: {
    Love:    "After many failed attempts, you will finally meet a connection that can last a lifetime. Relax your heart, accept guidance from a wise person, and love will flow much more smoothly toward marriage.",
    Career:  "After surviving many tough times, your work or business will finally stabilize. Seek advice from those with more experience — their counsel will help you stand out and succeed.",
    Wealth:  "In the past you kept losing, but this time guidance from a noble person can finally turn things around. Absorb their experience well and keep a relaxed, open mindset.",
  },
  },

  {
  id: 26,
  title: "The Twenty-Sixth Lot (Caution)",
  poem: "News keeps coming from everywhere, but it's all empty. It promises fame and success — but even if you wait your whole life, it will still come to nothing.",
  meaning: "The image of empty fame — success or recognition may seem within reach, but for some reason it disappears like a bubble. More illusion than reality.",
  explanation: "Right now your heart is restless. If you chase fame and success, in the end it will all be empty. Focus on improving your moral character to make any success more stable and real.",
  interpretation: "Things will give you false hope or empty joy. Stop doing wrong, keep your principles, and handle your plans carefully — only then can results become solid.",
  advice: {
    Love:    "Even if someone seems willing or interested, it may only be an empty gesture that leads nowhere. Don't chase appearances — focus on building real character and the right person will come in time.",
    Career:  "The future may look promising at first, but results will fall short of expectations. Stabilize your foundation and improve your conduct before making any big moves.",
    Wealth:  "It is like wealth on paper — you can see it but cannot enjoy it. A deal that looks good will bring no real profit. Avoid speculation and wait for conditions to become genuinely solid.",
  },
},

{
  id: 27,
  title: "The Twenty-Seventh Lot (Good)",
  poem: "Every plan, every move needs careful thought. When the time comes, a noble person will naturally help you — then you can live safely behind silver walls and iron fences.",
  meaning: "A wall with a solid foundation — try and fail, try again. Right now you are hesitating and unsure how to proceed. Only when a noble person gives advice will you feel certain.",
  explanation: "Old things turn into new. What blocked you before now brings satisfaction. After many ups and downs, excellent results can still be created.",
  interpretation: "Even after many heartbreaks and failures, a noble person's guidance will finally make things rock-solid and stable. Keep trying — a happy ending is still possible.",
  advice: {
    Love:    "Even after many breakups, you can still find a partner. With help from a noble person, your love will finally become stable. This relationship may go through many ups and downs before settling into something lasting.",
    Career:  "Your career may go through many twists, but in the end excellent results can be created. Seek guidance from those with more experience — their support will help you finally land the right position.",
    Wealth:  "After many fluctuations and wins and losses, profit will eventually come. The deal or investment process may go back and forth many times, but it will close successfully in the end.",
  },
},

{
  id: 28,
  title: "The Twenty-Eighth Lot (Good)",
  poem: "The moon rises beautifully in the east, so bright and clear — suddenly a cloud covers half of it. You must make the missing part become full and round once more.",
  meaning: "The moon covered by clouds — something was going well, then suddenly an obstacle appeared. Don't blame others; find a way to remove it instead.",
  explanation: "Even though there are obstacles, wisdom can solve them. Put your energy into how to fix the problem rather than focusing on who is at fault.",
  interpretation: "As long as you use your brain a little, there should be a way to resolve it. Don't rush to change direction — try to remove the obstacle right where you are.",
  advice: {
    Love:    "Don't just ask if you can pursue someone — ask how to pursue them well. Find ways to remove any obstacles. Small issues in a current relationship can be cleared with a little wisdom and care.",
    Career:  "A good opportunity exists but an obstacle has appeared. Think carefully and the small problem can be solved. With the right mindset and strategy, you can stand out and win.",
    Wealth:  "There is an obstacle in your investment or transaction. The deal may go back and forth, but it will eventually close. Think carefully before acting — a clear solution exists.",
  },
},

{
  id: 29,
  title: "The Twenty-Ninth Lot (Superior)",
  poem: "When the precious sword is drawn from its sheath, its blade shines brightly, free from any dust. A noble person lifts it up — it can protect you and earn everyone's admiration.",
  meaning: "A precious sword drawn from its sheath — something of high quality that has been hidden is now ready to shine. Breaking free from difficulties and showing true strength.",
  explanation: "The time has come to step out of the shadows. With a noble person's guidance, no disaster will touch you and your brilliance will be seen by all.",
  interpretation: "Your abilities have been hidden for too long. Now is the time to break free from difficulties, receive favor from a noble person, and let your true glory show.",
  advice: {
    Love:    "Your love luck has finally arrived after a long wait. Through a recommendation or matchmaker, a very good match is possible. Put in more gentle love and care — a happy ending is within reach.",
    Career:  "Your career will now break free from its difficult period. A noble person will help you grow stronger, and everyone around you will take notice — seize the chance and give it everything.",
    Wealth:  "Past investments or business didn't do well, but now you will break free from that pattern. Money will flow in and your profits will impress — close the deal and don't hesitate.",
  },
},

{
  id: 30,
  title: "The Thirtieth Lot (Unfavorable)",
  poem: "Don't go asking him for anything — it's like a crane flying in, only to be hit by a hidden arrow. If you gather firewood where a snake hides, you might get bitten by its venom.",
  meaning: "Mind your own business and stay in your lane. There is deception involved in this matter. Moving forward is dangerous — stepping back and staying put is safe.",
  explanation: "Keep your mouth shut and don't get involved in other people's affairs. If you have a guilty conscience, in the end you will only harm yourself.",
  interpretation: "I advise you not to do this thing — it's risky and may even be a scam. Hold back and stay conservative, and you will remain safe.",
  advice: {
    Love:    "Be very careful when making friends so you don't get tricked. This is not a good time to pursue romance or save a failing relationship — watch out for insincere intentions and protect yourself first.",
    Career:  "Watch out for opportunistic people and hidden traps. Play it safe and be conservative — this is not the time to compete or make bold moves, as others may be playing dirty behind the scenes.",
    Wealth:  "The investment path is full of risks right now. Carefully check the other party's promises before any transaction. If something feels untrustworthy, it is better to stop entirely.",
  },
  },
{
  id: 31,
  title: "The Thirty-First Lot (Caution)",
  poem: "Sit peacefully with nothing to do. When hungry, eat. When tired, sleep. Let go of your body and mind — this way, you definitely won't invite any disaster or trouble.",
  meaning: "Stay steady and live peacefully. Keeping things as they are brings calm. Just wait until the time is right and everything will naturally turn out perfectly.",
  explanation: "Don't create trouble for yourself and don't be tempted by others. Waiting patiently brings good fortune. When the timing isn't right, just wait.",
  interpretation: "As long as you live calmly and peacefully, you'll be safe. Do what you need to do and don't get involved in other people's gossip or drama.",
  advice: {
    Love:    "The timing isn't here yet — wait patiently. If it's your destined relationship, the person will naturally come to you. Don't rush into marriage; let things mature in their own time.",
    Career:  "There won't be big profits or big losses right now. Just take it easy, stay calm, and wait for the right time before making any major moves.",
    Wealth:  "If you want money to grow, the timing isn't here yet. Relax and enjoy yourself for now — the harvest will come later when conditions are right.",
  },
},

{
  id: 32,
  title: "The Thirty-Second Lot (Good)",
  poem: "The road ahead looks uncertain and unclear — like jade hidden inside a stone. One day a skilled craftsman cuts it open, and only then do people see how rare and beautiful it is.",
  meaning: "Cutting open a stone to reveal jade — the future of this matter looks vague on the surface, but there is still great potential hidden within.",
  explanation: "Treasure lies hidden in the stone. A craftsman's hand will bring it out. Once it's clearly revealed, you can do whatever you want.",
  interpretation: "As long as you find a wise or capable person to guide you, the hidden treasure will be revealed. The potential is there — it just needs the right eyes to see it.",
  advice: {
    Love:    "Your love luck will shine once the right person recognizes your value. Show more warmth and gratitude in existing relationships — and if a third party appears, real gold fears no fire.",
    Career:  "You need someone with good eyes to recognize your worth. Make good use of your strengths and your future will shine — your potential just needs the right opportunity to be developed.",
    Wealth:  "If you want profit, wait patiently for the right moment. The jade is still hidden, but one day it will rise. Focus on quality and reputation — steady profits will follow.",
  },
},

{
  id: 33,
  title: "The Thirty-Third Lot (Good)",
  poem: "Beautiful jade is hidden inside the stone — why search outside when the answer is within? Just wait for a wise person to come and reveal it. Relax your heart, and relax it even more.",
  meaning: "Searching for jade hidden inside — you don't need to look outside for what you want. The treasure is within, not outside. A wise person can point it out.",
  explanation: "Gold and jade are hidden within. When a noble person guides you, there is no need to worry or overthink. Things may look ordinary on the surface but hold great value inside.",
  interpretation: "You don't need to search far away. The answer is already close. If you can't find the hidden treasure yourself, ask a wise person to point it out and it will appear.",
  advice: {
    Love:    "Your destined person is already close by — someone you already know. Focus on their good points rather than their flaws. Show your own strengths calmly and let the relationship reveal itself naturally.",
    Career:  "Your job is right here — no need to search far away. Your future depends on your own strengths. If your superiors recognize your talent, your path will shine brightly.",
    Wealth:  "If you're already financially comfortable, there is no need to chase more wealth. Sell higher-quality items and wait for the right customers — results will be good.",
  },
},

];

// ─── 防御性校验（开发环境提示）─────────────────────────────────────────
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  const ids = FORTUNES_DB.map(f => f.id);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (duplicates.length) {
    console.warn('[ZenOracle] 签诗数据库中存在重复 id：', duplicates);
  }
  if (FORTUNES_DB.length < 100) {
    console.info(`[ZenOracle] 当前签诗数量：${FORTUNES_DB.length} / 100`);
  }
}
