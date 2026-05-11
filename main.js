/* Dunhuang Digital Micro-Museum
   Added features:
   1. Every main image can be opened in a lightbox.
   2. Language switcher: Simplified Chinese, Traditional Chinese and English.
*/

document.addEventListener("DOMContentLoaded", () => {
  const textMap = {
    "Dunhuang Digital Micro-Museum": "敦煌数字微型博物馆",
    "Online Exhibition": "线上展览",
    "Home": "首页",
    "Exhibition": "展览",
    "Murals": "壁画",
    "Caves": "洞窟",
    "Gallery": "图库",
    "Timeline": "时间线",
    "Visit": "参观",
    "Exhibition overview": "展览概览",
    "Image gallery": "图片图库",
    "Historical timeline": "历史时间线",
    "Mural collection": "壁画收藏",
    "Cave spaces": "洞窟空间",
    "Booking prototype": "预约原型",
    "Open image": "打开图片",
    "Close image": "关闭图片",
    "Artwork image": "艺术图片",
    "Expanded artwork view": "放大的艺术图片",

    "Dunhuang: art, belief and the Silk Road": "敦煌：艺术、信仰与丝绸之路",
    "This website presents Dunhuang as a meeting point of image, architecture, travel and devotion. It is designed as a formal museum-style digital exhibition with clear navigation, curated sections, real Dunhuang images and interactive features.": "本网站把敦煌呈现为图像、建筑、旅程与信仰交汇的地点。它以正式的博物馆风格设计，包含清晰导航、策展式内容、真实敦煌图片和互动功能。",
    "Explore the Exhibition": "探索展览",
    "Open the Gallery": "打开图库",
    "Featured image: exterior view of the Mogao Caves.": "精选图片：莫高窟外观。",
    "Introduction": "简介",
    "A formal museum-style homepage": "正式博物馆风格首页",
    "The homepage introduces the exhibition through a clear visual hierarchy, structured navigation and curated content blocks. It uses real images from Dunhuang-related Wikimedia Commons sources to make the project feel closer to a real museum website.": "首页通过清晰的视觉层级、结构化导航和策展式内容模块介绍展览，并使用来自维基共享资源的真实敦煌相关图片，让项目更接近真实的博物馆网站。",
    "Featured stories": "精选故事",
    "See the full exhibition →": "查看完整展览 →",
    "Featured exhibition": "精选展览",
    "Mogao Caves": "莫高窟",
    "Discover the cliff-side cave complex that preserves centuries of architecture, murals and sacred imagery along the Silk Road.": "探索这座位于崖壁上的洞窟群，它保存了丝绸之路沿线数百年的建筑、壁画与神圣图像。",
    "Explore": "探索",
    "Collection spotlight": "馆藏焦点",
    "Cave 159 musicians": "第159窟乐伎",
    "A closer look at painted movement, rhythm and ceremonial presence in one of Dunhuang’s mural spaces.": "近距离观看敦煌壁画空间中的动态、节奏与仪式感。",
    "Gallery preview": "图库预览",
    "Cave 275 mural": "第275窟壁画",
    "Enter the image gallery to view a full-screen version and explore details in a lightbox layout.": "进入图片图库，以全屏方式观看图像，并通过灯箱布局探索细节。",
    "Open gallery": "打开图库",
    "Curatorial Statement": "策展说明",
    "Why Dunhuang matters": "敦煌为何重要",
    "Dunhuang stands at the intersection of religion, exchange and artistic production. This site introduces Dunhuang not only as a historical location, but also as a visual and cultural archive shaped by movement across regions and centuries.": "敦煌位于宗教、交流与艺术生产的交汇处。本网站不仅把敦煌介绍为历史地点，也把它呈现为由跨地域、跨世纪流动所塑造的视觉与文化档案。",

    "Exhibition Overview": "展览概览",
    "The many layers of Dunhuang": "敦煌的多重层次",
    "This exhibition presents Dunhuang as a living archive of cultural encounter. Instead of focusing on only one kind of object, the website introduces murals, caves, manuscripts, colour systems, architecture and stories of exchange along the Silk Road.": "本展览把敦煌呈现为文化相遇的鲜活档案。网站不只关注单一文物，而是介绍壁画、洞窟、文书、色彩系统、建筑以及丝绸之路上的交流故事。",
    "Curatorial Concept": "策展概念",
    "A digital route through image and space": "穿越图像与空间的数字路线",
    "Visitors begin with a broad introduction, then move through focused thematic sections. This sequence imitates a museum narrative: orientation, encounter, interpretation and participation.": "观众先从整体介绍开始，再进入更集中的主题分区。这个顺序模拟博物馆叙事：导览、相遇、解读与参与。",
    "Featured artwork: mural from Cave 61.": "精选作品：第61窟壁画。",
    "Featured Sections": "精选分区",
    "Exhibition highlights": "展览亮点",
    "Painted Worlds": "绘画世界",
    "Narrative scenes, celestial figures and decorative patterns create a rich visual rhythm.": "叙事场景、天界人物与装饰纹样共同形成丰富的视觉节奏。",
    "Go to Murals →": "前往壁画 →",
    "Sacred Interiors": "神圣室内空间",
    "Cave spaces shape movement, contemplation and the experience of viewing.": "洞窟空间塑造人的移动、凝视与观看体验。",
    "Go to Caves →": "前往洞窟 →",
    "Stories of Travel": "旅程故事",
    "Murals preserve journeys, devotion and cross-cultural exchange along the Silk Road.": "壁画保存了丝绸之路上的旅程、信仰与跨文化交流。",
    "Open Gallery →": "打开图库 →",
    "Interpretive Structure": "解读结构",
    "Suggested visitor journey": "建议参观路线",
    "1. Orientation": "1. 导览",
    "Start with the homepage to understand the exhibition’s identity and main entry points.": "从首页开始，了解展览主题和主要入口。",
    "2. Encounter": "2. 相遇",
    "Explore focused sections such as murals and caves for more detailed content.": "浏览壁画、洞窟等重点分区，了解更详细内容。",
    "3. Context": "3. 脉络",
    "Connect artworks with religion, movement, architecture and the Silk Road environment.": "把作品与宗教、流动、建筑和丝绸之路环境联系起来。",
    "4. Participation": "4. 参与",
    "Use the visit page as a model for guided tours, bookings or learning programmes.": "使用参观页面作为导赏、预约或学习活动的原型。",

    "Visual language in Dunhuang mural art": "敦煌壁画艺术中的视觉语言",
    "This section presents Dunhuang murals through a collection-style layout. Visitors can browse themes such as figures, colour and storytelling in a structured and readable interface.": "本分区以收藏展示的方式呈现敦煌壁画。观众可在结构清晰、易读的界面中浏览人物、色彩和叙事等主题。",
    "Collection Browser": "馆藏浏览",
    "Browse mural themes": "浏览壁画主题",
    "All": "全部",
    "Figures": "人物",
    "Colour": "色彩",
    "Storytelling": "叙事",
    "Musicians and attendants": "乐伎与侍从",
    "Flowing movement and elegant gesture create a sense of sacred rhythm and performance.": "流动的姿态与优雅手势营造出神圣节奏和表演感。",
    "Earth and mineral tones": "土色与矿物色调",
    "Warm mineral pigments and layered surfaces contribute to the distinctive palette of Dunhuang murals.": "温暖的矿物颜料与层叠表面构成敦煌壁画独特的色彩。",
    "Travel narratives": "旅程叙事",
    "Murals guide viewers through episodes of movement, devotion and historical memory.": "壁画引导观众进入关于流动、信仰与历史记忆的片段。",
    "Human presence in painted space": "绘画空间中的人物存在",
    "Scenes preserve traces of social life, patronage and devotional participation.": "画面保存了社会生活、供养关系与信仰参与的痕迹。",
    "Weathered surfaces": "风化的表面",
    "Even damaged murals reveal the enduring strength of colour, line and iconographic form.": "即使受损，壁画仍显示出色彩、线条与图像形式的持久力量。",
    "Continuity across walls": "墙面之间的连续性",
    "Repeated motifs and directional lines support a unified reading across painted surfaces.": "重复母题与方向性线条支持观众对整个绘画表面的统一阅读。",

    "Architecture, devotion and preservation": "建筑、信仰与保护",
    "The cave setting is essential to understanding Dunhuang. These spaces are not only containers for art, but environments that shape movement, atmosphere, scale and the act of viewing.": "洞窟环境是理解敦煌的关键。这些空间不仅是艺术的容器，也塑造移动、氛围、尺度和观看行为。",
    "Context": "背景",
    "More than walls and chambers": "不只是墙壁与洞室",
    "The cave environment creates a relationship between visitor and image. Murals wrap around architecture, sculpture occupies space, and the act of entering becomes part of interpretation.": "洞窟环境建立了观众与图像之间的关系。壁画环绕建筑，雕塑占据空间，而进入洞窟本身也成为解读的一部分。",
    "Exterior view of the cliffside cave complex.": "崖壁洞窟群的外观。",
    "Chronology": "年代脉络",
    "A simplified timeline": "简化时间线",
    "Early development": "早期发展",
    "Dunhuang grows as an important site on routes of travel, exchange and religious circulation.": "敦煌逐渐成为旅行、交流与宗教传播路线上的重要地点。",
    "Expansion of cave production": "洞窟营造扩展",
    "More caves are created and decorated, reflecting changing artistic styles and patrons.": "更多洞窟被开凿和装饰，反映出艺术风格与供养者的变化。",
    "Layered visual culture": "层叠的视觉文化",
    "Images, scripts and architectural details accumulate across generations and communities.": "图像、文字与建筑细节在不同世代和群体中持续累积。",
    "Modern preservation": "现代保护",
    "Today the site is studied, documented and protected as an important heritage environment.": "今天，该遗址作为重要文化遗产环境被研究、记录和保护。",
    "Featured Cave Types": "精选洞窟类型",
    "Interpreting sacred space": "解读神圣空间",
    "Meditative Chambers": "冥想洞室",
    "Smaller spaces create intimacy and encourage focused looking and quiet reflection.": "较小空间营造亲密感，鼓励专注观看与安静思考。",
    "Image-Rich Interiors": "图像丰富的内部空间",
    "Painted surfaces transform architecture into a fully immersive visual environment.": "绘画表面把建筑转化为沉浸式视觉环境。",
    "Sites of Memory": "记忆之地",
    "Objects, inscriptions and artistic choices preserve traces of belief and exchange.": "物件、题记与艺术选择保存了信仰和交流的痕迹。",

    "Interactive Gallery": "互动图库",
    "Search and open artworks": "搜索并打开作品",
    "This page adds two functions: a keyword search bar and a lightbox viewer for larger images.": "此页面加入两个功能：关键词搜索栏和用于查看大图的灯箱。",
    "Cave 159": "第159窟",
    "Musicians": "乐伎",
    "A detailed mural scene that highlights movement, costume and performance.": "一幅细节丰富的壁画场景，突出动作、服饰与表演。",
    "Cave 275": "第275窟",
    "Painted figure": "绘画人物",
    "An example of early iconographic and stylistic development in Dunhuang cave art.": "展示敦煌洞窟艺术早期图像与风格发展的例子。",
    "Travel narrative": "旅程叙事",
    "Xuanzang returning from India": "玄奘自印度归来",
    "A famous narrative mural showing movement, memory and the transmission of Buddhism.": "著名叙事壁画，表现移动、记忆和佛教传播。",
    "Cave 61": "第61窟",
    "Mount Wutai monasteries": "五台山寺院图",
    "An important mural scene that connects painted space, pilgrimage and architecture.": "连接绘画空间、朝圣与建筑的重要壁画场景。",
    "Exterior": "外观",
    "Cliffside chambers": "崖壁洞室",
    "A broad view of the cave complex that helps explain the architectural setting.": "洞窟群的整体视图，有助于说明其建筑环境。",
    "Exterior mural": "外部壁画",
    "Weathered exposed mural": "风化外露壁画",
    "An exposed mural surface that reveals both historical beauty and conservation challenges.": "外露壁画表面同时展现历史之美与保护挑战。",

    "Interactive Timeline": "互动时间线",
    "Filter key periods of Dunhuang history": "筛选敦煌历史关键时期",
    "This page adds a second new function: users can filter the timeline by historical era.": "此页面加入第二个新功能：用户可以按历史时期筛选时间线。",
    "Early caves": "早期洞窟",
    "Tang period": "唐代时期",
    "Later development": "后期发展",
    "4th century onwards": "4世纪以后",
    "Early cave creation begins as Dunhuang develops into an important religious and cultural site.": "随着敦煌发展为重要宗教与文化地点，早期洞窟开始形成。",
    "7th–9th centuries": "7至9世纪",
    "The Tang period sees major artistic production, richer mural cycles and expanded cultural exchange.": "唐代见证了重要的艺术生产、更丰富的壁画体系和更广泛的文化交流。",
    "Xuanzang and Buddhist imagination": "玄奘与佛教想象",
    "Travel narratives and Buddhist transmission appear in the visual language of cave murals.": "旅行叙事和佛教传播出现在洞窟壁画的视觉语言中。",
    "10th century and beyond": "10世纪及以后",
    "Painted programs, architecture and inscriptions continue to layer meaning across generations.": "绘画方案、建筑与题记继续在不同世代中叠加意义。",
    "Modern preservation era": "现代保护时期",
    "Conservation, research and digital documentation now help preserve the site for future audiences.": "保护、研究与数字记录正帮助遗址面向未来观众持续保存。",
    "Travel and memory": "旅程与记忆",
    "Visual narratives reveal how journey, devotion and teaching were remembered in painted form.": "视觉叙事揭示了旅程、信仰与教导如何以绘画形式被记住。",
    "Landscape and belief": "景观与信仰",
    "Mural compositions link sacred places, imagined geographies and devotional practice.": "壁画构图连接神圣地点、想象地理与信仰实践。",
    "Architecture through time": "时间中的建筑",
    "The cliffside environment shows how built form and painted space developed together.": "崖壁环境展示了建筑形式与绘画空间如何共同发展。",

    "Plan your journey through the exhibition": "规划你的展览旅程",
    "This page works as a prototype for museum visits, guided learning sessions or event booking. It includes a responsive schedule layout and an HTML5 form.": "此页面是博物馆参观、导赏学习或活动预约的原型，包含响应式日程布局和 HTML5 表单。",
    "Programme": "活动安排",
    "Today's featured routes": "今日精选路线",
    "Morning Intro Tour": "上午入门导览",
    "Time:": "时间：",
    "Focus:": "重点：",
    "Type:": "类型：",
    "Museum overview and key highlights": "博物馆概览与重点亮点",
    "General audience": "普通观众",
    "Murals Spotlight": "壁画焦点",
    "Colour, composition and symbolism": "色彩、构图与象征",
    "Visual culture session": "视觉文化课程",
    "Cave Architecture Talk": "洞窟建筑讲座",
    "Space, preservation and context": "空间、保护与背景",
    "Guided interpretation": "导赏解读",
    "Student Workshop": "学生工作坊",
    "Exhibition design and storytelling": "展览设计与叙事",
    "School / university groups": "学校 / 大学团体",
    "Booking Form": "预约表格",
    "Reserve a slot": "预约时段",
    "Full name": "姓名",
    "Email": "电邮",
    "Group size": "团体人数",
    "Select a route": "选择路线",
    "Choose one": "请选择",
    "Special request": "特别要求",
    "This is a prototype booking form for the project demo.": "这是项目演示用的预约表单原型。",
    "Submit Request": "提交预约",
    "Visitor Information": "参观信息",
    "Before you come": "来访前须知",
    "Recommended visit duration: 45–60 minutes": "建议参观时长：45–60分钟",
    "Suitable for students, tourists and art enthusiasts": "适合学生、游客和艺术爱好者",
    "Can be adapted into a real museum or school exhibition project": "可改造为真实博物馆或学校展览项目",
    "Responsive layout also works well on mobile devices": "响应式布局也适合手机设备",
    "Site purpose": "页面用途",
    "The visit page shows that the website is not only visual, but also practical. It supports information design, navigation and user interaction.": "参观页面说明网站不仅具有视觉展示功能，也具备实用性，支持信息设计、导航与用户互动。",

    "Free entry": "免费进入",
    "Dunhuang Digital Micro-Museum Online Exhibition Project Cultural Heritage Theme": "敦煌数字微型博物馆 线上展览项目 文化遗产主题",
    "Opening hours": "开放时间",
    "Website access: 24 hours Demo available: Daily Best viewed on desktop and mobile": "网站访问：24小时 演示开放：每日 建议使用桌面端和手机浏览",
    "About": "关于",
    "Resources": "资源",
    "Contact": "联系",
    "Dunhuang Academy": "敦煌研究院",
    "UNESCO World Heritage": "联合国教科文组织世界遗产",
    "Google Arts & Culture": "Google 艺术与文化",
    "Wikimedia Commons": "维基共享资源",
    "Map reference": "地图参考",
    "Email us": "给我们发邮件",
    "Project team": "项目团队",
    "Course information": "课程信息",
    "Accessibility": "无障碍",
    "Feedback": "反馈",
    "Privacy policy": "隐私政策",
    "Cookies": "Cookies",
    "Accessibility statement": "无障碍声明",
    "Terms of use": "使用条款",
    "© 2026 Dunhuang Digital Micro-Museum · DIT4107 / DMT4747 Group Project": "© 2026 敦煌数字微型博物馆 · DIT4107 / DMT4747 小组项目",

    "Search by keyword, for example musicians, cave, Xuanzang, exterior": "按关键词搜索，例如：乐伎、洞窟、玄奘、外观",
    "Enter your full name": "请输入你的姓名",
    "Enter your email": "请输入你的电邮",
    "Optional note for accessibility or group learning needs": "可填写无障碍或团体学习需求",
    "Thank you. Your visit request has been recorded locally for the prototype.": "谢谢。你的参观申请已在本地原型中记录。"
  };

  const traditionalMap = [
    ["数字", "數碼"], ["图像", "圖像"], ["图片", "圖片"], ["图库", "圖庫"], ["时间线", "時間線"],
    ["展览", "展覽"], ["线上", "網上"], ["馆", "館"], ["术", "術"], ["艺", "藝"],
    ["画", "畫"], ["图", "圖"], ["数", "數"], ["线", "線"], ["览", "覽"],
    ["众", "眾"], ["简", "簡"], ["层", "層"], ["览", "覽"], ["墙", "牆"],
    ["与", "與"], ["发", "發"], ["体", "體"], ["实", "實"], ["项", "項"],
    ["团", "團"], ["队", "隊"], ["课", "課"], ["联", "聯"], ["络", "絡"],
    ["资", "資"], ["源", "源"], ["隐", "隱"], ["私", "私"], ["条", "條"],
    ["款", "款"], ["导", "導"], ["学", "學"], ["习", "習"], ["应", "應"],
    ["写", "寫"], ["电邮", "電郵"], ["颜色", "顏色"], ["色彩", "色彩"], ["风", "風"],
    ["义", "義"], ["为", "為"], ["处", "處"], ["开", "開"], ["关", "關"],
    ["复", "複"], ["观", "觀"], ["坛", "壇"], ["构", "構"], ["筑", "築"],
    ["护", "護"], ["遗", "遺"], ["产", "產"], ["书", "書"], ["圣", "聖"],
    ["馆藏", "館藏"], ["内", "內"], ["间", "間"], ["动", "動"], ["线", "線"],
    ["层", "層"], ["览", "覽"], ["墙", "牆"], ["极", "極"], ["扩", "擴"],
    ["码", "碼"], ["虑", "慮"], ["响", "響"], ["览", "覽"], ["寻", "尋"],
    ["风化", "風化"], ["东", "東"], ["丝绸", "絲綢"], ["窟", "窟"], ["敦煌", "敦煌"]
  ];

  function toTraditional(text) {
    let result = text;
    traditionalMap.forEach(([s, t]) => { result = result.split(s).join(t); });
    return result;
  }

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function translateText(englishText, lang) {
    const normalized = normalizeText(englishText);
    if (lang === "en") return normalized;
    const simplified = textMap[normalized] || normalized;
    return lang === "zh-Hant" ? toTraditional(simplified) : simplified;
  }

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      siteNav.classList.toggle("open");
    });
  }

  const navLinks = document.querySelectorAll(".site-nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) link.classList.add("active");
    link.addEventListener("click", () => {
      if (siteNav) siteNav.classList.remove("open");
    });
  });

  function createLanguageSwitcher() {
    const headerInner = document.querySelector(".header-inner");
    if (!headerInner || document.querySelector(".language-switcher")) return;

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language selector");
    switcher.innerHTML = `
      <button type="button" data-lang="zh-Hans">简中</button>
      <button type="button" data-lang="zh-Hant">繁中</button>
      <button type="button" data-lang="en">English</button>
    `;
    headerInner.appendChild(switcher);
  }

  createLanguageSwitcher();

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest(".lightbox-caption")) return NodeFilter.FILTER_REJECT;
      return normalizeText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    textNodes.push({ node, original: normalizeText(node.nodeValue) });
  }

  const attrItems = [];
  document.querySelectorAll("[placeholder], [aria-label], option").forEach(el => {
    if (el.hasAttribute("placeholder")) attrItems.push({ el, attr: "placeholder", original: normalizeText(el.getAttribute("placeholder")) });
    if (el.hasAttribute("aria-label")) attrItems.push({ el, attr: "aria-label", original: normalizeText(el.getAttribute("aria-label")) });
    if (el.tagName === "OPTION") attrItems.push({ el, attr: "text", original: normalizeText(el.textContent) });
  });

  function applyLanguage(lang) {
    document.documentElement.lang = lang === "en" ? "en" : (lang === "zh-Hant" ? "zh-Hant" : "zh-Hans");
    document.body.setAttribute("data-language", lang);

    textNodes.forEach(item => {
      const translated = translateText(item.original, lang);
      item.node.nodeValue = translated;
    });

    attrItems.forEach(item => {
      const translated = translateText(item.original, lang);
      if (item.attr === "text") item.el.textContent = translated;
      else item.el.setAttribute(item.attr, translated);
    });

    document.querySelectorAll(".language-switcher button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.querySelectorAll(".image-open-badge").forEach(badge => {
      badge.textContent = translateText("Open image", lang);
    });
  }

  document.querySelectorAll(".language-switcher button").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("dunhuangLanguage", lang);
      applyLanguage(lang);
    });
  });

  function ensureLightbox() {
    let lightbox = document.querySelector("#lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.id = "lightbox";
      lightbox.innerHTML = `
        <button class="lightbox-close" id="lightbox-close" aria-label="Close image">×</button>
        <div class="lightbox-inner">
          <img id="lightbox-img" src="" alt="Expanded artwork view">
          <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
      `;
      document.body.appendChild(lightbox);
    }
    return lightbox;
  }

  const lightbox = ensureLightbox();
  const lightboxImg = document.querySelector("#lightbox-img");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const lightboxClose = document.querySelector("#lightbox-close");

  function openLightbox(src, alt, caption) {
    if (!lightbox || !lightboxImg || !lightboxCaption) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || translateText("Artwork image", localStorage.getItem("dunhuangLanguage") || "en");
    lightboxCaption.textContent = caption || alt || "";
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
    if (lightboxImg) lightboxImg.src = "";
  }

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  function enhanceAllImages() {
    const mainImages = document.querySelectorAll("main img:not(#lightbox-img)");
    mainImages.forEach(img => {
      if (img.closest(".lightbox") || img.closest(".image-open-wrap")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "image-open-wrap";
      wrapper.setAttribute("role", "button");
      wrapper.setAttribute("tabindex", "0");
      wrapper.setAttribute("aria-label", "Open image");

      const parent = img.parentNode;
      parent.insertBefore(wrapper, img);
      wrapper.appendChild(img);

      const badge = document.createElement("span");
      badge.className = "image-open-badge";
      badge.textContent = translateText("Open image", localStorage.getItem("dunhuangLanguage") || "en");
      wrapper.appendChild(badge);

      const src = img.currentSrc || img.src;
      const alt = img.alt || "Artwork image";
      const caption = img.closest("article, .panel, .hero-photo-card, .photo-feature-card")?.querySelector("h3, .hero-caption, .image-credit, .photo-feature-caption")?.textContent?.trim() || alt;

      wrapper.addEventListener("click", () => openLightbox(src, alt, caption));
      wrapper.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(src, alt, caption);
        }
      });
    });
  }

  enhanceAllImages();

  const modalButtons = document.querySelectorAll("[data-modal-img]");
  modalButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(btn.dataset.modalImg, btn.dataset.modalAlt || "Artwork image", btn.dataset.modalCaption || "");
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.15 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("show"));
  }

  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const galleryItems = document.querySelectorAll("[data-category]");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const selected = button.dataset.filterBtn;
      galleryItems.forEach(item => {
        if (selected === "all" || item.dataset.category === selected) item.classList.remove("hide");
        else item.classList.add("hide");
      });
    });
  });

  const visitForm = document.querySelector("#visit-form");
  const formStatus = document.querySelector("#form-status");
  if (visitForm && formStatus) {
    visitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = localStorage.getItem("dunhuangLanguage") || "en";
      formStatus.classList.add("show");
      formStatus.textContent = translateText("Thank you. Your visit request has been recorded locally for the prototype.", lang);
      visitForm.reset();
    });
  }

  const searchInput = document.querySelector("#gallery-search");
  const searchableCards = document.querySelectorAll("[data-search]");
  if (searchInput && searchableCards.length) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.trim().toLowerCase();
      searchableCards.forEach(card => {
        const haystack = card.dataset.search.toLowerCase();
        card.style.display = haystack.includes(term) ? "block" : "none";
      });
    });
  }

  const tabButtons = document.querySelectorAll("[data-era-btn]");
  const timelineCards = document.querySelectorAll("[data-era]");
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const selected = button.dataset.eraBtn;
      timelineCards.forEach(card => {
        if (selected === "all" || card.dataset.era === selected) card.classList.remove("hide");
        else card.classList.add("hide");
      });
    });
  });

  const savedLanguage = localStorage.getItem("dunhuangLanguage") || "en";
  applyLanguage(savedLanguage);
});
