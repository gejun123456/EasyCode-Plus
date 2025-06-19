# TableInfo（表信息对象）

`TableInfo` 对象包含数据库表的所有信息。

## 属性说明

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `name` | String | 生成的对象名（下划线转小驼峰） |
| `obj.name` | String | 表名 |
| `preName` | String | 表名前缀 |
| `comment` | String | 表注释 |
| `templateGroupName` | String | 模板组名称 |
| `fullColumn` | List&lt;ColumnInfo&gt; | 所有列信息 |
| `pkColumn` | List&lt;ColumnInfo&gt; | 主键列信息 |
| `otherColumn` | List&lt;ColumnInfo&gt; | 非主键列信息 |
| `savePackageName` | String | 生成代码的包名 |
| `savePath` | String | 生成文件的保存路径 |
| `saveModelName` | String | 保存的模型名 |
| `ext` | Map&lt;String, Object&gt; | 扩展数据 |
| `escapedTableName` | String | 转义后的表名 |
| `ext1` | String | 扩展字段1 |
| `ext2` | String | 扩展字段2 |
| `ext3` | String | 扩展字段3 |
| `ext4` | String | 扩展字段4 |

## 方法

| 方法名 | 返回类型 | 说明 |
|--------|----------|------|
| `getOnePkColumn()` | ColumnInfo | 获取第一个主键列（仅当主键只有一个时有效） |

## 示例用法

```velocity
## 表信息
表名: ${tableInfo.name}
注释: ${tableInfo.comment}
包名: ${tableInfo.savePackageName}

## 主键信息
#if($tableInfo.getOnePkColumn())
主键: ${tableInfo.getOnePkColumn().name}
类型: ${tableInfo.getOnePkColumn().shortType}
#end

## 所有列
#foreach($column in $tableInfo.fullColumn)
- ${column.name}: ${column.shortType}（${column.comment}）
#end
``` 