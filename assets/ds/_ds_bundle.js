/* @ds-bundle: {"format":4,"namespace":"JourneyfrontDesignSystem_d988c9","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CandidateRow","sourcePath":"components/data/CandidateRow.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data/Card.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"FitScore","sourcePath":"components/feedback/FitScore.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"NavItem","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"e3eab210e915","components/core/Avatar.jsx":"fba8af778af8","components/core/Badge.jsx":"643f0c1b5b1c","components/core/Button.jsx":"93087deae368","components/core/Icon.jsx":"b6cc3c1ed1ef","components/core/IconButton.jsx":"59ec5092441e","components/core/Tag.jsx":"f858205e9e6c","components/core/interactions.js":"a0ee07f70bf1","components/data/CandidateRow.jsx":"4d520097317c","components/data/Card.jsx":"ac325447eadf","components/data/EmptyState.jsx":"36b8490468cc","components/data/StatCard.jsx":"6cc3de47fbaf","components/data/Table.jsx":"db5c1cb8a3c3","components/feedback/Alert.jsx":"6fc78951914d","components/feedback/Callout.jsx":"fa2ecc06121c","components/feedback/FitScore.jsx":"3e482ed1d9a0","components/feedback/ProgressBar.jsx":"22deacea36fc","components/feedback/Toast.jsx":"f2ba5c9240e0","components/feedback/Tooltip.jsx":"7d9cc0de848a","components/forms/Checkbox.jsx":"1a6ec7acbfb8","components/forms/Input.jsx":"f38ac4737f6d","components/forms/Radio.jsx":"3eb29ffa9696","components/forms/SearchInput.jsx":"6dd93c66b48d","components/forms/Select.jsx":"8bbeb6bf828e","components/forms/Switch.jsx":"adc706a5c251","components/forms/Textarea.jsx":"cafb2130dffb","components/navigation/Breadcrumb.jsx":"d58a3a05aaab","components/navigation/Pagination.jsx":"595b6809625b","components/navigation/Sidebar.jsx":"52d8f71ff39a","components/navigation/Stepper.jsx":"d79106f8502b","components/navigation/Tabs.jsx":"0385f02f865d","ui_kits/platform/AnalyticsScreen.jsx":"4e280e6fb436","ui_kits/platform/AppShell.jsx":"7298dc12a139","ui_kits/platform/CandidateScreen.jsx":"1453c4892fe5","ui_kits/platform/DashboardScreen.jsx":"5b0e1557bfee","ui_kits/platform/PipelineScreen.jsx":"c4628dac19b2","ui_kits/platform/data.js":"b874f0b2a6ee","ui_kits/website/site-end.jsx":"03c7d1fd29f0","ui_kits/website/site-mid.jsx":"be5ccf471145","ui_kits/website/site-top.jsx":"dfba8d79f320"},"inlinedExternals":[],"unexposedExports":[{"name":"useInteractive","sourcePath":"components/core/interactions.js"}]} */

