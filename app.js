const STORAGE_KEY = "wc2026-content-dashboard:v1";
const STATUS_OPTIONS = [
  "Todo",
  "Research",
  "Script",
  "Filming",
  "Posted",
  "Checked",
];
const VIDEO_TYPES = [
  "Full Preview",
  "Quick Pick",
  "Key Battles",
  "Daily Picks",
  "Recap",
];
const TIER_OPTIONS = ["A", "B", "C"];
const CONFIDENCE_OPTIONS = ["Low", "Medium", "High"];
const CHECK_OPTIONS = ["", "Correct", "Wrong", "Partial"];
const STATUS_LABELS = {
  Todo: "Chưa làm",
  Research: "Đang nghiên cứu",
  Script: "Đang viết kịch bản",
  Filming: "Đang quay",
  Posted: "Đã đăng",
  Checked: "Đã kiểm tra",
};
const VIDEO_TYPE_LABELS = {
  "Full Preview": "Xem trước đầy đủ",
  "Quick Pick": "Dự đoán nhanh",
  "Key Battles": "Điểm nóng đối đầu",
  "Daily Picks": "Gợi ý trong ngày",
  Recap: "Tổng kết sau trận",
};
const CONFIDENCE_LABELS = {
  Low: "Thấp",
  Medium: "Trung bình",
  High: "Cao",
};
const CHECK_LABELS = {
  "": "Chưa kiểm tra",
  Correct: "Đúng",
  Wrong: "Sai",
  Partial: "Đúng một phần",
};
const BIG_TEAMS = new Set([
  "Brazil",
  "Argentina",
  "England",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Netherlands",
  "Belgium",
  "Uruguay",
]);
const TIER_B_TEAMS = new Set([
  "Mexico",
  "USA",
  "Canada",
  "Morocco",
  "Croatia",
  "Switzerland",
  "Colombia",
  "Japan",
  "Sweden",
  "Ecuador",
  "Australia",
  "South Korea",
  "Scotland",
  "Türkiye",
  "Senegal",
  "Norway",
  "Austria",
  "Algeria",
  "Ghana",
  "Ivory Coast",
  "Paraguay",
  "Czechia",
]);

