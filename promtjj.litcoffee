# 林嘉敏个人网站开发上下文 (Context for Claude)

## 1. 项目背景与目标
这是一个个人作品集网站（Portfolio），主要目的是展示站长的双重职业身份与跨界能力：“视觉内容创作者 (Content Creator)”与“商业运营者 (Business Operator)”。
目前网站已经实现了 HTML、CSS 和 JavaScript 的代码分离，具备极简风格的 UI 和首屏动效。

## 2. 站长个人画像 (重点文案信息)
在后续生成代码或文案时，请严格基于以下真实背景：
* **基本信息**：林嘉敏 (Lin Jiamin)
* **教育背景**：石河子大学 新媒体与传播专业 硕士在读（2027届）。
* **职业经历**：
  1. 现任：特斯拉 (Tesla) 大客户运营（主导商业拓展、活动统筹、品牌合作）。
  2. 曾任：3年市级新媒体记者（擅长新闻报道、深度访谈、视觉叙事）。
* **核心技能**：AI 内容创作 (AIGC)、纪录片策划、短视频编导、摄影与视觉设计、大客户管理 (KA)、线下展会统筹。
* **代表作品 (需重点展示)**：
  * **影像创作类**：
    * 毕设纪录片《一脉火龙》（非遗传承挖掘、剧本与拍摄策划）
    * AI 动画短片《月光光》（客家童年记忆与乡愁故事，获全国即梦 AI 大赛获奖）
    * 剧情短片《宿舍受骗记》（小成品微短剧，获中国好创意河马杯最佳导演奖）
  * **商业运营类**：
    * 商业策划：特斯拉车队租赁短视频运营方案
    * 线下统筹：深圳星河双子塔车展策划及宣发物料统筹

## 3. 网站视觉与交互规范
* **主色调**：
  * 背景色 (Soft Green): `#f0f4f2`
  * 文本色 (Deep Blue): `#1a3a5f`
  * 强调色: `#2a5a8a`
* **字体**：标题使用 `Playfair Display`（衬线体，体现质感），正文使用 `Inter`（无衬线体，保证可读性）。
* **核心交互**：首屏 Hero 区有 10 个漂浮的关键词，当鼠标悬停在中心区域时，关键词会自动分为左右两列。

