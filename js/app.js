/**
 * Guanyin Oracle — interaction, accessibility and payment shell.
 *
 * The site stays in transparent demo mode unless payment is explicitly enabled
 * and a PayPal client ID, display price and trusted API are all configured on
 * <body>. Paid content must move behind a server-verified entitlement before
 * enabling this shell in production.
 */

'use strict';

const I18N = {
  en: {
    brand: 'Guanyin Oracle',
    navRitual: 'The ritual',
    navAbout: 'About the oracle',
    eyebrow: 'ONE QUIET THOUGHT · ONE CLEARER VIEW',
    heroTitle: 'Hold one question.<br><em>Draw one reflection.</em>',
    heroIntro: 'Set the noise aside and bring one honest question to mind. The oracle does not decide for you; it offers another way to see.',
    progressAsk: 'Ask',
    progressStill: 'Become still',
    progressReceive: 'Receive',
    topicLegend: 'What is on your mind?',
    topicGeneral: 'Overall',
    topicLove: 'Love',
    topicCareer: 'Career',
    topicWealth: 'Wealth',
    questionLabel: 'Write your question',
    questionOptional: 'Optional',
    questionPlaceholder: 'For example: How should I meet the change ahead?',
    privacyNote: 'Your question stays on this device and is never uploaded',
    drawButton: 'DRAW A FORTUNE',
    freePreview: 'Lot number and first insight are free',
    fullPrice: 'Full reading · Free in preview',
    visualCaption: 'Take three quiet breaths, then draw',
    previewKicker: 'YOUR DRAW',
    yourQuestion: 'THE QUESTION IN YOUR HEART',
    unlockButton: 'READ THE FULL INTERPRETATION',
    redrawButton: 'Ask a different question',
    trustPrivateTitle: 'Private by design',
    trustPrivateText: 'Your question stays on this device',
    trustReflectTitle: 'Reflection, not fate',
    trustReflectText: 'Use the reading as a mirror',
    trustCareTitle: 'Gentle guidance',
    trustCareText: 'Never a substitute for professional advice',
    historyKicker: 'SAVED ONLY ON THIS DEVICE',
    historyTitle: 'Recent readings',
    clearHistory: 'Clear history',
    ritualKicker: 'THREE BREATHS BACK TO THE PRESENT',
    ritualTitle: 'How to draw a fortune for this moment',
    ritualIntro: 'A meaningful draw begins by letting the question settle.',
    ritualOneTitle: 'One honest question',
    ritualOneText: 'Narrow your attention to the one thing that matters most right now. Honesty makes your own voice easier to hear.',
    ritualTwoTitle: 'Three quiet breaths',
    ritualTwoText: 'Breathe slowly three times. Do not assume good or bad, and do not keep drawing for the answer you want.',
    ritualThreeTitle: 'Find the next step',
    ritualThreeText: 'Treat the reading as a mirror. Keep the line that moves you, then choose one small action of your own.',
    aboutKicker: 'TRADITIONAL IMAGERY · CONTEMPORARY LANGUAGE',
    aboutTitle: 'The lot offers a perspective. The answer remains yours.',
    aboutText: 'This edition presents 67 independent English translations from the 100-lot collection published by Wujia Longcheng Temple in Kaohsiung. Each reading keeps the source poem and core counsel while using careful contemporary language.',
    factLots: 'source notes distilled',
    factTopics: 'areas of focus',
    factUploads: 'questions uploaded',
    faqOriginQ: 'Where do these readings come from?',
    faqRepeatQ: 'Should I draw repeatedly for the same question?',
    faqRepeatA: 'It is usually more helpful to live with the first reading for a while. If the question and circumstances have not changed, repeated draws may only amplify anxiety.',
    faqPaymentQ: 'Why is the current version free?',
    faqPaymentA: 'Payment approval depends on the merchant location and business category. The preview will not charge anyone until a provider has approved the business and refund and reading-recovery flows are in place.',
    footerDisclaimer: 'For cultural appreciation and personal reflection only. Not medical, legal, financial or other professional advice.',
    paymentKicker: 'FULL READING',
    paymentTitle: 'Take your time with this lot',
    paymentDescription: 'Unlock its imagery, plain-language meaning, guidance for your focus and one reflective question.',
    demoBadge: 'PREVIEW MODE',
    demoMessage: 'Payments are not live yet, so this full reading is available free in the preview.',
    demoUnlock: 'VIEW THE FULL READING FREE',
    paymentLoading: 'Preparing payment…',
    paymentError: 'Payment cannot connect right now. Please try again shortly.',
    retry: 'Try again',
    paymentFootnote: 'By continuing, you acknowledge that this reading is for culture and reflection only.',
    backHome: 'Back',
    fullReading: 'Full reading',
    share: 'Share',
    copyText: 'Copy reading',
    savePrint: 'Print / Save PDF',
    askAgain: 'Bring a new question',
    centeringStatus: 'Breathe slowly and let the question settle…',
    drawingStatus: 'The vessel stirs. One lot is finding its way to you…',
    revealedStatus: 'The lot has fallen. See what this moment reflects.',
    drawError: 'The readings could not load. Please refresh and try again.',
    modernReading: 'Modern interpretation',
    overallReading: 'THE HEART OF THIS LOT',
    imageryTitle: 'Image and context',
    focusTitle: 'For what you asked',
    dimensionsTitle: 'Three areas of life',
    reflectionLabel: 'ONE QUESTION TO KEEP',
    sourceBadge: 'TEMPLE EDITION',
    sourceEdition: 'Wujia Longcheng Temple edition',
    sourceLink: 'View the original Chinese source',
    resultDisclaimer: 'Treat this reading as a prompt for reflection, not a guarantee about the future. For health, legal, investment or major life decisions, seek qualified professional advice.',
    copied: 'Reading copied',
    shareFallback: 'Share text copied',
    paymentCancelled: 'Payment was cancelled. Your lot is still here.',
    paymentProcessing: 'Confirming payment. Please keep this page open…',
    paymentFailed: 'Payment did not complete. Please try again later.',
    historyCleared: 'Reading history cleared from this device',
    close: 'Close',
    pageTitle: 'Guanyin Oracle · A quiet moment of reflection',
    metaDescription: 'Explore 100+ source insights across 67 Guanyin oracle lots independently translated from Wujia Longcheng Temple.',
    imageAlt: 'A cinnabar fortune-stick vessel in a mountain temple courtyard at dusk',
    generalGuidance: 'Read this lot as a view of your situation as a whole. Notice the line that moves you first, then consider the three areas below.',
    reflectionFallback: 'Which part of this lot deserves a slower, more honest look?'
  }
};

