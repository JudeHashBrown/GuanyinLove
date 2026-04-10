/**
 * ZenOracle Core Logic — app.js
 * ─────────────────────────────
 * 模块职责：
 *   startDrawing()     摇签动画 + 随机抽签
 *   initPayPal()       初始化 PayPal 支付按钮（幂等）
 *   showResult()       渲染签诗结果页
 *   simulateSuccess()  开发用：跳过支付直接看结果
 *   resetApp()         重置整个应用
 */

'use strict';

// ─── 状态 ──────────────────────────────────────────────────────────────────
let selectedFortune = null;  // 当前抽到的签诗对象
let paypalRendered  = false; // 防止 PayPal 按钮重复渲染

// ─── 动画时长常量（与 CSS 变量保持一致）────────────────────────────────────
const TIMING = {
  SHAKE_DURATION:  1800, // ms — 签筒抖动时长
  STICK_DELAY:     1000, // ms — 签条弹出后等待时间
};

// ─── 工具：安全地取元素 ────────────────────────────────────────────────────
function $(id) {
  const el = document.getElementById(id);
  if (!el) console.warn(`[ZenOracle] 元素 #${id} 不存在`);
  return el;
}

// ─── 工具：安全地设置 textContent（防 XSS）────────────────────────────────
function setText(el, text) {
  if (el) el.textContent = text;
}

// ─── 1. 摇签 ───────────────────────────────────────────────────────────────
function startDrawing() {
  if (!FORTUNES_DB || FORTUNES_DB.length === 0) {
    alert('Fortune database is empty. Please add entries to fortunes.js.');
    return;
  }

  // 随机抽取一条签诗
  selectedFortune = FORTUNES_DB[Math.floor(Math.random() * FORTUNES_DB.length)];

  const jar  = $('fortune-jar');
  const stick = $('fortune-stick');
  const btn  = $('draw-btn');
  if (!jar || !stick || !btn) return;

  // 禁用按钮，防止重复点击
  btn.disabled  = true;
  btn.textContent = 'CENTERING…';

  // 第一阶段：签筒抖动
  jar.classList.add('shaking');

  setTimeout(() => {
    jar.classList.remove('shaking');

    // 第二阶段：签条弹出
    stick.classList.add('stick-anim');

    setTimeout(() => {
      showPaymentModal();
    }, TIMING.STICK_DELAY);

  }, TIMING.SHAKE_DURATION);
}

// ─── 2. 显示支付弹窗 ───────────────────────────────────────────────────────
function showPaymentModal() {
  const overlay = $('payment-overlay');
  if (!overlay) return;
  overlay.classList.remove('hidden');
  initPayPal();
}

// ─── 3. 初始化 PayPal（幂等） ──────────────────────────────────────────────
function initPayPal() {
  if (paypalRendered) return; // 已渲染，跳过
  if (typeof paypal === 'undefined') {
    console.error('[ZenOracle] PayPal SDK 未加载，请检查 client-id 配置');
    return;
  }

  paypalRendered = true;

  paypal.Buttons({
    style: {
      layout: 'vertical',
      color:  'gold',
      shape:  'pill',
      label:  'paypal',
    },

    // 创建订单
    createOrder: (_data, actions) => {
      return actions.order.create({
        purchase_units: [{
          description: `ZenOracle Sacred Interpretation — Lot #${selectedFortune.id}`,
          amount: {
            currency_code: 'USD',
            value: '1.00',
          },
        }],
      });
    },

    // 支付成功
    onApprove: (_data, actions) => {
      return actions.order.capture().then(() => {
        showResult();
      });
    },

    // 支付取消（用户主动关闭 PayPal 弹窗）
    onCancel: () => {
      console.info('[ZenOracle] 用户取消了支付');
    },

    // 支付失败
    onError: (err) => {
      console.error('[ZenOracle] PayPal 错误：', err);
      alert('Payment failed. Please try again.');
    },

  }).render('#paypal-button-container');
}

// ─── 4. 渲染结果页 ─────────────────────────────────────────────────────────
function showResult() {
  if (!selectedFortune) return;

  const container = $('result-content');
  if (!container) return;

  // 使用 DOM API 构建内容，避免 innerHTML 注入风险
  container.innerHTML = ''; // 清空旧内容
  container.appendChild(buildResultDOM(selectedFortune));

  // 切换面板
  $('payment-overlay').classList.add('hidden');
  $('result-overlay').classList.remove('hidden');
}

