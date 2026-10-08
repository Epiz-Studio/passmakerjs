// ============================================================================
//  CONFIG  -  edit this part
// ============================================================================
const CONFIG = {

  // --------------------------------------------------------------------------
  // MODE
  //   'multi'  - many Minecraft servers share this site. Each has its own server ID,
  //              token and codes; players go to /<serverid>; people can create servers.
  //   'single' - this site is for ONE server only. No server IDs for players: the home
  //              page goes straight to the code box. Nobody can create servers; the
  //              panel password and the plugin token are set below, in this file.
  // --------------------------------------------------------------------------
  mode: 'multi',

  // Used only when mode is 'single'.
  single: {
    id: 'main',        // internal name, 3-24 chars: a-z 0-9 - _   (players never see it)  
    password: '',      // REQUIRED: password for /login -> /panel (min length: see limits.passwordMin) OR make a secret called 'SINGLE_PASSWORD'
    token: '',         // REQUIRED: the token you give the plugin with /pass token <token>. OR make a secret called 'SINGLE_TOKEN'
                       //   Make a long random one, e.g. "pm_" followed by 48 random letters/digits.
  },

  // --------------------------------------------------------------------------
  // BRANDING
  // --------------------------------------------------------------------------
  branding: {
    siteName: 'PassMaker',      // shown top-left, in the browser tab and in {site}
    logoEmoji: '',              // e.g. '🔑' - shown before the name. Leave '' for none.
    logoUrl: '',                // https:// image shown instead of the emoji (max 32px tall). '' = none
    showSiteName: true,         // false = show only the logo
    faviconEmoji: '🔑',         // browser tab icon
    faviconUrl: 'https://raw.githubusercontent.com/Epiz-Studio/favicon/refs/heads/main/passmaker/favicon.ico',             // https:// icon; wins over faviconEmoji when set
  },

  // --------------------------------------------------------------------------
  // CONTACT (footer). Set enabled:false to remove the email completely.
  // --------------------------------------------------------------------------
  contact: {
    enabled: true,
    email: 'epizmc@atomicmail.io',
    label: 'Questions?',        // text before the email address
    footerText: '',             // extra plain text line in the footer, '' = none
  },

  // --------------------------------------------------------------------------
  // BUTTONS / PAGES
  //   Nothing on the site is clickable except what is switched on here (and the form
  //   controls themselves). With showSignIn and showAdmin both false the header has
  //   no links at all; the pages still work if someone types their address.
  // --------------------------------------------------------------------------
  nav: {
    showSignIn: true,           // "Sign in" / "Panel" button (top right)
    showAdmin: false,           // "Admin" button (top right). /admin works either way if admin.enabled
    showCreateServer: true,     // multi mode: "Create server" button on the home page
  },

  // --------------------------------------------------------------------------
  // ADMIN PORTAL at /admin: see every server, manage their codes, reset passwords or
  // tokens, delete servers. Protected by this password (or the ADMIN_PASSWORD secret).
  // The portal stays locked until a password is set.
  // --------------------------------------------------------------------------
  admin: {
    enabled: true,
    password: '',   // OR use a secret called 'ADMIN_PASSWORD'
  },

  // --------------------------------------------------------------------------
  // FEATURES - switch parts of the site off. A feature that is off is also refused by
  // the API, not just hidden.
  // --------------------------------------------------------------------------
  features: {
    serverCreation: true,       // multi: people can create servers themselves
    serverSignIn: true,         // /login and /panel exist
    passwordChange: true,       // panel: change password (multi mode only - in single mode the password lives in this file)
    tokenRegeneration: true,    // panel: make a new token (multi mode only)
    panelCodeManagement: true,  // panel: add / edit / delete codes
  },

  // --------------------------------------------------------------------------
  // COLOUR SCHEME - any CSS colour.
  // --------------------------------------------------------------------------
  colors: {
    background: '#0f1218',
    card: '#1a1f29',
    cardInner: '#222937',       // boxes inside cards
    accent: '#4f9cf9',          // buttons, links, focus
    accentText: '#ffffff',      // text on accent buttons
    text: '#e8ecf3',
    muted: '#8b95a7',
    danger: '#ff7b7b',          // error text
    dangerButton: '#b04646',    // delete buttons
    success: '#5fd38d',
    border: 'rgba(255,255,255,.12)',
  },

  // --------------------------------------------------------------------------
  // LOOK
  // --------------------------------------------------------------------------
  style: {
    font: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    radius: 16,                 // card corner radius in px
    buttonRadius: 10,           // button / input corner radius in px
    cardWidth: 440,             // normal card width in px
    wideCardWidth: 720,         // panel / admin card width in px
    backgroundImage: '',        // https:// image URL, '' = none
    customCss: '',              // extra CSS appended to every page
  },

  // --------------------------------------------------------------------------
  // LIMITS & TIMINGS
  // --------------------------------------------------------------------------
  limits: {
    serverIdMin: 3,
    serverIdMax: 24,
    passwordMin: 6,
    passwordMax: 128,
    maxServers: 0,              // 0 = unlimited number of servers on this site
    maxCodesPerServer: 1000,
    maxPendingCodeOps: 100,     // dashboard code changes allowed to wait for an offline server
    offlineAfterSeconds: 90,    // no plugin contact for this long = "offline"
    jobTimeoutSeconds: 60,      // how long a sign-up may wait for the server to answer
    sessionDays: 7,
    activeWindowSeconds: 180,   // after someone opens a server's sign-up page, its plugin polls fast for this long
    // rate limits: [max attempts, per this many seconds]  (per visitor IP)
    wrongCodes: [10, 600],      // wrong sign-up codes per visitor, per server
    usernameChecks: [40, 600],
    signIn: [8, 600],
    adminSignIn: [5, 600],
    serverCreation: [5, 3600],
  },

  // Server IDs that can never be registered (these are always reserved too:
  // login, logout, panel, api, admin).
  reservedIds: [
    'create', 'static', 'assets', 'index', 'home', 'signin', 'signup', 'register', 'favicon',
    'robots', 'sitemap', 'www', 'help', 'about', 'terms', 'privacy',
  ],

  // --------------------------------------------------------------------------
  // WORDING - every piece of text on the site.
  //   {site} = site name, {server} = server ID, {username} = chosen username,
  //   {id} = typed server ID, {min}/{max} = numbers. Plain text only (it is escaped).
  // --------------------------------------------------------------------------
  text: {
    // browser tab titles
    titleHome: '{site}',
    titleSignIn: 'Sign in - {site}',
    titlePanel: 'Panel - {site}',
    titleAdmin: 'Admin - {site}',
    titleClaim: 'Join {server} - {site}',
    titleNotFound: 'Not found - {site}',

    // header buttons
    navSignIn: 'Sign in',
    navPanel: 'Panel',
    navAdmin: 'Admin',

    // home page (multi mode)
    homeHeading: 'Join a server',
    homeSubheading: 'Enter the server ID to create your LogPass account.',
    homeIdPlaceholder: 'Server ID',
    homeContinue: 'Continue',
    homeOr: 'or',
    homeCreateButton: 'Create server',

    // create-server popup (multi mode)
    createHeading: 'Create a server',
    createSubheading: 'Pick a server ID and a password. Your ID is also your sign-in username.',
    createIdLabel: 'Server ID',
    createIdPlaceholder: 'e.g. epiz-smp',
    createPasswordLabel: 'Password',
    createConfirmLabel: 'Confirm password',
    createSubmit: 'Create server',
    idAvailable: '"{id}" is available',
    tokenHeading: 'Server created',
    tokenSubheading: 'Copy your token now - it is only shown once. (You can make a new one later in your panel.)',
    tokenCopy: 'Copy token',
    tokenCopied: 'Copied!',
    tokenInstruction: "In your server's console, run:",
    tokenCommand: '/pass token <your token>',
    tokenOpenPanel: 'Open my panel',

    // sign-in page
    signInHeading: 'Sign in',
    signInSubheading: 'Use your server ID and password.',
    signInSubheadingSingle: 'Enter the panel password.',
    signInIdLabel: 'Server ID',
    signInPasswordLabel: 'Password',
    signInSubmit: 'Sign in',
    signInNoServer: 'No server yet?',
    signInCreateLink: 'Create one',

    // sign-up page (what players see)
    claimHeading: 'Join {server}',
    claimHeadingSingle: 'Join the server',
    claimSubheading: 'Create your LogPass account for this server.',
    claimCodeLabel: 'Sign-up code or referral code',
    claimCodeContinue: 'Continue',
    claimUsernameLabel: 'Choose your LogPass username',
    claimUsernameHint: 'Letters, numbers, _ and - only.',
    claimUsernameSubmit: 'Check username',
    claimUsernameChecking: 'Checking with the server...',
    claimPasswordLabel: 'Choose a password',
    claimConfirmLabel: 'Confirm password',
    claimCreateSubmit: 'Create account',
    claimCreating: 'Creating your account...',
    successHeading: 'Account created!',
    successText: 'Join the server and type /login {username} <your password>',

    serverNotFoundHeading: 'Server not found',
    serverNotFoundText: 'There is no server with the ID {server}. Check the spelling.',
    notFoundHeading: 'Page not found',
    backButton: 'Back',
    homeLink: 'Go home',

    // shared bits
    working: 'Please wait...',
    passwordMismatch: "The passwords don't match.",
    newPasswordMismatch: "The new passwords don't match.",
    networkError: 'Network error - try again.',
    timedOut: 'Timed out waiting for the server.',
    unexpectedResponse: 'Unexpected response',
    confirm: 'Confirm',

    // server panel (/panel)
    panelSignOut: 'Sign out',
    panelStatusOnline: 'Server online',
    panelStatusOffline: 'Server offline',
    panelLastContact: 'Last contact {when}',
    panelNotConnected: 'Not connected yet - run /pass token in your console',
    panelSignupAt: 'Players sign up at',
    codesHeading: 'Sign-up codes',
    codesHelp: 'Manage them here or in-game with /pass maker and /pass maker_delete - both stay in sync.',
    codesColCode: 'Code',
    codesColUses: 'Uses left',
    codesColBy: 'Created by',
    codesUnlimited: 'Unlimited',
    codesAdmin: 'Admin',
    codesNone: 'No codes yet.',
    codesPending: '{n} change(s) waiting to reach your server - they apply as soon as it is online.',
    codeAddLabel: 'Add or update a code',
    codeNamePlaceholder: 'Code name',
    codeRandom: 'Random',
    codeUnlimitedLabel: 'Unlimited',
    codeSave: 'Save code',
    codeSaved: 'Saved.',
    codeDelete: 'Delete',
    codeDeleteConfirm: 'Delete code {code}?',
    passwordHeading: 'Change password',
    passwordCurrent: 'Current password',
    passwordNew: 'New password',
    passwordNewConfirm: 'Confirm new password',
    passwordSubmit: 'Change password',
    passwordChanged: 'Password changed.',
    tokenPanelHeading: 'Server token',
    tokenPanelHelp: 'Lost your token? Make a new one - the old one stops working, then run /pass token <new token> in your console.',
    tokenPanelPassword: 'Confirm with your password',
    tokenPanelSubmit: 'Generate new token',
    tokenPanelNew: 'New token - copy it now, it is only shown once.',

    // admin portal (/admin)
    adminHeading: 'Admin',
    adminSignInSubheading: 'Enter the admin password.',
    adminPasswordLabel: 'Admin password',
    adminSignInSubmit: 'Sign in',
    adminSignOut: 'Sign out',
    adminNotConfigured: 'The admin portal is locked: no admin password is set. Set admin.password at the top of the worker file (or the ADMIN_PASSWORD secret).',
    adminStats: '{servers} server(s), {online} online, {codes} code(s)',
    adminColServer: 'Server',
    adminColStatus: 'Status',
    adminColCodes: 'Codes',
    adminColCreated: 'Created',
    adminManage: 'Manage',
    adminOnline: 'Online',
    adminOffline: 'Offline',
    adminNoServers: 'No servers yet.',
    adminBack: 'Back to all servers',
    adminDeleteServer: 'Delete server',
    adminDeleteServerConfirm: 'Delete server {server} and all its codes? This cannot be undone.',
    adminResetPassword: 'Set a new password',
    adminResetPasswordSubmit: 'Set password',
    adminNewToken: 'Generate new token',
    adminNewTokenShown: 'New token (shown once):',
    adminSingleNote: 'Single-server mode: the password and token are set in the worker file.',

    // error messages (shown to visitors)
    errBadRequest: 'Bad request.',
    errNotSignedIn: 'Not signed in.',
    errInvalidCode: "That code isn't valid.",
    errServerNotFound: 'Server not found.',
    errIdFormat: 'Server IDs are {min}-{max} characters: lowercase letters, numbers, - and _ (start with a letter or number).',
    errIdReserved: 'That ID is reserved.',
    errIdTaken: 'That ID is already taken.',
    errMaxServers: 'This site has reached its server limit.',
    errPasswordShort: 'Password must be at least {min} characters.',
    errPasswordLong: 'Password is too long.',
    errChoosePassword: 'Please choose a password.',
    errCreateRateLimited: 'Too many servers created from this address. Try again later.',
    errSignInRateLimited: 'Too many sign-in attempts. Try again in a few minutes.',
    errSignInWrong: 'Wrong server ID or password.',
    errSignInWrongSingle: 'Wrong password.',
    errAdminWrong: 'Wrong admin password.',
    errCodeRateLimited: 'Too many wrong codes. Try again in a few minutes.',
    errTooManyAttempts: 'Too many attempts. Try again in a few minutes.',
    errUsernameFormat: 'Usernames can only contain letters, numbers, _ and -.',
    errServerOffline: 'This server is offline right now. Try again when it is online.',
    errCurrentPasswordWrong: 'Your current password is wrong.',
    errWrongPassword: 'Wrong password.',
    errCodeFormat: 'Codes can only contain letters, numbers, _ and - (up to 64 characters).',
    errUsesInvalid: 'Uses must be a number of at least 1, or tick Unlimited.',
    errCodeLimit: 'You have reached the limit of {max} codes.',
    errPendingLimit: 'Too many changes are waiting for your server. Bring it online so they can sync.',
    errNoSuchCode: 'No such code.',
    errFeatureOff: 'This feature is turned off.',
    errJobTimeout: "The server didn't respond in time. Make sure it is online and try again.",
    errServerDefault: 'The server could not complete that.',
    errServer: 'Server error. Please try again.',
  },
};
// ============================================================================
//  END OF CONFIG - nothing below needs editing
// ============================================================================