(() => {

const __ds_ns = (window.JourneyfrontDesignSystem_d988c9 = window.JourneyfrontDesignSystem_d988c9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the Journeyfront brand mark. Renders the real raster assets
 * (assets/logos/…). Because asset paths are relative to the consuming
 * page, set `basePath` to the folder that holds the logo PNGs (or pass
 * an explicit `src`).
 *
 * Variants:
 *   lockup     — full color logomark + wordmark (default)
 *   mark       — color logomark only (the circle + path)
 *   white      — all-white lockup (for dark backgrounds)
 *   markWhite  — all-white logomark only
 *
 * Brand rules: never distort, recolor, outline, or reposition the mark.
 * Give it clear space ≈ 50% of the logomark on every side.
 */

const FILES = {
  lockup: 'journeyfront-logo-lockup.png',
  mark: 'journeyfront-logomark-color.png',
  white: 'journeyfront-logo-white.png',
  markWhite: 'journeyfront-logomark-white.png'
};

// intrinsic aspect ratios (w / h) of the exported assets
const RATIO = {
  lockup: 6086 / 1364,
  mark: 1,
  white: 6086 / 1364,
  markWhite: 1
};
function Logo({
  variant = 'lockup',
  basePath = 'assets/logos/',
  src,
  height = 40,
  alt = 'Journeyfront',
  style = {},
  ...rest
}) {
  const file = FILES[variant] || FILES.lockup;
  const url = src || `${basePath}${file}`;
  const ratio = RATIO[variant] || RATIO.lockup;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: url,
    alt: alt,
    height: height,
    style: {
      height,
      width: Math.round(height * ratio),
      display: 'block',
      objectFit: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo, __ds_default_components_brand_Logo_1q8yv4x: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — candidate / user identity. Renders an image, or initials on a
 * deterministic brand-tinted background derived from the name.
 * Sizes: xs | sm | md | lg | xl. Optional status dot.
 */

const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 52,
  xl: 72
};
const TINTS = [['var(--jf-blue-pastel)', 'var(--jf-blue-deep)'], ['var(--jf-green-pastel)', 'var(--jf-green-deep)'], ['var(--jf-pink-pastel)', 'var(--jf-pink-deep)'], ['var(--jf-blue-light)', 'var(--jf-blue-deep)']];
const STATUS = {
  online: 'var(--jf-green-bright)',
  busy: 'var(--jf-pink-bright)',
  away: 'var(--jf-gray-mid)',
  offline: 'var(--jf-gray-mid)'
};
function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function hash(str = '') {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return h;
}
function Avatar({
  name = '',
  src,
  size = 'md',
  status,
  ring = false,
  style = {},
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const [bg, fg] = TINTS[hash(name) % TINTS.length];
  const dot = px >= 40 ? Math.round(px * 0.26) : Math.round(px * 0.32);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: '50%',
      overflow: 'hidden',
      background: src ? 'var(--jf-gray-light)' : bg,
      color: fg,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: Math.round(px * 0.4),
      lineHeight: 1,
      letterSpacing: '0.01em',
      boxShadow: ring ? '0 0 0 2px var(--jf-surface), 0 0 0 4px var(--jf-blue)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name)), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: dot,
      height: dot,
      borderRadius: '50%',
      background: STATUS[status] || STATUS.offline,
      boxShadow: '0 0 0 2px var(--jf-surface)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar, __ds_default_components_core_Avatar_4ed3sh: Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status pill. Soft (tinted) by default, or solid.
 * Tones map to the brand palette: neutral, info (blue), success (green),
 * warning / danger (magenta), purple, dark.
 */

const TONES = {
  neutral: {
    soft: ['var(--jf-gray-pastel)', 'var(--jf-gray-bright)'],
    solid: ['var(--jf-gray-bright)', 'var(--jf-white)'],
    dot: 'var(--jf-gray-mid)'
  },
  info: {
    soft: ['var(--jf-blue-pastel)', 'var(--jf-blue-deep)'],
    solid: ['var(--jf-blue)', 'var(--jf-white)'],
    dot: 'var(--jf-blue)'
  },
  success: {
    soft: ['var(--jf-green-pastel)', 'var(--jf-green-deep)'],
    solid: ['var(--jf-green-bright)', 'var(--jf-green-deep)'],
    dot: 'var(--jf-green-bright)'
  },
  warning: {
    soft: ['var(--jf-pink-pastel)', 'var(--jf-pink-deep)'],
    solid: ['var(--jf-pink-bright)', 'var(--jf-white)'],
    dot: 'var(--jf-pink-bright)'
  },
  danger: {
    soft: ['var(--jf-pink-pastel)', 'var(--jf-pink-deep)'],
    solid: ['var(--jf-pink-bright)', 'var(--jf-white)'],
    dot: 'var(--jf-pink-bright)'
  },
  purple: {
    soft: ['var(--jf-pink-pastel)', 'var(--jf-pink-deep)'],
    solid: ['var(--jf-pink-mid)', 'var(--jf-white)'],
    dot: 'var(--jf-pink-mid)'
  },
  dark: {
    soft: ['var(--jf-blue-pastel)', 'var(--jf-blue-deep)'],
    solid: ['var(--jf-blue-dark)', 'var(--jf-white)'],
    dot: 'var(--jf-blue-dark)'
  }
};
const SIZES = {
  sm: {
    font: 'var(--jf-text-2xs)',
    padX: 7,
    height: 18,
    dot: 5
  },
  md: {
    font: 'var(--jf-text-xs)',
    padX: 9,
    height: 22,
    dot: 6
  }
};
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  size = 'md',
  dot = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const s = SIZES[size] || SIZES.md;
  const [bg, fg] = variant === 'solid' ? t.solid : t.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: s.height,
      padding: `0 ${s.padX}px`,
      background: bg,
      color: fg,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: s.font,
      letterSpacing: '0.01em',
      lineHeight: 1,
      borderRadius: 'var(--jf-radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dot,
      height: s.dot,
      borderRadius: '50%',
      background: variant === 'solid' ? 'currentColor' : t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge, __ds_default_components_core_Badge_2ajn45: Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Journeyfront Icon — lined, single-stroke icons in the brand style
 * (the brand book specifies "lined" icons "unified by their stroke width").
 * 24×24 grid, currentColor stroke, round caps/joins. Set `size` and color
 * via `color` (or inherited `currentColor`). Stroke weight is tunable to
 * keep the unified-stroke rule across an icon group.
 */

const PATHS = {
  // ---- navigation / chevrons / arrows ----
  'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
  'chevron-up': '<polyline points="18 15 12 9 6 15"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'arrow-left': '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  'menu': '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  'more-vertical': '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  // ---- actions ----
  'search': '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  'x': '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>',
  'plus': '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  'minus': '<line x1="5" y1="12" x2="19" y2="12"/>',
  'filter': '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  'sliders': '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  'edit': '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  'trash': '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  'copy': '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  'upload': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  'link': '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  'eye': '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  // ---- objects / nav targets ----
  'home': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>',
  'user-check': '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>',
  'briefcase': '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  'clipboard-check': '<path d="M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><polyline points="9 14 11 16 15 12"/>',
  'mail': '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  'bell': '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  'settings': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  'grid': '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  // ---- data / analytics ----
  'bar-chart': '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  'pie-chart': '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  'trending-down': '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
  'activity': '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'gauge': '<path d="M12 22a10 10 0 1 1 10-10"/><path d="M12 12l4-2"/><circle cx="12" cy="12" r="1.5"/>',
  'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  'flag': '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
  'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'award': '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  // ---- status / feedback ----
  'info': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  'alert-triangle': '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  'quote': '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
  'loader': '<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  className = '',
  style = {},
  title,
  ...rest
}) {
  const inner = PATHS[name];
  if (!inner) {
    if (typeof console !== 'undefined') console.warn(`[Journeyfront Icon] unknown icon "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    },
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : '') + inner
    }
  }, rest));
}

/** Names available in this build (handy for pickers / docs). */
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES, __ds_default_components_core_Icon_pwifaz: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/interactions.js
try { (() => {
const {
  useState,
  useCallback
} = React;
/**
 * Shared interaction-state hook for Journeyfront primitives.
 * Self-contained components style via inline CSS custom properties, so
 * hover / active / focus visuals are driven by React state rather than
 * a stylesheet. Spread `bind` onto the element and read the booleans.
 *
 *   const { hover, active, focus, bind } = useInteractive();
 *   <button {...bind} style={{ background: hover ? a : b }} />
 */
function useInteractive(handlers = {}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const bind = {
    onMouseEnter: useCallback(e => {
      setHover(true);
      handlers.onMouseEnter?.(e);
    }, [handlers]),
    onMouseLeave: useCallback(e => {
      setHover(false);
      setActive(false);
      handlers.onMouseLeave?.(e);
    }, [handlers]),
    onMouseDown: useCallback(e => {
      setActive(true);
      handlers.onMouseDown?.(e);
    }, [handlers]),
    onMouseUp: useCallback(e => {
      setActive(false);
      handlers.onMouseUp?.(e);
    }, [handlers]),
    onFocus: useCallback(e => {
      setFocus(true);
      handlers.onFocus?.(e);
    }, [handlers]),
    onBlur: useCallback(e => {
      setFocus(false);
      handlers.onBlur?.(e);
    }, [handlers])
  };
  return {
    hover,
    active,
    focus,
    bind
  };
}
Object.assign(__ds_scope, { useInteractive, __ds_default_components_core_interactions_ycihb9: useInteractive });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/interactions.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary Journeyfront action control.
 * Lato Bold label, signature pill-ish radius, primary = Bright Blue.
 * Variants: primary | secondary | ghost | subtle | danger
 * Sizes: sm | md | lg
 */

const SIZES = {
  sm: {
    height: 32,
    padX: 14,
    font: 'var(--jf-text-sm)',
    gap: 6,
    icon: 15
  },
  md: {
    height: 40,
    padX: 18,
    font: 'var(--jf-text-base)',
    gap: 8,
    icon: 17
  },
  lg: {
    height: 48,
    padX: 24,
    font: 'var(--jf-text-md)',
    gap: 9,
    icon: 19
  }
};
function palette(variant, {
  hover,
  active
}) {
  switch (variant) {
    case 'secondary':
      return {
        background: hover ? 'var(--jf-blue-pastel)' : 'var(--jf-surface)',
        color: 'var(--jf-blue-deep)',
        border: '1px solid ' + (hover ? 'var(--jf-blue)' : 'var(--jf-border-strong)'),
        boxShadow: active ? 'none' : 'var(--jf-shadow-xs)'
      };
    case 'ghost':
      return {
        background: hover ? 'var(--jf-blue-pastel)' : 'transparent',
        color: 'var(--jf-blue-deep)',
        border: '1px solid transparent',
        boxShadow: 'none'
      };
    case 'subtle':
      return {
        background: hover ? 'var(--jf-blue-light)' : 'var(--jf-blue-pastel)',
        color: 'var(--jf-blue-deep)',
        border: '1px solid transparent',
        boxShadow: 'none'
      };
    case 'danger':
      return {
        background: hover ? 'var(--jf-pink-deep)' : 'var(--jf-pink-bright)',
        color: 'var(--jf-white)',
        border: '1px solid transparent',
        boxShadow: active ? 'none' : 'var(--jf-shadow-xs)'
      };
    case 'primary':
    default:
      return {
        background: active ? 'var(--jf-primary-active)' : hover ? 'var(--jf-primary-hover)' : 'var(--jf-primary)',
        color: 'var(--jf-white)',
        border: '1px solid transparent',
        boxShadow: hover && !active ? 'var(--jf-shadow-primary)' : 'var(--jf-shadow-xs)'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const {
    hover,
    active,
    focus,
    bind
  } = __ds_scope.useInteractive(rest);
  const s = SIZES[size] || SIZES.md;
  const isDisabled = disabled || loading;
  const pal = palette(variant, {
    hover: hover && !isDisabled,
    active: active && !isDisabled
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onClick: onClick
  }, bind, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.padX}px`,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: s.font,
      lineHeight: 1,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--jf-radius-md)',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      outline: focus ? 'none' : undefined,
      boxShadow: focus ? 'var(--jf-ring)' : pal.boxShadow,
      transition: 'background var(--jf-duration-fast) var(--jf-ease), box-shadow var(--jf-duration-fast) var(--jf-ease), border-color var(--jf-duration-fast) var(--jf-ease)',
      transform: active && !isDisabled ? 'translateY(0.5px)' : 'none',
      ...pal,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader",
    size: s.icon,
    className: "jf-spin",
    style: {
      animation: 'jf-spin 0.7s linear infinite'
    }
  }), !loading && iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon,
    strokeWidth: 2.25
  }), children != null && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    strokeWidth: 2.25
  }), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: '@keyframes jf-spin{to{transform:rotate(360deg)}}'
    }
  }));
}
Object.assign(__ds_scope, { Button, __ds_default_components_core_Button_51d4zy: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, icon-only control for toolbars and table rows.
 * Variants: ghost (default) | solid | outline. Sizes: sm | md | lg.
 */

const SIZES = {
  sm: {
    box: 30,
    icon: 16
  },
  md: {
    box: 38,
    icon: 19
  },
  lg: {
    box: 46,
    icon: 22
  }
};
function palette(variant, {
  hover,
  active
}) {
  switch (variant) {
    case 'solid':
      return {
        background: active ? 'var(--jf-primary-active)' : hover ? 'var(--jf-primary-hover)' : 'var(--jf-primary)',
        color: 'var(--jf-white)',
        border: '1px solid transparent'
      };
    case 'outline':
      return {
        background: hover ? 'var(--jf-blue-pastel)' : 'var(--jf-surface)',
        color: 'var(--jf-blue-deep)',
        border: '1px solid ' + (hover ? 'var(--jf-blue)' : 'var(--jf-border-strong)')
      };
    case 'ghost':
    default:
      return {
        background: hover ? 'var(--jf-gray-pastel)' : 'transparent',
        color: 'var(--jf-text-muted)',
        border: '1px solid transparent'
      };
  }
}
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const {
    hover,
    active,
    focus,
    bind
  } = __ds_scope.useInteractive(rest);
  const s = SIZES[size] || SIZES.md;
  const pal = palette(variant, {
    hover: hover && !disabled,
    active: active && !disabled
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick
  }, bind, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      borderRadius: 'var(--jf-radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      outline: 'none',
      boxShadow: focus ? 'var(--jf-ring)' : 'none',
      transition: 'background var(--jf-duration-fast) var(--jf-ease), border-color var(--jf-duration-fast) var(--jf-ease), color var(--jf-duration-fast) var(--jf-ease)',
      ...pal,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { IconButton, __ds_default_components_core_IconButton_p7lntj: IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a compact chip for filters, skills, and selected facets.
 * Optionally removable (shows an × that fires onRemove).
 */
function Tag({
  children,
  tone = 'neutral',
  onRemove,
  icon,
  style = {},
  ...rest
}) {
  const {
    hover,
    bind
  } = __ds_scope.useInteractive();
  const tones = {
    neutral: ['var(--jf-gray-pastel)', 'var(--jf-ink)', 'var(--jf-border)'],
    blue: ['var(--jf-blue-pastel)', 'var(--jf-blue-deep)', 'transparent'],
    green: ['var(--jf-green-pastel)', 'var(--jf-green-deep)', 'transparent'],
    purple: ['var(--jf-pink-pastel)', 'var(--jf-pink-deep)', 'transparent']
  };
  const [bg, fg, bd] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: onRemove ? '0 6px 0 11px' : '0 11px',
      background: bg,
      color: fg,
      border: `1px solid ${bd}`,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-xs)',
      lineHeight: 1,
      borderRadius: 'var(--jf-radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13,
    strokeWidth: 2.25
  }), children, onRemove && /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, bind, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      marginLeft: 1,
      padding: 0,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      color: 'inherit',
      background: hover ? 'rgba(0,0,0,0.08)' : 'transparent',
      transition: 'background var(--jf-duration-fast) var(--jf-ease)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Tag, __ds_default_components_core_Tag_1gfzecu: Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/CandidateRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CandidateRow — a product-specific list row for the hiring pipeline.
 * Avatar + name/role, optional meta (location, applied date), tags, a
 * compact predicted-fit score, and a stage badge. Composes the primitives.
 */
function scoreBand(s) {
  if (s >= 80) return ['var(--jf-green-deep)', 'var(--jf-green-pastel)'];
  if (s >= 60) return ['var(--jf-blue-deep)', 'var(--jf-blue-pastel)'];
  if (s >= 40) return ['var(--jf-pink-deep)', 'var(--jf-pink-pastel)'];
  return ['var(--jf-gray-bright)', 'var(--jf-gray-light)'];
}
function CandidateRow({
  name,
  role,
  meta,
  avatar,
  fit,
  stage,
  stageTone = 'info',
  tags = [],
  selected = false,
  onClick,
  trailing,
  style = {},
  ...rest
}) {
  const {
    hover,
    bind
  } = __ds_scope.useInteractive();
  const [fg, bg] = fit != null ? scoreBand(fit) : ['', ''];
  return /*#__PURE__*/React.createElement("div", _extends({}, bind, {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 16px',
      background: selected ? 'var(--jf-blue-pastel)' : hover ? 'var(--jf-gray-pastel)' : 'var(--jf-surface)',
      borderLeft: `3px solid ${selected ? 'var(--jf-blue)' : 'transparent'}`,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--jf-duration-fast) var(--jf-ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatar,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-base)',
      color: 'var(--jf-ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-2xs)',
      color: 'var(--jf-blue-deep)',
      background: 'var(--jf-blue-pastel)',
      padding: '2px 7px',
      borderRadius: 'var(--jf-radius-pill)',
      whiteSpace: 'nowrap'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 2
    }
  }, role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-sm)',
      color: 'var(--jf-text-muted)'
    }
  }, role), meta && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--jf-text-subtle)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-sm)',
      color: 'var(--jf-text-subtle)'
    }
  }, meta)))), fit != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
      height: 32,
      padding: '0 9px',
      borderRadius: 'var(--jf-radius-md)',
      background: bg,
      color: fg,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-black)',
      fontSize: 'var(--jf-text-md)'
    }
  }, fit), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 9,
      letterSpacing: '0.06em',
      color: 'var(--jf-text-subtle)'
    }
  }, "FIT")), stage && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: stageTone,
    dot: true
  }, stage), trailing, onClick && !trailing && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--jf-text-subtle)"
  }));
}
Object.assign(__ds_scope, { CandidateRow, __ds_default_components_data_CandidateRow_1fsk33s: CandidateRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CandidateRow.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base surface container. Signature 20px brand radius, hairline
 * border, soft cool shadow. Set `interactive` for hover lift, `tone="dark"`
 * for Dark-Blue sections, `pad` to control padding.
 */
function Card({
  children,
  tone = 'default',
  interactive = false,
  pad = 20,
  elevation = 'sm',
  style = {},
  ...rest
}) {
  const {
    hover,
    bind
  } = __ds_scope.useInteractive();
  const shadows = {
    none: 'none',
    sm: 'var(--jf-shadow-sm)',
    md: 'var(--jf-shadow-md)',
    lg: 'var(--jf-shadow-lg)'
  };
  const dark = tone === 'dark';
  const tinted = tone === 'tint';
  return /*#__PURE__*/React.createElement("div", _extends({}, interactive ? bind : {}, {
    style: {
      background: dark ? 'var(--jf-blue-dark)' : tinted ? 'var(--jf-blue-pastel)' : 'var(--jf-surface)',
      color: dark ? 'var(--jf-white)' : 'var(--jf-ink)',
      border: dark || tinted ? '1px solid transparent' : '1px solid var(--jf-border)',
      borderRadius: 'var(--jf-radius-lg)',
      padding: typeof pad === 'number' ? pad : pad,
      boxShadow: interactive && hover ? 'var(--jf-shadow-lg)' : shadows[elevation],
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--jf-duration-base) var(--jf-ease), box-shadow var(--jf-duration-base) var(--jf-ease)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}

/** CardHeader — title + optional subtitle and trailing actions. Pass tone="dark" on a dark Card. */
function CardHeader({
  title,
  subtitle,
  actions,
  tone = 'light',
  style = {},
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 14,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-lg)',
      color: dark ? 'var(--jf-white)' : 'var(--jf-text-heading)',
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-sm)',
      color: dark ? 'rgba(255,255,255,0.72)' : 'var(--jf-text-muted)',
      marginTop: 3
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexShrink: 0
    }
  }, actions));
}
Object.assign(__ds_scope, { Card, CardHeader, __ds_default_components_data_Card_wz741p: Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** EmptyState — friendly placeholder for empty lists / first-run views. */
function EmptyState({
  icon = 'users',
  title,
  message,
  action,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 6,
      padding: '40px 24px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      marginBottom: 8,
      borderRadius: 'var(--jf-radius-lg)',
      background: 'var(--jf-blue-pastel)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    color: "var(--jf-blue)",
    strokeWidth: 1.75
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-lg)',
      color: 'var(--jf-ink)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-sm)',
      lineHeight: 'var(--jf-leading-normal)',
      color: 'var(--jf-text-muted)',
      maxWidth: 340
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState, __ds_default_components_data_EmptyState_m9vnub: EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — a KPI tile: label, big value, optional delta and icon.
 * Delta direction colors itself (up = green, down = magenta); pass
 * `goodDirection="down"` for metrics where down is good (e.g. turnover).
 */
function StatCard({
  label,
  value,
  delta,
  deltaDirection = 'up',
  goodDirection = 'up',
  icon,
  caption,
  style = {},
  ...rest
}) {
  const isGood = delta != null && deltaDirection === goodDirection;
  const deltaColor = delta == null ? 'var(--jf-text-muted)' : isGood ? 'var(--jf-green-deep)' : 'var(--jf-pink-deep)';
  const deltaBg = delta == null ? 'transparent' : isGood ? 'var(--jf-green-pastel)' : 'var(--jf-pink-pastel)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 18,
      background: 'var(--jf-surface)',
      border: '1px solid var(--jf-border)',
      borderRadius: 'var(--jf-radius-lg)',
      boxShadow: 'var(--jf-shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-xs)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--jf-text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      borderRadius: 'var(--jf-radius-sm)',
      background: 'var(--jf-blue-pastel)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--jf-blue)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-black)',
      fontSize: 'var(--jf-h2)',
      lineHeight: 1,
      color: 'var(--jf-ink)',
      letterSpacing: '-0.02em'
    }
  }, value), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      padding: '2px 7px',
      borderRadius: 'var(--jf-radius-pill)',
      background: deltaBg,
      color: deltaColor,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: deltaDirection === 'up' ? 'trending-up' : 'trending-down',
    size: 13,
    strokeWidth: 2.5
  }), delta)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-xs)',
      color: 'var(--jf-text-subtle)'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCard, __ds_default_components_data_StatCard_4la461: StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Table — a light, data-driven table. Pass `columns` and `data`.
 * Each column: { key, header, width?, align?, render?(row, value) }.
 * Rows hover-highlight; pass `onRowClick` to make rows interactive.
 */