## 4. 当前基础 HTML 结构 (index.html)
请基于以下 HTML 结构进行后续的开发与修改（样式和脚本已分别在 `style.css` 和 `script.js` 中维护）：

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>林嘉敏 | 个人作品集</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav>
        <div class="logo">LJ.</div>
        <div class="nav-links">
            <a href="#about">About Me</a>
            <a href="#work">Work & Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <div class="hero" id="hero">
        <div class="trigger-zone" id="trigger"></div>
        <div class="center-content">
            <h1>林嘉敏 <br> <span style="font-size: 3rem; font-weight: 300;">Lin Jiamin</span></h1>
            <p>Content Creator & Business Operator</p>
        </div>
        <div id="keywords-container"></div>
    </div>

    <section id="about">
        <h2>About Me</h2>
        <div class="grid">
            <div style="display: flex; flex-direction: column; justify-content: center;">
                <p style="font-size: 1.3rem; font-weight: 500; margin-bottom: 1.5rem;">你好，我是林嘉敏。</p>
                <p style="margin-bottom: 1rem;">我目前在石河子大学攻读新媒体与传播专业硕士。在成为特斯拉的大客户运营之前，我曾拥有三年的市级新媒体记者经验。这种跨界的职业轨迹，让我擅长在“视觉叙事”与“商业落地”之间搭建桥梁。</p>
                <p>工作之外，我是一个重度的 AI 探索者，也热爱摄影、电影与旅行。从策划非遗传承纪录片《一脉火龙》，到创作承载客家记忆的 AI 动画短片《月光光》，我始终致力于用前沿技术拓展内容创作的边界。</p>
            </div>
            <div class="content-box profile-img-box" style="min-height: 400px; display: flex; align-items: center; justify-content: center; color: rgba(26,58,95,0.4); font-style: italic;">
                [此处放个人形象照]
            </div>
        </div>
    </section>

    <section id="work">
        <h2>Work & Skills</h2>
        <div class="grid">
            <div class="content-box">
                <h3>职业经历</h3>
                <ul>
                    <li><strong>大客户运营 @ 特斯拉 (Tesla)</strong><br><span style="font-size: 0.9rem; opacity: 0.8;">商业拓展 / 活动统筹 / 品牌合作</span></li>
                    <li><strong>市级新媒体记者 (3年)</strong><br><span style="font-size: 0.9rem; opacity: 0.8;">新闻报道 / 深度访谈 / 视觉叙事</span></li>
                    <li><strong>硕士在读 @ 石河子大学</strong><br><span style="font-size: 0.9rem; opacity: 0.8;">新媒体与传播专业 (2027届)</span></li>
                </ul>
            </div>
            <div class="content-box">
                <h3>核心技能</h3>
                <div style="margin-top: 1rem;">
                    <span class="tag">AI 内容创作 (AIGC)</span>
                    <span class="tag">纪录片策划</span>
                    <span class="tag">短视频编导</span>
                    <span class="tag">摄影与视觉设计</span>
                    <span class="tag">大客户管理 (KA)</span>
                    <span class="tag">线下展会统筹</span>
                    <span class="tag">活动方案策划</span>
                </div>
            </div>
        </div>
    </section>

    <section id="projects">
        <h2>Selected Projects</h2>
        <div class="grid">
            <div class="content-box">
                <h3>01. 商业运营与策划</h3>
                <p style="margin-bottom: 1rem; font-size: 0.95rem;"><strong>深圳星河双子塔车展策划 (特斯拉)</strong></p>
                <p style="font-size: 0.9rem; opacity: 0.8;">主导前期活动宣发与海报物料制作，统筹现场资源，将品牌理念转化为切实的线下体验与客户连接。</p>
            </div>
            <div class="content-box">
                <h3>02. 独立影像与 AI 创作</h3>
                <p style="margin-bottom: 0.5rem; font-size: 0.95rem;"><strong>纪录片《一脉火龙》</strong></p>
                <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 1rem;">深入挖掘传统民俗，主导剧本框架与拍摄策划。</p>
                <p style="margin-bottom: 0.5rem; font-size: 0.95rem;"><strong>AI 动画短片《月光光》</strong></p>
                <p style="font-size: 0.9rem; opacity: 0.8;">探索前沿 AIGC 技术，讲述承载客家童年记忆的乡愁故事。</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Let's Connect</h2>
        <p>随时欢迎交流：视觉创作、AI 探索或商业合作。</p>
        <p style="margin-top: 1rem; font-weight: 500;">Email: <a href="mailto:979855416@qq.com" style="color: var(--accent-color); text-decoration: none;">979855416@qq.com</a></p>
    </section>

    <footer>
        &copy; 2026 林嘉敏 (Lin Jiamin). All rights reserved.
    </footer>

    <script src="script.js"></script>
</body>
</html>

## 5. 给 Claude 的第一步执行指令 (复制以下这段发给 Claude 即可)

请阅读上方的上下文。我的代码已经实现了 HTML、CSS 和 JS 分离。现在，请根据第 2 节中更新的【代表作品】列表（包含最新获奖信息），帮我重新设计并编写 `<section id="projects">` 的 HTML 代码以及配套的 CSS。

具体设计要求：
1. 请为每个作品设计一个独立的卡片（Card）。
2. 卡片上方预留放置封面图的区域。封面图容器请务必使用 CSS 的 `aspect-ratio: 16 / 9;` 属性，以完美适配我的影像类作品截图，背景可以用浅色并加上“16:9 封面图占位”的斜体文字。
3. 卡片下方展示项目名称、简介，并将“全国即梦 AI 大赛获奖”和“中国好创意河马杯最佳导演奖”等高光信息做成醒目的小标签（Tag）样式。
4. 保持整体 UI 的极简和高级感，契合当前设定的色彩和字体规范。