const RAW_MATCHES = [
  ["2026-06-12", "02:00", "Mexico", "South Africa", "Bảng A", "Mexico City"],
  ["2026-06-12", "09:00", "South Korea", "Czechia", "Bảng A", "Guadalajara"],
  [
    "2026-06-13",
    "02:00",
    "Canada",
    "Bosnia and Herzegovina",
    "Bảng B",
    "Toronto",
  ],
  ["2026-06-13", "08:00", "USA", "Paraguay", "Bảng D", "Los Angeles"],
  [
    "2026-06-13",
    "11:00",
    "Qatar",
    "Switzerland",
    "Bảng B",
    "San Francisco Bay Area",
  ],
  ["2026-06-14", "05:00", "Brazil", "Morocco", "Bảng C", "New York/New Jersey"],
  ["2026-06-14", "08:00", "Haiti", "Scotland", "Bảng C", "Boston"],
  ["2026-06-15", "00:00", "Germany", "Curaçao", "Bảng E", "Houston"],
  ["2026-06-15", "02:00", "Australia", "Türkiye", "Bảng D", "Vancouver"],
  ["2026-06-15", "03:00", "Netherlands", "Japan", "Bảng F", "Dallas"],
  ["2026-06-15", "06:00", "Ivory Coast", "Ecuador", "Bảng E", "Philadelphia"],
  ["2026-06-15", "09:00", "Sweden", "Tunisia", "Bảng F", "Monterrey"],
  ["2026-06-15", "23:00", "Spain", "Cabo Verde", "Bảng H", "Atlanta"],
  ["2026-06-16", "02:00", "Belgium", "Egypt", "Bảng G", "Seattle"],
  ["2026-06-16", "05:00", "Saudi Arabia", "Uruguay", "Bảng H", "Miami"],
  ["2026-06-16", "08:00", "Iran", "New Zealand", "Bảng G", "Los Angeles"],
  ["2026-06-17", "02:00", "France", "Senegal", "Bảng I", "New York/New Jersey"],
  ["2026-06-17", "02:00", "Iraq", "Norway", "Bảng I", "Boston"],
  ["2026-06-17", "08:00", "Argentina", "Algeria", "Bảng J", "Kansas City"],
  [
    "2026-06-17",
    "11:00",
    "Austria",
    "Jordan",
    "Bảng J",
    "San Francisco Bay Area",
  ],
  ["2026-06-18", "00:00", "Portugal", "DR Congo", "Bảng K", "Houston"],
  ["2026-06-18", "03:00", "England", "Croatia", "Bảng L", "Dallas"],
  ["2026-06-18", "06:00", "Ghana", "Panama", "Bảng L", "Toronto"],
  ["2026-06-18", "09:00", "Uzbekistan", "Colombia", "Bảng K", "Mexico City"],
  ["2026-06-18", "23:00", "Czechia", "South Africa", "Bảng A", "Atlanta"],
  [
    "2026-06-18",
    "23:00",
    "Switzerland",
    "Bosnia and Herzegovina",
    "Bảng B",
    "Los Angeles",
  ],
  ["2026-06-19", "05:00", "Canada", "Qatar", "Bảng B", "Vancouver"],
  ["2026-06-19", "08:00", "Mexico", "South Korea", "Bảng A", "Guadalajara"],
  [
    "2026-06-19",
    "11:00",
    "Türkiye",
    "Paraguay",
    "Bảng D",
    "San Francisco Bay Area",
  ],
  ["2026-06-20", "02:00", "USA", "Australia", "Bảng D", "Seattle"],
  ["2026-06-20", "05:00", "Scotland", "Morocco", "Bảng C", "Boston"],
  ["2026-06-20", "08:00", "Brazil", "Haiti", "Bảng C", "Philadelphia"],
  ["2026-06-20", "11:00", "Tunisia", "Japan", "Bảng F", "Monterrey"],
  ["2026-06-21", "00:00", "Netherlands", "Sweden", "Bảng F", "Houston"],
  ["2026-06-21", "03:00", "Germany", "Ivory Coast", "Bảng E", "Toronto"],
  ["2026-06-21", "07:00", "Ecuador", "Curaçao", "Bảng E", "Kansas City"],
  ["2026-06-21", "23:00", "Spain", "Saudi Arabia", "Bảng H", "Atlanta"],
  ["2026-06-22", "02:00", "Belgium", "Iran", "Bảng G", "Los Angeles"],
  ["2026-06-22", "05:00", "Uruguay", "Cabo Verde", "Bảng H", "Miami"],
  ["2026-06-22", "08:00", "New Zealand", "Egypt", "Bảng G", "Vancouver"],
  ["2026-06-23", "00:00", "Argentina", "Austria", "Bảng J", "Dallas"],
  ["2026-06-23", "04:00", "France", "Iraq", "Bảng I", "Philadelphia"],
  ["2026-06-23", "07:00", "Norway", "Senegal", "Bảng I", "New York/New Jersey"],
  [
    "2026-06-23",
    "10:00",
    "Jordan",
    "Algeria",
    "Bảng J",
    "San Francisco Bay Area",
  ],
  ["2026-06-24", "00:00", "Portugal", "Uzbekistan", "Bảng K", "Houston"],
  ["2026-06-24", "03:00", "England", "Ghana", "Bảng L", "Boston"],
  ["2026-06-24", "06:00", "Panama", "Croatia", "Bảng L", "Toronto"],
  ["2026-06-24", "09:00", "Colombia", "DR Congo", "Bảng K", "Guadalajara"],
  ["2026-06-25", "02:00", "Morocco", "Haiti", "Bảng C", "Atlanta"],
  ["2026-06-25", "02:00", "Switzerland", "Canada", "Bảng B", "Vancouver"],
  [
    "2026-06-25",
    "02:00",
    "Bosnia and Herzegovina",
    "Qatar",
    "Bảng B",
    "Seattle",
  ],
  ["2026-06-25", "05:00", "Scotland", "Brazil", "Bảng C", "Miami"],
  ["2026-06-25", "08:00", "Czechia", "Mexico", "Bảng A", "Mexico City"],
  ["2026-06-25", "08:00", "South Africa", "South Korea", "Bảng A", "Monterrey"],
  ["2026-06-26", "03:00", "Curaçao", "Ivory Coast", "Bảng E", "Philadelphia"],
  [
    "2026-06-26",
    "03:00",
    "Ecuador",
    "Germany",
    "Bảng E",
    "New York/New Jersey",
  ],
  ["2026-06-26", "06:00", "Tunisia", "Netherlands", "Bảng F", "Dallas"],
  ["2026-06-26", "06:00", "Japan", "Sweden", "Bảng F", "Kansas City"],
  ["2026-06-26", "09:00", "Türkiye", "USA", "Bảng D", "Los Angeles"],
  [
    "2026-06-26",
    "09:00",
    "Paraguay",
    "Australia",
    "Bảng D",
    "San Francisco Bay Area",
  ],
  ["2026-06-27", "02:00", "Norway", "France", "Bảng I", "Boston"],
  ["2026-06-27", "02:00", "Senegal", "Iraq", "Bảng I", "Toronto"],
  ["2026-06-27", "07:00", "Cabo Verde", "Saudi Arabia", "Bảng H", "Houston"],
  ["2026-06-27", "07:00", "Uruguay", "Spain", "Bảng H", "Guadalajara"],
  ["2026-06-27", "10:00", "Egypt", "Iran", "Bảng G", "Seattle"],
  ["2026-06-27", "10:00", "New Zealand", "Belgium", "Bảng G", "Vancouver"],
  ["2026-06-28", "04:00", "Panama", "England", "Bảng L", "New York/New Jersey"],
  ["2026-06-28", "04:00", "Croatia", "Ghana", "Bảng L", "Philadelphia"],
  ["2026-06-28", "06:30", "Colombia", "Portugal", "Bảng K", "Miami"],
  ["2026-06-28", "06:30", "DR Congo", "Uzbekistan", "Bảng K", "Atlanta"],
  ["2026-06-28", "09:00", "Algeria", "Austria", "Bảng J", "Kansas City"],
  ["2026-06-28", "09:00", "Jordan", "Argentina", "Bảng J", "Dallas"],
];

