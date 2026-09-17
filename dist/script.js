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

const assessmentFilters = [
  ['Company','公司','只看特定公司的框架評估紀錄。'],
  ['Status','狀態','依評估進度篩選；目前畫面已套用 Completed（已完成）。其他狀態選項需以實際資料為準。'],
  ['User','使用者','依與評估紀錄相關的使用者縮小結果；實際角色意義應在紀錄詳情確認。'],
  ['Date','日期','以日期條件尋找特定期間的評估。先確認篩選的是哪個日期欄位。'],
  ['Framework','框架','只看指定資安框架或評估架構的紀錄。']
];

const assessmentColumns = [
  ['Assessment Name','評估名稱','辨識同一公司不同評估或不同輪次的紀錄。'],
  ['Company','公司','評估所對應的公司；不要只憑名稱判定涵蓋的法人或資產範圍。'],
  ['Framework','框架','該紀錄採用的評估框架。比較結果前需確認框架與版本一致。'],
  ['Status','狀態','評估目前的流程狀態；Completed 代表已完成，不等於全部控制項都符合要求。'],
  ['Completed Date','完成日期','評估完成的時間。判斷證據是否仍適用時要看資料新舊。'],
  ['User','使用者','表格呈現的相關使用者欄位；可能涉及建立、負責或操作人員，須看詳細資料確認。'],
  ['Subscription Type','訂閱類型','評估所屬或可用的產品訂閱類型。'],
  ['Compliance','符合情形','框架符合性相關結果；數值或標示的算法應以具體評估詳情為準。'],
  ['Actions','動作','對單筆評估可執行的操作入口；內容可能受狀態與權限限制。']
];

const assessmentControls = [
  ['Active Filters / Applied filters','使用中／已套用的篩選條件','查看目前哪些條件影響結果；本次畫面顯示 Completed。'],
  ['Clear All / Clear','清除全部／清除單項','移除篩選條件後再檢查結果，避免把 0 筆誤判為沒有評估。'],
  ['Columns','欄位','調整表格顯示的欄位。'],
  ['Views','檢視方式','切換儲存的評估清單檢視。'],
  ['Create View','建立檢視','將目前的篩選與欄位配置保存以供再次使用。'],
  ['Save changes','儲存變更','在可編輯的檢視發生變更後保存；目前畫面為停用狀態。'],
  ['Completed Assessments','已完成評估','目前顯示的檢視／範圍名稱，應搭配左側 Status 條件一起核對。'],
  ['Search','搜尋','在目前清單範圍內搜尋可用欄位。'],
  ['Enter full screen','進入全螢幕','放大評估表格的工作區。'],
  ['Column options','欄位選項','開啟欄名旁的設定，例如該欄可用的排序或顯示操作。'],
  ['Prev / Next','上一頁／下一頁','在有多頁結果時切換；目前 0 筆時會停用。']
];

function assessmentPage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="companies">← 返回公司清單</button><div class="eyebrow">投資組合風險 / Assessments (FI)</div><h1>框架情報評估</h1><p class="lead">這頁在 BitSight 原介面標為 Framework Intelligence Assessments，用來按公司、框架、狀態、使用者與日期查找框架評估紀錄，並查看完成時間及符合情形。側欄的 Assessments (FI) 與 Vendor Risk 底下的 Assessments 位置不同，查找時應先確認所處模組。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>左側選單 <code>Portfolio Risk → Assessments (FI)</code>。本次可見的檢視為 <code>Completed Assessments</code>，左側套用 <code>Status: Completed</code>，表格顯示 <code>0 Rows / No results found</code>。這只描述目前的範圍與條件，不能推論帳號完全沒有評估紀錄。</div><h2>頁面結構</h2><ol><li><strong>篩選面板：</strong>查看 Active Filters，再用 Company、Status、User、Date、Framework 縮小範圍。</li><li><strong>檢視與欄位：</strong>Columns 可調整表格欄位，Views 與 Create View 用於管理常用清單配置。</li><li><strong>評估表格：</strong>每列代表一筆評估紀錄；先核對 Assessment Name、Company、Framework、Status，再判讀完成日期與符合情形。</li><li><strong>結果與分頁：</strong>Rows 顯示符合條件的筆數；有資料時可調整每頁筆數與換頁。</li></ol><h2>篩選器對照</h2>${table(assessmentFilters)}<h2>表格欄位對照</h2>${table(assessmentColumns)}<h2>按鈕與介面文字</h2>${table(assessmentControls)}<h2>建議操作流程</h2><ol><li>先核對頂端公司範圍，以及目前 Views／Completed Assessments 的選取狀態。</li><li>查看 Active Filters；若沒有結果，先檢查 Completed 是否排除了尚未完成的紀錄，再依需要清除或改變條件。</li><li>以 Company 或 Framework 縮小清單，避免混合不同公司或不同框架的評估。</li><li>有結果後，對照 Status、Completed Date 與 Compliance；若要判定是否符合控制要求，應開啟評估詳情核對問題、證據、例外與框架版本。</li><li>記錄審查日期、評估範圍與待補證據；不要只把清單中的狀態或符合情形當成最終結論。</li></ol><div class="example"><strong>使用情境：找出某供應商的最新完成評估</strong><p>選擇正確公司後保留 Completed 條件，再按 Completed Date 檢查近期紀錄；比較前確認 Framework 是否相同。若同一公司有多筆評估，不要把不同輪次的結果合併解讀。</p></div><div class="example"><strong>使用情境：清單為空時排查</strong><p>先看左側 Applied filters 與目前檢視名稱，必要時清除 Status 或日期限制，再確認公司範圍與權限。若仍為空，才向帳號管理者或評估負責人確認是否有可見紀錄。</p></div><h2>容易誤判的地方</h2><ul><li><strong>Completed 不等於合規：</strong>「完成」是流程狀態，Compliance 才是另一個結果欄位，且仍須檢查評估細節。</li><li><strong>0 Rows 不等於沒有評估：</strong>可能是 Completed、公司範圍、日期、檢視或權限限制。</li><li><strong>框架不同不宜直接比較：</strong>先確認 Framework、版本、適用範圍與完成日期。</li><li><strong>User 欄位不可直接推定責任：</strong>須查看評估詳情才知道該使用者的實際角色。</li></ul><p class="note">本頁依 2026-09-17 可見的 BitSight 介面整理。由於目前檢視沒有結果，未臆測單筆評估詳情、Compliance 算法或其他 Status 選項；中文為教學用建議譯名，非官方譯文。</p><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="critical-assets"><strong>關鍵資產</strong><small>Critical Assets · 側欄下一個主題。</small></button><button class="feature-card" data-page="assessments"><strong>供應商評估</strong><small>Assessments · 對照 Vendor Risk 模組中的評估資訊。</small></button></div></article>`;
}

const criticalFilters = [
  ['Asset Type','資產類型','依網域、IP 等資產型態縮小清單。'],
  ['Number of Findings','發現事項數量','找出有較多發現事項的資產；數量不等於嚴重程度。'],
  ['Importance','資產重要程度','按系統估計的重要程度篩選，與內部業務關鍵性不同。'],
  ['Grace Period','寬限期','查看與寬限期相關的資產；實際規則須以平台設定為準。'],
  ['Grace Period End Date','寬限期結束日期','查找寬限期將到期或已到期的項目。'],
  ['Guest Network Exclusion','訪客網路排除','查看是否設有訪客網路排除；勿自行推定評等影響。'],
  ['Guest Network Exclusion End Date','訪客網路排除結束日期','查找排除設定的到期時間。'],
  ['Cloud Platform','雲端平台','依資產所屬雲端平台篩選。'],
  ['Cloud Services','雲端服務','依辨識到的雲端服務篩選。'],
  ['Cloud Region','雲端區域','依雲端部署區域篩選。'],
  ['Product Support','產品支援','依介面顯示的產品支援資訊篩選；判讀須核對詳情。'],
  ['Identified Products','辨識到的產品','找出辨識到特定產品的資產。'],
  ['Vulnerability','弱點','依關聯弱點縮小資產範圍。'],
  ['Vulnerability Severity','弱點嚴重程度','依弱點嚴重程度排序調查對象。'],
  ['Vulnerability Evidence Certainty','弱點證據確定程度','依證據可信程度縮小結果；仍須核對證據內容。'],
  ['Vulnerability Evidence Detection','弱點證據偵測方式','依證據偵測資訊篩選；具體選項以原介面為準。'],
  ['Vulnerability Statement','弱點聲明','查找與弱點聲明相關的資產。'],
  ['Vulnerability Statement Visibility','弱點聲明可見性','依聲明的可見範圍篩選；不要將可見性視為修復狀態。']
];
const criticalColumns = [
  ['Asset','資產','被監控的資產識別，例如 IP 或網域；點選可查看證據詳情。'],
  ['Asset Type','資產類型','辨別資產是何種識別型態。'],
  ['Company','公司','資產所對應的供應商；調查前核對歸屬。'],
  ['Importance','資產重要程度','系統計算的資產重要性，不直接等同內部業務重要性。'],
  ['Guest Network Exclusion End Date','訪客網路排除結束日期','相關排除設定的到期日。'],
  ['Guest Network Exclusion','訪客網路排除','顯示相關排除設定。'],
  ['Country','國家／地區','資產關聯的位置資訊；不一定代表公司所在地。'],
  ['Identified Products','辨識到的產品','可見的產品線索；須核對版本與證據。'],
  ['Cloud Platform','雲端平台','資產關聯的雲端平台。'],
  ['Cloud Services','雲端服務','資產關聯的雲端服務。'],
  ['Cloud Region','雲端區域','資產關聯的雲端部署區域。'],
  ['Material/Severe Findings','重大／嚴重發現事項','用來聚焦高優先度發現，實際數值與分級須開啟詳情確認。'],
  ['Findings','發現事項','資產關聯的發現事項；數量本身不足以判定風險。']
];
const criticalControls = [
  ['Upload Assets','上傳資產','以 CSV 批次加入要監控的資產。'],
  ['Views / Create View','檢視／建立檢視','切換或保存常用的清單配置。'],
  ['Search','搜尋','在目前清單範圍查找資產。'],
  ['Select All','全選','選取目前適用範圍內的資產；批次操作前核對範圍。'],
  ['Unmonitor (0)','停止監控（0）','移除所選資產的監控；本次未選取資產，因此按鈕停用。'],
  ['Download as CSV','下載 CSV','匯出目前可用的清單資料；本次 0 筆時停用。'],
  ['Enter full screen','進入全螢幕','擴大表格工作區。'],
  ['Column options','欄位選項','調整欄位顯示或使用該欄可用操作。'],
  ['Rows / Prev / Next','筆數／上一頁／下一頁','查看結果量並在有多頁時換頁。']
];
function criticalAssetsPage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="fi-assessments">← 返回框架評估</button><div class="eyebrow">投資組合風險 / Critical Assets</div><h1>關鍵資產</h1><p class="lead">Critical Assets 是跨供應商的資產監控清單，幫助你把重要資產及其發現事項集中檢查。先確認資產所屬公司、重要程度與證據，再決定調查優先順序；這裡的資產重要程度不等於你組織自行定義的業務關鍵性。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>左側選單 <code>Portfolio Risk → Critical Assets</code>。本次畫面為 <code>0 Rows</code>，提示可從供應商的 <code>Infrastructure</code> 頁選取資產，或按 <code>Upload Assets</code> 上傳 CSV。這表示目前清單沒有可顯示的受監控資產，不能推論供應商沒有資產或弱點。</div><h2>頁面結構</h2><ol><li><strong>左側篩選：</strong>18 類條件涵蓋資產型態、重要程度、雲端資訊、發現事項與弱點證據。</li><li><strong>表格工具列：</strong>用 Views、Create View、Search 與欄位選項整理清單；Download as CSV 用於匯出。</li><li><strong>資產表格：</strong>預設可見 13 欄，先比對 Asset、Company、Importance，再查看 Findings 及其證據。</li><li><strong>批次動作：</strong>選取資產後才可使用 Unmonitor；這會改變監控清單，操作前須確認對象。</li></ol><h2>左側篩選器完整對照</h2>${table(criticalFilters)}<h2>預設表格欄位對照</h2>${table(criticalColumns)}<h2>按鈕與介面文字</h2>${table(criticalControls)}<h2>如何加入與檢查資產</h2><ol><li>先確認目標供應商與資產歸屬；可在該供應商的 Infrastructure 頁選取資產加入監控。</li><li>若需批次加入，使用 Upload Assets 上傳 CSV。依 BitSight 官方說明，CSV 每次最多 500 列，需提供 <code>asset</code>（IP 或網域）及對應公司的 <code>company-guid</code>／<code>entity_guid</code>；上傳前應先核對格式、歸屬與內部資料處理規範。</li><li>回到 Critical Assets，確認 Views 和篩選條件，再以公司、資產類型或重要程度縮小結果。</li><li>點選資產查看 Vulnerability Evidence Details；在 Details、Findings、Vulnerability Evidence 中核對位置、辨識資訊、發現時間與證據。</li><li>依嚴重程度、證據確定程度與業務影響安排跟進；若要停止監控，先確認所選資產及後續追蹤責任。</li></ol><div class="example"><strong>使用情境：優先調查重要資產</strong><p>以 Importance 與 Material/Severe Findings 縮小範圍，再核對 Company、Asset 和 Findings。重要程度是系統估計，不能取代內部對服務重要性的判定；發現數量也不能取代證據審查。</p></div><div class="example"><strong>使用情境：清單顯示 0 筆</strong><p>先確認是否曾從 Infrastructure 選取資產或完成 CSV 上傳，再檢查 Views、篩選條件與權限。不要把空白清單當成「該供應商沒有可見基礎設施」。</p></div><h2>容易誤判的地方</h2><ul><li><strong>資產重要程度不是供應商 Tier：</strong>前者估計單一數位資產的重要性，後者是供應商分層。</li><li><strong>發現數量不是風險結論：</strong>仍須看嚴重程度、觀測時間、證據與實際影響。</li><li><strong>雲端／產品欄位是線索：</strong>不應只憑清單推定精確部署位置、版本或存在可利用弱點。</li><li><strong>寬限期與排除設定需核實：</strong>其實際適用條件和評等影響應以平台設定或官方說明為準。</li><li><strong>Unmonitor 不是修復：</strong>停止監控只改變追蹤清單，不代表資產或弱點已消失。</li></ul><p class="note">本頁依 2026-09-17 可見的 BitSight 介面及官方文件整理；中文是教學用建議譯名，非官方譯文。沒有上傳、取消監控或公開帳號內資產資料。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/27658109042583-Portfolio-Risk-Critical-Assets" target="_blank" rel="noopener noreferrer">BitSight：Portfolio Risk — Critical Assets</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/360032935333-Asset-Importance" target="_blank" rel="noopener noreferrer">BitSight：Asset Importance</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/29746096036503-Vulnerability-Evidence-Details" target="_blank" rel="noopener noreferrer">BitSight：Vulnerability Evidence Details</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="compare"><strong>公司比較</strong><small>Compare Companies · 側欄下一個主題。</small></button><button class="feature-card" data-page="infrastructure"><strong>基礎設施</strong><small>Infrastructure · 查看單一供應商的資產脈絡。</small></button></div></article>`;
}

