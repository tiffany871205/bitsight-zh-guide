// SPM topics are data, so every page uses the same navigation and documentation template.
const groups = [
  ['開始使用', [
    ['home','導覽首頁','Home','理解 SPM 的閱讀路徑與本文件的使用方式。'],
    ['dashboard','儀表板','Dashboard','查看自身資安評等、近期發現與資產變化。']
  ]],
  ['組織 Organization', [
    ['company-details','公司詳情','Company Details','查看選定公司的評等與整體概況。'],
    ['risk-vectors','風險面向','Risk Vectors','拆解資安評等背後的風險類別。'],
    ['ratings-tree','評等樹','Ratings Tree','理解母子公司及組織節點的評等關係。'],
    ['company-list','我的公司清單','My Company List','集中查看 SPM 中的公司。'],
    ['subsidiaries','子公司','Subsidiaries','辨識和管理子公司的關聯。'],
    ['assessments','評估','Assessments','查看組織的評估資訊。'],
    ['breach','資料外洩情報','Breach Intelligence','查詢與組織相關的外洩事件線索。'],
    ['badge','BitSight 徽章','Bitsight Badge','查看可供展示的評等徽章。']
  ]],
  ['發現事項 Findings', [
    ['findings-table','發現事項表格','Findings Table','逐項查核安全發現與證據。'],
    ['issue-tracking','議題追蹤','Issue Tracking','追蹤發現事項的後續處理。'],
    ['vulnerability','弱點偵測','Vulnerability Detection','檢視與公司資產相關的弱點訊號。']
  ]],
  ['攻擊面 Attack Surface', [
    ['infrastructure','基礎設施','Infrastructure','核對對外可見的網路資產。'],
    ['surface-analytics','攻擊面分析','Attack Surface Analytics','從資產視角分析暴露情況。'],
    ['work-from-home','居家辦公','Work from Home','檢視遠距辦公相關的外部訊號。'],
    ['cloud-sync','雲端基礎設施同步','Cloud Infrastructure Sync','核對雲端資產同步的涵蓋範圍。'],
    ['probable','可能相關的基礎設施','Probable Infrastructure','檢查可能歸屬組織的資產。'],
    ['third-party-assets','第三方資產','Third Party Assets','區分自身與第三方的資產歸屬。']
  ]],
  ['改善計畫 Action Plans', [
    ['risk-remediation','風險改善','Risk Remediation','規劃及追蹤風險改善工作。'],
    ['forecasting','評等預測','Forecasting','探索改善措施對評等的可能影響。'],
    ['subsidiary-improvement','子公司改善','Subsidiary Improvement','檢視子公司層級的改善方向。'],
    ['control-insights','控制措施洞察','Control Insights','把觀測風險對照控制措施。']
  ]],
  ['同業比較 Peer Comparison', [
    ['peer-analytics','同業分析','Peer Analytics','比較自身與參考群組的資安態勢。'],
    ['risk-position','風險相對位置','Risk Position','理解自己在比較群組中的位置。']
  ]],
  ['協作與通知', [
    ['collaboration','協作','Collaboration','交換資訊並追蹤往來事項。'],
    ['configured-alerts','已設定警示','Configured Alerts','查看目前的警示規則。'],
    ['alert-logs','警示紀錄','Alerts Logs','核對過去觸發的通知。'],
    ['infections','感染事件','Infections','查看感染相關的警示訊號。'],
    ['reports','報表','Reports','整理與分享指定範圍的資安資訊。'],
    ['integrations','整合','Integrations','查看可串接的外部服務。']
  ]]
];