function Row({
  row,
  columns,
  onRowClick
}) {
  const {
    hover,
    bind
  } = __ds_scope.useInteractive();
  return /*#__PURE__*/React.createElement("tr", _extends({}, onRowClick ? {
    ...bind,
    onClick: () => onRowClick(row)
  } : bind, {
    style: {
      background: hover ? 'var(--jf-gray-pastel)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--jf-duration-fast) var(--jf-ease)'
    }
  }), columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    style: {
      padding: '13px 16px',
      borderBottom: '1px solid var(--jf-border)',
      textAlign: col.align || 'left',
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-sm)',
      color: 'var(--jf-ink)',
      verticalAlign: 'middle',
      whiteSpace: col.nowrap ? 'nowrap' : undefined
    }
  }, col.render ? col.render(row, row[col.key]) : row[col.key])));
}

// Header treatments. 'brand' = the Bright-Blue header used in brand guides &
// content tables (white title-case labels); 'subtle' = quiet app-table header.
const HEADER = {
  brand: {
    background: 'var(--jf-blue)',
    color: 'var(--jf-white)',
    borderBottom: '1px solid transparent',
    fontSize: 'var(--jf-text-sm)',
    letterSpacing: '0.01em',
    textTransform: 'none',
    padding: '13px 16px'
  },
  subtle: {
    background: 'var(--jf-gray-pastel)',
    color: 'var(--jf-text-muted)',
    borderBottom: '1px solid var(--jf-border)',
    fontSize: 'var(--jf-text-2xs)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '11px 16px'
  }
};
function Table({
  columns = [],
  data = [],
  onRowClick,
  headerTone = 'subtle',
  style = {},
  ...rest
}) {
  const h = HEADER[headerTone] || HEADER.subtle;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      overflowX: 'auto',
      border: '1px solid var(--jf-border)',
      borderRadius: 'var(--jf-radius-lg)',
      background: 'var(--jf-surface)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    style: {
      width: col.width,
      padding: h.padding,
      textAlign: col.align || 'left',
      background: h.background,
      borderBottom: h.borderBottom,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: h.fontSize,
      letterSpacing: h.letterSpacing,
      textTransform: h.textTransform,
      color: h.color,
      whiteSpace: 'nowrap'
    }
  }, col.header)))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, i) => /*#__PURE__*/React.createElement(Row, {
    key: row.id ?? i,
    row: row,
    columns: columns,
    onRowClick: onRowClick
  })))));
}
Object.assign(__ds_scope, { Table, __ds_default_components_data_Table_n4tmtn: Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Alert — inline status banner. Tones: info | success | warning | danger | neutral. */

const TONES = {
  info: {
    bg: 'var(--jf-blue-pastel)',
    fg: 'var(--jf-blue-deep)',
    accent: 'var(--jf-blue)',
    icon: 'info'
  },
  success: {
    bg: 'var(--jf-green-pastel)',
    fg: 'var(--jf-green-deep)',
    accent: 'var(--jf-green-bright)',
    icon: 'check-circle'
  },
  warning: {
    bg: 'var(--jf-pink-pastel)',
    fg: 'var(--jf-pink-deep)',
    accent: 'var(--jf-pink-bright)',
    icon: 'alert-triangle'
  },
  danger: {
    bg: 'var(--jf-pink-pastel)',
    fg: 'var(--jf-pink-deep)',
    accent: 'var(--jf-pink-bright)',
    icon: 'alert-circle'
  },
  neutral: {
    bg: 'var(--jf-gray-pastel)',
    fg: 'var(--jf-ink)',
    accent: 'var(--jf-gray-bright)',
    icon: 'info'
  }
};
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  onClose,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      padding: '13px 15px',
      background: t.bg,
      borderRadius: 'var(--jf-radius-md)',
      borderLeft: `3px solid ${t.accent}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 19,
    color: t.accent,
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-base)',
      color: t.fg,
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-sm)',
      lineHeight: 'var(--jf-leading-normal)',
      color: t.fg,
      opacity: 0.92
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      display: 'flex',
      padding: 2,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: t.fg,
      opacity: 0.7,
      height: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    strokeWidth: 2.25
  })));
}
Object.assign(__ds_scope, { Alert, __ds_default_components_feedback_Alert_s1ujgm: Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — the brand's signature highlight box (as used throughout the BPO
 * Hiring Guide): a soft tinted card with a lined brand icon, an ALL-CAPS
 * heading and supporting copy. Use for "Key action", tips and pull-asides.
 *
 * Tones map to the palette: blue (default) · green · purple · neutral.
 */
const TONES = {
  blue: {
    bg: 'var(--jf-blue-pastel)',
    accent: 'var(--jf-blue)',
    heading: 'var(--jf-blue)'
  },
  green: {
    bg: 'var(--jf-green-pastel)',
    accent: 'var(--jf-green-deep)',
    heading: 'var(--jf-green-deep)'
  },
  purple: {
    bg: 'var(--jf-pink-pastel)',
    accent: 'var(--jf-pink-deep)',
    heading: 'var(--jf-pink-deep)'
  },
  neutral: {
    bg: 'var(--jf-gray-pastel)',
    accent: 'var(--jf-blue)',
    heading: 'var(--jf-ink)'
  }
};
function Callout({
  icon = 'flag',
  title,
  children,
  tone = 'blue',
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 22,
      padding: '26px 30px',
      background: t.bg,
      borderRadius: 'var(--jf-radius-lg)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 46,
    strokeWidth: 1.6,
    color: t.accent,
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-lg)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: t.heading,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-md)',
      lineHeight: 'var(--jf-leading-normal)',
      color: 'var(--jf-ink)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout, __ds_default_components_feedback_Callout_14cqsgy: Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FitScore.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FitScore — the signature Journeyfront predictive-fit indicator.
 * A 0–100 score shown as a ring (default) or a horizontal meter. Color
 * bands follow the brand: ≥80 strong (green), 60–79 moderate (blue),
 * 40–59 watch (magenta-light), <40 low (grey). The product is built on
 * predicting on-the-job success — this is the component that shows it.
 */

function band(score) {
  if (score >= 80) return {
    color: 'var(--jf-green-bright)',
    track: 'var(--jf-green-pastel)',
    label: 'Strong fit'
  };
  if (score >= 60) return {
    color: 'var(--jf-blue)',
    track: 'var(--jf-blue-pastel)',
    label: 'Good fit'
  };
  if (score >= 40) return {
    color: 'var(--jf-pink-mid)',
    track: 'var(--jf-pink-pastel)',
    label: 'Watch'
  };
  return {
    color: 'var(--jf-gray-mid)',
    track: 'var(--jf-gray-light)',
    label: 'Low fit'
  };
}
function FitScore({
  score = 0,
  variant = 'ring',
  size = 96,
  thickness,
  showLabel = true,
  caption,
  style = {},
  ...rest
}) {
  const v = Math.max(0, Math.min(100, Math.round(score)));
  const b = band(v);
  if (variant === 'meter') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        width: '100%',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--jf-font-sans)',
        fontWeight: 'var(--jf-weight-bold)',
        fontSize: 'var(--jf-text-sm)',
        color: 'var(--jf-ink)'
      }
    }, caption || 'Predicted fit'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--jf-font-sans)',
        fontWeight: 'var(--jf-weight-black)',
        fontSize: 'var(--jf-text-md)',
        color: b.color
      }
    }, v)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 'var(--jf-radius-pill)',
        background: b.track,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${v}%`,
        height: '100%',
        borderRadius: 'var(--jf-radius-pill)',
        background: b.color,
        transition: 'width var(--jf-duration-slow) var(--jf-ease)'
      }
    })), showLabel && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--jf-font-sans)',
        fontSize: 'var(--jf-text-xs)',
        color: 'var(--jf-text-muted)'
      }
    }, b.label));
  }
  const stroke = thickness || Math.max(6, Math.round(size * 0.09));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - v / 100);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: b.track,
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: b.color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: offset,
    style: {
      transition: 'stroke-dashoffset var(--jf-duration-slow) var(--jf-ease)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-black)',
      fontSize: Math.round(size * 0.3),
      lineHeight: 1,
      color: 'var(--jf-ink)'
    }
  }, v), size >= 80 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: Math.round(size * 0.1),
      color: 'var(--jf-text-subtle)',
      letterSpacing: '0.06em'
    }
  }, "FIT"))), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-xs)',
      color: b.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: b.color
    }
  }), caption || b.label));
}
Object.assign(__ds_scope, { FitScore, __ds_default_components_feedback_FitScore_1y6fiml: FitScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FitScore.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ProgressBar — determinate progress. Tones: blue (default), green, magenta, dark. */
const TONES = {
  blue: 'var(--jf-blue)',
  green: 'var(--jf-green-bright)',
  magenta: 'var(--jf-pink-bright)',
  dark: 'var(--jf-blue-dark)'
};
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'blue',
  label,
  showValue = false,
  height = 8,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const color = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-sm)',
      color: 'var(--jf-ink)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-xs)',
      color: 'var(--jf-text-muted)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      borderRadius: 'var(--jf-radius-pill)',
      background: 'var(--jf-gray-light)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--jf-radius-pill)',
      background: color,
      transition: 'width var(--jf-duration-slow) var(--jf-ease)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar, __ds_default_components_feedback_ProgressBar_1i5r454: ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toast — a transient notification card. Tones map to brand status colors. */
const TONES = {
  info: {
    accent: 'var(--jf-blue)',
    icon: 'info'
  },
  success: {
    accent: 'var(--jf-green-bright)',
    icon: 'check-circle'
  },
  warning: {
    accent: 'var(--jf-pink-bright)',
    icon: 'alert-triangle'
  },
  danger: {
    accent: 'var(--jf-pink-bright)',
    icon: 'alert-circle'
  }
};
function Toast({
  tone = 'info',
  title,
  message,
  icon,
  action,
  onClose,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      background: 'var(--jf-surface)',
      border: '1px solid var(--jf-border)',
      borderRadius: 'var(--jf-radius-md)',
      boxShadow: 'var(--jf-shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      flexShrink: 0,
      borderRadius: 'var(--jf-radius-sm)',
      background: 'color-mix(in srgb, ' + t.accent + ' 14%, white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 19,
    color: t.accent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-base)',
      color: 'var(--jf-ink)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-sm)',
      lineHeight: 1.4,
      color: 'var(--jf-text-muted)',
      marginTop: title ? 2 : 0
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      display: 'flex',
      padding: 2,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--jf-text-subtle)',
      height: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    strokeWidth: 2.25
  })));
}
Object.assign(__ds_scope, { Toast, __ds_default_components_feedback_Toast_sfbpi1: Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tooltip — lightweight hover/focus label. Wraps a single child; shows a
 * small dark bubble on the chosen side. CSS-only positioning, no portal.
 */
function Tooltip({
  label,
  side = 'top',
  children,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      padding: '6px 10px',
      background: 'var(--jf-blue-dark)',
      color: 'var(--jf-white)',
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-xs)',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--jf-radius-sm)',
      boxShadow: 'var(--jf-shadow-md)',
      pointerEvents: 'none',
      opacity: open ? 1 : 0,
      transform: `${pos.transform} translateY(${open ? '0' : side === 'top' ? '3px' : '-3px'})`,
      transition: 'opacity var(--jf-duration-fast) var(--jf-ease)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip, __ds_default_components_feedback_Tooltip_1lex2m1: Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — brand-blue check, with optional label + description. */
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId ? React.useId() : 'jf-cb';
  const cbId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      marginTop: description ? 1 : 0,
      background: on ? 'var(--jf-blue)' : 'var(--jf-surface)',
      border: `1px solid ${on ? 'var(--jf-blue)' : 'var(--jf-border-strong)'}`,
      borderRadius: 'var(--jf-radius-sm)',
      transition: 'background var(--jf-duration-fast) var(--jf-ease), border-color var(--jf-duration-fast) var(--jf-ease)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--jf-white)",
    strokeWidth: 3
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-base)',
      color: 'var(--jf-ink)',
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-xs)',
      color: 'var(--jf-text-muted)',
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox, __ds_default_components_forms_Checkbox_i1jt6f: Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field with optional leading/trailing icon, hint
 * and error states. Sizes: sm | md | lg.
 */

const SIZES = {
  sm: {
    h: 'var(--jf-control-h-sm)',
    font: 'var(--jf-text-sm)',
    padX: 11,
    icon: 15
  },
  md: {
    h: 'var(--jf-control-h-md)',
    font: 'var(--jf-text-base)',
    padX: 13,
    icon: 17
  },
  lg: {
    h: 'var(--jf-control-h-lg)',
    font: 'var(--jf-text-md)',
    padX: 15,
    icon: 18
  }
};
function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  size = 'md',
  id,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const {
    focus,
    bind
  } = __ds_scope.useInteractive(rest);
  const s = SIZES[size] || SIZES.md;
  const reactId = React.useId ? React.useId() : 'jf-in';
  const inputId = id || reactId;
  const borderColor = error ? 'var(--jf-danger)' : focus ? 'var(--jf-blue)' : 'var(--jf-border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-sm)',
      color: 'var(--jf-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.padX}px`,
      background: disabled ? 'var(--jf-gray-pastel)' : 'var(--jf-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--jf-radius-md)',
      boxShadow: focus ? 'var(--jf-ring)' : 'none',
      transition: 'border-color var(--jf-duration-fast) var(--jf-ease), box-shadow var(--jf-duration-fast) var(--jf-ease)',
      cursor: disabled ? 'not-allowed' : 'text',
      opacity: disabled ? 0.65 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon,
    color: "var(--jf-text-subtle)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled
  }, bind, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-regular)',
      fontSize: s.font,
      color: 'var(--jf-ink)',
      ...style
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon,
    color: "var(--jf-text-subtle)"
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-xs)',
      color: error ? 'var(--jf-danger-deep)' : 'var(--jf-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input, __ds_default_components_forms_Input_jsghkw: Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RadioGroup + Radio — single-choice control. Use RadioGroup for managed
 * state, or Radio standalone with your own name/checked wiring.
 */