const compareFilters = [
  ['Folder','資料夾','從指定資料夾挑選比較對象。'],['Tier','供應商層級','聚焦同一重要性層級；層級不是安全評等。'],
  ['Subscription Type','訂閱類型','依目前訂閱類型篩選公司。'],['Vendor Action Plan','供應商行動計畫','依 Monitor、Review、Escalate 等管理分類縮小範圍。'],
  ['Relationship','關係','依與組織的供應商關係篩選。'],['Life Cycle','生命週期','依供應商生命週期階段篩選。'],
  ['Security Rating','安全評等','選擇評等範圍，避免把此分數當成風險結論。'],['Industry','產業','尋找相同產業的可比較對象。'],
  ['Country','國家／地區','依相關 IP 的地理位置篩選；不必然等於公司註冊地。'],['Self Published','自行發布','依自行發布資料的狀態篩選。'],
  ['Rating Type','評等類型','區分不同評等資料類型。'],['Risk Vector Grade','風險面向等級','依特定風險面向的等級找公司。'],
  ['Infections','感染事件','依惡意程式或殭屍網路相關訊號篩選。'],['Vulnerabilities','弱點','依特定弱點或 CVE 查找受影響公司。'],
  ['Open Ports','開放連接埠','依對外開放的連接埠或服務縮小範圍。'],['Public Disclosures','公開揭露','依公開揭露事件篩選。'],
  ['Software','軟體','依使用軟體或支援狀態查找公司。'],['Service Provider','服務提供者','找出依賴指定服務提供者的公司。'],
  ['Product','產品','找出依賴指定產品的公司。'],['Product Type','產品類型','依產品類別篩選。']
];
const compareVectors = [
  ['Compromised Systems','已受侵害系統','Botnet Infections 殭屍網路感染、Spam Propagation 垃圾郵件散播、Malware Servers 惡意程式伺服器、Unsolicited Communications 非預期通訊、Potentially Exploited 可能遭利用。'],
  ['Diligence','安全維護','SPF、DKIM、DMARC、SSL Certificates 憑證、SSL Configurations 設定、Open Ports 開放連接埠、Web Application Security 網站應用程式安全、Critical Vulnerability Management 重大弱點管理、Insecure Systems 不安全系統、DNSSEC、Server Software 伺服器軟體、Desktop Software 桌面軟體、Mobile Software 行動軟體、Web Application Headers 網站應用程式標頭。'],
  ['User Behavior','使用者行為','File Sharing 檔案分享。']
];
const compareTerms = [
  ['Edit / Save and View / Cancel','編輯／儲存並檢視／取消','進入 Criteria 選公司；儲存並檢視後重新產生比較，取消則保留原結果。'],
  ['Criteria / Companies / Selected','條件／公司／已選項目','從清單勾選比較對象，右側確認已選公司；避免選錯同名法人。'],
  ['Clear All / Clear / Search','清除全部／清除／搜尋','移除已選公司或篩選條件，或在候選公司清單搜尋。'],
  ['Company / Security Rating / Industry','公司／安全評等／產業','選取清單的主要欄位；同產業比較時也要核對公司規模與範圍。'],
  ['Download','下載','匯出比較報告；分享前檢查收件者與內部資料處理規範。'],
  ['Security Rating / Leaderboard','安全評等／排名表','看評等比較及 Rank、Company、Security Rating、Industry、Sub-Industry 欄位。'],
  ['Hide [Company]','隱藏公司','暫時從圖表隱藏一家公司，方便閱讀；不是取消監控或移除比較對象。'],
  ['Risk Vectors / Grade','風險面向／等級','按類別查看各面向的 A–F 等級；與整體評等是不同尺度。'],
  ['Events (Past Year) / Avg Duration (Days)','過去一年事件數／平均持續天數','用於已受侵害系統類面向；比較時應一起看期間與資料量。'],
  ['Findings / Grade Distribution','發現事項／等級分布','用於部分安全維護面向；點選發現事項數可前往公司詳情核對。']
];
function comparePage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>用途與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="critical-assets">← 返回關鍵資產</button><div class="eyebrow">投資組合風險 / Compare Companies</div><h1>公司比較</h1><p class="lead">Compare Companies 讓你選擇受監控公司，並排查看安全評等、過去的變化與風險面向差異。它適合建立供應商優先調查順序，但排名與分數只是線索，重要決策仍須核對個別公司的發現事項及業務脈絡。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>左側選單 <code>Portfolio Risk → Compare Companies</code>。本次可見的帳號已有比較結果；公開導覽僅說明介面，不列出帳號中的公司名稱、評等或其他數值。BitSight 官方文件指出比較最多可選 5 家公司，並可參照產業、層級與資料夾。</div><h2>兩階段操作</h2><ol><li><strong>選擇比較對象：</strong>按 Edit 進入 Criteria → Companies，透過左側篩選或 Search 找公司，勾選後在 Selected 核對名單，再按 Save and View。</li><li><strong>閱讀比較結果：</strong>先看 Security Rating 與 Leaderboard，再往 Risk Vectors 查看各面向的 Grade、事件或發現事項。按公司名稱或發現事項連結可回到個別公司核對證據。</li><li><strong>輸出：</strong>確定範圍及資料時間後，可用 Download 產生報告；避免直接把比較結果當成供應商核准或淘汰結論。</li></ol><h2>選擇公司時的 20 類篩選器</h2>${table(compareFilters)}<h2>結果頁的風險面向</h2><p>以下為本次畫面可見的分類與名稱。各面向下方的表格欄位會因類別而異，勾選框可用於聚焦顯示；不要把不同面向的 Grade 或 Findings 數量直接相加。</p>${table(compareVectors)}<h2>按鈕、欄位與專有名詞</h2>${table(compareTerms)}<h2>建議操作流程</h2><ol><li>先定義比較目的，例如同類型供應商選型，或找出同一 Tier 中需要優先審查的公司。</li><li>使用 Industry、Tier、Folder 等條件尋找適當對照組；核對法人、監控範圍及訂閱類型。</li><li>勾選公司並核對 Selected，按 Save and View 產生結果。若只想放棄變更，使用 Cancel。</li><li>先看整體 Security Rating 的相對位置與歷史趨勢，再看 Risk Vectors 的差異；確認數據期間一致。</li><li>點進低等級或異常事件對應的個別公司與 Findings，記錄證據、日期、資產與後續調查責任。</li><li>匯出前確認比較對象、報告日期與分享權限，並在結論中交代非評等因素。</li></ol><div class="example"><strong>使用情境：比較同類型候選供應商</strong><p>以 Industry 找相近對象，選取最多 5 家公司，查看整體評等與特定風險面向。若某家公司 SPF 或 Open Ports 表現較弱，回到該公司的 Findings 核對具體證據，而不是只以排名判定合約結果。</p></div><div class="example"><strong>使用情境：追查同層級供應商的差異</strong><p>以 Tier 或 Folder 縮小清單，先比較同一管理範圍內的公司，再依事件數、平均持續時間與發現事項安排審查。層級反映內部管理重要性，並非平台給的安全分數。</p></div><h2>容易誤判的地方</h2><ul><li><strong>排名不等於因果：</strong>評等較低不必然代表遭入侵，評等較高也不保證沒有弱點。</li><li><strong>比較對象要可比：</strong>產業、規模、資產範圍與資料時間不同，都可能影響解讀。</li><li><strong>Grade 與 Findings 不同：</strong>字母等級是風險面向表現，發現事項數量是線索；兩者不能互相取代。</li><li><strong>Hide 只是圖表操作：</strong>不會取消公司訂閱或清除已選名單。</li><li><strong>下載報告可能敏感：</strong>其中可能包含供應商名單與風險分析，應依組織規範分享。</li></ul><p class="note">本頁依 2026-09-17 可見的 BitSight Continuous Monitoring 介面及官方文件整理。中文為教學用建議譯名，非官方譯文；畫面可能因版本、授權與所選公司而異。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/360052225414-Portfolio-Risk-Compare-Companies" target="_blank" rel="noopener noreferrer">BitSight：Portfolio Risk — Compare Companies</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4410655245079-Continuous-Monitoring-Application" target="_blank" rel="noopener noreferrer">BitSight：Continuous Monitoring Application</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="discovery"><strong>供應商探索</strong><small>Vendor Discovery · 側欄下一個主題。</small></button><button class="feature-card" data-page="findings"><strong>發現事項</strong><small>Findings · 回到單一公司查證風險線索。</small></button></div></article>`;
}

const discoveryTerms = [
  ['Company','公司','候選公司的名稱、標誌與網域；先核對法人與實際服務關係。'],
  ['Industry','產業','候選公司所屬產業，供篩選與背景判讀。'],
  ['Certainty Level','關聯確定程度','平台對「是否為你的供應商或第四方」的確定程度，並非安全分數。'],
  ['Confirmed / Suspected','已確認／疑似','關聯證據的不同判斷狀態；疑似對象需進一步核查。'],
  ['Relevance','相關性','候選公司對持續監控計畫的相關程度，與 Certainty Level 是不同概念。'],
  ['High / Medium / Low','高／中／低','相關性分級；高相關不等於高資安風險。'],
  ['Show Subscribed','顯示已訂閱','切換是否將已訂閱公司一併顯示。'],
  ['Search','搜尋','在探索清單依公司名稱查找。'],
  ['Download Vendors','下載供應商清單','將目前清單匯出為 CSV；分享前確認資料處理規範。'],
  ['Subscribe / Unsubscribe','訂閱／取消訂閱','選取公司後管理監控訂閱；可能受權限與訂閱額度限制。'],
  ['Actions → View declined vendors','動作 → 查看已略過的供應商','查看先前從探索清單略過的候選對象。'],
  ['Decline this vendor','略過此供應商','將候選對象移出一般探索清單；不代表已證明沒有關係。'],
  ['IP Addresses / Monitored By','IP 位址數／監控此公司的組織數','詳情側欄的背景指標；不等於你組織直接使用其服務的證據。'],
  ['Products Identified','辨識到的產品','檢查哪些產品線索支持關聯判斷，必要時展開 View all。']
];
function discoveryPage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="compare">← 返回公司比較</button><div class="eyebrow">投資組合風險 / Vendor Discovery</div><h1>供應商探索</h1><p class="lead">Vendor Discovery 列出 BitSight 根據技術與非技術線索辨識的可能供應商或第四方。先看關聯確定程度與相關性，再開啟候選公司的詳情側欄查證理由；「被發現」不等於已確認合約關係，也不表示安全風險高。</p><div class="callout"><strong>進入路徑</strong><br>左側選單 <code>Portfolio Risk → Vendor Discovery</code>。本頁是候選關係清單；訂閱、取消訂閱與略過都會影響帳號中的追蹤狀態，導覽僅說明操作，不代替你執行。</div><h2>頁面結構與閱讀順序</h2><ol><li><strong>清單工具列：</strong>Show Subscribed 切換已訂閱公司、Search 查找名稱、Download Vendors 匯出清單，Actions 可查看已略過對象。</li><li><strong>候選公司欄位：</strong>Company、Industry、Certainty Level、Relevance；可依公司與相關性排序。</li><li><strong>詳情側欄：</strong>點選公司列，查看公司背景、Industry、IP Addresses、Monitored By、關聯理由與 Products Identified。</li><li><strong>追蹤決策：</strong>核對證據後，才依組織流程選擇 Subscribe 或 Decline this vendor；已訂閱公司可依權限變更或取消訂閱。</li></ol><h2>欄位、按鈕與專有名詞</h2>${table(discoveryTerms)}<h2>確定程度與相關性怎麼分</h2><ul><li><strong>Certainty Level：</strong>回答「BitSight 對這條供應商／第四方關聯有多確定？」會受技術及非技術觀察影響。</li><li><strong>Relevance：</strong>回答「此候選公司對監控計畫有多相關？」官方說明中的高、中、低與資產線索集中程度及同類組織的監控情形有關。</li><li><strong>Security risk：</strong>這是另外需要檢查的議題；不能用 Confirmed 或 High Relevance 直接推導安全評等、弱點或合約重要性。</li></ul><h2>詳情側欄可看什麼</h2><p>點選候選公司後，可看到公司簡介、產業、IP 位址數、監控此公司的組織數，以及 High Relevance Suggestion、Confirmed Connection 等關聯說明。Products Identified 顯示支持判斷的產品線索。技術線索可能來自憑證、電子郵件、主機、DNS 或 CDN 等可觀測資料；非技術線索也可能來自公開文字，因此仍須與內部採購、合約及系統負責人交叉核對。</p><h2>建議操作流程</h2><ol><li>搜尋候選公司，核對名稱、網域與產業，避免把同名或集團公司混為一談。</li><li>比較 Certainty Level 與 Relevance；先處理關聯較明確、業務影響較可能重要的對象。</li><li>打開詳情側欄，記下關聯理由與辨識到的產品；與內部系統清單、採購或服務負責人確認實際用途。</li><li>若確認需要持續監控，再評估訂閱類型、授權與額度，依組織流程訂閱；不確定時先保留待查，不要急著略過。</li><li>匯出或批次處理前，確認目前是否顯示已訂閱公司，以及勾選範圍。</li></ol><div class="example"><strong>使用情境：發現未知的雲端服務商</strong><p>先看詳情中的關聯來源與 Products Identified，再向系統或採購負責人核對是否確實使用該服務。若只見技術線索，應記錄待確認事項，不直接新增為正式供應商。</p></div><div class="example"><strong>使用情境：清理不相關候選項</strong><p>在確定不是需要追蹤的關係後才使用 Decline this vendor。若日後發現誤判，可從 Actions → View declined vendors 重新檢查。</p></div><h2>容易誤判的地方</h2><ul><li><strong>已確認關聯不是合約證明：</strong>技術依賴、第四方關係和直接採購關係不同。</li><li><strong>高相關性不是高風險：</strong>相關性衡量監控價值，不是弱點嚴重程度。</li><li><strong>IP 位址數不等於你使用量：</strong>詳情中的背景數字可能描述該公司的整體規模。</li><li><strong>略過與取消訂閱不同：</strong>前者處理探索候選項，後者改變已監控公司的訂閱。</li><li><strong>批次操作要核對範圍：</strong>Subscribe／Unsubscribe 可能作用於多個勾選對象。</li></ul><p class="note">本頁依 2026-09-17 可見介面及 BitSight 官方文件整理；中文為教學用建議譯名，非官方譯文。網站未公開帳號中的候選公司或關聯細節。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/19452547709079-Vendor-Discovery" target="_blank" rel="noopener noreferrer">BitSight：Vendor Discovery</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/26791984344087-Vendor-Data-Collection-Methods" target="_blank" rel="noopener noreferrer">BitSight：Vendor Data Collection Methods</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="expired"><strong>到期訂閱</strong><small>Expired Subscriptions · 側欄下一個主題。</small></button><button class="feature-card" data-page="providers"><strong>服務提供者</strong><small>Service Providers · 了解第四方依賴。</small></button></div></article>`;
}

