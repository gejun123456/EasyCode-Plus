## 插件的外部库使用方法

1. 使用 `mvn package` 打包并获取 jar 文件
2. 打开 IDEA 设置 -> EasyCodeMybatisCodeHelper
3. 配置外部库路径
4. 添加 groovy 脚本

示例路径：`D:/code/github/externalLibDemo/target/easycode-utils-1.0.0.jar`

### 示例项目地址
[https://github.com/gejun123456/EasyCode-ExternalLib](https://github.com/gejun123456/EasyCode-ExternalLib)

groovy 脚本示例：

```groovy
param.put('stringHelper', com.bruce.utils.StringHelper.getInstance())
```

5. 在你的模板中使用外部库

```xml
haha = ${stringHelper.toUpperCase($tableInfo.fullColumn.get(0).name)}
```

### 外部库代码补全

1. 打开 `EasyCode` -> `velocity_implicit.vm` 文件
2. 添加如下注释：

```
#* @vtlvariable name="stringHelper" type="com.bruce.utils.StringHelper" *#
```

### 遇到问题请联系我

[https://brucege.com/doc/#/contactMe](https://brucege.com/doc/#/contactMe) 或 gejun123456@gmail.com
