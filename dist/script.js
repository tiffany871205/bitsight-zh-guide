const groups = [
  ['開始使用', [
    ['home','導覽首頁','Home','理解持續監控的整體流程與文件使用方式。'],
    ['dashboard','儀表板','Dashboard','快速查看投資組合的風險概況與近期變化。']
  ]],
  ['投資組合風險', [
    ['companies','公司清單','Companies List','集中管理與查詢受監控的公司。'],
    ['fi-assessments','框架評估','Assessments (FI)','查看與評估架構相關的資料。'],
    ['critical-assets','關鍵資產','Critical Assets','辨識需要優先關注的資產。'],
    ['compare','公司比較','Compare Companies','並排比較多家公司的風險資訊。'],
    ['discovery','供應商探索','Vendor Discovery','發現可能與組織有關聯的供應商。'],
    ['expired','到期訂閱','Expired Subscriptions','查看已到期的監控訂閱。']
  ]],
  ['供應商風險', [
    ['vendor-overview','總覽','Overview','整合單一供應商的風險概況。'],
    ['framework','框架情報','Framework Intelligence','查看與資安框架有關的資訊。'],
    ['instant','即時洞察','Instant Insights','快速理解供應商的主要風險訊號。'],
    ['assessments','評估','Assessments','查看與管理供應商評估。'],
    ['vectors','風險面向','Risk Vectors','按風險類別檢視評等構成。'],
    ['findings','發現事項','Findings','追查具體的資安發現。'],
    ['threat','威脅洞察','Threat Insights','聚焦與威脅相關的訊號。'],
    ['tree','評等樹','Ratings Tree','理解母子公司或組織層級的評等關係。'],
    ['remediation','改善追蹤','Remediation','追蹤問題修復與改善溝通。'],
    ['infrastructure','基礎設施','Infrastructure','檢視與公司相關的網路資產。']
  ]],
  ['跨模組功能', [
    ['breach','資料外洩情報','Breach Intelligence','檢視與資料外洩事件相關的資訊。'],
    ['vulnerability','弱點偵測','Vulnerability Detection','查看可觀測到的弱點訊號。'],
    ['fourth-overview','第四方總覽','4th Party Risk Overview','理解供應商背後的服務提供者風險。'],
    ['providers','服務提供者','Service Providers','檢視第四方服務提供者。'],
    ['products','產品','Products','檢視產品與供應鏈關聯。'],
    ['portfolio-alerts','投資組合警示','Portfolio Alerts','追蹤投資組合的變動通知。'],
    ['fourth-alerts','第四方警示','Fourth Party Alerts','追蹤第四方風險變動。'],
    ['reports','報表','Reports','產生與查看風險報表。']
  ]],
  ['協作與設定', [
    ['invitations','存取邀請','Access Invitations','邀請相關人員存取資訊。'],
    ['access-links','供應商存取連結','Vendor Access Links','管理供應商使用的存取連結。'],
    ['contacts','供應商聯絡人','Vendor Contacts','維護供應商聯絡資料。'],
    ['alert-settings','警示設定','Alert Settings','設定要接收的警示條件。'],
    ['folders','資料夾管理','Folder Management','用資料夾整理監控中的公司。'],
    ['tiers','層級設定','Tier Settings','建立供應商重要性分層。'],
    ['integrations','整合','Integrations','檢視外部工具的整合入口。']
  ]]
];

