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
    date: "2024-05-06",
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
  //   {
  //     id: "mastering-typescript",
  //     title: "Mastering TypeScript for Modern Web Development",
  //     description:
  //       "Elevate your JavaScript code with the power of static typing.",
  //     date: "2023-06-22",
  //     tags: ["TypeScript", "JavaScript", "Programming"],
  //     content: `
  // # Mastering TypeScript

  // TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

  // ## Benefits of TypeScript

  // - Catch errors early during development
  // - Better IDE support with intelligent code completion
  // - Easier refactoring
  // - Improved code documentation

  // ## Basic Types in TypeScript

  // \`\`\`typescript
  // let isDone: boolean = false;
  // let decimal: number = 6;
  // let color: string = "blue";
  // let list: number[] = [1, 2, 3];
  // let x: [string, number] = ["hello", 10]; // Tuple
  // \`\`\`

  // ## TypeScript with React

  // TypeScript works great with React! Here's a simple component:

  // \`\`\`typescript
  // interface GreetingProps {
  //   name: string;
  // }

  // function Greeting({ name }: GreetingProps) {
  //   return <h1>Hello, {name}!</h1>;
  // }

  // export default Greeting;
  // \`\`\`
  //     `,
  //   },
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