function Radio({
  label,
  description,
  checked,
  disabled,
  onChange,
  value,
  name,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId ? React.useId() : 'jf-rb';
  const rId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      marginTop: description ? 1 : 0,
      background: 'var(--jf-surface)',
      border: `1px solid ${checked ? 'var(--jf-blue)' : 'var(--jf-border-strong)'}`,
      borderRadius: '50%',
      transition: 'border-color var(--jf-duration-fast) var(--jf-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--jf-blue)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--jf-duration-fast) var(--jf-ease)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-base)',
      color: 'var(--jf-ink)',
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-xs)',
      color: 'var(--jf-text-muted)',
      lineHeight: 1.4
    }
  }, description)));
}
function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  options = [],
  gap = 12,
  style = {},
  children,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const groupName = name || (React.useId ? React.useId() : 'jf-rg');
  const handle = v => e => {
    if (!isControlled) setInternal(v);
    onChange?.(v, e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    const desc = typeof o === 'string' ? undefined : o.description;
    return /*#__PURE__*/React.createElement(Radio, {
      key: v,
      name: groupName,
      value: v,
      label: lbl,
      description: desc,
      checked: current === v,
      onChange: handle(v)
    });
  }), children);
}
Object.assign(__ds_scope, { Radio, RadioGroup, __ds_default_components_forms_Radio_jyiy9r: Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SearchInput — search box with leading magnifier and clear button. */
function SearchInput({
  value,
  defaultValue = '',
  onChange,
  onClear,
  placeholder = 'Search…',
  size = 'md',
  width,
  style = {},
  ...rest
}) {
  const {
    focus,
    bind
  } = __ds_scope.useInteractive(rest);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const val = isControlled ? value : internal;
  const heights = {
    sm: 'var(--jf-control-h-sm)',
    md: 'var(--jf-control-h-md)',
    lg: 'var(--jf-control-h-lg)'
  };
  const handle = e => {
    if (!isControlled) setInternal(e.target.value);
    onChange?.(e);
  };
  const clear = () => {
    if (!isControlled) setInternal('');
    onClear?.();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      width: width || 280,
      height: heights[size] || heights.md,
      padding: '0 12px',
      background: 'var(--jf-surface)',
      border: `1px solid ${focus ? 'var(--jf-blue)' : 'var(--jf-border-strong)'}`,
      borderRadius: 'var(--jf-radius-md)',
      boxShadow: focus ? 'var(--jf-ring)' : 'none',
      transition: 'border-color var(--jf-duration-fast) var(--jf-ease), box-shadow var(--jf-duration-fast) var(--jf-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 17,
    color: "var(--jf-text-subtle)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: val,
    onChange: handle,
    placeholder: placeholder
  }, bind, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-base)',
      color: 'var(--jf-ink)'
    }
  }, rest)), val && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear",
    onClick: clear,
    style: {
      display: 'flex',
      padding: 2,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--jf-text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15,
    strokeWidth: 2.25
  })));
}
Object.assign(__ds_scope, { SearchInput, __ds_default_components_forms_SearchInput_13vfxyu: SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--jf-control-h-sm)',
    font: 'var(--jf-text-sm)',
    padX: 11
  },
  md: {
    h: 'var(--jf-control-h-md)',
    font: 'var(--jf-text-base)',
    padX: 13
  },
  lg: {
    h: 'var(--jf-control-h-lg)',
    font: 'var(--jf-text-md)',
    padX: 15
  }
};