// ----------------------------------------------------------------------------
// derived settings
// ----------------------------------------------------------------------------

const T = CONFIG.text;
const L = CONFIG.limits;
const F = CONFIG.features;
const SINGLE = CONFIG.mode === 'single';
const ADMIN_SID = '*admin*';
const ID_RE = new RegExp('^[a-z0-9][a-z0-9_-]{' + (Math.max(2, L.serverIdMin) - 1) + ',' + (Math.max(L.serverIdMin, L.serverIdMax) - 1) + '}$');
const RESERVED = new Set(['login', 'logout', 'panel', 'api', 'admin'].concat(CONFIG.reservedIds.map((s) => String(s).toLowerCase())));
const CODE_RE = /^[a-z0-9_-]{1,64}$/;
const CODE_DISPLAY_RE = /^[A-Za-z0-9_-]{1,64}$/;
const USER_RE = /^[A-Za-z0-9_-]{1,32}$/;
const SESSION_TTL = L.sessionDays * 86400;
const enc = new TextEncoder();
const nowSec = () => Math.floor(Date.now() / 1000);

/** text with {placeholders} filled in */
function tx(key, vars) {
  const s = T[key] === undefined ? key : String(T[key]);
  return s.replace(/\{(\w+)\}/g, (m, k) => (vars && vars[k] !== undefined ? String(vars[k]) : m));
}

function secretOr(env, name, fallback) {
  const v = env && env[name];
  return typeof v === 'string' && v.length ? v : fallback;
}
const adminPassword = (env) => secretOr(env, 'ADMIN_PASSWORD', CONFIG.admin.password || '');
const singlePassword = (env) => secretOr(env, 'SINGLE_PASSWORD', CONFIG.single.password || '');
const singleToken = (env) => secretOr(env, 'SINGLE_TOKEN', CONFIG.single.token || '');

function configProblem(env) {
  if (!SINGLE) return null;
  if (!ID_RE.test(CONFIG.single.id) || RESERVED.has(CONFIG.single.id)) return 'single.id must be ' + L.serverIdMin + '-' + L.serverIdMax + ' characters (a-z, 0-9, - and _) and not a reserved word.';
  if (singlePassword(env).length < L.passwordMin) return 'single.password is missing or shorter than limits.passwordMin (' + L.passwordMin + ').';
  if (singleToken(env).length < 24) return 'single.token is missing or too short - use at least 24 random characters.';
  return null;
}

// ----------------------------------------------------------------------------
// small helpers
// ----------------------------------------------------------------------------

function json(obj, status = 200, headers = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: Object.assign({ 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }, headers),
  });
}
const fail = (error, status = 400) => json({ ok: false, error }, status);

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
const h = (key, vars) => escapeHtml(tx(key, vars));

function safeJson(x) {
  return JSON.stringify(x).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

function toHex(buf) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function toB64(buf) {
  let s = '';
  for (const b of new Uint8Array(buf)) s += String.fromCharCode(b);
  return btoa(s);
}
function fromB64(str) {
  const bin = atob(str);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function randomHex(bytes) {
  const a = new Uint8Array(bytes);
  crypto.getRandomValues(a);
  return toHex(a);
}
async function sha256Hex(str) {
  return toHex(await crypto.subtle.digest('SHA-256', enc.encode(str)));
}
async function hashPassword(password, saltBytes) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: saltBytes, iterations: 100000 }, key, 256);
  return toB64(bits);
}
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
async function secretMatches(given, expected) {
  return safeEqual(await sha256Hex('pm|' + String(given)), await sha256Hex('pm|' + String(expected)));
}
async function newPasswordRecord(password) {
  const salt = new Uint8Array(16);
  crypto.getRandomValues(salt);
  return { salt: toB64(salt), hash: await hashPassword(password, salt) };
}
async function passwordMatches(server, password) {
  const hash = await hashPassword(password, fromB64(server.pass_salt));
  return safeEqual(hash, server.pass_hash);
}
const newToken = () => 'pm_' + randomHex(24);

async function readJson(request) {
  const type = request.headers.get('content-type') || '';
  if (!type.includes('application/json')) return null;
  const len = Number(request.headers.get('content-length') || 0);
  if (len > 200000) return null;
  try {
    const body = await request.json();
    return body && typeof body === 'object' ? body : null;
  } catch (e) {
    return null;
  }
}
const clientIp = (request) => request.headers.get('CF-Connecting-IP') || 'unknown';
function sameOrigin(request, url) {
  const origin = request.headers.get('Origin');
  if (!origin) return true;
  try {
    return new URL(origin).host === url.host;
  } catch (e) {
    return false;
  }
}

// ----------------------------------------------------------------------------
// database
// ----------------------------------------------------------------------------