const expiredTerms = [
  ['Expired Subscriptions','到期訂閱','查看過去曾訂閱、目前已到期的公司，盤點監控中斷風險。'],
  ['Company / Industry','公司／產業','先核對公司身分與所屬產業，避免誤認同名公司。'],
  ['Subscription Type','訂閱類型','記錄該公司先前使用的訂閱類型。'],
  ['Date Expired','到期日期','判斷中斷多久；與最後一次安全評等的日期不同。'],
  ['Last Seen Rating','到期時最後可見評等','歷史數值，不代表現在的安全狀態；到期超過一年可能沒有此值。'],
  ['Rating Change','評等變化','官方 API 提供的變化分類，須核對比較區間後才解讀。'],
  ['Has Current Active Subscription','目前是否已有有效訂閱','辨別到期後是否已重新訂閱，避免重複處理。']
];
function expiredPage(p){
  const rows=expiredTerms.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('');
  return `<article class="doc"><button class="back-link" data-page="discovery">← 返回供應商探索</button><div class="eyebrow">投資組合風險 / Expired Subscriptions</div><h1>到期訂閱</h1><p class="lead">Expired Subscriptions 用來回顧曾監控但訂閱已到期的公司，協助確認哪些供應商仍有業務關係、是否需要恢復監控，以及誰負責處理續訂。</p><div class="callout"><strong>進入路徑與本次可見範圍</strong><br>左側選單 <code>Portfolio Risk → Expired Subscriptions</code>。本次原系統只載入頁面標題，清單、欄位與按鈕未顯示；因此下方術語來自 BitSight 官方的到期訂閱資料文件，<strong>不是已核對的目前介面欄位</strong>。不能據此判定帳號沒有到期項目。</div><h2>官方資料欄位對照（非本次畫面欄位）</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>用途與判讀</th></tr></thead><tbody>${rows}</tbody></table></div><h2>建議檢查流程</h2><ol><li>先確認清單是否正常載入；如果只有標題或空白區域，重新整理後仍無內容，應詢問帳號管理者或 BitSight 支援，不能直接解讀為零筆。</li><li>清單可用時，逐筆核對公司、過去的訂閱類型與到期日期，再與內部供應商清單比對是否仍在合作。</li><li>確認該公司是否已重新訂閱；若有有效訂閱，勿再把過去到期紀錄當成目前監控中斷。</li><li>對仍在合作、且尚未恢復監控的公司，依內部流程確認授權、額度、訂閱類型與負責人，再決定是否續訂。</li><li>將監控中斷期間、資料缺口及恢復監控日期記錄在風險審查中；不要將到期前評等當成現在的評等。</li></ol><div class="example"><strong>使用情境：盤點仍有合作關係的到期供應商</strong><p>把到期清單與採購或供應商管理資料比對，先處理關鍵且仍在使用的服務。若曾經到期、但現在已有有效訂閱，應標記為已恢復，而不是重複申請。</p></div><h2>容易誤判的地方</h2><ul><li><strong>頁面空白不等於零筆：</strong>本次清單沒有載入，可能是載入或權限等原因。</li><li><strong>到期不等於合作結束：</strong>要向內部業務負責人確認合約與實際使用狀態。</li><li><strong>歷史評等不是即時評等：</strong>訂閱中斷後的資料可用性可能不同。</li><li><strong>續訂是有影響的操作：</strong>需依帳號權限及組織採購流程辦理，不應只憑導覽自動執行。</li></ul><p class="note">本頁依 2026-09-17 可見畫面與 BitSight 官方資料文件整理。由於原系統清單未載入，沒有臆測目前介面的篩選器、按鈕或實際筆數；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/360019205333-GET-Expired-Subscriptions" target="_blank" rel="noopener noreferrer">BitSight：GET — Expired Subscriptions</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4410655245079-Continuous-Monitoring-Application" target="_blank" rel="noopener noreferrer">BitSight：Continuous Monitoring Application</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="vendor-overview"><strong>供應商總覽</strong><small>Overview · 側欄下一個主題。</small></button><button class="feature-card" data-page="companies"><strong>公司清單</strong><small>Companies List · 核對目前仍在監控的對象。</small></button></div></article>`;
}

