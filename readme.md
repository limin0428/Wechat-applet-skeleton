新建项目
点击-项目-新建项目-填写项目名称、项目存放目录-确定(创建完成)

目录结构：
```
├─ assets — 静态资源(图片，字体图标)
│  ├─ iconfont — 字体图标
│  └─ img — 模拟后台请求数据的文件夹
│
├─ pages — 页面文件
│  
├─ service — 请求
│  ├─ env.js — 环境(开发/正式)
│  ├─ api.js — 请求路径
│  └─ http.js — promise化的请求方法
│
└─ utils — 公共方法  
    ├─ tool.wxs — 增强wxml功能
    ├─ utils.js — 公共方法
    └─ wxUtils.js — 原生方法promise化
```