const DEFAULT_MATCHES = RAW_MATCHES.map((row, index) =>
  buildDefaultMatch(row, index),
);
const initialMatches = loadMatches();

let state = {
  matches: initialMatches,
  selectedDate: getDates(initialMatches)[0] || getDates(DEFAULT_MATCHES)[0],
  filters: {
    group: "all",
    team: "all",
    tier: "all",
    status: "all",
    videoType: "all",
  },
  activeMatchId: null,
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  populateControls();
  bindEvents();
  render();
});

function buildDefaultMatch(row, index) {
  const [vnDate, vnTime, homeTeam, awayTeam, group, city] = row;
  const tier = inferTier(homeTeam, awayTeam);
  const videoType = inferVideoType(tier, index);
  const predictedScore = tier === "A" ? "2-0" : tier === "B" ? "1-1" : "1-0";
  const publishTime = subtractHours(vnTime, tier === "A" ? 6 : 4);

  return {
    id: `match-${String(index + 1).padStart(2, "0")}`,
    matchNumber: index + 1,
    vnDate,
    vnTime,
    group,
    homeTeam,
    awayTeam,
    city,
    tier,
    videoType,
    status: "Todo",
    publishTime,
    predictedScore,
    notes:
      tier === "A"
        ? "Ưu tiên bản kế hoạch sâu, câu mở đầu mạnh và đăng sớm."
        : tier === "B"
          ? "Theo dõi đội hình, có thể làm dự đoán nhanh."
          : "Nội dung ngắn, tập trung góc nhìn dễ hiểu.",
    researchNotes: `Theo dõi phong độ, đội hình dự kiến và bối cảnh bảng đấu của ${homeTeam} vs ${awayTeam}.`,
    keyPlayers: `${homeTeam}: cầu thủ chủ lực\n${awayTeam}: cầu thủ chủ lực`,
    teamNews: "Cập nhật chấn thương, treo giò và đội hình trước giờ quay.",
    tacticalNotes:
      "Ghi lại pressing, transition, set-piece và điểm yếu phòng ngự hai đội.",
    keyBattles: `1. Trung tuyến ${homeTeam} vs ${awayTeam}\n2. Cánh trái vs hậu vệ phải\n3. Tình huống cố định`,
    confidenceLevel: tier === "A" ? "High" : tier === "B" ? "Medium" : "Low",
    hook: `Trận ${homeTeam} vs ${awayTeam} có thể quyết định nhịp của ${group} ngay từ những phút đầu.`,
    scriptOutline: makeScriptTemplate({
      homeTeam,
      awayTeam,
      group,
      predictedScore,
    }),
    captionEn: `${homeTeam} vs ${awayTeam}: match preview, key battles and score prediction for World Cup 2026.`,
    captionVi: `${homeTeam} vs ${awayTeam}: xem nhanh bối cảnh, điểm nóng chiến thuật và dự đoán tỷ số World Cup 2026.`,
    hashtags:
      "#WorldCup2026 #FootballPreview #TikTokFootball #ReelsFootball #Shorts",
    commentQuestion: `Bạn dự đoán ${homeTeam} hay ${awayTeam} sẽ thắng?`,
    result: "",
    predictionCheck: "",
  };
}