/** Select — styled wrapper around a native <select> with a brand chevron. */
function Select({
  label,
  hint,
  error,
  size = 'md',
  id,
  options,
  children,
  disabled = false,
  placeholder,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const {
    focus,
    bind
  } = __ds_scope.useInteractive(rest);
  const s = SIZES[size] || SIZES.md;
  const reactId = React.useId ? React.useId() : 'jf-sel';
  const selId = id || reactId;
  const borderColor = error ? 'var(--jf-danger)' : focus ? 'var(--jf-blue)' : 'var(--jf-border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-sm)',
      color: 'var(--jf-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled
  }, bind, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: s.h,
      padding: `0 ${s.padX + 22}px 0 ${s.padX}px`,
      background: disabled ? 'var(--jf-gray-pastel)' : 'var(--jf-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--jf-radius-md)',
      boxShadow: focus ? 'var(--jf-ring)' : 'none',
      outline: 'none',
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-regular)',
      fontSize: s.font,
      color: 'var(--jf-ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.65 : 1,
      transition: 'border-color var(--jf-duration-fast) var(--jf-ease), box-shadow var(--jf-duration-fast) var(--jf-ease)',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, lbl);
  }) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: s.padX,
      pointerEvents: 'none',
      display: 'flex',
      color: 'var(--jf-text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-xs)',
      color: error ? 'var(--jf-danger-deep)' : 'var(--jf-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select, __ds_default_components_forms_Select_k3ngq8: Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — on/off toggle. Brand blue when on. Sizes: sm | md. */
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = 'md',
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId ? React.useId() : 'jf-sw';
  const swId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === 'sm' ? {
    w: 34,
    h: 20,
    k: 14
  } : {
    w: 42,
    h: 24,
    k: 18
  };
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 11,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      flexShrink: 0,
      borderRadius: 'var(--jf-radius-pill)',
      background: on ? 'var(--jf-blue)' : 'var(--jf-gray-mid)',
      transition: 'background var(--jf-duration-base) var(--jf-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: 'var(--jf-white)',
      boxShadow: 'var(--jf-shadow-sm)',
      transition: 'left var(--jf-duration-base) var(--jf-ease)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-base)',
      color: 'var(--jf-ink)',
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-xs)',
      color: 'var(--jf-text-muted)',
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch, __ds_default_components_forms_Switch_kgb19e: Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line field matching Input styling. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const {
    focus,
    bind
  } = __ds_scope.useInteractive(rest);
  const reactId = React.useId ? React.useId() : 'jf-ta';
  const inputId = id || reactId;
  const borderColor = error ? 'var(--jf-danger)' : focus ? 'var(--jf-blue)' : 'var(--jf-border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-sm)',
      color: 'var(--jf-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled
  }, bind, {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '10px 13px',
      background: disabled ? 'var(--jf-gray-pastel)' : 'var(--jf-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--jf-radius-md)',
      boxShadow: focus ? 'var(--jf-ring)' : 'none',
      outline: 'none',
      resize: 'vertical',
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-regular)',
      fontSize: 'var(--jf-text-base)',
      lineHeight: 'var(--jf-leading-normal)',
      color: 'var(--jf-ink)',
      transition: 'border-color var(--jf-duration-fast) var(--jf-ease), box-shadow var(--jf-duration-fast) var(--jf-ease)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--jf-font-sans)',
      fontSize: 'var(--jf-text-xs)',
      color: error ? 'var(--jf-danger-deep)' : 'var(--jf-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea, __ds_default_components_forms_Textarea_fj26by: Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Breadcrumb — path trail. Items: { label, href? }. Last item is current. */
function Breadcrumb({
  items = [],
  onNavigate,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        fontFamily: 'var(--jf-font-sans)',
        fontWeight: 'var(--jf-weight-bold)',
        fontSize: 'var(--jf-text-sm)',
        color: 'var(--jf-ink)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it, i);
        }
      },
      style: {
        fontFamily: 'var(--jf-font-sans)',
        fontWeight: 'var(--jf-weight-semibold)',
        fontSize: 'var(--jf-text-sm)',
        color: 'var(--jf-text-muted)',
        textDecoration: 'none'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 15,
      color: "var(--jf-text-subtle)"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb, __ds_default_components_navigation_Breadcrumb_1j6vgds: Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PageBtn({
  children,
  active,
  disabled,
  onClick,
  label
}) {
  const {
    hover,
    bind
  } = __ds_scope.useInteractive();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-current": active ? 'page' : undefined,
    disabled: disabled,
    onClick: onClick
  }, bind, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 34,
      height: 34,
      padding: '0 8px',
      background: active ? 'var(--jf-blue)' : hover && !disabled ? 'var(--jf-gray-pastel)' : 'transparent',
      color: active ? 'var(--jf-white)' : disabled ? 'var(--jf-text-subtle)' : 'var(--jf-ink)',
      border: '1px solid ' + (active ? 'transparent' : 'var(--jf-border)'),
      borderRadius: 'var(--jf-radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-sm)',
      transition: 'background var(--jf-duration-fast) var(--jf-ease)'
    }
  }), children);
}

/** Pagination — page controls with prev/next and a compact page range. */
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  siblings = 1,
  style = {},
  ...rest
}) {
  const go = p => {
    if (p >= 1 && p <= pageCount && p !== page) onChange?.(p);
  };
  const pages = [];
  const start = Math.max(2, page - siblings);
  const end = Math.min(pageCount - 1, page + siblings);
  pages.push(1);
  if (start > 2) pages.push('…');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < pageCount - 1) pages.push('…');
  if (pageCount > 1) pages.push(pageCount);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(PageBtn, {
    label: "Previous",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      minWidth: 24,
      textAlign: 'center',
      color: 'var(--jf-text-subtle)',
      fontFamily: 'var(--jf-font-sans)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement(PageBtn, {
    key: p,
    label: `Page ${p}`,
    active: p === page,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement(PageBtn, {
    label: "Next",
    disabled: page >= pageCount,
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { Pagination, __ds_default_components_navigation_Pagination_16xqq9v: Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavItem + Sidebar — the product app's left navigation.
 * NavItem: icon + label, active + hover states, optional trailing badge.
 * Sidebar: vertical container; pass items or compose NavItems as children.
 */
function NavItem({
  icon,
  label,
  active = false,
  badge,
  onClick,
  style = {},
  ...rest
}) {
  const {
    hover,
    bind
  } = __ds_scope.useInteractive();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, bind, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      width: '100%',
      padding: '9px 12px',
      background: active ? 'var(--jf-blue-pastel)' : hover ? 'var(--jf-gray-pastel)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--jf-radius-md)',
      cursor: 'pointer',
      textAlign: 'left',
      color: active ? 'var(--jf-blue-deep)' : 'var(--jf-text-muted)',
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: active ? 'var(--jf-weight-bold)' : 'var(--jf-weight-semibold)',
      fontSize: 'var(--jf-text-base)',
      transition: 'background var(--jf-duration-fast) var(--jf-ease), color var(--jf-duration-fast) var(--jf-ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19,
    strokeWidth: 2,
    color: active ? 'var(--jf-blue)' : 'currentColor'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20,
      height: 19,
      padding: '0 6px',
      borderRadius: 'var(--jf-radius-pill)',
      background: active ? 'var(--jf-blue)' : 'var(--jf-gray-light)',
      color: active ? 'var(--jf-white)' : 'var(--jf-text-muted)',
      fontSize: 'var(--jf-text-2xs)',
      fontWeight: 'var(--jf-weight-bold)'
    }
  }, badge));
}
function Sidebar({
  items,
  value,
  onChange,
  header,
  footer,
  width = 248,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      width,
      height: '100%',
      padding: 14,
      background: 'var(--jf-surface)',
      borderRight: '1px solid var(--jf-border)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px 16px'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      flex: 1
    }
  }, items ? items.map(it => it.section ? /*#__PURE__*/React.createElement("div", {
    key: it.section,
    style: {
      padding: '14px 12px 5px',
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-2xs)',
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--jf-text-subtle)'
    }
  }, it.section) : /*#__PURE__*/React.createElement(NavItem, {
    key: it.value,
    icon: it.icon,
    label: it.label,
    badge: it.badge,
    active: value === it.value,
    onClick: () => onChange?.(it.value)
  })) : children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      marginTop: 8,
      borderTop: '1px solid var(--jf-border)'
    }
  }, footer));
}
Object.assign(__ds_scope, { NavItem, Sidebar, __ds_default_components_navigation_Sidebar_5hywdv: Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stepper — horizontal progress through the hiring journey (Source → Screen
 * → Assess → Interview → Offer → Hire). States derive from `current` index:
 * past = done (blue check), current = active (blue ring), future = upcoming.
 */
function Stepper({
  steps = [],
  current = 0,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%',
      ...style
    }
  }, rest), steps.map((step, i) => {
    const label = typeof step === 'string' ? step : step.label;
    const done = i < current;
    const active = i === current;
    const last = i === steps.length - 1;
    const dotColor = done || active ? 'var(--jf-blue)' : 'var(--jf-gray-light)';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: last ? '0 0 auto' : 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: last ? 'auto' : 0,
        flex: last ? '0' : '1'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        flexShrink: 0,
        borderRadius: '50%',
        background: done ? 'var(--jf-blue)' : 'var(--jf-surface)',
        border: `2px solid ${dotColor}`,
        color: done ? 'var(--jf-white)' : active ? 'var(--jf-blue)' : 'var(--jf-text-subtle)',
        fontFamily: 'var(--jf-font-sans)',
        fontWeight: 'var(--jf-weight-bold)',
        fontSize: 'var(--jf-text-sm)',
        boxShadow: active ? '0 0 0 4px var(--jf-blue-pastel)' : 'none'
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 15,
      strokeWidth: 3,
      color: "var(--jf-white)"
    }) : i + 1), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        background: i < current ? 'var(--jf-blue)' : 'var(--jf-gray-light)',
        margin: '0 6px'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 8,
        padding: '0 4px',
        fontFamily: 'var(--jf-font-sans)',
        fontWeight: active ? 'var(--jf-weight-bold)' : 'var(--jf-weight-semibold)',
        fontSize: 'var(--jf-text-xs)',
        color: active ? 'var(--jf-blue-deep)' : done ? 'var(--jf-ink)' : 'var(--jf-text-subtle)',
        textAlign: 'center',
        whiteSpace: 'nowrap'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Stepper, __ds_default_components_navigation_Stepper_cn800s: Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline tab bar. Controlled (`value`+`onChange`) or uncontrolled
 * (`defaultValue`). Items: { value, label, icon?, count? }.
 */
