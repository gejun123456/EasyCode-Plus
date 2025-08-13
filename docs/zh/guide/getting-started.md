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

- **生成的模板文件在哪里**
  在项目的EasyCode目录里面或者Scratches And Consoles的/extensions/EasyCode目录里面,直接编辑模板即可

- **如何自定义作者名？**  
  在插件设置中填写作者信息，或在模板中使用 `${author}` 变量。
- **支持哪些数据库？**  
  支持所有 JetBrains Database 工具支持的数据库类型。

### group.json 做啥用的
group.json是配置关联关系的，模版和globalConfig和typeMapper都是多对多的关系通过配置json的group名来进行区分，一个项目可以有多个生成组

### 我不会写模版怎么办？
模版用的是velocity语法 文档:https://velocity.apache.org/ 碰到模版问题也可联系我来弄弄

### projectPath为空
如果你的项目是一个多module平行的项目，没有一个总的project，可以在mybatisCodehelper.vm中将projectPath set为具体的路径  
#set($projectPath="D:/workspace/idea/XXModule")

### GenerateCode(old)和GenerateFromEasyCodeFolder(new)的区别是啥
GenerateCode(old)老的模版是在设置里面配置的,走的是设置里面的template globalConfig等配置,  
GenerateFromEasyCodeFolder(new)是直接从easyCode文件夹下的模版生成的.  
当你使用GenerateFromEasyCodeFolder(new) 无需在设置里面配置模版，推荐使用GenerateFromEasyCodeFolder(new),  
写模版有代码提示，可以实时预览模版，直接在idea编辑器操作模版，还可以加到git中方便与同事共享

### 写模版代码提示
模版最上面有个链接 Add dependency for code completion,点击后会自动添加依赖,  
之后编辑模版会有代码提示，编辑完模版后可以remove dependency来移除依赖

### 为何包名和路径要放在mybatisCodeHelper.vm中，为啥不用ui配置路径
包名和路径放在mybatisCodeHelper.vm的好处是方便放到git中和同事共享，不用每个人都去配置  
未来也可利用这个来进行模版和已存在的文件直接对比，方便找到具体的路径,  
mybatisCodeHelper.vm的路径和包名未来会加入自动提示，方便填写



更多高级用法请参考[模板开发](/zh/guide/templates)和[Groovy 脚本](/zh/guide/groovy-script)章节。 
