# Templates

## Template Structure

Templates are written in Velocity template language (VTL).


## Common Directives

- `#foreach($item in $list)`：iterates over a list
- `#if($condition)`：conditional statement
- `#set($var = value)`：variable assignment

## Example

```velocity
#foreach($column in $tableInfo.fullColumn)
private ${column.shortType} ${column.name}; // ${column.comment}
#end
```

## More template usage can see api
[Api](/api) 


## Advanced Usage

- Supports custom tool classes, global variables, Groovy scripts, etc.
- Write template in EasyCode directory, can use git to manage templates, share with team.
