```mermaid
---
title: 系统数据实体类图
---
classDiagram
direction TB
class 招募信息表{
	招募信息编号
	招募岗位
	smallint 招募人数
	报名方式
	bigint 报名开始时间
	bigint 报名截止时间

	bigint 发布时间
}
```