const overviewSections = [
  ['Vendor Risk AI Summary / Generate summary','供應商風險 AI 摘要／產生摘要','可要求系統產生摘要；須核對原始評等、發現與日期，不能把 AI 文字當成已驗證事實。'],
  ['Bitsight Security Rating','BitSight 安全評等','查看目前評等與評等類別；與內部供應商 Tier 不同。'],
  ['Risk of Security Incidents','資安事件風險','呈現與相似公司評等相關的事件／勒索軟體風險脈絡；屬統計關聯，不是對單一公司事件的預言。'],
  ['Threat Intel News / Security Incidents','威脅情報新聞／資安事件','查看新聞與近期重大事件；No Events Found 只表示目前範圍未列出事件。'],
  ['Alerts','警示','查看近期警示並連到警示頁；先核對時間及類型。'],
  ['Security Ratings Changes','安全評等變化','歷史評等圖，可縮放並查看最高、最低點及重要事件標註。'],
  ['Security Incident Risk','資安事件風險分析','結合部分風險面向呈現事件風險相關性；須核對研究方法與適用範圍。'],
  ['Risk Vectors','風險面向','表格呈現 Risk Vector、Trend (12 months)、Grade、Risk of Security Event、Findings。'],
  ['Asset Distribution / View All Assets','資產分布／查看所有資產','以國家或地區查看資產集中情況，再到基礎設施核對歸屬。'],
  ['Exposed Vulnerabilities','曝險弱點','按 Exposure Confirmed、Likely、Possible 區分證據程度；可能曝險不等於已確認。'],
  ['Exposure Trend / CVSS Vulnerability Severity','曝險趨勢／CVSS 弱點嚴重程度','查看近期變化與 Critical、High、Medium、Low 分布。'],
  ['4th Party / Service Providers / Products','第四方／服務提供者／產品','查看供應商對其他服務商或產品的依賴。'],
  ['Service Provider Median Rating / Rating Distribution','服務提供者評等中位數／分布','第四方評等的統計摘要，不可直接當作本供應商評等。']
];
const overviewControls = [
  ['Vendor Access','供應商存取','邀請供應商協作或查看既有協作；送出邀請前確認對象與權限。'],
  ['Reports and Assessments','報告與評估','開啟執行摘要、公司報告、風險摘要及評估等入口，依授權而異。'],
  ['Actions','動作','可進入筆記、公司比較、資料夾、Tier、訂閱及第四方資訊等操作。'],
  ['Mute Increases','隱藏評等上升標註','調整歷史圖上顯示的變化標註，不更改實際評等。'],
  ['Industry Range and Median / Portfolio Range and Median','產業／投資組合範圍與中位數','切換歷史圖的參考群體；比較前確認目前選用哪一組。'],
  ['Company Information / Relationship / Tier','公司資訊／關係／層級','右側面板提供公司背景、內部關係與分層；內部分類需另行核對。'],
  ['Contacts / Notes / Invitations','聯絡人／筆記／邀請','協作資料與紀錄，不應公開分享或視為風險證據本身。']
];
function vendorOverviewPage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>用途與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="expired">← 返回到期訂閱</button><div class="eyebrow">供應商風險 / Overview</div><h1>供應商總覽</h1><p class="lead">Vendor Risk → Overview 是單一供應商的風險起點：先核對目前選中的公司，再看安全評等、歷史變化、事件、弱點、資產與第四方依賴，最後連到風險面向或發現事項查證。</p><div class="callout"><strong>進入路徑</strong><br>從 Companies List 選公司，或用頂端公司選擇器切換，再開啟 <code>Vendor Risk → Overview</code>。畫面會隨選取公司、訂閱與權限改變；本網站不複製帳號中的公司名稱、評等或聯絡資料。</div><h2>主要資訊卡與專有名詞</h2>${table(overviewSections)}<h2>頁首與右側資訊面板</h2>${table(overviewControls)}<h2>建議閱讀流程</h2><ol><li>先核對頂端公司名稱，以及右側 Company Information 的網域、產業、Relationship 與 Tier；避免看錯集團或子公司。</li><li>查看 Bitsight Security Rating 和 Security Ratings Changes；比對歷史區間時，留意圖上的演算法更新或事件標記，不把所有變化都解讀成實際環境改變。</li><li>閱讀 Alerts、Security Incidents 與 Threat Intel News，確認資訊日期、來源和是否真的對應該公司。</li><li>在 Risk Vectors 表格找出 Grade 較弱或趨勢下降的面向，點開 Findings 核對資產、證據與觀測時間。</li><li>檢查 Exposed Vulnerabilities 的證據確定程度及 CVSS 嚴重程度，再連到弱點偵測；Possible 不等同 Confirmed。</li><li>從 Asset Distribution 與 4th Party 了解資產和依賴範圍，必要時再查看服務提供者、產品和基礎設施頁。</li><li>使用 Notes、Contacts 或報告協作前，先確認資訊敏感性與負責人。</li></ol><div class="example"><strong>使用情境：評等突然下降</strong><p>先確認變動日期、歷史圖註記及參考群體，再看相關 Risk Vector 和 Findings。若圖表標示演算法更新，應先分辨模型變化與實際新發現，而不是直接認定供應商發生事故。</p></div><div class="example"><strong>使用情境：檢查近期弱點曝險</strong><p>先看 Exposure Trend 與 CVSS Vulnerability Severity，再分辨 Confirmed、Likely、Possible；進入弱點詳情核對資產和證據，才決定是否要求供應商說明。</p></div><h2>容易誤判的地方</h2><ul><li><strong>相關性不等於必然性：</strong>Risk of Security Incidents 使用研究關聯，不能預測單一公司一定發生事件。</li><li><strong>風險面向等級不同於整體分數：</strong>須看相應 Findings 與資料期間。</li><li><strong>沒有警示不是零風險：</strong>可能受期間、範圍、資料與設定影響。</li><li><strong>第四方中位數不是本公司評等：</strong>只能用於了解依賴生態系的概況。</li><li><strong>AI 摘要需查證：</strong>應回到原始數據與證據，不直接用摘要作最終審查結論。</li></ul><p class="note">本頁依 2026-09-17 可見的 BitSight Continuous Monitoring 介面及官方文件整理。中文為教學用建議譯名，非官方譯文；個別公司資訊未公開。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/17645793270551-Vendor-Risk-Overview" target="_blank" rel="noopener noreferrer">BitSight：Vendor Risk — Overview</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/360044538213-CM-App-Company-Info" target="_blank" rel="noopener noreferrer">BitSight：Company Information</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="framework"><strong>框架情報</strong><small>Framework Intelligence · 側欄下一個主題。</small></button><button class="feature-card" data-page="vectors"><strong>風險面向</strong><small>Risk Vectors · 追查評等構成。</small></button></div></article>`;
}

const frameworkTerms = [
  ['New Assessment','建立新評估','進入建立框架評估的流程；上傳文件前先確認權利、保密條款及適用框架。'],
  ['Completed Assessments','已完成評估','目前選用的檢視，並搭配 Status: Completed 條件。'],
  ['Status / User / Date / Framework','狀態／使用者／日期／框架','依評估流程、相關人員、日期或評估框架縮小清單。'],
  ['Active Filters / Applied filters','使用中／已套用篩選','先確認條件，再解讀筆數；本次畫面套用 Completed。'],
  ['Columns / Views / Create View','欄位／檢視／建立檢視','調整表格欄位或保存常用配置。'],
  ['Assessment Name','評估名稱','辨識不同輪次或不同框架的評估紀錄。'],
  ['Framework','框架','查看此筆評估依據哪個資安框架；比較前核對版本。'],
  ['Status','狀態','流程是否完成，不能直接當作符合性結論。'],
  ['Completed Date','完成日期','判斷評估與證據的新舊。'],
  ['User','使用者','清單顯示的相關人員；實際角色須查看詳情。'],
  ['Compliance','符合情形','框架控制項的符合情形摘要；需檢查各控制項及證據。'],
  ['Actions','動作','對單筆評估的可用操作，依權限與狀態不同。'],
  ['Search / Rows / Prev / Next','搜尋／筆數／上一頁／下一頁','在目前檢視查找紀錄並換頁；0 筆時分頁停用。']
];
function frameworkPage(p){
  const rows=frameworkTerms.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('');
  return `<article class="doc"><button class="back-link" data-page="vendor-overview">← 返回供應商總覽</button><div class="eyebrow">供應商風險 / Framework Intelligence</div><h1>框架情報</h1><p class="lead">這個 Framework Intelligence 頁面聚焦「目前選中的單一供應商」的框架評估。它可查找既有評估並從 New Assessment 建立新評估；與 Portfolio Risk → Assessments (FI) 的跨公司清單不同，讀取結果時須先核對頁首公司。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Framework Intelligence</code>。本次預設為 <code>Completed Assessments</code>，套用 <code>Status: Completed</code>，顯示 <code>0 Rows / No results found</code>。這只表示目前條件沒有可見紀錄，不能推論沒有其他狀態的評估。</div><h2>欄位、篩選器與按鈕</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows}</tbody></table></div><h2>建立新評估前先確認</h2><ol><li>確認頁首供應商正確，選擇要對照的框架及版本。</li><li>確認文件由誰提供、涵蓋哪個期間及哪個法人；不要把母公司文件直接當成子公司證據。</li><li>依文件保密條款、內部政策與權限，確認可否交由第三方評估工具處理。尚未獲授權時不要上傳。</li><li>評估完成後，逐項核對控制要求、AI 擷取的證據、引用位置與例外；對 Not Compliant 或 Needs Review 做人工複核。</li></ol><h2>建議查閱流程</h2><ol><li>先確認公司、目前 View 與 Active Filters。</li><li>若結果為 0 筆，檢查 Status: Completed 是否排除了未完成項目，再視需要調整日期或框架條件。</li><li>有紀錄後，比對 Assessment Name、Framework、Status 和 Completed Date，再開啟詳情查看控制項與證據。</li><li>記錄適用框架版本、文件日期、待補證據及審查者，不只轉述 Compliance 欄位。</li></ol><div class="example"><strong>使用情境：尋找某公司的最新完成評估</strong><p>在單一公司頁保留 Completed 條件，依 Completed Date 查找近期紀錄，並確認 Framework 相同。若要跨公司盤點，改到 Portfolio Risk → Assessments (FI)。</p></div><h2>容易誤判的地方</h2><ul><li><strong>完成不等於合規：</strong>Status 是流程狀態，Compliance 是另一個結果摘要。</li><li><strong>AI 判讀需要人工覆核：</strong>沒有找到證據，不一定表示控制從未實施；文件可能不完整、過期或不適用。</li><li><strong>0 筆不等於沒有評估：</strong>可能受 Completed 條件、檢視、權限與日期限制。</li><li><strong>文件保密要先處理：</strong>新評估可能涉及供應商敏感文件，應先確認分享授權。</li></ul><p class="note">本頁依 2026-09-17 可見介面與 BitSight 官方文件整理。此帳號在目前檢視無紀錄，因此未臆測單筆評估結果；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4410655245079-Continuous-Monitoring-Application" target="_blank" rel="noopener noreferrer">BitSight：Continuous Monitoring Application</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/37028273241751-Framework-Intelligence-in-VRM" target="_blank" rel="noopener noreferrer">BitSight：Framework Intelligence in VRM</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/35002894066199-Framework-Intelligence-Data-Privacy-Security-Overview" target="_blank" rel="noopener noreferrer">BitSight：Framework Intelligence Data Privacy</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="instant"><strong>即時洞察</strong><small>Instant Insights · 側欄下一個主題。</small></button><button class="feature-card" data-page="fi-assessments"><strong>框架評估清單</strong><small>Assessments (FI) · 跨公司查看評估。</small></button></div></article>`;
}

const instantTerms = [
  ['SOC report','SOC 報告','目前 Continuous Monitoring 的 Instant Insights 僅支援分析 SOC 2 報告。'],
  ['Drag & drop file / select file','拖放檔案／選擇檔案','選擇要分析的供應商文件；上傳前確認保密與分享權限。'],
  ['Maximum file size 10 MB','檔案上限 10 MB','本次畫面顯示的單一檔案限制；若規格變動，以原介面為準。'],
  ['Analyze','開始分析','選檔後執行 AI 摘要；本次未選檔，因此按鈕停用。'],
  ['Download PDF','下載 PDF','分析完成後保存摘要；本次沒有結果，因此按鈕停用。'],
  ['Clear','清除','清除目前分析狀態；本次沒有結果，因此按鈕停用。']
];
function instantPage(p){
  const rows=instantTerms.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('');
  return `<article class="doc"><button class="back-link" data-page="framework">← 返回框架情報</button><div class="eyebrow">供應商風險 / Instant Insights</div><h1>即時洞察</h1><p class="lead">Instant Insights 在此不是即時威脅警示，而是用生成式 AI 摘要供應商的 SOC 2 報告。它能縮短文件初讀時間，但輸出必須由審查者對照原報告逐項驗證。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Instant Insights</code>。本次畫面只有上傳區：提示上傳 SOC 報告、單檔最多 <code>10 MB</code>；<code>Analyze</code>、<code>Download PDF</code>、<code>Clear</code> 目前均停用。網站沒有上傳任何文件。</div><h2>按鈕與介面翻譯</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows}</tbody></table></div><h2>分析後應核對的資訊</h2><p>依 BitSight 官方說明，摘要可能提取報告類型、服務內容、涵蓋期間、資料儲存或處理地點、稽核機構、意見類型，以及例外或風險。控制項可能附有原文件頁碼，可用來回查來源。實際輸出項目應以本次分析結果為準。</p><h2>建議操作流程</h2><ol><li>確認頂端選中的供應商與報告中的法人一致，並檢查報告是否為適用的 SOC 2 文件、期間是否涵蓋審查需求。</li><li>確認與供應商的 NDA、文件使用條款及內部資料處理政策允許上傳至此工具；若不確定，先取得負責人核准。</li><li>選檔後執行 Analyze；閱讀結果時逐項回到原報告頁碼核對，特別留意稽核意見、例外、報告範圍與附註。</li><li>若要留存審查紀錄，分析完成後先下載 PDF，再離開頁面。BitSight 官方說明指出 Continuous Monitoring 不保留上傳文件或產生的洞察，離開後摘要會消失。</li><li>以人工審查結論記錄疑點與待補證據，不將 AI 摘要當成獨立的合規認證。</li></ol><div class="example"><strong>使用情境：快速初讀 SOC 2 報告</strong><p>先讓工具整理報告期間、稽核意見與例外項目，再由審查者回到原文件逐項檢查引用頁。若摘要漏掉範圍限制或把模糊內容說成已符合，仍以原始報告與人工判讀為準。</p></div><h2>容易誤判的地方</h2><ul><li><strong>即時洞察不是即時監控：</strong>此頁處理上傳的 SOC 2 報告，不是持續掃描供應商的威脅事件。</li><li><strong>AI 可能出錯：</strong>畫面也提醒使用者須自行驗證輸出準確性。</li><li><strong>離開頁面可能失去摘要：</strong>需要紀錄時，先依內部規範下載或保存。</li><li><strong>可上傳不等於有分享權：</strong>供應商文件可能受 NDA 或使用限制約束。</li></ul><p class="note">本頁依 2026-09-17 可見畫面與 BitSight 官方文件整理；中文為教學用建議譯名。未上傳文件，也未臆測實際 AI 分析結果。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/37035948431255-Instant-Insights-Data-and-Technologies-for-Continuous-Monitoring" target="_blank" rel="noopener noreferrer">BitSight：Instant Insights Data and Technologies for Continuous Monitoring</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="assessments"><strong>評估</strong><small>Assessments · 側欄下一個主題。</small></button><button class="feature-card" data-page="framework"><strong>框架情報</strong><small>Framework Intelligence · 對照文件與框架控制項。</small></button></div></article>`;
}

