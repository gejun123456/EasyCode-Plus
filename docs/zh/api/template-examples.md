# 模板示例（Template Examples）

## 实体类模板

<div v-pre>

```velocity
package ${tableInfo.savePackageName};

#foreach($import in $importList)
import ${import};
#end

/**
 * ${tableInfo.comment}
 * 
 * @author ${author}
 * @since ${time.getCurrentTime()}
 */
public class ${tableInfo.name} {
    
    #foreach($column in $tableInfo.fullColumn)
    /**
     * ${column.comment}
     */
    private ${column.shortType} ${column.name};
    
    #end
    
    #foreach($column in $tableInfo.fullColumn)
    public ${column.shortType} get${tool.getClassName($column.name)}\() {
        return ${column.name};
    }
    
    public void set${tool.getClassName($column.name)}\(${column.shortType} ${column.name}) {
        this.${column.name} = ${column.name};
    }
    
    #end
}
```

</div>

## MyBatis Mapper 模板

<div v-pre>

```velocity
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="${tableInfo.savePackageName}.${tableInfo.name}Mapper">

    <resultMap id="BaseResultMap" type="${tableInfo.savePackageName}.${tableInfo.name}">
        #foreach($column in $tableInfo.fullColumn)
        <result column="${column.name}" property="${column.name}" jdbcType="${column.jdbcType}"/>
        #end
    </resultMap>

    <sql id="Base_Column_List">
        #foreach($column in $tableInfo.fullColumn)
        ${column.name}#if($foreach.hasNext), #end
        #end
    </sql>

    <select id="selectByPrimaryKey" parameterType="${tableInfo.pkColumn.get(0).shortType}" resultMap="BaseResultMap">
        select 
        <include refid="Base_Column_List" />
        from ${tableInfo.name}
        where ${tableInfo.pkColumn.get(0).name} = #${tableInfo.pkColumn.get(0).name}
    </select>

</mapper>
```

</div>

## Service 接口模板

<div v-pre>

```velocity
package ${tableInfo.savePackageName};

/**
 * ${tableInfo.comment} Service 接口
 * 
 * @author ${author}
 * @since ${time.getCurrentTime()}
 */
public interface ${tableInfo.name}Service {
    
    /**
     * 新增记录
     */
    int insert(${tableInfo.name} record);
    
    /**
     * 根据主键查询
     */
    ${tableInfo.name} selectByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);
    
    /**
     * 根据主键更新
     */
    int updateByPrimaryKey(${tableInfo.name} record);
    
    /**
     * 根据主键删除
     */
    int deleteByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);
}
```

</div>

## Controller 模板

<div v-pre>

```velocity
package ${tableInfo.savePackageName};

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * ${tableInfo.comment} Controller
 * 
 * @author ${author}
 * @since ${time.getCurrentTime()}
 */
@RestController
@RequestMapping("/${tool.getClassName($tableInfo.name, false)}")
public class ${tableInfo.name}Controller {
    
    @Autowired
    private ${tableInfo.name}Service ${tool.getClassName($tableInfo.name, false)}Service;
    
    @PostMapping
    public Result<${tableInfo.name}> insert(@RequestBody ${tableInfo.name} record) {
        int result = ${tool.getClassName($tableInfo.name, false)}Service.insert(record);
        return Result.success(record);
    }
    
    @GetMapping("/{id}")
    public Result<${tableInfo.name}> getById(@PathVariable ${tableInfo.pkColumn.get(0).shortType} id) {
        ${tableInfo.name} record = ${tool.getClassName($tableInfo.name, false)}Service.selectByPrimaryKey(id);
        return Result.success(record);
    }
}
```

</div>

## 前端 API 模板

<div v-pre>

```velocity
// ${tableInfo.name} API
export const ${tool.getClassName($tableInfo.name, false)}Api = {
  // 根据ID获取
  getById: (id: ${tableInfo.pkColumn.get(0).shortType}) => 
    request.get<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),
  
  // 新增记录
  create: (data: ${tableInfo.name}) => 
    request.post<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}`, data),
  
  // 更新记录
  update: (id: ${tableInfo.pkColumn.get(0).shortType}, data: ${tableInfo.name}) => 
    request.put<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`, data),
  
  // 删除记录
  delete: (id: ${tableInfo.pkColumn.get(0).shortType}) => 
    request.delete(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),
  
  // 获取所有记录
  list: () => 
    request.get<${tableInfo.name}[]>(`/api/${tool.getClassName($tableInfo.name, false)}/list`)
};
```

</div> 