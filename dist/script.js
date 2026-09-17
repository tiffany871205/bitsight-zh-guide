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

const dashboardCards = [
  ['Latest Updates','最新動態','彙整新興資安事件（Emerging Security Events）與威脅情報新聞（Threat Intel News）。適合每天快速確認外部威脅是否與受監控公司有關。'],
  ['Median Rating','評等中位數','顯示目前範圍內公司的安全評等中位數與期間變化。中位數適合觀察整體水準，但不能取代對高關鍵性或低評等公司的個別審查。'],
  ['Featured Report','精選報表','提供建議報表與快速入口，例如公司相對風險。可前往報表頁檢視或建立報表。'],
  ['Getting Started','開始使用','顯示初始設定任務進度，包括訂閱公司、新增使用者與群組、建立層級、資料夾、警示、報表及邀請公司。'],
  ['Portfolio Risk Matrix','投資組合風險矩陣','以公司關鍵性（Criticality／Tier）和安全評等風險交叉排列，協助區分應升級處理、審查或持續監控的公司。'],
  ['Rating Changes','評等變化','列出選定期間內評等發生變化的供應商、變動分數與目前評等。應優先查看大幅下降或關鍵供應商。'],
  ['Recent Security Incidents','近期資安事件','顯示篩選範圍內近期發生的資安事件。沒有結果只代表目前條件與期間內未顯示事件。'],
  ['Risk Vector Alerts','風險面向警示','彙整風險面向的變動警示，並可前往 Alerts 查看完整清單與處理狀態。'],
  ['Trending Vendors','熱門供應商','顯示近期搜尋熱度上升的公司，可閱讀公司摘要或進行訂閱；熱度並不等同資安風險高低。'],
  ['Life Cycle','生命週期','依供應商管理階段顯示公司，例如 Re-Assessment（重新評估），用於追蹤不同階段的工作量。'],
  ['Used and Allocated Subscriptions','已使用與已配置訂閱','顯示 Continuous Monitoring、Vendor Selection 等訂閱額度的使用情況，供管理監控容量。']
];

const dashboardTerms = [
  ['Portfolio Dashboard','投資組合儀表板','集中查看監控公司整體風險與近期變化。'],
  ['All Companies','所有公司','目前儀表板套用的公司範圍；可切換資料夾或其他公司集合。'],
  ['Days / 30 Days','天數／30 天','控制多張卡片採用的觀察期間。改變期間後，數字不可直接與不同期間比較。'],
  ['Add Cards','新增卡片','將其他可用的資訊卡加入儀表板。'],
  ['Edit Dashboard','編輯儀表板','調整卡片位置或移除不需要的卡片。'],
  ['Select','選擇','設定個別卡片的範圍或呈現條件；各卡片選項可能不同。'],
  ['Replace Card','替換卡片','以另一張可用卡片取代目前卡片。'],
  ['Security Rating','安全評等','BitSight 對組織外部可觀測資安表現的量化結果；應搭配趨勢、風險面向及具體發現判讀。'],
  ['Median Rating','評等中位數','將公司評等排序後位於中間的數值，比平均數較不容易受極端值影響。'],
  ['Criticality','關鍵性','公司對組織的重要程度，通常由 Tier（層級）表達，並非 BitSight 評等本身。'],
  ['Tier','層級','組織自行設定的供應商重要性分類，例如 Tier 1、Tier 2、Tier 3。'],
  ['Risk','風險','矩陣中的評等風險方向，由低風險到高風險。'],
  ['Escalate','升級處理','風險與關鍵性組合需要立即關注，通常應聯絡供應商並追查不可接受的發現。'],
  ['Review','審查','需要進一步調查，確認是否要採取行動。'],
  ['Monitor','持續監控','目前不需立即行動，但仍應依既定頻率追蹤。'],
  ['Emerging Security Events','新興資安事件','新出現或近期受到高度關注的弱點與安全事件。'],
  ['Companies Exposed','曝險公司數','在目前監控範圍內，被偵測到可能與該弱點曝險相關的公司數量。'],
  ['Exposure Trend','曝險趨勢','一段期間內受影響公司數量的變化；上升通常代表調查優先度增加。'],
  ['CVSS','通用弱點評分系統','描述弱點技術嚴重性的標準分數，不代表你的供應商一定可被成功攻擊。'],
  ['DVE Score','動態弱點可利用性分數','用動態威脅與可利用性訊號協助排列弱點優先順序，應與曝險證據及業務關鍵性共同判斷。'],
  ['NVD Advisory','NVD 弱點公告','前往美國 NVD 查看 CVE 的公開技術資料。'],
  ['Vendor Advisory','廠商公告','前往產品廠商發布的修補與緩解建議。'],
  ['View Vulnerability','查看弱點','開啟該弱點在 Vulnerability Detection 中的詳細資料。'],
  ['Rating Changes','評等變化','選定期間內供應商評等上升或下降的紀錄。'],
  ['Life Cycle','生命週期','供應商目前所處的內部管理或評估階段。'],
  ['Re-Assessment','重新評估','供應商進入再次評估的生命週期階段。'],
  ['Continuous Monitoring','持續監控','持續追蹤已訂閱公司的安全評等與風險變化。'],
  ['Vendor Selection','供應商遴選','在正式持續監控前，用於搜尋及初步評估候選供應商的額度或功能。']
];

