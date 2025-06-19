## external lib for the plugin

1. mvn package and get the jar file
2. go to idea setting -> EasyCodeMybatisCodeHelper
3. configure the external lib path
4. add the groovy script

example: D:/code/github/externalLibDemo/target/easycode-utils-1.0.0.jar

groovy script:
```groovy
param.put('stringHelper', com.bruce.utils.StringHelper.getInstance())
```
5. use the external lib in your template

```xml
haha = ${stringHelper.toUpperCase($tableInfo.fullColumn.get(0).name)}
```

### Code completion for external lib
1. go to file EasyCode -> velocity_implicit.vm file

2. add comment like this:
```
#* @vtlvariable name="stringHelper" type="com.bruce.utils.StringHelper" *#
```

### contact me when meet problem.
https://brucege.com/doc/#/contactMe Or gejun123456@gmail.com