let schemaReady = false;
let singleReady = false;
async function ensureSchema(env) {
  if (schemaReady) return;
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS servers (
      id TEXT PRIMARY KEY,
      pass_salt TEXT NOT NULL,
      pass_hash TEXT NOT NULL,
      token_hash TEXT NOT NULL UNIQUE,
      created_at INTEGER NOT NULL,
      last_seen INTEGER NOT NULL DEFAULT 0,
      active_until INTEGER NOT NULL DEFAULT 0
    )`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS codes (
      server_id TEXT NOT NULL,
      code TEXT NOT NULL,
      display TEXT NOT NULL,
      uses INTEGER NOT NULL DEFAULT 0,
      unlimited INTEGER NOT NULL DEFAULT 0,
      owner TEXT,
      PRIMARY KEY (server_id, code)
    )`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS jobs (
      id TEXT PRIMARY KEY,
      server_id TEXT NOT NULL,
      type TEXT NOT NULL,
      username TEXT NOT NULL,
      password TEXT,
      code TEXT NOT NULL,
      status TEXT NOT NULL,
      error TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )`),
    env.DB.prepare('CREATE INDEX IF NOT EXISTS jobs_server_status ON jobs (server_id, status)'),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS sessions (
      id_hash TEXT PRIMARY KEY,
      server_id TEXT NOT NULL,
      expires INTEGER NOT NULL
    )`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS attempts (
      k TEXT PRIMARY KEY,
      n INTEGER NOT NULL,
      started INTEGER NOT NULL
    )`),
  ]);
  schemaReady = true;
}

// single mode: keep the one server's row in step with CONFIG.single
async function ensureSingle(env) {
  if (!SINGLE || singleReady) return;
  const id = CONFIG.single.id;
  const tokenHash = await sha256Hex(singleToken(env));
  const row = await env.DB.prepare('SELECT * FROM servers WHERE id = ?').bind(id).first();
  if (!row) {
    const rec = await newPasswordRecord(singlePassword(env));
    await env.DB.prepare('INSERT INTO servers (id, pass_salt, pass_hash, token_hash, created_at) VALUES (?, ?, ?, ?, ?)')
      .bind(id, rec.salt, rec.hash, tokenHash, nowSec()).run();
  } else {
    if (row.token_hash !== tokenHash) {
      await env.DB.prepare('UPDATE servers SET token_hash = ? WHERE id = ?').bind(tokenHash, id).run();
    }
    if (!(await passwordMatches(row, singlePassword(env)))) {
      const rec = await newPasswordRecord(singlePassword(env));
      await env.DB.prepare('UPDATE servers SET pass_salt = ?, pass_hash = ? WHERE id = ?').bind(rec.salt, rec.hash, id).run();
      await env.DB.prepare('DELETE FROM sessions WHERE server_id = ?').bind(id).run();
    }
  }
  singleReady = true;
}

const getServer = (env, id) => env.DB.prepare('SELECT * FROM servers WHERE id = ?').bind(id).first();
async function getServerByToken(env, request) {
  const m = /^Bearer\s+(\S+)$/.exec(request.headers.get('Authorization') || '');
  if (!m) return null;
  return env.DB.prepare('SELECT * FROM servers WHERE token_hash = ?').bind(await sha256Hex(m[1])).first();
}

// Rate limiting kept in D1 (no extra Cloudflare features needed).
async function rlBlocked(env, key, limit) {
  const row = await env.DB.prepare('SELECT n, started FROM attempts WHERE k = ?').bind(key).first();
  if (!row || nowSec() - row.started >= limit[1]) return false;
  return row.n >= limit[0];
}
async function rlHit(env, key, limit) {
  const t = nowSec();
  const w = limit[1];
  await env.DB.prepare(
    `INSERT INTO attempts (k, n, started) VALUES (?, 1, ?)
     ON CONFLICT(k) DO UPDATE SET
       n = CASE WHEN ? - started >= ? THEN 1 ELSE n + 1 END,
       started = CASE WHEN ? - started >= ? THEN ? ELSE started END`
  ).bind(key, t, t, w, t, w, t).run();
}
const rlClear = (env, key) => env.DB.prepare('DELETE FROM attempts WHERE k = ?').bind(key).run();

// sessions (server panel: cookie pm_session; admin portal: cookie pm_admin)
function cookieHeader(name, value, maxAge) {
  return name + '=' + value + '; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=' + maxAge;
}
async function createSession(env, serverId, cookieName) {
  const id = randomHex(32);
  await env.DB.prepare('INSERT INTO sessions (id_hash, server_id, expires) VALUES (?, ?, ?)')
    .bind(await sha256Hex(id), serverId, nowSec() + SESSION_TTL).run();
  return cookieHeader(cookieName, id, SESSION_TTL);
}
async function readSession(env, request, cookieName) {
  const m = new RegExp('(?:^|;\\s*)' + cookieName + '=([a-f0-9]{64})').exec(request.headers.get('Cookie') || '');
  if (!m) return null;
  const idHash = await sha256Hex(m[1]);
  const row = await env.DB.prepare('SELECT server_id, expires FROM sessions WHERE id_hash = ?').bind(idHash).first();
  if (!row || row.expires < nowSec()) return null;
  return { serverId: row.server_id, idHash };
}
async function serverSession(env, request) {
  if (!F.serverSignIn) return null;
  const s = await readSession(env, request, 'pm_session');
  return s && s.serverId !== ADMIN_SID ? s : null;
}
async function adminSession(env, request) {
  if (!CONFIG.admin.enabled) return null;
  const s = await readSession(env, request, 'pm_admin');
  return s && s.serverId === ADMIN_SID ? s : null;
}

// codes
function normCode(input) {
  const c = String(input || '').trim().toLowerCase();
  return CODE_RE.test(c) ? c : null;
}
async function usableCode(env, serverId, code) {
  const row = await env.DB.prepare('SELECT * FROM codes WHERE server_id = ? AND code = ?').bind(serverId, code).first();
  return row && (row.unlimited === 1 || row.uses > 0) ? row : null;
}
const refundUse = (env, serverId, code) =>
  env.DB.prepare('UPDATE codes SET uses = uses + 1 WHERE server_id = ? AND code = ? AND unlimited = 0').bind(serverId, code).run();

const SIGNUP_JOBS = "('check_username','create_account')";

async function expireStaleJobs(env, serverId) {
  const cutoff = nowSec() - L.jobTimeoutSeconds;
  const sql = 'SELECT id, server_id, type, code FROM jobs WHERE ' + (serverId ? 'server_id = ? AND ' : '')
    + "status IN ('pending','sent') AND type IN " + SIGNUP_JOBS + ' AND created_at < ? LIMIT 50';
  const stmt = env.DB.prepare(sql);
  const stale = await (serverId ? stmt.bind(serverId, cutoff) : stmt.bind(cutoff)).all();
  for (const job of stale.results || []) {
    const r = await env.DB.prepare("UPDATE jobs SET status = 'error', error = ?, password = NULL, updated_at = ? WHERE id = ? AND status IN ('pending','sent')")
      .bind(tx('errJobTimeout'), nowSec(), job.id).run();
    if (r.meta.changes === 1 && job.type === 'create_account') await refundUse(env, job.server_id, job.code);
  }
}

async function cleanup(env) {
  const t = nowSec();
  await expireStaleJobs(env, null);
  await env.DB.batch([
    env.DB.prepare('DELETE FROM jobs WHERE (type IN ' + SIGNUP_JOBS + ' AND created_at < ?) OR created_at < ?').bind(t - 900, t - 7 * 86400),
    env.DB.prepare('DELETE FROM sessions WHERE expires < ?').bind(t),
    env.DB.prepare('DELETE FROM attempts WHERE started < ?').bind(t - 7200),
  ]);
}

function validateServerId(id) {
  if (!ID_RE.test(id)) return tx('errIdFormat', { min: L.serverIdMin, max: L.serverIdMax });
  if (RESERVED.has(id)) return tx('errIdReserved');
  return null;
}
function validatePassword(pw) {
  if (typeof pw !== 'string' || pw.length < L.passwordMin) return tx('errPasswordShort', { min: L.passwordMin });
  if (pw.length > L.passwordMax) return tx('errPasswordLong');
  return null;
}

// shared by the server panel and the admin portal
async function serverInfo(env, serverId) {
  const server = await getServer(env, serverId);
  if (!server) return null;
  const codes = await env.DB.prepare('SELECT display, uses, unlimited, owner FROM codes WHERE server_id = ? ORDER BY display').bind(serverId).all();
  const pend = await env.DB.prepare("SELECT COUNT(*) AS n FROM jobs WHERE server_id = ? AND type IN ('code_upsert','code_delete') AND status IN ('pending','sent')").bind(serverId).first();
  return {
    id: server.id,
    online: server.last_seen > nowSec() - L.offlineAfterSeconds,
    lastSeen: server.last_seen || 0,
    createdAt: server.created_at,
    pendingSync: pend ? pend.n : 0,
    codes: (codes.results || []).map((c) => ({ code: c.display, uses: c.uses, unlimited: c.unlimited === 1, owner: c.owner || '' })),
  };
}

// ---- dashboard code management (panel + admin). Applied here at once and queued for the plugin. ----

const UPSERT_SQL = `INSERT INTO codes (server_id, code, display, uses, unlimited, owner) VALUES (?, ?, ?, ?, ?, ?)
  ON CONFLICT(server_id, code) DO UPDATE SET display = excluded.display, uses = excluded.uses, unlimited = excluded.unlimited, owner = excluded.owner`;

async function queueCodeOp(env, serverId, type, payload) {
  const pend = await env.DB.prepare("SELECT COUNT(*) AS n FROM jobs WHERE server_id = ? AND type IN ('code_upsert','code_delete') AND status IN ('pending','sent')").bind(serverId).first();
  if (pend && pend.n >= L.maxPendingCodeOps) return false;
  const t = nowSec();
  await env.DB.prepare('INSERT INTO jobs (id, server_id, type, username, password, code, status, created_at, updated_at) VALUES (?, ?, ?, ?, NULL, ?, ?, ?, ?)')
    .bind(randomHex(16), serverId, type, JSON.stringify(payload), payload.key, 'pending', t, t).run();
  return true;
}

async function saveCode(env, serverId, body) {
  const display = String(body.code || '').trim();
  const key = normCode(display);
  if (!key || !CODE_DISPLAY_RE.test(display)) return fail(tx('errCodeFormat'));
  const unlimited = body.unlimited === true;
  let uses = Math.floor(Number(body.uses));
  if (!unlimited && (!Number.isFinite(uses) || uses < 1 || uses > 1000000000)) return fail(tx('errUsesInvalid'));
  if (unlimited) uses = 0;

  const count = await env.DB.prepare('SELECT COUNT(*) AS n FROM codes WHERE server_id = ?').bind(serverId).first();
  const exists = await env.DB.prepare('SELECT 1 AS x FROM codes WHERE server_id = ? AND code = ?').bind(serverId, key).first();
  if (!exists && count && count.n >= L.maxCodesPerServer) return fail(tx('errCodeLimit', { max: L.maxCodesPerServer }));

  if (!(await queueCodeOp(env, serverId, 'code_upsert', { key, d: display, u: uses }))) return fail(tx('errPendingLimit'));
  await env.DB.prepare(UPSERT_SQL).bind(serverId, key, display, uses, unlimited ? 1 : 0, null).run();
  return json({ ok: true });
}

async function deleteCode(env, serverId, body) {
  const key = normCode(body.code);
  if (!key) return fail(tx('errNoSuchCode'));
  const row = await env.DB.prepare('SELECT display FROM codes WHERE server_id = ? AND code = ?').bind(serverId, key).first();
  if (!row) return fail(tx('errNoSuchCode'), 404);
  if (!(await queueCodeOp(env, serverId, 'code_delete', { key, d: row.display }))) return fail(tx('errPendingLimit'));
  await env.DB.prepare('DELETE FROM codes WHERE server_id = ? AND code = ?').bind(serverId, key).run();
  return json({ ok: true });
}

// ----------------------------------------------------------------------------
// HTML: styling + layout
// ----------------------------------------------------------------------------

const cssVal = (v) => String(v === undefined || v === null ? '' : v).replace(/[<>{};]/g, '');
const cssUrl = (u) => (u ? 'url("' + String(u).replace(/["\\<>\r\n]/g, '') + '")' : 'none');
const px = (n, d) => (Number.isFinite(Number(n)) ? Number(n) : d) + 'px';

function buildCss() {
  const c = CONFIG.colors;
  const s = CONFIG.style;
  return `
:root{--bg:${cssVal(c.background)};--card:${cssVal(c.card)};--card2:${cssVal(c.cardInner)};--accent:${cssVal(c.accent)};--accent-text:${cssVal(c.accentText)};--text:${cssVal(c.text)};--muted:${cssVal(c.muted)};--bad:${cssVal(c.danger)};--bad-btn:${cssVal(c.dangerButton)};--good:${cssVal(c.success)};--border:${cssVal(c.border)};--radius:${px(s.radius, 16)};--bradius:${px(s.buttonRadius, 10)};--cw:${px(s.cardWidth, 440)};--cww:${px(s.wideCardWidth, 720)}}
*{box-sizing:border-box}
html,body{margin:0}
body{background:var(--bg);background-image:${cssUrl(s.backgroundImage)};background-size:cover;background-position:center;background-attachment:fixed;color:var(--text);font-family:${cssVal(s.font)};min-height:100vh;display:flex;flex-direction:column}
a{color:var(--accent)}
header{display:flex;justify-content:space-between;align-items:center;padding:14px 22px;min-height:58px}
.brand{display:flex;align-items:center;gap:8px;font-weight:700;font-size:1.15rem;color:var(--text);text-decoration:none}
.brand img{max-height:32px;display:block}
nav{display:flex;gap:8px}
.btn{display:inline-block;padding:9px 16px;border-radius:var(--bradius);background:var(--accent);color:var(--accent-text);text-decoration:none;font-weight:600;border:0;font:inherit;font-weight:600;cursor:pointer}
.btn.small{padding:7px 14px;font-size:.92rem}
.btn.line{background:transparent;color:var(--text);border:1px solid var(--border)}
.btn.bad{background:var(--bad-btn);color:#fff}
main{flex:1;display:flex;justify-content:center;align-items:flex-start;padding:30px 18px}
.card{background:var(--card);border-radius:var(--radius);padding:30px 26px;width:100%;max-width:var(--cw);box-shadow:0 12px 40px rgba(0,0,0,.35)}
.card.wide{max-width:var(--cww)}
h1{margin:0 0 6px;font-size:1.55rem}
h2{margin:0 0 10px;font-size:1.15rem}
.sub{margin:0 0 20px;color:var(--muted);font-size:.95rem}
label{display:block;font-size:.85rem;color:var(--muted);margin:14px 0 6px}
input{width:100%;padding:12px 14px;border-radius:var(--bradius);border:1px solid var(--border);background:rgba(0,0,0,.25);color:var(--text);font:inherit;font-size:1rem;outline:none}
input:focus{border-color:var(--accent)}
button{font:inherit;cursor:pointer}
.primary{width:100%;margin-top:16px;padding:12px;border:0;border-radius:var(--bradius);background:var(--accent);color:var(--accent-text);font-weight:600;font-size:1rem}
.primary:disabled{opacity:.6;cursor:wait}
.ghost{width:100%;margin-top:10px;padding:11px;border-radius:var(--bradius);background:transparent;color:var(--text);border:1px solid var(--border)}
.err{min-height:1.2em;margin:12px 0 0;color:var(--bad);font-size:.9rem}
.ok{color:var(--good)}
.hint{margin:6px 0 0;font-size:.82rem;color:var(--muted);min-height:1.1em}
.or{display:flex;align-items:center;gap:10px;color:var(--muted);margin:18px 0 4px;font-size:.85rem}
.or:before,.or:after{content:"";flex:1;height:1px;background:var(--border)}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;padding:18px;z-index:10}
.modal{position:relative;background:var(--card);border-radius:var(--radius);padding:28px;width:100%;max-width:420px;box-shadow:0 16px 50px rgba(0,0,0,.5)}
.x{position:absolute;top:10px;right:14px;border:0;background:none;color:var(--muted);font-size:1.6rem;line-height:1}
.token{display:block;word-break:break-all;background:rgba(0,0,0,.35);border-radius:var(--bradius);padding:12px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.9rem;margin:10px 0}
.cmd{background:rgba(0,0,0,.35);border-radius:8px;padding:2px 7px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.88rem}
.row{display:flex;justify-content:space-between;align-items:center;gap:10px}
.badge{padding:3px 10px;border-radius:99px;font-size:.8rem;font-weight:600}
.badge.on{background:rgba(95,211,141,.16);color:var(--good)}
.badge.off{background:rgba(255,123,123,.16);color:var(--bad)}
.section{background:var(--card2);border-radius:12px;padding:18px;margin-top:16px}
table{width:100%;border-collapse:collapse;font-size:.92rem}
td,th{text-align:left;padding:7px 6px;border-bottom:1px solid var(--border)}
th{color:var(--muted);font-weight:500}
footer{padding:18px;text-align:center;color:var(--muted);font-size:.85rem}
footer:empty{display:none}
[hidden]{display:none!important}
${String(CONFIG.style.customCss || '').replace(/</g, '')}
`;
}
const CSS = buildCss();

const COMMON_JS = String.raw`
var T=window.T,CFG=window.CFG,PAGE=window.PAGE||{};
function $(id){return document.getElementById(id)}
function fmt(s,o){return String(s).replace(/\{(\w+)\}/g,function(m,k){return o&&o[k]!==undefined?o[k]:m})}
function api(path,method,data){
  var opt={method:method||'GET',headers:{},credentials:'same-origin'};
  if(data!==undefined){opt.headers['Content-Type']='application/json';opt.body=JSON.stringify(data);}
  return fetch(path,opt).then(function(r){return r.json().catch(function(){return {ok:false,error:T.unexpectedResponse}})}).catch(function(){return {ok:false,error:T.networkError}});
}
function waitJob(id,done){
  var tries=0;
  (function tick(){
    api('/api/job/'+id).then(function(j){
      if(j.status==='pending'){ if(++tries<CFG.jobPolls) setTimeout(tick,1000); else done({ok:false,error:T.timedOut}); }
      else if(j.status==='ok') done({ok:true});
      else done({ok:false,error:j.error||T.errServerDefault});
    });
  })();
}
function busy(b,on,label){b.disabled=on;if(on){b.setAttribute('data-l',b.textContent);b.textContent=label||T.working;}else if(b.getAttribute('data-l')){b.textContent=b.getAttribute('data-l');}}
function randomCode(){var a='abcdefghijklmnopqrstuvwxyz0123456789',b=new Uint8Array(8),o='';crypto.getRandomValues(b);for(var i=0;i<8;i++)o+=a.charAt(b[i]%a.length);return o;}
function el(tag,text,cls){var e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
`;

const CLIENT_CFG = {
  single: SINGLE,
  singleId: CONFIG.single.id,
  jobPolls: L.jobTimeoutSeconds + 15,
  panelCodes: F.panelCodeManagement,
  passwordChange: F.passwordChange && !SINGLE,
  tokenRegen: F.tokenRegeneration && !SINGLE,
};

function faviconHref() {
  const b = CONFIG.branding;
  if (b.faviconUrl) return escapeHtml(b.faviconUrl);
  const e = String(b.faviconEmoji || '').trim();
  if (!e) return 'data:,';
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>" + escapeHtml(e) + '</text></svg>';
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function brandHtml(asLink) {
  const b = CONFIG.branding;
  let inner = '';
  if (b.logoUrl) inner += '<img src="' + escapeHtml(b.logoUrl) + '" alt="">';
  else if (b.logoEmoji) inner += '<span>' + escapeHtml(b.logoEmoji) + '</span>';
  if (b.showSiteName !== false || !inner) inner += '<span>' + escapeHtml(b.siteName) + '</span>';
  return asLink ? '<a class="brand" href="/">' + inner + '</a>' : '<span class="brand">' + inner + '</span>';
}

function navHtml(signedIn, kind) {
  if (kind === 'admin') return '';
  const items = [];
  if (CONFIG.nav.showSignIn && F.serverSignIn) {
    items.push(signedIn
      ? '<a class="btn small" href="/panel">' + h('navPanel') + '</a>'
      : '<a class="btn small" href="/login">' + h('navSignIn') + '</a>');
  }
  if (CONFIG.nav.showAdmin && CONFIG.admin.enabled) items.push('<a class="btn small line" href="/admin">' + h('navAdmin') + '</a>');
  return items.length ? '<nav>' + items.join('') + '</nav>' : '';
}

function footerHtml() {
  const c = CONFIG.contact;
  const parts = [];
  if (c.enabled && c.email) {
    parts.push((c.label ? escapeHtml(c.label) + ' ' : '') + '<a href="mailto:' + escapeHtml(c.email) + '">' + escapeHtml(c.email) + '</a>');
  }
  if (c.footerText) parts.push(escapeHtml(c.footerText));
  return parts.join('<br>');
}

/** kind: 'home' (nothing in the header is clickable except the buttons from CONFIG.nav), 'page', 'admin' */
function page(titleKey, titleVars, body, script, pageData, signedIn, kind) {
  const b = CONFIG.branding;
  const title = tx(titleKey, Object.assign({ site: b.siteName }, titleVars || {}));
  const anyImage = b.logoUrl || b.faviconUrl || CONFIG.style.backgroundImage;
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="icon" href="${faviconHref()}">
<style>${CSS}</style></head>
<body>
<header>${brandHtml(kind !== 'home')}${navHtml(signedIn, kind)}</header>
<main>${body}</main>
<footer>${footerHtml()}</footer>
<script>window.T=${safeJson(T)};window.CFG=${safeJson(CLIENT_CFG)};window.PAGE=${safeJson(pageData || {})};</script>
<script>${COMMON_JS}${script || ''}</script>
</body></html>`;
  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-frame-options': 'DENY',
      'x-content-type-options': 'nosniff',
      'referrer-policy': 'no-referrer',
      'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'self'; img-src data:" + (anyImage ? ' https:' : '') + "; base-uri 'none'; form-action 'self'; frame-ancestors 'none'",
    },
  });
}