const pages = Object.fromEntries(groups.flatMap(([group,items]) => items.map(([id,zh,en,summary]) => [id,{id,group,zh,en,summary}])));
const details = {
  'company-details':['選定公司','評等、趨勢與公司範圍','核對頁首的公司名稱，再從評等摘要進入發現事項。','公司總評等是線索，不是單一弱點的嚴重程度。'],
  'risk-vectors':['Company Details → Risk Vectors','各風險面向的評分與變化','找出較弱或下降的面向，連回對應發現事項確認原因。','面向分數需要配合資料期間與資產範圍解讀。'],
  'ratings-tree':['Organization → Ratings Tree','母子公司節點與各節點評等','比較目前公司與旗下組織，確認分析涵蓋的法律實體。','不同節點的分數與範圍不可直接混為同一家公司。'],
  'company-list':['Organization → My Company List','公司清單、搜尋及公司入口','找出要調查的公司，先核對是否為預期的組織或子公司。','同名或相似名稱的公司要核對識別資訊。'],
  subsidiaries:['Organization → Subsidiaries','子公司與組織關係','檢查子公司是否正確歸入管理範圍，再查看個別評等。','組織關係需要確認，不能只靠名稱相似推論歸屬。'],
  assessments:['Organization → Assessments','評估紀錄與結果','在審查或合規情境中，確認評估對象、期間與內容。','評估結果與外部評等的資料來源不同。'],
  breach:['Organization → Breach Intelligence','外洩事件及相關公司','有事件線索時先確認日期、來源、影響與公司關係。','事件提及公司不必然代表目前資產正遭入侵。'],
  badge:['Organization → Bitsight Badge','評等徽章展示入口','需要對外展示時，先確認使用權限、評等日期與呈現方式。','展示內容可能隨評等更新，請勿把截圖當作永久狀態。'],
  'findings-table':['Findings → Findings Table','發現內容、受影響資產與觀測時間','依嚴重程度或類型篩選，逐項核對證據及資產歸屬。','一筆發現是調查線索，不必然等於已確認的內部事故。'],
  'issue-tracking':['Findings → Issue Tracking','議題與後續處理狀態','把已確認問題交給負責人，定期檢查處理進展。','狀態變更不代表外部訊號已立即消失。'],
  vulnerability:['Findings → Vulnerability Detection','弱點訊號、CVE 與暴露資訊','從特定弱點進入受影響資產，核對實際曝險與修補情況。','CVSS、DVE Score 與資產是否暴露是不同維度。'],
  infrastructure:['Attack Surface → Infrastructure','網路資產及其關聯','在變動或異常發現後，檢查 IP、網域與其他資產歸屬。','外部觀測可能有誤判或時間差。'],
  'surface-analytics':['Attack Surface → Attack Surface Analytics','資產分布與暴露分析','找出需優先盤點的資產群，再開啟明細核對。','統計數量不等於已確認的可利用弱點數。'],
  'work-from-home':['Attack Surface → Work from Home','遠距工作相關的外部訊號','檢查遠端工作技術暴露是否符合組織政策。','不能只憑外部訊號判定個人裝置狀態。'],
  'cloud-sync':['Attack Surface → Cloud Infrastructure Sync','雲端資產同步入口','檢查同步範圍及雲端資產是否納入盤點。','設定串接前先確認授權及最小必要權限。'],
  probable:['Attack Surface → Probable Infrastructure','可能關聯的資產候選','逐筆核對候選資產，再決定是否納入組織範圍。','Probable 表示待確認，不能直接視為確定歸屬。'],
  'third-party-assets':['Attack Surface → Third Party Assets','第三方相關資產','區分供應商託管資產與自有資產，釐清處理責任。','第三方關聯不代表組織擁有該資產。'],
  'risk-remediation':['Action Plans → Risk Remediation','改善工作與追蹤入口','先確認發現事項，再安排處理、驗證和後續追蹤。','不要只為提高評等而忽略實際業務風險。'],
  forecasting:['Action Plans → Forecasting','評等情境預測','評估不同改善方向的可能效果，作為排序輔助。','預測是估計，不能承諾未來分數。'],
  'subsidiary-improvement':['Action Plans → Subsidiary Improvement','子公司改善概況','從組織層級找出需要協調的子公司與風險面向。','不同子公司的業務與資產範圍可能不同。'],
  'control-insights':['Action Plans → Control Insights','控制措施與風險洞察','用於討論改善方向，並回到發現事項驗證實際問題。','外部觀測不等於內部控制設計或執行的完整稽核。'],
  'peer-analytics':['Peer Comparison → Peer Analytics','同業群組與比較指標','固定比較群組及期間，再觀察相對差異。','比較結果受同業選擇與公司規模影響。'],
  'risk-position':['Peer Comparison → Risk Position','比較群組中的相對位置','了解自身相對態勢，找出值得深入檢查的面向。','相對排名不能取代自身改善優先序。'],
  collaboration:['Collaboration','協作訊息與回應','檢查待回覆事項，確認對象與分享內容後再回應。','涉及組織資料時須遵守內部分享規範。'],
  'configured-alerts':['Alerts → Configured Alerts','警示規則及接收條件','定期檢查門檻、範圍與接收者是否仍符合需要。','沒有收到警示不代表沒有任何風險。'],
  'alert-logs':['Alerts → Alerts Logs','警示觸發紀錄','追查何時、因何條件觸發，並連回原始發現。','通知時間與實際首次觀測時間可能不同。'],
  infections:['Alerts → Infections','感染相關訊號','核對感染類型、資產及觀測時間，再交由內部團隊調查。','外部偵測需要與內部遙測交叉確認。'],
  reports:['Reports','報表類型與輸出','選定公司、範圍與期間，產出前檢查收件對象。','跨期比較時須採用一致條件並註明資料日期。'],
  integrations:['Integrations','外部串接入口','在導入工作流程前確認支援服務、範圍及所需權限。','不要在公開導覽文件輸入或存放 API 憑證。']
};