const pages = Object.fromEntries(groups.flatMap(([group, items]) => items.map(([id, zh, en, summary]) => [id,{id,group,zh,en,summary}])));
const details = {
  dashboard:['確認整體風險狀況','觀察評等、警示與趨勢，找出需要深入調查的公司。','點選摘要指標或圖表，進入對應的公司、警示或風險畫面。'],
  companies:['管理受監控公司','利用搜尋、資料夾、層級、關係、訂閱類型與安全評等篩選清單。','點選公司名稱，進入個別公司的風險頁面；可調整欄位或匯出清單。'],
  'fi-assessments':['查看框架評估','整理與資安框架有關的評估資料，供風險審查時參考。','從清單選擇評估，確認狀態、對象與內容。'],
  'critical-assets':['優先處理關鍵資產','區分一般資產與業務上更重要的資產，讓調查順序更清楚。','篩選資產，查看相關公司與發現事項。'],
  compare:['比較多家公司','將評等及其他指標放在同一視角，協助選擇調查優先順序。','選擇公司後比較差異，並回到個別公司頁面追查。'],
  discovery:['辨識潛在供應商','查看系統發現的公司、關聯確定程度與相關性。','先檢查建議理由，再決定是否納入監控。'],
  expired:['檢查監控中斷','找出到期訂閱，避免因監控期限結束而失去追蹤。','確認公司與到期資訊，再按內部流程處理續訂。'],
  'vendor-overview':['閱讀單一供應商概況','將評等、趨勢與風險資訊集中呈現。','從公司清單選一家公司後，依需要切換左側子頁。'],
  framework:['對照資安框架','以框架角度整理與供應商相關的資安資料。','查看適用的評估與項目，記錄後續要確認的問題。'],
  instant:['快速掌握重點','把值得注意的風險訊號彙整成可優先閱讀的摘要。','從摘要選一項訊號，回到原始資訊確認細節。'],
  assessments:['檢視評估紀錄','集中查看供應商評估及狀態。','選擇評估、檢查回覆或結果，並記錄待追蹤事項。'],
  vectors:['拆解評等構成','按風險面向理解總評等背後的差異。','選擇評分較弱的面向，再往發現事項追查。'],
  findings:['追查具體問題','查看可觀測到的資安發現及其細節。','運用篩選縮小範圍，核對問題、時間與相關資產。'],
  threat:['聚焦威脅訊號','閱讀與供應商相關的威脅情報。','核對訊號來源與背景，再決定是否需要升級處理。'],
  tree:['理解組織關係','以階層方式查看公司的關聯與評等。','切換組織節點，確認目前評估對象的範圍。'],
  remediation:['追蹤改善進度','管理風險改善事項與供應商溝通。','先確認發現，再記錄改善狀態與後續追蹤。'],
  infrastructure:['了解技術範圍','查看與公司相關的網路基礎設施資料。','從資產或技術資料連回發現事項，確認影響範圍。'],
  breach:['檢查外洩事件','彙整可能影響受監控公司的資料外洩情報。','核對事件對象、日期與影響，再開啟公司頁面深入調查。'],
  vulnerability:['查看弱點訊號','將可見的弱點資訊作為風險調查線索。','按嚴重程度或公司篩選，逐項確認相關資產。'],
  'fourth-overview':['理解第四方風險','從供應商往下看其服務提供者與產品依賴。','先查看總覽，再進入服務提供者或產品清單。'],
  providers:['檢視共同服務提供者','找出多家供應商可能共同依賴的服務商。','點選服務商，查看相關的供應商與暴露程度。'],
  products:['檢視產品依賴','從產品角度理解供應鏈中的共同依賴。','選擇產品，查看其關聯的服務商或供應商。'],
  'portfolio-alerts':['追蹤風險變化','檢視受監控公司出現的重要變動。','按時間或類型篩選，處理需要回應的警示。'],
  'fourth-alerts':['追蹤第四方變動','聚焦供應鏈下游服務商的變化。','查看警示對應的服務提供者與受影響公司。'],
  reports:['呈現風險成果','以報表整理投資組合與供應商風險資訊。','選擇報表類型、範圍與輸出方式。'],
  invitations:['邀請協作者','讓授權人員參與檢視與處理。','建立邀請前確認對象與權限，再送出。'],
  'access-links':['管理供應商存取入口','提供供應商參與協作所需的連結。','建立或檢查連結時，注意期限與可存取範圍。'],
  contacts:['維護聯絡資訊','集中管理供應商聯絡人，方便評估和改善溝通。','搜尋供應商，核對聯絡人與負責事項。'],
  'alert-settings':['調整通知條件','決定哪些風險變動要被提醒。','檢查警示類型、門檻及接收者。'],
  folders:['整理公司清單','依部門、業務、專案或其他管理方式分組。','建立資料夾並將公司分類，回到清單套用資料夾篩選。'],
  tiers:['設定供應商層級','依重要性將公司分層，協助決定審查與追蹤強度。','定義層級後，將公司指派到適當層級。'],
  integrations:['連接其他工具','查看可供串接的外部系統。','先確認整合用途與必要權限，再依組織流程設定。']
};

