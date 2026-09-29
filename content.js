/* 個人資料編輯區：文字使用 {zh: '中文', en: 'English'}。
   照片放 assets/portrait.jpg，CV 放 assets/CV.pdf，再填入下方路徑。
   source 留空時不顯示原始碼連結；請填你的專案網址，而非第三方套件。
*/
window.PROFILE = {
  portrait: './assets/portrait.jpg',
  cv: '', // './assets/CV.pdf'
  linkedin: 'https://www.linkedin.com/in/chin-jung-lin-987876303/',
  github: 'https://github.com/norwellin',
  job104: '',
  introduction: {zh: '這裡預留給我的個人介紹、職涯方向與工作理念。', en: 'A space for my personal introduction, career direction, and approach to work.'}
};
window.COPY = {
  zh: {
    role:'軟體開發 · 自動化測試 · AI 應用',
    intro:'從台灣到德國，累積軟體工程與跨文化協作經驗，將研究與實作轉化為具體的系統與工具。',
    explore:'探索我的專案',download:'下載 CV',cvPending:'CV 檔案待補',photoPending:'個人照片待補',
    aboutTitle:'關於我',aboutLead:'以軟體工程為基礎，探索測試自動化、人工智慧與資料應用。',
    aboutBody:'畢業於大同大學資訊工程學系與德國 HFT Stuttgart Software Technology 碩士學程。專案經驗涵蓋瀏覽器測試錄製、影像與語音處理、資料倉儲，以及國際團隊合作。',
    personalNote:'個人介紹 / 預留文字區',projectsTitle:'研究與實作',projectsIntro:'從研究問題到實際系統，記錄每個專案的方法、成果與我的參與。',
    skillsTitle:'技術與工具',educationTitle:'學習歷程',connect:'與我聯繫',notAdded:'尚未提供',backTop:'回到頂端 ↑',
    details:'專案背景與參與',background:'背景與目標',result:'成果與驗證',contribution:'我的參與',source:'查看原始碼 ↗',
    nav:['首頁','關於','專案','技能','學歷','聯繫'],
    groups:['碩士論文','跨文化合作專案','應用與課程專案','學士畢業專題'],
    teamPending:'參與小組專案；個人負責的模組與工作範圍待補充。'
  },
  en: {
    role:'Software Development · Test Automation · Applied AI',
    intro:'Bringing together software engineering and cross-cultural collaboration, with project experience spanning Taiwan and Germany.',
    explore:'Explore my work',download:'Download CV',cvPending:'CV coming soon',photoPending:'Profile photo coming soon',
    aboutTitle:'A little about me',aboutLead:'A foundation in software engineering. A curiosity for automation, AI, and data.',
    aboutBody:'A graduate of Computer Science and Engineering at Tatung University and the Software Technology master’s program at HFT Stuttgart. My projects span browser test recording, image and speech processing, data warehousing, and international collaboration.',
    personalNote:'Personal introduction / space to complete',projectsTitle:'Research into practice',projectsIntro:'A collection of research and engineering projects, their methods, outcomes, and my contributions.',
    skillsTitle:'Technical toolkit',educationTitle:'Education',connect:'Let’s connect.',notAdded:'Not added yet',backTop:'Back to top ↑',
    details:'Background & contribution',background:'Context & objective',result:'Results & evaluation',contribution:'My contribution',source:'View source code ↗',
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
   highlight:{zh:'1,199 個 UI 元件測試，支援率 98.2%；14 個整合情境全數回放成功。',en:'98.2% support across 1,199 UI components; successful replay of all 14 integration scenarios.'},
   background:{zh:'SaaS IDE 包含大量動態元素與複雜互動，使人工測試及腳本維護成本增加；現有測試錄製工具在拖拉、跨頁面與 iframe、動態 ID 處理及視覺化編輯方面仍有不足。',en:'SaaS IDEs contain many dynamic elements and complex interactions, increasing the cost of manual testing and script maintenance. Existing test recorders still have limitations in drag-and-drop, cross-page and iframe interactions, dynamic ID handling, and visual editing.'},
   result:{zh:'完成一套網頁自動化測試錄製系統，並以 MobiWebX 驗證。支援 1,178／1,199 個 UI 元件，錄製支援率達 98.2%；14 個端對端 GUI 情境全數成功回放。',en:'Completed an automated web test recording system and validated it using MobiWebX. The system supports 1,178 of 1,199 UI components, achieving a recording support rate of 98.2%, with successful replay of all 14 end-to-end GUI scenarios.'},
   contribution:{zh:'獨立設計與實作 Chrome 擴充套件、跨頁面與 iframe 拖拉機制、動態元素定位策略及視覺化腳本編輯器。',en:'Independently designed and implemented the Chrome extension, cross-page and iframe drag-and-drop mechanisms, dynamic element locator strategies, and visual script editor.'},source:'https://github.com/norwellin/TestingRecorder'},
  {id:'dibuco',group:1,tag:'HFT STUTTGART · TEAM PROJECT',image:'dibuco.jpg',
   title:{zh:'Dibuco｜跨平台社群資料整合與 Discord ETL 實作',en:'Dibuco | Cross-platform Social Data Integration & Discord ETL'},
   summary:{zh:'參與跨國團隊建置社群資料整合平台，整合 Discord、Telegram、Reddit 與 GitHub 資料，並負責 Discord 資料管線的擷取與轉換流程。',en:'Collaborated with an international team to build a social data integration platform spanning Discord, Telegram, Reddit, and GitHub, taking responsibility for extraction and transformation in the Discord data pipeline.'},
   tools:['Python','Discord API','ETL','JSON','Docker'],
   highlight:{zh:'建立專屬 Discord Server 與 Bot，透過頻道鏡像及事件監聽擷取社群訊息，並將原始資料轉換為結構化 JSON 檔案。',en:'Created a dedicated Discord server and bot to capture community messages through channel mirroring and event listeners, transforming raw data into structured JSON files.'},
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
   highlight:{zh:'整合容器化後端服務與圖形化分析介面，呈現氣象趨勢及跨城市數據排名。',en:'Integrated containerized backend services with a graphical analysis interface to present weather trends and cross-city rankings.'},
   background:{zh:'將資料倉儲理論應用於持續更新的氣象觀測，透過自動化資料擷取、轉換與分層儲存，建立支援歷史分析的氣象資料倉儲。',en:'Applied data warehousing concepts to continuously updated weather observations, using automated extraction, transformation, and layered storage to build a weather data warehouse for historical analysis.'},
   result:{zh:'小組完成每小時自動更新的 ETL 管線，以及採用星型綱要（Star Schema）的資料倉儲，並透過圖形化介面呈現溫度、降雨、降雪、氣壓與日照時長等分析結果。',en:'The team completed an ETL pipeline with automatic hourly updates and a data warehouse using a star schema, presenting analyses of temperature, rainfall, snowfall, air pressure, and daylight duration through a graphical interface.'},
   contribution:{zh:'負責使用 Tkinter 開發氣象分析 GUI，串接隊友提供的容器化後端服務，並透過 SQL 查詢取得氣象資料，實作歷史氣象趨勢圖表及跨城市分析報表。',en:'Developed the weather analysis GUI using Tkinter, integrated containerized backend services provided by teammates, and retrieved weather data through SQL queries to implement historical weather charts and cross-city analysis reports.'},source:'https://github.com/jannik-leutgeb/business-intelligence-project'},
  {id:'rental',group:1,tag:'HFT STUTTGART · DATABASE SYSTEMS',image:'wg-1.jpg',
   title:{zh:'WG 合租住宅管理系統',en:'WG Shared Housing Management'},
   summary:{zh:'以德國 WG 合租住宅為應用情境，設計並實作關聯式資料庫管理系統，整合房客、房間、租約、付款與維修資料，並開發 Java Swing 桌面管理介面。',en:'Designed and implemented a relational database management system for shared housing (WG) in Germany, integrating tenant, room, contract, payment, and maintenance records with a Java Swing desktop management interface.'},
   tools:['Java','Java Swing','MySQL','SQL','JDBC'],
   highlight:{zh:'運用 SQL JOIN、Transactions、Triggers 與 Stored Procedures，實現跨資料表查詢、租務資料管理及相關狀態自動更新。',en:'Used SQL JOINs, transactions, triggers, and stored procedures to implement cross-table queries, rental data management, and automatic updates to related statuses.'},
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
     {title:{zh:'我的參與',en:'My contribution'},paragraphs:[
       {zh:'全程參與專案開發，涵蓋關聯式資料庫設計、Java Swing 前端介面製作，以及 Java 與 JDBC 後端功能實作，完成從資料模型設計到系統功能整合的完整開發流程。',en:'Participated throughout the development process, covering relational database design, Java Swing user interface development, and backend functionality using Java and JDBC, from data modeling through system integration.'}
     ]}
   ],source:'https://github.com/norwellin/HFT_Database_System'},
  {id:'genetic',group:1,tag:'HFT STUTTGART · COMPUTATIONAL INTELLIGENCE',image:'genetic.jpg',
   title:{zh:'基因演算法協商代理',en:'Genetic Algorithm Mediator'},
   summary:{zh:'透過基因演算法最佳化生產順序，並利用中介代理協調供應商與客戶的成本目標。',en:'Optimizing production sequences with a genetic algorithm and using a mediator agent to coordinate supplier and customer cost objectives.'},
   tools:['Java','Genetic Algorithm','Multi-Agent Negotiation'],
   highlightTitle:{zh:'27 組演算法策略比較',en:'Comparing 27 Algorithm Strategy Combinations'},
   highlight:{zh:'3 種選擇 × 3 種交配 × 3 種突變策略',en:'3 selection × 3 crossover × 3 mutation strategies'},
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
       {zh:'參與小組專案，主要負責基因演算法中的交配與突變操作實作，以及實驗結果的視覺化。',en:'Contributed to the team project primarily by implementing crossover and mutation operations in the genetic algorithm and visualizing experimental results.'}
     ],items:[
       {zh:'交配演算法（Crossover）：實作 Order、Cycle 與 Position-Based Crossover，透過不同的基因重組方式產生新的候選合約。',en:'Crossover: Implemented Order, Cycle, and Position-Based Crossover to generate new candidate contracts through different gene recombination methods.'},
       {zh:'突變演算法（Mutation）：實作 Scramble、Inverse 與 Displacement Mutation，透過調整基因排列增加候選解的多樣性。',en:'Mutation: Implemented Scramble, Inverse, and Displacement Mutation to increase candidate diversity by rearranging genes.'},
       {zh:'結果視覺化（Data Visualization）：將不同演算法策略的實驗結果繪製為成本散佈圖，協助比較供應商與客戶的成本分布及最佳化表現。',en:'Data Visualization: Created cost scatter plots of experimental results across algorithm strategies to compare supplier and customer cost distributions and optimization performance.'}
     ]}
   ],source:'https://github.com/Rdm-Nico/CI_Project/tree/main'},
  {id:'floorplan',group:2,tag:'COMPUTER VISION · OCR',image:'doc-0-2.jpg',
   title:{zh:'平面圖輔助辨識系統',en:'Floor Plan Recognition Assistant'},
   summary:{zh:'運用影像處理與 OCR 辨識超商平面圖中的貨架類別與料號，保留原圖位置供結果標示。',en:'Image processing and OCR for shelf categories and part numbers in store floor plans, preserving coordinates for annotated results.'},
   tools:['Python','OpenCV','Tesseract OCR','TensorFlow / Keras'],
   highlight:{zh:'串接連通元件切割、方向處理、文字辨識與字典校正。',en:'Connected-component segmentation, orientation handling, OCR, and dictionary-based correction.'},
   background:{zh:'平面圖線條密集、文字方向不同，人工辨讀與材料統計耗時，研究以視覺辨識輔助處理。',en:'Dense linework and differently oriented text make manual floor-plan reading and material counting time-consuming.'},
   result:{zh:'歷史簡報記錄類別正確率 80%、類別定位率 100%、料號定位率 27%，約耗時一小時；互動修正與自動材料表仍屬後續工作。',en:'Historical slides report 80% category accuracy, 100% category localization, and 27% part-number localization, taking about one hour. Interactive correction and automated material lists remain future work.'},
   contribution:{zh:'研究 CNN 與 Selective Search 分類路線，以及連通元件、投影切割、Tesseract 與字典校正的文字辨識流程。',en:'Explored CNN classification with Selective Search, and a text-recognition pipeline using connected components, projection segmentation, Tesseract, and dictionary correction.'},source:''},
  {id:'speech',group:2,tag:'BACKEND · SPEECH PROCESSING',image:null,
   title:{zh:'中文語音辨識與合成 API',en:'Chinese Speech Processing API'},
   summary:{zh:'將 Whisper 語音辨識與 gTTS 語音合成封裝為 Flask API，支援錄音轉文字與文字轉 MP3。',en:'A Flask API wrapping Whisper recognition and gTTS synthesis for audio-to-text and text-to-MP3 workflows.'},
   tools:['Python','Flask','Whisper','gTTS','REST API'],
   highlight:{zh:'提供 STT / TTS 端點與 API Key、IP 白名單驗證。',en:'STT / TTS endpoints with API key and IP allowlist checks.'},
   background:{zh:'讓其他應用程式透過 HTTP 使用中文語音處理能力，集中處理模型呼叫與檔案輸入輸出。',en:'Expose Chinese speech processing over HTTP, centralizing model calls and audio file handling.'},
   result:{zh:'完成 API 與檔案處理原型。報告以程式碼檢閱為依據，未驗證正式部署或端對端運行，亦未進行模型訓練。',en:'Implemented the API and file-processing prototype. The report is based on code review; production deployment and end-to-end execution were not verified, and no model training was performed.'},
   contribution:{zh:'整合既有語音模型與套件、API 路由、基本存取限制及獨立音訊上傳測試程式。',en:'Integrated existing models and packages, API routes, basic access restrictions, and a standalone audio-upload test client.'},source:''},
  {id:'asl',group:2,tag:'DEEP LEARNING · OBJECT DETECTION',image:'doc-3-0.jpg',
   title:{zh:'美國手語字母辨識',en:'ASL Alphabet Detection'},
   summary:{zh:'以 YOLOv5 串接 A 至 Z 手勢的資料準備、標註、訓練及圖片與影片推論。',en:'An A–Z hand-gesture detection pipeline using YOLOv5, from data preparation and annotation to image and video inference.'},
   tools:['Python','YOLOv5','PyTorch','Google Colab','Roboflow'],
   highlight:{zh:'26 類字母手勢偵測與混淆矩陣分析。',en:'26 alphabet gesture classes with confusion-matrix analysis.'},
   background:{zh:'以影像辨識將手語字母手勢轉為標籤，探索模型整合與有限運算資源下的訓練配置。',en:'Convert alphabet hand gestures into visual labels and explore training configurations under limited computing resources.'},
   result:{zh:'完成圖片與影片辨識原型，展示字母辨識結果並分析相似手勢誤判。範圍為字母手勢，不包含完整手語句子翻譯。',en:'Produced image and video inference examples and analyzed confusion between similar gestures. The scope is alphabet detection, not full sign-language sentence translation.'},contribution:null,source:''},
  {id:'cnn',group:2,tag:'DEEP LEARNING · EXPERIMENTATION',image:'doc-4-0.jpg',
   title:{zh:'蘋果與貓頭鷹 CNN 模型改進',en:'Iterative CNN Image Classification'},
   summary:{zh:'由二分類基準逐步調整為三分類模型，實驗資料處理、Dropout、影像尺寸與網路深度。',en:'Evolving a binary classifier into a three-class CNN through experiments with preprocessing, dropout, image size, and network depth.'},
   tools:['Python','NNabla','CNN','OpenCV','Selenium'],
   highlight:{zh:'保存的 1,710 張評估影像中，準確率為 97.54%。',en:'97.54% accuracy on 1,710 images in the preserved evaluation records.'},
   background:{zh:'辨識蘋果、貓頭鷹與其他影像，處理二分類模型無法表達「兩者皆非」的情境。',en:'Recognize apples, owls, and other images, addressing cases that do not belong to either original class.'},
   result:{zh:'五層卷積搭配 128 × 128 灰階輸入，1,668 / 1,710 張辨識正確。評估資料包含擴增影像，數值不等同於真實場景的泛化表現。',en:'A five-layer CNN with 128 × 128 grayscale inputs correctly classified 1,668 of 1,710 images. Evaluation includes augmented images and does not establish real-world generalization.'},
   contribution:{zh:'進行資料處理與模型配置實驗，整合單張、批次影像與影片逐影格推論，並分析混淆矩陣。',en:'Experimented with preprocessing and model configurations, integrated single-image, batch, and video-frame inference, and analyzed the confusion matrix.'},source:''},
  {id:'dogs',group:2,tag:'DEEP LEARNING · TRANSFER LEARNING',image:'dogs.jpg',
   title:{zh:'狗品種影像辨識',en:'Dog Breed Image Classification'},
   summary:{zh:'使用 InceptionV3 遷移學習，探索資料切分、最佳化器與 Dropout 對分類訓練的影響。',en:'Exploring InceptionV3 transfer learning with different data splits, optimizers, and dropout settings for dog breed classification.'},
   tools:['Python','InceptionV3','Transfer Learning','Google Colab'],
   highlight:{zh:'比較 Adam、RMSprop、SGD 與不同 Dropout 設定。',en:'Compared Adam, RMSprop, SGD, and different dropout settings.'},
   background:{zh:'以 Stanford Dogs Dataset 為資料來源，透過預訓練模型探索影像分類。',en:'Use the Stanford Dogs Dataset to explore image classification with a pretrained model.'},
   result:{zh:'簡報記錄資料前處理、模型訓練、參數比較與成果展示；未以未核實的數字宣稱最終準確率。',en:'The slides document preprocessing, training, parameter comparisons, and result demonstrations; no unverified final accuracy is claimed.'},
   contribution:{zh:'個人實作範圍與是否為小組專案待補充。',en:'Individual responsibilities and team context are to be added.'},source:''},
  {id:'three',group:2,tag:'WEB GRAPHICS · INTERACTION',image:'doc-1-1.jpg',
   title:{zh:'Three.js 圖學與遊戲機制',en:'Three.js Graphics & Game Mechanics'},
   summary:{zh:'七個瀏覽器互動實作，涵蓋碰撞模擬、角色動畫、鍵盤控制、群體移動與路徑跟隨。',en:'Seven browser-based experiments covering collisions, character animation, keyboard controls, flocking, and path following.'},
   tools:['JavaScript','Three.js','HTML / CSS','WebGL'],
   highlight:{zh:'從 HW0 到 HW6，將幾何與向量運算轉為互動場景。',en:'HW0–HW6 translate geometry and vector calculations into interactive scenes.'},
   background:{zh:'逐步探索即時場景建置、物件運動、動畫狀態與空間判斷，建立瀏覽器圖學基礎。',en:'Explore real-time scenes, object movement, animation states, and spatial reasoning in browser graphics.'},
   result:{zh:'完成七個獨立作品，包括火車動畫、圓盤碰撞、角色控制、避障與 BSP 判斷。作品定位為圖學與遊戲機制實作集合。',en:'Seven independent demos include train animation, disc collisions, character controls, obstacle avoidance, and BSP logic, forming a collection of graphics and game-mechanics experiments.'},
   contribution:{zh:'實作場景、幾何建模、貼圖、動畫更新、輸入控制及代理者移動邏輯。',en:'Implemented scenes, geometry, textures, animation updates, input controls, and agent movement logic.'},source:'https://github.com/norwellin/game-programming'},
  {id:'elevator',group:3,tag:'TATUNG UNIVERSITY · BACHELOR’S CAPSTONE',image:'elevator.jpg',
   title:{zh:'智慧防疫電梯系統',en:'Contactless Smart Elevator System'},
   summary:{zh:'結合非接觸式電梯控制與排班模擬，探索減少接觸操作與兼顧等待時間、能源使用的方法。',en:'Combining contactless elevator controls and scheduling simulations to reduce physical contact and explore waiting-time and energy trade-offs.'},
   tools:['Computer Vision','IoT','Scheduling','Multithreading'],
   highlight:{zh:'整合手勢、人臉辨識與電梯模擬演算法。',en:'Integrated gesture and face recognition with elevator scheduling simulations.'},
   background:{zh:'傳統電梯需要觸碰按鈕，排班效率亦影響乘客等待與能源消耗。團隊開發非接觸控制與軟體排班兩部分。',en:'Traditional elevators require button contact, while scheduling affects passenger waiting and energy use. The team developed contactless controls and scheduling software.'},
   result:{zh:'完成非接觸式控制與排班模擬，依人流情境切換省電及效率模式，並處理多執行緒共享資料的競爭問題。',en:'Implemented contactless controls and scheduling simulations with energy-saving and efficiency modes, and addressed race conditions in shared multithreaded data.'},
   contribution:{zh:'依報告分工表，共同負責資料蒐集、手勢辨識、人臉辨識、電梯介面與電梯模擬演算法。',en:'According to the report’s responsibility table, jointly contributed to research, gesture recognition, face recognition, the elevator interface, and scheduling simulation algorithms.'},source:''}
];
window.SKILLS = [
  {title:{zh:'程式語言',en:'Programming Languages'},items:'Python · Java · JavaScript · C / C++'},
  {title:{zh:'測試與品質工程',en:'Testing & Quality Engineering'},items:'Playwright · Selenium · pytest · GUI Testing'},
  {title:{zh:'機器學習與電腦視覺',en:'Machine Learning & Computer Vision'},items:'TensorFlow / Keras · PyTorch · YOLOv5 · CNN · InceptionV3 · NNabla · OpenCV'},
  {title:{zh:'文字與語音處理',en:'Text & Speech Processing'},items:'Tesseract OCR · Whisper (STT) · gTTS (TTS)'},
  {title:{zh:'資料庫與資料工程',en:'Databases & Data Engineering'},items:'SQL · MySQL · JDBC · phpMyAdmin · ETL · Matplotlib'},
  {title:{zh:'網頁、後端與工具',en:'Web, Backend & Tools'},items:'HTML / CSS · Three.js · Flask · FastAPI · Chrome Extensions · Git · Docker'}
];
window.EDUCATION = [
  {dates:'2024.09 — 2026.08',school:{zh:'Hochschule für Technik Stuttgart',en:'Hochschule für Technik Stuttgart'},degree:{zh:'Software Technology 碩士 · 德國',en:'Master’s degree in Software Technology · Germany'}},
  {dates:'2022.09 — 2026.08',school:{zh:'大同大學',en:'Tatung University'},degree:{zh:'資訊工程學系 碩士 · 台灣',en:'Master’s degree in Computer Science and Engineering · Taiwan'}},
  {dates:'2018.09 — 2022.08',school:{zh:'大同大學',en:'Tatung University'},degree:{zh:'資訊工程學系 學士 · 台灣',en:'Bachelor’s degree in Computer Science and Engineering · Taiwan'}}
];