function inferTier(homeTeam, awayTeam) {
  if (BIG_TEAMS.has(homeTeam) || BIG_TEAMS.has(awayTeam)) return "A";
  if (TIER_B_TEAMS.has(homeTeam) || TIER_B_TEAMS.has(awayTeam)) return "B";
  return "C";
}

function inferVideoType(tier, index) {
  if (tier === "A") return index % 3 === 0 ? "Full Preview" : "Key Battles";
  if (tier === "B") return index % 2 === 0 ? "Quick Pick" : "Daily Picks";
  return "Recap";
}

function subtractHours(time, hours) {
  const [hh, mm] = time.split(":").map(Number);
  const next = (hh - hours + 24) % 24;
  return `${String(next).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

function makeScriptTemplate(match) {
  return [
    `Câu mở đầu 3 giây: Vì sao ${match.homeTeam} vs ${match.awayTeam} đáng xem?`,
    `Bối cảnh trận đấu: ${match.group}, áp lực điểm số và nhịp thi đấu.`,
    "3 điểm nóng chiến thuật: pressing, chuyển trạng thái, set-piece.",
    "Cầu thủ đáng xem: chọn 1 ngôi sao và 1 nhân tố tạo khác biệt.",
    `Dự đoán tỷ số: ${match.predictedScore}.`,
    "Câu hỏi kéo bình luận: Bạn chọn đội nào thắng?",
  ].join("\n");
}

function cacheElements() {
  [
    "heroDate",
    "heroProgressText",
    "heroProgressBar",
    "dateFilter",
    "groupFilter",
    "teamFilter",
    "tierFilter",
    "statusFilter",
    "videoTypeFilter",
    "resetBtn",
    "exportBtn",
    "importBtn",
    "importFile",
    "statTotal",
    "statTodo",
    "statWorking",
    "statPosted",
    "statTierA",
    "listTitle",
    "resultCount",
    "matchesList",
    "emptyState",
    "modalOverlay",
    "closeModalBtn",
    "modalMeta",
    "modalTitle",
    "modalSubtitle",
    "matchForm",
    "quickCheckBtn",
    "resultHint",
    "toast",
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function populateControls() {
  fillSelect(
    els.dateFilter,
    getDates(state.matches).map((date) => [date, formatDate(date)]),
    state.selectedDate,
  );
  fillSelect(
    els.groupFilter,
    [
      ["all", "Tất cả bảng"],
      ...unique(state.matches.map((m) => m.group)).map((g) => [g, g]),
    ],
    "all",
  );
  fillSelect(
    els.teamFilter,
    [
      ["all", "Tất cả đội"],
      ...getTeams(state.matches).map((team) => [team, team]),
    ],
    "all",
  );
  fillSelect(
    els.tierFilter,
    [
      ["all", "Tất cả tier"],
      ...TIER_OPTIONS.map((tier) => [tier, `Tier ${tier}`]),
    ],
    "all",
  );
  fillSelect(
    els.statusFilter,
    [
      ["all", "Tất cả trạng thái"],
      ...STATUS_OPTIONS.map((status) => [status, labelStatus(status)]),
    ],
    "all",
  );
  fillSelect(
    els.videoTypeFilter,
    [
      ["all", "Tất cả loại video"],
      ...VIDEO_TYPES.map((type) => [type, labelVideoType(type)]),
    ],
    "all",
  );

  fillSelect(
    els.matchForm.elements.tier,
    TIER_OPTIONS.map((tier) => [tier, `Tier ${tier}`]),
  );
  fillSelect(
    els.matchForm.elements.videoType,
    VIDEO_TYPES.map((type) => [type, labelVideoType(type)]),
  );
  fillSelect(
    els.matchForm.elements.status,
    STATUS_OPTIONS.map((status) => [status, labelStatus(status)]),
  );
  fillSelect(
    els.matchForm.elements.confidenceLevel,
    CONFIDENCE_OPTIONS.map((value) => [value, labelConfidence(value)]),
  );
  fillSelect(
    els.matchForm.elements.predictionCheck,
    CHECK_OPTIONS.map((value) => [value, labelCheck(value)]),
  );
}

function fillSelect(select, entries, value) {
  select.innerHTML = entries
    .map(
      ([optionValue, label]) =>
        `<option value="${escapeAttr(optionValue)}">${escapeHtml(label)}</option>`,
    )
    .join("");
  if (value !== undefined) select.value = value;
}

function bindEvents() {
  els.dateFilter.addEventListener("change", () => {
    state.selectedDate = els.dateFilter.value;
    renderWithTransition();
  });

  [
    ["groupFilter", "group"],
    ["teamFilter", "team"],
    ["tierFilter", "tier"],
    ["statusFilter", "status"],
    ["videoTypeFilter", "videoType"],
  ].forEach(([id, key]) => {
    els[id].addEventListener("change", () => {
      state.filters[key] = els[id].value;
      renderWithTransition();
    });
  });

  els.matchesList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-match-id]");
    if (card) openModal(card.dataset.matchId);
  });

  els.closeModalBtn.addEventListener("click", closeModal);
  els.modalOverlay.addEventListener("click", (event) => {
    if (event.target === els.modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.modalOverlay.hidden) closeModal();
  });

  els.matchForm.addEventListener("input", handleFormChange);
  els.matchForm.addEventListener("change", handleFormChange);
  els.quickCheckBtn.addEventListener("click", quickCheckResult);

  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", () => copyContent(button.dataset.copy));
  });

  els.resetBtn.addEventListener("click", resetData);
  els.exportBtn.addEventListener("click", exportData);
  els.importBtn.addEventListener("click", () => els.importFile.click());
  els.importFile.addEventListener("change", importData);
}

function renderWithTransition() {
  els.matchesList.classList.add("is-refreshing");
  window.setTimeout(() => {
    render();
    els.matchesList.classList.remove("is-refreshing");
  }, 120);
}

function render() {
  const dayMatches = state.matches.filter(
    (match) => match.vnDate === state.selectedDate,
  );
  const filteredMatches = getFilteredMatches();
  renderHero(dayMatches);
  renderStats(dayMatches);
  renderMatches(filteredMatches);
  els.listTitle.textContent = `Lịch ngày ${formatDate(state.selectedDate)}`;
  els.resultCount.textContent = `${filteredMatches.length} trận`;
}

function renderHero(dayMatches) {
  const posted = dayMatches.filter((m) =>
    ["Posted", "Checked"].includes(m.status),
  ).length;
  const total = dayMatches.length;
  const percent = total ? Math.round((posted / total) * 100) : 0;
  els.heroDate.textContent = formatDate(state.selectedDate);
  els.heroProgressText.textContent = `${posted}/${total}`;
  els.heroProgressBar.style.width = `${percent}%`;
}

function renderStats(dayMatches) {
  els.statTotal.textContent = dayMatches.length;
  els.statTodo.textContent = dayMatches.filter(
    (m) => m.status === "Todo",
  ).length;
  els.statWorking.textContent = dayMatches.filter((m) =>
    ["Research", "Script"].includes(m.status),
  ).length;
  els.statPosted.textContent = dayMatches.filter(
    (m) => m.status === "Posted",
  ).length;
  els.statTierA.textContent = dayMatches.filter((m) => m.tier === "A").length;
}

function renderMatches(matches) {
  els.emptyState.hidden = matches.length > 0;
  els.matchesList.innerHTML = matches.map(renderMatchCard).join("");
}

function renderMatchCard(match) {
  const tierClass = `badge-tier-${match.tier.toLowerCase()}`;
  const statusClass = `status-${match.status.toLowerCase()}`;
  const tierColor =
    match.tier === "A" ? "#ffd166" : match.tier === "B" ? "#48a6ff" : "#d7dce0";

  return `
    <button class="match-card" type="button" data-match-id="${escapeAttr(match.id)}" style="--tier-color: ${tierColor}">
      <div class="match-time">
        <strong>${escapeHtml(match.vnTime)}</strong>
        <span>Giờ VN</span>
      </div>
      <div class="match-main">
        <div class="badge-row">
          <span class="badge ${tierClass}">Tier ${escapeHtml(match.tier)}</span>
          <span class="badge ${statusClass}">${escapeHtml(labelStatus(match.status))}</span>
          <span class="badge">${escapeHtml(labelVideoType(match.videoType))}</span>
          ${match.result ? `<span class="badge badge-result">KQ ${escapeHtml(match.result)} · ${escapeHtml(labelCheck(match.predictionCheck))}</span>` : ""}
        </div>
        <h3>${escapeHtml(match.homeTeam)} vs ${escapeHtml(match.awayTeam)}</h3>
        <p class="match-meta">${escapeHtml(match.group)} · ${escapeHtml(match.city)} · Đăng ${escapeHtml(match.publishTime || "--:--")} · Dự đoán ${escapeHtml(match.predictedScore || "Chưa có")}</p>
        <p class="card-note">${escapeHtml(match.notes || "Chưa có ghi chú.")}</p>
      </div>
      <div class="card-actions">
        <span class="brief-cta">Mở kế hoạch</span>
      </div>
    </button>
  `;
}

function getFilteredMatches() {
  return state.matches
    .filter((match) => match.vnDate === state.selectedDate)
    .filter(
      (match) =>
        state.filters.group === "all" || match.group === state.filters.group,
    )
    .filter(
      (match) =>
        state.filters.team === "all" ||
        match.homeTeam === state.filters.team ||
        match.awayTeam === state.filters.team,
    )
    .filter(
      (match) =>
        state.filters.tier === "all" || match.tier === state.filters.tier,
    )
    .filter(
      (match) =>
        state.filters.status === "all" || match.status === state.filters.status,
    )
    .filter(
      (match) =>
        state.filters.videoType === "all" ||
        match.videoType === state.filters.videoType,
    )
    .sort(
      (a, b) =>
        a.vnTime.localeCompare(b.vnTime) || a.matchNumber - b.matchNumber,
    );
}

function openModal(matchId) {
  const match = findMatch(matchId);
  if (!match) return;
  state.activeMatchId = matchId;
  updateModalMeta(match);
  els.modalTitle.textContent = `${match.homeTeam} vs ${match.awayTeam}`;
  els.modalSubtitle.textContent = `${formatDate(match.vnDate)} · ${match.city}`;

  Array.from(els.matchForm.elements).forEach((field) => {
    if (!field.name) return;
    field.value = match[field.name] ?? "";
  });

  els.modalOverlay.hidden = false;
  window.setTimeout(() => els.closeModalBtn.focus(), 50);
}

function closeModal() {
  els.modalOverlay.hidden = true;
  state.activeMatchId = null;
}

function handleFormChange(event) {
  const field = event.target;
  if (!state.activeMatchId || !field.name) return;
  const match = findMatch(state.activeMatchId);
  if (!match) return;
  match[field.name] = field.value;
  saveMatches();
  render();

  updateModalMeta(match);
}

function quickCheckResult() {
  const match = findMatch(state.activeMatchId);
  if (!match) return;

  const result = els.matchForm.elements.result.value.trim();
  const predicted = els.matchForm.elements.predictedScore.value.trim();
  if (!parseScore(result)) {
    showToast("Hãy nhập kết quả thật theo dạng 2-1 hoặc 2:1.");
    els.matchForm.elements.result.focus();
    return;
  }

  match.result = normalizeScore(result);
  match.predictedScore = predicted;
  match.predictionCheck = judgePrediction(predicted, result);
  match.status = "Checked";

  els.matchForm.elements.result.value = match.result;
  els.matchForm.elements.predictionCheck.value = match.predictionCheck;
  els.matchForm.elements.status.value = match.status;

  saveMatches();
  render();
  updateModalMeta(match);
  showToast(`Đã chấm: ${labelCheck(match.predictionCheck)}. Trận được đánh dấu đã kiểm tra.`);
}

function updateModalMeta(match) {
  els.modalMeta.textContent = `${match.vnTime} · ${match.group} · Trận #${match.matchNumber} · Tier ${match.tier} · ${labelStatus(match.status)}`;
}