const TOPIC_KEYS = ['Love', 'Career', 'Wealth'];
const STORAGE_KEYS = {
  history: 'guanyin-oracle-history-v2'
};

const state = {
  stage: 'idle',
  topic: 'General',
  question: '',
  selectedFortune: null,
  paypalRendered: false,
  paypalLoading: null,
  lastFocused: null,
  toastTimer: null
};

const elements = {};
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function byId(id) {
  return document.getElementById(id);
}

function t(key) {
  return I18N.en[key] || key;
}

function make(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function safeStorageGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (_error) {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_error) {
    // Storage may be blocked in private browsing; the core experience still works.
  }
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (_error) {
    // No-op when storage is unavailable.
  }
}

function getFortuneDatabase() {
  if (typeof FORTUNES_DB === 'undefined' || !Array.isArray(FORTUNES_DB)) return [];
  return FORTUNES_DB.filter(function (fortune) {
    return fortune &&
      Number.isInteger(fortune.id) &&
      fortune.title &&
      fortune.poem &&
      fortune.meaning &&
      fortune.explanation &&
      fortune.interpretation &&
      fortune.reflection &&
      fortune.advice &&
      TOPIC_KEYS.every(function (topic) { return Boolean(fortune.advice[topic]); }) &&
      typeof fortune.sourceUrl === 'string' &&
      fortune.sourceUrl.indexOf('https://www.longcheng.org.tw/') === 0;
  });
}

