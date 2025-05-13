export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "getting-started-with-nextjs",
    title: "使用 NatApp 实现内网穿透教程",
    description: "介绍如何使用 NatApp 实现内网穿透",
    date: "205-05-06",
    tags: ["Internal Network Penetration"],
    content: `
在本文中，我们将介绍如何使用 NatApp 实现内网穿透。NatApp 是一个非常方便的工具，可以让你将本地服务器暴露到互联网上，从而实现内网穿透。适用于个人开发者、测试人员等需要快速搭建服务的场景。

## 步骤 1: 注册并登录 NatApp

1. 访问 [NatApp 官网](https://natapp.cn)。
2. 注册一个账户并登录。

## 步骤 2: 购买或创建隧道

1. 登录后，进入“我的隧道”页面。
2. 点击“购买隧道”，选择“免费隧道”或其他套餐。
3. 配置隧道信息：
   - **隧道名称**：自定义名称。
   - **协议类型**：选择 \`http\`、\`https\` 或 \`tcp\`。
   - **本地端口**：填写本地服务的端口号（如 8080）。
4. 提交后，系统会生成一个 \`authtoken\`，保存好这个信息。

## 步骤 3: 下载并配置客户端

1. 前往 [NatApp 下载页面](https://natapp.cn/#download) 下载适用于您操作系统的客户端。

2. 解压下载的文件，找到 \`natapp.exe\`（Windows）或对应的可执行文件。

3. 在客户端所在的目录下，创建一个名为 \`config.ini\` 的配置文件，内容如下：

   \`\`\`ini
   [default]
   authtoken=您的authtoken
   \`\`\`

4. 将 \`config.ini\` 文件与客户端放在同一目录下。

## 步骤 4: 启动客户端

- **Windows**：

  1. 双击 \`natapp.exe\`，或在命令行中运行以下命令：

     \`\`\`bash
     natapp -authtoken=您的authtoken
     \`\`\`

- **Linux/macOS**：

  1. 赋予执行权限并运行以下命令：

     \`\`\`bash
     chmod +x natapp
     ./natapp -authtoken=您的authtoken
     \`\`\`

1. 启动成功后，您会看到类似如下的信息：

   \`\`\`
   Tunnel Status    Online
   Forwarding       http://xxxx.natappfree.cc -> 127.0.0.1:8080
   \`\`\`

   这表示您的本地服务已经成功暴露到公网。

## 步骤 5: 测试访问

1. 在浏览器中输入 \`http://xxxx.natappfree.cc\`，如果能正常访问到您本地的服务，说明内网穿透配置成功。

## 注意事项

- **免费隧道**：
  - 每天有连接时长限制。
  - 域名为随机分配的二级域名。
- **付费隧道**：
  - 支持自定义域名。
  - 提供更高的稳定性和带宽。
- **安全性**：
  - 避免将敏感服务暴露在公网。
  - 建议设置访问控制或使用 HTTPS 进行加密。

## 总结

通过以上步骤，您可以轻松实现内网穿透，访问本地开发服务。无论是进行测试、调试，还是与团队协作，NatApp 都是一个非常实用的工具。希望本教程能帮助您顺利搭建内网穿透环境。

如果您需要更详细的图文教程，可以参考官方提供的 [NatApp 新手教程](https://natapp.cn/article/natapp_newbie)。
    `,
  },
  {
    id: "mastering-typescript",
    title: "PostCSS 学习笔记",
    description: "PostCSS 学习笔记：架构与原理",
    date: "2025-05-13",
    tags: ["PostCSS", "CSS"],
    content: `
> PostCSS 是一个基于插件的 CSS 处理工具，它将 CSS 转换为抽象语法树（AST），通过插件对其进行处理，最后生成新的 CSS 代码。([Oryoy][1])


## 📌 什么是 PostCSS？

* **非预处理器**：PostCSS 不像 Sass 或 Less 那样定义新的语法，而是处理标准 CSS。
* **插件驱动**：其核心是一个轻量级的解析器，开发者可以通过插件对 AST 进行各种处理和修改。
* **生态系统丰富**：许多工具（如 Autoprefixer、Stylelint、CSSnano）都是建立在 PostCSS 生态系统之上的。([postcss.org.cn][2], [CSDN博客][3])


## 🧠 架构概览

PostCSS 的工作流程如下：([postcss.org.cn][4])

1. **解析（Parsing）**：将 CSS 字符串转换为抽象语法树（AST）。
2. **转换（Transforming）**：插件对 AST 进行操作，如添加前缀、压缩等。
3. **生成（Stringifying）**：将修改后的 AST 转换回 CSS 字符串。([CSDN博客][3])

这种架构使得 PostCSS 具有高度的灵活性和可扩展性。([CSDN博客][3])


## 🔍 核心组件详解

### 1. 词法分析器（Tokenizer）

* **功能**：将 CSS 字符串拆分为标记（tokens），如选择器、属性、值等。
* **优势**：提高解析性能，便于后续的 AST 构建。([postcss.org.cn][2])

### 2. 抽象语法树（AST）

* **结构**：以树形结构表示 CSS 的语法和结构。
* **用途**：插件通过遍历和修改 AST，实现对 CSS 的各种转换。([Oryoy][1], [腾讯云][5])

### 3. 插件系统

* **机制**：插件是函数，接受 AST 作为参数，对其进行操作。
* **示例**：Autoprefixer 自动添加浏览器前缀，cssnano 进行 CSS 压缩。([Oryoy][1], [CSDN博客][3])


## 🛠️ 插件开发示例

以下是一个简单的插件示例，它为所有选择器添加前缀：

\`\`\`javascript
module.exports = postcss.plugin('custom-plugin', function (opts) {
  return function (root) {
    root.walkRules(rule => {
      rule.selector = '.custom-prefix ' + rule.selector;
    });
  };
});
\`\`\`



该插件遍历所有规则，为每个选择器添加 \`.custom-prefix\` 前缀。([腾讯云][5])


## ⚙️ 集成与配置

* **安装**：使用 npm 安装 PostCSS 及所需插件。

\`\`\`bash
  npm install postcss autoprefixer --save-dev
\`\`\`



* **配置文件**：创建 \`postcss.config.js\`，指定使用的插件。([CSDN博客][6])

\`\`\`javascript
  module.exports = {
    plugins: [
      require('autoprefixer')
    ]
  };
\`\`\`



* **构建工具集成**：可与 Webpack、Gulp 等构建工具集成，自动处理 CSS。([腾讯云][5])

## 📚 参考资料

* [PostCSS 中文文档](https://postcss.org.cn/docs/)
* [PostCSS Architecture](https://postcss.org/docs/postcss-architecture)
* [PostCSS 插件列表](https://www.postcss.com.cn/plugins/)


通过理解 PostCSS 的架构和工作原理，可以更高效地处理 CSS，提高开发效率和代码质量。

[1]: https://www.oryoy.com/news/jie-mi-postcss-rang-css-geng-jia-qiang-da-yu-gao-xiao-de-shi-yong-zhi-nan.html?utm_source=chatgpt.com "揭秘PostCSS：让CSS更加强大与高效的实用指南 - 云原生实践"
[2]: https://postcss.org.cn/docs/postcss-architecture?utm_source=chatgpt.com "PostCSS 架构 中文"
[3]: https://blog.csdn.net/AOMGyz/article/details/138016887?utm_source=chatgpt.com "PostCSS详细介绍_postcss是什么-CSDN博客"
[4]: https://postcss.org.cn/docs/?utm_source=chatgpt.com "PostCSS 文档 中文"
[5]: https://cloud.tencent.com/developer/article/2470407?utm_source=chatgpt.com "PostCSS概述-腾讯云开发者社区-腾讯云"
[6]: https://blog.csdn.net/nljycg/article/details/138196855?utm_source=chatgpt.com "PostCSS 从入门到精通，看着一篇就够了（1）-CSDN博客"

      `,
  },
  //   {
  //     id: "responsive-design-principles",
  //     title: "Responsive Design Principles Every Developer Should Know",
  //     description:
  //       "Create websites that look great on any device with these responsive design techniques.",
  //     date: "2023-07-10",
  //     tags: ["CSS", "Responsive Design", "Web Development"],
  //     content: `
  // # Responsive Design Principles

  // Responsive web design makes your web page look good on all devices. It's essential for providing a good user experience.

  // ## Core Principles

  // ### Fluid Grids

  // Use relative units like percentages instead of fixed pixels:

  // \`\`\`css
  // .container {
  //   width: 100%;
  //   max-width: 1200px;
  //   margin: 0 auto;
  // }

  // .column {
  //   width: 33.33%;
  //   float: left;
  // }
  // \`\`\`

  // ### Flexible Images

  // Make images scale with their container:

  // \`\`\`css
  // img {
  //   max-width: 100%;
  //   height: auto;
  // }
  // \`\`\`

  // ### Media Queries

  // Apply different styles based on device characteristics:

  // \`\`\`css
  // /* Mobile styles */
  // @media (max-width: 767px) {
  //   .column {
  //     width: 100%;
  //   }
  // }

  // /* Tablet styles */
  // @media (min-width: 768px) and (max-width: 1023px) {
  //   .column {
  //     width: 50%;
  //   }
  // }
  // \`\`\`

  // ## Modern Approaches

  // Consider using CSS Grid or Flexbox for even better responsive layouts!
  //     `,
  //   },
];