function copyContent(type) {
  const match = findMatch(state.activeMatchId);
  if (!match) return;

  const contentMap = {
    hook: match.hook,
    script: makeScriptTemplate(match),
    captionEn: match.captionEn,
    captionVi: match.captionVi,
    hashtags: match.hashtags,
    full: makeFullBrief(match),
  };

  copyText(contentMap[type] || "")
    .then(() => {
      showToast("Đã chép nội dung vào bộ nhớ tạm.");
    })
    .catch(() => {
      showToast(
        "Không thể chép tự động. Hãy chọn nội dung trong bản kế hoạch và chép thủ công.",
      );
    });
}

function makeFullBrief(match) {
  return [
    `TRẬN ĐẤU: ${match.homeTeam} vs ${match.awayTeam}`,
    `GIỜ VIỆT NAM: ${match.vnDate} ${match.vnTime}`,
    `BẢNG/THÀNH PHỐ: ${match.group} · ${match.city}`,
    `TIER/TRẠNG THÁI: Tier ${match.tier} · ${labelStatus(match.status)}`,
    `LOẠI VIDEO: ${labelVideoType(match.videoType)}`,
    `GIỜ ĐĂNG: ${match.publishTime}`,
    `DỰ ĐOÁN: ${match.predictedScore} (${labelConfidence(match.confidenceLevel)})`,
    `KẾT QUẢ: ${match.result || "Chưa cập nhật"}`,
    `KIỂM TRA DỰ ĐOÁN: ${labelCheck(match.predictionCheck)}`,
    "",
    `CÂU MỞ ĐẦU:\n${match.hook}`,
    "",
    `GHI CHÚ NGHIÊN CỨU:\n${match.researchNotes}`,
    "",
    `CẦU THỦ ĐÁNG CHÚ Ý:\n${match.keyPlayers}`,
    "",
    `CHIẾN THUẬT:\n${match.tacticalNotes}`,
    "",
    `ĐIỂM NÓNG ĐỐI ĐẦU:\n${match.keyBattles}`,
    "",
    `KỊCH BẢN:\n${match.scriptOutline}`,
    "",
    `MÔ TẢ EN:\n${match.captionEn}`,
    "",
    `MÔ TẢ VI:\n${match.captionVi}`,
    "",
    `HASHTAG:\n${match.hashtags}`,
    "",
    `CÂU HỎI KÉO BÌNH LUẬN:\n${match.commentQuestion}`,
  ].join("\n");
}

