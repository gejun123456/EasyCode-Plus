# 模板开发

本章节介绍如何编写和管理 EasyCode Plus 的 Velocity 模板。

## 模板基础

- Velocity 模板是一种基于变量和指令的文本模板，支持 Java 风格的变量引用和流程控制。
- 你可以在模板中使用 `${变量名}` 访问传入的对象属性。

## 常用指令

- `#foreach($item in $list)`：遍历集合
- `#if($condition)`：条件判断
- `#set($var = value)`：变量赋值

## 示例

```velocity
#foreach($column in $tableInfo.fullColumn)
private ${column.shortType} ${column.name}; // ${column.comment}
#end
```

## 高级用法

- 支持自定义工具类、全局变量、Groovy 脚本等扩展能力。
- 可通过插件设置界面管理模板组，实现团队协作与模板共享。 