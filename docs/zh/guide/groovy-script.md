# Groovy 脚本扩展

EasyCode Plus 支持在模板中嵌入 Groovy 脚本，实现更灵活的代码生成逻辑。

## 基本用法

- 在模板设置中启用 Groovy 脚本功能。
- 在模板中通过 `${groovy('脚本内容', 参数)}` 调用 Groovy 代码。

## 示例

```velocity
#set($result = $groovy("return param.name.toUpperCase()", { 'name': $tableInfo.name }))
表名大写：${result}
```

## 注意事项

- Groovy 脚本可访问传入的参数和全局变量。
- 脚本执行异常时会在生成日志中显示详细错误信息。
- 建议仅在需要复杂逻辑时使用 Groovy，常规场景优先用 Velocity 语法。

## 进阶用法

- 可加载外部 Groovy 脚本文件，实现模板逻辑复用。
- 支持自定义工具类注入，扩展脚本能力。 