const uiTerms = [
  ['Security Rating','安全評等'],['Trend','趨勢'],['Tier','層級'],['Relationship','關係'],
  ['Subscription Type','訂閱類型'],['Folder','資料夾'],['Vendor Action Plan','供應商行動計畫'],
  ['Life Cycle','生命週期'],['Risk Vector Grade','風險面向等級'],['Open Ports','開放埠'],
  ['Public Disclosures','公開揭露'],['Download as CSV','下載 CSV'],['Columns','欄位'],['Views','檢視方式']
];

const nav = document.getElementById('nav');
const main = document.getElementById('main');
const crumb = document.getElementById('crumb');
const search = document.getElementById('search');
const dialog = document.getElementById('tour');
let current = 'home';
const groupGuides = {
  '投資組合風險':'先確認監控範圍，再比較公司與資產，找出需要深入檢查的對象。',
  '供應商風險':'選定一家公司後，從總覽往風險面向與具體發現逐層查證。',
  '跨模組功能':'把個別供應商的線索連到第四方依賴、警示與報表。',
  '協作與設定':'整理分工、聯絡方式與提醒規則，讓後續追蹤不中斷。'
};

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderNav(filter=''){
  const q=filter.trim().toLowerCase();
  nav.innerHTML=groups.map(([group,items])=>{
    const found=items.filter(([,zh,en,summary])=>(zh+' '+en+' '+summary).toLowerCase().includes(q));
    if(!found.length)return '';
    return `<div class="nav-group"><div class="group-title">${group}</div>${found.map(([id,zh,en])=>`<button class="nav-item ${id===current?'active':''}" data-page="${id}" ${id===current?'aria-current="page"':''}><span>${zh}</span><small>${en}</small></button>`).join('')}</div>`;
  }).join('') || '<p class="no-results">沒有符合的主題，請改用較短的關鍵字。</p>';
}
function home(){
  const total=Object.keys(pages).length-1;
  return `<article class="doc"><div class="eyebrow">CONTINUOUS MONITORING / 學習索引</div><h1>從監控名單到風險追蹤</h1><p class="lead">這份繁體中文教學索引整理 ${total} 個功能主題。先用下方路徑建立工作脈絡，再從目錄查詢原介面的英文名稱。</p><div class="callout"><strong>閱讀前先知道</strong><br>這是獨立製作的教學文件，非 BitSight 官方文件；不連接帳號，也不提供實際操作。功能名稱、可見資料與操作步驟可能因版本、授權及權限而異，請以你目前的原系統為準。</div><h2>建議從這四步開始</h2><div class="journey">${[['companies','01','確認監控對象','在公司清單找到供應商，確認公司名稱、關係及監控範圍。'],['vendor-overview','02','閱讀風險概況','從單一供應商總覽判斷趨勢，再往風險面向深入。'],['findings','03','核對具體發現','檢查發現事項的時間、資產和內容，不只看總評等。'],['portfolio-alerts','04','持續追蹤變化','設定追蹤節奏，將警示與後續處理連結起來。']].map(([id,n,title,body])=>`<button class="journey-item" data-page="${id}"><b>${n}</b><span><strong>${title}</strong><small>${body}</small></span></button>`).join('')}</div><h2>依工作範圍找主題</h2><div class="feature-grid">${groups.slice(1).map(([group,items])=>`<section class="feature-card"><strong>${group}</strong><p>${groupGuides[group]}</p><small>${items.length} 個主題</small><button class="text-link" data-page="${items[0][0]}">閱讀${items[0][1]} →</button></section>`).join('')}</div><h2>常見英文術語</h2><p>中文譯名用於查找與教學，非官方介面譯文。</p>${uiTerms.slice(0,6).map(([en,zh])=>`<div class="term"><strong>${en}</strong><span>${zh}</span></div>`).join('')}</article>`;
}
function page(p){
  const d=details[p.id]||['認識功能','查看相關資訊。','依畫面提示進行操作。'];
  const related=groups.find(g=>g[0]===p.group)[1].filter(x=>x[0]!==p.id).slice(0,4);
  const terms=p.id==='companies'?uiTerms:[[p.en,p.zh]];
  return `<article class="doc"><button class="back-link" data-page="home">← 返回學習索引</button><div class="eyebrow">${esc(p.group)} / ${esc(p.en)}</div><h1>${esc(p.zh)}</h1><p class="lead">${esc(p.summary)}</p><div class="callout"><strong>何時使用</strong><br>${esc(d[0])}。${esc(groupGuides[p.group]||'先了解整體監控工作流程。')}</div><h2>它能幫你看什麼</h2><p>${esc(d[1])}</p><h2>在原系統中如何查找</h2><ol><li>以英文名稱 <code>${esc(p.en)}</code> 查找對應功能；所在位置可能因版本及權限而異。</li><li>${esc(d[2])}</li><li>核對對象、資料時間與適用範圍；重要決策仍須結合內部資料及人工確認。</li></ol><div class="example"><strong>檢查重點</strong><p>這個畫面回答的是哪個問題？資料是否屬於你正在審查的公司或供應鏈關係？若有異常，記下來源與下一個待查主題。</p></div><h2>英文名稱對照</h2>${terms.map(([en,zh])=>`<div class="term"><strong>${esc(en)}</strong><span>${esc(zh)}</span></div>`).join('')}<p class="note">中文譯名僅供教學查找，非官方譯文。本文不顯示真實帳號資料。</p><h2>接著閱讀</h2><div class="feature-grid">${related.map(([id,zh,en,summary])=>`<button class="feature-card" data-page="${id}"><strong>${esc(zh)}</strong><small>${esc(en)} · ${esc(summary)}</small></button>`).join('')}</div></article>`;
}
function show(id){
  current=pages[id]?id:'home';
  const p=pages[current];
  crumb.textContent=current==='home'?'文件首頁':`${p.group} / ${p.zh}`;
  main.innerHTML=current==='home'?home():page(p);
  renderNav(search.value);
  history.replaceState(null,'','#'+current);
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
  window.scrollTo(0,0);
}
document.addEventListener('click',e=>{const link=e.target.closest('[data-page]');if(link)show(link.dataset.page);});
search.addEventListener('input',()=>renderNav(search.value));
document.getElementById('menuBtn').addEventListener('click',()=>{const open=document.getElementById('sidebar').classList.toggle('open');document.getElementById('menuBtn').setAttribute('aria-expanded',String(open));});
window.addEventListener('hashchange',()=>show(location.hash.slice(1)));
const tour=[['如何使用這份文件','左側選單依照 Continuous Monitoring 的模組分類。選擇任一主題即可閱讀中文用途與操作步驟。'],['查找英文術語','使用左側搜尋框輸入中文功能名稱或原介面的英文名稱，可以快速找到對應說明。'],['核對原系統','本網站是教學範例。實際按鈕、資料與權限，請以你的 BitSight 帳號目前顯示的畫面為準。']];
let step=0;
function paintTour(){document.getElementById('tourTitle').textContent=tour[step][0];document.getElementById('tourText').textContent=tour[step][1];document.getElementById('tourStep').textContent=`${step+1} / ${tour.length}`;document.getElementById('prevTour').disabled=step===0;document.getElementById('nextTour').textContent=step===tour.length-1?'完成':'下一步';}
document.getElementById('tourBtn').onclick=()=>{step=0;paintTour();dialog.showModal();};
document.getElementById('closeTour').onclick=()=>dialog.close();
document.getElementById('prevTour').onclick=()=>{step=Math.max(0,step-1);paintTour();};
document.getElementById('nextTour').onclick=()=>{if(step===tour.length-1)dialog.close();else{step++;paintTour();}};
show(location.hash.slice(1));