function getFortuneContent(id) {
  const base = getFortuneDatabase().find(function (fortune) {
    return fortune.id === Number(id);
  });
  if (!base) return null;
  return Object.assign({}, base, { grade: t('sourceBadge') });
}

function topicLabel(topic) {
  const key = topic === 'Love'
    ? 'topicLove'
    : topic === 'Career'
      ? 'topicCareer'
      : topic === 'Wealth'
        ? 'topicWealth'
        : 'topicGeneral';
  return t(key);
}

function lotShortLabel(fortune) {
  if (!fortune) return '';
  return 'Lot ' + String(fortune.id).padStart(2, '0');
}

function setProgress(activeStep) {
  document.querySelectorAll('[data-progress]').forEach(function (item) {
    const step = Number(item.getAttribute('data-progress'));
    item.classList.toggle('is-current', step === activeStep);
    item.classList.toggle('is-complete', step < activeStep);
  });
}

function applyEnglishCopy() {
  document.documentElement.lang = 'en';
  document.title = t('pageTitle');

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', t('metaDescription'));

  document.querySelectorAll('[data-i18n]').forEach(function (node) {
    const key = node.getAttribute('data-i18n');
    if (key === 'heroTitle') {
      node.innerHTML = t(key);
    } else {
      node.textContent = t(key);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (node) {
    node.setAttribute('placeholder', t(node.getAttribute('data-i18n-placeholder')));
  });

  const image = document.querySelector('.temple-image');
  if (image) image.alt = t('imageAlt');
  elements.paymentClose.setAttribute('aria-label', t('close'));
  updatePaymentLabels();

  if (state.selectedFortune && !elements.previewSection.hidden) {
    renderPreview();
  }
  if (state.selectedFortune && !elements.resultOverlay.hidden) {
    renderResult();
  }
  renderHistory();
}

function randomFortune() {
  const database = getFortuneDatabase();
  if (!database.length) return null;

  const history = getHistory();
  const previousId = history.length ? Number(history[0].id) : null;
  const pool = database.length > 1
    ? database.filter(function (fortune) { return fortune.id !== previousId; })
    : database;

  let index;
  if (window.crypto && window.crypto.getRandomValues) {
    const value = new Uint32Array(1);
    window.crypto.getRandomValues(value);
    index = value[0] % pool.length;
  } else {
    index = Math.floor(Math.random() * pool.length);
  }
  return pool[index];
}

function wait(milliseconds) {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, milliseconds);
  });
}

async function startDrawing(event) {
  if (event) event.preventDefault();
  if (state.stage === 'centering' || state.stage === 'drawing') return;

  const fortune = randomFortune();
  if (!fortune) {
    showToast(t('drawError'));
    return;
  }

  const formData = new FormData(elements.questionForm);
  state.topic = formData.get('topic') || 'General';
  state.question = elements.questionInput.value.trim();
  state.selectedFortune = fortune;
  state.stage = 'centering';

  elements.previewSection.hidden = true;
  elements.drawBtn.disabled = true;
  elements.drawBtn.setAttribute('aria-busy', 'true');
  elements.drawBtn.querySelector('.button-label').textContent = t('progressStill');
  elements.visualStage.classList.remove('is-drawing', 'is-revealing');
  elements.visualStage.classList.add('is-centering');
  elements.drawStatus.textContent = t('centeringStatus');
  setProgress(2);

  if (navigator.vibrate) navigator.vibrate(18);
  await wait(reducedMotion.matches ? 80 : 850);

  state.stage = 'drawing';
  elements.visualStage.classList.remove('is-centering');
  elements.visualStage.classList.add('is-drawing');
  elements.drawStatus.textContent = t('drawingStatus');
  await wait(reducedMotion.matches ? 80 : 1050);

  elements.visualStage.classList.remove('is-drawing');
  elements.visualStage.classList.add('is-revealing');
  elements.slipNumber.textContent = String(fortune.id).padStart(2, '0');
  if (navigator.vibrate) navigator.vibrate([20, 45, 24]);
  await wait(reducedMotion.matches ? 80 : 920);

  state.stage = 'preview';
  setProgress(3);
  elements.drawStatus.textContent = t('revealedStatus');
  elements.drawBtn.disabled = false;
  elements.drawBtn.removeAttribute('aria-busy');
  elements.drawBtn.querySelector('.button-label').textContent = t('drawButton');
  renderPreview();
}

