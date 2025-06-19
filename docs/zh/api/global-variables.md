# 全局变量（Global Variables）

`EasyCode Plus` 模板中可用的全局变量说明。

## 变量列表

| 变量名         | 类型     | 说明                         |
|----------------|----------|------------------------------|
| `author`       | String   | 作者名称                      |
| `time`         | TimeUtil | 时间工具对象，可格式化输出当前时间 |
| `projectPath`  | String   | 当前项目路径                  |
| `tool`         | ToolUtil | 工具类对象，包含常用辅助方法   |
| `env`          | Map      | 环境变量（如 IDEA 版本等）    |

## 示例用法

```velocity
author: ${author}
当前时间: ${time.getCurrentTime()}
项目路径: ${projectPath}

# 使用工具类方法
大写表名: ${tool.toUpperCase(tableInfo.name)}
```

### 说明

- `time.getCurrentTime()`：获取当前时间字符串。
- `tool` 对象包含常用字符串、类型等处理方法，具体可参考 API 文档。
- `env` 变量可用于获取如 `ideaVersion` 等环境信息。 