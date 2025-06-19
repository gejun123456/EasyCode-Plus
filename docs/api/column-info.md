# ColumnInfo

The `ColumnInfo` object contains information about a database column.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | String | Java property name (underscore to lower camel case) |
| `obj.name` | String | column name |
| `comment` | String | Column comment |
| `type` | String | Full Java type (e.g., `java.lang.String`) |
| `shortType` | String | Short Java type (e.g., `String`) |
| `ktShortType` | String | Kotlin short type |
| `custom` | Boolean | Whether this is a custom additional column |
| `ext` | Map<String, Object> | Extended data |
| `escapedColumnName` | String | Escaped column name |
| `typeHandler` | String | MyBatis type handler |
| `jdbcType` | String | JDBC type |
| `ext1` | String | Extended field 1 |
| `ext2` | String | Extended field 2 |
| `ext3` | String | Extended field 3 |
| `ext4` | String | Extended field 4 |

## Example Usage

```velocity
## Column Information
#foreach($column in $tableInfo.fullColumn)
Column: ${column.name}
Type: ${column.shortType}
Comment: ${column.comment}
#if($column.custom)
Custom: Yes
#end
#if($column.typeHandler)
Type Handler: ${column.typeHandler}
#end
#if($column.jdbcType)
JDBC Type: ${column.jdbcType}
#end
#end
``` 