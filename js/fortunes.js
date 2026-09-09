/**
 * Guanyin Oracle source collection.
 *
 * Independent English translations and concise summaries based on the
 * Wujia Longcheng Temple 100-lot reference:
 * https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=list
 *
 * This release includes Lots 1–67. Every entry links to its exact source page.
 */
'use strict';

const FORTUNES_DB = [
{
  id: 1,
  title: "Lot 1",
  poem: "Heaven opens and earth unfolds, forming a fortunate bond;\nThe day and hour are auspicious, and all things are complete.\nTo draw this lot is no small matter;\nThe loyal and upright are summoned by the sovereign.",
  meaning: "The image is Pangu first opening heaven and earth. The page treats all matters as auspicious.",
  explanation: "The sign comes swiftly. If the year has not yet reached its season, Guanyin's brush gives advance notice.",
  interpretation: "Conditions are pictured as unusually well aligned for a new beginning. Ability joined with loyalty and integrity may attract recognition, support, and a leading role.",
  advice: {
    Love: "The page favors an approaching or mutually felt connection; clear, sincere initiative may help a relationship move toward commitment.",
    Career: "This is presented as a timely period to apply, build, or seek advancement, provided your ability and conduct support the opportunity.",
    Wealth: "Investment, trade, and property dealings are portrayed favorably, but confirm the terms rather than treating the omen as a guarantee."
  },
  reflection: "What opportunity is ready for an honest first step?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250099082"
},
{
  id: 2,
  title: "Lot 2",
  poem: "The whale, not yet transformed, remains in the river;\nIt is not yet permitted to rise from the blue waves.\nOne day its form will grow magnificent;\nThen one leap will carry it through Yu's Gate.",
  meaning: "The image is a whale not yet transformed. Advance or retreat should wait for the right time.",
  explanation: "Endure what can be endured and be patient. Wait until the time arrives; achievement still remains possible.",
  interpretation: "The matter is not mature now, but its potential is described as large once the necessary growth and timing arrive. Waiting here means strengthening the conditions that are still incomplete.",
  advice: {
    Love: "Do not press an uninterested person or rush marriage or reconciliation; allow time for feelings and conditions to mature.",
    Career: "A role, promotion, exam, or venture may be premature, so build skill, experience, and operating strength before trying again.",
    Wealth: "The page advises waiting through a weak market and improving the underlying business or asset before seeking a return."
  },
  reflection: "Which missing condition can you strengthen while you wait?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250098849"
},
{
  id: 3,
  title: "Lot 3",
  poem: "Through wind and rain you go and return,\nToiling without rest like a swallow.\nIt carries mud and builds its nest,\nBut in the end the nest falls back to mud.",
  meaning: "The image is pushing through wind and rain. Matters consume thought and effort.",
  explanation: "A thousand plans are tried from dawn to dusk, yet no one expects the matter to end without result.",
  interpretation: "The swallow's mud nest depicts work that eventually returns to its starting point. Repeated effort in the same form is unlikely to produce a lasting gain.",
  advice: {
    Love: "Step away from one-sided pursuit or repeated attempts to restore a bond that is not responding, and make room for a quieter life or a new connection.",
    Career: "If searching or building has produced no result, improve the core skill or method instead of merely adding more effort.",
    Wealth: "The page anticipates little net gain and specifically warns against borrowing, since debt and interest may consume any return."
  },
  reflection: "What repeated effort is only bringing you back to the same point?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250097857"
},
{
  id: 4,
  title: "Lot 4",
  poem: "The flower-patterned mirror, broken, becomes whole again;\nA woman seeks a husband again, and a man remarries.\nFrom this time the household is renewed,\nWith added blessing, rank, children, and descendants.",
  meaning: "The image is a broken mirror made whole. Completion is auspicious.",
  explanation: "Wash sand into gold and ride dragon and tiger. Though it costs effort, there is recompense within.",
  interpretation: "What was lost, separated, or unprofitable is shown as capable of recovery. The page repeatedly links the better result to a second attempt after an earlier break or failure.",
  advice: {
    Love: "Reconciliation or remarriage may be possible; use empathy and steadier conduct so a restored bond does not repeat the first rupture.",
    Career: "A setback need not be final, and a rebuilt effort may fare better; continue your duties and relationships while preparing the next attempt.",
    Wealth: "The source describes loss before gain and suggests that delaying a property trade may be more favorable than forcing it now."
  },
  reflection: "What could be rebuilt more wisely after a first setback?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250096654"
},
{
  id: 5,
  title: "Lot 5",
  poem: "A hoe breaks earth in search of a spring;\nDiligent effort seeks to find it first.\nWithout intending it, you meet a true companion;\nTogether you join hands and rise to the blue sky.",
  meaning: "The image is digging for a spring: matters are difficult first and easier later.",
  explanation: "What the heart hopes for may now be sought. In every plan, work from the ground beneath you.",
  interpretation: "Practical effort is necessary, yet anxious or forceful pursuit can work against the desired result. An unexpected kindred person may become an important partner in love or work.",
  advice: {
    Love: "Do not force the timing; a chance meeting may be more fruitful, while an existing bond should be developed patiently and practically.",
    Career: "Work steadily without demanding quick profit, and value a compatible partner whose aims and conduct fit your own.",
    Wealth: "Keep a level head in investments, business, or a sale; pressure tactics and fixation on an immediate result may be counterproductive."
  },
  reflection: "Where would steady effort help more than urgent pursuit?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250095348"
},
{
  id: 6,
  title: "Lot 6",
  poem: "To cast oneself below the cliff to feed birds and rabbits,\nOnly a true great person could do this.\nSuch self-surrender is hard to find again;\nNowhere under heaven is there another such person.",
  meaning: "The image is giving oneself to feed the birds and rabbits below the cliff. The page regards willing self-sacrifice as an auspicious sign.",
  explanation: "Live simply and remain uncorrupted. Wait for a more favorable time, and place authority with care.",
  interpretation: "The lot praises a rare willingness to give for others. It also says that difficult times reveal exceptional ability and show who is a true friend.",
  advice: {
    Love: "Offer practical care, and judge long-term commitment after the relationship has met real difficulty rather than only easy times.",
    Career: "A depressed or unsettled period may reveal openings, but the source says that success depends on ability strong enough to meet the crisis.",
    Wealth: "The page favors independent judgment when markets are distressed rather than following a buying crowd; volatility still requires caution."
  },
  reflection: "What can you genuinely contribute when circumstances become difficult?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250094113"
},
{
  id: 7,
  title: "Lot 7",
  poem: "Rushing and toiling through danger after danger,\nDragging through water and mud, then crossing mountains.\nStill considering another place for a different use,\nAcross a thousand towns and ten thousand miles, unable to return.",
  meaning: "The image is being mired in mud and water. The traditional note nevertheless says upright conduct is highly auspicious.",
  explanation: "Advance may bring something, but retreat is difficult. Keep to what is established and do not reach too high.",
  interpretation: "The page depicts a heavy, prolonged journey in which movement is costly and return is hard. It counsels modest aims and careful thought before taking on another route.",
  advice: {
    Love: "Do not force a tiring connection or rush into a replacement after separation; let the present situation settle.",
    Career: "Repeated changes may not create stability, so establish sound work and credibility from the beginning before pursuing another move.",
    Wealth: "The source cautions against extending a weak position simply in hope; if a planned gain appears, consider taking it rather than assuming a long hold must improve."
  },
  reflection: "Which burden is making every next mile harder?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250093292"
},
{
  id: 8,
  title: "Lot 8",
  poem: "Ancient pines and cypresses were tended through cold years;\nRain, snow, wind, and frost could not destroy them.\nOne day they will be put to great use,\nBecoming beams of achievement and honor.",
  meaning: "The image is a flourishing grove of pines and cypresses. Upright conduct is highly auspicious.",
  explanation: "Even level ground meets wind and frost. Old affinities have their course; fields and silkworms ripen, and the household prospers.",
  interpretation: "The old trees represent a goal that requires years of cultivation and repeated tests. Endurance is expected before ability becomes fit for larger use.",
  advice: {
    Love: "A relationship in difficulty may require a long period of patience and repair before its direction becomes clear.",
    Career: "Treat the work as a long apprenticeship; repeated tests, practice, and sound conduct are the path described toward distinction.",
    Wealth: "The page presents investment, business, and property as long-horizon matters, with no quick result promised."
  },
  reflection: "What are you willing to cultivate through more than one season?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250092956"
},
{
  id: 9,
  title: "Lot 9",
  poem: "You have labored to ask what is in my heart;\nThis thought is best spoken to you plainly.\nThe spiritual terrace is bright as a mirror,\nJust like the clear moon at the center of the sky.",
  meaning: "The image is the bright moon overhead. Uprightness is considered highly auspicious.",
  explanation: "Keep the heart upright; reason is orderly and the law is broad. Heaven has no selfish intent, so do not take favorable conditions for granted.",
  interpretation: "The page directs the question back toward honest self-examination. A clear answer begins with seeing your own motives, conditions, ability, and responsibility accurately.",
  advice: {
    Love: "Assess your readiness and compatibility honestly; if a rupture involved your own fault, acknowledge it and apologize before seeking repair.",
    Career: "Build real expertise and manage by sound principles, since recognition, promotion, or competitive success is tied here to capability.",
    Wealth: "Choose assets with sound fundamentals and follow legitimate market rules instead of relying on shortcuts."
  },
  reflection: "What becomes clear when you examine your own part without excuse?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250091188"
},
{
  id: 10,
  title: "Lot 10",
  poem: "A priceless treasure is stored inside the cabinet,\nYet you search only in distant places.\nIt is like carrying a lamp to look for fire;\nBetter to put things away and spare your heart the labor.",
  meaning: "The image is carrying a lamp while searching for fire. Matters await the right opportunity for completion.",
  explanation: "When opportunity is met, what cannot be accomplished? Spring's boundless promise seems present before your eyes.",
  interpretation: "The sought-after treasure is described as already at home or within yourself. Notice and use what is near before exhausting yourself in an outward search.",
  advice: {
    Love: "Look among familiar people and everyday surroundings, and give a present relationship a fair chance before searching farther away.",
    Career: "Develop the strengths of your current work and local setting rather than assuming success must be found elsewhere.",
    Wealth: "If you already have enough, the page advises against unnecessary speculation; buy property for real use rather than merely to chase profit."
  },
  reflection: "What useful resource is already close at hand?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250090418"
},
{
  id: 11,
  title: "Lot 11",
  poem: "You seek a good affair and the joy is extraordinary;\nFriends and kin are busily helping for a time.\nIn the end the good affair is accomplished,\nAs a benefactor leads you to a place of benefactors.",
  meaning: "The image is receiving blessing through misfortune. Plans and undertakings are considered favorable.",
  explanation: "An obstruction appears, yet the matter ends safely. In practical affairs, a benefactor offers support.",
  interpretation: "An accident, difficulty, or change may unexpectedly create an advantage. The page emphasizes introductions, recommendations, and timely help from other people.",
  advice: {
    Love: "A connection may come through an incident or an introduction, and friends or family may also help a pursuit or reconciliation.",
    Career: "A referral can improve a job search, while changing conditions and experienced supporters may help a venture or advancement.",
    Wealth: "Helpful guidance may improve an investment, business, or property deal, but verify both the adviser and the transaction yourself."
  },
  reflection: "Who can offer informed help with the obstacle in front of you?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250089158"
},
{
  id: 12,
  title: "Lot 12",
  poem: "When adversity reaches its extreme, prosperity is due;\nFrom now you emerge from darkness and dust.\nIf good news comes in Tiger or Rabbit time,\nFirm resolve will bring affairs into harmony.",
  meaning: "The image is misfortune departing and blessing arriving. Matters are difficult first and favorable later.",
  explanation: "Hemp is worked into thread. Though there may have been tears, see the matter clearly; blessing can arise through adversity.",
  interpretation: "A long standstill is pictured as beginning to move, especially in the Tiger or Rabbit period or the first two lunar months. Resolution still calls for a clear intention and continued effort.",
  advice: {
    Love: "The source favors commitment after a bond has survived conflict and recovered, rather than before it has been tested.",
    Career: "A job or venture may pass through a dark or difficult opening phase before prospects improve; early spring is named as a useful period for renewed effort.",
    Wealth: "Past results may have been weak, but the page points to a turn in the first two lunar months; act only when current facts also support the plan."
  },
  reflection: "What firm intention will help you use an improving period well?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250088638"
},
{
  id: 13,
  title: "Lot 13",
  poem: "From childhood, born into a wealthy and honored house,\nAll things before the eyes are rich and splendid.\nThe ruler bestows a goldfish pouch of rank;\nFame across the four seas is cause for pride.",
  meaning: "The image is passage through the Dragon Gate. Change is considered highly auspicious.",
  explanation: "A prisoner meets pardon, the sick meet a good physician, the Dragon Gate opens, and a name reaches the imperial capital.",
  interpretation: "A course that has generally gone well may meet a bottleneck and then pass it with capable help. The page says integrity and honorable conduct are necessary if growing recognition is to endure.",
  advice: {
    Love: "The outlook is favorable, but familiarity should not become careless behavior; preserve respect and proper boundaries when repairing or deepening the bond.",
    Career: "Work may be arranged or an obstacle overcome, allowing a sound enterprise or record of achievement to become more widely known.",
    Wealth: "The source depicts trapped holdings, unsold stock, or a stalled property deal becoming movable again; treat that as an opening to evaluate, not assured profit."
  },
  reflection: "How can you meet recognition without relaxing your standards?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250087324"
},
{
  id: 14,
  title: "Lot 14",
  poem: "Like an immortal crane leaving its cage,\nFreed from restraint, it passes everywhere.\nNorth, south, east, and west hold no obstruction;\nYou may rise directly into the highest sky.",
  meaning: "The image is an immortal crane leaving its cage. Matters are difficult first and favorable later.",
  explanation: "Follow the heart without anxiety; the road is open. Move freely and at ease, like an immortal.",
  interpretation: "The cage represents a period of hardship or constraint that is now opening. Once released, previously hidden ability can be used more fully and visibly.",
  advice: {
    Love: "Pursue a harmonious new or existing connection; if a former bond mainly felt like confinement, the page favors moving toward a new possibility.",
    Career: "After a difficult period, your abilities may find room to operate, making this a constructive time to present them fully.",
    Wealth: "A constrained investment, business, or property matter is portrayed as improving, but judge the opportunity by present evidence before expanding."
  },
  reflection: "What becomes possible when an old constraint is removed?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250086597"
},
{
  id: 15,
  title: "Lot 15",
  poem: "Another's taunting words are hardest to swallow;\nSuddenly danger and trouble reach the door.\nThe egg is broken, the nest empty, with nowhere to lodge;\nYou must deeply steady and preserve your heart.",
  meaning: "The image is a broken egg and an empty nest. Keep to what is established and wait for the right time.",
  explanation: "If resentment is incurred, when can it be redressed? Good counsel is not believed, and in the end the mind is weary.",
  interpretation: "The page warns that arguments, insults, and refusal to hear advice can turn a small issue into serious loss. Restraint and a steady mind are safer than answering provocation.",
  advice: {
    Love: "Use kind speech, goodwill, and considerate conduct; do not let an argument become the cause of a larger rupture.",
    Career: "Competition or conflict may injure everyone involved, so withdraw from a destructive contest and wait rather than escalating it.",
    Wealth: "Do not enter on bad news, build excess inventory in a poor market, or force a property transaction while conditions remain weak."
  },
  reflection: "Which provocation is best answered with restraint?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250085448"
},
{
  id: 16,
  title: "Lot 16",
  poem: "A furrowed brow and anxious thoughts clear in an instant;\nThrough clouds close at hand, the sun appears.\nLike a piece of jade lying in mud,\nA skilled artisan lifts it from the dust.",
  meaning: "The image is jade in mud. Meeting a discerning or helpful person is auspicious.",
  explanation: "In gain there is no loss, and within loss there is benefit. The petty meet adversity; the principled meet smooth fortune.",
  interpretation: "Confusion or a bottleneck can clear when an expert identifies the valuable ability or crucial fact hidden from view. Make your real strengths visible while acting honorably.",
  advice: {
    Love: "A matchmaker or respectful approach may reveal a good match; a misunderstanding may ease when you recognize what is sound in the other person.",
    Career: "Show your strongest skill clearly and seek a discerning mentor or specialist who can help remove the immediate obstacle.",
    Wealth: "Use legitimate methods, sound credit, and honest dealing; the page warns that speculation and concealment are the losing side."
  },
  reflection: "What valuable quality needs the right person to recognize it?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250084030"
},
{
  id: 17,
  title: "Lot 17",
  poem: "Do not listen to idle talk of right and wrong;\nMorning and evening, it is better to recite the Buddha's name.\nIf lies are taken for truth,\nHow can a painted cake satisfy hunger?",
  meaning: "The image is a painted cake used to satisfy hunger. In all matters, appearance outweighs substance.",
  explanation: "With an unsettled heart, even reading scripture is in vain. Like a painted cake, the thing cannot be eaten.",
  interpretation: "Gossip, promises, and apparent gains may lack anything real behind them. The page frames repeated disappointment as a call for repentance, ethical discipline, spiritual practice, and good deeds rather than further pursuit of appearances.",
  advice: {
    Love: "Do not chase a bond that exists mainly in words or seek reunion after the same promise has repeatedly failed to become real.",
    Career: "An offer, result, promotion, or projected profit may evaporate, so require evidence and strengthen your own conduct and preparation.",
    Wealth: "The page advises against investing now and insists on honest property dealing; visible paper gains are not the same as money actually received."
  },
  reflection: "What looks promising but has not yet shown real substance?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250083059"
},
{
  id: 18,
  title: "Lot 18",
  poem: "The golden crow sinks west while the moon rabbit rises east;\nDay and night have cycled from antiquity to now.\nBuddhist and Daoist practitioners find nothing unfavorable;\nScholar, farmer, artisan, and merchant each finds satisfaction.",
  meaning: "The image is the bright moon rising in the east. Matters are shown as proceeding according to one's wish.",
  explanation: "The heart is free of trouble, and work bears fruit. Like an arrow on the bow, once released it strikes its mark.",
  interpretation: "The page reads the rising moon as a turn toward yin qualities: receptive, inward, thoughtful, and service-oriented. It traditionally associates the favorable turn with women, supporting roles, inner cultivation, and work that satisfies people rather than material display alone.",
  advice: {
    Love: "The source favors a woman or the more receptive partner taking initiative; new, developing, and reconciled relationships are all portrayed positively.",
    Career: "Service, intellectual work, tact, learning, and inner quality are emphasized more than rank or outward authority.",
    Wealth: "For investment, cultivate steadiness; for business or property, improve service and the other party's sense of trust rather than focusing only on material gain."
  },
  reflection: "Which quiet or inward quality would improve the result?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250082245"
},
{
  id: 19,
  title: "Lot 19",
  poem: "When a boat is launched at the head of swift rapids,\nWhat can be done as wild winds drive up waves?\nWait until the waves are still and the wind has stopped;\nThen the laden boat may return steadily and pass without danger.",
  meaning: "The image is a boat traveling through swift rapids. Keep to what is established and await the right time.",
  explanation: "A boat on rushing water is in danger and must wait. If asking about a plan, seek it when its time arrives.",
  interpretation: "The present conditions are pictured as hazardous and poorly suited to immediate action. Beyond waiting for the disturbance to pass, the page repeatedly asks whether the person, position, method, and purpose truly fit one another.",
  advice: {
    Love: "Do not pursue merely because attraction exists; reconsider compatibility and postpone marriage or reconciliation if the underlying fit is poor.",
    Career: "Choose work or a venture that suits your real skills and interests, and match people to roles where they can complement one another.",
    Wealth: "Both timing and suitability matter: select an asset or property for a clear purpose you understand, and do not enter blindly during turbulence."
  },
  reflection: "What must become calmer or better matched before you proceed?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250081237"
},
{
  id: 20,
  title: "Lot 20",
  poem: "After long spring rains, delight in the first clear sky;\nThe jade rabbit and golden crow gradually shine.\nOld affairs are settled and new affairs succeed;\nSoon one leaps into the immortal isles.",
  meaning: "The image is the first clearing after long rain. Matters are shown as proceeding according to one's wish.",
  explanation: "Divine and Buddhist protection is present: trouble brings no lasting danger, the road is safe, and the journey ends in an honored return.",
  interpretation: "A murky or difficult period begins to clear. Uncertain relationships, markets, causes, and outcomes may become easier to distinguish, allowing an old matter to close and a new one to move.",
  advice: {
    Love: "Long loneliness or misunderstanding may lift, but the page separately warns against pursuing an ill-matched interest or reviving a breakup rooted in major incompatibility.",
    Career: "Persistent job or business efforts are pictured as becoming clearer and more productive after a long period of uncertainty.",
    Wealth: "A long-stalled investment, business, or property matter may improve or find a buyer; confirm that the apparent clearing is supported by current facts."
  },
  reflection: "What can you now see clearly that the earlier uncertainty concealed?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250080554"
},
{
  id: 21,
  title: "Lot 21",
  poem: "The joining of yin and yang ultimately follows heaven;\nThat women marry and men wed is hardly accidental.\nWatch the Dragon and Snake begin to move;\nA dream of bears brings the joy of reunion.",
  meaning: "The image is yin and yang joining in their proper way. Harmony and union are considered highly auspicious.",
  explanation: "Plans accord with the heart; marriage and pregnancy favor a son. Resources increase, with added benefit to fields and silkworms.",
  interpretation: "Two previously separate or ill-matched sides are pictured as moving into balance. Dragon and Snake years, months, or days, especially the third and fourth lunar months, are named as the traditional turning period.",
  advice: {
    Love: "A meeting, commitment, or reconciliation is favored when both sides act with kindness; the third and fourth lunar months receive special emphasis.",
    Career: "Work better suited to you may appear, while strained people or operations may begin to cooperate more smoothly.",
    Wealth: "A shift in profit and loss may come around the Dragon or Snake period, but the page leaves the buy-or-sell decision to your own judgment."
  },
  reflection: "Which two sides need to be brought into genuine balance?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250079502"
},
{
  id: 22,
  title: "Lot 22",
  poem: "Fields on every side are parched and dry;\nAfter the long drought, three days of rain suddenly come.\nFlowers, fruit, grasses, and shoots are all refreshed;\nOnly then is one rain known to be worth a thousand pieces of gold.",
  meaning: "The image is sweet rain arriving during drought. Rescue appears amid difficulty.",
  explanation: "Fields and silkworms yield twice their harvest; plans are suitable, illness meets good medicine, and the traveler soon returns.",
  interpretation: "A matter troubled for a long time finally receives relief. The page treats this as a rare opportunity that should be used and cared for so the matter can move fully out of hardship.",
  advice: {
    Love: "Value a hard-won connection, temper idealized expectations, and give it loyal, long-term care rather than looking elsewhere at the first disappointment.",
    Career: "A job, venture, contest, or advancement may finally offer an opening after difficulty; prepare to use it fully and persist through the remaining work.",
    Wealth: "A recovery or transaction opportunity may appear after poor results, but evaluate it carefully rather than assuming every welcome change is equally valuable."
  },
  reflection: "How will you make good use of a rare moment of relief?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250078832"
},
{
  id: 23,
  title: "Lot 23",
  poem: "You wish to climb for immortal cassia in the moon palace;\nWhy fear that heaven's gate will not open?\nNews concerning your plans is favorable;\nAn eminent person brings it over the ridge.",
  meaning: "The image is reaching for immortal cassia. A helpful or eminent person is present in every matter.",
  explanation: "Merchants gain benefit and travelers face no danger. Illness settles, litigation proceeds, and action may be taken.",
  interpretation: "Once the key skill, qualification, or crucial point is obtained, the apparent gate need not remain closed. Real ability and well-directed help are the basis of the favorable outlook.",
  advice: {
    Love: "Good personal conditions may attract an introduction; use respect and warmth, and address the actual cause if seeking reconciliation.",
    Career: "Develop and demonstrate a useful specialty, since the page treats competence and timely help as the keys to work and achievement.",
    Wealth: "Investment calls for skill, while business and property dealings depend on trust, reputation, and useful relationships rather than luck alone."
  },
  reflection: "What key ability or fact would open the present gate?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250077166"
},
{
  id: 24,
  title: "Lot 24",
  poem: "Neither good neighbor nor settled household is formed;\nA fool's water-bubble hope is like a fallen flower.\nIf you ask for a ruler's favor, little help can be gained;\nIn the end affairs are tangled like hemp.",
  meaning: "The image is a foolish person losing virtue. Keep to what is established and wait for the right time.",
  explanation: "Do not gossip about right and wrong, and handle the matter carefully. An upright heart and sound reason help avert danger.",
  interpretation: "A plan without basic conditions, sound conduct, or attention to principle becomes confused and hard to complete. The source says to repair the foundation before expecting support or results.",
  advice: {
    Love: "Improve your own conduct and the quality of interaction first; if repeated conflict caused separation, correct that pattern before seeking either repair or a new bond.",
    Career: "Seek legitimate work and operate a venture by ethical and practical rules, since shortcuts or broken obligations are shown as the cause of trouble.",
    Wealth: "Follow established investment and business principles, and approach property decisions rationally; ignoring the rules is portrayed as leading to loss."
  },
  reflection: "Which basic condition must be repaired before the larger plan can work?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250076253"
},
{
  id: 25,
  title: "Lot 25",
  poem: "After passing through danger upon danger,\nFrom now on you need not meet the same harm again.\nA broad heart naturally finds a broad-hearted plan;\nAn eminent person appears and protects the sacred work.",
  meaning: "The image is a broad heart finding its own plan. Helpful people bring matters to completion.",
  explanation: "There is reason on your side in litigation, illness finds recovery, plans for coming and going may be sought, and a dry well meets a spring.",
  interpretation: "The matter has survived repeated crises and can now become steadier. A generous, unclouded mind may find a way through; if your own knowledge is insufficient, the page advises consulting someone wiser or more experienced.",
  advice: {
    Love: "After repeated disappointment or separation, a new introduction or careful reconciliation may fare better when approached with tolerance and informed counsel.",
    Career: "A venture may stabilize after early crises, and advice from a mentor, consultant, or experienced predecessor can be useful.",
    Wealth: "Past losses or stalled deals need not dictate the next result, but rely on verified, experienced guidance rather than simply expecting a reversal."
  },
  reflection: "What wiser counsel would help you leave a repeated crisis behind?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250075316"
},
{
  id: 26,
  title: "Lot 26",
  poem: "Reports handed down from above and below are all empty;\nFrom the horizon a letter arrives.\nThe letter promises me rank and achievement,\nYet even if I wait a lifetime, there is none.",
  meaning: "The image is empty reputation. Matters contain more appearance than substance, so it is better to keep to what is established.",
  explanation: "Day after day the heart is vexed, and leisure cannot be found. If rank and fame are sought, they are raised only in emptiness.",
  interpretation: "Good news or apparent success may create hope and then vanish before becoming real. The page advises careful handling and stronger ethical discipline so that what has been gained is not lost.",
  advice: {
    Love: "A message, attraction, promise, or proposed reunion may prove insubstantial; wait for consistent action before relying on it.",
    Career: "An impressive offer, forecast, result, or promotion may fail to materialize, so confirm every commitment and keep a stable alternative.",
    Wealth: "Paper gains, promising sales, and projected property profit do not count until realized; do not commit money on announcement alone."
  },
  reflection: "What evidence would turn a promising message into something real?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250074652"
},
{
  id: 27,
  title: "Lot 27",
  poem: "Each plan and each use brings another turn;\nLooking back and doubting ahead, you dare not act.\nWhen the time arrives, a benefactor naturally helps;\nBehind silver walls and iron ramparts, you may live securely.",
  meaning: "The image is a wall standing on a firm foundation. In all matters, a benefactor provides direction.",
  explanation: "The old becomes new, and a winter flower meets spring. Former obstruction gives way to satisfaction.",
  interpretation: "Repeated attempts have produced hesitation, but well-timed advice can resolve the uncertainty. The destination pictured by the page is not excitement but a sounder, more stable position.",
  advice: {
    Love: "Introductions or mediation may help a bond survive repeated separations and become more settled; do not mistake each fluctuation for the final result.",
    Career: "Persist through reversals, and use an experienced person's guidance when choosing a job, making a change, or seeking advancement.",
    Wealth: "Markets and negotiations may reverse more than once before profit or a property closing becomes possible; manage each turn rather than assuming the outcome."
  },
  reflection: "Whose grounded advice could resolve your present hesitation?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250073998"
},
{
  id: 28,
  title: "Lot 28",
  poem: "The eastern moon rises in perfect beauty;\nIn a moment, clouds cover half its face.\nDo not say that fullness must remain diminished;\nThe missing part is meant to become whole again.",
  meaning: "The image is the moon obscured by clouds. Waiting for the right time is auspicious.",
  explanation: "Drifting clouds cover the moon. Do not remain in doubt; when the clouds withdraw, the matter becomes clear.",
  interpretation: "A sound matter has met a sudden obstruction, but the page treats it as temporary and potentially solvable. Put attention on identifying and removing the obstacle rather than assigning blame.",
  advice: {
    Love: "Use practical ingenuity to meet people or resolve a manageable difficulty in an existing bond instead of treating the obstruction as permanent.",
    Career: "A job, venture, competition, or promotion may meet a specific barrier; solve it where you are before deciding that a complete change is necessary.",
    Wealth: "Analyze the complication in an investment or transaction and address it directly; a delayed property deal may still close after reversals."
  },
  reflection: "What specific obstacle is casting the present shadow?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250072508"
},
{
  id: 29,
  title: "Lot 29",
  poem: "When the treasured sword's radiance leaves its case,\nIt should no longer gather dust within.\nA benefactor lifts it with a personal hand;\nIt can guard the bearer and win the respect of many.",
  meaning: "The image is a treasured sword leaving its case. A benefactor points the way in all matters.",
  explanation: "The treasured sword leaves its case and shines for ten thousand miles. With a benefactor's guidance, untimely trouble is kept away.",
  interpretation: "The sword represents a high-quality person, ability, or thing that has remained unseen. Once brought into view and recognized by the right person, its value can finally be put to use.",
  advice: {
    Love: "This is presented as a favorable time to be seen, accept an introduction, pursue a suitable person, or move an established bond toward marriage.",
    Career: "Bring formerly hidden ability into the open; recognition and support may help work or competitive performance move beyond an old standstill.",
    Wealth: "Weak past results or a stalled sale may improve as attention returns, but use the opening carefully rather than treating recognition as certain profit."
  },
  reflection: "What worthy ability is ready to be brought out of its case?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250071150"
},
{
  id: 30,
  title: "Lot 30",
  poem: "I urge you not to seek this from another;\nLike a crane in flight, a hidden arrow may be shot.\nIf you go gathering firewood, a snake lies in the grass;\nIts venomous bite would indeed be cause for worry.",
  meaning: "The image is remaining within one's proper place. Keep to what is established and wait for the right time.",
  explanation: "Close the mouth and guard the tongue; do not meddle in another's affair. If the conscience carries a fault, it will eventually harm you.",
  interpretation: "The page warns that the proposed path may conceal deceit, attack, or a trap. Moving forward is portrayed as dangerous, while restraint, discretion, and withdrawal offer greater safety.",
  advice: {
    Love: "Be alert to deception or insincere affection; this is not presented as a good time to pursue, deepen, or revive the bond.",
    Career: "A job or venture may contain exploitation, hidden competition, or broken promises, so investigate carefully and postpone if the risk cannot be resolved.",
    Wealth: "Investment and trade are shown as exposed to traps and unreliable commitments; delay major transactions rather than forcing a deal."
  },
  reflection: "What hidden risk needs to be investigated before you move?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250070600"
},
{
  id: 31,
  title: "Lot 31",
  poem: "Sit quietly at ease with nothing pressing;\nEat when hungry and lie down when tired.\nPut down body and mind, and do not hurry;\nThen calamity and trouble need not be invited.",
  meaning: "The image is remaining peacefully with what is established. Waiting for the right time is auspicious.",
  explanation: "Keep to the old course and be at peace, as carefree as an immortal. Wait directly for the time to come; then matters may become whole.",
  interpretation: "The safest course is to do the necessary work, leave gossip and needless interference alone, and avoid creating problems through restless action. The time or level of preparation is not yet sufficient for a major push.",
  advice: {
    Love: "Do not hurry the arrival, marriage, or reconciliation; let an interested person approach and give an existing bond time to mature.",
    Career: "A job direction, venture, competition, or promotion is not yet ready, so maintain the present work and wait without forcing expansion.",
    Wealth: "The market and property demand are described as quiet; remain conservative and wait rather than chasing immediate returns."
  },
  reflection: "What trouble can be avoided by allowing the timing to mature?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250069852"
},
{
  id: 32,
  title: "Lot 32",
  poem: "The road ahead is dim, and the matter invites doubt;\nWho knows that jade lies hidden in the stone?\nOne day a skilled artisan cuts it open clearly;\nOnly then is the rare green jade within revealed.",
  meaning: "The image is cutting stone and discovering jade. Applied effort brings success.",
  explanation: "The treasure is inside the stone, awaiting the artisan's helping hand. Once it is made clear, action may be taken freely.",
  interpretation: "The prospect looks uncertain, yet the page says it contains considerable undeveloped value. A discerning expert can help identify the potential and the work needed to reveal it.",
  advice: {
    Love: "An introduction or a more perceptive look may reveal a suitable person; if the bond is strained, express warmth and remember the other person's good.",
    Career: "Show your hidden skill and seek someone capable of recognizing it, whether for hiring, development, competition, or advancement.",
    Wealth: "Value may remain unrecognized for a time; in business and property, maintain quality and reputation while waiting for a discerning buyer."
  },
  reflection: "What hidden potential needs skilled examination and patient work?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250068561"
},
{
  id: 33,
  title: "Lot 33",
  poem: "A stone conceals beautiful jade within its heart;\nOnce shown the place, why seek it elsewhere?\nWait until an eminent person comes to analyze it;\nSet the heart at ease, and then ease it further.",
  meaning: "The image is seeking hidden jade within. Matters may wait for the right time.",
  explanation: "Gold and jade are stored within; there is no need to search outside. When a benefactor gives direction, there is no need for weary effort.",
  interpretation: "What you need may already exist within yourself, your surroundings, or an ordinary-looking situation. If you cannot identify it, informed guidance can make the hidden resource clear.",
  advice: {
    Love: "Look first to an old acquaintance or the partner already beside you, and appreciate strengths rather than fixing only on faults.",
    Career: "Use your own specialty and local opportunities; recognition from a supervisor or insight into existing staff may reveal the better path.",
    Wealth: "Begin with your actual means and avoid chasing profit you do not need; for trade, emphasize real quality and use a knowledgeable intermediary."
  },
  reflection: "What are you searching for outside that may already be within reach?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250067674"
},
{
  id: 34,
  title: "Lot 34",
  poem: "In public or private, act with courtesy, justice, and respect;\nLet speech be loyal and good, and listening perceptive.\nThe heart below understands all things thoroughly,\nBright as the sun standing at the center of the sky.",
  meaning: "The image is the red sun shining directly overhead. Matters are shown as proceeding according to one's wish.",
  explanation: "There is no trouble in the heart, and the autumn water is clear. Do not remain in doubt; the matter comes together naturally.",
  interpretation: "Courtesy, respect, integrity, and willingness to hear sound advice are the foundation of the favorable result. When conduct leaves the conscience clear, confusion and avoidable conflict diminish.",
  advice: {
    Love: "Build a good bond through dignified conduct, genuine care, respect, and attention to the other person's point of view.",
    Career: "Presentation, speech, service, reputation, and good human relations are central to finding work or growing an enterprise.",
    Wealth: "The page warns that greed can frustrate investment; honest quality, trustworthy dealing, and modest profit expectations support trade or a property sale."
  },
  reflection: "Which act of courtesy or integrity would make the next step clearer?",
  sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250066958"
},
  {
    id: 35,
    title: "The Thirty-Fifth Lot",
    poem: "Restore your dress and cap, renewing the old household way.\nIt is said no merit was won, yet merit is there.\nSweep away the thorns obstructing the road.\nWhen three people confer, the matter comes into accord.",
    meaning: "This is the image of restoring a household's former order; change is highly favorable.",
    explanation: "Do not worry or doubt. A fitting time will come. For the road ahead, a change is suitable.",
    interpretation: "Regroup and recover your strength. Reform what is weak, remove obstacles, and consult the people concerned; shared purpose gives the undertaking its best prospects.",
    advice: {
      Love: "Renew your habits and approach instead of repeating the same pattern; a more considerate version of yourself can help a relationship begin, deepen, or repair.",
      Career: "Clarify your ambition, present yourself carefully, strengthen your skills, and relaunch with a revised way of working.",
      Wealth: "Review the asset or business, reconsider the strategy, clear practical obstacles, and improve what buyers or customers actually see before committing more money.",
    },
    reflection: "What outdated habit or obstacle should be cleared before you ask others to join you?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250065240",
  },

  {
    id: 36,
    title: "The Thirty-Sixth Lot",
    poem: "Past illness and litigation need not trouble you.\nIn a favorable place, resources may still be sought.\nLike a tethered ape now freed from its chain,\nYou may return to the immortal cave and roam at will.",
    meaning: "This is the image of an ape released from its chain; matters are difficult at first and easier afterward.",
    explanation: "Release the burden from your heart and be at ease. When the time arrives, the road opens into a thoroughfare.",
    interpretation: "This lot portrays confinement as temporary. Continue using your abilities where you are, quiet unnecessary worry, and be ready to move when the restrictions genuinely loosen.",
    advice: {
      Love: "If single, value the freedom you have now. After a difficult breakup, the page counsels against forcing a reunion; use the interval to recover and live fully.",
      Career: "A lull need not be filled with frantic applications or expansion. Rest, observe conditions, and return with energy when a workable opening appears.",
      Wealth: "Do not react to tied-up funds or a quiet market out of panic. Reassess patiently and wait for clearer conditions rather than forcing a sale or expansion.",
    },
    reflection: "What could you stop carrying while you wait for the real constraint to lift?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250064316",
  },

  {
    id: 37,
    title: "The Thirty-Seventh Lot",
    poem: "If you wish for safety and a more settled time,\nA candle in the wind is not well placed.\nGather it in and sit within the deep hall,\nSo its light may be spared from shaking and find stillness.",
    meaning: "This is the image of a candle shaken by wind; caution makes matters more favorable.",
    explanation: "Settle yourself in a quiet place. Wait for the right order and time. Provoking trouble brings no blessing; keeping to the established course is suitable.",
    interpretation: "The present position is easily disturbed, like a flame exposed to wind. Reduce exposure, conserve strength, and favor patient defense over a fresh push.",
    advice: {
      Love: "If attention or pursuit is making a strained relationship colder, pause and learn the other person's needs. Do not rush commitment or reconciliation while the bond remains unstable.",
      Career: "This is a time to strengthen capability and preserve a workable position, not to force a launch, promotion, or major move.",
      Wealth: "Stay conservative in a volatile market, avoid a fragile business expansion, and wait before a property transaction whose conditions are not yet sound.",
    },
    reflection: "Where would less exposure and more patience protect what still has life?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250063244",
  },

  {
    id: 38,
    title: "The Thirty-Eighth Lot",
    poem: "When the mirror-bright moon rises from its case,\nCloud and mist cut off its light in dark confusion.\nWait calmly for the floating clouds to scatter.\nA fitting change may let the hope be pursued again.",
    meaning: "This is the image of clouds and mist covering the moon; keep to what is established and wait for the time.",
    explanation: "The moon is obscured by cloud and mist. What is unfinished should not yet be forced; keep steady.",
    interpretation: "An obstacle has interrupted something that seemed ready to begin. Wait for the obstruction to pass, or revise the way you proceed, before resuming the undertaking.",
    advice: {
      Love: "Do not press for an answer while conditions are clouded. Let the obstacle become clearer, then reconsider your own approach.",
      Career: "Delay a major push while the situation is unclear; use the pause to identify the blockage and prepare a more workable method.",
      Wealth: "This is not presented as a good moment to invest. Wait for adverse conditions to pass, revise the strategy or business model, and improve a property's presentation before seeking a deal.",
    },
    reflection: "Is this a problem that needs time to clear, or a method that needs to change?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250062062",
  },

  {
    id: 39,
    title: "The Thirty-Ninth Lot",
    poem: "News from the edge of heaven is hard to open.\nDo not let anxious thoughts drive a forced pursuit.\nIf you grind a stone hoping to make a mirror,\nYour spirit is spent, and when will the labor end?",
    meaning: "This is the image of remaining calm and constant; hoped-for results are insubstantial.",
    explanation: "A thousand schemes would waste effort. It is better to keep to the old course and not pursue this painfully.",
    interpretation: "Grinding stone will not make a mirror: the present method cannot produce the desired result. Stop mistaking more effort for progress and reconsider the aim itself.",
    advice: {
      Love: "The desired bond is not available through force. Step back from one-sided pursuit and do not spend more of yourself trying to claim what is not freely returned.",
      Career: "If repeated effort brings no traction, pause the same route, correct what is within your conduct, and reconsider the goal or method.",
      Wealth: "Do not chase returns while the approach keeps losing money. Protect principal, avoid an unresponsive sale or business plan, and wait for facts that justify a new course.",
    },
    reflection: "What are you trying to create with a method that cannot produce it?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250061746",
  },

  {
    id: 40,
    title: "The Fortieth Lot",
    poem: "The red sun sinks in the west as the moon rises east.\nYin grows while yang recedes: two changing forms.\nIf a woman receives this sign,\nBlessing and livelihood increase to her satisfaction.",
    meaning: "This is the image of yin growing while yang recedes; matters are difficult first and easier later.",
    explanation: "The yin side favors women and not men. In seeking an outcome, difficulty comes before benefit.",
    interpretation: "In the page's traditional symbolism, influence shifts toward yin. Receptivity, inner steadiness, gentleness, and the ability to let another side lead are more useful now than force.",
    advice: {
      Love: "Let the more receptive partner take the initiative after the early strain. In the source's gendered framing, the woman is encouraged to speak plainly about courtship, marriage, or repair.",
      Career: "Develop and show your inner strengths, treat people warmly, and avoid trying to dominate the process; substance and composure matter most.",
      Wealth: "Self-command, honest dealing, and a welcoming manner support sounder investment and business decisions; do not rely on momentum alone.",
    },
    reflection: "Where might receptivity and inner steadiness work better than trying to stay in control?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250060207",
  },

  {
    id: 41,
    title: "The Forty-First Lot",
    poem: "Remember that not everything attractive is good.\nIt can be like taking a thief for your own child.\nDo not covet the little sweetness before your eyes,\nFor later it may return as suffering.",
    meaning: "This is the image of mistaking a thief for one's child; the matter is unsuitable, so wait.",
    explanation: "Trust only what is sound, and do not make the wrong choice. Though discernment takes effort, do not neglect it.",
    interpretation: "Do not mistake immediate pleasure for lasting benefit or confuse harmful conduct with good. The page warns both against bribing others and being bought by them.",
    advice: {
      Love: "Look beyond attraction and the wish to settle quickly. Examine the likely daily reality, and do not reopen a separation merely to escape being alone.",
      Career: "Choose a role or venture for its long-term conditions, not its immediate reward or status; greater rank may also carry burdens you do not want.",
      Wealth: "An upbeat market can cloud judgment. Reject speculation, inducements, and short-term profit that ignore the full cost.",
    },
    reflection: "What looks sweet now but may ask an unacceptable price later?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250059865",
  },

  {
    id: 42,
    title: "The Forty-Second Lot",
    poem: "You ask of grace whose nourishment has no boundary.\nPrayer and rites are answered without partiality.\nAll beings with feeling may receive its use,\nSharing benefit and joy in a complete measure.",
    meaning: "This is the image of heaven extending its grace; undertakings may be brought to completion.",
    explanation: "Heaven's sovereign grants favor; do not forget it from beginning to end. Keep a regular practice of reverence and prayer.",
    interpretation: "The source joins sincere prayer with selfless conduct. Seek what benefits more than yourself, and let fairness and service guide what you do.",
    advice: {
      Love: "Approach a new, deepening, or repairing bond with sincere concern for the other person's good, not only your own desired result.",
      Career: "Bring a spirit of contribution to a job search or enterprise, combining sincere effort with the spiritual practice meaningful to you.",
      Wealth: "Private gain alone is not the measure here. Favor fair dealing, modest margins, and transactions that serve both sides rather than treating prayer as a promise of profit.",
    },
    reflection: "How could the outcome you seek also become a genuine benefit to others?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250058531",
  },

  {
    id: 43,
    title: "The Forty-Third Lot",
    poem: "Heaven and earth communicate, and all things become new.\nEach takes its form and color, rejoicing in itself.\nThe myriad appearances all grow vivid.\nEvery affair finds harmony and contentment.",
    meaning: "This is the image of heaven and earth meeting in harmony; helpful people may be encountered.",
    explanation: "Heaven gives life to all things. Plans may proceed, supported by good conduct as favorable influence grows.",
    interpretation: "Two sides that seemed separate can now work together. Advance one practical step at a time, contribute your own labor, and receive cooperation without becoming complacent.",
    advice: {
      Love: "Do not let modest circumstances make you dismiss compatibility. Build the bond gradually, and meet strain with consideration for both sides.",
      Career: "Pursue work step by step, relying on effort and integrity; progress is stronger when favorable conditions do not weaken your standards.",
      Wealth: "Favor patient, long-term holdings and steady customer relationships. Even a modest property may find a buyer when the fit is right.",
    },
    reflection: "Which two sides could create something new by working in genuine accord?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250057575",
  },

  {
    id: 44,
    title: "The Forty-Fourth Lot",
    poem: "Meeting an equal at the chessboard, keep your design concealed.\nBlack and white remain undecided on the board.\nIf you would know who finally wins,\nThe one who moves first must secure the advantage.",
    meaning: "This is the image of meeting an equal opponent at chess; matters begin favorably.",
    explanation: "Seeking a good result is like playing chess. To decide the outcome, move first without careless hesitation.",
    interpretation: "With a well-matched opponent, success depends on observation, adaptation, and avoiding needless errors. Study the decisive factor before committing your move.",
    advice: {
      Love: "Learn the other person's temperament, background, and compatibility before disclosing everything or planning marriage; separation may reveal a real mismatch.",
      Career: "Present genuine strengths, repair weaknesses, and do not miss a sound opening. Progress requires both readiness and tact.",
      Wealth: "A transaction may turn on one key condition. Identify it through research and risk review rather than treating a quick move as a guaranteed win.",
    },
    reflection: "What single fact would most improve your next move?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250056035",
  },

  {
    id: 45,
    title: "The Forty-Fifth Lot",
    poem: "Gentleness naturally overcomes hardness.\nA household that accumulates goodness finds great blessing.\nIf someone receives this sign,\nIt is like meeting precious nectar when parched.",
    meaning: "This is the image of blessings accumulated at the household gate; waiting for the right time is favorable.",
    explanation: "Heaven and earth respond in an uncommon way. Divine protection accompanies the virtue and blessing that have been cultivated.",
    interpretation: "Meet force with gentleness rather than more force. Kind conduct, humility, and patience are the practical means emphasized by this lot.",
    advice: {
      Love: "Use tenderness, sincere praise, and humility. Where repair is appropriate, patient warmth is more useful than wounded pride.",
      Career: "Speak tactfully, present yourself with care, and handle obstacles without aggression; quiet skill may do more than a hard push.",
      Wealth: "Connect prosperity with generosity and respectful dealings. Courteous service and patient negotiation matter more than a claim that virtue guarantees profit.",
    },
    reflection: "Where could a gentler response accomplish what pressure has not?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250055214",
  },

  {
    id: 46,
    title: "The Forty-Sixth Lot",
    poem: "I urge you to endure and keep your former livelihood.\nHold body and mind steady; do not listen to crooked counsel.\nWait until someone lends a light touch of help,\nAnd the withered trees throughout the garden will flower again.",
    meaning: "This is the image of a withered tree flowering; the matter has its own way toward completion.",
    explanation: "Keep to the old course and remain still. The affair can resolve; rash movement brings trouble, while stillness avoids fault.",
    interpretation: "Preserve what is sound until a genuine catalyst or helpful introduction appears. This is a period for steadiness, not for forcing life back into a dormant situation.",
    advice: {
      Love: "Let introductions and timing do their work. Do not pursue what is clearly not yours; cherish an existing bond and use warmth, not pressure, if it is strained.",
      Career: "Continue steadily through a lean period and be receptive to a trustworthy referral. A later opening may matter more than restless movement now.",
      Wealth: "Do not abandon a sound plan solely because it is in a difficult phase. Reassess calmly, and recognize that a sale may require the right intermediary or introduction.",
    },
    reflection: "What is worth preserving quietly until the right help arrives?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250054274",
  },

  {
    id: 47,
    title: "The Forty-Seventh Lot",
    poem: "Flowers added to brocade make the colors brighter.\nWhen fortune comes, livelihood and movement bring double joy.\nDo not wonder that recognition has arrived late.\nOne success may carry your name across the four seas.",
    meaning: "This is the image of blessing and livelihood arriving together; matters are highly favorable.",
    explanation: "A child has both parents. Observe the time and await celebration; a lifelong aim may be fulfilled, though destiny sets its season.",
    interpretation: "The page's central image is joy added to an already strong foundation. It especially emphasizes delayed achievement: reputation and patient work may mature later rather than quickly.",
    advice: {
      Love: "Do not treat delay as failure. When a sound opportunity to meet, commit, or repair appears, act without needless hesitation and keep minor quarrels in proportion.",
      Career: "A long search or years of steady work may build toward recognition. Continue cultivating a good name instead of measuring the path only by early results.",
      Wealth: "Use a long horizon for investing, business, or property, while remembering that patience alone cannot guarantee a high price or return.",
    },
    reflection: "What long-developed strength may finally be ready to bear visible fruit?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250053025",
  },

  {
    id: 48,
    title: "The Forty-Eighth Lot",
    poem: "When autumn comes, the kun-bird changes into a great peng.\nIt soars in fulfillment, rising without restraint.\nIt drives straight beyond ten thousand miles of clouded sky.\nNo ordinary bird can equal it.",
    meaning: "This is the image of the kun transforming into the peng; a great rise follows change.",
    explanation: "The kun becomes the peng, beyond the other birds. Pluck the fragrant cassia, and blessing and livelihood increase.",
    interpretation: "What appears unremarkable now may contain the capacity for much greater development. Keep building patiently and let scale follow preparation rather than empty display.",
    advice: {
      Love: "Allow a bond to grow beyond its present form without demanding a grand outcome before trust and readiness have developed.",
      Career: "High ideals may prolong a job search, but disciplined preparation can support later expansion. Build toward the larger role instead of merely imagining it.",
      Wealth: "Take a long view, maintain sound conduct, and avoid abandoning a considered plan halfway through. In property, realistic pricing matters to whether a deal can close.",
    },
    reflection: "What preparation would make a larger future role sustainable?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250052862",
  },

  {
    id: 49,
    title: "The Forty-Ninth Lot",
    poem: "Plans for all affairs are like water frozen into ice.\nWhy suffer through them out of stinginess or greed?\nIt is better to sit quietly with a settled heart,\nAnd wait without doubt for the needed change.",
    meaning: "This is the image of water freezing into ice; uncertainty calls for keeping to the established course.",
    explanation: "Water freezes into ice, and ice melts back to water. Plans may cycle in this way before conditions truly change.",
    interpretation: "The situation has become more rigid and difficult. Do not let greed force movement; wait for conditions and the truth of the matter to become clear before acting again.",
    advice: {
      Love: "Courtship or commitment is delayed in a cold period. Wait for warmer conditions; where repair is mutual, patient warmth may help thaw distance.",
      Career: "A job search or enterprise may remain stalled until the wider climate improves. Stay prepared without forcing an opening that is not there.",
      Wealth: "Do not chase profit in a frozen market. Preserve flexibility, pause an unresponsive transaction, and resist using generosity as if it guaranteed financial luck.",
    },
    reflection: "What decision can wait until the situation is fluid enough to respond?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250051709",
  },

  {
    id: 50,
    title: "The Fiftieth Lot",
    poem: "Across the five lakes and four seas, ships may travel.\nRaise the sail high and hold the rudder firm.\nFavored by a following wind, go where it carries you.\nA boat full of treasure brings contentment.",
    meaning: "This is the image of sailing with a following wind; affairs proceed smoothly and favorably.",
    explanation: "Be at ease and unhurried; excessive force is unnecessary. Resources and livelihood are abundant, giving cause for satisfaction.",
    interpretation: "Favorable conditions support broad movement, but the rudder still matters. Expand without abandoning principle, because success can weaken discipline if it is taken for granted.",
    advice: {
      Love: "Let connection develop naturally across distance or circumstance, while respecting the other person's wishes and avoiding willful behavior.",
      Career: "Search broadly, work responsibly, and retain your principles as opportunity grows; helpful people may strengthen a promotion or venture.",
      Wealth: "Diversify risk and use clear entry and exit rules. Broad marketing may help business or property, but a favorable wind is not permission to ignore limits.",
    },
    reflection: "Which principle must remain your rudder while conditions are favorable?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250050622",
  },

  {
    id: 51,
    title: "The Fifty-First Lot",
    poem: "At summer's beginning the days grow long.\nEveryone is troubled by the uncommon heat.\nHeaven understands the people's distress\nAnd sends a fragrant breeze from time to time to bring coolness.",
    meaning: "This is the image of a cooling breeze under the summer sky; plans are steady.",
    explanation: "Do not hesitate over advance or retreat. The fitting time arrives by itself, so the hopes you pursue need not cause anxiety.",
    interpretation: "Relief may arrive through help that is not yet visible. Receive a sincere benefactor's assistance gratefully, while continuing the effort that makes such help useful.",
    advice: {
      Love: "A meeting, introduction, or mediation may ease loneliness or conflict. Recognize the opening, but let mutual choice determine what follows.",
      Career: "Combine steady work with openness to referral or support. Spiritual practice may offer composure, but it does not replace preparation.",
      Wealth: "Outcomes remain partly beyond control. Use ethical customer service and sound transaction terms rather than assuming favorable help guarantees a gain.",
    },
    reflection: "What quiet form of help might you be ready to notice and receive?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250049775",
  },

  {
    id: 52,
    title: "The Fifty-Second Lot",
    poem: "Catching the moon in water wastes your labor.\nAll that labor is spent, yet nothing is gained.\nDo not trust idle talk and reckless words.\nMisapplied effort makes the aim hard to attain.",
    meaning: "This is the image of catching the moon in water; what is attempted does not come to completion.",
    explanation: "Do not believe false reports. They waste effort and trouble the mind. Conditions at home are unfavorable, so do not act rashly.",
    interpretation: "The desired thing can be seen but not grasped by the present means. Respond to outside persuasion with reason; qualified help may reveal a way to turn appearance into something practical.",
    advice: {
      Love: "The page treats this pursuit as likely to end empty and advises accepting a breakup rather than spending more of your youth on it.",
      Career: "If the same search or enterprise stays inaccessible, stop following rumors, improve your conduct and relationships, and seek a more concrete route.",
      Wealth: "Do not mistake an attractive image for an attainable return. Protect savings, avoid an unworkable property deal, and build real customer trust instead of chasing talk.",
    },
    reflection: "Are you pursuing the real thing, or only its reflection?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250048158",
  },

  {
    id: 53,
    title: "The Fifty-Third Lot",
    poem: "A time of frustration turns into fulfillment.\nDragon's chant and tiger's roar answer one another.\nA road through the blue clouds will finally be reached.\nThe recognition promised may yet be expected.",
    meaning: "This is the image of dragon and tiger sounding together; affairs move agreeably and there is hope.",
    explanation: "When told to go, go; when directed onward, proceed. A passage opens of itself, and the end may bring benefit.",
    interpretation: "A setback can become the force that develops courage and ability. When a genuine opening appears, face it directly rather than letting the earlier difficulty decide the future.",
    advice: {
      Love: "An early disappointment need not define the bond. Meet the difficulty honestly and see whether both people can use it to build a stronger commitment.",
      Career: "Treat an obstacle as information and training. If the underlying path remains sound, continue with courage and a workable method.",
      Wealth: "Adversity can create opportunity, but low prices do not guarantee a later gain. Pair courage with due diligence, risk limits, and the capacity to wait.",
    },
    reflection: "How could this setback become useful training rather than a final verdict?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250047967",
  },

  {
    id: 54,
    title: "The Fifty-Fourth Lot",
    poem: "A treasure gained in a dream is gone on waking.\nWhat is told of the witch's mountain is only illusion.\nIf you ask of marriage, illness, or litigation,\nSeeking another path is the suitable course.",
    meaning: "This is the image of gaining treasure in a dream; appearances are many, but substance is scarce.",
    explanation: "Like the moon in water, the image changes in length but cannot be possessed. Circumstances have their limits; argument cannot make the unreal solid.",
    interpretation: "The desired result seems present but cannot be obtained on this route. Do not sacrifice yourself to a beautiful appearance; look for another practical way forward.",
    advice: {
      Love: "Turn away from a pursuit that exists mainly in hope and leave room for a relationship with real mutual feeling.",
      Career: "Change the direction of an unproductive job search. For this venture, employed work may be more suitable than carrying the full burden of ownership.",
      Wealth: "Promises of sudden wealth may evaporate. Seek another financial route, and do not buy property on the assumption that it must create profit.",
    },
    reflection: "What attractive possibility disappears when you test it against practical reality?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250046602",
  },

  {
    id: 55,
    title: "The Fifty-Fifth Lot",
    poem: "A worthy father passes his way to son, and son to grandson.\nClothing and livelihood are abundant, and the household is rich.\nIn honored halls, people live happily.\nEat when hungry and sleep when tired.",
    meaning: "This is the image of joining bamboo lengths to guide spring water; plans and hopes are favorable.",
    explanation: "Ancestral virtue shelters later generations with blessing and livelihood, bringing honor and abundance to the household.",
    interpretation: "A sound family tradition, warm household, and inherited good conduct form the support in this lot. Continue those virtues rather than treating comfort as an entitlement.",
    advice: {
      Love: "Make your interest known without display, respect the family's counsel when planning marriage, and use tolerance rather than pride during small disputes.",
      Career: "Draw on sound traditions, trusted relationships, and the knowledge already available in your household or community.",
      Wealth: "Use established knowledge and networks responsibly, and share genuine abundance through useful causes; inheritance or connections are support, not a guarantee of success.",
    },
    reflection: "Which inherited value deserves to be carried forward rather than merely enjoyed?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250045410",
  },

  {
    id: 56,
    title: "The Fifty-Sixth Lot",
    poem: "The ravine is narrow, its stones rough, and the water loud.\nPoling the boat takes strength and risks injury.\nThe route is pointed toward the broad river ahead,\nWhere wind is still and tide is level, and effort may ease.",
    meaning: "This is the image of a boat in a narrow stream; matters are difficult first and easier afterward.",
    explanation: "At the rocky shallows, poling the boat is hard. Once directed to the river ahead, wind and sail may move smoothly.",
    interpretation: "Do not remain confined to a channel that demands dangerous effort. Consult the people involved, take guidance from experience, and refuse enticing shortcuts until the turbulence has settled.",
    advice: {
      Love: "Ask an experienced, trustworthy person for perspective. Investigate a new match carefully, and discuss commitment with family rather than deciding alone.",
      Career: "Seek advice from people who know the route, especially when an offer looks unusually tempting. A sound plan matters more than forcing through the immediate obstacle.",
      Wealth: "Research the market, consult qualified experience, and do not let apparent bargains or quick gains pull you into a costly channel.",
    },
    reflection: "Who understands the wider channel well enough to help you out of this narrow one?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250044383",
  },

  {
    id: 57,
    title: "The Fifty-Seventh Lot",
    poem: "Let idle rights and wrongs pass your ears like wind.\nGood clothing and livelihood stand beneath the midday sun.\nYou should remember the experience of former years.\nYour understanding then will agree with mine.",
    meaning: "This is the image of a child seeing its mother; affairs are favorable when helpful people appear.",
    explanation: "Advancement and plans are highly favorable. Proceed with wholehearted sincerity, and flourishing may follow.",
    interpretation: "Do not dance to every rumor. Value the stable life already present, remember what experience has taught, and accept dependable support from family, friends, or a senior figure.",
    advice: {
      Love: "Warmth and familiarity can support a bond, even when there is too much talk. Do not magnify every remark or third-party rumor; use kind words to repair needless quarrels.",
      Career: "A helpful contact or protective supervisor may offer support. Keep your own judgment steady instead of following workplace whispers.",
      Wealth: "Be content with adequate provision, accept modest stable income, and do not trade or spend on hearsay.",
    },
    reflection: "Which old lesson can keep today's rumors from moving you off course?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250043026",
  },

  {
    id: 58,
    title: "The Fifty-Eighth Lot",
    poem: "Remember loyal counsel and well-meant words.\nDo not seek some different craft elsewhere.\nI urge you to keep to your former livelihood.\nRemove the rest, and there is little cause for worry.",
    meaning: "This is the image of keeping one's established livelihood; do not act rashly.",
    explanation: "Stay where you can stay and follow the former road. Learn something new by reviewing what is known; why seek another path?",
    interpretation: "Favor practical substance over vanity. Hear honest counsel even when it is uncomfortable, resist flattering temptation, and keep working faithfully with what has proved sound.",
    advice: {
      Love: "Judge a partner by loyalty, kindness, and integrity rather than status or wealth. Use the same standard when deciding whether to commit or reconcile.",
      Career: "The nearer or established path is favored. Apply experienced advice and do not compete for change merely because another place looks more impressive.",
      Wealth: "Proceed cautiously, obey sound transaction rules, and keep business within its proper bounds. Do not leave a tested plan for a more glamorous promise.",
    },
    reflection: "Which honest piece of advice have you resisted because a more flattering path looked brighter?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250042898",
  },

  {
    id: 59,
    title: "The Fifty-Ninth Lot",
    poem: "You climb straight to a high tower to hide yourself,\nYet thorns and brush encircle it on every side.\nWho knew that creation had arranged it so?\nFulfillment turns instead into disappointment.",
    meaning: "This is the image of holding to the ordinary course and awaiting the time; keep to what is established.",
    explanation: "Like someone muddled by drink, you should keep to the old way. Wait until the time arrives, and avoid adding fault or harm.",
    interpretation: "Avoidance does not remove consequences. Face the part that is yours, correct harmful conduct, reduce exposure, and use ethical action rather than concealment to shape what comes next.",
    advice: {
      Love: "This is not a favorable time to force a match. A pursuit may lead to conflict, and after separation the page favors self-examination over renewed pursuit.",
      Career: "A difficult search or enterprise calls for correction and restraint. If losses continue, retreating may reduce harm better than maintaining appearances.",
      Wealth: "The source warns of investment and business losses. Avoid fresh exposure, limit damage in a poor sale, and do not treat moral practice as a guarantee of recovery.",
    },
    reflection: "What consequence needs to be faced directly instead of hidden from?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250041098",
  },

  {
    id: 60,
    title: "The Sixtieth Lot",
    poem: "Carrying firewood to quench a fire makes more smoke.\nThe flames consume three thousand worlds and then a thousand more.\nIf you ask of plans, ventures, coming, or going,\nIt is better to gather yourself and stop worrying the matter.",
    meaning: "This is the image of carrying firewood to put out a fire; keeping to the old course is more favorable.",
    explanation: "However many plans there are, one moment can end them. Settle your heart and keep steady; only then may worry subside.",
    interpretation: "The present method is feeding the problem and may spread harm beyond its starting point. Stop the loop, calm down, and examine whether the opposite approach would be more useful.",
    advice: {
      Love: "Do not seek a relationship merely to escape loneliness, press an unwilling person, force progress, or pursue blame after betrayal. More pressure may deepen the hurt.",
      Career: "A calm mind and a changed method are essential. Do not answer poor results with more blind effort or pursue promotion through the same ineffective behavior.",
      Wealth: "Strong desire for profit may worsen judgment. Pause rather than average into a failing idea, reconsider the business method, and avoid forcing a property transaction.",
    },
    reflection: "Which attempted remedy is actually feeding the problem?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250040170",
  },

  {
    id: 61,
    title: "The Sixty-First Lot",
    poem: "By day, recite poetry; beneath the moon, sing.\nPlay your part at the gathering and laugh with ease.\nAt the place of meeting, little can remain hidden.\nVoices join in applause and a ringing refrain.",
    meaning: "This is the image of happy people enjoying themselves; affairs are highly favorable.",
    explanation: "A gracious person is in the house, singing poems and songs. Joy fills the place, and simple enjoyment is sufficient.",
    interpretation: "The page associates a good outcome with optimism and good conduct. Meet people openly, offer courtesy and enjoyment, and let even a modest role contribute to the whole.",
    advice: {
      Love: "Greet people warmly, reach out between meetings, and make relaxed invitations. An existing bond may be suitable for commitment when the two lives genuinely fit.",
      Career: "Present yourself neatly and courteously, and build work around respectful service. Treating customers and colleagues well is part of the result.",
      Wealth: "A cheerful welcome supports business and negotiation, but optimism is not a substitute for due diligence. Let generosity remain voluntary, not a bargain for returns.",
    },
    reflection: "How could good manners and genuine enjoyment improve the next encounter?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250039318",
  },

  {
    id: 62,
    title: "The Sixty-Second Lot",
    poem: "From dawn to dusk, rely on the Buddha's support.\nThough danger is met, it need not become disaster.\nIf a benefactor comes to guide you onward,\nThen blessing and livelihood may follow together.",
    meaning: "This is the image of keeping to the old course in safety; affairs improve when a helpful person appears.",
    explanation: "Remain steady. A name may become known in all directions; beginning anew can reveal good within what seemed dangerous.",
    interpretation: "When difficulty appears, hold steady rather than acting rashly. A benefactor, mentor, or spiritual practice may help reveal a safer route into a renewed life.",
    advice: {
      Love: "Wait through the present obstacle and remain open to a trustworthy introduction or mediator before pressing courtship, marriage, or reconciliation.",
      Career: "Preserve your position while seeking a capable guide, referral, or other support. A difficult enterprise may need time and outside help to breathe again.",
      Wealth: "If funds are trapped or business is strained, seek qualified assistance before acting. Help can improve choices, but neither a benefactor nor prayer guarantees recovery.",
    },
    reflection: "What kind of guidance would help you move without turning difficulty into danger?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250038878",
  },

  {
    id: 63,
    title: "The Sixty-Third Lot",
    poem: "A needle was lost from a boat in former days.\nToday you still search for it in the sea.\nEven if the original needle could be found,\nIt would cost great labor and trouble of mind.",
    meaning: "This is the image of searching the sea for a needle; affairs consume thought and labor.",
    explanation: "Blessing is the base of livelihood, and livelihood can seed further blessing. The point is plain: proceed with care and restraint.",
    interpretation: "A small lost thing can demand effort out of all proportion to its value. Let go where you can, keep minor trouble in perspective, and reserve energy for the larger path.",
    advice: {
      Love: "Do not let a small difficulty eclipse the whole bond. After a breakup, weigh whether recovery would justify the emotional cost before trying again.",
      Career: "Continue on the main road despite small setbacks. Competing for a minor title or changing course may cost more attention than it returns.",
      Wealth: "Do not chase an old loss merely because it still troubles you. Compare transaction effort and risk with the modest gain that may actually be available.",
    },
    reflection: "What small recovery is demanding more energy than it is worth?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250037748",
  },

  {
    id: 64,
    title: "The Sixty-Fourth Lot",
    poem: "A golden-scaled fish swims in blue-green waves,\nSecretly surrounded by nets on every side.\nIt can devise no way to turn and escape.\nAt the gate of the springs below, it grieves alone.",
    meaning: "This is the image of a fish caught in a net; vigilance and prevention are appropriate.",
    explanation: "Living amid the dust of the world, misfortune may arrive unexpectedly. Notice early and guard beforehand to avoid disaster.",
    interpretation: "A free and favorable position may be enclosed by an outside trap. Prevention matters most: inspect commitments early, because escape becomes difficult after every side is bound.",
    advice: {
      Love: "Avoid a bond that traps you in unresolved entanglement. If you have already escaped a painful separation, do not return without clear evidence of change.",
      Career: "Examine jobs, promotions, and ventures for hidden constraints before entering. A prestigious move can still become a confining one.",
      Wealth: "The page advises against entering an investment or property purchase that could lock up funds. Keep business conservative and understand exit terms in advance.",
    },
    reflection: "Which commitment needs an exit plan before you enter it?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250036243",
  },

  {
    id: 65,
    title: "The Sixty-Fifth Lot",
    poem: "Present happiness is not yet true happiness.\nIs the danger dangerous, and is the safety secure?\nWhy cut your own flesh only to make a wound?\nIt is better to keep your place and await the returning time.",
    meaning: "This is the image of cutting flesh and making a wound; keep to the old course and wait.",
    explanation: "Know when to stop, and stop; know when to widen the heart, and be at ease. Cutting one's own flesh only brings the same pain.",
    interpretation: "Do not solve one shortage by creating another. What looks like immediate relief may carry hidden harm; stop the patchwork response and wait rather than moving from one wound to the next.",
    advice: {
      Love: "A new partner, closer commitment, or rekindled old bond may seem to cure present loneliness while preserving the underlying trouble. Look past the first relief.",
      Career: "An appealing job, venture, or promotion may demand a price not visible at first. Count the full cost before leaving a safer position.",
      Wealth: "An apparent gain may conceal loss. Step back from the investment or business idea, investigate a property carefully, and avoid moving money merely to cover another gap.",
    },
    reflection: "Are you healing the problem, or moving the wound somewhere else?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250035496",
  },

  {
    id: 66,
    title: "The Sixty-Sixth Lot",
    poem: "On a dangerous road, horse and traveler go far.\nA sheep apart from its flock is cornered by a tiger.\nAt a perilous shoal, a boat meets wind and overturning waves.\nAt spring's end, faded flowers suffer falling frost.",
    meaning: "This is the image of intentions becoming obstructed; wait for the time.",
    explanation: "Be still and settled. Keep within your proper limits and avoid needless worry; do not chase empty hopes, but live at ease.",
    interpretation: "Several weak conditions have arrived together, leaving little room to maneuver. Do not add exposure; keep still, protect essentials, and allow the difficult interval to pass.",
    advice: {
      Love: "Conditions for a new or existing bond are poor, and further pursuit is unlikely to help. If separation is already underway, the page advises letting this attachment go.",
      Career: "Both personal readiness and the wider market need strengthening. Avoid forcing a job, promotion, venture, or move until one of those conditions materially improves.",
      Wealth: "Do not expect profit when both your capacity and the market are weak. Avoid new investment or property purchases and keep a troubled business defensive.",
    },
    reflection: "What essential resource needs protection until the surrounding conditions improve?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250034214",
  },

  {
    id: 67,
    title: "The Sixty-Seventh Lot",
    poem: "A golden balance weighs as evenly as your heart.\nNothing is reduced or increased, made heavy or light.\nBecause your lifelong nature is upright,\nEven without letters, the principles of justice are clear.",
    meaning: "This is the image of an even and upright heart; affairs remain stable and highly favorable.",
    explanation: "Keep the heart balanced and honest, and handle human relations well. Stay within your proper role, and all under heaven is at peace.",
    interpretation: "This lot links accomplishment with constancy, quiet work, fairness, and plain honesty. Depth in one undertaking matters more than restless movement or elaborate speech.",
    advice: {
      Love: "Favor steady devotion and natural compatibility over display. A long-standing bond may be ready to deepen, and repair requires the same constancy from both people.",
      Career: "Work practically, deepen one area of expertise, and let a record of honest service build recognition over time.",
      Wealth: "Use a long horizon only for assets you understand and can prudently hold. Specialization and steady business may support gradual returns, but duration alone offers no guarantee.",
    },
    reflection: "Where would constancy and fair measure serve you better than another change?",
    sourceUrl: "https://www.longcheng.org.tw/?act=jieqianyuandi&cmd=detail&ad_id=202211250033852",
  },
];

if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  const ids = FORTUNES_DB.map(function (fortune) { return fortune.id; });
  const duplicates = ids.filter(function (id, index) { return ids.indexOf(id) !== index; });
  if (duplicates.length) {
    console.warn('[Guanyin Oracle] Duplicate lot IDs:', duplicates);
  }
  console.info('[Guanyin Oracle] Available source-based readings:', FORTUNES_DB.length);
}
