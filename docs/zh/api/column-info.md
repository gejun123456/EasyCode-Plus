# ColumnInfo（列信息对象）

`ColumnInfo` 对象包含数据库列的相关信息。

## 属性说明

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `name` | String | Java 属性名（下划线转小驼峰） |
| `obj.name` | String | 列名 |
| `comment` | String | 列注释 |
| `type` | String | Java 完整类型（如 `java.lang.String`） |
| `shortType` | String | Java 简短类型（如 `String`） |
| `ktShortType` | String | Kotlin 简短类型 |
| `custom` | Boolean | 是否为自定义附加列 |
| `ext` | Map<String, Object> | 扩展数据 |
| `escapedColumnName` | String | 转义后的列名 |
| `typeHandler` | String | MyBatis 类型处理器 |
| `jdbcType` | String | JDBC 类型 |
| `ext1` | String | 扩展字段1 |
| `ext2` | String | 扩展字段2 |
| `ext3` | String | 扩展字段3 |
| `ext4` | String | 扩展字段4 |

## 示例用法

```velocity
## 列信息
#foreach($column in $tableInfo.fullColumn)
列名: ${column.name}
类型: ${column.shortType}
注释: ${column.comment}
#if($column.custom)
自定义: 是
#end
#if($column.typeHandler)
类型处理器: ${column.typeHandler}
#end
#if($column.jdbcType)
JDBC 类型: ${column.jdbcType}
#end
#end
``` 