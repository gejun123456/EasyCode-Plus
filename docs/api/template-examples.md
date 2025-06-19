# Template Examples

## Entity Class Template

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

## MyBatis Mapper Template

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

    <select id="selectByPrimaryKey" parameterType="$\{tableInfo.pkColumn.get(0).shortType\}" resultMap="BaseResultMap">
        select 
        <include refid="Base_Column_List" />
        from ${tableInfo.name}
        where ${tableInfo.pkColumn.get(0).name} = #${tableInfo.pkColumn.get(0).name}
    </select>

</mapper>
```

</div>

## Service Interface Template

<div v-pre>

```velocity
package ${tableInfo.savePackageName};

/**
 * ${tableInfo.comment} Service Interface
 * 
 * @author ${author}
 * @since ${time.getCurrentTime()}
 */
public interface ${tableInfo.name}Service {
    
    /**
     * Insert a new record
     */
    int insert(${tableInfo.name} record);
    
    /**
     * Select by primary key
     */
    ${tableInfo.name} selectByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);
    
    /**
     * Update by primary key
     */
    int updateByPrimaryKey(${tableInfo.name} record);
    
    /**
     * Delete by primary key
     */
    int deleteByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);
}
```

</div>

## Controller Template

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
@RequestMapping("${tool.getClassName($tableInfo.name, false)}")
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

## Frontend API Template

<div v-pre>

```velocity
// ${tableInfo.name} API
export const ${tool.getClassName($tableInfo.name, false)}Api = {
  // Get by ID
  getById: (id: ${tableInfo.pkColumn.get(0).shortType}) => 
    request.get<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),
  
  // Create new record
  create: (data: ${tableInfo.name}) => 
    request.post<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}`, data),
  
  // Update record
  update: (id: ${tableInfo.pkColumn.get(0).shortType}, data: ${tableInfo.name}) => 
    request.put<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`, data),
  
  // Delete record
  delete: (id: ${tableInfo.pkColumn.get(0).shortType}) => 
    request.delete(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),
  
  // List all records
  list: () => 
    request.get<${tableInfo.name}[]>(`/api/${tool.getClassName($tableInfo.name, false)}/list`)
};
```

</div> 