// ----------------------------------------------------------------------------
// HTML: pages
// ----------------------------------------------------------------------------

function homePage(session) {
  if (SINGLE) return claimPage(CONFIG.single.id, session, 'home');
  const create = F.serverCreation && CONFIG.nav.showCreateServer;
  const body = `
<section class="card">
  <h1>${h('homeHeading')}</h1>
  <p class="sub">${h('homeSubheading')}</p>
  <form id="joinForm" autocomplete="off">
    <input id="sid" placeholder="${h('homeIdPlaceholder')}" maxlength="${L.serverIdMax}" autocapitalize="off" autocorrect="off" spellcheck="false" required>
    <button class="primary" type="submit">${h('homeContinue')}</button>
  </form>
  ${create ? `<div class="or">${h('homeOr')}</div><button id="openCreate" class="ghost" type="button">${h('homeCreateButton')}</button>` : ''}
</section>
${create ? `
<div id="overlay" class="overlay" hidden>
  <div class="modal" role="dialog" aria-modal="true">
    <button id="close" class="x" type="button" aria-label="Close">&times;</button>
    <div id="createStep">
      <h2>${h('createHeading')}</h2>
      <p class="sub">${h('createSubheading')}</p>
      <form id="createForm" autocomplete="off">
        <label for="nid">${h('createIdLabel')}</label>
        <input id="nid" maxlength="${L.serverIdMax}" placeholder="${h('createIdPlaceholder')}" autocapitalize="off" autocorrect="off" spellcheck="false" required>
        <p id="avail" class="hint"></p>
        <label for="npw">${h('createPasswordLabel')}</label>
        <input id="npw" type="password" maxlength="${L.passwordMax}" autocomplete="new-password" required>
        <label for="npw2">${h('createConfirmLabel')}</label>
        <input id="npw2" type="password" maxlength="${L.passwordMax}" autocomplete="new-password" required>
        <p id="createErr" class="err" role="alert"></p>
        <button id="createBtn" class="primary" type="submit">${h('createSubmit')}</button>
      </form>
    </div>
    <div id="tokenStep" hidden>
      <h2>${h('tokenHeading')}</h2>
      <p class="sub">${h('tokenSubheading')}</p>
      <code id="tok" class="token"></code>
      <button id="copy" class="ghost" type="button">${h('tokenCopy')}</button>
      <p class="sub" style="margin-top:16px">${h('tokenInstruction')}<br><span class="cmd">${h('tokenCommand')}</span></p>
      ${F.serverSignIn ? `<a class="btn" style="display:block;text-align:center" href="/panel">${h('tokenOpenPanel')}</a>` : ''}
    </div>
  </div>
</div>` : ''}`;
  return page('titleHome', {}, body, HOME_JS, { create }, !!session, 'home');
}

const HOME_JS = String.raw`
$('joinForm').addEventListener('submit',function(e){e.preventDefault();var v=$('sid').value.trim().toLowerCase();if(v)location.href='/'+encodeURIComponent(v);});
if(PAGE.create){
  var ov=$('overlay');
  var openM=function(){ov.hidden=false;setTimeout(function(){$('nid').focus()},50);};
  var closeM=function(){ov.hidden=true;};
  $('openCreate').addEventListener('click',openM);
  $('close').addEventListener('click',closeM);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
  var t=null;
  $('nid').addEventListener('input',function(){
    clearTimeout(t);var v=$('nid').value.trim().toLowerCase();var a=$('avail');a.className='hint';a.style.color='';
    if(!v){a.textContent='';return;}
    t=setTimeout(function(){api('/api/available?id='+encodeURIComponent(v)).then(function(j){
      if(j.available){a.textContent=fmt(T.idAvailable,{id:v});a.className='hint ok';}
      else{a.textContent=j.reason||'';a.style.color='var(--bad)';}
    });},350);
  });
  $('createForm').addEventListener('submit',function(e){
    e.preventDefault();$('createErr').textContent='';
    if($('npw').value!==$('npw2').value){$('createErr').textContent=T.passwordMismatch;return;}
    var b=$('createBtn');busy(b,true);
    api('/api/server/create','POST',{id:$('nid').value.trim().toLowerCase(),password:$('npw').value}).then(function(j){
      busy(b,false);
      if(!j.ok){$('createErr').textContent=j.error||T.errServerDefault;return;}
      $('tok').textContent=j.token;$('createStep').hidden=true;$('tokenStep').hidden=false;
    });
  });
  $('copy').addEventListener('click',function(){
    var s=$('tok').textContent;
    if(navigator.clipboard)navigator.clipboard.writeText(s).then(function(){$('copy').textContent=T.tokenCopied;});
    else{var r=document.createRange();r.selectNode($('tok'));getSelection().removeAllRanges();getSelection().addRange(r);}
  });
}`;

