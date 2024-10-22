# 怎么调用封装好的API函数 {#how-use-function}

PHPQQ机器人框架 将QQ机器人API封装为函数让你快速调用，尽力为您提供最好的开发体验。

## API函数类{#function}
- 1.我们通过封装API的方式让您快速调用
- 2.使用Class(类)方式封装：

```
class GroupAPI{
    public function __construct($url,$headers){
        //对象化$url变量
        $this->url=$url;
        //对象化$headers变量
        $this->headers=$headers;
        //对象化$msg_seq变量
        $this->msg_seq=1;
        //对象化日志数组
        $this->plugin_return=[];
    }
    
    //函数

}
```

- 3.在传入插件之前我们已经创建了类的对象，您可以直接使用
``
$API调用对象变量名->函数名(...参数);
``
进行调用，例如
``
向群聊发送一条被动消息
``
：
```
$group->Send_Group_Message($data->data->group_openid,"测试",$data->data->msg_id);
```
其中group是API调用对象变量名，Send_Group_Message是函数名，$data->data->group_openid,"测试",$data->data->msg_id均为参数