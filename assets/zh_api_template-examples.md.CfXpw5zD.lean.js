import{_ as s,c as e,o as p,j as n,a as l}from"./chunks/framework.CkEP6GAn.js";const b=JSON.parse('{"title":"模板示例（Template Examples）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/template-examples.md","filePath":"zh/api/template-examples.md"}'),i={name:"zh/api/template-examples.md"};function t(c,a,o,u,r,m){return p(),e("div",null,a[0]||(a[0]=[n("h1",{id:"模板示例-template-examples",tabindex:"-1"},[l("模板示例（Template Examples） "),n("a",{class:"header-anchor",href:"#模板示例-template-examples","aria-label":'Permalink to "模板示例（Template Examples）"'},"​")],-1),n("h2",{id:"实体类模板",tabindex:"-1"},[l("实体类模板 "),n("a",{class:"header-anchor",href:"#实体类模板","aria-label":'Permalink to "实体类模板"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"package ${tableInfo.savePackageName};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#foreach($import in $importList)")]),l(`
`),n("span",{class:"line"},[n("span",null,"import ${import};")]),l(`
`),n("span",{class:"line"},[n("span",null,"#end")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"/**")]),l(`
`),n("span",{class:"line"},[n("span",null," * ${tableInfo.comment}")]),l(`
`),n("span",{class:"line"},[n("span",null," * ")]),l(`
`),n("span",{class:"line"},[n("span",null," * @author ${author}")]),l(`
`),n("span",{class:"line"},[n("span",null," * @since ${time.getCurrentTime()}")]),l(`
`),n("span",{class:"line"},[n("span",null," */")]),l(`
`),n("span",{class:"line"},[n("span",null,"public class ${tableInfo.name} {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    #foreach($column in $tableInfo.fullColumn)")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * ${column.comment}")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    private ${column.shortType} ${column.name};")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    #end")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    #foreach($column in $tableInfo.fullColumn)")]),l(`
`),n("span",{class:"line"},[n("span",null,"    public ${column.shortType} get${tool.getClassName($column.name)}\\() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return ${column.name};")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    public void set${tool.getClassName($column.name)}\\(${column.shortType} ${column.name}) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        this.${column.name} = ${column.name};")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    #end")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])])])],-1),n("h2",{id:"mybatis-mapper-模板",tabindex:"-1"},[l("MyBatis Mapper 模板 "),n("a",{class:"header-anchor",href:"#mybatis-mapper-模板","aria-label":'Permalink to "MyBatis Mapper 模板"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,'<?xml version="1.0" encoding="UTF-8"?>')]),l(`
`),n("span",{class:"line"},[n("span",null,'<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">')]),l(`
`),n("span",{class:"line"},[n("span",null,'<mapper namespace="${tableInfo.savePackageName}.${tableInfo.name}Mapper">')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <resultMap id="BaseResultMap" type="${tableInfo.savePackageName}.${tableInfo.name}">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        #foreach($column in $tableInfo.fullColumn)")]),l(`
`),n("span",{class:"line"},[n("span",null,'        <result column="${column.name}" property="${column.name}" jdbcType="${column.jdbcType}"/>')]),l(`
`),n("span",{class:"line"},[n("span",null,"        #end")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </resultMap>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <sql id="Base_Column_List">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        #foreach($column in $tableInfo.fullColumn)")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ${column.name}#if($foreach.hasNext), #end")]),l(`
`),n("span",{class:"line"},[n("span",null,"        #end")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </sql>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <select id="selectByPrimaryKey" parameterType="${tableInfo.pkColumn.get(0).shortType}" resultMap="BaseResultMap">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        select ")]),l(`
`),n("span",{class:"line"},[n("span",null,'        <include refid="Base_Column_List" />')]),l(`
`),n("span",{class:"line"},[n("span",null,"        from ${tableInfo.name}")]),l(`
`),n("span",{class:"line"},[n("span",null,"        where ${tableInfo.pkColumn.get(0).name} = #${tableInfo.pkColumn.get(0).name}")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </select>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"</mapper>")])])])])],-1),n("h2",{id:"service-接口模板",tabindex:"-1"},[l("Service 接口模板 "),n("a",{class:"header-anchor",href:"#service-接口模板","aria-label":'Permalink to "Service 接口模板"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"package ${tableInfo.savePackageName};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"/**")]),l(`
`),n("span",{class:"line"},[n("span",null," * ${tableInfo.comment} Service 接口")]),l(`
`),n("span",{class:"line"},[n("span",null," * ")]),l(`
`),n("span",{class:"line"},[n("span",null," * @author ${author}")]),l(`
`),n("span",{class:"line"},[n("span",null," * @since ${time.getCurrentTime()}")]),l(`
`),n("span",{class:"line"},[n("span",null," */")]),l(`
`),n("span",{class:"line"},[n("span",null,"public interface ${tableInfo.name}Service {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * 新增记录")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    int insert(${tableInfo.name} record);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * 根据主键查询")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ${tableInfo.name} selectByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * 根据主键更新")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    int updateByPrimaryKey(${tableInfo.name} record);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * 根据主键删除")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    int deleteByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])])])],-1),n("h2",{id:"controller-模板",tabindex:"-1"},[l("Controller 模板 "),n("a",{class:"header-anchor",href:"#controller-模板","aria-label":'Permalink to "Controller 模板"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"package ${tableInfo.savePackageName};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"import org.springframework.web.bind.annotation.*;")]),l(`
`),n("span",{class:"line"},[n("span",null,"import org.springframework.beans.factory.annotation.Autowired;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"/**")]),l(`
`),n("span",{class:"line"},[n("span",null," * ${tableInfo.comment} Controller")]),l(`
`),n("span",{class:"line"},[n("span",null," * ")]),l(`
`),n("span",{class:"line"},[n("span",null," * @author ${author}")]),l(`
`),n("span",{class:"line"},[n("span",null," * @since ${time.getCurrentTime()}")]),l(`
`),n("span",{class:"line"},[n("span",null," */")]),l(`
`),n("span",{class:"line"},[n("span",null,"@RestController")]),l(`
`),n("span",{class:"line"},[n("span",null,'@RequestMapping("/${tool.getClassName($tableInfo.name, false)}")')]),l(`
`),n("span",{class:"line"},[n("span",null,"public class ${tableInfo.name}Controller {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    @Autowired")]),l(`
`),n("span",{class:"line"},[n("span",null,"    private ${tableInfo.name}Service ${tool.getClassName($tableInfo.name, false)}Service;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    @PostMapping")]),l(`
`),n("span",{class:"line"},[n("span",null,"    public Result<${tableInfo.name}> insert(@RequestBody ${tableInfo.name} record) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        int result = ${tool.getClassName($tableInfo.name, false)}Service.insert(record);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return Result.success(record);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,'    @GetMapping("/{id}")')]),l(`
`),n("span",{class:"line"},[n("span",null,"    public Result<${tableInfo.name}> getById(@PathVariable ${tableInfo.pkColumn.get(0).shortType} id) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ${tableInfo.name} record = ${tool.getClassName($tableInfo.name, false)}Service.selectByPrimaryKey(id);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return Result.success(record);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])])])],-1),n("h2",{id:"前端-api-模板",tabindex:"-1"},[l("前端 API 模板 "),n("a",{class:"header-anchor",href:"#前端-api-模板","aria-label":'Permalink to "前端 API 模板"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"// ${tableInfo.name} API")]),l(`
`),n("span",{class:"line"},[n("span",null,"export const ${tool.getClassName($tableInfo.name, false)}Api = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // 根据ID获取")]),l(`
`),n("span",{class:"line"},[n("span",null,"  getById: (id: ${tableInfo.pkColumn.get(0).shortType}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.get<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // 新增记录")]),l(`
`),n("span",{class:"line"},[n("span",null,"  create: (data: ${tableInfo.name}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.post<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}`, data),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // 更新记录")]),l(`
`),n("span",{class:"line"},[n("span",null,"  update: (id: ${tableInfo.pkColumn.get(0).shortType}, data: ${tableInfo.name}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.put<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`, data),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // 删除记录")]),l(`
`),n("span",{class:"line"},[n("span",null,"  delete: (id: ${tableInfo.pkColumn.get(0).shortType}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.delete(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // 获取所有记录")]),l(`
`),n("span",{class:"line"},[n("span",null,"  list: () => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.get<${tableInfo.name}[]>(`/api/${tool.getClassName($tableInfo.name, false)}/list`)")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")])])])])],-1)]))}const $=s(i,[["render",t]]);export{b as __pageData,$ as default};