function loginPage(session) {
  const body = `
<section class="card">
  <h1>${h('signInHeading')}</h1>
  <p class="sub">${h(SINGLE ? 'signInSubheadingSingle' : 'signInSubheading')}</p>
  <form id="f" autocomplete="on">
    ${SINGLE ? '' : `<label for="id">${h('signInIdLabel')}</label>
    <input id="id" autocomplete="username" maxlength="${L.serverIdMax}" autocapitalize="off" spellcheck="false" required>`}
    <label for="pw">${h('signInPasswordLabel')}</label>
    <input id="pw" type="password" autocomplete="current-password" maxlength="${L.passwordMax}" required>
    <p id="err" class="err" role="alert"></p>
    <button id="btn" class="primary" type="submit">${h('signInSubmit')}</button>
  </form>
  ${!SINGLE && F.serverCreation && CONFIG.nav.showCreateServer ? `<p class="sub" style="margin:16px 0 0;text-align:center">${h('signInNoServer')} <a href="/">${h('signInCreateLink')}</a></p>` : ''}
</section>`;
  return page('titleSignIn', {}, body, LOGIN_JS, {}, !!session, 'page');
}

const LOGIN_JS = String.raw`
$('f').addEventListener('submit',function(e){
  e.preventDefault();$('err').textContent='';var b=$('btn');busy(b,true);
  var id=CFG.single?CFG.singleId:$('id').value.trim().toLowerCase();
  api('/api/login','POST',{id:id,password:$('pw').value}).then(function(j){
    busy(b,false);
    if(j.ok)location.href='/panel';else $('err').textContent=j.error||T.errServerDefault;
  });
});`;

function claimPage(id, session, kind) {
  const heading = SINGLE ? h('claimHeadingSingle') : h('claimHeading', { server: id });
  const body = `
<section class="card">
  <h1>${heading}</h1>
  <p class="sub">${h('claimSubheading')}</p>

  <div id="s1">
    <form id="f1" autocomplete="off">
      <label for="code">${h('claimCodeLabel')}</label>
      <input id="code" maxlength="64" autocapitalize="off" autocorrect="off" spellcheck="false" required>
      <p id="e1" class="err" role="alert"></p>
      <button id="b1" class="primary" type="submit">${h('claimCodeContinue')}</button>
    </form>
  </div>

  <div id="s2" hidden>
    <form id="f2" autocomplete="off">
      <label for="user">${h('claimUsernameLabel')}</label>
      <input id="user" maxlength="32" autocapitalize="off" autocorrect="off" spellcheck="false" required>
      <p class="hint">${h('claimUsernameHint')}</p>
      <p id="e2" class="err" role="alert"></p>
      <button id="b2" class="primary" type="submit">${h('claimUsernameSubmit')}</button>
    </form>
  </div>

  <div id="s3" hidden>
    <form id="f3" autocomplete="off">
      <label for="pw">${h('claimPasswordLabel')}</label>
      <input id="pw" type="password" maxlength="${L.passwordMax}" autocomplete="new-password" required>
      <label for="pw2">${h('claimConfirmLabel')}</label>
      <input id="pw2" type="password" maxlength="${L.passwordMax}" autocomplete="new-password" required>
      <p id="e3" class="err" role="alert"></p>
      <button id="b3" class="primary" type="submit">${h('claimCreateSubmit')}</button>
    </form>
  </div>

  <div id="s4" hidden>
    <h2>${h('successHeading')}</h2>
    <p id="done" class="sub"></p>
  </div>
</section>`;
  return page('titleClaim', { server: id }, body, CLAIM_JS, { sid: id }, !!session, kind || 'page');
}

const CLAIM_JS = String.raw`
var SID=PAGE.sid,code='',user='';
function show(n){for(var i=1;i<=4;i++)$('s'+i).hidden=(i!==n);}
$('f1').addEventListener('submit',function(e){
  e.preventDefault();$('e1').textContent='';var b=$('b1');busy(b,true);
  code=$('code').value.trim();
  api('/api/s/'+SID+'/code','POST',{code:code}).then(function(j){
    busy(b,false);
    if(j.ok){show(2);$('user').focus();}else $('e1').textContent=j.error||T.errInvalidCode;
  });
});
$('f2').addEventListener('submit',function(e){
  e.preventDefault();$('e2').textContent='';var b=$('b2');busy(b,true,T.claimUsernameChecking);
  user=$('user').value.trim();
  api('/api/s/'+SID+'/username','POST',{code:code,username:user}).then(function(j){
    if(!j.ok){busy(b,false);$('e2').textContent=j.error||T.errServerDefault;return;}
    waitJob(j.job,function(r){
      busy(b,false);
      if(r.ok){show(3);$('pw').focus();}else $('e2').textContent=r.error;
    });
  });
});
$('f3').addEventListener('submit',function(e){
  e.preventDefault();$('e3').textContent='';
  if($('pw').value!==$('pw2').value){$('e3').textContent=T.passwordMismatch;return;}
  var b=$('b3');busy(b,true,T.claimCreating);
  api('/api/s/'+SID+'/create','POST',{code:code,username:user,password:$('pw').value}).then(function(j){
    if(!j.ok){busy(b,false);$('e3').textContent=j.error||T.errServerDefault;return;}
    waitJob(j.job,function(r){
      busy(b,false);
      if(r.ok){$('pw').value='';$('pw2').value='';$('done').textContent=fmt(T.successText,{username:user});show(4);}
      else $('e3').textContent=r.error;
    });
  });
});`;

function messagePage(titleKey, headingKey, textKey, vars, status, session) {
  const body = `<section class="card"><h1>${h(headingKey)}</h1>${textKey ? `<p class="sub">${h(textKey, vars)}</p>` : ''}
<a class="btn" href="/">${h(textKey ? 'backButton' : 'homeLink')}</a></section>`;
  const res = page(titleKey, vars, body, '', {}, !!session, 'page');
  return new Response(res.body, { status, headers: res.headers });
}

function panelPage(session) {
  const f = CLIENT_CFG;
  const body = `
<section class="card wide">
  <div class="row"><h1 id="title">${h('titlePanel', { site: CONFIG.branding.siteName })}</h1><button id="out" class="btn small" type="button">${h('panelSignOut')}</button></div>
  <div class="row" style="margin-top:4px"><span id="status" class="badge off">...</span><span id="seen" class="sub" style="margin:0"></span></div>
  <p class="sub" style="margin-top:12px">${h('panelSignupAt')} <a id="link" href="#"></a></p>

  <div class="section">
    <h2>${h('codesHeading')}</h2>
    <p class="sub" style="margin-bottom:8px">${h('codesHelp')}</p>
    <table><thead><tr><th>${h('codesColCode')}</th><th>${h('codesColUses')}</th><th>${h('codesColBy')}</th>${f.panelCodes ? '<th></th>' : ''}</tr></thead><tbody id="codes"></tbody></table>
    <p id="nocodes" class="sub" hidden style="margin-top:10px">${h('codesNone')}</p>
    <p id="pending" class="sub" hidden style="margin-top:10px"></p>
    ${f.panelCodes ? `<form id="codeForm" autocomplete="off" style="margin-top:14px">
      <label for="cname">${h('codeAddLabel')}</label>
      <div class="row"><input id="cname" maxlength="64" placeholder="${h('codeNamePlaceholder')}" autocapitalize="off" spellcheck="false" required><button id="gen" class="btn small" type="button" style="white-space:nowrap">${h('codeRandom')}</button></div>
      <div class="row" style="margin-top:10px"><input id="cuses" type="number" min="1" max="1000000000" value="10" style="flex:1"><label style="margin:0;display:flex;align-items:center;gap:6px;white-space:nowrap"><input id="cunl" type="checkbox" style="width:auto"> ${h('codeUnlimitedLabel')}</label></div>
      <p id="cMsg" class="err" role="alert"></p>
      <button id="cBtn" class="primary" type="submit">${h('codeSave')}</button>
    </form>` : ''}
  </div>

  ${f.passwordChange ? `<div class="section">
    <h2>${h('passwordHeading')}</h2>
    <form id="pwForm" autocomplete="off">
      <label for="cur">${h('passwordCurrent')}</label><input id="cur" type="password" autocomplete="current-password" maxlength="${L.passwordMax}" required>
      <label for="nw">${h('passwordNew')}</label><input id="nw" type="password" autocomplete="new-password" maxlength="${L.passwordMax}" required>
      <label for="nw2">${h('passwordNewConfirm')}</label><input id="nw2" type="password" autocomplete="new-password" maxlength="${L.passwordMax}" required>
      <p id="pwMsg" class="err" role="alert"></p>
      <button id="pwBtn" class="primary" type="submit">${h('passwordSubmit')}</button>
    </form>
  </div>` : ''}

  ${f.tokenRegen ? `<div class="section">
    <h2>${h('tokenPanelHeading')}</h2>
    <p class="sub" style="margin-bottom:8px">${h('tokenPanelHelp')}</p>
    <form id="tkForm" autocomplete="off">
      <label for="tkpw">${h('tokenPanelPassword')}</label><input id="tkpw" type="password" autocomplete="current-password" maxlength="${L.passwordMax}" required>
      <p id="tkMsg" class="err" role="alert"></p>
      <code id="tok" class="token" hidden></code>
      <button id="tkBtn" class="primary" type="submit">${h('tokenPanelSubmit')}</button>
    </form>
  </div>` : ''}
</section>`;
  return page('titlePanel', {}, body, PANEL_JS, {}, true, 'page');
}

const PANEL_JS = String.raw`
function load(){
  api('/api/panel/info').then(function(j){
    if(!j.ok){location.href='/login';return;}
    $('title').textContent=CFG.single?document.title:j.id;
    var s=$('status');s.textContent=j.online?T.panelStatusOnline:T.panelStatusOffline;s.className='badge '+(j.online?'on':'off');
    $('seen').textContent=j.lastSeen?fmt(T.panelLastContact,{when:new Date(j.lastSeen*1000).toLocaleString()}):T.panelNotConnected;
    var l=$('link'),path=CFG.single?'/':'/'+j.id;l.href=path;l.textContent=location.origin+path;
    var tb=$('codes');tb.textContent='';
    j.codes.forEach(function(c){
      var tr=el('tr');
      [c.code,c.unlimited?T.codesUnlimited:String(c.uses),c.owner||T.codesAdmin].forEach(function(v){tr.appendChild(el('td',v));});
      if(CFG.panelCodes){
        var td=el('td'),del=el('button',T.codeDelete,'btn small bad');
        del.addEventListener('click',function(){if(confirm(fmt(T.codeDeleteConfirm,{code:c.code})))api('/api/panel/code/delete','POST',{code:c.code}).then(function(r){if(!r.ok)alert(r.error||T.errServerDefault);load();});});
        td.appendChild(del);tr.appendChild(td);
      }
      tb.appendChild(tr);
    });
    $('nocodes').hidden=j.codes.length>0;
    var pe=$('pending');pe.hidden=!j.pendingSync;
    if(j.pendingSync)pe.textContent=fmt(T.codesPending,{n:j.pendingSync});
  });
}
load();
$('out').addEventListener('click',function(){api('/api/logout','POST',{}).then(function(){location.href='/';});});
if($('codeForm')){
  $('gen').addEventListener('click',function(){$('cname').value=randomCode();});
  $('cunl').addEventListener('change',function(){$('cuses').disabled=$('cunl').checked;});
  $('codeForm').addEventListener('submit',function(e){
    e.preventDefault();var m=$('cMsg');m.textContent='';m.className='err';var b=$('cBtn');busy(b,true);
    api('/api/panel/code','POST',{code:$('cname').value.trim(),uses:Number($('cuses').value),unlimited:$('cunl').checked}).then(function(j){
      busy(b,false);
      if(j.ok){m.textContent=T.codeSaved;m.className='err ok';$('cname').value='';load();}
      else m.textContent=j.error||T.errServerDefault;
    });
  });
}
if($('pwForm')){
  $('pwForm').addEventListener('submit',function(e){
    e.preventDefault();var m=$('pwMsg');m.textContent='';m.className='err';
    if($('nw').value!==$('nw2').value){m.textContent=T.newPasswordMismatch;return;}
    var b=$('pwBtn');busy(b,true);
    api('/api/panel/password','POST',{current:$('cur').value,next:$('nw').value}).then(function(j){
      busy(b,false);
      if(j.ok){m.textContent=T.passwordChanged;m.className='err ok';$('cur').value='';$('nw').value='';$('nw2').value='';}
      else m.textContent=j.error||T.errServerDefault;
    });
  });
}
if($('tkForm')){
  $('tkForm').addEventListener('submit',function(e){
    e.preventDefault();var m=$('tkMsg');m.textContent='';m.className='err';
    var b=$('tkBtn');busy(b,true);
    api('/api/panel/token','POST',{password:$('tkpw').value}).then(function(j){
      busy(b,false);
      if(j.ok){$('tok').textContent=j.token;$('tok').hidden=false;m.textContent=T.tokenPanelNew;m.className='err ok';$('tkpw').value='';}
      else m.textContent=j.error||T.errServerDefault;
    });
  });
}`;