function renderPreview() {
  const fortune = getFortuneContent(state.selectedFortune.id);
  if (!fortune) return;

  elements.previewTitle.textContent = lotShortLabel(fortune);
  elements.previewGrade.textContent = t('sourceBadge');
  elements.previewPoem.textContent = fortune.poem;
  elements.previewSummary.textContent = fortune.explanation;
  elements.previewSource.href = fortune.sourceUrl;
  elements.paymentLot.textContent = lotShortLabel(fortune);

  if (state.question) {
    elements.askedQuestion.hidden = false;
    elements.askedQuestionText.textContent = state.question;
  } else {
    elements.askedQuestion.hidden = true;
    elements.askedQuestionText.textContent = '';
  }

  const demoMode = !paymentIsConfigured();
  elements.unlockPrice.textContent = demoMode
    ? 'Free preview'
    : getPaymentDisplayPrice();

  elements.previewSection.hidden = false;
  requestAnimationFrame(function () {
    elements.previewSection.scrollIntoView({
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
      block: 'center'
    });
    elements.previewTitle.focus({ preventScroll: true });
  });
}

function resetOracle(options) {
  const settings = options || {};
  state.stage = 'idle';
  state.selectedFortune = null;
  state.question = '';
  state.topic = 'General';
  elements.questionForm.reset();
  elements.questionInput.value = '';
  elements.questionCount.textContent = '0';
  elements.previewSection.hidden = true;
  elements.drawStatus.textContent = '';
  elements.visualStage.classList.remove('is-centering', 'is-drawing', 'is-revealing');
  elements.drawBtn.disabled = false;
  elements.drawBtn.removeAttribute('aria-busy');
  elements.drawBtn.querySelector('.button-label').textContent = t('drawButton');
  setProgress(1);

  if (settings.scroll !== false) {
    byId('oracle').scrollIntoView({
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
      block: 'start'
    });
  }
  window.setTimeout(function () {
    elements.questionInput.focus({ preventScroll: true });
  }, reducedMotion.matches ? 0 : 350);
}

function getPayPalClientId() {
  const value = document.body.getAttribute('data-paypal-client-id') || '';
  const trimmed = value.trim();
  if (!trimmed || trimmed.indexOf('YOUR_') === 0) return '';
  return trimmed;
}

function getPaymentApi() {
  const value = document.body.getAttribute('data-payment-api') || '';
  return value.trim().replace(/\/$/, '');
}

function getPaymentDisplayPrice() {
  return (document.body.getAttribute('data-payment-display-price') || '').trim();
}

function paymentIsConfigured() {
  return document.body.getAttribute('data-payments-enabled') === 'true' &&
    Boolean(getPayPalClientId() && getPaymentApi() && getPaymentDisplayPrice());
}

function updatePaymentLabels() {
  const live = paymentIsConfigured();
  if (elements.fullPriceNote) {
    elements.fullPriceNote.textContent = live
      ? 'Full reading · ' + getPaymentDisplayPrice()
      : t('fullPrice');
  }
  if (elements.unlockPrice) {
    elements.unlockPrice.textContent = live
      ? getPaymentDisplayPrice()
      : 'Free preview';
  }
  if (elements.paymentPrice) {
    elements.paymentPrice.textContent = live
      ? getPaymentDisplayPrice()
      : 'Free preview';
  }
}

