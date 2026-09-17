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
