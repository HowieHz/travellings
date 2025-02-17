import{_ as e,c as t,o as a,a2 as r}from"./chunks/framework.Ja7AKUN6.js";const d=JSON.parse('{"title":"2024年12月更新：巡查组成员加入与其他人员变动，巡查 Bot 重构","description":"","frontmatter":{"title":"2024年12月更新：巡查组成员加入与其他人员变动，巡查 Bot 重构","contributors":["Allenyou1126"],"date":"2024-12-05T00:00:00.000Z","updated":"2024-12-05T00:00:00.000Z","categories":"功能更新","tags":["人员变动","巡查"]},"headers":[],"relativePath":"en_US/blog/202412.md","filePath":"en_US/blog/202412.md"}'),o={name:"en_US/blog/202412.md"},n=r('<h1 id="_2024-年-12-月更新-巡查组成员加入与其他人员变动-巡查-bot-重构" tabindex="-1">2024 年 12 月更新：巡查组成员加入与其他人员变动，巡查 Bot 重构 <a class="header-anchor" href="#_2024-年-12-月更新-巡查组成员加入与其他人员变动-巡查-bot-重构" aria-label="Permalink to &quot;2024 年 12 月更新：巡查组成员加入与其他人员变动，巡查 Bot 重构&quot;">​</a></h1><p>久违的更新！开往已经三个月未更新博客，维护组在此跟各位说一声抱歉（<s>欸这句话好像在哪里见过</s>）。本篇博客想给大家讲一讲这三个月以来的一些工作动向。</p><h2 id="第一批开往巡查组成员招募完成" tabindex="-1">第一批开往巡查组成员招募完成 <a class="header-anchor" href="#第一批开往巡查组成员招募完成" aria-label="Permalink to &quot;第一批开往巡查组成员招募完成&quot;">​</a></h2><p>经过严格的问卷筛选和面试环节，我们成功招募了首批共8名巡查组成员，并组建了开往巡查组。尽管目前巡查组所需的日常巡查工具仍在<s>咕咕咕</s>开发中，但我们的巡查组成员已迫不及待地开始通过随机跳转的方式自发进行巡查。这一举动无疑是对当前巡查Bot工作的重要补充，我们衷心感谢每一位巡查组成员的辛勤付出与无私奉献！</p><h2 id="开往维护组人员变动" tabindex="-1">开往维护组人员变动 <a class="header-anchor" href="#开往维护组人员变动" aria-label="Permalink to &quot;开往维护组人员变动&quot;">​</a></h2><p>近期，MengZe (GitHub: <a href="https://github.com/MengZeMC" target="_blank" rel="noreferrer">MengZeMC</a>) 与 Kegongteng (GitHub: <a href="https://github.com/gtxykn0504" target="_blank" rel="noreferrer">gtxykn0504</a>) 由于个人原因退出了开往维护组。自2024年6月加入维护组以来，两位成员为开往的发展做出了巨大贡献。其中，MengZe 为开往的公共关系工作做出了不可忽视的贡献，而 Kegongteng 在为开往提供文案之余主持了制定了巡查组工作流程的早期版本。在此，我们对两位作出的贡献致以感谢。</p><h2 id="开往巡查-bot-重构" tabindex="-1">开往巡查 Bot 重构 <a class="header-anchor" href="#开往巡查-bot-重构" aria-label="Permalink to &quot;开往巡查 Bot 重构&quot;">​</a></h2><p>现有的<a href="https://github.com/travellings-link/travellings-bot" target="_blank" rel="noreferrer">开往巡查 Bot</a>由<a href="https://github.com/BLxcwg666" target="_blank" rel="noreferrer">BLxcwg666</a>主导开发，主要利用Axios和Puppeteer实现站点的自动化巡查，并通过Telegraf库提供Telegram Bot服务。然而，由于该Bot采用JavaScript + CommonJS编写，代码耦合度较高，且未启用ESLint等工具链，其未来的代码质量和可维护性将面临挑战。</p><p>目前，Allenyou（GitHub: <a href="https://github.com/Allenyou1126" target="_blank" rel="noreferrer">Allenyou1126</a>）对原有Bot代码进行重构，采用TypeScript + ESM进行编写，并引入了ESLint 工具链以提升代码质量。在此基础上，他还抽离了与Bot框架相关的功能，并为开往巡查Bot新增了飞书平台支持，提升了代码扩展性。</p>',9),l=[n];function i(s,h,c,_,g,p){return a(),t("div",null,l)}const u=e(o,[["render",i]]);export{d as __pageData,u as default};
