# Giới thiệu chung
Bot nối từ Discord bằng tiếng Anh. Chạy trên ngôn ngữ JavaScript.

# Cài đặt
- **Tải Project từ GitHub về máy:**
  - **Cách 1**: Từ trang của dự án trên GitHub:
    - Truy cập trang GitHub của dự án.
    - Nhấp vào nút **"Code"** và chọn **"Download ZIP"** để tải về toàn bộ mã nguồn dưới dạng file ZIP.
    - Truy cập vào thư mục chứa file tải xuống
    - Giải nén file ZIP vào thư mục mong muốn trên máy tính của bạn.
    - Tìm hiểu [cách giải nén](https://www.youtube.com/results?search_query=c%C3%A1ch+gi%E1%BA%A3i+n%C3%A9n)

  - **Cách 2**: Sử dụng Git để clone repository:
    - Mở terminal hoặc command prompt.
    - Điều hướng đến thư mục nơi bạn muốn lưu dự án.
    - Chạy lệnh sau để clone repository:
      ```sh
      git clone <URL_repository>
      ```
      (Thay `<URL_repository>` bằng URL của repository trên GitHub, ví dụ: `https://github.com/username/repository.git`).
    - Di chuyển vào thư mục dự án vừa được clone:
      ```sh
      cd <tên_thư_mục>
      ```
      (Thay `<tên_thư_mục>` bằng tên thư mục của dự án).
- **Cài đặt IDE hoặc Text Editor:**
  - Sử dụng Text Editor Visual Studio Code (VS Code):
    - Tải và cài đặt từ trang web chính thức [Visual Studio Code](https://code.visualstudio.com/).
    - Cài đặt các tiện ích mở rộng cần thiết để hỗ trợ phát triển JavaScript.
    - Xem chi tiết cách cài đặt VS Code [tại đây](https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+vs+code+%2F+how+to+install+vs+code).
    - Khuyến khích sử dụng VS Code vì nó dễ sử dụng :))
  - Sử dụng các Text Editor hoặc IDE khác nếu bạn thấy phù hợp:
    - WebStorm
    - Sublime Text
    - Atom
    - Brackets
    - Eclipse
    - Notepad++

