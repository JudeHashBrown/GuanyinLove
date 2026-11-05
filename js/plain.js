/**
 * Plain-English readings for each lot.
 *
 * Written for visitors with no background in Chinese temple poetry.
 * Each entry is based on the source counsel in fortunes.js, restated in
 * everyday language: a bottom line, what it means, guidance for love,
 * career and money, and one small thing to do now.
 *
 * tone: 'good' (leans favorable), 'mixed' (good with patience / effort),
 *       'careful' (slow down, protect yourself).
 */
'use strict';

const PLAIN_DB = {
1: {
  tone: 'good',
  bottomLine: 'A very good sign. This is a fresh start, and things are lining up for you.',
  meaning: 'This lot is about new beginnings. The timing is right, and people may notice your ability and trust you with more. Honesty and loyalty are what make this good luck last.',
  Love: 'A connection is on its way or already mutual. If you feel something, say it clearly and sincerely.',
  Career: 'A good time to apply, launch, or ask for more responsibility, as long as you are ready to back it up.',
  Wealth: 'Deals and investments look favorable. Still read the details before you sign.',
  action: 'Start the thing you have been putting off, and do it in an honest, open way.'
},
2: {
  tone: 'mixed',
  bottomLine: 'Not yet, but later. Your big moment is coming once you are ready.',
  meaning: 'You have real potential, but the timing is not ripe. This is a season for growing stronger, not for leaping. When you are ready, one move can change a lot.',
  Love: 'Do not push someone who is not interested, and do not rush marriage or getting back together. Give feelings time.',
  Career: 'A promotion, exam, or new venture may be too early. Build your skills and experience first, then try again.',
  Wealth: 'Wait out a weak market. Improve what you already own before expecting a return.',
  action: 'Pick one skill that would make you "ready" and spend a little time on it this week.'
},
3: {
  tone: 'careful',
  bottomLine: 'You are working hard, but the same approach keeps bringing you back to zero.',
  meaning: 'Like a swallow rebuilding a mud nest that keeps falling, repeating the same effort will not give you a lasting result. The answer is not more effort but a different method.',
  Love: 'Stop chasing someone who does not respond. Make room for a calmer life or a new person.',
  Career: 'If searching or building has not worked, change how you do it instead of just doing more.',
  Wealth: 'Expect little profit for now. Do not borrow money for this; interest could eat any gain.',
  action: 'Write down what you keep repeating, and change one part of the method.'
},
4: {
  tone: 'good',
  bottomLine: 'What was broken can be put back together. A second try can go better than the first.',
  meaning: 'This lot is about repair. Something that was lost, separated, or failed can recover. It takes effort, but the effort pays off, especially if you learn from what went wrong.',
  Love: 'Getting back together or a second marriage is possible. Be kinder and steadier so the same break does not happen again.',
  Career: 'A setback is not the end. Keep doing your work and prepare your next attempt.',
  Wealth: 'Some loss may come before gain. With property, waiting may work out better than forcing a sale now.',
  action: 'Think of one thing that broke, and write down what you would do differently on a second try.'
},
5: {
  tone: 'mixed',
  bottomLine: 'Hard at first, easier later. Help will come from someone you did not expect.',
  meaning: 'Like digging for water in hard ground, you need to put in real work. But pushing too hard or worrying too much can block the result. Stay grounded, and a like-minded partner may appear when you are not looking.',
  Love: 'Do not force the timing. A chance meeting may go further than chasing. If you are already together, grow it slowly and practically.',
  Career: 'Work steadily without expecting quick money. Value a partner whose goals and style match yours.',
  Wealth: 'Keep a calm head with investments or a sale. Pressure and impatience may backfire.',
  action: 'Let go of one thing you are forcing, and spend that energy on steady daily work.'
},
6: {
  tone: 'mixed',
  bottomLine: 'Hard times show who you really are, and who your true friends are.',
  meaning: 'This lot honors generosity and quiet strength. Live simply and stay honest while you wait for better conditions. A tough season can reveal real ability and real friends.',
  Love: 'Show care through actions. Judge a long-term commitment after you have been through something hard together.',
  Career: 'Uncertain times can open doors, but only if your skills are strong enough to meet the challenge.',
  Wealth: 'Think for yourself instead of following the crowd, but stay cautious in a shaky market.',
  action: 'Notice who has stood by you lately, and thank them.'
},
7: {
  tone: 'careful',
  bottomLine: 'A long, tiring road. Stay put, keep your goals modest, and do not take on another detour.',
  meaning: 'You may feel stuck in mud, moving forward at great cost and unable to turn back easily. This is not the time to aim higher or switch paths. Be honest and steady, and think carefully before any new move.',
  Love: 'Do not force a draining relationship, and do not rush into someone new after a breakup. Let things settle.',
  Career: 'Changing jobs again and again will not bring stability. Build solid work and trust where you are first.',
  Wealth: 'Do not hold on to a weak position just out of hope. If a reasonable profit shows up, consider taking it.',
  action: 'Before starting anything new, finish or settle one thing you already have.'
},
8: {
  tone: 'good',
  bottomLine: 'Slow but strong. Years of patience will turn you into someone truly valuable.',
  meaning: 'Like old pine trees that survive every winter, you are being shaped by tests and time. There is no shortcut here, but endurance leads to real recognition later.',
  Love: 'A relationship in trouble may need a long time of patience and repair before the way forward is clear.',
  Career: 'Treat this like a long apprenticeship. Practice and good conduct will lead to success.',
  Wealth: 'Think long-term. Do not expect fast results from investments, business, or property.',
  action: 'Choose one long-term habit and commit to it for the next month.'
},
9: {
  tone: 'good',
  bottomLine: 'The answer is already inside you. Look at yourself honestly and the path becomes clear.',
  meaning: 'This lot turns the question back to you. Be honest about your motives, your situation, and your part in things. A clear heart sees a clear answer, but do not take good luck for granted.',
  Love: 'Ask yourself honestly if you are ready and if you truly match. If you hurt someone, admit it and apologize first.',
  Career: 'Build real expertise and act on fair principles. Recognition here comes from actual skill.',
  Wealth: 'Choose solid, sound investments and play by the rules. Skip shortcuts.',
  action: 'Take ten quiet minutes and write the honest answer to your own question.'
},
10: {
  tone: 'good',
  bottomLine: 'What you are looking for is already close to you. Stop searching far away.',
  meaning: 'Like carrying a lamp while searching for fire, you may already have what you need. Look at what is near you and what you already have before wearing yourself out searching outside.',
  Love: 'Look among people you already know. Give the relationship you have a fair chance before looking elsewhere.',
  Career: 'Grow the strengths of your current job and location instead of assuming success is somewhere else.',
  Wealth: 'If you already have enough, skip risky bets. Buy property to use, not just to chase profit.',
  action: 'List three things you already have that could help with your question.'
},
11: {
  tone: 'good',
  bottomLine: 'A setback turns into a blessing, and helpful people step in.',
  meaning: 'Something that looks like trouble may end up working in your favor. Friends, family, and introductions play a big role. Help arrives right when you need it.',
  Love: 'A connection may come through an unexpected event or an introduction. Friends and family can help.',
  Career: 'A referral can help your job search. A mentor or experienced person can help your plans move ahead.',
  Wealth: 'Good advice may improve a deal. Still check the adviser and the deal yourself.',
  action: 'Tell one trusted person what you are working toward and let them help.'
},
12: {
  tone: 'good',
  bottomLine: 'The worst is behind you. Things are starting to turn around.',
  meaning: 'After a long stuck period, life starts moving again. Early spring is named as a turning point. There may have been tears, but good things can grow out of hard times. Keep a clear goal and keep going.',
  Love: 'A bond that has survived conflict and recovered is a stronger base for commitment.',
  Career: 'A job or venture may start rough and then improve. Early in the year is a good time for a fresh push.',
  Wealth: 'Past results may have been weak, but a turn is coming. Act only when the current facts support it.',
  action: 'Set one clear goal for the coming months and take the first small step.'
},
13: {
  tone: 'good',
  bottomLine: 'A big breakthrough. A blocked path opens, and your name gets noticed.',
  meaning: 'Things have been going generally well, and now a bottleneck clears with the help of capable people. To keep this success, stay honest and act with integrity.',
  Love: 'The outlook is good. Do not get careless or take each other for granted; keep respect and boundaries.',
  Career: 'An obstacle may be cleared, and your good work may become widely known.',
  Wealth: 'Stuck investments or a stalled property deal may start moving again. Treat it as a chance to review, not a promise of profit.',
  action: 'Share your work with more people; this is a time to be seen.'
},
14: {
  tone: 'good',
  bottomLine: 'You are being set free. A hard, limiting time is ending.',
  meaning: 'Like a crane flying out of its cage, the pressure you have felt is lifting. The road ahead is open, and talents you could not use before can now shine.',
  Love: 'Go toward a warm, easy connection. If an old relationship felt like a cage, it is okay to move toward something new.',
  Career: 'After a tough stretch, you finally have room to show what you can do. Present your abilities fully.',
  Wealth: 'A stuck investment or deal is improving. Judge it by today’s facts before you expand.',
  action: 'Do one thing this week that you have held back from doing.'
},
15: {
  tone: 'careful',
  bottomLine: 'Watch your words. Do not let an argument turn a small problem into a big loss.',
  meaning: 'Hurtful words, arguments, and refusing good advice can lead to real damage. When someone provokes you, staying calm protects you far more than fighting back.',
  Love: 'Speak kindly and act with care. Do not let one fight break the relationship.',
  Career: 'A conflict or competition could hurt everyone. Step back and wait instead of escalating.',
  Wealth: 'Do not buy on bad news, overstock in a weak market, or force a property deal now.',
  action: 'Next time you feel provoked, wait one day before you reply.'
},
16: {
  tone: 'good',
  bottomLine: 'Your worries are about to clear. Someone will recognize your true value.',
  meaning: 'Like jade hidden in mud, your worth may not be obvious yet. An expert or helpful person can spot it and lift you out. Show your real strengths and act honestly.',
  Love: 'A matchmaker or a respectful approach may reveal a good match. A misunderstanding can ease when you see the good in the other person.',
  Career: 'Show your best skill clearly. Find a mentor or expert who can help clear the current obstacle.',
  Wealth: 'Use honest methods and good credit. Gambling and hiding things are the losing side.',
  action: 'Ask someone you respect for honest feedback on your strongest skill.'
},
17: {
  tone: 'careful',
  bottomLine: 'Not everything you are promised is real. Do not chase empty words.',
  meaning: 'Like a painted cake that cannot feed you, gossip, promises, and gains on paper may have nothing real behind them. Ignore the noise, look after your own heart, and focus on doing good.',
  Love: 'Do not chase a relationship that exists mostly in words, or someone whose promises keep failing.',
  Career: 'An offer, promotion, or projected profit may disappear. Ask for proof and strengthen your own preparation.',
  Wealth: 'Hold off on investing now. Profit on paper is not money in your hand.',
  action: 'For any promise you are counting on, ask: what proof do I actually have?'
},
18: {
  tone: 'good',
  bottomLine: 'Things are going your way. Quiet strength, kindness and good service win here.',
  meaning: 'Like the moon rising as the sun sets, life is moving in a natural, good rhythm. This lot favors gentle, thoughtful qualities over showing off. Your work pays off like an arrow hitting its mark.',
  Love: 'New, growing, and reconnected relationships all look good. It is fine for you to make the first move.',
  Career: 'Service, learning, tact, and the quality of your work matter more than titles or power.',
  Wealth: 'Stay steady with investments. In business, focus on good service and earning trust, not just profit.',
  action: 'Do one quiet, kind thing for someone without expecting anything back.'
},
19: {
  tone: 'careful',
  bottomLine: 'The waters are rough right now. Wait for the storm to pass before you move.',
  meaning: 'Launching a boat into rapids is dangerous. Hold off until things calm down. Also ask yourself honestly: is this person, job, or plan really the right fit for you?',
  Love: 'Attraction alone is not enough. Think again about whether you truly fit, and hold off on marriage or getting back together if not.',
  Career: 'Choose work that matches your real skills and interests. Put people in roles where they complement each other.',
  Wealth: 'Timing and fit both matter. Only buy what you understand and have a clear reason for, and do not jump in during turmoil.',
  action: 'Before deciding, write down why this choice fits you, not just why it is exciting.'
},
20: {
  tone: 'good',
  bottomLine: 'The rain is over and the sky is clearing. Old problems close, and new things begin.',
  meaning: 'After a long gloomy period, things start to become clear. You can finally tell what is real, finish an old chapter, and start something new. You are protected on the road ahead.',
  Love: 'Loneliness or a misunderstanding may lift. Still, do not chase a poor match or revive a breakup that had deep reasons.',
  Career: 'Steady effort at work or business starts to become clearer and more productive.',
  Wealth: 'A long-stuck investment or property may improve or find a buyer. Make sure the facts back this up.',
  action: 'Close one old, unfinished matter this week so there is room for the new.'
},
21: {
  tone: 'good',
  bottomLine: 'Harmony and union. Two sides that were apart are coming together.',
  meaning: 'This lot is about balance and joining. People or things that did not fit before are finding their way to each other. Spring (around the 3rd and 4th lunar months) is named as a turning point.',
  Love: 'Meeting someone, committing, or getting back together looks good when both sides are kind.',
  Career: 'Work that suits you better may appear, and tense teams may start cooperating.',
  Wealth: 'Gains and losses may shift in spring, but the decision to buy or sell is yours to make.',
  action: 'Reach out to someone you have drifted from, with a simple kind message.'
},
22: {
  tone: 'good',
  bottomLine: 'Relief is coming after a long dry spell. Treasure it and use it well.',
  meaning: 'Like rain after a drought, help arrives just when things felt hopeless. This is a rare chance, so take good care of it and keep going until you are fully out of the hard times.',
  Love: 'Value a connection that was hard to find. Keep expectations realistic and stay loyal instead of leaving at the first letdown.',
  Career: 'An opening may finally appear after struggle. Get ready to use it fully and keep at the remaining work.',
  Wealth: 'A recovery or deal may show up after poor results. Check it carefully; not every change is equally good.',
  action: 'Name the "rain" that has come into your life recently, and decide how to make the most of it.'
},
23: {
  tone: 'good',
  bottomLine: 'The door is not closed for good. Get the key skill, and help will come.',
  meaning: 'You are reaching for something high. Once you have the right skill or the crucial piece, the door that seemed shut can open. Real ability plus the right help from others is what makes this work, not luck alone.',
  Love: 'Being your best self may lead to an introduction. If you want to reconnect, be warm and respectful, and deal with what actually went wrong.',
  Career: 'Build and show one useful specialty. Skill plus timely help from others is the key.',
  Wealth: 'Investing takes skill. Business and property depend on trust, reputation, and good relationships.',
  action: 'Ask yourself: what one skill or fact would open this door? Start on it.'
},
24: {
  tone: 'careful',
  bottomLine: 'The foundation is not ready. Fix the basics before you expect results.',
  meaning: 'A plan without solid groundwork, good conduct, or clear rules turns messy and hard to finish. Stay out of gossip, be careful, and repair the base first.',
  Love: 'Work on how you treat each other first. If repeated fights caused a split, change that pattern before trying again or starting over.',
  Career: 'Look for honest work and run things by fair, practical rules. Shortcuts are what cause trouble here.',
  Wealth: 'Follow proven investing and business rules, and think calmly about property. Ignoring the rules leads to loss.',
  action: 'Pick one basic thing you have been skipping and fix it first.'
},
25: {
  tone: 'good',
  bottomLine: 'You have made it through the worst. From here, things become steadier.',
  meaning: 'After crisis after crisis, the danger is passing. An open, generous mind will find the way. If you are unsure, ask someone wiser or more experienced for help.',
  Love: 'After past disappointments, a new introduction or a careful reunion can go better with patience and good advice.',
  Career: 'A venture can stabilize after rough beginnings. A mentor or experienced person can be very useful.',
  Wealth: 'Past losses do not decide your next result, but follow checked, experienced advice instead of hoping for a reversal.',
  action: 'Ask one experienced person for advice on your situation.'
},
26: {
  tone: 'careful',
  bottomLine: 'Good news may be empty. Do not count on it until it is real.',
  meaning: 'A promise or exciting news may raise your hopes and then disappear. Handle things carefully, stay disciplined, and protect what you already have.',
  Love: 'A message, attraction, or promise to get back together may not hold up. Wait for consistent actions.',
  Career: 'An offer or promotion may not happen. Confirm everything in writing and keep a backup plan.',
  Wealth: 'Gains on paper and promised profits do not count until they are real. Do not spend money on an announcement.',
  action: 'Keep your backup plan alive until the good news is actually in your hands.'
},
27: {
  tone: 'good',
  bottomLine: 'Lots of ups and downs, but a helper will guide you to a safe, solid place.',
  meaning: 'Every plan seems to twist, and you may feel too unsure to act. When the time is right, someone will help you see clearly. The goal is not excitement but a strong, stable base.',
  Love: 'An introduction or someone in the middle can help a back-and-forth relationship settle. One bump is not the final answer.',
  Career: 'Keep going through the setbacks, and get guidance from someone experienced when choosing a job or making a change.',
  Wealth: 'Markets and negotiations may reverse more than once. Handle each turn instead of assuming the ending.',
  action: 'Stop second-guessing alone. Talk it through with someone experienced.'
},
28: {
  tone: 'mixed',
  bottomLine: 'A cloud is blocking the moon, but only for a while. The problem can be solved.',
  meaning: 'Something good has hit a sudden obstacle. It is temporary. Focus on finding and fixing the specific problem, not on blaming anyone.',
  Love: 'Be creative in meeting people, or fix the small problem in your relationship instead of treating it as the end.',
  Career: 'There may be one specific barrier. Solve it where you are before deciding you need a total change.',
  Wealth: 'Look closely at what is complicating your deal and deal with it directly. A delayed property deal may still close.',
  action: 'Name the exact obstacle in one sentence, then list one way to remove it.'
},
29: {
  tone: 'good',
  bottomLine: 'Your hidden talent is about to shine. Someone important will recognize it.',
  meaning: 'Like a treasured sword taken out of its case, your ability has been hidden too long. With the right person noticing you, your value can finally be used and respected.',
  Love: 'A good time to be seen, accept an introduction, approach someone, or move toward marriage.',
  Career: 'Bring your hidden skills into the open. Recognition and support can move your work past an old standstill.',
  Wealth: 'Weak past results or a stalled sale may improve as interest returns. Use the opening carefully.',
  action: 'Show your work or skill to one new person this week.'
},
30: {
  tone: 'careful',
  bottomLine: 'Danger may be hidden. Stay where you are and do not go asking others for this.',
  meaning: 'There may be a trap, a hidden attack, or someone dishonest along this path. Moving forward is risky. Keep quiet, mind your own business, and step back for safety.',
  Love: 'Watch out for deception or fake affection. Not a good time to chase, deepen, or revive this relationship.',
  Career: 'A job or deal may hide unfair treatment or broken promises. Look into it carefully and wait if the risk is unclear.',
  Wealth: 'Investments and trades may have traps. Delay big transactions instead of forcing a deal.',
  action: 'Before you trust a new offer or person, quietly check their track record.'
},
31: {
  tone: 'mixed',
  bottomLine: 'Rest and wait. Do not stir up trouble by rushing.',
  meaning: 'The safest path now is to do what you need to, stay out of gossip, and avoid restless moves. You or the timing are not quite ready for a big push. Peace is the best strategy.',
  Love: 'Do not hurry a meeting, marriage, or reunion. Let the other person come closer, and give it time.',
  Career: 'A new direction or promotion is not ready yet. Keep your current work going and do not force growth.',
  Wealth: 'Markets and property are quiet. Stay careful and wait rather than chasing quick returns.',
  action: 'Give yourself permission to rest this week without feeling guilty.'
},
32: {
  tone: 'good',
  bottomLine: 'It looks unclear now, but there is real treasure inside. An expert will help reveal it.',
  meaning: 'Like jade hidden inside a plain stone, this situation has value that is not obvious yet. Someone skilled can help you see it and know what work is needed to bring it out.',
  Love: 'An introduction or a closer look may reveal the right person. If things are tense, show warmth and remember their good side.',
  Career: 'Show your hidden skills and find someone who can recognize them.',
  Wealth: 'Value may go unnoticed for a while. Keep up quality and reputation while you wait for the right buyer.',
  action: 'Find one expert or mentor who can help you see what you are not seeing.'
},
33: {
  tone: 'good',
  bottomLine: 'What you need is already here. Relax, and let someone wise point it out.',
  meaning: 'The treasure you seek may already be inside you or around you. There is no need to search far away or wear yourself out. If you cannot see it, a knowledgeable person can help.',
  Love: 'Look first at someone you already know or the partner beside you. Appreciate their strengths instead of only their faults.',
  Career: 'Use your own skills and nearby opportunities. A boss or a fresh look at your team may show the better path.',
  Wealth: 'Start with what you actually have and do not chase profit you do not need. In trade, focus on real quality.',
  action: 'Write down three strengths you already have but rarely use.'
},
34: {
  tone: 'good',
  bottomLine: 'Bright and clear like the noon sun. Act with respect and honesty, and things fall into place.',
  meaning: 'Courtesy, fairness, and listening to good advice are the foundation of your good result. When your conscience is clear, confusion and conflict fade away on their own.',
  Love: 'Build a good bond through respect, real care, and seeing things from their side.',
  Career: 'How you speak, serve, and treat people is the key to finding work or growing your business.',
  Wealth: 'Greed can ruin an investment. Honest quality, fair deals, and modest expectations work best.',
  action: 'Really listen to one piece of advice you have been brushing off.'
},
35: {
  tone: 'good',
  bottomLine: 'Time for a fresh restart. Clear the obstacles, talk it through, and things come together.',
  meaning: 'This lot is about rebuilding. Regroup, fix what is weak, and remove what is in your way. When you sit down with the people involved and agree on a shared goal, your plan has its best chance.',
  Love: 'Change your habits instead of repeating old patterns. A kinder, more thoughtful you can start, deepen, or repair a relationship.',
  Career: 'Get clear on what you want, sharpen your skills, and relaunch with a better way of working.',
  Wealth: 'Review your investment or business, rethink the strategy, and improve what customers or buyers see before putting in more money.',
  action: 'Have one honest conversation with the people involved and agree on the next step together.'
},
36: {
  tone: 'mixed',
  bottomLine: 'You feel tied down now, but the chain is coming off. Hard first, then easier.',
  meaning: 'Like a monkey freed from its chain, your limits are only temporary. Keep using your abilities where you are, let go of extra worry, and be ready to move when things truly open up.',
  Love: 'If you are single, enjoy your freedom. After a hard breakup, do not force getting back together; heal and live fully.',
  Career: 'A slow period does not need to be filled with panic. Rest, watch, and come back strong when a real opening appears.',
  Wealth: 'Do not panic over tied-up money or a quiet market. Wait for clearer conditions instead of forcing a sale.',
  action: 'Put down one worry you cannot control right now, and rest.'
},
37: {
  tone: 'careful',
  bottomLine: 'You are like a candle in the wind. Protect yourself and stay steady for now.',
  meaning: 'Your position is easily shaken right now. Instead of pushing forward, reduce your risk, save your energy, and stay in a safe, quiet place until things settle.',
  Love: 'If pushing harder is making things colder, pause and learn what the other person needs. Do not rush commitment now.',
  Career: 'Build your skills and keep your current position. Not the time to force a launch or big move.',
  Wealth: 'Stay careful in a shaky market. Avoid risky expansion, and wait on property deals until conditions are sound.',
  action: 'Pull back from one risky thing and protect what you already have.'
},
38: {
  tone: 'mixed',
  bottomLine: 'Clouds have covered the moon. Wait calmly, or try a different way, then go again.',
  meaning: 'Something seemed ready to start, but an obstacle got in the way. Do not force it while things are unclear. Wait for the clouds to pass, or change your approach, then pick it up again.',
  Love: 'Do not push for an answer while things are foggy. Let the problem become clear, then rethink your approach.',
  Career: 'Hold off on a big push. Use the pause to find what is blocking you and plan a better way.',
  Wealth: 'Not a good time to invest. Wait for bad conditions to pass, and improve your plan or property before making a deal.',
  action: 'Use this pause to plan "version two" of what you were trying to do.'
},
39: {
  tone: 'careful',
  bottomLine: 'Pushing harder will not work. You cannot polish a stone into a mirror.',
  meaning: 'The way you are going about this cannot give you what you want, no matter how hard you try. Stop treating more effort as progress, and honestly ask if the goal or method needs to change.',
  Love: 'This relationship will not come through force. Step back from one-sided chasing and stop giving more than you get back.',
  Career: 'If effort keeps going nowhere, pause that path, fix what you can control, and rethink your goal.',
  Wealth: 'Do not chase returns with a method that keeps losing money. Protect what you have and wait for real reasons to change course.',
  action: 'Ask honestly: am I trying to make a mirror out of a stone? If yes, change the goal or the tool.'
},
40: {
  tone: 'mixed',
  bottomLine: 'Hard at first, then better. Softness and patience work better than force now.',
  meaning: 'The energy is shifting from strong and forceful to gentle and receptive. Calm strength, kindness, and letting others lead at times will get you further than pushing. Traditionally this lot is especially favorable for women.',
  Love: 'After early tension, let the gentler side lead. Speak plainly about what you want in the relationship.',
  Career: 'Show your inner strengths, treat people warmly, and do not try to control everything. Substance and calm matter most.',
  Wealth: 'Self-control and honest dealing lead to better choices. Do not just follow the momentum.',
  action: 'In one situation this week, try listening and letting the other person lead.'
},
41: {
  tone: 'careful',
  bottomLine: 'Not everything that looks good is good. Do not trade future pain for a little sweetness now.',
  meaning: 'This lot warns against mistaking short-term pleasure for real benefit. Something attractive may hurt you later. Take the time to judge carefully, and do not be bought or buy others.',
  Love: 'Look past attraction and the rush to settle down. Think about daily life together, and do not go back just to avoid being alone.',
  Career: 'Choose a job for its long-term conditions, not quick money or status. A bigger title may bring burdens you do not want.',
  Wealth: 'A hot market can cloud your judgment. Avoid speculation and short-term profit that ignores the full cost.',
  action: 'Before saying yes to something tempting, imagine how you will feel about it a year from now.'
},
42: {
  tone: 'good',
  bottomLine: 'Grace is flowing your way. Things can be completed, especially when you think of others too.',
  meaning: 'Sincere prayer and good intentions are answered fairly. This lot links blessing with generosity: aim for what helps others as well as yourself, and let fairness guide you.',
  Love: 'Approach the relationship caring about what is good for the other person, not just what you want.',
  Career: 'Bring a spirit of contribution to your work. Pair sincere effort with whatever spiritual practice means something to you.',
  Wealth: 'Your own gain is not the only measure. Choose fair deals that work for both sides. Prayer is not a promise of profit.',
  action: 'Do one thing this week that helps someone else move forward.'
},
43: {
  tone: 'good',
  bottomLine: 'Everything is coming alive. Two sides can work together, and helpful people appear.',
  meaning: 'Like spring when heaven and earth meet, things become fresh and full of life. Move forward one practical step at a time, do your share, and accept help without becoming lazy.',
  Love: 'Do not dismiss a good match because of modest circumstances. Build slowly, and handle stress with care for both of you.',
  Career: 'Move forward step by step with effort and integrity. Do not let good conditions lower your standards.',
  Wealth: 'Patient, long-term investments and steady customers work well. Even a modest property can sell when the fit is right.',
  action: 'Take one small, practical step forward today.'
},
44: {
  tone: 'mixed',
  bottomLine: 'You are facing an even match. Study carefully, then make the first move.',
  meaning: 'Like a chess game between equals, the result is not decided yet. Watch closely, adapt, avoid careless mistakes, and find the one key factor. When you are ready, move first and do not hesitate.',
  Love: 'Get to know their character and background before revealing everything or planning marriage.',
  Career: 'Show your real strengths, fix your weak spots, and do not miss a good opening.',
  Wealth: 'A deal may depend on one key condition. Do your research and check the risks; moving fast is not a guaranteed win.',
  action: 'Find the single most important factor in your situation and focus on it.'
},
45: {
  tone: 'good',
  bottomLine: 'Gentleness beats force. The good you have done is coming back to you.',
  meaning: 'Like water that wears down stone, softness wins over hardness. Kindness, humility, and patience are your best tools now. Good deeds you have built up bring protection and relief.',
  Love: 'Use tenderness, sincere praise, and humility. Patient warmth works better than hurt pride.',
  Career: 'Speak with tact and handle obstacles calmly. Quiet skill does more than a hard push.',
  Wealth: 'Generosity and respectful dealing support prosperity. Good service and patient negotiation matter most.',
  action: 'Respond to one tense situation with gentleness instead of force.'
},
46: {
  tone: 'mixed',
  bottomLine: 'Hold steady. With a little help at the right time, what seemed dead can bloom again.',
  meaning: 'Keep doing what you know is solid, and do not listen to bad advice. When the right helper or introduction comes, things that looked finished can come back to life. Do not force it.',
  Love: 'Let timing and introductions work. Cherish what you have, and use warmth, not pressure, if things are tense.',
  Career: 'Keep going steadily through a slow period, and stay open to a trustworthy referral.',
  Wealth: 'Do not give up a sound plan just because it is going through a hard phase. A sale may need the right middleman.',
  action: 'Keep your routine steady this week and ignore advice that pushes you to take shortcuts.'
},
47: {
  tone: 'good',
  bottomLine: 'Very good. Good luck stacks on good luck, even if success arrives later than you hoped.',
  meaning: 'Like adding flowers to beautiful silk, joy is being added to a strong foundation. Your recognition may come late, but when it comes it can be big. Years of steady work are building toward it.',
  Love: 'Delay is not failure. When a good chance to meet, commit, or reconnect appears, take it, and do not let small fights grow.',
  Career: 'A long search or years of hard work may lead to recognition. Keep building your good name.',
  Wealth: 'Think long-term with investments and property. Patience helps, but it cannot guarantee a high price.',
  action: 'Remind yourself how far you have come, and keep going.'
},
48: {
  tone: 'good',
  bottomLine: 'A big transformation. Something small is about to grow into something great.',
  meaning: 'Like a fish that turns into a giant bird, what looks ordinary now has huge potential. Keep preparing patiently, and growth will follow. Build it for real, not just for show.',
  Love: 'Let the relationship grow naturally. Do not demand a big outcome before trust is built.',
  Career: 'High goals may take longer, but steady preparation leads to a bigger role later.',
  Wealth: 'Take a long view and do not give up a good plan halfway. With property, realistic pricing helps the deal close.',
  action: 'Write down the bigger version of yourself, and one step to prepare for it.'
},
49: {
  tone: 'careful',
  bottomLine: 'Things are frozen right now. Do not force it; wait for the thaw.',
  meaning: 'Like water turned to ice, plans are stuck and rigid. Pushing out of greed or impatience will only make it worse. Sit with a calm heart and wait until conditions and the truth become clear.',
  Love: 'Dating or commitment is on hold in a cold period. Wait for warmer days, and use patient warmth if both want to repair.',
  Career: 'A job search or business may stay stuck until the wider climate improves. Stay ready without forcing it.',
  Wealth: 'Do not chase profit in a frozen market. Stay flexible and pause a deal that is not moving.',
  action: 'Pause one stuck thing for now, and set a date to look at it again.'
},
50: {
  tone: 'good',
  bottomLine: 'Smooth sailing with the wind behind you. Go ahead, but keep your hand on the wheel.',
  meaning: 'Conditions are in your favor, and you can travel far. Still, steer carefully: success can make people careless. Grow without giving up your principles.',
  Love: 'Let things develop naturally, even across distance. Respect the other person’s wishes.',
  Career: 'Look widely, work responsibly, and keep your values as opportunities grow. Helpful people may support you.',
  Wealth: 'Spread out your risk and set clear rules for when to buy and sell. Good wind is not permission to ignore limits.',
  action: 'Move ahead on your plan, but set one clear limit for yourself first.'
},
51: {
  tone: 'good',
  bottomLine: 'Relief is coming, like a cool breeze on a hot day. Help will arrive at the right time.',
  meaning: 'Things may feel heavy and hot right now, but heaven sees it. Help may come from someone you cannot see yet. Accept sincere help gratefully, and keep doing your part.',
  Love: 'A meeting, introduction, or someone in the middle may ease loneliness or conflict. Let both sides choose freely.',
  Career: 'Keep working steadily and stay open to referrals and support. Calm is good, but it does not replace preparation.',
  Wealth: 'Some things are out of your control. Treat customers fairly and use sound terms; help is not a guarantee of profit.',
  action: 'Accept one offer of help instead of doing everything alone.'
},
52: {
  tone: 'careful',
  bottomLine: 'Like catching the moon in water, you can see it but cannot hold it this way.',
  meaning: 'What you want looks close but cannot be reached with your current approach. Do not believe rumors or reckless advice. Think calmly, and if you get proper help, there may be a more practical route.',
  Love: 'This pursuit is likely to end empty. Accepting a breakup may be better than giving it more of your life.',
  Career: 'If the same path keeps staying out of reach, stop following rumors and look for a more concrete route.',
  Wealth: 'Do not confuse an attractive picture with a real return. Protect your savings and avoid a deal that cannot work.',
  action: 'Ask yourself: is this real, or only a reflection? Look for one concrete fact.'
},
53: {
  tone: 'good',
  bottomLine: 'Frustration turns into success. When the door opens, walk through it with courage.',
  meaning: 'A setback can become the very thing that makes you braver and stronger. When a real opening appears, face it directly. Do not let past difficulty decide your future.',
  Love: 'An early disappointment does not define the relationship. Talk about it honestly and see if you can both grow stronger.',
  Career: 'Treat an obstacle as training. If your path is still sound, keep going with courage and a better method.',
  Wealth: 'Hard times can bring chances, but low prices are not a promise of gain. Do your research and set limits.',
  action: 'Think of one setback and write down what it has taught you.'
},
54: {
  tone: 'careful',
  bottomLine: 'Treasure in a dream is gone when you wake. This path will not get you there; try another.',
  meaning: 'The result you want seems close, but it cannot be reached this way. Do not sacrifice yourself for something that only looks beautiful. Look for a different, practical path.',
  Love: 'Turn away from a relationship that lives mostly in hope. Leave room for someone who truly feels the same.',
  Career: 'Change direction if your job search is not working. A steady job may suit you better than carrying a whole business alone.',
  Wealth: 'Promises of fast money may vanish. Find another route, and do not buy property assuming it must make money.',
  action: 'List one alternative path you have not seriously considered yet.'
},
55: {
  tone: 'good',
  bottomLine: 'A blessed, stable home. Family roots and good values support you.',
  meaning: 'This lot celebrates a warm family and good values passed down through generations. Your support comes from these roots. Keep living those values instead of taking comfort for granted.',
  Love: 'Show interest without showing off. Listen to family advice when planning marriage, and be patient in small fights.',
  Career: 'Lean on good traditions, trusted relationships, and the knowledge already around you.',
  Wealth: 'Use your knowledge and connections responsibly, and share what you have. Family support helps, but is not a guarantee.',
  action: 'Call or thank a family member or elder whose values you carry.'
},
56: {
  tone: 'mixed',
  bottomLine: 'A narrow, rocky stream right now. Ask for directions, and the wide, calm river is ahead.',
  meaning: 'You are pushing a boat through a tight, dangerous channel. Do not stay stuck in a path that costs you so much. Talk with the people involved, learn from experienced people, and avoid tempting shortcuts.',
  Love: 'Ask a wise, trusted person for perspective. Check a new match carefully and talk with family before committing.',
  Career: 'Get advice from people who know the road, especially when an offer looks too good. A solid plan beats forcing through.',
  Wealth: 'Research the market, ask qualified people, and do not let bargains or quick gains pull you into a costly path.',
  action: 'Ask one experienced person: "If you were me, what would you do?"'
},
57: {
  tone: 'good',
  bottomLine: 'Support is around you. Ignore gossip and trust what experience has taught you.',
  meaning: 'Like a child running to its mother, you have dependable people on your side. Let rumors blow past you like wind. Appreciate the stable life you have and accept help from family, friends, or a mentor.',
  Love: 'Warmth and familiarity support the relationship. Do not blow up every comment or rumor; kind words fix small fights.',
  Career: 'A helpful contact or supportive boss may back you. Keep your own judgment instead of following office whispers.',
  Wealth: 'Be content with steady, enough income, and do not spend or trade based on rumors.',
  action: 'Ignore one piece of gossip completely this week.'
},
58: {
  tone: 'mixed',
  bottomLine: 'Stay on the path you know. Honest advice is worth more than something shiny elsewhere.',
  meaning: 'Choose real substance over appearance. Listen to honest advice even when it is uncomfortable, resist flattery, and keep working at what has already proven solid. Grow by improving what you know.',
  Love: 'Judge a partner by loyalty, kindness, and honesty, not status or money.',
  Career: 'The familiar path is favored. Use good advice and do not switch just because somewhere else looks impressive.',
  Wealth: 'Be careful, follow sound rules, and do not drop a tested plan for a more glamorous promise.',
  action: 'Instead of starting something new, improve one thing you already do.'
},
59: {
  tone: 'careful',
  bottomLine: 'Hiding will not make the problem go away. Face your part and fix it.',
  meaning: 'Climbing a tower to hide, you find thorns all around it. Running from consequences does not remove them. Own the part that is yours, correct it, reduce your risks, and act honestly.',
  Love: 'Not a good time to force a match. After a breakup, reflect on yourself instead of chasing again.',
  Career: 'A hard job search or business needs correction and restraint. If losses continue, stepping back may hurt less.',
  Wealth: 'There is a warning of losses. Avoid new risks, limit damage in a bad sale, and do not count on luck for recovery.',
  action: 'Face one thing you have been avoiding, and take one small step to fix it.'
},
60: {
  tone: 'careful',
  bottomLine: 'Your current method is adding fuel to the fire. Stop, calm down, and try the opposite.',
  meaning: 'Carrying firewood to put out a fire only makes it worse. What you are doing may be feeding the problem. Break the loop, settle your heart, and ask if a completely different approach would work better.',
  Love: 'Do not chase a relationship just to escape loneliness or pressure someone unwilling. More pressure may deepen the hurt.',
  Career: 'A calm mind and a new method are key. Do not answer poor results with more of the same.',
  Wealth: 'Strong desire for profit can cloud judgment. Pause instead of adding to a losing idea.',
  action: 'Stop doing the one thing that keeps making it worse, even for a few days.'
},
61: {
  tone: 'good',
  bottomLine: 'Joy and good company. Be open and warm, and good things follow.',
  meaning: 'This lot is full of singing, laughter, and celebration. Good results come from optimism and good conduct. Meet people openly and kindly, and even a small role adds to the whole.',
  Love: 'Be warm, stay in touch, and make relaxed invitations. An existing bond may be ready for commitment if your lives truly fit.',
  Career: 'Present yourself well and treat customers and coworkers with respect. Good service is part of the result.',
  Wealth: 'A friendly attitude helps business and negotiation, but optimism does not replace checking the details.',
  action: 'Invite someone to share a simple, happy moment with you this week.'
},
62: {
  tone: 'mixed',
  bottomLine: 'Danger may appear, but it will not become a disaster. A helper will guide you through.',
  meaning: 'When trouble shows up, stay steady instead of acting rashly. A mentor, helper, or spiritual practice can help you find a safer way and a fresh start.',
  Love: 'Wait out the current obstacle, and stay open to a trustworthy introduction or someone who can help both sides.',
  Career: 'Keep your position while looking for a capable guide or referral. A hard business may need time and outside help.',
  Wealth: 'If money is stuck or business is strained, get qualified help before acting. Help improves choices but is not a guarantee.',
  action: 'Stay calm today, and reach out to one person who could guide you.'
},
63: {
  tone: 'mixed',
  bottomLine: 'Stop searching the sea for an old lost needle. Save your energy for the road ahead.',
  meaning: 'Something small that you lost long ago is still taking up your time and heart. Even if you found it, it would cost more than it is worth. Let it go where you can, and put your energy into the bigger path.',
  Love: 'Do not let one small problem hide the whole relationship. After a breakup, ask if getting back together is worth the emotional cost.',
  Career: 'Keep on your main path despite small setbacks. Fighting for a minor title may cost more than it returns.',
  Wealth: 'Do not chase an old loss just because it still bothers you. Compare the effort and risk with the real gain available.',
  action: 'Name one old loss you keep chasing, and decide to let it go.'
},
64: {
  tone: 'careful',
  bottomLine: 'A hidden net may be around you. Check carefully before you commit to anything.',
  meaning: 'Like a fish swimming freely while nets close in, a good situation can hide a trap. Prevention is everything: look closely at commitments early, because getting out later is very hard.',
  Love: 'Avoid a relationship that traps you. If you have escaped a painful one, do not go back without clear proof of change.',
  Career: 'Check jobs and deals for hidden conditions before saying yes. A prestigious move can still become a cage.',
  Wealth: 'Avoid investments or property that could lock up your money. Know how you would get out before you get in.',
  action: 'Before signing or agreeing to anything, ask: how do I get out if this goes wrong?'
},
65: {
  tone: 'careful',
  bottomLine: 'Quick relief now may hide a new wound. Do not fix one problem by creating another.',
  meaning: 'What feels like happiness now may not be real or lasting. Cutting your own flesh to patch a hole only makes another wound. Stop patching, know when to stop, and wait for a better time.',
  Love: 'A new partner or old flame may seem to cure loneliness but keep the real problem. Look past the first relief.',
  Career: 'An exciting job or promotion may have hidden costs. Count the full price before leaving a safe position.',
  Wealth: 'An apparent gain may hide a loss. Step back, check property carefully, and do not move money just to cover another gap.',
  action: 'Before fixing a problem, ask: will this solution create a new one?'
},
66: {
  tone: 'careful',
  bottomLine: 'Many difficulties at once. Stay still, protect what matters most, and let this pass.',
  meaning: 'Several hard conditions have arrived together, leaving little room to move. Do not take on more risk. Keep calm, stay within your limits, protect the essentials, and let this tough period pass. This too will end.',
  Love: 'Conditions are poor for a new or existing relationship. If a breakup is already happening, it may be time to let go.',
  Career: 'Both your readiness and the market need to improve. Do not force a job, promotion, or move right now.',
  Wealth: 'Do not expect profit now. Avoid new investments or property, and keep a struggling business in safe mode.',
  action: 'Make a short list of what truly matters, and protect only that for now.'
},
67: {
  tone: 'good',
  bottomLine: 'A fair and honest heart brings lasting stability. You are on solid ground.',
  meaning: 'Like a perfectly balanced scale, your honesty and fairness are your strength. Success comes from steady, quiet work and going deep in one thing, not from rushing around or fancy words.',
  Love: 'Steady devotion and natural fit matter more than show. A long-standing bond may be ready to deepen.',
  Career: 'Work practically, go deep in one area, and let honest service build recognition over time.',
  Wealth: 'Think long-term only with what you understand. Steady, focused business can bring gradual returns.',
  action: 'Choose one area to go deeper in, instead of spreading yourself thin.'
}
};
