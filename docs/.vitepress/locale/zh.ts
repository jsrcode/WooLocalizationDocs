import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);

// function apiSidebar(): DefaultTheme.SidebarItem[] {
//   return readdirSync(resolve("docs", "api"))
//     .filter((dir) => dir !== "api.md")
//     .map((dir) => {
//       return {
//         text: dir.replace(".md", ""),
//         link: dir,
//       };
//     });
// }

// function apiSidebar(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: "插件开发-基础配置",
//       collapsed: true,
//       items: [
//         {
//           text: "介绍",
//           link: "about",
//         },
//         {
//           text: "快速开始插件开发",
//           link: "get-started",
//         },
//         {
//           text: "订阅权限列表",
//           link: "event-list",
//         },
//         {
//           text: "插件主体开发",
//           link: "main-code",
//         },
//         {
//           text: "怎么调用封装好的API函数",
//           link: "how-use-function",
//         },
//         {
//           text: "什么是插件独立管理后台",
//           link: "what-admin",
//         },
//       ],
//     },
//     {
//       text: "事件data",
//       collapsed: true,
//       items: [
//         {
//           text: "什么是事件data？",
//           link: "event-data",
//         },
//         {
//           text: "频道普通消息data",
//           link: "guild-messgae",
//         },
//         {
//           text: "频道普通消息data",
//           link: "group-messgae",
//         },
//       ],
//     },
//     {
//       text: "预置的Mysql操作库使用",
//       collapsed: true,
//       items: [
//       ],
//     },
//   ];
// }

function guideSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: true,
      items: [
        {
          text: "什么是 WooLocalization 框架 ?",
          link: "/guide/what-is-WooLocalization", // 指定 guide 路径
        },
        {
          text: "快速开始",
          link: "/guide/get-started", // 指定 guide 路径
        },
      ],
    },
    {
      text: "开发文档-Editor",
      collapsed: true,
      items: [
        {
          text: "Editor 文档 1",
          link: "/editor/editor-doc-1", // 指定 editor 路径
        },
        {
          text: "Editor 文档 2",
          link: "/editor/editor-doc-2", // 示例文档
        },
      ],
    },
    {
      text: "开发文档-Runtime",
      collapsed: true,
      items: [
        {
          text: "Runtime 文档 1",
          link: "/runtime/runtime-doc-1", // 指定 runtime 路径
        },
        {
          text: "Runtime 文档 2",
          link: "/runtime/runtime-doc-2", // 示例文档
        },
      ],
    },
  ];
}


export const zh = defineConfig({
  lang: "zh",
  title: "WooLocalization",
  description: "基于 C# 实现的Unity多语言插件",
  themeConfig: {
    footer: {
      // message: "蜀ICP备2023036015号-1",
      copyright: "版权所有 © 2024 JSRCode, 艾炽睡弥淘",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "导航",
        link: "/guide/what-is-WooLocalization",
        activeMatch: "^/guide/",
      },
      {
        text: "开发文档-Editor",
        link: "/editor",
        activeMatch: "^/editor/",
      },
      {
        text: "开发文档-Runtime",
        link: "/runtime",
        activeMatch: "^/runtime",
      },
      {
        text: "更新日志",
        link: "/updatelog",
      },
      // {
      //   text: "框架官网",
      //   link: "https://bot.ssyapi.com/",
      // },
      // {
      //   text: "机器人云平台",
      //   link: "https://cloud.bot.ssyapi.com/",
      // },
    ],

    sidebar: {
      "/guide/": {
        base: "",
        items: [...guideSidebar()],
      },
      "/editor/": {
        base: "",
        items: [...guideSidebar()],
      },
      "/runtime/": {
        base: "",
        items: [...guideSidebar()],
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    socialLinks: [{ icon: "github", link: "https://github.com/OnClick9927/WooLocalization" }],
  },
});
