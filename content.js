/* 個人資料編輯區：文字使用 {zh: '中文', en: 'English'}。
   照片放 assets/portrait.jpg；Word 履歷會直接使用此檔案的最新內容。
   source 留空時不顯示原始碼連結；請填你的專案網址，而非第三方套件。
*/
window.PROFILE = {
  portrait: './assets/portrait.jpg',
  name: {zh:'林沁融', en:'Chin-Jung Lin'},
  email: '',
  phone: '',
  location: {zh:'', en:''},
  website: 'https://norwellin.github.io/',
  linkedin: 'https://www.linkedin.com/in/chin-jung-lin-987876303/',
  github: 'https://github.com/norwellin',
  job104: '',
  introduction: {zh: '我對軟體技術保持好奇，樂於接觸不同的開發方向，並依據專案需求學習與應用新的技術。我習慣將複雜問題拆解為具體功能，透過研究、實作與測試逐步完善系統。從獨立研究到國際團隊合作，我重視問題分析與實際驗證，也希望持續拓展技術能力，將所學轉化為實際成果。', en: 'I stay curious about software technology, enjoy exploring different areas of development, and learn and apply new technologies according to project needs. I break complex problems down into concrete features and refine systems through research, implementation, and testing. From independent research to international teamwork, I value problem analysis and practical validation, and aim to keep expanding my technical skills and turning what I learn into tangible results.'}
};
window.COPY = {
  zh: {
    role:'軟體開發 · GUI 自動化測試 · AI 應用 · 資料工程',
    intro:'具備台灣與德國雙碩士學習背景，透過獨立研究與國際團隊專案，累積軟體系統設計、開發及實驗驗證經驗。',
    explore:'探索我的專案',download:'下載履歷',cvPending:'下載履歷（檔案待補）',photoPending:'個人照片待補',
    aboutTitle:'關於我',
    aboutBody:'畢業於大同大學資訊工程學系與德國 HFT Stuttgart Software Technology 雙碩士學位。研究與實作涵蓋瀏覽器測試自動化、人工智慧應用、資料工程及軟體系統開發，具備獨立開發與國際團隊合作經驗。',
    personalNote:'我的個人特質',projectsTitle:'研究與實作',projectsIntro:'從研究問題到實際系統，記錄每個專案的方法、成果與我的參與。',
    skillsTitle:'技術與工具',educationTitle:'學習歷程',connect:'與我聯繫',notAdded:'尚未提供',backTop:'回到頂端 ↑',
    details:'查看專案細節',background:'背景與目標',result:'成果與驗證',contribution:'我的參與',source:'查看原始碼 ↗',
    nav:['首頁','關於','專案','技能','學歷','聯繫'],
    groups:['碩士論文','跨文化合作專案','應用與課程專案','學士畢業專題'],
    teamPending:'參與小組專案；個人負責的模組與工作範圍待補充。'
  },
  en: {
    role:'Software Development · GUI Test Automation · Applied AI · Data Engineering',
    intro:'With two master’s degrees from Taiwan and Germany, I have gained experience in software systems design, development, and experimental validation through independent research and international team projects.',
    explore:'Explore my work',download:'Download resume',cvPending:'Resume download coming soon',photoPending:'Profile photo coming soon',
    aboutTitle:'About me',
    aboutBody:'I hold two master’s degrees: Computer Science and Engineering from Tatung University and Software Technology from HFT Stuttgart in Germany. My research and practical work span browser test automation, AI applications, data engineering, and software systems development, with experience in independent development and international teamwork.',
    personalNote:'My personal qualities',projectsTitle:'Research into practice',projectsIntro:'A collection of research and engineering projects, their methods, outcomes, and my contributions.',
    skillsTitle:'Technical toolkit',educationTitle:'Education',connect:'Let’s connect.',notAdded:'Not added yet',backTop:'Back to top ↑',
    details:'View project details',background:'Context & objective',result:'Results & evaluation',contribution:'My contribution',source:'View source code ↗',
    nav:['Home','About','Projects','Skills','Education','Connect'],
    groups:['Master’s thesis','International collaboration','Applied & coursework projects','Bachelor’s capstone'],
    teamPending:'Contributed to this team project; individual responsibilities are to be added.'
  }
};
window.PROJECTS = [
  {id:'thesis',group:0,tag:'MASTER’S THESIS · 2026',image:'thesis.jpg',
   title:{zh:'網頁 GUI 自動化測試錄製系統',en:'Automated GUI Test Recorder'},
   summary:{zh:'以 MobiWebX 為案例，將複雜的瀏覽器操作轉換為可編輯、可回放的 Playwright 測試腳本。',en:'Turning complex browser interactions into editable, replayable Playwright tests, using MobiWebX as a case study.'},
   tools:['JavaScript','Chrome Extension','Playwright','GUI Test Automation'],
   highlightTitle:{zh:'效益：',en:'Benefits'},
   highlight:{zh:'改善現有開源測試錄製工具在 Drag & Drop、跨頁面與 iframe 操作錄製上的限制，並透過動態元素定位器過濾與視覺化腳本編輯功能，降低複雜 GUI 測試的腳本撰寫及維護成本。',en:'Addresses limitations of existing open-source test recorders in recording drag-and-drop, cross-page, and iframe interactions. Dynamic element locator filtering and visual script editing reduce the effort required to write and maintain scripts for complex GUI tests.'},
   background:{zh:'SaaS IDE 包含大量動態元素與複雜互動，使人工測試及腳本維護成本增加；現有測試錄製工具在拖拉、跨頁面與 iframe、動態 ID 處理及視覺化編輯方面仍有不足。',en:'SaaS IDEs contain many dynamic elements and complex interactions, increasing the cost of manual testing and script maintenance. Existing test recorders still have limitations in drag-and-drop, cross-page and iframe interactions, dynamic ID handling, and visual editing.'},
   result:{zh:'完成一套網頁自動化測試錄製系統，並以 MobiWebX 驗證。支援 1,178／1,199 個 UI 元件，錄製支援率達 98.2%；14 個端對端 GUI 測試情境全數成功回放。',en:'Completed an automated web test recording system and validated it using MobiWebX. The system supports 1,178 of 1,199 UI components, achieving a recording support rate of 98.2%, with successful replay of all 14 end-to-end GUI test scenarios.'},
   contribution:{zh:'獨立負責整體系統的設計與實作。',en:'Independently designed and implemented the entire system.'},source:'https://github.com/norwellin/TestingRecorder'},
  {id:'dibuco',group:1,tag:'HFT STUTTGART · TEAM PROJECT',image:'dibuco.jpg',
   title:{zh:'Dibuco｜跨平台社群資料整合與 Discord ETL 實作',en:'Dibuco | Cross-platform Social Data Integration & Discord ETL'},
   summary:{zh:'參與跨國團隊建置社群資料整合平台，整合 Discord、Telegram、Reddit 與 GitHub 資料，並負責 Discord 資料管線的擷取與轉換流程。',en:'Collaborated with an international team to build a social data integration platform spanning Discord, Telegram, Reddit, and GitHub, taking responsibility for extraction and transformation in the Discord data pipeline.'},
   tools:['Python','Discord API','ETL','JSON','Docker'],
   highlightTitle:{zh:'實作成果：',en:'Implementation results'},
   highlight:{zh:'完成 Discord 資料擷取與轉換流程，透過頻道鏡像及 Bot 事件監聽取得社群公告訊息，並將原始資料轉換為結構化 JSON，供後續資料整合與分析使用。',en:'Completed the Discord data extraction and transformation pipeline, capturing community announcements through channel mirroring and bot event listeners, and converting raw data into structured JSON for downstream data integration and analysis.'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[{zh:'Dibuco 旨在建立跨平台社群資料整合系統，整合分散於 Discord、Telegram、Reddit 與 GitHub 的社群資訊，透過自動化 ETL 流程擷取、轉換及儲存資料，提供 BigData4Biz 平台進行跨平台分析。',en:'Dibuco aims to integrate community information distributed across Discord, Telegram, Reddit, and GitHub. Automated ETL pipelines extract, transform, and store data for cross-platform analysis in BigData4Biz.'}]},
     {title:{zh:'團隊實作內容',en:'Team implementation'},paragraphs:[{zh:'跨國團隊依據不同社群平台進行分工，開發對應的 ETL 資料管線。',en:'The international team divided responsibilities by social platform and developed the corresponding ETL pipelines.'}],items:[
       {zh:'資料擷取（Extract）：透過各社群平台的 API 或事件監聽機制，取得社群訊息及相關 metadata。',en:'Extract: Retrieve community messages and related metadata through platform APIs or event listeners.'},
       {zh:'資料轉換（Transform）：清理與處理原始社群資料，將資料轉換為結構化格式。',en:'Transform: Clean and process raw community data into structured formats.'},
       {zh:'資料儲存（Load）：將處理後的資料輸出為 JSON 與文字檔案，提供 BigData4Biz 平台進行後續分析。',en:'Load: Export processed data as JSON and text files for subsequent analysis in BigData4Biz.'},
       {zh:'系統部署：使用 Docker 容器化技術，搭配 GitLab CI/CD 建立自動化建置與部署流程。',en:'Deployment: Containerize services with Docker and automate builds and deployment through GitLab CI/CD.'}
     ]},
     {title:{zh:'我的負責項目｜Discord ETL',en:'My responsibilities | Discord ETL'},paragraphs:[{zh:'負責 Discord 資料管線的擷取（Extract）與轉換（Transform）流程。',en:'Responsible for the extraction and transformation stages of the Discord data pipeline.'}],items:[
       {zh:'建立專屬 Discord Server，作為社群資料擷取環境。',en:'Created a dedicated Discord server as the community data collection environment.'},
       {zh:'開發並設定 Discord Bot，配置必要權限與事件監聽機制。',en:'Developed and configured a Discord bot with the required permissions and event listeners.'},
       {zh:'透過頻道鏡像（Channel Mirroring）同步目標社群的公告訊息。',en:'Used channel mirroring to synchronize announcement messages from target communities.'},
       {zh:'利用 Python 處理 Bot 擷取的訊息內容及相關 metadata。',en:'Processed message content and related metadata captured by the bot using Python.'},
       {zh:'將原始資料轉換為結構化 JSON 格式，供後續儲存與分析使用。',en:'Transformed raw data into structured JSON for downstream storage and analysis.'}
     ]},
     {title:{zh:'技術挑戰與解決方案',en:'Technical challenges & solutions'},paragraphs:[
       {zh:'由於 Discord Bot 需要目標伺服器的管理權限，無法直接加入所有目標社群擷取資料。',en:'Because adding a Discord bot requires administrative permissions on the target server, the bot could not join every target community directly to collect data.'},
       {zh:'為解決此限制，我建立專屬 Discord Server，透過頻道鏡像功能同步目標公告頻道，並使用自行建立的 Bot 監聽訊息事件。',en:'To address this limitation, I created a dedicated Discord server, mirrored the target announcement channels, and used my own bot to listen for message events.'},
       {zh:'此方式能在不直接管理目標伺服器的情況下取得公告內容，但無法完整同步原始頻道的互動與表情反應。',en:'This approach retrieves announcements without directly managing the target server, but cannot fully synchronize interactions and emoji reactions from the original channels.'}
     ]}
   ],source:''},
  {id:'weather',group:1,tag:'HFT STUTTGART · DATA WAREHOUSING',image:'weather.jpg',
   title:{zh:'即時氣象資料倉儲系統',en:'Live Weather Data Warehouse System'},
   summary:{zh:'從 OpenWeather API 定期擷取全球 191 個國家與地區首都的氣象資料，建立自動化 ETL 管線與歷史資料倉儲。',en:'Periodically collecting weather data from the OpenWeather API for the capitals of 191 countries and territories worldwide, with an automated ETL pipeline and historical data warehouse.'},
   tools:['Python','Tkinter','SQL','MySQL'],
   highlightTitle:{zh:'效益：',en:'Benefits'},
   highlight:{zh:'將分散且持續更新的氣象觀測資料集中管理，讓使用者能快速查詢歷史氣象紀錄、比較不同城市的氣象變化，減少手動蒐集與整理資料的需求。',en:'Centralizes distributed, continuously updated weather observations so users can quickly query historical records and compare weather changes across cities, reducing the need for manual data collection and organization.'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'將資料倉儲理論應用於持續更新的氣象觀測，透過自動化資料擷取、轉換與分層儲存，建立支援歷史分析的氣象資料倉儲。',en:'Applied data warehousing concepts to continuously updated weather observations, using automated extraction, transformation, and layered storage to build a weather data warehouse for historical analysis.'}
     ]},
     {title:{zh:'成果與驗證',en:'Results & evaluation'},paragraphs:[
       {zh:'小組完成每小時自動更新的 ETL 管線，以及採用星型綱要（Star Schema）的資料倉儲，並透過圖形化介面呈現溫度、降雨、降雪、氣壓與日照時長等分析結果。',en:'The team completed an ETL pipeline with automatic hourly updates and a data warehouse using a star schema, presenting analyses of temperature, rainfall, snowfall, air pressure, and daylight duration through a graphical interface.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},items:[
       {zh:'GUI 開發：使用 Python Tkinter 設計並實作氣象資料分析介面。',en:'GUI development: Designed and implemented a weather data analysis interface using Python Tkinter.'},
       {zh:'系統整合：串接隊友提供的容器化後端服務，透過 SQL 查詢取得氣象資料。',en:'System integration: Connected containerized backend services provided by teammates and retrieved weather data through SQL queries.'},
       {zh:'資料視覺化：實作歷史氣象趨勢圖表與跨城市比較報表。',en:'Data visualization: Implemented historical weather trend charts and cross-city comparison reports.'}
     ]}
   ],source:'https://github.com/jannik-leutgeb/business-intelligence-project'},
  {id:'rental',group:1,tag:'HFT STUTTGART · DATABASE SYSTEMS',image:'wg-room-search.png',
   title:{zh:'WG 合租住宅管理系統',en:'WG Shared Housing Management'},
   summary:{zh:'以德國 WG 合租住宅為應用情境，設計並實作關聯式資料庫管理系統，整合房客、房間、租約、付款與維修資料，並開發 Java Swing 桌面管理介面。',en:'Designed and implemented a relational database management system for shared housing (WG) in Germany, integrating tenant, room, contract, payment, and maintenance records with a Java Swing desktop management interface.'},
   tools:['Java','Java Swing','MySQL','SQL','JDBC'],
   highlightTitle:{zh:'實作成果：',en:'Implementation results'},
   highlight:{zh:'完成合租住宅管理系統原型，整合房客、房間、租約、付款及維修資料，並透過 Java Swing 介面實現資料查詢、管理與相關狀態更新功能。',en:'Completed a shared housing management prototype integrating tenant, room, contract, payment, and maintenance records, with a Java Swing interface for data queries, management, and related status updates.'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'以德國 WG（Wohngemeinschaft）合租住宅為情境，模擬房東或管理者的日常租務管理需求。',en:'Modeled the everyday rental management needs of landlords and property managers in German shared housing, known as WG (Wohngemeinschaft).'},
       {zh:'透過關聯式資料庫整合房客、租約、付款及維修資訊，並設計桌面操作介面，實作資料查詢與管理功能。',en:'Integrated tenant, contract, payment, and maintenance information in a relational database and designed a desktop interface for querying and managing records.'}
     ]},
     {title:{zh:'技術實作',en:'Technical implementation'},items:[
       {zh:'資料庫設計：設計 12 張關聯式資料表，運用 Primary Key、Foreign Key 與資料庫正規化建立資料關聯，維護資料完整性。',en:'Database design: Designed 12 relational tables, using primary keys, foreign keys, and database normalization to establish relationships and maintain data integrity.'},
       {zh:'跨資料表查詢：使用 SQL JOIN 整合房客、房間與付款資訊，支援付款狀態查詢及房間使用情況檢視。',en:'Cross-table queries: Used SQL JOINs to combine tenant, room, and payment information for payment-status queries and room-occupancy views.'},
       {zh:'交易處理：運用 Transactions 處理租約終止時的跨資料表更新，包括租約狀態、房間狀態及房客與房間的關聯。',en:'Transaction processing: Used transactions to handle updates across tables when terminating a contract, including contract status, room status, and tenant-room relationships.'},
       {zh:'資料狀態同步：透過 Triggers，在新增租約或變更租約狀態時，自動更新相關房間資料。',en:'Status synchronization: Used triggers to automatically update related room records when contracts are created or their status changes.'},
       {zh:'資料庫操作封裝：使用 Stored Procedures 封裝房客查詢與刪除操作，並透過 JDBC 整合 MySQL 與 Java Swing 桌面介面。',en:'Database operation encapsulation: Used stored procedures for tenant queries and deletion, and connected MySQL to the Java Swing desktop interface through JDBC.'}
     ]},
     {title:{zh:'成果與驗證',en:'Results & evaluation'},paragraphs:[
       {zh:'完成關聯式資料模型、SQL 程式及 Java 桌面應用程式，提供房客、房間、租約、付款與維修等管理介面。',en:'Completed the relational data model, SQL code, and Java desktop application, providing management interfaces for tenants, rooms, contracts, payments, and maintenance.'},
       {zh:'透過課堂專案中的模擬資料與操作情境，展示跨資料表查詢、資料新增與更新，以及租約與房間狀態連動等功能。',en:'Demonstrated cross-table queries, record creation and updates, and linked contract and room status changes using simulated data and scenarios in the course project.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},items:[
       {zh:'資料庫設計：參與關聯式資料模型規劃、資料表設計與 SQL 功能實作。',en:'Database design: Contributed to relational data modeling, table design, and SQL functionality implementation.'},
       {zh:'桌面介面開發：使用 Java Swing 設計並實作租務管理 GUI。',en:'Desktop interface development: Designed and implemented the rental management GUI using Java Swing.'},
       {zh:'系統功能整合：透過 Java 與 JDBC 串接 MySQL，實作資料查詢、管理及相關業務邏輯。',en:'System integration: Connected MySQL through Java and JDBC to implement data queries, management, and related business logic.'}
     ]}
   ],source:'https://github.com/norwellin/HFT_Database_System'},
  {id:'genetic',group:1,tag:'HFT STUTTGART · COMPUTATIONAL INTELLIGENCE',image:'genetic.jpg',
   title:{zh:'基因演算法協商代理',en:'Genetic Algorithm Mediator'},
   summary:{zh:'透過基因演算法（Genetic Algorithm）最佳化生產順序，並利用中介代理（Mediator Agent）協調供應商與客戶之間的成本目標。',en:'Optimizing production sequences through a Genetic Algorithm and using a Mediator Agent to coordinate cost objectives between suppliers and customers.'},
   tools:['Java','Genetic Algorithm','Multi-Agent Negotiation'],
   highlightTitle:{zh:'實驗設計：27 組演算法策略比較',en:'Experimental Design: Comparing 27 Algorithm Strategy Combinations'},
   highlight:{zh:'3 種選擇 × 3 種交配 × 3 種突變策略，分析不同組合對協商結果及成本最佳化的影響。',en:'3 selection × 3 crossover × 3 mutation strategies, analyzing how different combinations affect negotiation outcomes and cost optimization.'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'建立基於基因演算法的自動化協商系統。供應商與客戶代理各自尋求較低的生產成本，中介代理則產生候選合約，透過雙方的成本評估與投票計算適應度，並利用選擇、交配及突變操作，持續最佳化候選生產順序。',en:'Developed an automated negotiation system based on a genetic algorithm. Supplier and customer agents each seek lower production costs, while a mediator generates candidate contracts, calculates fitness from both parties’ cost evaluations and votes, and continuously optimizes candidate production sequences through selection, crossover, and mutation.'}
     ]},
     {title:{zh:'成果與驗證',en:'Results & evaluation'},paragraphs:[
       {zh:'比較 27 組選擇、交配與突變策略，並針對 10、100 及 1,000 回合的設定進行實驗。',en:'Compared 27 combinations of selection, crossover, and mutation strategies in experiments configured for 10, 100, and 1,000 rounds.'},
       {zh:'實驗結果顯示，在本專案的 1,000 回合設定下，Temperature Selection、Cycle Crossover 與 Displacement Mutation 的組合呈現最佳整體表現。',en:'Under this project’s 1,000-round configuration, the combination of Temperature Selection, Cycle Crossover, and Displacement Mutation showed the best overall performance.'},
       {zh:'透過成本散佈圖視覺化不同策略的實驗結果，輔助分析供應商與客戶之間的成本權衡，並辨識近似 Pareto 最佳解。',en:'Visualized the experimental results using cost scatter plots to analyze supplier–customer cost trade-offs and identify approximately Pareto-optimal solutions.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},paragraphs:[
       {zh:'參與小組專案，主要負責以下功能的設計與實作：',en:'Contributed to the team project, primarily designing and implementing the following functionality:'}
     ],items:[
       {zh:'交配演算法（Crossover）：實作 Order、Cycle 與 Position-Based Crossover，透過不同的基因重組方式產生新的候選合約。',en:'Crossover: Implemented Order, Cycle, and Position-Based Crossover to generate new candidate contracts through different gene recombination methods.'},
       {zh:'突變演算法（Mutation）：實作 Scramble、Inverse 與 Displacement Mutation，透過調整基因排列增加候選解的多樣性。',en:'Mutation: Implemented Scramble, Inverse, and Displacement Mutation to increase candidate diversity by rearranging genes.'},
       {zh:'結果視覺化（Data Visualization）：將不同演算法策略的實驗結果繪製為成本散佈圖，協助比較供應商與客戶的成本分布及最佳化表現。',en:'Data Visualization: Created cost scatter plots of experimental results across algorithm strategies to compare supplier and customer cost distributions and optimization performance.'}
     ]}
   ],source:'https://github.com/Rdm-Nico/CI_Project/tree/main'},
  {id:'floorplan',group:2,tag:'COMPUTER VISION · OCR',image:'doc-0-2.jpg',
   title:{zh:'平面圖輔助辨識系統',en:'Floor Plan Recognition Assistant'},
   summary:{zh:'運用影像處理與 OCR 技術，探索超商平面圖中貨架類別的自動辨識方法。透過連通元件分析分離獨立元件，並結合多角度文字辨識，建立初步辨識流程。',en:'Explored automatic shelf-category recognition in convenience store floor plans using image processing and OCR. Developed an initial recognition pipeline combining connected component analysis to separate individual components with multi-orientation text recognition.'},
   tools:['Python','OpenCV','Tesseract OCR'],
   highlightTitle:{zh:'預期效益：',en:'Expected benefits'},
   highlight:{zh:'減少人工辨識平面圖所需的訓練與判讀成本，探索以影像處理技術輔助貨架類別識別的可行性。',en:'Reduce the training and interpretation costs of manual floor-plan recognition and explore the feasibility of assisting shelf-category identification through image processing.'},
   detailsLabel:{zh:'查看專案細節',en:'View project details'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'超商平面圖包含大量且多樣化的元件，人工辨識需投入人員訓練與判讀時間。因此，廠商希望透過影像處理與 OCR 技術，開發平面圖輔助辨識系統，降低人工識別需求。',en:'Convenience store floor plans contain numerous and varied components, requiring staff training and interpretation time for manual recognition. The company therefore sought an image-processing and OCR assistant to reduce the need for manual identification.'}
     ]},
     {title:{zh:'技術實作',en:'Technical implementation'},items:[
       {zh:'連通元件分析（Connected Component Analysis）：利用平面圖中各元件相互獨立的特性，分離並裁切個別元件，作為後續辨識輸入。',en:'Connected Component Analysis: Used the separation between components in the floor plan to isolate and crop individual components as inputs for subsequent recognition.'},
       {zh:'多角度文字辨識（Multi-orientation OCR）：針對 OCR 對文字方向的限制，將各元件以每次 90° 的方式旋轉，分別進行文字辨識，以輔助判斷貨架類別。',en:'Multi-orientation OCR: Addressed OCR limitations with text orientation by rotating each component in 90° increments and recognizing text at each orientation to assist shelf-category identification.'}
     ]},
     {title:{zh:'階段性成果與專案狀態',en:'Interim results & project status'},paragraphs:[
       {zh:'歷史簡報記錄貨架類別辨識正確率約 80%，每張平面圖處理時間約 1 小時。專案已終止開發，尚未完成後續效能優化與正式系統交付。',en:'Historical presentations report approximately 80% shelf-category recognition accuracy and a processing time of about one hour per floor plan. Development has been discontinued; further performance optimization and formal system delivery were not completed.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},paragraphs:[
       {zh:'獨立負責整體系統的設計與實作。',en:'Independently designed and implemented the entire system.'}
     ]}
   ],source:''},
  {id:'speech',group:2,tag:'AI MODEL APPLICATION · BACKEND',image:'speech-api.png',
   title:{zh:'AI Speech Model Application｜STT & TTS',en:'AI Speech Model Application | STT & TTS'},
   summary:{zh:'開發中文語音處理後端 API，整合 Whisper 語音辨識與 gTTS 語音合成，讓應用程式可將錄音轉換為文字，或將中文文字轉換為 MP3 語音。',en:'Developed a backend API for Chinese speech processing, integrating Whisper speech recognition and gTTS speech synthesis so applications can convert recordings into text or Chinese text into MP3 audio.'},
   tools:['Python','Flask','Whisper','gTTS'],
   highlightTitle:{zh:'效益：',en:'Benefits'},
   highlight:{zh:'支援客服聊天介面的語音互動，讓使用者語音可轉換為文字，也能將 AI 產生的文字轉換為語音播放。',en:'Supports voice interaction in customer service chat interfaces, converting user speech into text and AI-generated text into audio for playback.'},
   detailsLabel:{zh:'查看專案細節',en:'View project details'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'此專案用於支援客服聊天介面的語音互動功能。使用者可透過語音輸入內容，音訊傳送至後端後由 Whisper 轉換為文字，再顯示於聊天介面中；另一方面，AI 產生的文字可透過 gTTS 轉換為語音，供前端播放。',en:'This project supports voice interaction in customer service chat interfaces. Users can provide spoken input, which is sent to the backend and transcribed by Whisper for display in the chat interface. AI-generated text can also be converted into speech using gTTS for playback on the frontend.'},
       {zh:'因此，本專案主要負責將語音辨識與語音合成功能整合為後端 API，作為聊天介面與語音處理功能之間的服務層。',en:'The project integrates speech recognition and synthesis into a backend API, serving as the service layer between the chat interface and speech processing functionality.'}
     ]},
     {title:{zh:'成果',en:'Results'},paragraphs:[
       {zh:'完成 STT / TTS 後端原型，支援語音轉文字與文字轉語音的雙向處理，可串接使用者語音輸入與 AI 回覆播放，作為客服聊天介面的語音處理服務。',en:'Completed an STT / TTS backend prototype supporting both speech-to-text and text-to-speech processing. It can connect user voice input and spoken AI replies as a speech processing service for customer service chat interfaces.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},paragraphs:[
       {zh:'獨立負責整體系統的設計與實作。',en:'Independently designed and implemented the entire system.'}
     ]}
   ],source:''},
  {id:'asl',group:2,tag:'DEEP LEARNING · OBJECT DETECTION',image:'asl-demo.gif',
   title:{zh:'美國手語字母辨識系統',en:'ASL Alphabet Recognition System'},
   summary:{zh:'運用 YOLOv5 深度學習模型，建立美國手語（American Sign Language, ASL）A 至 Z 共 26 類字母的手勢辨識系統。',en:'Built a gesture recognition system for all 26 letters of the American Sign Language (ASL) alphabet, from A to Z, using the YOLOv5 deep learning model.'},
   tools:['Python','YOLOv5','PyTorch'],
   highlightTitle:{zh:'實驗結果：',en:'Experimental results'},
   highlight:{zh:'完成 26 類字母手勢辨識原型，支援圖片與影片推論。混淆矩陣顯示多數字母具有良好的辨識表現，並觀察到部分相似手勢的誤判情形。',en:'Completed a prototype recognizing 26 alphabet gestures with image and video inference. The confusion matrix shows good recognition performance for most letters, with some errors between similar gestures.'},
   detailsLabel:{zh:'查看專案細節',en:'View project details'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'手語是重要的視覺溝通方式，但不熟悉手語的人難以直接理解手勢所代表的意義。因此，本專案以美國手語 A 至 Z 共 26 個字母為辨識目標，透過 YOLOv5 建立手勢偵測模型，探索深度學習在手語辨識上的應用。',en:'Sign language is an important form of visual communication, but its gestures can be difficult to understand for people unfamiliar with it. This project targets the 26 ASL letters from A to Z, using YOLOv5 to build a gesture detection model and explore deep learning applications in sign language recognition.'}
     ]},
     {title:{zh:'技術實作',en:'Technical implementation'},items:[
       {zh:'資料準備與增強（Data Preparation & Augmentation）：蒐集並整理 26 類字母手勢影像，透過鏡像翻轉、旋轉及灰階處理增加資料變化，並建立符合 YOLOv5 格式的影像標註與資料集。',en:'Data Preparation & Augmentation: Collected and organized images for 26 alphabet gesture classes, increased variation through mirroring, rotation, and grayscale processing, and prepared annotations and datasets in YOLOv5 format.'},
       {zh:'模型訓練（YOLOv5 Training）：使用 PyTorch 與 YOLOv5s 建立物件偵測流程，透過 Google Colab 執行模型訓練，並針對記憶體不足問題，調整訓練資料量、Batch Size（32 降至 16）及輸入影像尺寸（416 降至 320）。',en:'YOLOv5 Training: Built an object detection pipeline with PyTorch and YOLOv5s and trained it in Google Colab. Addressed memory limitations by adjusting the training dataset size, reducing the batch size from 32 to 16, and reducing the input image size from 416 to 320.'},
       {zh:'圖片與影片推論（Image & Video Inference）：使用訓練產生的模型權重，對測試圖片及影片進行手勢偵測，輸出字母類別、偵測框與信心分數。',en:'Image & Video Inference: Used the trained model weights to detect gestures in test images and videos, outputting letter classes, bounding boxes, and confidence scores.'}
     ]},
     {title:{zh:'成果',en:'Results'},paragraphs:[
       {zh:'完成 A 至 Z 共 26 類字母的手勢辨識原型，並成功展示圖片與影片辨識結果。混淆矩陣顯示多數字母具有良好的辨識表現，其中 N 類別的正規化對角線數值為 0.95，另有 0.05 被誤判為 M。',en:'Completed a gesture recognition prototype for all 26 letters from A to Z and successfully demonstrated image and video recognition. The confusion matrix shows good recognition performance for most letters; the normalized diagonal value for class N is 0.95, with 0.05 misclassified as M.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},paragraphs:[
       {zh:'完整參與雙人小組專案，共同完成美國手語字母辨識系統，涵蓋資料準備、模型訓練、圖片與影片推論，以及辨識結果分析等工作。',en:'Participated throughout the two-person team project, jointly developing the ASL alphabet recognition system across data preparation, model training, image and video inference, and recognition result analysis.'}
     ]}
   ],source:''},
  {id:'cnn',group:2,tag:'DEEP LEARNING · EXPERIMENTATION',image:'end_demo_2x.gif',
   title:{zh:'CNN Image Classification｜Apple & Owl Recognition',en:'CNN Image Classification | Apple & Owl Recognition'},
   summary:{zh:'使用 CNN 建立蘋果、貓頭鷹與其他影像的分類模型，讓系統可針對輸入影像進行自動分類。',en:'Built a CNN model to automatically classify input images as apples, owls, or other images.'},
   tools:['Python','CNN','Neural Network Console','OpenCV','Web Scraping'],
   highlightTitle:{zh:'實驗結果：',en:'Experimental results'},
   highlight:{zh:'最終五層 CNN 採用 128 × 128 灰階輸入，在保存的 1,710 張評估影像中正確分類 1,668 張，Accuracy 為 97.54%。',en:'The final five-layer CNN uses 128 × 128 grayscale inputs and correctly classified 1,668 of the 1,710 preserved evaluation images, achieving 97.54% accuracy.'},
   detailsLabel:{zh:'查看專案細節',en:'View project details'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'此專案用於建立蘋果、貓頭鷹與其他影像的自動分類功能。',en:'This project develops automatic classification of apples, owls, and other images.'},
       {zh:'初期模型主要辨識蘋果與貓頭鷹，但二分類模型在遇到不屬於這兩類的影像時，仍可能將其判定為其中一類。因此後續加入「其他」類別，使模型可直接學習非目標影像，形成三分類架構。',en:'The initial model recognized apples and owls, but a binary classifier could still assign images outside these categories to one of them. An “other” class was subsequently added so the model could learn from non-target images directly, resulting in a three-class architecture.'},
       {zh:'資料來源包含 Kaggle、Google 圖片搜尋後人工篩選，以及 YouTube 影片。專案中亦使用 Web Scraping 輔助蒐集網路影像，再進行資料篩選、影像處理與資料擴增。',en:'Data sources included Kaggle, manually selected Google Images search results, and YouTube videos. Web scraping also assisted online image collection, followed by data selection, image processing, and augmentation.'},
       {zh:'原始資料包含蘋果 605 張、貓頭鷹 605 張與其他影像 500 張，共 1,710 張；透過 ±45° 與 ±90° 旋轉進行資料擴增後，總資料量增加至 8,550 張。',en:'The original dataset contained 605 apple images, 605 owl images, and 500 other images, totaling 1,710. Augmentation using rotations of ±45° and ±90° expanded the dataset to 8,550 images.'}
     ]},
     {title:{zh:'成果',en:'Results'},paragraphs:[
       {zh:'最終模型採用 128 × 128 灰階輸入、五層卷積層、ReLU、MaxPooling、兩層 Dropout，以及 Softmax 三分類輸出。',en:'The final model uses 128 × 128 grayscale inputs, five convolutional layers, ReLU, MaxPooling, two Dropout layers, and a three-class Softmax output.'},
       {zh:'模型在保存的 1,710 張評估影像中正確分類 1,668 張，Accuracy 為 97.54%。',en:'The model correctly classified 1,668 of the 1,710 preserved evaluation images, achieving 97.54% accuracy.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},items:[
       {zh:'資料標註（Labeling）',en:'Data labeling'},
       {zh:'Web Scraping 蒐集網路影像',en:'Online image collection through web scraping'},
       {zh:'資料清理與篩選',en:'Data cleaning and selection'},
       {zh:'資料擴增（Data Augmentation）',en:'Data augmentation'},
       {zh:'CNN 網路架構設計與模型訓練',en:'CNN architecture design and model training'}
     ]}
   ],source:''},
  {id:'dogs',group:2,tag:'DEEP LEARNING · TRANSFER LEARNING',image:'dog-breed-results-wide.png',
   title:{zh:'Dog Breed Classification｜InceptionV3 Transfer Learning',en:'Dog Breed Classification | InceptionV3 Transfer Learning'},
   summary:{zh:'使用 InceptionV3 預訓練模型與遷移學習（Transfer Learning）建立狗品種影像分類系統，透過調整資料切分比例、最佳化器與 Dropout 參數，比較不同訓練設定對模型分類表現的影響。',en:'Built a dog breed image classification system using a pretrained InceptionV3 model and transfer learning, comparing how data splits, optimizers, and dropout settings affect classification performance.'},
   tools:['Python','InceptionV3','Transfer Learning','TensorFlow / Keras'],
   highlightTitle:{zh:'實驗結果：',en:'Experimental results'},
   highlight:{zh:'使用 Stanford Dogs Dataset 進行模型訓練，比較 8:1:1 與 5:3:2 資料切分比例，以及 Adam、RMSprop、SGD 三種最佳化器與不同 Dropout 設定（0.3、0.4、0.5），觀察各組實驗的模型訓練與分類表現。',en:'Trained models on the Stanford Dogs Dataset, comparing 8:1:1 and 5:3:2 data splits, Adam, RMSprop, and SGD optimizers, and dropout settings of 0.3, 0.4, and 0.5 to observe training and classification performance across experiments.'},
   detailsLabel:{zh:'查看專案細節',en:'View project details'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'此專案以 Stanford Dogs Dataset 為資料來源，目標是建立能夠自動辨識不同狗品種的深度學習影像分類模型。',en:'Using the Stanford Dogs Dataset, this project aims to build a deep learning image classifier that automatically identifies different dog breeds.'},
       {zh:'考量從零開始訓練深度神經網路通常需要大量資料與運算資源，因此採用遷移學習（Transfer Learning），利用預訓練的 InceptionV3 模型進行影像特徵提取，並應用於狗品種分類任務。',en:'Training deep neural networks from scratch typically requires substantial data and computing resources. The project therefore uses transfer learning with a pretrained InceptionV3 model to extract image features for dog breed classification.'}
     ]},
     {title:{zh:'成果',en:'Results'},paragraphs:[
       {zh:'以 InceptionV3 為基礎建立狗品種分類模型，並透過多組訓練實驗分析超參數（Hyperparameters）對模型表現的影響。',en:'Built an InceptionV3-based dog breed classifier and analyzed the effects of hyperparameters on model performance through multiple training experiments.'},
       {zh:'實驗內容包含：',en:'The experiments included:'}
     ],items:[
       {zh:'資料切分比例：比較訓練集、測試集與驗證集分別採用 8:1:1 及 5:3:2 時的模型表現。',en:'Data splits: Compared model performance using training, test, and validation splits of 8:1:1 and 5:3:2, respectively.'},
       {zh:'Dropout 比較：在 Adam 最佳化器下，分別測試 Dropout 0.3、0.4 與 0.5。',en:'Dropout comparison: Tested dropout values of 0.3, 0.4, and 0.5 with the Adam optimizer.'},
       {zh:'最佳化器比較：在 Dropout 0.3 的設定下，比較 Adam、RMSprop 與 SGD 的訓練結果。',en:'Optimizer comparison: Compared training results for Adam, RMSprop, and SGD with dropout set to 0.3.'}
     ],afterParagraphs:[
       {zh:'最後透過不同訓練設定的結果比較與實際影像分類展示，觀察遷移學習應用於狗品種辨識的效果。',en:'Finally, compared the results of different training configurations and demonstrated classification on actual images to observe the effectiveness of transfer learning for dog breed recognition.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},paragraphs:[
       {zh:'獨立負責整體系統的設計與實作。',en:'Independently designed and implemented the entire system.'}
     ]}
   ],source:''},
  {id:'three',group:2,tag:'WEB GRAPHICS · INTERACTION',image:'threejs-demo.gif',
   title:{zh:'Three.js 圖學與遊戲機制',en:'Three.js Graphics & Game Mechanics'},
   summary:{zh:'七個瀏覽器互動實作，涵蓋碰撞模擬、角色動畫、鍵盤控制、群體移動與路徑跟隨。',en:'Seven browser-based experiments covering collisions, character animation, keyboard controls, flocking, and path following.'},
   tools:['JavaScript','Three.js','HTML / CSS'],
   highlightTitle:{zh:'實作成果：',en:'Implementation results'},
   highlight:{zh:'完成 HW0 至 HW6 共七個獨立互動場景，將幾何與向量運算應用於物件運動、碰撞判斷及角色互動等遊戲機制。',en:'Completed seven independent interactive scenes from HW0 to HW6, applying geometry and vector calculations to game mechanics such as object movement, collision detection, and character interaction.'},
   background:{zh:'逐步探索即時場景建置、物件運動、動畫狀態與空間判斷，建立瀏覽器圖學基礎。',en:'Explore real-time scenes, object movement, animation states, and spatial reasoning in browser graphics.'},
   result:{zh:'完成七個獨立小作品，包括火車動畫、圓盤碰撞、角色控制、避障與 BSP 判斷。作品為圖學與遊戲機制實作集合。',en:'Completed seven independent small projects, including train animation, disc collisions, character controls, obstacle avoidance, and BSP logic. The projects form a collection of graphics and game-mechanics implementations.'},
   contribution:{zh:'獨立負責所有互動場景的設計與實作。',en:'Independently designed and implemented all interactive scenes.'},source:'https://github.com/norwellin/game-programming'},
  {id:'elevator',group:3,tag:'TATUNG UNIVERSITY · BACHELOR’S CAPSTONE',image:'elevator-simulation.png',
   title:{zh:'智慧防疫電梯系統｜Touchless Control & Elevator Scheduling',en:'Smart Elevator System | Touchless Control & Elevator Scheduling'},
   award:{zh:'大同大學專題競賽｜第一名',en:'First Place · Tatung University Project Competition'},
   summary:{zh:'開發結合非接觸式控制與智慧排班模擬的電梯系統，運用 MediaPipe 實現手勢辨識，結合 Dlib 與 ResNet 進行人臉辨識，並透過基因演算法（Genetic Algorithm）優化電梯排班，探索降低乘客等待時間與能源消耗的方法。',en:'Developed an elevator system combining touchless control and intelligent scheduling simulations, using MediaPipe for gesture recognition, Dlib and ResNet for face recognition, and a genetic algorithm to optimize scheduling and explore reductions in passenger waiting time and energy consumption.'},
   tools:['Java','MediaPipe','Dlib','ResNet','Genetic Algorithm','Multithreading'],
   highlightTitle:{zh:'效益：',en:'Benefits'},
   highlight:{zh:'相較於傳統電梯排班演算法，在模擬情境下，平均乘客搭乘時間減少 11.85%、等待時間減少 12.62%，整體電力消耗降低 1.23%，同時透過非接觸式操作減少乘客直接觸碰公共電梯按鈕的需求。',en:'Compared with the conventional elevator scheduling algorithm, simulations showed an 11.85% reduction in average passenger ride time, a 12.62% reduction in waiting time, and a 1.23% reduction in overall electricity consumption. Touchless operation also reduces the need to directly touch shared elevator buttons.'},
   detailsLabel:{zh:'查看專案細節',en:'View project details'},
   sections:[
     {title:{zh:'背景與目標',en:'Context & objective'},paragraphs:[
       {zh:'傳統電梯主要透過實體按鈕操作，容易增加公共設施的接觸頻率；另一方面，傳統派車策略若僅考量電梯與乘客之間的距離，可能造成乘客等待時間過長或不必要的能源消耗。',en:'Conventional elevators rely primarily on physical buttons, increasing contact with shared facilities. Dispatch strategies that consider only the distance between elevators and passengers may also lead to excessive waiting times or unnecessary energy consumption.'},
       {zh:'因此，本專題分為非接觸式電梯控制與智慧排班模擬兩部分。前者運用 MediaPipe 進行手部關鍵點偵測與手勢辨識，並結合 Dlib 與 ResNet 實現人臉特徵擷取及身分比對，整合紅外線感應及手機 App 等操作方式，透過外掛式智慧電梯手指控制既有電梯面板。',en:'The project therefore consists of touchless elevator control and intelligent scheduling simulations. The control system uses MediaPipe for hand landmark detection and gesture recognition, and Dlib and ResNet for facial feature extraction and identity matching. It also integrates infrared sensing and mobile app controls, operating existing elevator panels through an add-on robotic finger.'},
       {zh:'後者利用 Java 多執行緒模擬多部電梯運作，結合基因演算法進行派車決策，並依不同時段的人流需求調整省電與效率模式。',en:'The scheduling component uses Java multithreading to simulate multiple elevators, applies a genetic algorithm to dispatch decisions, and adjusts energy-saving and efficiency modes to passenger demand at different times.'}
     ]},
     {title:{zh:'成果',en:'Results'},paragraphs:[
       {zh:'本專題榮獲大同大學專題競賽第一名。',en:'This project won first place in the Tatung University Project Competition.'},
       {zh:'完成非接觸式電梯控制系統與智慧排班模擬原型，整合 MediaPipe 手勢辨識、Dlib 與 ResNet 人臉辨識等多元操作方式，並實現以基因演算法為基礎的省電模式、效率模式及依人流切換的排班策略。',en:'Completed prototypes for touchless elevator control and intelligent scheduling simulation, integrating MediaPipe gesture recognition and Dlib/ResNet face recognition alongside other controls. Implemented genetic-algorithm-based energy-saving and efficiency modes, with scheduling strategies that switch according to passenger demand.'},
       {zh:'根據尖峰與離峰時段的模擬實驗，相較於傳統電梯排班演算法，依不同人流情境切換效率與省電模式後，整體模擬結果如下：',en:'In peak and off-peak simulations, switching between efficiency and energy-saving modes according to passenger demand produced the following overall results compared with the conventional elevator scheduling algorithm:'}
     ],items:[
       {zh:'乘客平均搭乘時間：減少 11.85%。',en:'Average passenger ride time: reduced by 11.85%.'},
       {zh:'乘客平均等待時間：減少 12.62%。',en:'Average passenger waiting time: reduced by 12.62%.'},
       {zh:'電梯平均電力消耗：降低 1.23%。',en:'Average elevator electricity consumption: reduced by 1.23%.'}
     ]},
     {title:{zh:'我的參與',en:'My contribution'},paragraphs:[
       {zh:'三人團隊協作開發，個人主要負責：',en:'Developed collaboratively in a three-person team. My main responsibilities were:'}
     ],items:[
       {zh:'人臉辨識系統：運用 Dlib 與 ResNet 進行人臉特徵擷取及辨識功能開發。',en:'Face recognition system: Developed facial feature extraction and recognition functionality using Dlib and ResNet.'},
       {zh:'傳統電梯排班演算法：負責傳統電梯派車邏輯的程式實作，作為後續基因演算法的效能比較基準。',en:'Conventional elevator scheduling algorithm: Implemented traditional dispatch logic as the performance baseline for the genetic algorithm.'},
       {zh:'基因演算法設計：參與電梯排班最佳化策略的討論與設計，探討乘客等待時間及能源消耗等影響因素。',en:'Genetic algorithm design: Participated in discussions and design of elevator scheduling optimization strategies, examining factors such as passenger waiting time and energy consumption.'},
       {zh:'實驗結果分析：負責觀測、比較與整理傳統演算法及基因演算法在不同人流情境下的模擬結果。',en:'Experimental analysis: Observed, compared, and organized simulation results for conventional and genetic algorithms under different passenger demand scenarios.'}
     ]}
   ],source:''}
];
window.SKILLS = [
  {title:{zh:'程式語言',en:'Programming Languages'},items:'Python · Java · JavaScript · C / C++'},
  {title:{zh:'機器學習與電腦視覺',en:'Machine Learning & Computer Vision'},items:'TensorFlow / Keras · PyTorch · OpenCV · YOLO · MediaPipe · Dlib'},
  {title:{zh:'網頁、後端與擴充功能開發',en:'Web, Backend & Extension Development'},items:'Flask · Three.js · HTML / CSS · Chrome Extensions'},
  {title:{zh:'測試與品質工程',en:'Testing & Quality Engineering'},items:'Playwright · Selenium · pytest'},
  {title:{zh:'資料庫與資料工程',en:'Databases & Data Engineering'},items:'MySQL · SQL · ETL'},
  {title:{zh:'文字與語音處理',en:'Text & Speech Processing'},items:'Whisper (STT) · gTTS (TTS) · Tesseract OCR'},
  {title:{zh:'開發工具與容器化',en:'Development Tools & Containerization'},items:'Git · Docker'},
  {title:{zh:'桌面應用程式開發',en:'Desktop Application Development'},items:'Java Swing · Tkinter'}
];
window.EDUCATION = [
  {dates:'2024.09 — 2026.08',school:{zh:'Hochschule für Technik Stuttgart',en:'Hochschule für Technik Stuttgart'},degree:{zh:'Software Technology 碩士 · 德國',en:'Master’s degree in Software Technology · Germany'}},
  {dates:'2022.09 — 2026.08',school:{zh:'大同大學',en:'Tatung University'},degree:{zh:'資訊工程學系 碩士 · 台灣',en:'Master’s degree in Computer Science and Engineering · Taiwan'}},
  {dates:'2018.09 — 2022.08',school:{zh:'大同大學',en:'Tatung University'},degree:{zh:'資訊工程學系 學士 · 台灣',en:'Bachelor’s degree in Computer Science and Engineering · Taiwan'}}
];
