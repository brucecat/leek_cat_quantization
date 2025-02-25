# 数据库设计

## 数据库结构设计

数据库类型：sqlite

## 数据库表

| photos      | user        | album       |
| ----------- | ----------- | ----------- |
| photoid     | userid      | albumid     |
| name        | username    | name        |
| desc        | usertoken   | userid      |
| upload_time | permissions | create_time |
| thumbnail   |             |             |
| photo_url   |             |             |
| albumid     |             |             |
| userid      |             |             |



# 后端接口设计



## 股票



## 获取大A所有股票列表



### 获取某一只股票的基本信息

**描述**：获取某一只股票的基本信息，主要包括

**请求**：

* **URL**：`/api/stock/detail`
* **方法**：`POST`

**输入参数**

| 名称       | 类型 | 必选 | 描述                                       |
| :--------- | :--- | :--- | :----------------------------------------- |
| ts_code    | str  | N    | 股票代码（支持多个股票同时提取，逗号分隔） |
| trade_date | str  | N    | 交易日期（YYYYMMDD）                       |
| start_date | str  | N    | 开始日期(YYYYMMDD)                         |
| end_date   | str  | N    | 结束日期(YYYYMMDD)                         |

**注：日期都填YYYYMMDD格式，比如20181010**

**输出参数**

| 名称       | 类型  | 描述                                                         |
| :--------- | :---- | :----------------------------------------------------------- |
| ts_code    | str   | 股票代码                                                     |
| trade_date | str   | 交易日期                                                     |
| open       | float | 开盘价                                                       |
| high       | float | 最高价                                                       |
| low        | float | 最低价                                                       |
| close      | float | 收盘价                                                       |
| pre_close  | float | 昨收价【除权价，前复权】                                     |
| change     | float | 涨跌额                                                       |
| pct_chg    | float | 涨跌幅 【基于除权后的昨收计算的涨跌幅：（今收-除权昨收）/除权昨收 】 |
| vol        | float | 成交量 （手）                                                |
| amount     | float | 成交额 （千元）                                              |



### 下载图片（Get /api/getphoto）

**描述**：用于获取图片文件。此操作不需要身份验证。

**请求**：

* **URL**：`/api/getphoto`
* **方法**：`GET`

**参数**：

* **查询参数**：

  * `photoid`: 图片唯一值ID（必填）
  * `thumbnail`: 是否为缩略图，默认为True（可选）

  **示例：**

* ```url
  http://127.0.0.1:5000/api/getphoto?photoid=1&thumbnail=false
  ```

**返回**：

* **格式**：`image/jpeg` 或 `image/png`（根据图片类型）
* **内容**：图片文件的二进制数据

---

### 上传图片（Post /api/upload）

**描述**：用户通过此端点上传图片，并在上传时需要提供 `usertoken` 进行身份验证。

**请求**：

* **URL**：`/api/upload`
* **方法**：`POST`
* **请求头**：

  * `Content-Type: multipart/form-data`
  * `Authorization: Bearer <usertoken>`

**参数**：

* **载荷**：包含图片文件和其他图片信息。

**请求体示例**：

```
--Boundary
Content-Disposition: form-data; name="file"; filename="example.jpg"
Content-Type: image/jpeg
[图片二进制数据]
--Boundary
Content-Disposition: form-data; name="desc"
图片描述
--Boundary
Content-Disposition: form-data; name="album"
相册名称
--Boundary--
```

**返回**：

* **格式**：`application/json`
* **示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": "photoid"
}
```

---



# 用户

## 新增用户（Post /api/adduser）

**描述**：管理员通过此端点新增用户，并在创建成功后获取用户token。需要提供 `usertoken` 进行身份验证。

**请求**：

* **URL**：`/api/adduser`
* **方法**：`POST`

**请求头**：

* `Content-Type: application/json`
* `Authorization: Bearer <usertoken>`

**参数**：

* **载荷**：包含用户名信息。

**请求体示例**：

```json
{
  "name": "新的用户名"
}
```

**返回**：

* **格式**：`application/json`
* **示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "userid": "123456",
	"username": "aaa",
	"permissions": 1,
	"token": "aabbcc"
  }
}
```

