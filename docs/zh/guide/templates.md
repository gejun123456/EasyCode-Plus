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

## 模版例子
#### 移除表名前缀
编辑globalconfig中的mybatisCodeHelper.vm
```
#if($tableInfo.obj.name.startsWith("table_"))
$!tableInfo.setName($tableInfo.name.substring(5))
#end
```

也可以定义一个变量
```
#set($entityName=$tableInfo.name)
#if($tableInfo.obj.name.startsWith("table_"))
#set($entityName=$tableInfo.name.substring(5))
#end
```
在模版中使用 ${entityName}来进行引用，多个模版可以直接引用这个变量

#### Entity类添加后缀
```
#set($entityName=$tableInfo.name)
#set($entityName = $tool.append($entityName,‘Entity’))
```
模版中使用 ${entityName}来进行引用

#### 移除字段前缀
编辑globalconfig中的mybatisCodeHelper.vm
```
#set($removeColumnPrefix="f_")
#foreach($column in $tableInfo.fullColumn)
#if($column.obj.name.startsWith($removeColumnPrefix))
$!column.setName($tool.firstLowerCase($column.getName().substring(1)))
#end
#end
```

#### insert移除部分列
编辑你的xml模版 比如insertBatch
```
    #set($insertSkipFields = ["create_time","update_time"])
    <insert id="insertBatch" keyProperty="$!pk.name" useGeneratedKeys="true">
        insert into $!{tableInfo.obj.name}
        (
#foreach($column in $tableInfo.otherColumn)
#if($insertSkipFields.contains($column.obj.name))
#elseif($foreach.hasNext)
            $!column.obj.name,
        #else
            $!column.obj.name
        #end#end
        )
        values
        <foreach collection="entities" item="entity" separator=",">
        (
#foreach($column in $tableInfo.otherColumn)
#if($insertSkipFields.contains($column.obj.name))
#elseif($foreach.hasNext)
            #{entity.$!{column.name}},
#else
            #{entity.$!{column.name}}
#end#end
            )
        </foreach>
    </insert>
```

#### 加上jdbcType typeHandler等
编辑globalconfig中的mybatisCodeHelper.vm
```
#if($tool.newHashSet("java.lang.String").contains($column.type))
        #set($jdbcType="VARCHAR")
        #elseif($tool.newHashSet("java.lang.Integer","int").contains($column.type))
        #set($jdbcType="INTEGER")
        #else
        ##其他类型
        #set($jdbcType="VARCHAR")
    #end
$tool.call($column.ext.put("jdbcType", $jdbcType))
```
然后在xml中使用,ext是一个map，可以随意添加属性，方便用户使用
```
#{$!{column.name},jdbcType=$!{column.ext.jdbcType}}
```
这种代码调用即可

#### 获取表名，字段名，字段类型，schema名
```
    表名= tableInfo.obj.name
    字段名= column.obj.name
    字段类型=$!tool.getField($tableInfo.fullColumn.get(0).obj.dataType, "typeName")
    字段java类型=column.type
    schema名=${tableInfo.obj.getParent().getName()}
```

## 更多模版具体用法可以看api
[Api](/zh/api) 

## 高级用法

- 支持自定义工具类、全局变量、Groovy 脚本等扩展能力。
- 使用EasyCode目录来生成代码，可以加入git实现团队协作与模板共享。 
