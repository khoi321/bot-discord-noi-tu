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
# Chạy chương trình
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