- **Cài đặt môi trường:**
  - Cài đặt Node.js:
    - Tải và cài đặt Node.js từ trang web chính thức [Node.js](https://nodejs.org/). Chọn phiên bản LTS (Long Term Support) để đảm bảo tính ổn định.
    - Kiểm tra cài đặt Node.js bằng cách mở terminal hoặc command prompt và gõ lệnh:
      ```sh
      node -v
      ```
      và
      ```sh
      npm -v
      ```
    - Đảm bảo rằng các phiên bản của Node.js và npm (Node Package Manager) đã được cài đặt thành công.
    - Tham khảo thêm về cách cài đặt môi trường [tại đây](https://www.youtube.com/results?search_query=c%C3%A1ch+c%C3%A0i+%C4%91%E1%BA%B7t+m%C3%B4i+js+%2F+how+to+install+js+inviroment)
- **Truy cập dự án trên VS Code:**
  - **Cách 1**:
    - Mở Visual Studio Code (VS Code).
    - Chọn **"File"** từ menu trên cùng.
    - Chọn **"Open Folder..."**.
    - Điều hướng đến thư mục chứa dự án mà bạn đã tải về hoặc clone từ GitHub.
    - Chọn thư mục dự án và nhấp vào **"Select Folder"** (hoặc **"Open"** trên macOS).
    - Dự án của bạn sẽ được mở trong VS Code.

  - **Cách 2**:
    - Kéo và thả thư mục dự án từ File Explorer (Windows) hoặc Finder (macOS) vào cửa sổ VS Code.
    - VS Code sẽ tự động mở thư mục dự án và hiển thị nội dung của nó trong giao diện.

  - **Cách 3**:
    - Mở terminal tích hợp trong VS Code bằng cách nhấn `Ctrl + `` (hoặc `Cmd + `` trên macOS).
    - Sử dụng lệnh `cd` để điều hướng đến thư mục chứa dự án.
      ```sh
      cd <tên_thư_mục>
      ```
    - Chạy lệnh sau để mở thư mục dự án trong VS Code:
      ```sh
      code .
      ```
    - Dự án sẽ được mở trong một cửa sổ mới của VS Code.

  - **Cách 4**:
    - Mở File Explorer (Windows) hoặc Finder (macOS).
    - Điều hướng đến thư mục chứa dự án.
    - Nhấp chuột phải vào thư mục dự án.
    - Chọn **"Open with Code"** từ menu.
    - Thư mục dự án sẽ được mở trong VS Code.
  - Tìm hiểu thêm về cách [sử dụng VS Code](https://www.youtube.com/results?search_query=c%C3%A1ch+m%E1%BB%9F+th%C6%B0+m%E1%BB%A5c+tr%C3%AAn+VS+code)
# Chỉnh sửa trạng thái
**Truy cập vào file `bot.mjs`**
- **Chỉnh sửa trạng thái (status) của bot:**
  - **Trạng thái:**
    - `status: 'online'`: Bot hoạt động bình thường (xanh lá).
    - `status: 'idle'`: Bot không hoạt động hoặc đang chờ đợi (vàng).
    - `status: 'dnd'`: Bot bận, không muốn bị làm phiền (đỏ).
    - `status: 'invisible'`: Bot ẩn, không hiển thị trạng thái trực tuyến.

  - **Hoạt động:**
    - `type: ActivityType.Playing`: Bot đang chơi một trò chơi.
    - `type: ActivityType.Listening`: Bot đang nghe một thứ gì đó.
    - `type: ActivityType.Watching`: Bot đang theo dõi một cái gì đó.
    - `type: ActivityType.Streaming`: Bot đang phát trực tiếp.
    - `type: ActivityType.Competing`: Bot đang tham gia vào một cuộc thi hoặc sự kiện.

  - **Custom Status:**
    - `name`: Tên trạng thái bạn muốn hiển thị, ví dụ: "waiting for love".
    - `type`: Loại hoạt động của trạng thái, thay thế với một trong các giá trị sau:
      - `ActivityType.Playing` để chơi một trò chơi.
      - `ActivityType.Listening` để nghe một cái gì đó.
      - `ActivityType.Watching` để theo dõi một cái gì đó.
      - `ActivityType.Streaming` để phát trực tiếp.
      - `ActivityType.Competing` để tham gia vào một cuộc thi hoặc sự kiện.
    - `url`: URL để sử dụng khi `type` là `ActivityType.Streaming`. Nếu không phải `Streaming`, trường này có thể bỏ trống.

```js
client.user.setPresence({
  status: 'idle', // Thay thế với trạng thái bạn muốn: 'online', 'idle', 'dnd', 'invisible'
  activities: [{
      name: 'waiting for love', // Thay thế với tên trạng thái bạn muốn hiển thị
      type: ActivityType.Watching, // Thay thế với loại hoạt động bạn muốn: PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
      url: '' // Thêm URL nếu loại hoạt động là STREAMING, nếu không thì để trống
  }],
});
```
## Lấy và thay thế TOKEN

### Lấy TOKEN Discord

1. Truy cập vào [Discord Developer Portal](https://discord.com/developers/applications).
2. Đăng nhập bằng tài khoản Discord của bạn nếu chưa đăng nhập.
3. Chọn ứng dụng bot của bạn từ danh sách các ứng dụng.
4. Vào phần **Bot** trong menu bên trái.
5. Nhấp vào nút **Copy** dưới mục **TOKEN** để sao chép TOKEN của bạn. **Lưu ý:** Đừng chia sẻ TOKEN này với bất kỳ ai vì nó có thể cho phép người khác điều khiển bot của bạn.

### Bật các Intent cần thiết

1. Trong cùng trang của ứng dụng bot, chuyển đến phần **Bot**.
2. Tìm mục **Privileged Gateway Intents**.

   - **Presence Intent:**
     - Bật **Presence Intent** để bot có thể nhận các sự kiện cập nhật trạng thái người dùng.
     - Chú ý: Khi bot của bạn đạt 100 hoặc nhiều hơn server, việc bật tính năng này sẽ yêu cầu xác minh và phê duyệt từ Discord. Xem thêm chi tiết [tại đây](https://discord.com/developers/docs/topics/gateway#presence-update).

   - **Server Members Intent:**
     - Bật **Server Members Intent** để bot có thể nhận các sự kiện liên quan đến thành viên trong server.
     - Chú ý: Khi bot của bạn đạt 100 hoặc nhiều hơn server, việc bật tính năng này sẽ yêu cầu xác minh và phê duyệt từ Discord. Xem thêm chi tiết [tại đây](https://discord.com/developers/docs/topics/gateway#guild-membership-screening).

   - **Message Content Intent:**
     - Bật **Message Content Intent** để bot có thể nhận nội dung tin nhắn trong hầu hết các tin nhắn.
     - Chú ý: Khi bot của bạn đạt 100 hoặc nhiều hơn server, việc bật tính năng này sẽ yêu cầu xác minh và phê duyệt từ Discord. Xem thêm chi tiết [tại đây](https://discord.com/developers/docs/topics/gateway#message-content-intent).

### Thay thế TOKEN vào mã nguồn

1. Mở tệp mã nguồn của bot (ví dụ: `bot.mjs`).
2. Tìm dòng chứa `client.login('YOUR_BOT_TOKEN');`.
3. Thay thế `'YOUR_BOT_TOKEN'` bằng TOKEN mà bạn đã sao chép từ Discord Developer Portal:

```js
client.login('YOUR_BOT_TOKEN'); // Thay thế YOUR_BOT_TOKEN thành token bot của bạn

```
## Cách mời bot vào server Discord

### 1. Tạo URL mời bot

1. Truy cập vào [Discord Developer Portal](https://discord.com/developers/applications).
2. Đăng nhập bằng tài khoản Discord của bạn nếu chưa đăng nhập.
3. Chọn ứng dụng bot của bạn từ danh sách các ứng dụng.
4. Trong menu bên trái, chọn **OAuth2**.
5. Chọn tab **URL Generator** dưới phần OAuth2.

### 2. Cấu hình quyền và phạm vi

1. **Chọn phạm vi (Scopes):**
   - Đánh dấu chọn **bot**. Đây là phạm vi cần thiết để thêm bot vào server.

2. **Chọn quyền (Bot Permissions):**
   - Trong phần **Bot Permissions**, chọn các quyền mà bot của bạn cần để hoạt động. Ví dụ:
     - `Send Messages`: Để gửi tin nhắn.
     - `Read Message History`: Để đọc lịch sử tin nhắn.
     - `Manage Messages`: Để quản lý tin nhắn (xóa, ghim, v.v.).
     - `View Channels`: Để xem các kênh.
     - ``Attach Files``: Để gửi tệp đính kèm.
     - `Add Reactions`: (Phản ứng) thêm biểu cảm vào các tin nhắn trong các kênh mà bot có quyền truy cập.
     - Chọn các quyền khác nếu cần.
     - Khuyến khích chọn quyền `Administrator`

### 3. Tạo và sao chép URL

1. Sau khi đã cấu hình các phạm vi và quyền, cuộn xuống dưới để thấy URL mời bot được tạo ra.
2. Sao chép URL này.

### 4. Mời bot vào server

1. Mở một trình duyệt web và dán URL mà bạn đã sao chép vào thanh địa chỉ.
2. Bạn sẽ được yêu cầu chọn server nơi bạn muốn mời bot vào.
3. Chọn server từ danh sách thả xuống mà bạn có quyền quản lý (quyền quản trị hoặc quyền tương đương).
4. Nhấp vào **Authorize** để gửi lời mời bot.
5. Hoàn tất quá trình bằng cách giải CAPCHA nếu có yêu cầu.

### 5.Kiểm tra quyền của bot
 - Đảm bảo bot có đủ quyền truy cấp vào các kênh.
 - Đảm bảo bot có thể xem tin nhắn,thêm phản ứng,...

## Hướng dẫn mở Terminal và cài đặt npm packages trên Visual Studio Code

### 1. Mở Terminal trong Visual Studio Code

1. **Mở Visual Studio Code**:
   - Khởi động Visual Studio Code từ Desktop hoặc từ menu Start (Windows) / Applications (macOS).

2. **Mở Terminal**:
   - **Cách 1**: Sử dụng phím tắt:
     - Nhấn `Ctrl + `` (phím backtick, nằm ngay dưới phím Esc trên bàn phím) để mở terminal.
   - **Cách 2**: Sử dụng menu:
     - Vào menu **Terminal** ở thanh công cụ trên cùng.
     - Chọn **New Terminal** từ danh sách thả xuống.

### 2. Cài đặt npm packages

1. **Xác nhận Node.js và npm đã được cài đặt**:
   - Trong terminal, gõ các lệnh sau để kiểm tra phiên bản Node.js và npm:
     ```bash
     node -v
     npm -v
     ```
   - Nếu bạn thấy thông tin phiên bản, có nghĩa là Node.js và npm đã được cài đặt. Nếu không, bạn cần cài đặt Node.js từ [trang web chính thức](https://nodejs.org/).

2. **Điều hướng đến thư mục dự án**:
   - Sử dụng lệnh `cd` để điều hướng đến thư mục chứa dự án của bạn. Ví dụ:
     ```bash
     cd đường_dẫn_tới_thư_mục_dự_án
     ```

3. **Cài đặt các package cần thiết**:
   - Đảm bảo rằng bạn đã có một tệp `package.json` trong thư mục dự án. Tệp này chứa danh sách các package mà bạn cần cài đặt.
   - Chạy lệnh sau để cài đặt tất cả các package được liệt kê trong `package.json`:
     ```bash
     npm install
     ```
   - Nếu bạn muốn cài đặt một package cụ thể, sử dụng lệnh:
     ```bash
     npm install tên-package
     ```
     Ví dụ, để cài đặt `discord.js`, bạn sẽ chạy:
     ```bash
     npm install discord.js
     ```

4. **Kiểm tra các package đã cài đặt**:
   - Các package sẽ được cài đặt trong thư mục `node_modules` và danh sách các package sẽ được cập nhật trong tệp `package.json` và `package-lock.json`.

### 3. Kiểm Tra Hoạt Động

- **Kiểm Tra Các Package Đã Cài:**
  - Bạn có thể kiểm tra các package đã được cài đặt bằng lệnh:
    ```bash
    npm list
    ```
  - Lệnh này sẽ liệt kê tất cả các package và phiên bản của chúng.

- **Kiểm Tra Phiên Bản Node.js và npm:**
  - Để đảm bảo bạn đang sử dụng phiên bản Node.js và npm đúng, bạn có thể kiểm tra phiên bản của chúng bằng các lệnh sau:
    ```bash
    node -v
    npm -v
    ```
## Hướng Dẫn Sử Dụng Terminal Để Chạy Bot Discord Bằng Node.js Trên VS Code

### 1. Mở Dự Án và Terminal

1. **Mở VS Code:**
   - Khởi động Visual Studio Code trên máy tính của bạn.

2. **Mở Dự Án:**
   - Mở dự án bot Discord của bạn bằng cách chọn **File** -> **Open Folder...** và điều hướng đến thư mục chứa dự án.

3. **Mở Terminal:**
   - Nhấn tổ hợp phím `Ctrl + `` (dấu huyền) để mở Terminal trong VS Code.
   - Hoặc bạn có thể mở Terminal bằng cách vào menu **Terminal** -> **New Terminal**.

### 2. Chạy Bot Discord

1. **Chuyển Đến Thư Mục Dự Án:**
   - Nếu bạn chưa ở trong thư mục dự án của mình, hãy sử dụng lệnh `cd` trong Terminal để chuyển đến thư mục chứa dự án:
     ```bash
     cd đường_dẫn_đến_thư_mục_dự_án
     ```

2. **Chạy Bot Bằng Node.js:**
   - Để khởi chạy bot Discord, bạn sử dụng lệnh `node` để chạy file chính của bot.File chính là `bot.mjs` Ví dụ:
     ```bash
     node bot.mjs
     ```
     **hoặc**
     ```bash
     node .
     ```
   - Sau khi lệnh này được thực thi, bot của bạn sẽ hoạt động và bạn sẽ thấy thông báo trạng thái trong Terminal (nếu bot được cấu hình để in ra các trạng thái khi chạy).

### 3. Kiểm Tra Hoạt Động Của Bot

1. **Kiểm Tra Thông Báo Từ Bot:**
   - Trong Terminal, bạn sẽ thấy các dòng thông báo khi bot của bạn khởi chạy thành công, chẳng hạn như:
     ```
     Ready!
     Bot Started
     Logged in as BotName#1234!
     ```

2. **Kết Nối Bot Với Server Discord:**
   - Đảm bảo rằng bạn đã thêm bot của mình vào server Discord bằng cách tạo một URL mời và cấp quyền cho bot.
   - Khi bot chạy thành công, nó sẽ bắt đầu hoạt động trên server mà bạn đã mời nó vào.

3. **Dừng Bot:**
   - Nếu bạn muốn dừng bot, bạn có thể nhấn tổ hợp phím `Ctrl + C` trong Terminal.

### 4. Debug và Xử Lý Lỗi

- **Kiểm Tra Lỗi:**
  - Nếu bot không hoạt động như mong đợi hoặc gặp lỗi, các thông báo lỗi sẽ xuất hiện trong Terminal. Bạn có thể kiểm tra lỗi để biết cần sửa lỗi nào.

- **Chỉnh Sửa Mã Lỗi:**
  - Nếu gặp lỗi, hãy chỉnh sửa mã trong file bot của bạn, sau đó chạy lại lệnh `node bot.mjs` để khởi động lại bot.

### 5. Tự Động Chạy Bot (Optional)

- Nếu bạn muốn bot của mình tự động chạy lại khi có thay đổi, bạn có thể sử dụng công cụ như `nodemon`. Để cài đặt `nodemon`, hãy chạy lệnh:
  ```bash
  npm install -g nodemon
  ```
- Sau đó, bạn có thể khởi động bot bằng lệnh
  ```
  nodemon bot.mjs
  ```
- Lệnh này sẽ tự động khởi động lại bot mỗi khi bạn thay đổi mã.
# Kết quả
- Sau khi chạy `node .` trên Termina ở VS Code thì bạn sẽ thấy bot online.
- Chạy lệnh `!!noitu` để cài đặt,
- Chạy lệnh `!!resetnoitu` để reset nối từ.