function openPayment() {
  if (!state.selectedFortune) return;
  state.lastFocused = document.activeElement;
  elements.paymentOverlay.hidden = false;
  document.body.classList.add('is-modal-open');
  elements.siteShell.inert = true;
  elements.siteShell.setAttribute('aria-hidden', 'true');
  elements.paymentLot.textContent = lotShortLabel(getFortuneContent(state.selectedFortune.id));

  const clientId = getPayPalClientId();
  const paymentApi = getPaymentApi();
  const live = paymentIsConfigured();
  elements.demoState.hidden = live;
  elements.paypalState.hidden = !live;
  elements.paymentLoading.textContent = t('paymentLoading');
  elements.paymentLoading.hidden = live && state.paypalRendered;
  elements.paymentError.hidden = true;
  elements.paymentPrice.textContent = live
    ? getPaymentDisplayPrice()
    : 'Free preview';

  requestAnimationFrame(function () {
    elements.paymentClose.focus();
  });

  if (live) initPayPal(clientId, paymentApi);
}

function closePayment(restoreFocus) {
  if (elements.paymentOverlay.hidden) return;
  elements.paymentOverlay.hidden = true;
  document.body.classList.remove('is-modal-open');
  elements.siteShell.inert = false;
  elements.siteShell.removeAttribute('aria-hidden');
  if (restoreFocus !== false && state.lastFocused && state.lastFocused.focus) {
    state.lastFocused.focus({ preventScroll: true });
  }
}

function getFocusable(container) {
  return Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(function (node) {
    return !node.hidden && !node.closest('[hidden]') && node.getAttribute('aria-hidden') !== 'true';
  });
}

function handlePaymentKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
    closePayment(true);
    return;
  }
  if (event.key !== 'Tab') return;

  const focusable = getFocusable(elements.paymentOverlay);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function loadPayPal(clientId) {
  if (window.paypal) return Promise.resolve(window.paypal);
  if (state.paypalLoading) return state.paypalLoading;

  state.paypalLoading = new Promise(function (resolve, reject) {
    const existing = document.querySelector('script[data-paypal-sdk]');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.dataset.paypalSdk = 'true';
    script.async = true;
    script.src = 'https://www.paypal.com/sdk/js?client-id=' +
      encodeURIComponent(clientId) +
      '&currency=USD&intent=capture&components=buttons';
    script.onload = function () {
      if (window.paypal) resolve(window.paypal);
      else reject(new Error('PayPal SDK loaded without the expected API.'));
    };
    script.onerror = function () {
      reject(new Error('PayPal SDK failed to load.'));
    };
    document.head.appendChild(script);
  }).catch(function (error) {
    state.paypalLoading = null;
    throw error;
  });

  return state.paypalLoading;
}

async function initPayPal(clientId, paymentApi) {
  if (state.paypalRendered) return;
  elements.paymentError.hidden = true;
  elements.paymentLoading.hidden = false;
  elements.paypalContainer.innerHTML = '';

  try {
    const paypalApi = await loadPayPal(clientId);
    const buttons = paypalApi.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
        height: 48
      },
      createOrder: async function () {
        const response = await fetch(paymentApi + '/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fortuneId: state.selectedFortune.id,
            topic: state.topic
          })
        });
        const payload = await response.json();
        if (!response.ok || !payload.orderId) {
          throw new Error(payload.message || 'Order creation failed.');
        }
        return payload.orderId;
      },
      onApprove: async function (data) {
        elements.paymentLoading.hidden = false;
        elements.paymentLoading.textContent = t('paymentProcessing');
        try {
          const response = await fetch(
            paymentApi + '/orders/' + encodeURIComponent(data.orderID) + '/capture',
            { method: 'POST' }
          );
          const payload = await response.json();
          if (!response.ok || payload.status !== 'COMPLETED') {
            throw new Error(payload.message || 'Order verification failed.');
          }
          showFullResult();
        } catch (error) {
          showPaymentError(error);
        }
      },
      onCancel: function () {
        showToast(t('paymentCancelled'));
      },
      onError: function (error) {
        showPaymentError(error);
      }
    });

    await buttons.render('#paypal-button-container');
    state.paypalRendered = true;
    elements.paymentLoading.hidden = true;
  } catch (error) {
    showPaymentError(error);
  }
}

