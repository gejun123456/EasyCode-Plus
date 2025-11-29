import{_ as n,a as s,o as e,ae as t}from"./chunks/framework.ckxf1npO.js";const h=JSON.parse('{"title":"模板开发","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/templates.md","filePath":"zh/guide/templates.md"}'),p={name:"zh/guide/templates.md"};function l(i,a,o,c,d,r){return e(),s("div",null,[...a[0]||(a[0]=[t(`<h1 id="模板开发" tabindex="-1">模板开发 <a class="header-anchor" href="#模板开发" aria-label="Permalink to &quot;模板开发&quot;">​</a></h1><p>本章节介绍如何编写和管理 EasyCode Plus 的 Velocity 模板。</p><h2 id="模板基础" tabindex="-1">模板基础 <a class="header-anchor" href="#模板基础" aria-label="Permalink to &quot;模板基础&quot;">​</a></h2><ul><li>Velocity 模板是一种基于变量和指令的文本模板，支持 Java 风格的变量引用和流程控制。</li><li>你可以在模板中使用 <code>\${变量名}</code> 访问传入的对象属性。</li></ul><h2 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h2><ul><li><code>#foreach($item in $list)</code>：遍历集合</li><li><code>#if($condition)</code>：条件判断</li><li><code>#set($var = value)</code>：变量赋值</li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-velocity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">velocity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#foreach($column in $tableInfo.fullColumn)</span></span>
<span class="line"><span>private \${column.shortType} \${column.name}; // \${column.comment}</span></span>
<span class="line"><span>#end</span></span></code></pre></div><h2 id="模版例子" tabindex="-1">模版例子 <a class="header-anchor" href="#模版例子" aria-label="Permalink to &quot;模版例子&quot;">​</a></h2><h4 id="移除表名前缀" tabindex="-1">移除表名前缀 <a class="header-anchor" href="#移除表名前缀" aria-label="Permalink to &quot;移除表名前缀&quot;">​</a></h4><p>编辑globalconfig中的mybatisCodeHelper.vm</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#if($tableInfo.obj.name.startsWith(&quot;table_&quot;))</span></span>
<span class="line"><span>$!tableInfo.setName($tableInfo.name.substring(5))</span></span>
<span class="line"><span>#end</span></span></code></pre></div><p>也可以定义一个变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#set($entityName=$tableInfo.name)</span></span>
<span class="line"><span>#if($tableInfo.obj.name.startsWith(&quot;table_&quot;))</span></span>
<span class="line"><span>#set($entityName=$tableInfo.name.substring(5))</span></span>
<span class="line"><span>#end</span></span></code></pre></div><p>在模版中使用 \${entityName}来进行引用，多个模版可以直接引用这个变量</p><h4 id="entity类添加后缀" tabindex="-1">Entity类添加后缀 <a class="header-anchor" href="#entity类添加后缀" aria-label="Permalink to &quot;Entity类添加后缀&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#set($entityName=$tableInfo.name)</span></span>
<span class="line"><span>#set($entityName = $tool.append($entityName,‘Entity’))</span></span></code></pre></div><p>模版中使用 \${entityName}来进行引用</p><h4 id="移除字段前缀" tabindex="-1">移除字段前缀 <a class="header-anchor" href="#移除字段前缀" aria-label="Permalink to &quot;移除字段前缀&quot;">​</a></h4><p>编辑globalconfig中的mybatisCodeHelper.vm</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#set($removeColumnPrefix=&quot;f_&quot;)</span></span>
<span class="line"><span>#foreach($column in $tableInfo.fullColumn)</span></span>
<span class="line"><span>#if($column.obj.name.startsWith($removeColumnPrefix))</span></span>
<span class="line"><span>$!column.setName($tool.firstLowerCase($column.getName().substring(1)))</span></span>
<span class="line"><span>#end</span></span>
<span class="line"><span>#end</span></span></code></pre></div><h4 id="insert移除部分列" tabindex="-1">insert移除部分列 <a class="header-anchor" href="#insert移除部分列" aria-label="Permalink to &quot;insert移除部分列&quot;">​</a></h4><p>编辑你的xml模版 比如insertBatch</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    #set($insertSkipFields = [&quot;create_time&quot;,&quot;update_time&quot;])</span></span>
<span class="line"><span>    &lt;insert id=&quot;insertBatch&quot; keyProperty=&quot;$!pk.name&quot; useGeneratedKeys=&quot;true&quot;&gt;</span></span>
<span class="line"><span>        insert into $!{tableInfo.obj.name}</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>#foreach($column in $tableInfo.otherColumn)</span></span>
<span class="line"><span>#if($insertSkipFields.contains($column.obj.name))</span></span>
<span class="line"><span>#elseif($foreach.hasNext)</span></span>
<span class="line"><span>            $!column.obj.name,</span></span>
<span class="line"><span>        #else</span></span>
<span class="line"><span>            $!column.obj.name</span></span>
<span class="line"><span>        #end#end</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        values</span></span>
<span class="line"><span>        &lt;foreach collection=&quot;entities&quot; item=&quot;entity&quot; separator=&quot;,&quot;&gt;</span></span>
<span class="line"><span>        (</span></span>
<span class="line"><span>#foreach($column in $tableInfo.otherColumn)</span></span>
<span class="line"><span>#if($insertSkipFields.contains($column.obj.name))</span></span>
<span class="line"><span>#elseif($foreach.hasNext)</span></span>
<span class="line"><span>            #{entity.$!{column.name}},</span></span>
<span class="line"><span>#else</span></span>
<span class="line"><span>            #{entity.$!{column.name}}</span></span>
<span class="line"><span>#end#end</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>        &lt;/foreach&gt;</span></span>
<span class="line"><span>    &lt;/insert&gt;</span></span></code></pre></div><h4 id="加上jdbctype-typehandler等" tabindex="-1">加上jdbcType typeHandler等 <a class="header-anchor" href="#加上jdbctype-typehandler等" aria-label="Permalink to &quot;加上jdbcType typeHandler等&quot;">​</a></h4><p>编辑globalconfig中的mybatisCodeHelper.vm</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#if($tool.newHashSet(&quot;java.lang.String&quot;).contains($column.type))</span></span>
<span class="line"><span>        #set($jdbcType=&quot;VARCHAR&quot;)</span></span>
<span class="line"><span>        #elseif($tool.newHashSet(&quot;java.lang.Integer&quot;,&quot;int&quot;).contains($column.type))</span></span>
<span class="line"><span>        #set($jdbcType=&quot;INTEGER&quot;)</span></span>
<span class="line"><span>        #else</span></span>
<span class="line"><span>        ##其他类型</span></span>
<span class="line"><span>        #set($jdbcType=&quot;VARCHAR&quot;)</span></span>
<span class="line"><span>    #end</span></span>
<span class="line"><span>$tool.call($column.ext.put(&quot;jdbcType&quot;, $jdbcType))</span></span></code></pre></div><p>然后在xml中使用,ext是一个map，可以随意添加属性，方便用户使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#{$!{column.name},jdbcType=$!{column.ext.jdbcType}}</span></span></code></pre></div><p>这种代码调用即可</p><h4 id="获取表名-字段名-字段类型-schema名" tabindex="-1">获取表名，字段名，字段类型，schema名 <a class="header-anchor" href="#获取表名-字段名-字段类型-schema名" aria-label="Permalink to &quot;获取表名，字段名，字段类型，schema名&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    表名= tableInfo.obj.name</span></span>
<span class="line"><span>    字段名= column.obj.name</span></span>
<span class="line"><span>    字段类型=$!tool.getField($tableInfo.fullColumn.get(0).obj.dataType, &quot;typeName&quot;)</span></span>
<span class="line"><span>    字段java类型=column.type</span></span>
<span class="line"><span>    schema名=\${tableInfo.obj.getParent().getName()}</span></span></code></pre></div><h2 id="更多模版具体用法可以看api" tabindex="-1">更多模版具体用法可以看api <a class="header-anchor" href="#更多模版具体用法可以看api" aria-label="Permalink to &quot;更多模版具体用法可以看api&quot;">​</a></h2><p><a href="/EasyCode-Plus/zh/api.html">Api</a></p><h2 id="高级用法" tabindex="-1">高级用法 <a class="header-anchor" href="#高级用法" aria-label="Permalink to &quot;高级用法&quot;">​</a></h2><ul><li>支持自定义工具类、全局变量、Groovy 脚本等扩展能力。</li><li>使用EasyCode目录来生成代码，可以加入git实现团队协作与模板共享。</li></ul>`,36)])])}const m=n(p,[["render",l]]);export{h as __pageData,m as default};