const companyFilters = [
  ['Folder','資料夾','依內部分組縮小公司範圍；先檢查是否留有舊的資料夾條件。'],
  ['Tier','層級','依供應商重要性分層，適合先找關鍵供應商。'],
  ['Subscription Type','訂閱類型','區分公司目前使用的產品或監控訂閱類型。'],
  ['Vendor Action Plan','供應商行動計畫','依對供應商設定的處理分類篩選；名稱與選項以帳號設定為準。'],
  ['Relationship','關係','依組織與公司的業務關係篩選，例如供應商或其他關係類型。'],
  ['Life Cycle','生命週期','依公司目前所處的內部評估或管理階段篩選。'],
  ['Has Contacts','有無聯絡人','找出已有或尚未維護聯絡人的公司。'],
  ['Security Rating','安全評等','以評等範圍找出需要優先審查的公司；評等不是入侵證據。'],
  ['Industry','產業','依公司所屬產業縮小結果。'],
  ['Country','國家／地區','依公司所在地或系統顯示的國家資訊篩選。'],
  ['Self Published','自行發布','依公司是否提供自行發布的資料篩選；先核對資料來源與日期。'],
  ['Rating Type','評等類型','區分畫面提供的評等類型；選項與涵義以目前介面為準。'],
  ['Risk Vector Grade','風險面向等級','依特定風險面向的等級尋找弱項，再進入公司頁查看具體發現。'],
  ['Infections','感染情況','篩選與惡意軟體感染等外部可觀測訊號相關的公司。'],
  ['Open Ports','開放埠','尋找具有特定對外開放連接埠訊號的公司，需再核對資產與用途。'],
  ['Public Disclosures','公開揭露','依公開揭露的事件或資料訊號縮小公司範圍。'],
  ['Software','軟體','依偵測到或關聯的軟體尋找公司；不應單憑此認定存在弱點。'],
  ['Service Provider','服務提供者','依共同使用的服務提供者探索第四方依賴。'],
  ['Products','產品','依關聯產品找出可能受到同一產品影響的公司。'],
  ['Product Type','產品類型','依產品分類縮小供應鏈或技術依賴範圍。']
];

const companyControls = [
  ['Vendor Discovery','供應商探索','前往可能與組織有關聯、但尚待確認的公司探索頁。'],
  ['Filters','篩選器','展開或收起篩選面板，組合多項條件縮小清單。'],
  ['Columns','欄位','調整表格要顯示的欄位。'],
  ['Views','檢視方式','切換已儲存的清單檢視。'],
  ['Create View','建立檢視','把目前的欄位與篩選配置儲存為可重用檢視；儲存前確認分享範圍。'],
  ['Reports','報表','從公司清單進入可用的報表操作；是否可用取決於選取狀態與權限。'],
  ['Actions','動作','對選取的公司執行可用批次動作；執行前核對選取數量與對象。'],
  ['Search','搜尋','搜尋清單中的公司或目前介面支援的文字欄位。'],
  ['Download as CSV','下載 CSV','匯出目前可用的清單資料；匯出內容可能受篩選、欄位及權限影響。'],
  ['Enter full screen','進入全螢幕','放大表格工作區，方便檢視更多欄位。'],
  ['Select All','全選','選取目前清單中的公司以執行批次操作；留意是否只涵蓋目前頁。'],
  ['Column options','欄位選項','從欄名旁的選單調整排序或欄位相關設定。'],
  ['Prev / Next','上一頁／下一頁','在分頁結果間切換；頁尾可調整每頁筆數。']
];

const companyColumns = [
  ['Company','公司','受監控公司的名稱；點選可進入單一公司的風險詳情。'],
  ['Security Rating','安全評等','公司外部可觀測資安表現的分數，應搭配時間、風險面向與發現事項判讀。'],
  ['Trend','趨勢','評等在選定期間的變化方向，不等同於目前分數高低。'],
  ['Tier','層級','組織設定的供應商關鍵性分層，非 BitSight 自動推算的風險評等。'],
  ['Relationship','關係','公司與組織的業務關係分類。'],
  ['Subscription Type','訂閱類型','顯示目前對該公司的訂閱或監控型態。']
];