function showPaymentError(error) {
  console.error('[Guanyin Oracle] payment error:', error);
  state.paypalRendered = false;
  elements.paymentLoading.hidden = true;
  elements.paymentError.hidden = false;
  elements.paymentError.querySelector('p').textContent = t('paymentFailed');
}

function retryPayment() {
  if (!paymentIsConfigured()) return;
  const clientId = getPayPalClientId();
  const paymentApi = getPaymentApi();
  state.paypalLoading = null;
  initPayPal(clientId, paymentApi);
}

function showFullResult() {
  if (!state.selectedFortune) return;
  closePayment(false);
  renderResult();
  elements.resultOverlay.hidden = false;
  elements.resultOverlay.setAttribute('aria-hidden', 'false');
  elements.siteShell.inert = true;
  elements.siteShell.setAttribute('aria-hidden', 'true');
  document.body.classList.add('is-result-open');
  elements.resultOverlay.scrollTop = 0;
  addHistoryEntry();

  requestAnimationFrame(function () {
    const heading = byId('result-title');
    if (heading) heading.focus({ preventScroll: true });
  });
}

function closeResult(options) {
  const settings = options || {};
  elements.resultOverlay.hidden = true;
  elements.resultOverlay.setAttribute('aria-hidden', 'true');
  elements.siteShell.inert = false;
  elements.siteShell.removeAttribute('aria-hidden');
  document.body.classList.remove('is-result-open');
  renderHistory();

  if (settings.redraw) {
    resetOracle();
  } else {
    requestAnimationFrame(function () {
      elements.previewSection.scrollIntoView({ block: 'center' });
      elements.unlockBtn.focus({ preventScroll: true });
    });
  }
}

function readingReflection(fortune) {
  return fortune.reflection || t('reflectionFallback');
}

function renderResult() {
  const fortune = getFortuneContent(state.selectedFortune.id);
  if (!fortune) return;
  elements.resultContent.innerHTML = '';

  const header = make('header', 'reading-header');
  const meta = make('div', 'reading-meta');
  meta.appendChild(make('span', '', topicLabel(state.topic)));
  meta.appendChild(make('span', '', t('sourceEdition')));
  meta.appendChild(make('span', '', t('modernReading')));

  const title = make('h1', '', lotShortLabel(fortune));
  title.id = 'result-title';
  title.tabIndex = -1;
  const poem = make('blockquote', 'reading-poem', fortune.poem);
  header.append(meta, title, poem);

  if (state.question) {
    const question = make('div', 'reading-question');
    question.appendChild(make('span', '', t('yourQuestion')));
    question.appendChild(document.createTextNode(state.question));
    header.appendChild(question);
  }

  const lead = make('section', 'reading-lead');
  lead.appendChild(make('small', '', t('overallReading')));
  lead.appendChild(make('p', '', fortune.explanation));

  const imagery = make('section', 'reading-section');
  imagery.appendChild(make('span', 'reading-section-label', t('imageryTitle')));
  imagery.appendChild(make('h2', '', fortune.meaning));
  imagery.appendChild(make('p', '', fortune.interpretation));

  const focus = make('section', 'reading-section focus-guidance');
  focus.appendChild(make('span', 'reading-section-label', t('focusTitle')));
  const focusHeading = make('h2');
  focusHeading.appendChild(make('span', '', topicLabel(state.topic).slice(0, 1)));
  focusHeading.appendChild(document.createTextNode(topicLabel(state.topic)));
  focus.appendChild(focusHeading);

  if (state.topic === 'General') {
    focus.appendChild(make('p', '', t('generalGuidance')));
  } else {
    focus.appendChild(make('p', '', fortune.advice[state.topic]));
  }

  const dimensions = make('section', 'reading-section');
  dimensions.appendChild(make('span', 'reading-section-label', t('dimensionsTitle')));
  const grid = make('div', 'advice-grid');
  TOPIC_KEYS.forEach(function (topic) {
    const card = make('article', 'advice-card');
    if (topic === state.topic) card.classList.add('is-focus');
    card.appendChild(make('h3', '', topicLabel(topic)));
    card.appendChild(make('p', '', fortune.advice[topic]));
    grid.appendChild(card);
  });
  dimensions.appendChild(grid);

  const reflection = make('section', 'reflection-box');
  reflection.appendChild(make('small', '', t('reflectionLabel')));
  reflection.appendChild(make('p', '', readingReflection(fortune)));

  const disclaimer = make('p', 'reading-disclaimer', t('resultDisclaimer'));
  const source = make('p', 'reading-source');
  const sourceLink = make('a', '', t('sourceLink'));
  sourceLink.href = fortune.sourceUrl;
  sourceLink.target = '_blank';
  sourceLink.rel = 'noopener noreferrer';
  source.appendChild(sourceLink);
  elements.resultContent.append(header, lead, imagery, focus, dimensions, reflection, source, disclaimer);
}