function Tab({
  item,
  active,
  onSelect
}) {
  const {
    hover,
    bind
  } = __ds_scope.useInteractive();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": active,
    onClick: () => onSelect(item.value)
  }, bind, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '0 2px 12px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--jf-font-sans)',
      fontWeight: 'var(--jf-weight-bold)',
      fontSize: 'var(--jf-text-base)',
      color: active ? 'var(--jf-blue-deep)' : hover ? 'var(--jf-ink)' : 'var(--jf-text-muted)',
      transition: 'color var(--jf-duration-fast) var(--jf-ease)'
    }
  }), item.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 17,
    strokeWidth: 2
  }), item.label, item.count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20,
      height: 18,
      padding: '0 6px',
      borderRadius: 'var(--jf-radius-pill)',
      background: active ? 'var(--jf-blue)' : 'var(--jf-gray-light)',
      color: active ? 'var(--jf-white)' : 'var(--jf-text-muted)',
      fontSize: 'var(--jf-text-2xs)',
      fontWeight: 'var(--jf-weight-bold)'
    }
  }, item.count), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 3,
      borderRadius: '3px 3px 0 0',
      background: active ? 'var(--jf-blue)' : 'transparent',
      transition: 'background var(--jf-duration-fast) var(--jf-ease)'
    }
  }));
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const current = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      borderBottom: '1px solid var(--jf-border)',
      ...style
    }
  }, rest), items.map(item => /*#__PURE__*/React.createElement(Tab, {
    key: item.value,
    item: item,
    active: current === item.value,
    onSelect: select
  })));
}
Object.assign(__ds_scope, { Tabs, __ds_default_components_navigation_Tabs_14bb2wz: Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/AnalyticsScreen.jsx
try { (() => {
// AnalyticsScreen — closed-loop reporting: turnover by cohort, fit distribution,
// source effectiveness. Charts are simple, on-brand CSS bars (no chart lib).
const {
  Card,
  CardHeader,
  StatCard,
  Badge,
  Button,
  Select
} = window.JourneyfrontDesignSystem_d988c9;
function AnalyticsScreen() {
  const D = window.JF_DATA;
  const maxFit = Math.max(...D.fitDistribution);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--jf-text-muted)'
    }
  }, "Pre-hire assessment data linked to post-hire outcomes \xB7 last 12 months"), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Last 12 months', 'This quarter', 'Year to date'],
    defaultValue: "Last 12 months"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Hires analyzed",
    value: "1,284",
    delta: "18%",
    icon: "users"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Prediction accuracy",
    value: "92%",
    delta: "5pt",
    icon: "target",
    caption: "vs. outcomes"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "90-day turnover",
    value: "18%",
    delta: "11pt",
    deltaDirection: "down",
    goodDirection: "down",
    icon: "trending-down"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Ramp to competency",
    value: "\u221233%",
    delta: "33%",
    deltaDirection: "down",
    goodDirection: "down",
    icon: "zap",
    caption: "faster"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "90-day turnover by cohort",
    subtitle: "Before vs. after Journeyfront",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontSize: 12,
        color: 'var(--jf-text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 2,
        background: 'var(--jf-gray-mid)'
      }
    }), "Before"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 2,
        background: 'var(--jf-blue)'
      }
    }), "After"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 22,
      height: 180,
      padding: '0 4px'
    }
  }, D.turnoverByCohort.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 150,
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: c.before / 50 * 150 + 'px',
      background: 'var(--jf-gray-mid)',
      borderRadius: '5px 5px 0 0'
    },
    title: c.before + '%'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: c.after / 50 * 150 + 'px',
      background: 'var(--jf-blue)',
      borderRadius: '5px 5px 0 0'
    },
    title: c.after + '%'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--jf-text-muted)'
    }
  }, c.label))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Predicted-fit distribution",
    subtitle: "All assessed candidates this quarter"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 5,
      height: 180,
      padding: '0 4px'
    }
  }, D.fitDistribution.map((v, i) => {
    const band = i >= 7 ? 'var(--jf-green-bright)' : i >= 5 ? 'var(--jf-blue)' : i >= 3 ? 'var(--jf-blue-light)' : 'var(--jf-gray-light)';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: v / maxFit * 150 + 'px',
        background: band,
        borderRadius: '4px 4px 0 0'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--jf-text-subtle)'
      }
    }, i * 10));
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Source effectiveness",
    subtitle: "Quality of hire vs. volume \u2014 know which channels are worth the budget",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "arrow-up-right"
    }, "Full report")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, D.sources.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 110,
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--jf-ink)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 26,
      background: 'var(--jf-gray-pastel)',
      borderRadius: 6,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s.quality + '%',
      height: '100%',
      background: s.quality >= 75 ? 'var(--jf-green-bright)' : 'var(--jf-blue)',
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'white'
    }
  }, s.quality, " fit"))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 90,
      textAlign: 'right',
      fontSize: 13,
      color: 'var(--jf-text-muted)'
    }
  }, s.volume, "% volume"))))));
}
window.AnalyticsScreen = AnalyticsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/AnalyticsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/AppShell.jsx
try { (() => {
// AppShell — sidebar + topbar layout for the Journeyfront platform.
const {
  Sidebar,
  Avatar,
  IconButton,
  SearchInput,
  Badge,
  Logo
} = window.JourneyfrontDesignSystem_d988c9;
function AppShell({
  view,
  onNav,
  title,
  breadcrumb,
  children,
  topActions
}) {
  const navItems = [{
    value: 'dashboard',
    label: 'Dashboard',
    icon: 'home'
  }, {
    value: 'pipeline',
    label: 'Candidates',
    icon: 'users',
    badge: 248
  }, {
    value: 'assessments',
    label: 'Assessments',
    icon: 'clipboard-check'
  }, {
    value: 'interviews',
    label: 'Interviews',
    icon: 'message-square',
    badge: 6
  }, {
    section: 'Insights'
  }, {
    value: 'analytics',
    label: 'Analytics',
    icon: 'bar-chart'
  }, {
    value: 'sources',
    label: 'Sources',
    icon: 'target'
  }, {
    section: 'Workspace'
  }, {
    value: 'jobs',
    label: 'Jobs & classes',
    icon: 'briefcase'
  }, {
    value: 'settings',
    label: 'Settings',
    icon: 'settings'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--jf-surface-subtle)',
      fontFamily: 'var(--jf-font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    value: view,
    onChange: onNav,
    items: navItems,
    header: /*#__PURE__*/React.createElement(Logo, {
      height: 26,
      basePath: "../../assets/logos/"
    }),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '4px 6px'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Renee Okafor",
      size: "sm",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        color: 'var(--jf-ink)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, "Renee Okafor"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--jf-text-muted)'
      }
    }, "KeHE \xB7 TA Lead")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "log-out",
      label: "Sign out",
      size: "sm"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      height: 64,
      background: 'var(--jf-surface)',
      borderBottom: '1px solid var(--jf-border)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, breadcrumb, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--jf-text-heading)',
      lineHeight: 1.1
    }
  }, title)), /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search candidates, jobs\u2026",
    width: 260,
    size: "sm"
  }), topActions, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    variant: "outline"
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 24
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/CandidateScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// CandidateScreen — candidate profile with predicted fit, assessment breakdown,
// hiring-journey stepper and a structured-interview scorecard.
const {
  Button,
  Avatar,
  FitScore,
  Stepper,
  Card,
  CardHeader,
  Badge,
  Breadcrumb,
  IconButton,
  ProgressBar,
  Tag
} = window.JourneyfrontDesignSystem_d988c9;
function ScoreBar({
  label,
  score,
  note
}) {
  const color = score >= 80 ? 'var(--jf-green-bright)' : score >= 60 ? 'var(--jf-blue)' : 'var(--jf-pink-mid)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--jf-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 15,
      color
    }
  }, score)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 999,
      background: 'var(--jf-gray-light)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: score + '%',
      height: '100%',
      borderRadius: 999,
      background: color
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--jf-text-muted)'
    }
  }, note));
}
function CandidateScreen({
  candidate,
  onBack
}) {
  const D = window.JF_DATA;
  const c = candidate || D.candidates[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Candidates'
    }, {
      label: 'Retail Support · Q3'
    }, {
      label: c.name
    }],
    onNavigate: onBack
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 26,
      fontWeight: 900,
      color: 'var(--jf-text-heading)',
      letterSpacing: '-0.01em'
    }
  }, c.name), /*#__PURE__*/React.createElement(Badge, {
    tone: c.stageTone,
    dot: true
  }, c.stage), c.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "green"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--jf-text-muted)',
      marginTop: 4
    }
  }, c.role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 10,
      fontSize: 13,
      color: 'var(--jf-text-muted)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, c.email), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.location), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Source: ", c.source), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Applied ", c.applied))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(FitScore, {
    score: c.fit,
    size: 104
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "check"
  }, "Advance"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "message-square"
  }, "Message"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "x"
  }, "Reject")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      paddingTop: 20,
      borderTop: '1px solid var(--jf-border)'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    current: c.stage === 'Offer' ? 4 : c.stage === 'Interview' ? 3 : 2,
    steps: ['Source', 'Screen', 'Assess', 'Interview', 'Offer', 'Hire']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Assessment results",
    subtitle: "Predicted on-the-job success, calibrated to your top performers",
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      variant: "solid"
    }, "Top 10%")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, D.assessment.map(a => /*#__PURE__*/React.createElement(ScoreBar, _extends({
    key: a.label
  }, a))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Predicted outcomes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(FitScore, {
    score: Math.min(96, c.fit + 4),
    variant: "meter",
    caption: "Predicted performance"
  }), /*#__PURE__*/React.createElement(FitScore, {
    score: Math.max(40, c.fit - 8),
    variant: "meter",
    caption: "Predicted 90-day retention"
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Interview scorecard",
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      label: "Add",
      size: "sm"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, D.interviewers.map(iv => /*#__PURE__*/React.createElement("div", {
    key: iv.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: iv.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--jf-ink)'
    }
  }, iv.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--jf-text-muted)'
    }
  }, iv.role)), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, iv.score.toFixed(1), " / 5"))))))));
}
window.CandidateScreen = CandidateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/CandidateScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/DashboardScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DashboardScreen — recruiter home: KPIs, active classes, top candidates.
const {
  StatCard,
  Card,
  CardHeader,
  ProgressBar,
  CandidateRow,
  Button,
  Badge,
  Alert
} = window.JourneyfrontDesignSystem_d988c9;
function DashboardScreen({
  onOpenCandidate,
  onNav
}) {
  const D = window.JF_DATA;
  const topCandidates = D.candidates.slice().sort((a, b) => b.fit - a.fit).slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "2 hiring classes start this week",
    onClose: () => {}
  }, "Retail Support \xB7 Q3 (KeHE) and BPO Bilingual \xB7 Cohort 7 reach their synchronized start dates. 4 offers are still awaiting signature."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, D.stats.map(s => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: s.label
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Active hiring classes",
    subtitle: "Cohort-based, synchronized starts",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => onNav && onNav('jobs')
    }, "All classes")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, D.classes.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--jf-ink)'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--jf-text-muted)',
      marginLeft: 8
    }
  }, c.client)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--jf-text-muted)'
    }
  }, c.hired, "/", c.target, " hired \xB7 starts ", c.start)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.fill,
    tone: c.fill >= 70 ? 'green' : 'blue',
    height: 9
  }))))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      opacity: 0.7,
      marginBottom: 10
    }
  }, "This quarter"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, "$32M"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      opacity: 0.85,
      marginTop: 6
    }
  }, "projected savings from reduced turnover across all clients"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.16)',
      margin: '18px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 900
    }
  }, "4,812"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.7
    }
  }, "candidates assessed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 900
    }
  }, "92%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.7
    }
  }, "prediction accuracy"))))), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 14px',
      borderBottom: '1px solid var(--jf-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--jf-text-heading)'
    }
  }, "Top predicted-fit candidates"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--jf-text-muted)',
      marginTop: 2
    }
  }, "Ready to advance \xB7 calibrated to your workforce")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: "chevron-right",
    onClick: () => onNav && onNav('pipeline')
  }, "View pipeline")), topCandidates.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      borderTop: i ? '1px solid var(--jf-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(CandidateRow, _extends({}, c, {
    onClick: () => onOpenCandidate && onOpenCandidate(c)
  }))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/PipelineScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// PipelineScreen — candidate pipeline with stage tabs, filters and list.