function judgePrediction(predictedScore, actualScore) {
  const predicted = parseScore(predictedScore);
  const actual = parseScore(actualScore);
  if (!predicted || !actual) return "";
  if (predicted.home === actual.home && predicted.away === actual.away) return "Correct";
  if (getOutcome(predicted) === getOutcome(actual)) return "Partial";
  return "Wrong";
}

function getOutcome(score) {
  if (score.home > score.away) return "home";
  if (score.home < score.away) return "away";
  return "draw";
}

function normalizeScore(value) {
  const score = parseScore(value);
  return score ? `${score.home}-${score.away}` : "";
}

function parseScore(value) {
  const match = String(value || "").trim().match(/^(\d{1,2})\s*[-:]\s*(\d{1,2})$/);
  if (!match) return null;
  return {
    home: Number(match[1]),
    away: Number(match[2]),
  };
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!ok) throw new Error("copy failed");
}

function resetData() {
  const confirmed = window.confirm("Reset toàn bộ dữ liệu về mặc định?");
  if (!confirmed) return;
  state.matches = clone(DEFAULT_MATCHES);
  state.selectedDate = getDates(state.matches)[0];
  state.filters = {
    group: "all",
    team: "all",
    tier: "all",
    status: "all",
    videoType: "all",
  };
  saveMatches();
  populateControls();
  render();
  showToast("Đã khôi phục dữ liệu mặc định.");
}