// ----------------------------------------------------------------------------
// HTML: admin portal (/admin)
// ----------------------------------------------------------------------------

function adminPage() {
  const body = `
<section class="card wide" id="adLogin" hidden>
  <h1>${h('adminHeading')}</h1>
  <p id="adLocked" class="sub" hidden>${h('adminNotConfigured')}</p>
  <form id="adForm" autocomplete="off">
    <p class="sub">${h('adminSignInSubheading')}</p>
    <label for="adpw">${h('adminPasswordLabel')}</label>
    <input id="adpw" type="password" autocomplete="current-password" maxlength="200" required>
    <p id="adErr" class="err" role="alert"></p>
    <button id="adBtn" class="primary" type="submit">${h('adminSignInSubmit')}</button>
  </form>
</section>

<section class="card wide" id="adDash" hidden>
  <div class="row"><h1>${h('adminHeading')}</h1><button id="adOut" class="btn small" type="button">${h('adminSignOut')}</button></div>
  <div id="adList">
    <p id="adStats" class="sub"></p>
    <table><thead><tr><th>${h('adminColServer')}</th><th>${h('adminColStatus')}</th><th>${h('adminColCodes')}</th><th>${h('adminColCreated')}</th><th></th></tr></thead><tbody id="adRows"></tbody></table>
    <p id="adNone" class="sub" hidden style="margin-top:10px">${h('adminNoServers')}</p>
  </div>
  <div id="adDetail" hidden>
    <button id="adBack" class="btn small line" type="button">&larr; ${h('adminBack')}</button>
    <div class="row" style="margin-top:14px"><h2 id="dTitle" style="margin:0"></h2><span id="dStatus" class="badge off"></span></div>
    <p id="dSeen" class="sub" style="margin-top:6px"></p>

    <div class="section">
      <h2>${h('codesHeading')}</h2>
      <table><thead><tr><th>${h('codesColCode')}</th><th>${h('codesColUses')}</th><th>${h('codesColBy')}</th><th></th></tr></thead><tbody id="dCodes"></tbody></table>
      <p id="dNone" class="sub" hidden style="margin-top:10px">${h('codesNone')}</p>
      <p id="dPending" class="sub" hidden style="margin-top:10px"></p>
      <form id="dCodeForm" autocomplete="off" style="margin-top:14px">
        <label for="dcname">${h('codeAddLabel')}</label>
        <div class="row"><input id="dcname" maxlength="64" placeholder="${h('codeNamePlaceholder')}" autocapitalize="off" spellcheck="false" required><button id="dgen" class="btn small" type="button" style="white-space:nowrap">${h('codeRandom')}</button></div>
        <div class="row" style="margin-top:10px"><input id="dcuses" type="number" min="1" max="1000000000" value="10" style="flex:1"><label style="margin:0;display:flex;align-items:center;gap:6px;white-space:nowrap"><input id="dcunl" type="checkbox" style="width:auto"> ${h('codeUnlimitedLabel')}</label></div>
        <p id="dcMsg" class="err" role="alert"></p>
        <button class="primary" type="submit">${h('codeSave')}</button>
      </form>
    </div>

    <div class="section" id="dSingleNote" hidden><p class="sub" style="margin:0">${h('adminSingleNote')}</p></div>

    <div class="section" id="dAccount">
      <h2>${h('adminResetPassword')}</h2>
      <form id="dPwForm" autocomplete="off">
        <input id="dnpw" type="password" autocomplete="new-password" maxlength="${L.passwordMax}" required>
        <p id="dpwMsg" class="err" role="alert"></p>
        <button class="primary" type="submit">${h('adminResetPasswordSubmit')}</button>
      </form>
      <h2 style="margin-top:20px">${h('tokenPanelHeading')}</h2>
      <p id="dtokMsg" class="err" role="alert"></p>
      <code id="dtok" class="token" hidden></code>
      <button id="dTokBtn" class="ghost" type="button">${h('adminNewToken')}</button>
      <button id="dDelBtn" class="primary" type="button" style="background:var(--bad-btn);color:#fff;margin-top:20px">${h('adminDeleteServer')}</button>
    </div>
  </div>
</section>`;
  return page('titleAdmin', {}, body, ADMIN_JS, {}, false, 'admin');
}

const ADMIN_JS = String.raw`
var cur=null;
function showLogin(locked){$('adDash').hidden=true;$('adLogin').hidden=false;$('adLocked').hidden=!locked;$('adForm').hidden=!!locked;}
function when(ts){return ts?new Date(ts*1000).toLocaleString():'-';}
function loadList(){
  api('/api/admin/servers').then(function(j){
    if(!j.ok){showLogin(j.locked);return;}
    $('adLogin').hidden=true;$('adDash').hidden=false;$('adList').hidden=false;$('adDetail').hidden=true;cur=null;
    $('adStats').textContent=fmt(T.adminStats,{servers:j.servers.length,online:j.servers.filter(function(s){return s.online}).length,codes:j.servers.reduce(function(n,s){return n+s.codes},0)});
    var tb=$('adRows');tb.textContent='';
    j.servers.forEach(function(s){
      var tr=el('tr');tr.appendChild(el('td',s.id));
      var st=el('td');st.appendChild(el('span',s.online?T.adminOnline:T.adminOffline,'badge '+(s.online?'on':'off')));tr.appendChild(st);
      tr.appendChild(el('td',String(s.codes)));tr.appendChild(el('td',when(s.createdAt)));
      var td=el('td'),b=el('button',T.adminManage,'btn small');b.addEventListener('click',function(){openServer(s.id);});td.appendChild(b);tr.appendChild(td);
      tb.appendChild(tr);
    });
    $('adNone').hidden=j.servers.length>0;
  });
}
function openServer(id){
  api('/api/admin/server?id='+encodeURIComponent(id)).then(function(j){
    if(!j.ok){alert(j.error||T.errServerDefault);return loadList();}
    cur=j.id;$('adList').hidden=true;$('adDetail').hidden=false;
    $('dTitle').textContent=j.id;
    var s=$('dStatus');s.textContent=j.online?T.adminOnline:T.adminOffline;s.className='badge '+(j.online?'on':'off');
    $('dSeen').textContent=j.lastSeen?fmt(T.panelLastContact,{when:when(j.lastSeen)}):T.panelNotConnected;
    var tb=$('dCodes');tb.textContent='';
    j.codes.forEach(function(c){
      var tr=el('tr');
      [c.code,c.unlimited?T.codesUnlimited:String(c.uses),c.owner||T.codesAdmin].forEach(function(v){tr.appendChild(el('td',v));});
      var td=el('td'),del=el('button',T.codeDelete,'btn small bad');
      del.addEventListener('click',function(){if(confirm(fmt(T.codeDeleteConfirm,{code:c.code})))api('/api/admin/code/delete','POST',{id:cur,code:c.code}).then(function(r){if(!r.ok)alert(r.error||T.errServerDefault);openServer(cur);});});
      td.appendChild(del);tr.appendChild(td);tb.appendChild(tr);
    });
    $('dNone').hidden=j.codes.length>0;
    var pe=$('dPending');pe.hidden=!j.pendingSync;if(j.pendingSync)pe.textContent=fmt(T.codesPending,{n:j.pendingSync});
    $('dAccount').hidden=!!CFG.single;$('dSingleNote').hidden=!CFG.single;
    $('dtok').hidden=true;$('dtokMsg').textContent='';$('dpwMsg').textContent='';
  });
}
$('adForm').addEventListener('submit',function(e){
  e.preventDefault();$('adErr').textContent='';var b=$('adBtn');busy(b,true);
  api('/api/admin/login','POST',{password:$('adpw').value}).then(function(j){
    busy(b,false);
    if(j.ok){$('adpw').value='';loadList();}else $('adErr').textContent=j.error||T.errServerDefault;
  });
});
$('adOut').addEventListener('click',function(){api('/api/admin/logout','POST',{}).then(function(){showLogin(false);});});
$('adBack').addEventListener('click',loadList);
$('dgen').addEventListener('click',function(){$('dcname').value=randomCode();});
$('dcunl').addEventListener('change',function(){$('dcuses').disabled=$('dcunl').checked;});
$('dCodeForm').addEventListener('submit',function(e){
  e.preventDefault();var m=$('dcMsg');m.textContent='';m.className='err';
  api('/api/admin/code','POST',{id:cur,code:$('dcname').value.trim(),uses:Number($('dcuses').value),unlimited:$('dcunl').checked}).then(function(j){
    if(j.ok){m.textContent=T.codeSaved;m.className='err ok';$('dcname').value='';openServer(cur);}
    else m.textContent=j.error||T.errServerDefault;
  });
});
$('dPwForm').addEventListener('submit',function(e){
  e.preventDefault();var m=$('dpwMsg');m.textContent='';m.className='err';
  api('/api/admin/server/password','POST',{id:cur,password:$('dnpw').value}).then(function(j){
    if(j.ok){m.textContent=T.passwordChanged;m.className='err ok';$('dnpw').value='';}else m.textContent=j.error||T.errServerDefault;
  });
});
$('dTokBtn').addEventListener('click',function(){
  var m=$('dtokMsg');m.textContent='';m.className='err';
  api('/api/admin/server/token','POST',{id:cur}).then(function(j){
    if(j.ok){$('dtok').textContent=j.token;$('dtok').hidden=false;m.textContent=T.adminNewTokenShown;m.className='err ok';}else m.textContent=j.error||T.errServerDefault;
  });
});
$('dDelBtn').addEventListener('click',function(){
  if(!confirm(fmt(T.adminDeleteServerConfirm,{server:cur})))return;
  api('/api/admin/server/delete','POST',{id:cur}).then(function(j){if(!j.ok)alert(j.error||T.errServerDefault);loadList();});
});
loadList();`;

// ----------------------------------------------------------------------------
// browser API
// ----------------------------------------------------------------------------

