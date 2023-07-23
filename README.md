# 家庭記帳app

此專案設置登入、註冊機制

提供登入的使用者瀏覽專屬支出清單，並可以依支出類別篩選支出清單，顯示當前支出清單總金額

使用者亦可新增支出資訊、編輯支出資訊、刪除支出資訊

畫面預覽：

![登入](https://github.com/gibbs-shih/AC-project-expense-tracker/example_photos/登入.png)
![註冊](https://github.com/gibbs-shih/AC-project-expense-tracker/example_photos/註冊.png)
![提示訊息](https://github.com/gibbs-shih/AC-project-expense-tracker/example_photos/提示訊息.png)
![首頁](https://github.com/gibbs-shih/AC-project-expense-tracker/example_photos/首頁.png)
![新增](https://github.com/gibbs-shih/AC-project-expense-tracker/example_photos/新增.png)
![編輯](https://github.com/gibbs-shih/AC-project-expense-tracker/example_photos/編輯.png)
![篩選](https://github.com/gibbs-shih/AC-project-expense-tracker/example_photos/篩選.png)


## 功能
- 設置登入、註冊頁面，另可以使用Facebook進行登入

- 顯示登入失敗、註冊失敗、登出成功等相關訊息提示

- 設有密碼加密提升安全性

- 依照登入的使用者顯示該使用者專屬的導航列及支出清單資訊

- 自動加總所列出支出清單的支出總額

- 依照所選支出類別篩選出該類別的支出清單

- 新增支出資訊、編輯支出資訊、刪除支出資訊


## 安裝

### 1.下載

開啟終端機(Terminal) cd 到欲存放專案的本機位置並執行:

`git clone https://github.com/gibbs-shih/AC-project-expense-tracker.git`

### 2.初始

`npm install`  --> 安裝套件

### 3.新增環境變數

找到.env.example檔案 

輸入自己的敏感資訊

並刪除.example字樣

### 4.種子資料

`npm run seed`  --> 執行種子資料腳本

會自動執行兩個種子資料腳本：

- Category Seeder: 終端顯示 `Generating Category Seeders...`

當終端顯示 `Category Seeders Generated!!!` 即設定完成

- Record Seeder: 終端顯示 `Generating User and Record Seeders...`

當終端顯示 `User and Record Seeders Generated!!!!` 即設定完成

### 5.開啟程式

`npm run dev`  --> 執行程式

終端顯示 `Express is listening on http://localhost:3000`、`mongodb connected!` 即啟動完成

請至 http://localhost:3000 開始使用程式


## 使用工具
- Node.js - 執行環境
- Visual Studio Code - 程式碼編輯器
- Express - 應用程式架構
- Express-Handlebars - 模板引擎
- Bootstrap - 開源前端框架
- MongoDB Atlas - 資料庫 
- Mongoose - ODM
- Express-session - cookie-session套件
- Passport - 驗證套件
- Bcryptjs - 加密套件
- Connect-flash - 提示訊息套件
- Dotenv - 環境參數套件
- Git - 版本控制軟體