function getHistory() {
  try {
    const parsed = JSON.parse(safeStorageGet(STORAGE_KEYS.history, '[]'));
    if (!Array.isArray(parsed)) return [];
    const availableIds = new Set(getFortuneDatabase().map(function (fortune) {
      return fortune.id;
    }));
    return parsed.filter(function (item) {
      return item &&
        Number.isInteger(Number(item.id)) &&
        availableIds.has(Number(item.id));
    }).slice(0, 6);
  } catch (_error) {
    return [];
  }
}

function addHistoryEntry() {
  if (!state.selectedFortune) return;
  const existing = getHistory().filter(function (item) {
    return !(Number(item.id) === state.selectedFortune.id && item.topic === state.topic);
  });
  existing.unshift({
    id: state.selectedFortune.id,
    topic: state.topic,
    timestamp: Date.now()
  });
  safeStorageSet(STORAGE_KEYS.history, JSON.stringify(existing.slice(0, 6)));
}

function renderHistory() {
  if (!elements.historySection) return;
  const history = getHistory();
  elements.historySection.hidden = history.length === 0;
  elements.historyList.innerHTML = '';
  if (!history.length) return;

  history.forEach(function (entry) {
    const fortune = getFortuneContent(entry.id);
    if (!fortune) return;
    const button = make('button', 'history-card');
    button.type = 'button';
    button.setAttribute('aria-label', fortune.title + ' · ' + topicLabel(entry.topic));

    const copy = make('div');
    copy.appendChild(make('h3', '', lotShortLabel(fortune)));
    copy.appendChild(make('p', '', fortune.poem));
    const date = new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric'
    }).format(new Date(entry.timestamp));
    copy.appendChild(make('small', '', topicLabel(entry.topic) + ' · ' + date));
    button.appendChild(copy);
    button.appendChild(make('span', 'history-grade', 'LC'));

    button.addEventListener('click', function () {
      const source = getFortuneDatabase().find(function (item) {
        return item.id === Number(entry.id);
      });
      if (!source) return;
      state.selectedFortune = source;
      state.topic = entry.topic || 'General';
      state.question = '';
      showFullResult();
    });
    elements.historyList.appendChild(button);
  });
}

function clearHistory() {
  safeStorageRemove(STORAGE_KEYS.history);
  renderHistory();
  showToast(t('historyCleared'));
}

function buildShareText() {
  if (!state.selectedFortune) return '';
  const fortune = getFortuneContent(state.selectedFortune.id);
  const focusText = state.topic === 'General'
    ? fortune.explanation
    : fortune.advice[state.topic];
  return [
    '[' + lotShortLabel(fortune) + ']',
    fortune.poem,
    '',
    t('overallReading') + ': ' + fortune.explanation,
    topicLabel(state.topic) + ': ' + focusText,
    '',
    t('footerDisclaimer'),
    t('sourceLink') + ': ' + fortune.sourceUrl
  ].join('\n');
}