async function apiAvailable(env, url) {
  if (SINGLE || !F.serverCreation) return fail(tx('errFeatureOff'), 404);
  const id = (url.searchParams.get('id') || '').trim().toLowerCase();
  const bad = validateServerId(id);
  if (bad) return json({ ok: true, available: false, reason: bad });
  const taken = await getServer(env, id);
  return json({ ok: true, available: !taken, reason: taken ? tx('errIdTaken') : '' });
}

async function apiCreateServer(env, request) {
  if (SINGLE || !F.serverCreation) return fail(tx('errFeatureOff'), 404);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const id = String(body.id || '').trim().toLowerCase();
  const bad = validateServerId(id) || validatePassword(body.password);
  if (bad) return fail(bad);

  const ip = clientIp(request);
  if (await rlBlocked(env, 'create:' + ip, L.serverCreation)) return fail(tx('errCreateRateLimited'), 429);
  if (await getServer(env, id)) return fail(tx('errIdTaken'));
  if (L.maxServers > 0) {
    const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM servers').first();
    if (n && n.n >= L.maxServers) return fail(tx('errMaxServers'));
  }

  const rec = await newPasswordRecord(body.password);
  const token = newToken();
  try {
    await env.DB.prepare('INSERT INTO servers (id, pass_salt, pass_hash, token_hash, created_at) VALUES (?, ?, ?, ?, ?)')
      .bind(id, rec.salt, rec.hash, await sha256Hex(token), nowSec()).run();
  } catch (e) {
    return fail(tx('errIdTaken'));
  }
  await rlHit(env, 'create:' + ip, L.serverCreation);
  const headers = F.serverSignIn ? { 'set-cookie': await createSession(env, id, 'pm_session') } : {};
  return json({ ok: true, id, token }, 200, headers);
}

async function apiLogin(env, request) {
  if (!F.serverSignIn) return fail(tx('errFeatureOff'), 404);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const id = SINGLE ? CONFIG.single.id : String(body.id || '').trim().toLowerCase();
  const key = 'login:' + clientIp(request);
  if (await rlBlocked(env, key, L.signIn)) return fail(tx('errSignInRateLimited'), 429);
  const server = ID_RE.test(id) ? await getServer(env, id) : null;
  const ok = server
    ? await passwordMatches(server, String(body.password || ''))
    : (await hashPassword(String(body.password || ''), new Uint8Array(16)), false);
  if (!ok) {
    await rlHit(env, key, L.signIn);
    return fail(tx(SINGLE ? 'errSignInWrongSingle' : 'errSignInWrong'), 401);
  }
  await rlClear(env, key);
  return json({ ok: true }, 200, { 'set-cookie': await createSession(env, server.id, 'pm_session') });
}

async function apiLogout(env, request) {
  const s = await readSession(env, request, 'pm_session');
  if (s) await env.DB.prepare('DELETE FROM sessions WHERE id_hash = ?').bind(s.idHash).run();
  return json({ ok: true }, 200, { 'set-cookie': cookieHeader('pm_session', '', 0) });
}

async function apiPanelInfo(env, request) {
  const s = await serverSession(env, request);
  if (!s) return fail(tx('errNotSignedIn'), 401);
  const info = await serverInfo(env, s.serverId);
  if (!info) return fail(tx('errNotSignedIn'), 401);
  return json(Object.assign({ ok: true }, info));
}

async function apiPanelPassword(env, request) {
  if (SINGLE || !F.passwordChange) return fail(tx('errFeatureOff'), 403);
  const s = await serverSession(env, request);
  if (!s) return fail(tx('errNotSignedIn'), 401);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const key = 'pw:' + s.serverId;
  if (await rlBlocked(env, key, [6, 600])) return fail(tx('errTooManyAttempts'), 429);
  const server = await getServer(env, s.serverId);
  if (!server || !(await passwordMatches(server, String(body.current || '')))) {
    await rlHit(env, key, [6, 600]);
    return fail(tx('errCurrentPasswordWrong'), 403);
  }
  const bad = validatePassword(body.next);
  if (bad) return fail(bad);
  const rec = await newPasswordRecord(body.next);
  await env.DB.batch([
    env.DB.prepare('UPDATE servers SET pass_salt = ?, pass_hash = ? WHERE id = ?').bind(rec.salt, rec.hash, s.serverId),
    env.DB.prepare('DELETE FROM sessions WHERE server_id = ? AND id_hash != ?').bind(s.serverId, s.idHash),
  ]);
  await rlClear(env, key);
  return json({ ok: true });
}

async function apiPanelToken(env, request) {
  if (SINGLE || !F.tokenRegeneration) return fail(tx('errFeatureOff'), 403);
  const s = await serverSession(env, request);
  if (!s) return fail(tx('errNotSignedIn'), 401);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const key = 'tk:' + s.serverId;
  if (await rlBlocked(env, key, [6, 600])) return fail(tx('errTooManyAttempts'), 429);
  const server = await getServer(env, s.serverId);
  if (!server || !(await passwordMatches(server, String(body.password || '')))) {
    await rlHit(env, key, [6, 600]);
    return fail(tx('errWrongPassword'), 403);
  }
  const token = newToken();
  await env.DB.prepare('UPDATE servers SET token_hash = ? WHERE id = ?').bind(await sha256Hex(token), s.serverId).run();
  await rlClear(env, key);
  return json({ ok: true, token });
}

async function apiPanelCode(env, request, del) {
  if (!F.panelCodeManagement) return fail(tx('errFeatureOff'), 403);
  const s = await serverSession(env, request);
  if (!s) return fail(tx('errNotSignedIn'), 401);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  return del ? deleteCode(env, s.serverId, body) : saveCode(env, s.serverId, body);
}

// --- sign-up flow (public) ---

async function touchActive(env, server) {
  const t = nowSec();
  if (server.active_until < t + L.activeWindowSeconds / 2) {
    await env.DB.prepare('UPDATE servers SET active_until = ? WHERE id = ?').bind(t + L.activeWindowSeconds, server.id).run();
  }
}

async function apiClaimCode(env, request, serverId) {
  const server = await getServer(env, serverId);
  if (!server) return fail(tx('errServerNotFound'), 404);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const key = 'code:' + serverId + ':' + clientIp(request);
  if (await rlBlocked(env, key, L.wrongCodes)) return fail(tx('errCodeRateLimited'), 429);
  const code = normCode(body.code);
  const row = code ? await usableCode(env, serverId, code) : null;
  if (!row) {
    await rlHit(env, key, L.wrongCodes);
    return fail(tx('errInvalidCode'));
  }
  await touchActive(env, server);
  return json({ ok: true });
}

