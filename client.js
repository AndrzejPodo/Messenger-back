WebSocket = require("ws");
ws = new WebSocket("ws://localhost:8080", {
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IiBBbmRyemVqIiwiaWQiOjIsInRpbWUiOiIyMDE5LTAzLTE4VDE1OjA0OjIyLjU0MVoiLCJpYXQiOjE1NTI5MjE0NjIsImV4cCI6MTU1Mjk0MzA2Mn0.bkpfyU0K5WIZ6ys-9d5i-KhhN-twUExfJ1qy4aHCRQY"
  }
});