const vendorAssessmentTerms = [
  ['Switch Assessments','切換評估','選擇不同框架或問卷報告；比較前先核對版本及適用範圍。'],
  ['Download PDF / Download as CSV','下載 PDF／CSV','輸出目前評估報告或表格資料；分享前檢查資料敏感性。'],
  ['Enable Vendor Access','啟用供應商存取','供應商協作入口，啟用前確認權限、對象與分享範圍。'],
  ['Section / Sub-Section','章節／子章節','按照框架或問卷的主題尋找問題。'],
  ['Question ID / Question','問題編號／問題','核對框架控制項識別碼與實際要求。'],
  ['Risk Vectors','風險面向','顯示映射到該問題的 BitSight 風險面向，供證據調查。'],
  ['Flag / Flags','標記／標記篩選','提示對應風險面向可能表現較差，需打開詳情查證。'],
  ['Grades','等級','依相關風險面向的字母等級篩選。'],
  ['Mapped Questions','已映射的問題','只看有對應風險面向的題目；未映射不代表不重要。'],
  ['Views / Create View','檢視／建立檢視','切換或保存常用的篩選配置。'],
  ['Question Details / View Findings','問題詳情／查看發現事項','開啟題目後檢查映射理由、風險面向等級與對應發現。']
];
function vendorAssessmentPage(p){
  const rows=vendorAssessmentTerms.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('');
  return `<article class="doc"><button class="back-link" data-page="instant">← 返回即時洞察</button><div class="eyebrow">供應商風險 / Assessments</div><h1>評估</h1><p class="lead">這頁將選定供應商的 BitSight 風險面向映射到標準或自訂的控制問卷，協助找出要深入檢查的題目。它不是「Framework Intelligence」的文件 AI 評估，也不能只憑風險面向等級宣稱某項控制已通過或未通過。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Assessments</code>。本次顯示一份 NIST SP 800-53 報告，並套用 <code>Mapped Questions</code> 篩選。實際題數與分數屬帳號資料，未收錄在公開導覽。</div><h2>欄位、篩選器與按鈕</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows}</tbody></table></div><h2>如何讀一個問題</h2><ol><li>先看 Section、Sub-Section、Question ID 與 Question，確認是否為你要檢查的控制要求。</li><li>檢查該問題是否有 Mapped Questions，以及映射到哪些 Risk Vectors；沒有映射只表示平台沒有對應的可觀測風險面向。</li><li>點選問題開啟 Question Details，閱讀映射理由及各風險面向的 Grade。若出現 Flag，優先核對較弱面向。</li><li>從 View Findings 連到具體發現事項，核對資產、證據與時間；若要得出控制結論，仍需供應商文件、回覆或其他稽核證據。</li></ol><h2>建議操作流程</h2><ol><li>確認目前選定的供應商與報告框架；使用 Switch Assessments 切換時記下版本。</li><li>檢查 Active Filters，尤其是 Mapped Questions；若找不到題目，先確認它是否被篩選排除。</li><li>以 Section、Flags、Grades 或 Risk Vectors 縮小清單，從需要優先調查的問題開始。</li><li>進入單題詳情，連結到 Findings 核對原始資訊，再記錄待向供應商確認的控制項。</li><li>輸出 PDF 或 CSV 前，確認範圍、日期、收件者與資料處理規範。</li></ol><div class="example"><strong>使用情境：準備供應商控制訪談</strong><p>選擇特定 Section，找出有 Flag 的問題，查看對應風險面向及其 Findings。把外部可觀測線索轉成需要供應商說明的問題，而不是直接判定控制失效。</p></div><h2>容易誤判的地方</h2><ul><li><strong>映射不是直接證明：</strong>風險面向反映外部觀察，控制項可能還有內部程序與文件要求。</li><li><strong>Flag 不是不合規判決：</strong>它提示相關面向表現較差，需要人工審查。</li><li><strong>未映射不等於合格：</strong>沒有對應技術訊號時仍需其他證據。</li><li><strong>這頁與 FI 不同：</strong>FI 用文件比對框架控制項；此頁偏重評等風險面向與問卷題目的映射。</li></ul><p class="note">本頁依 2026-09-17 可見介面及 BitSight 官方評估文件整理。中文為教學用建議譯名；沒有公開帳號內的題數、公司名稱或結果。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4410655245079-Continuous-Monitoring-Application" target="_blank" rel="noopener noreferrer">BitSight：Continuous Monitoring Application</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/26310670749975-Organization-Assessments" target="_blank" rel="noopener noreferrer">BitSight：Assessments 欄位與問題詳情</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="vectors"><strong>風險面向</strong><small>Risk Vectors · 側欄下一個主題。</small></button><button class="feature-card" data-page="framework"><strong>框架情報</strong><small>Framework Intelligence · 對照文件評估。</small></button></div></article>`;
}

const vectorGroups = [
  ['Compromised Systems','已受侵害系統','Botnet Infections 殭屍網路感染、Spam Propagation 垃圾郵件散播、Malware Servers 惡意程式伺服器、Unsolicited Communications 非預期通訊、Potentially Exploited 可能遭利用。'],
  ['Diligence','安全維護','SPF Domains、DKIM Records、DMARC、TLS/SSL Certificates 憑證、TLS/SSL Configurations 設定、Open Ports 開放連接埠、Web Application Security 網站應用程式安全、Critical Vulnerability Management 重大弱點管理、Insecure Systems 不安全系統、Server Software 伺服器軟體、Desktop Software 桌面軟體、Mobile Software 行動軟體、DNSSEC、Web Application Headers 網站應用程式標頭、Domain Squatting 網域仿冒。'],
  ['User Behavior','使用者行為','File Sharing 檔案分享、Exposed Credentials 洩露憑證。'],
  ['Public Disclosures','公開揭露','Security Incidents 資安事件、Other Disclosures 其他揭露。']
];
const vectorTerms = [
  ['Risk Vector / Risk Category','風險面向／風險類別','風險類別彙整數個面向；每個面向有自己的等級與發現事項。'],
  ['Weight / Total weight','權重／類別總權重','表示對評等的計算影響；實際數值與規則須以當前介面及最新方法論為準。'],
  ['Grade A–F','A–F 等級','用於比較單一面向的表現；不能直接當成整體 Security Rating。'],
  ['N/A','不適用／無可用等級','可能因資訊型面向、資料不足或尚未納入評等，不能解讀為零風險。'],
  ['Does not impact rating','目前不影響評等','仍可提供調查資訊，但不直接計入目前分數。'],
  ['Top 10% / Top 30%','前 10%／前 30%','與其他公司相比的相對位置，須注意公司規模與資料涵蓋。'],
  ['Findings','發現事項','開啟具體紀錄核對資產、時間、嚴重程度與改善狀態。'],
  ['Overview / Toggle navigation','總覽／切換導覽','返回類別概覽或收合左側面向清單。']
];
function vectorPage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="assessments">← 返回評估</button><div class="eyebrow">供應商風險 / Risk Vectors</div><h1>風險面向</h1><p class="lead">Risk Vectors 將單一公司的可觀測資安訊號拆成類別與面向，幫助你理解安全評等的構成，並找出值得深入查證的發現事項。先看等級、權重及是否影響評等，再往下追到原始 Findings。</p><div class="callout"><strong>進入路徑</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Risk Vectors</code>。本次可見 Overview 與四大類別；左側可選單一面向。權重屬目前畫面及方法論設定，可能隨演算法更新而變動，不宜把舊數字寫成永久規則。</div><h2>四大類別與目前可見面向</h2>${table(vectorGroups)}<h2>關鍵介面與專有名詞</h2>${table(vectorTerms)}<h2>建議閱讀流程</h2><ol><li>確認頂端公司與評等日期，先在 Overview 看各類別的相對權重。</li><li>在左側查看各面向的 Grade、Weight 或 Does not impact rating；N/A 不可視為通過。</li><li>選擇低等級、變化顯著或業務影響高的面向，閱讀其定義、趨勢與相關發現。</li><li>開啟 Findings 核對資產、證據、觀測時間與改善狀態，再判定是否需要供應商回覆。</li><li>與主管討論時分開呈現「整體安全評等」、「風險面向等級」及「具體發現」，避免混為一個指標。</li></ol><div class="example"><strong>使用情境：解釋評等下降</strong><p>先找出近期等級下降且會影響評等的面向，核對其權重與新發現事項，再排除演算法變動或資料範圍變化。沒有看過證據前，不直接認定已遭入侵。</p></div><h2>容易誤判的地方</h2><ul><li><strong>權重不是風險嚴重度：</strong>計分影響與對業務的實際影響應分開評估。</li><li><strong>A 不等於沒有發現：</strong>須看該面向的具體紀錄、資料涵蓋與時間。</li><li><strong>N/A 不等於安全：</strong>可能是資料不足或資訊型面向。</li><li><strong>不計分仍可能值得處理：</strong>例如標為 Does not impact rating 的面向仍可提供調查線索。</li><li><strong>權重可能更新：</strong>BitSight 官方方法論與目前畫面的比例可能不同，報告應標示採用的日期與版本。</li></ul><p class="note">本頁依 2026-09-17 可見介面與 BitSight 方法論整理。中文為教學用建議譯名；未公開個別公司等級、權重或發現數值。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/231950968-How-are-Bitsight-Security-Ratings-Calculated" target="_blank" rel="noopener noreferrer">BitSight：How are Security Ratings Calculated?</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4411312427031-Risk-Categories-Overview" target="_blank" rel="noopener noreferrer">BitSight：Risk Categories Overview</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="findings"><strong>發現事項</strong><small>Findings · 側欄下一個主題。</small></button><button class="feature-card" data-page="vendor-overview"><strong>供應商總覽</strong><small>Overview · 回到整體風險脈絡。</small></button></div></article>`;
}

const findingFilters = [
  ['Rating Impact','評等影響','找出影響整體評等的發現。'],['Grade','發現等級','依 Good、Fair、Warn、Bad 等級縮小結果。'],
  ['Risk Vector','風險面向','聚焦特定技術或事件類別。'],['Findings Impact','發現事項影響','依平台的影響分類篩選；實際定義須查看條件。'],
  ['Finding Severity','發現嚴重程度','依 Severe、Material 等嚴重度篩選。'],['First & Last Seen','首次／最近觀測時間','查找近期新增或仍被觀測的紀錄。'],
  ['Threat Insights','威脅洞察','找出有威脅情報關聯的發現。'],['Assets','資產','聚焦特定資產。'],
  ['Risk Vector Details','風險面向細節','按面向專屬資訊縮小清單。'],['Critical Assets','關鍵資產','聚焦已加入關鍵資產監控的對象。']
];
const findingColumns = [
  ['Risk Vector','風險面向','此發現所屬的 BitSight 面向。'],['Finding Identifier','發現識別資訊','辨識 IP、網域、主機、應用程式或連接埠等對象。'],
  ['Details','細節','簡述可觀測問題；開啟單筆詳情查看證據。'],['First Seen / Last Seen','首次／最近觀測','觀測日期，官方文件說明發現時間以 UTC 記錄。'],
  ['Impacts Risk Vector Grade','是否影響風險面向等級','是／否；與 Finding Severity 不同。'],['Grade','發現等級','該發現的品質或風險等級，不能當成整體公司評等。'],
  ['Finding Severity','發現嚴重程度','發現事項的嚴重性分類。'],['Asset Importance','資產重要程度','發現所關聯資產的重要性，與供應商 Tier 不同。'],
  ['Remaining Lifetime','剩餘有效期','該發現仍影響判讀的期間；不等於修復期限。'],['Threat Insights','威脅洞察','是否有相關 TTP 或威脅團體情報。'],
  ['Threat Activity Score','威脅活動分數','威脅活動變化的參考訊號，須核對適用範圍。'],['Remediation Instructions','改善指引','平台提供的建議，實作前應由技術負責人核對。']
];
function findingsPage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>用途與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="vectors">← 返回風險面向</button><div class="eyebrow">供應商風險 / Findings</div><h1>發現事項</h1><p class="lead">Findings 集中呈現選定供應商的外部可觀測事件與設定問題。先檢查目前檢視及篩選條件，再按風險面向、嚴重程度、資產和觀測時間縮小範圍，最後打開單筆詳情核對證據及改善建議。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Findings</code>。本次預設檢視為 <code>Severe and Material Findings</code>，並套用嚴重／重大及 <code>Impacts RV Grade</code> 條件。因此目前筆數不是該供應商所有發現事項總數；公開導覽不顯示帳號中的資產或記錄。</div><h2>左側篩選器</h2>${table(findingFilters)}<h2>目前可見表格欄位</h2>${table(findingColumns)}<h2>表格與詳情操作</h2><ol><li><strong>Columns、Views、Create View：</strong>調整欄位或保存常用檢視；Search 可查找目前範圍內的發現。</li><li><strong>Download as CSV、Enter full screen：</strong>匯出或放大清單；匯出內容可能包含敏感資產資訊。</li><li><strong>選取與 Vendor Access：</strong>可對選定發現啟用供應商協作，操作前須確認對象、權限與共享範圍。</li><li><strong>單筆詳情：</strong>點選發現可看 Overview、Asset、Threat Insights；其中 Summary、Details、Remediations、Comments 提供問題、原始屬性、改善建議和協作脈絡。</li></ol><h2>建議調查流程</h2><ol><li>核對頂端供應商及目前 Views／Active Filters；如要全量盤點，先確認是否需調整 Severe and Material 條件。</li><li>按 Finding Severity、Impacts Risk Vector Grade、Asset Importance 和 Last Seen 排定初步優先順序。</li><li>打開單筆詳情，記錄 Finding Identifier、First Seen、Last Seen、證據屬性及相關資產。</li><li>查看 Remediations，但在變更設定前由資產負責人評估可行性與業務影響。</li><li>如需向供應商求證，透過既定協作流程共享最小必要資訊，並記錄回覆與複查日期。</li></ol><div class="example"><strong>使用情境：追查高優先度的新發現</strong><p>保留 Severe／Material 條件並按 Last Seen 排序，再確認資產重要程度及威脅情報。若同一筆發現最近仍被觀測，先確認是否已在內部改善追蹤中，避免重複派工。</p></div><h2>容易誤判的地方</h2><ul><li><strong>目前筆數受篩選影響：</strong>不能當成全部發現事項數量。</li><li><strong>Last Seen 不是修復日期：</strong>它是平台最近觀測時間；是否修復仍需重新驗證。</li><li><strong>Remaining Lifetime 不是處理期限：</strong>是資料影響期限，與內部 SLA 不同。</li><li><strong>Finding Severity、Grade、Rating Impact 各有不同意義：</strong>不要只用其中一項做最終決策。</li><li><strong>改善建議需技術確認：</strong>平台指引可能不完全涵蓋現場架構與相依服務。</li></ul><p class="note">本頁依 2026-09-17 可見的 BitSight 介面及官方文件整理。中文為教學用建議譯名；不公開帳號中的公司、資產、聯絡方式或發現內容。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/20685590315799-Vendor-Risk-Findings" target="_blank" rel="noopener noreferrer">BitSight：Vendor Risk — Findings</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="threat"><strong>威脅洞察</strong><small>Threat Insights · 側欄下一個主題。</small></button><button class="feature-card" data-page="remediation"><strong>改善追蹤</strong><small>Remediation · 追蹤後續處理。</small></button></div></article>`;
}