---

## 删除用户（Post /api/deluser）

**描述**：管理员通过此端点删除用户。需要提供 `usertoken` 进行身份验证。

**请求**：

* **URL**：`/api/deluser`
* **方法**：`POST`

**请求头**：

* `Content-Type: application/json`
* `Authorization: Bearer <usertoken>`

**参数**：

* **载荷**：包含用户名、用户ID信息。

**请求体示例**：

```json
{
	"userid": 123,
	"name": "用户名"
}
```

**返回**：

* **格式**：`application/json`
* **示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
	"deluser": "aaa",
  }
}
```

---

## 修改用户（Post /api/setuser）

**描述**：管理员通过此端点修改用户，可选择修改用户权限、用户名、token等。需要提供 `usertoken` 进行身份验证。

**请求**：

* **URL**：`/api/setuser`
* **方法**：`POST`

**请求头**：

* `Content-Type: application/json`
* `Authorization: Bearer <usertoken>`

**参数**：

* **载荷**：包含用户名、用户ID信息，以及要修改的内容，留空则为不修改。

**请求体示例**：

```json
{
	"userid": 123,
	"name": "用户名",
	"set_permissions": 0,
	"set_name": "",
	"regen_token": False
}
```

**返回**：

* **格式**：`application/json`
* **示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "userid": "123456",
	"username": "aaa",
	"permissions": 1,
	"token": "aabbcc"
  }
}
```

---

## 获取用户名（Get /api/getusername）

**描述**：用于获取用户的用户名。需要提供 `usertoken` 进行身份验证。

**请求**：

* **URL**：`/api/getusername`
* **方法**：`GET`

**请求头**：

* `Content-Type: application/json`
* `Authorization: Bearer <usertoken>`

**参数**：

* `userid`: 用户ID（必填）

* 示例：

  ```url
  curl -X GET http://127.0.0.1:5000/api/getusername?userid=1 -H "Authorization: Bearer 254d4299-354d-4f51-ab62-9b3da50a73e9"
  ```

**返回**：

* **格式**：`application/json`
* **示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "username": "testuser123"
  }
}
```

---

## 获取用户列表（POST /api/userlist）

**描述**：管理员通过此端点获取用户列表。需要提供 `usertoken` 进行身份验证。
**请求**：

* **URL**：`/api/userlist`
* **方法**：`POST`

**请求头**：

* `Content-Type: application/json`
* `Authorization: Bearer <usertoken>`

**参数**：

* **载荷**：无

**请求体示例**：

```json
{
	"page": 1,
	"perpage": 10
}
```

**返回**：

* **格式**：`application/json`
* **示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "current_page": 1,
    "per_page": 10,
    "users": [
      {
        "userid": "123456",
        "username": "testuser123",
        "permissions": 1
      },
      // ...更多用户
    ],
    "total": 10
  }
}
```

---

## 获取相册列表（Post /api/albumlist）

**描述**：管理员通过此端点获取相册列表。需要提供 `usertoken` 进行身份验证。

**请求**：

* **URL**：`/api/albumlist`
* **方法**：`POST`

**请求头**：

* `Content-Type: application/json`
* `Authorization: Bearer <usertoken>`

**参数**：

* **载荷**：无

**请求体示例**：

```json
{
	"page": 1,
	"perpage": 10
}
```

**返回**：

* **格式**：`application/json`
* **示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "current_page": 1,
    "per_page": 10,
    "albums": [
      {
        "album_id": "相册唯一标识符",
        "album_name": "相册名称",
        "description": "相册描述"
      },
      // ...更多相册
    ],
    "total": 10
  }
}
```

---

