import{_ as s,c as e,o as p,j as n,a as l}from"./chunks/framework.CkEP6GAn.js";const b=JSON.parse('{"title":"Template Examples","description":"","frontmatter":{},"headers":[],"relativePath":"api/template-examples.md","filePath":"api/template-examples.md"}'),t={name:"api/template-examples.md"};function i(c,a,o,u,r,m){return p(),e("div",null,a[0]||(a[0]=[n("h1",{id:"template-examples",tabindex:"-1"},[l("Template Examples "),n("a",{class:"header-anchor",href:"#template-examples","aria-label":'Permalink to "Template Examples"'},"​")],-1),n("h2",{id:"entity-class-template",tabindex:"-1"},[l("Entity Class Template "),n("a",{class:"header-anchor",href:"#entity-class-template","aria-label":'Permalink to "Entity Class Template"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"package ${tableInfo.savePackageName};")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"}")])])])])],-1),n("h2",{id:"mybatis-mapper-template",tabindex:"-1"},[l("MyBatis Mapper Template "),n("a",{class:"header-anchor",href:"#mybatis-mapper-template","aria-label":'Permalink to "MyBatis Mapper Template"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,'<?xml version="1.0" encoding="UTF-8"?>')]),l(`
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
`),n("span",{class:"line"},[n("span",null,'    <select id="selectByPrimaryKey" parameterType="$\\{tableInfo.pkColumn.get(0).shortType\\}" resultMap="BaseResultMap">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        select ")]),l(`
`),n("span",{class:"line"},[n("span",null,'        <include refid="Base_Column_List" />')]),l(`
`),n("span",{class:"line"},[n("span",null,"        from ${tableInfo.name}")]),l(`
`),n("span",{class:"line"},[n("span",null,"        where ${tableInfo.pkColumn.get(0).name} = #${tableInfo.pkColumn.get(0).name}")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </select>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"</mapper>")])])])])],-1),n("h2",{id:"service-interface-template",tabindex:"-1"},[l("Service Interface Template "),n("a",{class:"header-anchor",href:"#service-interface-template","aria-label":'Permalink to "Service Interface Template"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"package ${tableInfo.savePackageName};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"/**")]),l(`
`),n("span",{class:"line"},[n("span",null," * ${tableInfo.comment} Service Interface")]),l(`
`),n("span",{class:"line"},[n("span",null," * ")]),l(`
`),n("span",{class:"line"},[n("span",null," * @author ${author}")]),l(`
`),n("span",{class:"line"},[n("span",null," * @since ${time.getCurrentTime()}")]),l(`
`),n("span",{class:"line"},[n("span",null," */")]),l(`
`),n("span",{class:"line"},[n("span",null,"public interface ${tableInfo.name}Service {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * Insert a new record")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    int insert(${tableInfo.name} record);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * Select by primary key")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ${tableInfo.name} selectByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * Update by primary key")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    int updateByPrimaryKey(${tableInfo.name} record);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    /**")]),l(`
`),n("span",{class:"line"},[n("span",null,"     * Delete by primary key")]),l(`
`),n("span",{class:"line"},[n("span",null,"     */")]),l(`
`),n("span",{class:"line"},[n("span",null,"    int deleteByPrimaryKey(${tableInfo.pkColumn.get(0).shortType} id);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")])])])])],-1),n("h2",{id:"controller-template",tabindex:"-1"},[l("Controller Template "),n("a",{class:"header-anchor",href:"#controller-template","aria-label":'Permalink to "Controller Template"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"package ${tableInfo.savePackageName};")]),l(`
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
`),n("span",{class:"line"},[n("span",null,'@RequestMapping("${tool.getClassName($tableInfo.name, false)}")')]),l(`
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
`),n("span",{class:"line"},[n("span",null,"}")])])])])],-1),n("h2",{id:"frontend-api-template",tabindex:"-1"},[l("Frontend API Template "),n("a",{class:"header-anchor",href:"#frontend-api-template","aria-label":'Permalink to "Frontend API Template"'},"​")],-1),n("div",null,[n("div",{class:"language-velocity vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"velocity"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[n("code",null,[n("span",{class:"line"},[n("span",null,"// ${tableInfo.name} API")]),l(`
`),n("span",{class:"line"},[n("span",null,"export const ${tool.getClassName($tableInfo.name, false)}Api = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // Get by ID")]),l(`
`),n("span",{class:"line"},[n("span",null,"  getById: (id: ${tableInfo.pkColumn.get(0).shortType}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.get<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // Create new record")]),l(`
`),n("span",{class:"line"},[n("span",null,"  create: (data: ${tableInfo.name}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.post<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}`, data),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // Update record")]),l(`
`),n("span",{class:"line"},[n("span",null,"  update: (id: ${tableInfo.pkColumn.get(0).shortType}, data: ${tableInfo.name}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.put<${tableInfo.name}>(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`, data),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // Delete record")]),l(`
`),n("span",{class:"line"},[n("span",null,"  delete: (id: ${tableInfo.pkColumn.get(0).shortType}) => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.delete(`/api/${tool.getClassName($tableInfo.name, false)}/${id}`),")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // List all records")]),l(`
`),n("span",{class:"line"},[n("span",null,"  list: () => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"    request.get<${tableInfo.name}[]>(`/api/${tool.getClassName($tableInfo.name, false)}/list`)")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")])])])])],-1)]))}const f=s(t,[["render",i]]);export{b as __pageData,f as default};