function companyPage(p){
  const table=(headers,rows)=>`<div class="doc-table"><table><thead><tr>${headers.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="dashboard">← 返回儀表板</button><div class="eyebrow">投資組合風險 / Companies List</div><h1>公司清單</h1><p class="lead">Companies List 是受監控公司的工作清單。先確認範圍與篩選條件，再依評等、變化趨勢及供應商重要性找出要調查的公司；點選公司名稱後才進入個別風險詳情。</p><div class="callout"><strong>進入路徑</strong><br>左側選單 <code>Portfolio Risk → Companies List</code>。頁面頂端的公司範圍選擇器、左側 Filters，以及已儲存的 Views 都可能影響畫面結果。</div><h2>畫面怎麼看</h2><ol><li><strong>頁首：</strong>Companies List 標題旁有 Vendor Discovery、Reports、Actions。</li><li><strong>左側篩選面板：</strong>以 Folder、Tier、Security Rating 等條件縮小清單；多項條件同時套用時，結果可能變成零筆。</li><li><strong>表格工具列：</strong>可搜尋、調整欄位、切換檢視、建立檢視、匯出 CSV 或進入全螢幕。</li><li><strong>結果表格與頁尾：</strong>查看欄位、勾選公司、排序、調整每頁筆數和換頁。操作批次動作前應核對選取範圍。</li></ol><h2>預設表格欄位</h2>${table(['英文','中文','用途與判讀'],companyColumns)}<h2>篩選器完整對照</h2><p>目前可見的篩選面板包含以下 20 類。選項會隨授權、資料與帳號設定不同；下表說明篩選用途，不推定特定公司符合條件。</p>${table(['英文','建議中文','何時使用／注意'],companyFilters)}<h2>按鈕與工具</h2>${table(['英文','建議中文','功能'],companyControls)}<h2>常見操作情境</h2><div class="example"><strong>找出要優先檢查的關鍵供應商</strong><p>先選定正確資料夾或 All Companies，再以 Tier 縮小到關鍵層級，搭配較低 Security Rating 或下降的 Trend。開啟公司頁後核對風險面向、發現事項與資料時間，不只依分數排序。</p></div><div class="example"><strong>檢查聯絡資料缺口</strong><p>以 Has Contacts 找出尚無聯絡人的公司，再依 Tier 決定補齊順序。聯絡人屬於協作資料，不能從「沒有聯絡人」推論公司風險高。</p></div><div class="example"><strong>盤點共同技術依賴</strong><p>使用 Service Provider、Products 或 Software 篩選相關公司，建立待查清單；接著到第四方風險或個別公司頁確認關聯與實際曝險。</p></div><h2>建議操作流程</h2><ol><li>確認頁面標題為 Companies List，並核對頂端公司範圍。</li><li>查看是否已有 Folder、Views 或其他篩選條件；若結果為零，先檢查既有條件。</li><li>輸入公司名稱搜尋，或使用 Tier、Relationship、Security Rating 等條件逐步縮小範圍。</li><li>依目的調整 Columns；比較評等時同時顯示 Trend、Tier 與 Relationship。</li><li>點選公司名稱，進入個別公司頁核對評等時間、發現事項及資產證據。</li><li>如需匯出或批次動作，先核對公司選取範圍、權限與資料處理規範。</li></ol><h2>容易誤判的地方</h2><ul><li><strong>零筆結果不等於沒有公司：</strong>常見原因是資料夾、檢視或多重篩選限制。</li><li><strong>Tier 與 Security Rating 不同：</strong>前者是內部關鍵性分類，後者是外部可觀測資安評等。</li><li><strong>Trend 與目前分數不同：</strong>評等高的公司也可能正在下降，需看期間與變化幅度。</li><li><strong>技術關聯不等於存在弱點：</strong>Software、Products、Open Ports 等只提供調查線索。</li><li><strong>匯出資料可能敏感：</strong>CSV 可能包含供應商清單或內部分類，應依組織規範保存與分享。</li></ul><p class="note">本頁依 2026-09-17 可見的 BitSight Continuous Monitoring 介面整理。中文是教學用建議譯名，非官方譯文；網站不複製帳號內的公司名稱、數值或聯絡資料。</p><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="fi-assessments"><strong>框架評估</strong><small>Assessments (FI) · 側欄下一個主題。</small></button><button class="feature-card" data-page="vendor-overview"><strong>供應商總覽</strong><small>Overview · 從清單進入單一公司的風險脈絡。</small></button></div></article>`;
}