function exportData() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    matches: state.matches,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `wc2026-content-dashboard-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("Đã xuất file JSON.");
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = Array.isArray(parsed) ? parsed : parsed.matches;
      if (!Array.isArray(incoming) || incoming.length === 0) {
        throw new Error("Missing matches");
      }
      const normalized = incoming.map(normalizeImportedMatch);
      state.matches = normalized;
      state.selectedDate = getDates(state.matches)[0] || state.selectedDate;
      state.filters = {
        group: "all",
        team: "all",
        tier: "all",
        status: "all",
        videoType: "all",
      };
      saveMatches();
      populateControls();
      render();
      showToast("Nhập JSON thành công.");
    } catch (error) {
      showToast("Nhập thất bại: file JSON không đúng định dạng.");
    } finally {
      els.importFile.value = "";
    }
  };
  reader.readAsText(file);
}

function normalizeImportedMatch(match, index) {
  const fallback = DEFAULT_MATCHES[index] || DEFAULT_MATCHES[0];
  const merged = { ...fallback, ...match };
  if (
    !merged.id ||
    !merged.vnDate ||
    !merged.vnTime ||
    !merged.homeTeam ||
    !merged.awayTeam
  ) {
    throw new Error("Invalid match");
  }
  if (!TIER_OPTIONS.includes(merged.tier))
    merged.tier = inferTier(merged.homeTeam, merged.awayTeam);
  if (!STATUS_OPTIONS.includes(merged.status)) merged.status = "Todo";
  if (!VIDEO_TYPES.includes(merged.videoType))
    merged.videoType = inferVideoType(merged.tier, index);
  if (!CONFIDENCE_OPTIONS.includes(merged.confidenceLevel))
    merged.confidenceLevel = "Medium";
  if (!CHECK_OPTIONS.includes(merged.predictionCheck))
    merged.predictionCheck = "";
  return merged;
}

function loadMatches() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(DEFAULT_MATCHES);
    const parsed = JSON.parse(raw);
    const matches = Array.isArray(parsed) ? parsed : parsed.matches;
    if (!Array.isArray(matches) || matches.length === 0)
      return clone(DEFAULT_MATCHES);
    return matches.map(normalizeImportedMatch);
  } catch (error) {
    return clone(DEFAULT_MATCHES);
  }
}

function saveMatches() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ version: 1, matches: state.matches }),
  );
}

function findMatch(matchId) {
  return state.matches.find((match) => match.id === matchId);
}

function getDates(matches) {
  return unique(matches.map((match) => match.vnDate)).sort();
}

function getTeams(matches) {
  return unique(
    matches.flatMap((match) => [match.homeTeam, match.awayTeam]),
  ).sort((a, b) => a.localeCompare(b));
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function formatDate(date) {
  const parsed = new Date(`${date}T00:00:00+07:00`);
  return new Intl.DateTimeFormat("vi-VN", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parsed);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.hidden = true;
  }, 2600);
}

function labelStatus(value) {
  return STATUS_LABELS[value] || value || "Chưa rõ";
}

function labelVideoType(value) {
  return VIDEO_TYPE_LABELS[value] || value || "Chưa chọn";
}

function labelConfidence(value) {
  return CONFIDENCE_LABELS[value] || value || "Chưa chọn";
}

function labelCheck(value) {
  return CHECK_LABELS[value] || value || "Chưa kiểm tra";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