const threatFilters = [
  ['Threat Group','威脅團體','只看特定團體的情報關聯。'],['Threat Type: APT / Ransomware','威脅類型：APT／勒索軟體','依團體類型篩選，不能據此推定該供應商已受攻擊。'],
  ['Industry','產業','依威脅團體關注的產業篩選。'],['Geography','地理區域','依威脅團體活動或目標地區篩選。'],
  ['Threat Activity Score','威脅活動分數','依 Accelerating、Increasing、Stable、Declining 等動態分類篩選。'],
  ['Trend','趨勢','檢查此團體活動的變化。'],['Peer Comparison','同類比較','與同類團體的活動變化比較。'],
  ['Overall Comparison','整體比較','與所有團體的活動變化比較。'],['TTP','戰術、技術與程序','按 MITRE ATT&CK 類型的行為線索篩選。'],
  ['Vulnerability','弱點','按關聯 CVE 或弱點縮小範圍。']
];
const threatColumns = [
  ['Threat Groups / Type','威脅團體／類型','辨識團體與 APT、Ransomware 等分類。'],
  ['Geographies / Industries','地理區域／產業','團體已知關注的地區與產業；不代表目前選定公司一定是目標。'],
  ['Findings / Bad/Warn Findings','發現事項／不佳等級發現','點選數字前往與團體相關的公司發現，核對真正的資產證據。'],
  ['Threat Activity Score','威脅活動分數','看活動是否加速、增加、穩定或下降；不是此公司被攻擊機率。'],
  ['Trend / Peer Comparison / Overall Comparison','趨勢／同類比較／整體比較','不同參考群體的活動變化；百分比需搭配基準與時間判讀。'],
  ['TTPs','戰術、技術與程序','團體已知行為模式，用於偵測與防禦規劃。'],
  ['Vulnerabilities','關聯弱點','團體相關的 CVE 線索，仍需確認公司資產是否真的曝險。']
];
function threatPage(p){
  const table=(rows)=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>用途與判讀</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="findings">← 返回發現事項</button><div class="eyebrow">供應商風險 / Threat Insights</div><h1>威脅洞察</h1><p class="lead">Threat Insights 將選定供應商的發現事項與威脅團體、活動趨勢、TTP 與弱點情報連在一起，協助先找值得核對的線索。關聯資訊不等於團體已入侵供應商，應回到 Findings 查證資產與觀測內容。</p><div class="callout"><strong>進入路徑</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Threat Insights</code>。頁面頂端 Guidance 說明 Threat Awareness、Target Identification 及 TTPs 的用途；Turn off Guidance 可收起說明。公開導覽不列出帳號中的團體、CVE 或數值。</div><h2>左側篩選器</h2>${table(threatFilters)}<h2>表格欄位與判讀</h2>${table(threatColumns)}<h2>建議調查流程</h2><ol><li>確認頂端公司及目前篩選／Views，先看哪些團體有與該公司相關的 Findings。</li><li>按 Threat Activity Score、Bad/Warn Findings、Threat Type 找出需優先核查的項目。</li><li>檢查 Geographies、Industries、TTPs 與 Vulnerabilities 是否和該公司的業務與技術範圍相關；不要把團體的一般特徵當成公司事件。</li><li>點選 Findings 或 Bad/Warn Findings 數字，回到具體紀錄確認資產、時間、證據與是否影響評等。</li><li>結合內部資產、日誌和威脅獵捕流程決定是否升級處理；在報告中區分已確認發現與情報關聯。</li></ol><div class="example"><strong>使用情境：依新興威脅排定複查順序</strong><p>篩選活動加速的團體，再看是否有 Bad/Warn Findings 和相關 TTP。只有團體名稱或 CVE 清單，而沒有確認資產曝險時，應標為待查線索而非已遭入侵。</p></div><h2>容易誤判的地方</h2><ul><li><strong>團體關聯不是歸因：</strong>表格可顯示相同 TTP 或弱點，但不足以證明攻擊者身分。</li><li><strong>活動趨勢不是供應商事件趨勢：</strong>Threat Activity Score 與 Peer／Overall Comparison 描述不同參考範圍。</li><li><strong>關聯 CVE 不等於可利用：</strong>需查看資產版本、暴露證據與弱點詳情。</li><li><strong>零或空白欄位需核對：</strong>可能是沒有相關資料、篩選限制或尚無適用證據。</li></ul><p class="note">本頁依 2026-09-17 可見的 BitSight 介面整理；中文為教學用建議譯名。威脅情報與發現關聯的判讀仍需人工確認。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/28300936205847-Findings-Finding-Details-Sheet" target="_blank" rel="noopener noreferrer">BitSight：Finding Details Sheet — Threat Insights Tab</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/20685590315799-Vendor-Risk-Findings" target="_blank" rel="noopener noreferrer">BitSight：Vendor Risk — Findings</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="tree"><strong>評等樹</strong><small>Ratings Tree · 側欄下一個主題。</small></button><button class="feature-card" data-page="findings"><strong>發現事項</strong><small>Findings · 核對具體證據。</small></button></div></article>`;
}

function treePage(p){
  const rows=[
    ['Ratings Tree','評等樹','顯示母公司與子公司的層級，不是供應商名單。'],
    ['Node / Branch','節點／分支','節點代表公司；分支呈現下一層子公司，可展開或收合。'],
    ['Search','搜尋','以公司名稱、網域或 IP 尋找樹上的公司；結果會保留其上層公司。'],
    ['Collapse All / Expand content','全部收合／展開內容','縮小樹的範圍，或查看某公司節點詳情。'],
    ['Zoom / Reset scroll location','縮放／重設捲動位置','大型組織樹的瀏覽工具，不改變資料本身。'],
    ['Security Rating / Rating Category','資安評等／評等類別','節點上的分數與 Advanced、Intermediate、Basic 等類別；須看對應公司。'],
    ['Monitored by / Subscription','監控來源／訂閱','說明節點目前的監控或訂閱脈絡；可見內容依權限與方案而異。'],
    ['View Company / More Details','查看公司／更多詳情','前往該公司總覽或展開節點補充資訊。'],
    ['Edit Details','編輯詳情','可能改動公司資料；需先確認權限與變更目的。']
  ];
  return `<article class="doc"><button class="back-link" data-page="threat">← 返回威脅洞察</button><div class="eyebrow">供應商風險 / Ratings Tree</div><h1>評等樹</h1><p class="lead">Ratings Tree 用圖形呈現所選公司的母子公司層級。適合釐清哪個法律實體或子公司出現在監控範圍，以及要進入哪個公司的風險頁面；樹上的關係本身不等於共同使用同一評等。</p><div class="callout"><strong>進入路徑</strong><br>選定供應商後，開啟 <code>Vendor Risk → Ratings Tree</code>。頂端公司選擇器決定目前查看的組織。公開導覽不揭露帳號中的公司名稱、IP、分數或訂閱數。</div><h2>畫面專有名詞與控制項</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><h2>建議操作流程</h2><ol><li>確認頁首是正確的母公司或供應商，並檢查頂端公司選擇器。</li><li>用搜尋框輸入公司主要名稱、網域或 IP；找不到時，也要考慮該實體可能沒有可觀測網路足跡。</li><li>展開節點與分支，依層級確認母子公司關係；大型樹可使用縮放、全部收合與重設位置。</li><li>查看節點上的評等、評等類別、訂閱狀態與 More Details，再透過 View Company 進入對應公司的 Overview、Findings 或 Infrastructure。</li><li>在報告中註明評等是屬於哪個公司節點；若要編輯詳情，先確認授權與資料來源。</li></ol><div class="example"><strong>使用情境：找出評等下降的子公司</strong><p>從母公司樹展開相關分支，確認下降分數所屬節點，進入該子公司的頁面查核發現事項和資產，再決定是否需要聯絡母公司或子公司窗口。</p></div><h2>容易誤判的地方</h2><ul><li><strong>子公司不等於母公司同分：</strong>官方說明評等演算法對樹上每家公司分別運算；層級關係用於資產向上歸集。</li><li><strong>沒有出現在樹上不等於沒有法律關係：</strong>缺少外部可觀測網路足跡的實體可能不顯示。</li><li><strong>數字要看標籤：</strong>評等、可用評等範圍與 IP／訂閱數不能混為同一指標。</li><li><strong>搜尋與收合只改變顯示：</strong>不會刪除公司或變更監控範圍。</li></ul><p class="note">依 2026-09-17 可見介面及 BitSight 官方文件整理；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/1500007371201-Ratings-Tree" target="_blank" rel="noopener noreferrer">BitSight：Ratings Tree</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/360010815274-How-are-Bitsight-Security-Ratings-Calculated-Within-Parent-Subsidiary-Relationships" target="_blank" rel="noopener noreferrer">BitSight：母子公司評等計算</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4408021304215-Subsidiary-Attribution" target="_blank" rel="noopener noreferrer">BitSight：Subsidiary Attribution</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="remediation"><strong>改善追蹤</strong><small>Remediation · 側欄下一個主題。</small></button><button class="feature-card" data-page="infrastructure"><strong>基礎設施</strong><small>Infrastructure · 核對節點資產。</small></button></div></article>`;
}