function dashboardPage(p){
  return `<article class="doc"><button class="back-link" data-page="home">← 返回學習索引</button><div class="eyebrow">開始使用 / ${esc(p.en)}</div><h1>儀表板</h1><p class="lead">Portfolio Dashboard 是登入 Continuous Monitoring 後的投資組合總覽，用來快速發現「哪些公司或事件值得先調查」，再前往公司清單、弱點、警示或報表頁深入查證。</p><div class="callout"><strong>進入路徑</strong><br>左側主選單 <code>Dashboard</code>。頁面內容會受帳號授權、使用者權限、公司範圍、資料夾以及自訂卡片影響。</div><h2>頁面頂端與共用側欄</h2><div class="doc-table"><table><thead><tr><th>介面文字</th><th>中文與功能</th></tr></thead><tbody>${[['Continuous Monitoring','目前使用的產品／應用程式；可透過應用程式切換器切換其他 BitSight 產品。'],['All Companies','目前套用的公司範圍。切換範圍後，儀表板各卡片會依新範圍重新計算。'],['Notifications','通知中心，查看系統或監控相關通知。'],['Settings','帳號與平台相關設定入口；實際項目依權限而異。'],['Assistant','產品內協助入口。'],['30 Days','儀表板觀察期間。'],['Add Cards','加入新的資訊卡。'],['Edit Dashboard','調整、替換或移除現有資訊卡。']].map(([a,b])=>`<tr><td><strong>${a}</strong></td><td>${b}</td></tr>`).join('')}</tbody></table></div><h2>儀表板資訊卡</h2><div class="guide-cards">${dashboardCards.map(([en,zh,body])=>`<section class="guide-card"><strong>${esc(zh)}</strong><small>${esc(en)}</small><p>${esc(body)}</p></section>`).join('')}</div><h2>建議操作流程</h2><ol><li><strong>確認範圍：</strong>先看頂端公司選擇器是否為 All Companies，或是否已切換到特定資料夾。</li><li><strong>確認期間：</strong>選擇要觀察的天數；後續比較時要使用相同期間。</li><li><strong>先看風險矩陣：</strong>從高關鍵性且高風險的公司開始，依 Escalate、Review、Monitor 決定處理順序。</li><li><strong>查看異常變化：</strong>檢查 Rating Changes、Recent Security Incidents 與 Risk Vector Alerts，特別注意大幅下降或新事件。</li><li><strong>連回證據：</strong>從卡片前往 Companies List、Alerts 或 Vulnerability Detection，核對公司、資產、發現時間與證據。</li><li><strong>建立追蹤：</strong>依內部流程記錄負責人、處理狀態與下次檢查日期；不要只靠儀表板數字做最終判斷。</li></ol><div class="example"><strong>使用情境：每日風險巡檢</strong><p>先確認 Latest Updates 是否有新興事件影響受監控公司，再查看關鍵供應商是否出現評等下降或新警示。若某事件同時具高 CVSS／DVE Score 且 Companies Exposed 大於零，前往弱點詳情核對實際曝險證據。</p></div><div class="example"><strong>使用情境：主管月報</strong><p>固定使用相同公司範圍與期間，記錄 Median Rating、評等變化公司數、風險矩陣分布及重大事件。報告中應說明範圍與日期，避免把中位數當成所有供應商的表現。</p></div><h2>專有名詞與介面翻譯</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${dashboardTerms.map(([en,zh,note])=>`<tr><td><strong>${esc(en)}</strong></td><td>${esc(zh)}</td><td>${esc(note)}</td></tr>`).join('')}</tbody></table></div><h2>常見誤解與注意事項</h2><ul><li><strong>儀表板是摘要，不是完整證據：</strong>任何異常都應開啟對應公司、警示、風險面向或弱點頁核對。</li><li><strong>安全評等不等於公司一定遭入侵：</strong>評等與外部可觀測訊號用於風險排序，仍需結合內部調查與供應商回覆。</li><li><strong>搜尋熱度不等於風險：</strong>Trending Vendors 表示關注度增加，不能單獨作為升級供應商風險的理由。</li><li><strong>空白結果受條件影響：</strong>「No alerts available」或沒有事件，可能是範圍、期間或權限造成。</li><li><strong>自訂畫面可能不同：</strong>卡片可新增、替換及重排，所以不同使用者看到的順序未必一致。</li></ul><p class="note">以上名稱依目前可見的 BitSight Continuous Monitoring 介面整理；中文為教學用建議譯名，並非 BitSight 官方中文版。網站不保存或顯示帳號中的公司數值與名稱。</p><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="companies"><strong>公司清單</strong><small>Companies List · 從整體摘要進入公司層級調查。</small></button><button class="feature-card" data-page="vulnerability"><strong>弱點偵測</strong><small>Vulnerability Detection · 追查新興事件與曝險公司。</small></button></div></article>`;
}

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
  if(p.id==='dashboard')return dashboardPage(p);
  if(p.id==='companies')return companyPage(p);
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
