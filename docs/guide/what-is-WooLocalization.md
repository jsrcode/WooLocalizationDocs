# WooLocalization 是什么？ {#what-is-WooLocalization}

WooLocalization 是一个用于简化游戏或应用程序中多语言本地化管理的工具，支持动态切换和管理不同语言的文本、图像和音频资源。

<!-- <div class="tip custom-block" style="padding-top: 8px">

只是想尝试一下？跳到[快速开始](./get-started)。

</div> -->

## 使用场景 {#use-cases}

**WooLocalization** 是一个用于本地化内容的工具，通常用于多语言游戏或应用开发中，以便根据用户所在的地区和语言显示相应的文本、图片、音频等资源。以下是 WooLocalization 的主要使用场景：

### 1. 游戏中的多语言支持
在全球发行的游戏中，不同地区的玩家需要使用不同的语言。通过 WooLocalization，可以根据玩家的语言设置自动切换游戏中的文本（如菜单、对话、按钮等），确保玩家使用本地化的界面。

- 示例：
    - 英文用户看到 "Start Game" 按钮，而中文用户看到 "开始游戏" 按钮。
    - 游戏剧情对话会自动切换到对应语言。

### 2. 应用中的语言切换功能
应用程序中，用户可能需要手动切换语言。WooLocalization 可以提供语言选择功能，用户选择不同的语言时，界面内容会动态更新成相应的语言。

- 示例：
    - 设置页面提供语言选择下拉框，用户选择后，所有文本即时切换。
    - 支持动态切换而不需要重新启动应用。

### 3. 多语言资源管理
除了文本本地化，WooLocalization 还可以管理多语言相关的图片、音频等资源。不同语言下的 UI 元素、音频提示、图标等可以自动适配。

- 示例：
    - 不同语言的广告图片或按钮样式根据语言环境切换。
    - 各语言的旁白或音频教程根据用户设置播放对应版本。

### 4. 提供文化适应性内容
不同地区的玩家或用户可能需要不同的内容展示。例如，游戏的某些地区版本可能需要不同的图标、UI 布局或内容显示方式。WooLocalization 可以通过地域或文化标记，切换成不同的展示方案。

- 示例：
    - 针对亚洲市场和欧洲市场，提供不同的节日活动内容或庆祝方式。
    - 在特定文化中替换某些敏感的内容或符号。

### 5. 动态更新语言包
WooLocalization 支持通过Wooassets，Yooassets，Addressable等资源管理系统远程配置或者热更新动态下载和更新语言包。这在游戏和应用发布后，也能实时适应新语言的需求或修正语言问题。

- 示例：
    - 应用上线后新增某个语言包，用户下载后自动更新语言内容。
    - 语言包可以根据新地区的加入而动态扩展。


## 系统特点 {#2}

*  支持  文本/图片/特效/预制体/继承自UnityEngine.Object 本地化
*  提供本地化组件（支持挖孔的文本，支持多种属性变化）
*  支持一键翻译 
*  支持无限多语言类型
*  支持扩展自定义本地化
*  支持导入导出自定义本地化文件
*  支持编辑器增加/检查/删除/修改   本地化 Key/语言
*  支持编辑器下预览语言切换