async function copyResult(fallbackMessage) {
  const text = buildShareText();
  try {
    await navigator.clipboard.writeText(text);
    showToast(fallbackMessage || t('copied'));
  } catch (_error) {
    const helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
    showToast(fallbackMessage || t('copied'));
  }
}

async function shareResult() {
  const fortune = getFortuneContent(state.selectedFortune.id);
  const shareData = {
    title: lotShortLabel(fortune) + ' · Guanyin Oracle',
    text: buildShareText(),
    url: window.location.href.split('#')[0]
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error && error.name === 'AbortError') return;
    }
  }
  await copyResult(t('shareFallback'));
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  state.toastTimer = window.setTimeout(function () {
    elements.toast.hidden = true;
  }, 2800);
}

function cacheElements() {
  Object.assign(elements, {
    siteShell: byId('site-shell'),
    questionForm: byId('question-form'),
    questionInput: byId('question-input'),
    questionCount: byId('question-count'),
    drawBtn: byId('draw-btn'),
    fullPriceNote: byId('full-price-note'),
    drawStatus: byId('draw-status'),
    visualStage: byId('visual-stage'),
    slipNumber: byId('slip-number'),
    previewSection: byId('preview-section'),
    previewTitle: byId('preview-title'),
    previewGrade: byId('preview-grade'),
    previewPoem: byId('preview-poem'),
    previewSummary: byId('preview-summary'),
    previewSource: byId('preview-source'),
    askedQuestion: byId('asked-question'),
    askedQuestionText: byId('asked-question-text'),
    unlockBtn: byId('unlock-btn'),
    unlockPrice: byId('unlock-price'),
    redrawBtn: byId('redraw-btn'),
    historySection: byId('history-section'),
    historyList: byId('history-list'),
    clearHistory: byId('clear-history'),
    paymentOverlay: byId('payment-overlay'),
    paymentClose: byId('payment-close'),
    paymentLot: byId('payment-lot'),
    paymentPrice: byId('payment-price'),
    demoState: byId('demo-state'),
    demoUnlock: byId('demo-unlock'),
    paypalState: byId('paypal-state'),
    paymentLoading: byId('payment-loading'),
    paymentError: byId('payment-error'),
    paymentRetry: byId('payment-retry'),
    paypalContainer: byId('paypal-button-container'),
    resultOverlay: byId('result-overlay'),
    resultContent: byId('result-content'),
    resultBack: byId('result-back'),
    resultRedraw: byId('result-redraw'),
    shareResult: byId('share-result'),
    copyResult: byId('copy-result'),
    printResult: byId('print-result'),
    toast: byId('toast')
  });
}

function bindEvents() {
  elements.questionForm.addEventListener('submit', startDrawing);
  elements.questionInput.addEventListener('input', function () {
    elements.questionCount.textContent = String(elements.questionInput.value.length);
  });
  elements.unlockBtn.addEventListener('click', openPayment);
  elements.redrawBtn.addEventListener('click', function () { resetOracle(); });
  elements.paymentClose.addEventListener('click', function () { closePayment(true); });
  elements.paymentOverlay.addEventListener('keydown', handlePaymentKeydown);
  elements.paymentOverlay.addEventListener('mousedown', function (event) {
    if (event.target === elements.paymentOverlay) closePayment(true);
  });
  elements.demoUnlock.addEventListener('click', showFullResult);
  elements.paymentRetry.addEventListener('click', retryPayment);
  elements.resultBack.addEventListener('click', function () { closeResult(); });
  elements.resultRedraw.addEventListener('click', function () { closeResult({ redraw: true }); });
  elements.shareResult.addEventListener('click', shareResult);
  elements.copyResult.addEventListener('click', function () { copyResult(); });
  elements.printResult.addEventListener('click', function () { window.print(); });
  elements.clearHistory.addEventListener('click', clearHistory);

}

function init() {
  cacheElements();
  bindEvents();

  byId('current-year').textContent = String(new Date().getFullYear());

  applyEnglishCopy();
  setProgress(1);
}

init();
