# 快速开始

欢迎使用 EasyCode Plus！本指南将帮助你快速完成插件的安装与基础配置。

## 安装插件

1. 打开 JetBrains 系列 IDE（如 IntelliJ IDEA）。
2. 进入 `Settings` > `Plugins`，搜索 "EasyCode Plus" 并安装。
3. 重启 IDE 以完成插件安装。

## 创建第一个模板

1. 打开任意数据库表，右键选择 "EasyCode Plus" > "生成代码"。
2. 选择或新建模板组，点击 "编辑模板"。
3. 编写 Velocity 模板，保存后即可一键生成代码。

## 常见问题

- **如何自定义作者名？**  
  在插件设置中填写作者信息，或在模板中使用 `${author}` 变量。
- **支持哪些数据库？**  
  支持所有 JetBrains Database 工具支持的数据库类型。

更多高级用法请参考[模板开发](/zh/guide/templates)和[Groovy 脚本](/zh/guide/groovy-script)章节。 