/**
 * 用 DOM API 构建结果页节点树
 * @param {Object} fortune — 签诗对象
 * @returns {DocumentFragment}
 */
function buildResultDOM(fortune) {
  const frag = document.createDocumentFragment();

  // ── 标题区 ──
  const header = document.createElement('div');
  header.className = 'text-center mb-12';

  const badge = document.createElement('div');
  badge.className = 'inline-block px-5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.4em] mb-8';
  badge.style.cssText = 'border:1px solid rgba(197,160,89,0.30); color:rgba(197,160,89,0.60);';
  setText(badge, fortune.title);

  const poem = document.createElement('h2');
  poem.className = 'chinese-serif text-3xl leading-relaxed px-4 mb-6';
  poem.style.color = 'var(--soft-white, #F5F2ED)';
  setText(poem, fortune.poem);

  header.appendChild(badge);
  header.appendChild(poem);
  frag.appendChild(header);

  // ── 内容区 ──
  const body = document.createElement('div');
  body.className = 'space-y-10';

  // The Ancient Story
  body.appendChild(buildSection({
    label: 'The Ancient Story',
    text:  fortune.meaning,
    style: 'border-left: 2px solid var(--vermillion, #962D22); padding-left: 1.5rem;',
    labelColor: 'var(--vermillion, #962D22)',
    textStyle: 'font-style:italic; color:rgba(197,160,89,0.80); font-size:0.875rem; line-height:1.75;',
  }));

  // Divine Explanation
  const explBox = document.createElement('section');
  explBox.className = 'p-8 rounded-[2rem]';
  explBox.style.cssText = 'background:rgba(197,160,89,0.05); border:1px solid rgba(197,160,89,0.10);';

  const explLabel = makeLabel('Divine Explanation', 'rgba(197,160,89,0.40)');
  const explMain  = document.createElement('p');
  explMain.style.cssText = 'font-size:1.125rem; font-weight:600; color:var(--soft-white,#F5F2ED); margin-bottom:0.75rem; line-height:1.7;';
  setText(explMain, fortune.explanation);

  const explSub = document.createElement('p');
  explSub.style.cssText = 'font-size:0.75rem; font-style:italic; color:rgba(197,160,89,0.50);';
  setText(explSub, fortune.interpretation);

  explBox.appendChild(explLabel);
  explBox.appendChild(explMain);
  explBox.appendChild(explSub);
  body.appendChild(explBox);

  // Advice 卡片
  const adviceGrid = document.createElement('div');
  adviceGrid.className = 'grid grid-cols-1 gap-4';

  Object.entries(fortune.advice).forEach(([key, val]) => {
    const card = document.createElement('div');
    card.className = 'advice-card';

    const cardLabel = makeLabel(key, 'var(--vermillion, #962D22)');
    const cardText  = document.createElement('p');
    cardText.style.cssText = 'font-size:0.875rem; line-height:1.7; color:rgba(245,242,237,0.80);';
    setText(cardText, val);

    card.appendChild(cardLabel);
    card.appendChild(cardText);
    adviceGrid.appendChild(card);
  });

  body.appendChild(adviceGrid);
  frag.appendChild(body);

  return frag;
}

/** 创建栏目标签 */
function makeLabel(text, color) {
  const el = document.createElement('span');
  el.style.cssText = `display:block; font-size:0.625rem; text-transform:uppercase; letter-spacing:0.2em; font-weight:700; color:${color}; margin-bottom:0.5rem;`;
  setText(el, text);
  return el;
}

/** 创建带左边框的 section */
function buildSection({ label, text, style, labelColor, textStyle }) {
  const sec = document.createElement('section');
  sec.style.cssText = style;

  const lbl = makeLabel(label, labelColor);
  const p   = document.createElement('p');
  p.style.cssText = textStyle;
  setText(p, text);

  sec.appendChild(lbl);
  sec.appendChild(p);
  return sec;
}


// ─── 6. 重置应用 ───────────────────────────────────────────────────────────
function resetApp() {
  // 强制刷新，确保 PayPal 按钮状态也被重置
  location.reload();
}
