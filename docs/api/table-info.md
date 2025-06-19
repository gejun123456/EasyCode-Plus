# TableInfo

The `TableInfo` object contains all information about a database table.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | String | object name to be generated (underscore to lower camel case) |
| `obj.name` | String | table name |
| `preName` | String | Table name prefix |
| `comment` | String | Table comment |
| `templateGroupName` | String | Template group name |
| `fullColumn` | List&lt;ColumnInfo&gt; | All columns in the table |
| `pkColumn` | List&lt;ColumnInfo&gt; | Primary key columns |
| `otherColumn` | List&lt;ColumnInfo&gt; | Non-primary key columns |
| `savePackageName` | String | Package name for generated code |
| `savePath` | String | Save path for generated files |
| `saveModelName` | String | Model name for saving |
| `ext` | Map&lt;String, Object&gt; | Extended data |
| `escapedTableName` | String | Escaped table name |
| `ext1` | String | Extended field 1 |
| `ext2` | String | Extended field 2 |
| `ext3` | String | Extended field 3 |
| `ext4` | String | Extended field 4 |


## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `getOnePkColumn()` | ColumnInfo | Get the first primary key column (if only one exists) |

## Example Usage

```velocity
## Table Information
Table Name: ${tableInfo.name}
Comment: ${tableInfo.comment}
Package: ${tableInfo.savePackageName}

## Primary Key
#if($tableInfo.getOnePkColumn())
Primary Key: ${tableInfo.getOnePkColumn().name}
Type: ${tableInfo.getOnePkColumn().shortType}
#end

## All Columns
#foreach($column in $tableInfo.fullColumn)
- ${column.name}: ${column.shortType} (${column.comment})
#end
```