async function queueJob(env, server, type, code, username, password) {
  const id = randomHex(16);
  const t = nowSec();
  await env.DB.prepare('INSERT INTO jobs (id, server_id, type, username, password, code, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, server.id, type, username, password, code, 'pending', t, t).run();
  await touchActive(env, server);
  return id;
}

async function apiClaimUsername(env, request, serverId) {
  const server = await getServer(env, serverId);
  if (!server) return fail(tx('errServerNotFound'), 404);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const code = normCode(body.code);
  const username = String(body.username || '').trim();
  if (!code || !(await usableCode(env, serverId, code))) return fail(tx('errInvalidCode'));
  if (!USER_RE.test(username)) return fail(tx('errUsernameFormat'));
  if (server.last_seen < nowSec() - L.offlineAfterSeconds) return fail(tx('errServerOffline'));

  const key = 'user:' + serverId + ':' + clientIp(request);
  if (await rlBlocked(env, key, L.usernameChecks)) return fail(tx('errTooManyAttempts'), 429);
  await rlHit(env, key, L.usernameChecks);

  return json({ ok: true, job: await queueJob(env, server, 'check_username', code, username, null) });
}

async function apiClaimCreate(env, request, serverId) {
  const server = await getServer(env, serverId);
  if (!server) return fail(tx('errServerNotFound'), 404);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const code = normCode(body.code);
  const username = String(body.username || '').trim();
  const password = body.password;
  if (!code) return fail(tx('errInvalidCode'));
  if (!USER_RE.test(username)) return fail(tx('errUsernameFormat'));
  if (typeof password !== 'string' || password.length < 1 || password.length > L.passwordMax) return fail(tx('errChoosePassword'));
  if (server.last_seen < nowSec() - L.offlineAfterSeconds) return fail(tx('errServerOffline'));

  // Reserve one use of the code up front, so two people can't both take the last one.
  const reserved = await env.DB.prepare(
    'UPDATE codes SET uses = CASE WHEN unlimited = 1 THEN uses ELSE uses - 1 END WHERE server_id = ? AND code = ? AND (unlimited = 1 OR uses > 0)'
  ).bind(serverId, code).run();
  if (reserved.meta.changes !== 1) return fail(tx('errInvalidCode'));

  return json({ ok: true, job: await queueJob(env, server, 'create_account', code, username, password) });
}

async function apiJob(env, jobId) {
  if (!/^[a-f0-9]{32}$/.test(jobId)) return fail(tx('errNoSuchCode'), 404);
  const get = () => env.DB.prepare('SELECT id, server_id, status, error, created_at FROM jobs WHERE id = ?').bind(jobId).first();
  let job = await get();
  if (!job) return fail(tx('errNoSuchCode'), 404);
  if ((job.status === 'pending' || job.status === 'sent') && job.created_at < nowSec() - L.jobTimeoutSeconds) {
    await expireStaleJobs(env, job.server_id);
    job = await get();
  }
  const status = job.status === 'ok' ? 'ok' : job.status === 'error' ? 'error' : 'pending';
  return json({ ok: true, status, error: job.error || '' });
}

// ----------------------------------------------------------------------------
// admin API
// ----------------------------------------------------------------------------

async function apiAdminLogin(env, request) {
  if (!CONFIG.admin.enabled) return fail(tx('errFeatureOff'), 404);
  const pw = adminPassword(env);
  if (!pw) return json({ ok: false, locked: true, error: tx('adminNotConfigured') }, 403);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const key = 'admin:' + clientIp(request);
  if (await rlBlocked(env, key, L.adminSignIn)) return fail(tx('errSignInRateLimited'), 429);
  if (!(await secretMatches(body.password || '', pw))) {
    await rlHit(env, key, L.adminSignIn);
    return fail(tx('errAdminWrong'), 401);
  }
  await rlClear(env, key);
  return json({ ok: true }, 200, { 'set-cookie': await createSession(env, ADMIN_SID, 'pm_admin') });
}

async function apiAdmin(env, request, url, path) {
  if (!CONFIG.admin.enabled) return fail(tx('errFeatureOff'), 404);
  if (path === '/api/admin/login') return apiAdminLogin(env, request);
  if (!adminPassword(env)) return json({ ok: false, locked: true, error: tx('adminNotConfigured') }, 403);

  const s = await adminSession(env, request);
  if (path === '/api/admin/logout') {
    if (s) await env.DB.prepare('DELETE FROM sessions WHERE id_hash = ?').bind(s.idHash).run();
    return json({ ok: true }, 200, { 'set-cookie': cookieHeader('pm_admin', '', 0) });
  }
  if (!s) return fail(tx('errNotSignedIn'), 401);

  if (request.method === 'GET' && path === '/api/admin/servers') {
    const rows = await env.DB.prepare(
      'SELECT id, created_at, last_seen, (SELECT COUNT(*) FROM codes WHERE codes.server_id = servers.id) AS codes FROM servers ORDER BY id LIMIT 1000'
    ).all();
    const t = nowSec() - L.offlineAfterSeconds;
    return json({
      ok: true,
      servers: (rows.results || []).map((r) => ({ id: r.id, createdAt: r.created_at, online: r.last_seen > t, codes: r.codes })),
    });
  }
  if (request.method === 'GET' && path === '/api/admin/server') {
    const info = await serverInfo(env, String(url.searchParams.get('id') || '').toLowerCase());
    return info ? json(Object.assign({ ok: true }, info)) : fail(tx('errServerNotFound'), 404);
  }

  if (request.method !== 'POST') return fail(tx('errBadRequest'), 404);
  const body = await readJson(request);
  if (!body) return fail(tx('errBadRequest'));
  const id = String(body.id || '').trim().toLowerCase();
  const server = ID_RE.test(id) ? await getServer(env, id) : null;
  if (!server) return fail(tx('errServerNotFound'), 404);

  if (path === '/api/admin/code') return saveCode(env, id, body);
  if (path === '/api/admin/code/delete') return deleteCode(env, id, body);

  if (SINGLE) return fail(tx('errFeatureOff'), 403); // password / token / delete are managed in the worker file

  if (path === '/api/admin/server/password') {
    const bad = validatePassword(body.password);
    if (bad) return fail(bad);
    const rec = await newPasswordRecord(body.password);
    await env.DB.batch([
      env.DB.prepare('UPDATE servers SET pass_salt = ?, pass_hash = ? WHERE id = ?').bind(rec.salt, rec.hash, id),
      env.DB.prepare('DELETE FROM sessions WHERE server_id = ?').bind(id),
    ]);
    return json({ ok: true });
  }
  if (path === '/api/admin/server/token') {
    const token = newToken();
    await env.DB.prepare('UPDATE servers SET token_hash = ? WHERE id = ?').bind(await sha256Hex(token), id).run();
    return json({ ok: true, token });
  }
  if (path === '/api/admin/server/delete') {
    await env.DB.batch([
      env.DB.prepare('DELETE FROM servers WHERE id = ?').bind(id),
      env.DB.prepare('DELETE FROM codes WHERE server_id = ?').bind(id),
      env.DB.prepare('DELETE FROM jobs WHERE server_id = ?').bind(id),
      env.DB.prepare('DELETE FROM sessions WHERE server_id = ?').bind(id),
    ]);
    return json({ ok: true });
  }
  return fail(tx('errBadRequest'), 404);
}

// ----------------------------------------------------------------------------
// plugin API (Authorization: Bearer <server token>) - identical to worker.js
// ----------------------------------------------------------------------------

async function touchSeen(env, server, force) {
  const t = nowSec();
  if (force || t - server.last_seen >= 15) {
    await env.DB.prepare('UPDATE servers SET last_seen = ? WHERE id = ?').bind(t, server.id).run();
  }
}

function cleanCodeEntry(c) {
  if (!c || typeof c !== 'object') return null;
  const key = normCode(c.code);
  if (!key) return null;
  const unlimited = c.unlimited === true;
  let uses = Number.isFinite(Number(c.uses)) ? Math.floor(Number(c.uses)) : 0;
  uses = Math.max(0, Math.min(1000000000, uses));
  const owner = typeof c.owner === 'string' && c.owner.length <= 32 ? c.owner : null;
  return { key, display: String(c.code).trim(), uses, unlimited: unlimited ? 1 : 0, owner };
}

async function pluginApi(env, request, path) {
  const server = await getServerByToken(env, request);
  if (!server) return fail('Invalid token.', 401);

  if (path === '/api/plugin/verify') {
    await touchSeen(env, server, true);
    return json({ ok: true, serverId: server.id });
  }

  const body = await readJson(request);
  if (!body) return fail('Bad request.');

  if (path === '/api/plugin/sync') {
    const list = Array.isArray(body.codes) ? body.codes.slice(0, 1000).map(cleanCodeEntry).filter(Boolean) : [];
    const stmts = [env.DB.prepare('DELETE FROM codes WHERE server_id = ?').bind(server.id)];
    for (const c of list) stmts.push(env.DB.prepare(UPSERT_SQL).bind(server.id, c.key, c.display, c.uses, c.unlimited, c.owner));
    await env.DB.batch(stmts);
    await touchSeen(env, server, true);
    return json({ ok: true, count: list.length });
  }

  if (path === '/api/plugin/upsert') {
    const c = cleanCodeEntry(body);
    if (!c) return fail('Invalid code.');
    await env.DB.prepare(UPSERT_SQL).bind(server.id, c.key, c.display, c.uses, c.unlimited, c.owner).run();
    return json({ ok: true });
  }

  if (path === '/api/plugin/delete') {
    const key = normCode(body.code);
    if (!key) return fail('Invalid code.');
    await env.DB.prepare('DELETE FROM codes WHERE server_id = ? AND code = ?').bind(server.id, key).run();
    return json({ ok: true });
  }

  if (path === '/api/plugin/poll') {
    await touchSeen(env, server, false);
    await expireStaleJobs(env, server.id);
    // a code change handed to the plugin that was never confirmed (crash?) goes back in the queue
    await env.DB.prepare("UPDATE jobs SET status = 'pending' WHERE server_id = ? AND type IN ('code_upsert','code_delete') AND status = 'sent' AND updated_at < ?").bind(server.id, nowSec() - 120).run();
    const rows = await env.DB.prepare("SELECT id, type, username, password, code FROM jobs WHERE server_id = ? AND status = 'pending' ORDER BY created_at LIMIT 10").bind(server.id).all();
    const jobs = [];
    for (const j of rows.results || []) {
      const r = await env.DB.prepare("UPDATE jobs SET status = 'sent', password = NULL, updated_at = ? WHERE id = ? AND status = 'pending'").bind(nowSec(), j.id).run();
      if (r.meta.changes !== 1) continue;
      if (j.type === 'code_upsert' || j.type === 'code_delete') {
        let p = {};
        try { p = JSON.parse(j.username); } catch (e) { /* ignore */ }
        jobs.push({ id: j.id, type: j.type, code: p.d || j.code, uses: p.u || 0 });
      } else {
        jobs.push({ id: j.id, type: j.type, username: j.username, password: j.password, code: j.code });
      }
    }
    return json({ ok: true, jobs, fast: jobs.length > 0 || server.active_until > nowSec() });
  }

  if (path === '/api/plugin/result') {
    const id = String(body.id || '');
    const job = await env.DB.prepare('SELECT id, type, code, status FROM jobs WHERE id = ? AND server_id = ?').bind(id, server.id).first();
    if (!job || (job.status !== 'pending' && job.status !== 'sent')) return json({ ok: true, ignored: true });
    const t = nowSec();
    if (body.ok === true) {
      const r = await env.DB.prepare("UPDATE jobs SET status = 'ok', error = NULL, password = NULL, updated_at = ? WHERE id = ? AND status IN ('pending','sent')").bind(t, id).run();
      if (r.meta.changes === 1 && job.type === 'create_account') {
        // a limited code with nothing left is finished
        await env.DB.prepare('DELETE FROM codes WHERE server_id = ? AND code = ? AND unlimited = 0 AND uses <= 0').bind(server.id, job.code).run();
      }
    } else {
      const msg = typeof body.message === 'string' && body.message ? body.message.slice(0, 200) : 'The server could not complete that.';
      const r = await env.DB.prepare("UPDATE jobs SET status = 'error', error = ?, password = NULL, updated_at = ? WHERE id = ? AND status IN ('pending','sent')").bind(msg, t, id).run();
      if (r.meta.changes === 1 && job.type === 'create_account') await refundUse(env, server.id, job.code);
    }
    return json({ ok: true });
  }

  return fail('Not found.', 404);
}

// ----------------------------------------------------------------------------
// router
// ----------------------------------------------------------------------------

function textResponse(msg, status) {
  return new Response(msg, { status, headers: { 'content-type': 'text/plain; charset=utf-8' } });
}

async function route(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '') || '/';
  const method = request.method;

  if (Math.random() < 0.02) ctx.waitUntil(cleanup(env).catch(() => {}));

  if (path.startsWith('/api/')) {
    if (method === 'POST' && !path.startsWith('/api/plugin/') && !sameOrigin(request, url)) return fail('Bad origin.', 403);

    if (path.startsWith('/api/admin/')) return apiAdmin(env, request, url, path);

    if (method === 'GET' && path === '/api/available') return apiAvailable(env, url);
    if (method === 'GET' && path === '/api/panel/info') return apiPanelInfo(env, request);
    let m = /^\/api\/job\/([a-f0-9]+)$/.exec(path);
    if (method === 'GET' && m) return apiJob(env, m[1]);

    if (method === 'POST') {
      if (path === '/api/server/create') return apiCreateServer(env, request);
      if (path === '/api/login') return apiLogin(env, request);
      if (path === '/api/logout') return apiLogout(env, request);
      if (path === '/api/panel/password') return apiPanelPassword(env, request);
      if (path === '/api/panel/token') return apiPanelToken(env, request);
      if (path === '/api/panel/code') return apiPanelCode(env, request, false);
      if (path === '/api/panel/code/delete') return apiPanelCode(env, request, true);
      if (path.startsWith('/api/plugin/')) return pluginApi(env, request, path);
      m = /^\/api\/s\/([a-z0-9_-]+)\/(code|username|create)$/.exec(path);
      if (m) {
        if (m[2] === 'code') return apiClaimCode(env, request, m[1]);
        if (m[2] === 'username') return apiClaimUsername(env, request, m[1]);
        return apiClaimCreate(env, request, m[1]);
      }
    }
    return fail(tx('errBadRequest'), 404);
  }

  if (method !== 'GET' && method !== 'HEAD') return textResponse('Method not allowed', 405);
  if (path === '/favicon.ico') return new Response(null, { status: 204 });

  if (path === '/admin') return CONFIG.admin.enabled ? adminPage() : messagePage('titleNotFound', 'notFoundHeading', '', {}, 404, null);

  const session = await serverSession(env, request);
  if (path === '/') return homePage(session);
  if (path === '/login') return F.serverSignIn ? loginPage(session) : messagePage('titleNotFound', 'notFoundHeading', '', {}, 404, null);
  if (path === '/panel') {
    if (!F.serverSignIn) return messagePage('titleNotFound', 'notFoundHeading', '', {}, 404, null);
    return session ? panelPage(session) : Response.redirect(url.origin + '/login', 302);
  }

  const id = decodeURIComponent(path.slice(1)).toLowerCase();
  if (SINGLE) {
    // the plugin prints <site>/<server id>: send that to the home page
    if (id === CONFIG.single.id) return Response.redirect(url.origin + '/', 302);
  } else if (ID_RE.test(id) && !RESERVED.has(id)) {
    const server = await getServer(env, id);
    if (!server) return messagePage('titleNotFound', 'serverNotFoundHeading', 'serverNotFoundText', { server: id }, 404, session);
    return claimPage(id, session, 'page');
  }
  return messagePage('titleNotFound', 'notFoundHeading', '', {}, 404, session);
}

export default {
  async fetch(request, env, ctx) {
    try {
      if (!env.DB) {
        return new Response('PassMaker: no D1 database is bound. Bind one to this Worker with the variable name DB.', { status: 500 });
      }
      const problem = configProblem(env);
      if (problem && !new URL(request.url).pathname.startsWith('/api/plugin/')) {
        return new Response('PassMaker configuration problem: ' + problem, { status: 500 });
      }
      await ensureSchema(env);
      if (!problem) await ensureSingle(env);
      return await route(request, env, ctx);
    } catch (e) {
      console.error('PassMaker error', e && e.stack ? e.stack : e);
      return json({ ok: false, error: tx('errServer') }, 500);
    }
  },
};