function remediationPage(p){
  const terms=[['Remediation Overview','改善總覽','查看此供應商的改善優先線索。'],['Download Remediation Data','下載改善資料','匯出 CSV；檔案可能含供應商及資產資訊。'],['Asset Risk Matrix','資產風險矩陣','交叉檢視資產重要性與相關發現嚴重程度。'],['Asset Importance: Critical / High / Medium / Low','資產重要程度：極關鍵／高／中／低','矩陣縱軸；不等於供應商 Tier。'],['Finding Severity: Minor / Moderate / Material / Severe','發現嚴重程度：輕微／中度／重大／嚴重','矩陣橫軸；不等於整體公司評等。'],['Findings','發現事項','矩陣每格筆數可點擊，進入已套用條件的 Findings 清單。'],['Remediation Strategy','改善策略','顯示可能對評等有較大影響的風險面向及待查發現。'],['60-Day / View Findings','60 天／查看發現','策略面板以指定期間評估，連結可查具體記錄。'],['Vendor Access','供應商存取','與供應商協作的入口；邀請或共享前確認授權與範圍。'],['Reports and Assessments / Actions','報表與評估／操作','其他報表及供應商操作入口，選項依權限而異。']];
  return `<article class="doc"><button class="back-link" data-page="tree">← 返回評等樹</button><div class="eyebrow">供應商風險 / Remediation</div><h1>改善追蹤</h1><p class="lead">Remediation 頁面用資產風險矩陣及改善策略找出優先處理的發現事項。它是排序與導覽工具；實際修復、供應商承諾及完成驗證仍要回到具體發現與內部追蹤紀錄。</p><div class="callout"><strong>進入路徑</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Remediation</code>。頁首提供 Vendor Access、Reports and Assessments、Actions；公開導覽不顯示帳號內的矩陣數值。</div><h2>畫面專有名詞與按鈕</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${terms.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><h2>建議操作流程</h2><ol><li>確認頂端供應商；在矩陣上先找重要資產與嚴重發現交會的格子。</li><li>點選格子中的 Findings 數字，核對清單自動帶入的 Asset Importance、Finding Severity、Risk Vector、Last Seen 等條件。</li><li>逐筆查看資產、觀測時間、證據與改善指引；不要只依格子數量下結論。</li><li>檢查 Remediation Strategy 的風險面向與 60 天假設，按 View Findings 前往相關發現。</li><li>與資產負責人或供應商確認改善方法、期限及複查方式；必要時才使用 Vendor Access。</li></ol><div class="example"><strong>使用情境：有限資源下排定改善順序</strong><p>先查關鍵資產上的 Severe／Material 發現，再比對策略面板建議及具體證據。若某風險面向未出現在策略清單，也不代表它永遠不影響評等；可能在更長期間才顯現。</p></div><h2>容易誤判的地方</h2><ul><li><strong>矩陣格子是篩選後的筆數：</strong>點開 Findings 時應確認所有帶入條件。</li><li><strong>策略面板有時間假設：</strong>畫面以 60 天、沒有新增發現的情境評估潛在評等影響，不是保證改善後分數會增加。</li><li><strong>發現消失不等於已驗收：</strong>仍需查核供應商證據、再掃描結果及內部簽核。</li><li><strong>CSV 可能敏感：</strong>下載後按組織規範保存與分享。</li></ul><p class="note">依 2026-09-17 可見介面與 BitSight 官方文件整理；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/1500002540481-Vendor-Risk-Remediation" target="_blank" rel="noopener noreferrer">BitSight：Vendor Risk — Remediation</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/360016072394-GET-Asset-Risk-Matrix" target="_blank" rel="noopener noreferrer">BitSight：Asset Risk Matrix 資料說明</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/235861067-Remediation-Strategy-Panel" target="_blank" rel="noopener noreferrer">BitSight：Remediation Strategy Panel</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="infrastructure"><strong>基礎設施</strong><small>Infrastructure · 側欄下一個主題。</small></button><button class="feature-card" data-page="findings"><strong>發現事項</strong><small>Findings · 核對改善證據。</small></button></div></article>`;
}

function infrastructurePage(p){
  const filters=[['Asset Type','資產類型','例如 IP、網域或其他可見資產。'],['Number of Findings','發現事項數量','依資產關聯的發現筆數篩選。'],['Tag / Status','標籤／狀態','按分類或資產狀態縮小範圍。'],['Geographic Area','地理區域','按資產推定位置篩選。'],['Is Wildcard','是否為萬用字元','識別萬用字元網域；需核對具體主機。'],['Asset Importance','資產重要程度','協助排序，不等於供應商 Tier。'],['Cloud / Products / Vulnerabilities','雲端／產品／弱點','找出技術或弱點相關資產。'],['Monitored','是否受監控','區分被選入監控的資產。']];
  const cols=[['Asset / Asset Type','資產／類型','辨認對象與 IP、網域等類型。'],['Tags / Importance / Monitored','標籤／重要程度／監控狀態','整理處理優先順序與監控範圍。'],['Country','國家','IP 地理位置或歸屬線索，不一定是實際業務所在地。'],['Is Wildcard / Wildcard Root','萬用字元／根網域','判讀是否代表一組子網域。'],['Identified Products / Product Categories','已辨識產品／產品類別','外部可觀測技術線索，需核對版本與實際部署。'],['Cloud Platform / Cloud Services / Cloud Region','雲端平台／服務／區域','雲端資產的分類資訊。'],['Material/Severe Findings (Impacts RV Grade)','重大／嚴重且影響風險面向等級的發現','點擊數字可前往已篩選的 Findings。'],['Findings (Impacts RV Grade)','影響風險面向等級的發現','與前一欄相比，嚴重程度範圍較廣。']];
  const table=rows=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="remediation">← 返回改善追蹤</button><div class="eyebrow">供應商風險 / Infrastructure</div><h1>基礎設施</h1><p class="lead">Infrastructure 的 Assets 清單列出平台歸屬於所選供應商的外部資產。可用來從資產出發查找技術、雲端資訊與相關發現，但可見資產不是該公司全部內部資產清冊。</p><div class="callout"><strong>進入路徑</strong><br>先選定供應商，再開啟 <code>Vendor Risk → Infrastructure → Assets</code>。公開導覽不列出帳號中的網域、IP、產品或數值。</div><h2>左側篩選器</h2>${table(filters)}<h2>目前可見欄位</h2>${table(cols)}<h2>清單工具</h2><ul><li><strong>Columns、Views、Create View：</strong>調整欄位與常用檢視；篩選和檢視會影響目前筆數。</li><li><strong>Search、Download as CSV、Enter full screen：</strong>查找、匯出或放大表格；匯出前確認資料處理規範。</li><li><strong>View Findings、Monitor Assets：</strong>勾選資產後才能使用的批次工具；Monitor Assets 可能涉及監控配額與範圍變更。</li><li><strong>頁尾分頁與列數：</strong>目前顯示列數不一定是所有資產總數。</li></ul><h2>建議操作流程</h2><ol><li>核對供應商、Assets 頁籤、目前 Views 及篩選條件。</li><li>先依 Asset Importance、Number of Findings 和 Monitored 縮小範圍，再按 Asset Type、Cloud 或 Products 調查。</li><li>查看單筆資產的產品、萬用字元與地理欄位；需要精確結論時，向資產持有人確認歸屬與部署。</li><li>點選影響風險面向等級的 Findings 數字，確認帶入條件並查看具體證據。</li><li>如需監控更多資產，先確認配額、選取數量及授權，再執行變更。</li></ol><div class="example"><strong>使用情境：追查關鍵資產的發現</strong><p>篩選 Critical 及有重大／嚴重發現的資產，點入 Findings 查核觀測時間、風險面向和改善指引；將網域或 IP 與內部 CMDB 對照後再指定負責人。</p></div><h2>容易誤判的地方</h2><ul><li><strong>外部可見不等於完整資產清冊：</strong>有些資產可能尚未被辨識或未顯示。</li><li><strong>沒有可見資產也可能有發現：</strong>歷史或低重要程度資產的發現仍可能存在。</li><li><strong>產品辨識不是弱點證據：</strong>還要查版本、曝露方式及具體發現。</li><li><strong>Monitored 不是資產存在與否：</strong>它代表平台監控狀態，不能當成資產所有權證明。</li></ul><p class="note">依 2026-09-17 可見介面及 BitSight 官方文件整理；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4410655245079-Continuous-Monitoring-Application" target="_blank" rel="noopener noreferrer">BitSight：Continuous Monitoring Application</a></li><li><a href="https://help.bitsighttech.com/hc/en-us/articles/28475226774807-What-is-a-Finding" target="_blank" rel="noopener noreferrer">BitSight：What is a Finding?</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="breach"><strong>外洩事件情報</strong><small>Breach Intelligence · 側欄下一個主題。</small></button><button class="feature-card" data-page="findings"><strong>發現事項</strong><small>Findings · 核對資產證據。</small></button></div></article>`;
}