const cards = [
  ['Latest Updates','最新動態','新興安全事件與威脅情報新聞；先判斷是否與自身資產相關。'],
  ['Bitsight Security Rating','BitSight 資安評等','查看選定公司的分數、變化與評等層級。'],
  ['Vendor Discovery','供應商探索','儀表板可顯示探索概況；其分類不是自身資產清單。'],
  ['My Ratings Changes','我的評等變化','檢查最近哪些公司評等上升或下降。'],
  ['New High Priority Findings','新增高優先發現','定位需要先核對的新增發現事項。'],
  ['Account Recommendations','帳號設定建議','查看初始設定工作，例如警示及自訂儀表板。'],
  ['Alerts','警示','查看近期觸發通知，再前往明細確認。'],
  ['Infrastructure Changes','基礎設施變化','檢查新增或變更資產是否符合預期。'],
  ['New Material/Severe Findings','新增重大／嚴重發現','檢視高影響的新發現，安排調查順序。'],
  ['Collaboration Inbox','協作收件匣','追蹤待回覆的協作訊息。']
];

const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const docTable = (headers, rows) => `<div class="doc-table"><table><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const companySections = [
  ['Bitsight Security Rating','BitSight 資安評等','查看目前評等、評等層級、主要評等入口與評等樹連結；先確認公司與日期。'],
  ['Risk of Security Incidents','資安事件風險','以頁面顯示的比較基準說明勒索軟體及資安事件的相對風險；不是事件已發生的證據。'],
  ['Company Info','公司資訊','查看公司描述、訂閱類型、關係與其他背景資料；可用 Show Details 展開。'],
  ['Security Ratings Changes','資安評等變化','閱讀歷史曲線、最高／最低點、升降分事件及 Why? 中的變化原因。'],
  ['Infections','感染訊號','查看選定期間的名稱、嚴重度、首次觀測、變化與受影響主機數。'],
  ['Vulnerabilities','弱點','查看弱點名稱、嚴重度、變化與受影響主機數；可從表格進一步查證。'],
  ['Self-Attested Compliance','自行聲明的合規資訊','呈現組織自行聲明的框架與法規狀態；BitSight 不獨立驗證這些聲明。'],
  ['Compromised Systems','疑似受入侵系統','彙整觀測到的惡意或不受歡迎軟體訊號、事件期間及處理速度比較。'],
  ['Remediation Strategy','改善策略','列出可能影響評等的風險面向及估計分數空間，並提供發現事項與改善計畫入口。'],
  ['Diligence','預防性措施','觀察組織採取預防措施相關的風險面向與紀錄分布。'],
  ['Network Footprint','網路資產範圍','概覽對外可見的 IP 等基礎設施規模，作為資產盤點入口。']
];
const companyTerms = [
  ['Rating Date / Effective Date','評等日期／生效日期','評等變化可能分別標示評定或生效時間；比較前先確認時間軸。'],
  ['Why?','變化原因','展開評等升降的相關風險面向或事件；不能只看增減分。'],
  ['Ratings Algorithm Update','評等演算法更新','表示方法變更可能影響分數；不一定是組織資產突然改變。'],
  ['Risk Vector','風險面向','構成資安評等的觀測類別；與 CM 使用相同概念。'],
  ['Severity','嚴重度','用於排列感染或弱點訊號；仍需連同資產與暴露情況判讀。'],
  ['First Seen','首次觀測','系統第一次看見該訊號的時間，不必然是問題開始的時間。'],
  ['Change','變化','所選期間內的變動；須核對基準和期間。'],
  ['Impacted Hosts','受影響主機','觀測到受影響的主機數，不能直接推論所有內部設備。'],
  ['Remediation Plan','改善計畫','從改善策略前往個別風險面向的追蹤工作。'],
  ['Technology Industry Range and Median','科技產業範圍與中位數','提供產業比較基準；同行分布不代表適合自己的風險容忍度。'],
  ['Portfolio Average','投資組合平均','頁面提供的比較基準，與目前公司的單獨表現不同。'],
  ['Monitored by / Searched by','受監控／被搜尋','平台上的使用情況，不是公司資安品質指標。']
];
const vectorGroups = [
  ['Compromised Systems','疑似受入侵系統',[
    ['Botnet Infections','殭屍網路感染','觀察裝置參與殭屍網路的訊號。'],
    ['Spam Propagation','垃圾郵件散播','觀察與垃圾郵件傳送相關的訊號。'],
    ['Malware Servers','惡意軟體伺服器','觀察資產是否與惡意軟體散布相關。'],
    ['Unsolicited Communications','未經請求的通訊','觀察異常或非預期對外通訊。'],
    ['Potentially Exploited','可能遭利用','觀察可能已被利用的系統訊號。']
  ]],
  ['Diligence','預防性措施',[
    ['SPF Domains','SPF 網域','檢查郵件來源授權設定。'],
    ['DKIM Records','DKIM 紀錄','檢查郵件簽章設定。'],
    ['DMARC','DMARC','檢查郵件驗證政策及回報設定。'],
    ['TLS/SSL Certificates','TLS／SSL 憑證','檢查憑證有效性與管理狀態。'],
    ['TLS/SSL Configurations','TLS／SSL 設定','檢查加密協定與配置。'],
    ['Open Ports','開放埠','檢查對外暴露的連接埠。'],
    ['Web Application Security','網站應用程式安全','檢查網站應用層的可觀測問題。'],
    ['Critical Vulnerability Management','重大弱點管理','觀察重大弱點相關的管理表現。'],
    ['Insecure Systems','不安全系統','檢查已知不安全的系統訊號。'],
    ['Server Software','伺服器軟體','觀察伺服器軟體與版本相關風險。'],
    ['Desktop Software','桌面端軟體','觀察桌面軟體相關風險。'],
    ['Mobile Software','行動裝置軟體','觀察行動軟體相關風險。'],
    ['DNSSEC','DNSSEC','檢查 DNS 安全簽章；畫面標 *，目前不影響評等。'],
    ['Web Application Headers','網站應用程式標頭','檢查安全標頭；畫面標 *，目前不影響評等。'],
    ['Domain Squatting','相似網域仿冒','觀察可能混淆的網域；畫面標 **，屬資訊性面向。']
  ]],
  ['User Behavior','使用者行為',[
    ['File Sharing','檔案分享','觀察對外檔案分享相關訊號。'],
    ['Exposed Credentials','外洩憑證','觀察憑證暴露線索；畫面標 **，屬資訊性面向。']
  ]],
  ['Public Disclosures','公開揭露',[
    ['Security Incidents','資安事件','檢視公開揭露的資安事件；部分事件可能影響評等。'],
    ['Other Disclosures','其他揭露','檢視其他公開資訊；畫面標 *，目前不影響評等。']
  ]]
];
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const crumb = document.getElementById('crumb');
const search = document.getElementById('search');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');

function renderNav(filter='') {
  const query = filter.trim().toLocaleLowerCase();
  nav.innerHTML = groups.map(([group,items]) => {
    const shown = items.filter(([id,zh,en,summary]) => [zh,en,summary].some(value => value.toLocaleLowerCase().includes(query)));
    return shown.length ? `<div class="nav-group"><div class="group-title">${esc(group)}</div>${shown.map(([id,zh,en]) => `<a class="nav-item ${location.hash === '#'+id ? 'active' : ''}" href="#${esc(id)}">${esc(zh)}<small>${esc(en)}</small></a>`).join('')}</div>` : '';
  }).join('') || '<div class="no-results">找不到符合的主題。請試試英文名稱或其他關鍵字。</div>';
}

function homePage() {
  const total = Object.keys(pages).length-1;
  return `<article class="doc"><div class="eyebrow">SECURITY POSTURE MANAGEMENT / 學習索引</div><h1>從自身資安態勢到改善追蹤</h1><p class="lead">這份繁體中文教學索引整理 ${total} 個 SPM 功能主題。先認識儀表板，再依左側的原介面選單查找專有名詞、功能與使用情境。</p><div class="callout"><strong>閱讀前先知道</strong><br>這是獨立製作的教學文件，非 BitSight 官方文件；不連接帳號，也不顯示即時資料。名稱與可用功能可能因版本、授權、權限及自訂設定而異。</div><h2>建議從這四步開始</h2><div class="journey">${[['dashboard','01','掌握整體狀況','查看評等、近期發現與資產變化。'],['findings-table','02','核對具體問題','檢查發現事項的證據、資產及時間。'],['infrastructure','03','確認資產歸屬','辨識對外可見的自身與第三方資產。'],['risk-remediation','04','安排改善追蹤','建立後續處理與驗證流程。']].map(([id,n,title,body]) => `<button class="journey-item" data-page="${id}"><b>${n}</b><span><strong>${title}</strong><small>${body}</small></span></button>`).join('')}</div><h2>依側欄範圍找主題</h2><div class="feature-grid">${groups.slice(1).map(([group,items]) => `<section class="feature-card"><strong>${esc(group)}</strong><p>${items.length} 個子頁，逐頁對照英文名稱與使用情境。</p><button class="text-link" data-page="${items[0][0]}">閱讀${esc(items[0][1])} →</button></section>`).join('')}</div><p class="note">頁面名稱依 2026-09-18 可見的 SPM 側欄整理。中文為教學用建議譯名。</p></article>`;
}

function dashboardPage() {
  return `<article class="doc"><button class="back-link" data-page="home">← 返回學習索引</button><div class="eyebrow">開始使用 / Dashboard</div><h1>儀表板</h1><p class="lead">My Company Dashboard 是自身組織資安態勢的摘要。先找出評等、重大發現或基礎設施的異常變化，再前往明細查證。</p><div class="callout"><strong>進入路徑</strong><br>SPM 側欄 <code>Dashboard</code>。頁首公司的選擇器會影響目前的分析對象，卡片也可能因帳號設定不同而異。</div><h2>頁首與共用控制</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>中文與功能</th></tr></thead><tbody>${[['Security Posture Management','產品切換器，目前所在應用程式。'],['Search Company, Domain, or Page Name','搜尋公司、網域或頁面名稱。'],['Notifications','平台通知入口。'],['Settings','帳號與平台設定入口，內容依權限不同。'],['Assistant','產品內協助入口。'],['Add Cards','加入新的儀表板卡片。'],['Edit Dashboard','調整或移除儀表板卡片。'],['Select','設定個別卡片的公司或顯示範圍；選項依卡片不同。']].map(([a,b]) => `<tr><td><strong>${a}</strong></td><td>${b}</td></tr>`).join('')}</tbody></table></div><h2>資訊卡對照</h2><div class="guide-cards">${cards.map(([en,zh,body]) => `<section class="guide-card"><strong>${esc(zh)}</strong><small>${esc(en)}</small><p>${esc(body)}</p></section>`).join('')}</div><h2>建議操作流程</h2><ol><li>確認頂端選取的公司，避免把不同實體的資料混在一起。</li><li>檢查卡片所用的時間範圍（例如 30 Days 或 90 Days）。</li><li>優先查看新增高優先／重大發現、評等變化與基礎設施變化。</li><li>點入發現事項、弱點偵測或基礎設施，核對證據、首次與最近觀測時間、資產歸屬。</li><li>需要追蹤時進入議題追蹤、風險改善或警示設定。</li></ol><div class="example"><strong>使用情境：每日巡檢</strong><p>先看 Latest Updates 是否有與組織相關的安全事件，再檢查 New High Priority Findings 和 Infrastructure Changes。任何重要變化都要回到明細，而不只憑卡片數字作結論。</p></div><h2>容易誤判的地方</h2><ul><li>儀表板是摘要，不等於完整證據；空白卡片也可能受期間、權限或公司選擇影響。</li><li>資安評等、CVSS 與 DVE Score 衡量的面向不同，不應直接互相比大小。</li><li>不同卡片可獨立選擇範圍，跨卡片比較時先核對公司與時間條件。</li></ul><p class="note">依 2026-09-18 可見的 SPM 儀表板整理；不複製帳號內公司名稱、分數或訊息。</p><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="findings-table"><strong>發現事項表格</strong><small>Findings Table · 追查具體問題。</small></button><button class="feature-card" data-page="infrastructure"><strong>基礎設施</strong><small>Infrastructure · 核對資產歸屬。</small></button></div></article>`;
}

function companyDetailsPage() {
  return `<article class="doc"><button class="back-link" data-page="home">← 返回學習索引</button><div class="eyebrow">組織 Organization / Company Details</div><h1>公司詳情</h1><p class="lead">Company Details 是 SPM 中單一公司的總覽頁。先確認目前選取的公司與評等期間，再從分數變化、弱點、感染訊號及資產範圍找出需要往下調查的問題。</p><div class="callout"><strong>進入路徑</strong><br>SPM 側欄 <code>Organization → Company Details</code>。頁首的 <code>Company Details for …</code> 指出目前公司；頁面上的數字與事件屬於該帳號的即時資料，本文件不複製。</div><h2>畫面怎麼看</h2><div class="guide-cards">${companySections.map(([en,zh,body]) => `<section class="guide-card"><strong>${esc(zh)}</strong><small>${esc(en)}</small><p>${esc(body)}</p></section>`).join('')}</div><h2>頁首與常用控制</h2>${docTable(['英文','建議中文','功能／判讀'],[['Reports','報表','從目前公司脈絡前往相關報表；產出前仍須確認範圍。'],['Actions','操作選單','目前公司可執行的動作入口；內容依帳號與權限不同。'],['Show Details','顯示詳情','展開公司背景資訊。'],['Select','選擇','調整評等變化等區塊的顯示條件。'],['View Ratings Tree','查看評等樹','前往組織節點及母子公司關係。'],['View Details','查看詳情','從摘要卡片進入對應的發現事項。'],['View Findings','查看發現事項','開啟影響評等的具體發現。'],['Remediation Plans','改善計畫','前往風險改善工作。']])}<h2>表格欄位與專有名詞</h2>${docTable(['原介面文字','建議中文','用途與注意'],companyTerms)}<h2>建議操作流程</h2><ol><li>確認頁首公司名稱、頂部公司選擇器與評等日期，避免在錯誤的組織範圍下判讀。</li><li>先看 <strong>Bitsight Security Rating</strong> 與 <strong>Security Ratings Changes</strong>；若分數改變，展開 <strong>Why?</strong> 核對是風險面向變化、具體事件，或演算法更新。</li><li>查看 <strong>Infections</strong> 和 <strong>Vulnerabilities</strong> 的觀測期間、嚴重度與受影響主機數，再點入明細。</li><li>對需要處理的問題，用 <strong>View Findings</strong> 確認資產與證據，必要時進入 <strong>Remediation Plans</strong> 追蹤改善。</li><li>若公司或 IP 範圍看起來不對，回到 <strong>Company Info</strong>、<strong>Network Footprint</strong> 與攻擊面頁核對歸屬。</li></ol><div class="example"><strong>使用情境：分數下降</strong><p>先固定公司與日期，閱讀評等變化清單的 Why?；若是某個 Risk Vector 下降，接著查看該面向與相應發現事項。若畫面標示 Ratings Algorithm Update，應先辨別方法變更與真實環境變化，不能直接把所有分數下降歸咎於新弱點。</p></div><div class="example"><strong>使用情境：向主管解釋風險</strong><p>用資安評等與趨勢說明整體態勢，但要列出關鍵發現、受影響資產及資料日期。Risk of Security Incidents 的倍數是比較風險訊號，不是「已發生事故」的證明；Self-Attested Compliance 則是組織自行聲明，不是 BitSight 審核結果。</p></div><h2>容易誤判的地方</h2><ul><li><strong>評等不等於事件：</strong>低評等或相對風險較高，不能直接推論已遭入侵。</li><li><strong>比較基準不同：</strong>產業中位數、投資組合平均與單一公司評等不能混用。</li><li><strong>受影響主機需查證：</strong>外部觀測可能受資產歸屬、資料延遲或可見範圍影響。</li><li><strong>估計改善分數不是保證：</strong>Remediation Strategy 的潛在影響以假設條件呈現，實際分數仍可能變動。</li><li><strong>自行聲明不是認證驗證：</strong>Self-Attested Compliance 不代表平台已獨立確認證書或法規符合性。</li></ul><p class="note">依 2026-09-18 可見的 SPM 公司詳情介面整理。中文為教學用建議譯名，非官方譯文；不同公司、授權與權限可能顯示不同卡片及資料。</p><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="risk-vectors"><strong>風險面向</strong><small>Risk Vectors · 拆解評等構成。</small></button><button class="feature-card" data-page="findings-table"><strong>發現事項表格</strong><small>Findings Table · 核對具體證據。</small></button></div></article>`;
}

function riskVectorsPage() {
  return `<article class="doc"><button class="back-link" data-page="company-details">← 返回公司詳情</button><div class="eyebrow">組織 Organization / Risk Vectors</div><h1>風險面向</h1><p class="lead">Risk Vectors Overview 將資安評等拆成可調查的類別。與 CM 相同的概念與譯名沿用；SPM 頁面另外提供各類權重、個別等級與相對位置，幫助安排改善順序。</p><div class="callout"><strong>進入路徑</strong><br>SPM 側欄 <code>Organization → Risk Vectors</code>。頁首會顯示目前公司；先核對公司與日期，再解讀等級及權重。</div><h2>四大類別與子面向</h2>${vectorGroups.map(([en,zh,items]) => `<h3>${esc(zh)} <small>${esc(en)}</small></h3>${docTable(['英文','建議中文','看什麼'],items)}`).join('')}<h2>畫面控制與標記</h2>${docTable(['介面文字','建議中文','判讀方式'],[['Overview','總覽','先查看風險類別、主要權重及圓餅圖，再選擇子面向。'],['Total weight / Weight','類別權重／面向權重','表示目前評等計算中的權重；不能直接當作風險發生機率。'],['Weight: Up to','最高可達的權重','受入侵系統相關面向的合計影響上限，不應把每項上限相加。'],['A–F / N/A','等級／不適用','個別風險面向的呈現，不是整家公司分數。'],['Top / Bottom 10–50%','相對位置','與比較群體的分布位置，需連同資料範圍解讀。'],['* Does not impact rating','* 目前不影響評等','仍可作為調查資訊，但不計入目前資安評等。'],['** Informational risk vector','** 資訊性風險面向','資訊性線索，永遠不影響資安評等。'],['Variable weight','變動權重','公開揭露類別沒有固定權重，部分事件可能影響評等。'],['Toggle navigation','切換子選單','收合或展開頁內風險面向導覽。'],['Copy … to URL','複製面向連結','取得指定子面向的定位連結，方便分享頁面位置。']])}<h2>建議操作流程</h2><ol><li>在 Overview 比較四大類，留意權重高且等級較弱的面向。</li><li>從左側頁內導覽點選具體子面向；分辨是 <strong>評等構成項</strong>、標 * 的目前不計分項，或標 ** 的資訊性項目。</li><li>連到對應的發現事項與資產，確認觀測時間及資產歸屬，再決定是否優先改善。</li><li>若需向他人說明，用 Copy … to URL 定位子面向，並一併提供公司、資料日期與明細證據。</li></ol><div class="example"><strong>使用情境：決定先處理哪個風險面向</strong><p>若某個高權重面向等級偏低，可先調查該面向的具體發現。權重只是評等計算資訊；實際順序還需考慮弱點可利用性、資產重要性與內部控制狀態。</p></div><h2>容易誤判的地方</h2><ul><li><strong>高權重不等於已發生事故：</strong>它表示對評等的相對影響，仍需查證發現事項。</li><li><strong>不計分不等於沒風險：</strong>標 * 或 ** 的面向仍可能值得內部追蹤。</li><li><strong>相對位置不是絕對安全：</strong>Top／Bottom 會受比較群體影響。</li><li><strong>權重可能調整：</strong>原介面及評等演算法更新時，應以當前顯示為準，不把本文件範例數值視為固定規則。</li></ul><p class="note">依 2026-09-18 可見的 SPM 風險面向頁整理。中文為教學譯名，非官方譯文；評級、權重及相對位置依公司及時間而變。</p><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="ratings-tree"><strong>評等樹</strong><small>Ratings Tree · 核對組織範圍。</small></button><button class="feature-card" data-page="findings-table"><strong>發現事項表格</strong><small>Findings Table · 查證具體問題。</small></button></div></article>`;
}

function topicPage(p) {
  const [path,focus,usage,caution] = details[p.id];
  const siblings = groups.find(([name]) => name===p.group)[1].filter(([id]) => id!==p.id).slice(0,4);
  return `<article class="doc"><button class="back-link" data-page="home">← 返回學習索引</button><div class="eyebrow">${esc(p.group)} / ${esc(p.en)}</div><h1>${esc(p.zh)}</h1><p class="lead">${esc(p.summary)}</p><div class="callout"><strong>進入路徑</strong><br>SPM 側欄 <code>${esc(path)}</code>。若頁面涉及特定公司，請先核對頂端目前選取的公司；可見項目依權限與授權而異。</div><h2>這頁用來做什麼</h2><p>${esc(focus)}。${esc(usage)}</p><h2>英文與中文對照</h2><div class="doc-table"><table><thead><tr><th>原介面文字</th><th>建議中文</th><th>用途</th></tr></thead><tbody><tr><td><strong>${esc(p.en)}</strong></td><td>${esc(p.zh)}</td><td>${esc(p.summary)}</td></tr><tr><td><strong>${esc(p.group.split(' ').slice(1).join(' ') || 'SPM')}</strong></td><td>${esc(p.group.split(' ')[0])}</td><td>原介面側欄的所屬範圍。</td></tr></tbody></table></div><h2>建議操作流程</h2><ol><li>從左側選單進入 <strong>${esc(p.en)}</strong>，確認頁首公司、範圍及資料期間。</li><li>${esc(usage)}</li><li>需要採取行動前，回到原始發現、資產或其他佐證資料核對。</li></ol><div class="example"><strong>使用情境</strong><p>當需要「${esc(p.summary)}」時，先以此頁建立線索，再依問題往相關明細頁深入調查。</p></div><h2>注意事項</h2><ul><li>${esc(caution)}</li><li>本頁提供介面名稱與判讀方向；實際按鈕、篩選條件及資料以目前原系統為準。</li></ul><p class="note">依 2026-09-18 可見的 SPM 側欄名稱整理；中文為教學譯名，非官方譯文。細部欄位尚待逐頁核對，不推定未驗證的控制項。</p>${siblings.length ? `<h2>同一選單的其他頁面</h2><div class="feature-grid">${siblings.map(([id,zh,en]) => `<button class="feature-card" data-page="${id}"><strong>${esc(zh)}</strong><small>${esc(en)}</small></button>`).join('')}</div>` : ''}</article>`;
}

function render() {
  const id = decodeURIComponent(location.hash.slice(1)) || 'home';
  const page = pages[id] || pages.home;
  main.innerHTML = page.id==='home' ? homePage() : page.id==='dashboard' ? dashboardPage() : page.id==='company-details' ? companyDetailsPage() : page.id==='risk-vectors' ? riskVectorsPage() : topicPage(page);
  crumb.textContent = page.id==='home' ? '文件首頁' : `${page.group} / ${page.zh}`;
  renderNav(search.value);
  window.scrollTo(0,0);
  sidebar.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}
search.addEventListener('input',() => renderNav(search.value));
window.addEventListener('hashchange',render);
main.addEventListener('click',event => {
  const target = event.target.closest('[data-page]');
  if(target) location.hash = target.dataset.page;
});
menuBtn.addEventListener('click',() => {
  const open = sidebar.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
});
render();