const {
  Tabs,
  Button,
  Tag,
  CandidateRow,
  Card,
  Pagination,
  Select,
  IconButton
} = window.JourneyfrontDesignSystem_d988c9;
function PipelineScreen({
  onOpenCandidate
}) {
  const D = window.JF_DATA;
  const [tab, setTab] = React.useState('all');
  const [page, setPage] = React.useState(1);
  const [filters, setFilters] = React.useState(['Bilingual', 'Fit ≥ 70']);
  const stages = {
    all: D.candidates,
    sourced: D.candidates.filter(c => ['Sourced', 'Screening'].includes(c.stage)),
    assessed: D.candidates.filter(c => c.stage === 'Assessed'),
    interview: D.candidates.filter(c => c.stage === 'Interview'),
    offer: D.candidates.filter(c => ['Offer', 'Hired'].includes(c.stage))
  };
  const list = stages[tab] || D.candidates;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      borderBottom: 'none'
    },
    items: [{
      value: 'all',
      label: 'All',
      count: 248
    }, {
      value: 'sourced',
      label: 'Sourced',
      count: 96
    }, {
      value: 'assessed',
      label: 'Assessed',
      count: 84
    }, {
      value: 'interview',
      label: 'Interview',
      count: 18
    }, {
      value: 'offer',
      label: 'Offer',
      count: 12
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: "user-plus"
  }, "Add candidate"))), /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderBottom: '1px solid var(--jf-border)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--jf-text-muted)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Filters"), filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    tone: "blue",
    onRemove: () => setFilters(filters.filter(x => x !== f))
  }, f)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "plus"
  }, "Add filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Highest fit', 'Newest first', 'Name A–Z'],
    defaultValue: "Highest fit"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "sliders",
    label: "Columns",
    variant: "outline",
    size: "sm"
  })), list.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      borderTop: i ? '1px solid var(--jf-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(CandidateRow, _extends({}, c, {
    onClick: () => onOpenCandidate && onOpenCandidate(c)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px',
      borderTop: '1px solid var(--jf-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--jf-text-muted)'
    }
  }, "Showing ", list.length, " of 248 candidates"), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 18,
    onChange: setPage
  }))));
}
window.PipelineScreen = PipelineScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/PipelineScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/data.js
try { (() => {
// Mock data for the Journeyfront platform UI kit (illustrative, not real people).
window.JF_DATA = function () {
  const candidates = [{
    id: 1,
    name: 'Marcus Delgado',
    role: 'Customer Support Agent',
    meta: 'Applied 2d ago · Remote',
    fit: 91,
    stage: 'Assessed',
    stageTone: 'info',
    tags: ['Bilingual'],
    location: 'Austin, TX',
    source: 'Indeed',
    applied: 'Aug 12',
    email: 'm.delgado@example.com'
  }, {
    id: 2,
    name: 'Priya Shah',
    role: 'Tier-2 Technical Support',
    meta: 'Applied 4d ago · Hybrid',
    fit: 84,
    stage: 'Interview',
    stageTone: 'purple',
    tags: ['Top 10%'],
    location: 'Phoenix, AZ',
    source: 'Referral',
    applied: 'Aug 10',
    email: 'priya.shah@example.com'
  }, {
    id: 3,
    name: 'Devon Walker',
    role: 'Collections Specialist',
    meta: 'Applied 1w ago · On-site',
    fit: 67,
    stage: 'Assessed',
    stageTone: 'info',
    tags: [],
    location: 'Tampa, FL',
    source: 'LinkedIn',
    applied: 'Aug 7',
    email: 'd.walker@example.com'
  }, {
    id: 4,
    name: 'Aisha Bello',
    role: 'Customer Support Agent',
    meta: 'Applied 3d ago · Remote',
    fit: 88,
    stage: 'Offer',
    stageTone: 'success',
    tags: ['Bilingual', 'Top 10%'],
    location: 'Remote',
    source: 'Job fair',
    applied: 'Aug 11',
    email: 'a.bello@example.com'
  }, {
    id: 5,
    name: 'Tyler Nguyen',
    role: 'Sales Development Rep',
    meta: 'Applied 5d ago · Hybrid',
    fit: 73,
    stage: 'Screening',
    stageTone: 'neutral',
    tags: [],
    location: 'Denver, CO',
    source: 'Indeed',
    applied: 'Aug 9',
    email: 't.nguyen@example.com'
  }, {
    id: 6,
    name: 'Sofia Romero',
    role: 'Customer Support Agent',
    meta: 'Applied 6d ago · Remote',
    fit: 52,
    stage: 'Screening',
    stageTone: 'neutral',
    tags: [],
    location: 'Remote',
    source: 'ZipRecruiter',
    applied: 'Aug 8',
    email: 's.romero@example.com'
  }, {
    id: 7,
    name: 'Jamal Carter',
    role: 'Tier-1 Help Desk',
    meta: 'Applied 1d ago · On-site',
    fit: 79,
    stage: 'Assessed',
    stageTone: 'info',
    tags: ['Top 25%'],
    location: 'Atlanta, GA',
    source: 'Referral',
    applied: 'Aug 13',
    email: 'j.carter@example.com'
  }, {
    id: 8,
    name: 'Hannah Kim',
    role: 'Collections Specialist',
    meta: 'Applied 1w ago · Remote',
    fit: 41,
    stage: 'Sourced',
    stageTone: 'neutral',
    tags: [],
    location: 'Remote',
    source: 'LinkedIn',
    applied: 'Aug 6',
    email: 'h.kim@example.com'
  }];
  const stats = [{
    label: 'Open requisitions',
    value: '34',
    delta: '6',
    deltaDirection: 'up',
    goodDirection: 'up',
    icon: 'briefcase',
    caption: 'across 8 clients'
  }, {
    label: '90-day turnover',
    value: '−29%',
    delta: '11pt',
    deltaDirection: 'down',
    goodDirection: 'down',
    icon: 'trending-down',
    caption: 'vs. last year'
  }, {
    label: 'Time to hire',
    value: '3.2d',
    delta: '40%',
    deltaDirection: 'down',
    goodDirection: 'down',
    icon: 'clock',
    caption: 'from 12 days'
  }, {
    label: 'Avg. quality of hire',
    value: '87',
    delta: '12%',
    deltaDirection: 'up',
    goodDirection: 'up',
    icon: 'award',
    caption: 'predicted fit'
  }];
  const classes = [{
    name: 'Retail Support · Q3',
    client: 'KeHE',
    target: 12,
    hired: 9,
    offer: 2,
    start: 'Aug 19',
    fill: 75
  }, {
    name: 'BPO Bilingual · Cohort 7',
    client: 'Activus Connect',
    target: 24,
    hired: 14,
    offer: 4,
    start: 'Aug 26',
    fill: 58
  }, {
    name: 'Healthcare Intake',
    client: 'Everise',
    target: 18,
    hired: 6,
    offer: 3,
    start: 'Sep 2',
    fill: 33
  }];

  // assessment breakdown for the profile screen
  const assessment = [{
    label: 'Behavioral fit',
    score: 92,
    note: 'Reliability, customer focus'
  }, {
    label: 'Job simulation',
    score: 88,
    note: 'Call handling scenario'
  }, {
    label: 'Typing & data entry',
    score: 81,
    note: '64 WPM · 98% accuracy'
  }, {
    label: 'Language (CEFR)',
    score: 95,
    note: 'C1 — English & Spanish'
  }, {
    label: 'Cognitive ability',
    score: 76,
    note: 'Problem solving'
  }];
  const interviewers = [{
    name: 'Renee Okafor',
    role: 'Hiring Manager',
    score: 4.5
  }, {
    name: 'Sam Patel',
    role: 'Team Lead',
    score: 4.0
  }];

  // analytics
  const turnoverByCohort = [{
    label: 'Q1',
    before: 38,
    after: 27
  }, {
    label: 'Q2',
    before: 41,
    after: 24
  }, {
    label: 'Q3',
    before: 36,
    after: 19
  }, {
    label: 'Q4',
    before: 39,
    after: 18
  }];
  const fitDistribution = [4, 9, 16, 28, 34, 41, 33, 22, 12, 6];
  const sources = [{
    name: 'Referral',
    quality: 86,
    volume: 31
  }, {
    name: 'Indeed',
    quality: 71,
    volume: 44
  }, {
    name: 'LinkedIn',
    quality: 68,
    volume: 22
  }, {
    name: 'Job fair',
    quality: 79,
    volume: 14
  }, {
    name: 'ZipRecruiter',
    quality: 54,
    volume: 19
  }];
  return {
    candidates,
    stats,
    classes,
    assessment,
    interviewers,
    turnoverByCohort,
    fitDistribution,
    sources
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/site-end.jsx
try { (() => {
// Marketing site — end: CTA band and footer.
const {
  Button,
  Logo,
  Icon
} = window.JourneyfrontDesignSystem_d988c9;
function CTASection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--jf-radius-xl)',
      background: 'var(--jf-blue-dark)',
      color: 'var(--jf-white)',
      padding: '64px 56px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/graphics/dot-arch-white.svg",
    alt: "",
    style: {
      position: 'absolute',
      right: -50,
      top: -50,
      height: 365,
      width: 'auto',
      opacity: 0.13
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 5,
      background: 'var(--jf-gradient-full)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 46,
      lineHeight: 1.05,
      fontWeight: 900,
      letterSpacing: '-0.025em'
    }
  }, "See it with your operation in mind."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 19,
      lineHeight: 1.55,
      opacity: 0.85
    }
  }, "We'll walk through your client programs, your volume requirements and your biggest hiring pain points \u2014 and model your projected savings using your own turnover and cost-per-hire data."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right"
  }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'transparent',
      color: 'white',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "Compare platforms")))));
}
function SiteFooter() {
  const cols = [{
    h: 'Platform',
    items: ['Applicant tracking', 'Assessments', 'Structured interviews', 'Automation', 'Analytics']
  }, {
    h: 'Solutions',
    items: ['BPO & contact centers', 'Healthcare staffing', 'Retail', 'Logistics']
  }, {
    h: 'Company',
    items: ['Customers', 'Careers', 'News', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--jf-ink)',
      color: 'var(--jf-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 32px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 30,
    basePath: "../../assets/logos/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 14,
      lineHeight: 1.6,
      opacity: 0.6,
      maxWidth: 260
    }
  }, "The intelligent hiring platform for high-volume recruitment. Hire the right people faster, and keep them longer.")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      opacity: 0.55,
      marginBottom: 14
    }
  }, col.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.8)',
      textDecoration: 'none'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '20px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 13,
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Journeyfront. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Security")))));
}
window.CTASection = CTASection;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-end.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-mid.jsx
try { (() => {
// Marketing site — middle: feature pillars, predictive highlight, testimonial.
const {
  Button,
  Badge,
  FitScore,
  Icon,
  Card,
  CandidateRow,
  StatCard,
  ProgressBar,
  Stepper,
  Avatar,
  Callout
} = window.JourneyfrontDesignSystem_d988c9;

// Real product screens (assets/screens/) sit on a dot-arch connective layer.
function ProductShot({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/graphics/dot-arch.svg",
    alt: "",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      height: '118%',
      width: 'auto',
      transform: 'translate(-50%,-50%)',
      zIndex: 0,
      pointerEvents: 'none'
    }
  }), children);
}
const jfShotStyle = {
  position: 'relative',
  zIndex: 1,
  maxWidth: '100%',
  filter: 'drop-shadow(0 14px 30px rgba(17,70,91,0.16))'
};
function FeatureRow({
  flip,
  eyebrow,
  icon,
  title,
  body,
  bullets,
  visual
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--jf-blue)',
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17
  }), " ", eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontSize: 38,
      lineHeight: 1.08,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      color: 'var(--jf-text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--jf-text-muted)'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      marginTop: 22
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20,
    color: "var(--jf-green-bright)",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--jf-ink)',
      lineHeight: 1.45
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 1 : 2
    }
  }, visual));
}
function PlatformFeatures() {
  const D = window.JF_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 44,
      fontWeight: 900,
      letterSpacing: '-0.025em',
      color: 'var(--jf-text-heading)'
    }
  }, "One platform, end to end"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--jf-text-muted)'
    }
  }, "Most ATSs give you tools to manage hiring. Journeyfront brings together everything needed to execute it \u2014 sourcing, screening, assessments, scheduling, offers and analytics \u2014 learn from it, and make every future hire better than the last.")), /*#__PURE__*/React.createElement(Callout, {
    icon: "zap",
    title: "Built as an assessment company first",
    style: {
      maxWidth: 860,
      margin: '0 auto'
    }
  }, "Predictive candidate fit isn't a bolt-on \u2014 it's baked into the platform architecture. Every hiring class connects pre-hire scores to post-hire outcomes, so your models get sharper over time."), /*#__PURE__*/React.createElement(FeatureRow, {
    eyebrow: "Source & Screen",
    icon: "target",
    title: "Your best candidates rise to the top automatically",
    body: "Publish to 200+ job boards, then auto-screen, rank and advance or reject in real time \u2014 all tied to candidate actions and scores.",
    bullets: ['Precise source attribution across every channel', 'Real-time ranking against your criteria', 'Bulk actions that clear the funnel fast'],
    visual: /*#__PURE__*/React.createElement(ProductShot, null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/screens/screen-applicant-list.png",
      alt: "Sorted applicant list \u2014 candidates ranked by score",
      style: jfShotStyle
    }))
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    flip: true,
    eyebrow: "Assess & Predict",
    icon: "gauge",
    title: "Know what they'll do \u2014 not just what they've done",
    body: "Behavioral assessments, job simulations and skills tests, calibrated to your own top performers. Resumes tell you the past; Journeyfront predicts the role.",
    bullets: ['Customized to your workforce data, not generic benchmarks', 'Predicts performance and 90-day retention', 'Fraud detection, validity studies and bias mitigation built in'],
    visual: /*#__PURE__*/React.createElement(ProductShot, null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/screens/screen-assessment-personality.png",
      alt: "Personality assessment on mobile",
      style: {
        ...jfShotStyle,
        maxHeight: 380
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/screens/screen-language-test.png",
      alt: "Spoken language test on mobile",
      style: {
        ...jfShotStyle,
        maxHeight: 380,
        marginTop: 44
      }
    }))
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    eyebrow: "Automate & Accelerate",
    icon: "zap",
    title: "Keep every candidate \u2014 and class \u2014 moving",
    body: "High-volume hiring gets messy fast. Automation keeps every candidate moving and every step accounted for \u2014 auto-advancing, scheduling and triggering communications off scores and actions \u2014 so your team stays focused on what only people can do.",
    bullets: ['Cohort-based hiring classes with synchronized starts', 'Branded offers and e-signature, no back-and-forth', 'Client-specific hiring recipes for every program'],
    visual: /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--jf-ink)',
        marginBottom: 16
      }
    }, "Retail Support \xB7 Q3 \u2014 KeHE"), /*#__PURE__*/React.createElement(Stepper, {
      current: 4,
      steps: ['Source', 'Screen', 'Assess', 'Interview', 'Offer', 'Hire']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: 75,
      label: "Class headcount \xB7 9 of 12",
      showValue: true,
      tone: "green"
    })))
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    flip: true,
    eyebrow: "Organize & Manage",
    icon: "grid",
    title: "One place for everything \u2014 and everyone",
    body: "Juggling separate systems for applications, assessments, interviews and offers creates chaos at scale. One unified workflow keeps candidates, hiring classes and client programs organized and moving forward.",
    bullets: ['Candidate database with custom views, bulk filtering and bulk actions', 'Templates for communications, screening plans, offers and onboarding', 'Recruiter dashboards that surface what needs attention next'],
    visual: /*#__PURE__*/React.createElement(ProductShot, null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/screens/screen-composite-devices.png",
      alt: "Journeyfront on desktop and mobile",
      style: jfShotStyle
    }))
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    eyebrow: "Interview & Decide",
    icon: "clipboard-check",
    title: "Decisions backed by scorecards, not gut feel",
    body: "Structured interview guides and candidate scorecards put every score, input and note in one centralized place \u2014 so hiring teams decide with data, quickly.",
    bullets: ['Role-specific interview guides with rated questions', 'Scorecards that combine assessments, interviews and screening', 'Interviewer effectiveness tracked over time'],
    visual: /*#__PURE__*/React.createElement(ProductShot, null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/screens/screen-interview-guide.png",
      alt: "Interview guide with rated questions",
      style: jfShotStyle
    }))
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    flip: true,
    eyebrow: "Monitor & Improve",
    icon: "trending-up",
    title: "Every hiring class gets more predictive",
    body: "Journeyfront connects pre-hire scores to post-hire outcomes, then feeds that back into your models \u2014 a closed loop that sharpens with every cohort.",
    bullets: ['Post-hire performance and turnover tracking', 'Attributes correlated with success, surfaced for you', 'Process and interviewer effectiveness insights'],
    visual: /*#__PURE__*/React.createElement(ProductShot, null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/screens/screen-candidate-dashboard.png",
      alt: "Candidate overview dashboard \u2014 funnel and turnover",
      style: jfShotStyle
    }))
  }));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--jf-surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: '72px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 40,
    color: "var(--jf-blue)"
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '18px 0 0',
      fontSize: 30,
      lineHeight: 1.35,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--jf-ink)'
    }
  }, "The candidates we're now seeing with Journeyfront are higher caliber \u2014 a direct testament to the higher retention we're seeing across every location."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "VP Talent",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: 'var(--jf-ink)'
    }
  }, "VP of Talent Acquisition"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--jf-text-muted)'
    }
  }, "KeHE Distributors"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '34px auto 0',
      paddingTop: 26,
      borderTop: '1px solid rgba(17,70,91,0.12)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.5,
      fontWeight: 600,
      color: 'var(--jf-text)'
    }
  }, "\u201CWe're in the people business. The more we automate, the more time our recruiters can spend with people instead of systems. Journeyfront made that possible from day one.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--jf-ink)'
    }
  }, "Director of Recruiting ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--jf-text-muted)'
    }
  }, "\xB7 Activus Connect")))));
}
window.PlatformFeatures = PlatformFeatures;
window.Testimonial = Testimonial;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-top.jsx
try { (() => {
// Marketing site — top: nav, hero (brand photography composition), trust + stats.
const {
  Button,
  Badge,
  FitScore,
  Logo,
  Icon,
  Avatar
} = window.JourneyfrontDesignSystem_d988c9;
function SiteNav() {
  const links = ['Platform', 'BPO', 'Customers', 'Pricing', 'Resources'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'saturate(180%) blur(12px)',
      borderBottom: '1px solid var(--jf-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 70,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 30,
    basePath: "../../assets/logos/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--jf-text-muted)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--jf-ink)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconRight: "arrow-right"
  }, "Book a demo")));
}
function SiteHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 13px',
      borderRadius: 999,
      background: 'var(--jf-blue-pastel)',
      color: 'var(--jf-blue-deep)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.02em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  }), " Intelligent hiring, since 2017"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontSize: 64,
      lineHeight: 0.98,
      fontWeight: 900,
      letterSpacing: '-0.025em',
      color: 'var(--jf-text-heading)'
    }
  }, "Stop guessing.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--jf-blue)'
    }
  }, "Start predicting.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--jf-text-muted)',
      maxWidth: 480
    }
  }, "The ATS with predictive assessments built in \u2014 and the automation they unlock. Source, screen, assess, schedule and offer in one platform that knows who will perform and stay, and keeps every candidate moving automatically."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right"
  }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: "activity"
  }, "See the platform")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 30,
      fontSize: 14,
      color: 'var(--jf-text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 17,
    color: "var(--jf-green-bright)"
  }), " 29% less turnover"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 17,
    color: "var(--jf-green-bright)"
  }), " Same-day hiring"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 17,
    color: "var(--jf-green-bright)"
  }), " 50+ countries"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '14px 0 0 0',
      borderRadius: 'var(--jf-radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--jf-shadow-xl)',
      background: 'var(--jf-blue-dark)',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/call-center.web.jpg",
    alt: "Contact center team",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1) brightness(1.25) contrast(0.75) blur(3px)',
      transform: 'scale(1.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--jf-blue)',
      mixBlendMode: 'multiply',
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(105deg, rgba(232,246,252,0.25) 0%, rgba(232,246,252,0) 55%, rgba(255,255,255,0.35) 100%)'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/graphics/dot-arch-white.svg",
    alt: "",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      height: 560,
      width: 'auto',
      transform: 'translate(-50%,-50%) rotate(90deg)',
      opacity: 0.9,
      zIndex: 1,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/agent-cutout.web.png",
    alt: "Customer support agent",
    style: {
      position: 'absolute',
      bottom: 0,
      right: -6,
      height: 430,
      objectFit: 'contain',
      filter: 'drop-shadow(0 18px 30px rgba(17,70,91,0.22))',
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -14,
      top: 70,
      background: 'var(--jf-surface)',
      borderRadius: 'var(--jf-radius-lg)',
      boxShadow: 'var(--jf-shadow-lg)',
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: 230,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(FitScore, {
    score: 91,
    size: 64,
    showLabel: false
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--jf-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, "Predicted fit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 900,
      color: 'var(--jf-ink)'
    }
  }, "Strong match"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--jf-text-subtle)'
    }
  }, "92% likely to stay 90+ days"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 10,
      bottom: 26,
      background: 'var(--jf-surface)',
      borderRadius: 'var(--jf-radius-md)',
      boxShadow: 'var(--jf-shadow-md)',
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18,
    color: "var(--jf-green-bright)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--jf-ink)'
    }
  }, "Validated & bias-checked"))));
}
function TrustBand() {
  const clients = ['KeHE', 'Activus Connect', 'Everise', 'KM2 Solutions', 'Conduent'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '20px 32px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--jf-text-subtle)',
      marginBottom: 20
    }
  }, "Trusted by teams hiring at volume"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 48,
      flexWrap: 'wrap',
      opacity: 0.7
    }
  }, clients.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: 'var(--jf-gray-bright)',
      letterSpacing: '-0.01em'
    }
  }, c))));
}
function StatsBand() {
  const stats = [{
    v: '29%',
    l: 'average turnover reduction'
  }, {
    v: '12d → same-day',
    l: 'time to hire'
  }, {
    v: '$32M+',
    l: 'annual client savings'
  }, {
    v: '50+',
    l: 'countries, millions of candidates'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--jf-blue-dark)',
      color: 'var(--jf-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '46px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 900,
      letterSpacing: '-0.02em'
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      opacity: 0.78,
      marginTop: 4
    }
  }, s.l)))));
}
window.SiteNav = SiteNav;
window.SiteHero = SiteHero;
window.TrustBand = TrustBand;
window.StatsBand = StatsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CandidateRow = __ds_scope.CandidateRow;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.FitScore = __ds_scope.FitScore;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