function breachPage(p){
  const filters=[['Severity','嚴重程度','依事件影響程度縮小範圍；仍須查原始內容。'],['Event Type','事件類型','例如勒索軟體、網路犯罪或其他揭露。'],['Rating Impact','評等影響','區分是否影響 BitSight 評等；不等於業務影響。'],['Source Type','來源類型','區分公開揭露、威脅情報等來源。'],['Countries / Industry / Company','國家／產業／公司','縮小受影響供應商和產業範圍。'],['Date','日期','按事件時間篩選，注意發布日與事件發生日可能不同。'],['Actor / APT','行為者／進階持續性威脅','調查情報歸因，不能單憑此欄確認攻擊者。'],['CVE / Affected Products','弱點編號／受影響產品','核對事件與技術範圍，需進一步驗證資產。']];
  const terms=[['All Events','所有事件','目前投資組合範圍內的事件摘要。'],['Public Disclosure','公開揭露','經人工審閱的公開事件資料；是否影響評等需看個別標示。'],['Threat Intelligence / Potential','威脅情報／潛在事件','來自深網、暗網、公開網路或新聞等線索；未必已驗證。'],['Impacted Vendors','受影響供應商','事件關聯的受監控公司，可能不只一家。'],['Verified / Not Verified','已驗證／未驗證','平台對事件確認狀態的標示，不能替代內部調查。'],['Impacts Rating / Does Not Impact Rating','影響／不影響評等','只描述評等影響，非事件是否重要。'],['View Details / Download CSV','查看詳情／下載 CSV','核查來源、脈絡與後續處置；匯出資料應受控。']];
  const table=rows=>`<div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="doc"><button class="back-link" data-page="infrastructure">← 返回基礎設施</button><div class="eyebrow">跨模組功能 / Breach Intelligence</div><h1>資料外洩情報</h1><p class="lead">Breach Intelligence 彙整目前投資組合相關的公開事件與威脅情報，協助快速發現需要向供應商求證的情況。事件卡片是調查起點，不應把 Potential 或未驗證線索直接寫成已確認外洩。</p><div class="callout"><strong>進入路徑</strong><br>左側主選單 <code>Breach Intelligence</code>。頁面事件數受目前投資組合範圍與篩選條件影響；公開導覽不複製帳號中的事件標題、公司名稱或敘述。</div><h2>左側篩選器</h2>${table(filters)}<h2>摘要與事件卡片</h2>${table(terms)}<h2>建議調查流程</h2><ol><li>確認目前投資組合範圍與 All Events、Public Disclosure、Threat Intelligence 分類。</li><li>按公司、日期、Severity、Source Type 與 Rating Impact 篩選；先處理關鍵供應商與高影響事件。</li><li>打開 View Details，記錄原始來源、事件日期、受影響公司、驗證狀態及事件類型。</li><li>若是 Potential 或 Not Verified，先核對公開來源並向供應商求證影響範圍；不要未查證就升級為已發生的資料外洩。</li><li>依內部事件通報流程決定是否啟動合約、法遵或業務連續性評估，並記錄後續更新。</li></ol><div class="example"><strong>使用情境：收到供應商疑似外洩情報</strong><p>先區分是 Public Disclosure 還是 Threat Intelligence，確認 Verified、事件時間與受影響公司。若只是地下論壇提及，應標為待確認並通知供應商窗口，不直接推定客戶資料已外洩。</p></div><h2>容易誤判的地方</h2><ul><li><strong>Potential 不是已證實：</strong>未驗證情報需進一步查證。</li><li><strong>Does Not Impact Rating 不是沒有風險：</strong>仍可能涉及重大營運或資料保護影響。</li><li><strong>事件數不是公司數：</strong>單一事件可能關聯多家公司；同一公司也可能有多筆事件。</li><li><strong>日期與來源須核對：</strong>新聞發布日、事件發生日及平台收錄日可能不同。</li></ul><p class="note">依 2026-09-17 可見介面與 BitSight 官方文件整理；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/38531864658839-About-Breach-Intelligence" target="_blank" rel="noopener noreferrer">BitSight：About Breach Intelligence</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="vulnerability"><strong>弱點偵測</strong><small>Vulnerability Detection · 側欄下一個主題。</small></button><button class="feature-card" data-page="portfolio-alerts"><strong>投資組合警示</strong><small>Portfolio Alerts · 持續追蹤事件。</small></button></div></article>`;
}

function vulnerabilityPage(p){
  const rows=[['Vulnerabilities detected in Portfolio','投資組合中偵測到的弱點','摘要數值受目前公司範圍影響。'],['Exposure 14 Day Trend / Apply as Filter','14 天曝險趨勢／套用為篩選','找出曝險公司數增加、持平或下降的弱點。'],['Recently Supported Vulnerabilities','近期新增支援的弱點','平台最近納入偵測的弱點，非最近才公開的同義詞。'],['Vulnerability / Category','弱點／類別','CVE 或弱點群組名稱與分類。'],['Severity Details','嚴重程度細節','通常包含 CVSS；描述弱點本身嚴重性。'],['DVE Score / CTI Attributes','動態弱點利用分數／威脅情報屬性','用於利用風險排序，與 CVSS 不同。'],['EPSS','利用預測評分系統','估計被利用的可能性，不代表本公司已受攻擊。'],['Evidence Certainty','證據確定程度','判讀平台對曝險或緩解證據的信心。'],['Exposure Detected / Companies Exposed','偵測到曝險／曝險公司','近 60 天有曝險證據的公司數。'],['Mitigation Detected / Companies Mitigated','偵測到緩解／已緩解公司','有緩解證據或近 60 天無曝險證據的公司數，需核對細節。'],['Exposure Trend / First Seen','曝險趨勢／首次觀測','比較曝險公司變化及初次觀測時間。'],['Tier / Folder','層級／資料夾','按內部關鍵性或管理範圍優先處理。']];
  return `<article class="doc"><button class="back-link" data-page="breach">← 返回資料外洩情報</button><div class="eyebrow">跨模組功能 / Vulnerability Detection</div><h1>弱點偵測</h1><p class="lead">Vulnerability Detection 將弱點情報與目前投資組合的供應商曝險線索連結。先確認檢視與篩選，再綜合嚴重程度、DVE、EPSS、證據確定程度及曝險公司數決定調查順序。</p><div class="callout"><strong>進入路徑與目前畫面</strong><br>左側主選單 <code>Vulnerability Detection</code>。本次可見畫面預設勾選 <code>Detected in Portfolio</code>，但表格目前顯示 0 筆；頂部摘要與表格計數可能使用不同條件，不能把空表推論為沒有弱點。公開導覽不列出帳號內數值或公司。</div><h2>摘要、篩選器與欄位翻譯</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><h2>清單操作</h2><ul><li><strong>Active Filters、Clear All：</strong>檢查與清除目前條件，尤其是 Detected in Portfolio。</li><li><strong>Columns、Views、Create View：</strong>調整欄位並保存常用篩選組合。</li><li><strong>Search、Download as CSV、Enter full screen：</strong>搜尋、匯出或放大表格；零筆時下載可能停用。</li><li><strong>View full breakdown：</strong>展開近期新增支援弱點的細分資訊。</li><li><strong>點選弱點：</strong>進入詳情看敘述、改善建議、曝險公司與證據。</li></ul><h2>建議調查流程</h2><ol><li>先確認頂端投資組合範圍、Active Filters 及列表筆數；若為 0，查篩選而非直接下結論。</li><li>依 Exposure Trend、Companies Exposed、Tier、DVE、EPSS 和 Severity 找優先線索。</li><li>打開弱點詳情，確認 CVE、受影響產品、證據確定程度與各公司的 First Seen／Last Seen。</li><li>對高關鍵性供應商核對實際產品版本及修補或緩解證據，必要時向供應商求證。</li><li>記錄追蹤期限與複查結果；區分平台偵測到曝險與已確認可利用。</li></ol><div class="example"><strong>使用情境：新興弱點巡檢</strong><p>從曝險增加或最近新增支援的弱點開始，篩選高 Tier 供應商與較高 DVE／EPSS，再查看 Evidence Certainty。只有產品關聯而缺少明確曝險證據時，標記為待確認。</p></div><h2>容易誤判的地方</h2><ul><li><strong>DVE、EPSS、CVSS 不同：</strong>分別偏向動態利用優先度、被利用機率與弱點嚴重程度。</li><li><strong>偵測到緩解不等於完整驗收：</strong>需查核證據與供應商變更。</li><li><strong>零筆不等於零弱點：</strong>檢視、授權或篩選可能影響表格。</li></ul><p class="note">依 2026-09-17 可見介面及 BitSight 官方文件整理；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/10249329837719-CM-App-Vulnerability-Detection" target="_blank" rel="noopener noreferrer">BitSight：CM App — Vulnerability Detection</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="fourth-overview"><strong>第四方總覽</strong><small>4th Party Risk Overview · 側欄下一個主題。</small></button><button class="feature-card" data-page="portfolio-alerts"><strong>投資組合警示</strong><small>Portfolio Alerts · 持續追蹤弱點變化。</small></button></div></article>`;
}

function fourthOverviewPage(p){
  const cards=[['Ratings and Concentrations','評等與集中度','以樹狀圖同時看第四方的評等區間與第三方依賴集中情形。'],['Display top 30 with 50% dependency','顯示依賴度達 50% 的前 30 項','調整圖表顯示範圍；開關不改變實際供應鏈。'],['Recent Public Disclosures','近期公開揭露','檢查第四方相關公開事件，可選 7、30 或 90 天。'],['Concentrations by Location - Service Providers','服務提供者地理集中度','按地理位置觀察集中風險；位置不等於資料儲存地。'],['Service Providers','服務提供者','查看與第三方共享的第四方；可進入完整清單。'],['Product Concentration','產品集中度','看多家第三方依賴相同產品的情形。'],['4th Party Median Rating','第四方評等中位數','所選資料夾或 Tier 中第四方評等的中位數，不代表每家公司的評等。'],['Edit Dashboard','編輯儀表板','新增、移除或調整資訊卡；不同使用者畫面可能不同。']];
  return `<article class="doc"><button class="back-link" data-page="vulnerability">← 返回弱點偵測</button><div class="eyebrow">第四方風險 / 4th Party Overview</div><h1>第四方總覽</h1><p class="lead">第四方是供應商所依賴的服務提供者或產品供應來源。本頁從所選資料夾或 Tier 觀察共同依賴、集中度及第四方風險訊號，協助找出可能影響多家第三方的單點風險。</p><div class="callout"><strong>進入路徑</strong><br>先用頂端範圍選擇器指定資料夾或 Tier，再開啟 <code>4th Party Risk → Overview</code>。公開導覽不顯示帳號中的公司、產品或評等數值。</div><h2>資訊卡與介面翻譯</h2><div class="doc-table"><table><thead><tr><th>英文</th><th>建議中文</th><th>功能與判讀</th></tr></thead><tbody>${cards.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><h2>建議操作流程</h2><ol><li>確認目前資料夾或 Tier；若要比較不同範圍，請固定相同分類條件。</li><li>先看 Ratings and Concentrations，找高依賴度且評等較低的第四方。</li><li>查看 Service Providers 與 Product Concentration，辨識多家第三方共同依賴的來源。</li><li>檢查 Recent Public Disclosures 的期間及事件，必要時進入第四方或第三方公司詳情核對。</li><li>將共同依賴與業務重要性結合，建立需向第三方確認的服務、替代方案及復原能力清單。</li></ol><div class="example"><strong>使用情境：共同雲端服務風險</strong><p>若多家關鍵供應商依賴同一第四方，先核對服務與產品關聯，再看評等、公開揭露與地理集中度。報告應寫明這是觀測到的依賴線索，不代表各供應商都受同一事件影響。</p></div><h2>容易誤判的地方</h2><ul><li><strong>高依賴度不等於必然中斷：</strong>還須確認實際使用方式、備援與合約責任。</li><li><strong>中位數遮蔽個別低分：</strong>需進入服務提供者清單逐家查看。</li><li><strong>圖表受範圍和自訂卡片影響：</strong>不同資料夾、Tier 或帳號可能看到不同結果。</li><li><strong>公開揭露是調查起點：</strong>需核對事件與自己的第三方關係。</li></ul><p class="note">依 2026-09-17 可見介面及 BitSight 官方文件整理；中文為教學用建議譯名。</p><h2>參考資料</h2><ul><li><a href="https://help.bitsighttech.com/hc/en-us/articles/4406191335063-4th-Party-Risk-Overview" target="_blank" rel="noopener noreferrer">BitSight：4th Party Risk — Overview</a></li></ul><h2>接著閱讀</h2><div class="feature-grid"><button class="feature-card" data-page="providers"><strong>服務提供者</strong><small>Service Providers · 側欄下一個主題。</small></button><button class="feature-card" data-page="products"><strong>產品</strong><small>Products · 查看共同技術依賴。</small></button></div></article>`;
}

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
  if(p.id==='fi-assessments')return assessmentPage(p);
  if(p.id==='critical-assets')return criticalAssetsPage(p);
  if(p.id==='compare')return comparePage(p);
  if(p.id==='discovery')return discoveryPage(p);
  if(p.id==='expired')return expiredPage(p);
  if(p.id==='vendor-overview')return vendorOverviewPage(p);
  if(p.id==='framework')return frameworkPage(p);
  if(p.id==='instant')return instantPage(p);
  if(p.id==='assessments')return vendorAssessmentPage(p);
  if(p.id==='vectors')return vectorPage(p);
  if(p.id==='findings')return findingsPage(p);
  if(p.id==='threat')return threatPage(p);
  if(p.id==='tree')return treePage(p);
  if(p.id==='remediation')return remediationPage(p);
  if(p.id==='infrastructure')return infrastructurePage(p);
  if(p.id==='breach')return breachPage(p);
  if(p.id==='vulnerability')return vulnerabilityPage(p);
  if(p.id==='fourth-overview')return fourthOverviewPage(p);
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
