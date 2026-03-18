import { io } from "socket.io-client";
import API from "../api/axios.js";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:4000";
let socket;

const socketOptions = {
	withCredentials: true,
	autoConnect: false,
	transports: ["websocket"],
	reconnectionAttempts: 5
};

const initSocket = () => {

	if (socket && socket.connected) return socket;

	socket = io(SOCKET_URL, socketOptions);

  // Case 1: Error during connection
	socket.on("connect_error", async (err) => {
		if (err.message === "jwt expired" || err.message === "Unauthorized") {
			try {
				await API.post("/auth/refresh-token");
				socket.connect();
			} catch (error) {
				console.error("Token refresh failed");
			}
		}
	});

  // ✅ Case 2: Token expires AFTER connection
  socket.on("disconnect", async (reason) => {
    console.log("Socket disconnected:", reason);

    if (reason === "io server disconnect") {
      try {
        await API.post("/auth/refresh-token");

        // IMPORTANT: manually reconnect
        socket.connect();
      } catch (error) {
        console.error("Reconnection failed after token expiry");
      }
    }
  });

  if (!socket.connected) {
    socket.connect();
  }
	return socket;
};

const getSocket = () => socket;

const disconnectSocket = () => {

	if (socket) {
		
		socket.disconnect();
		socket = null;
	}
};

export { getSocket, initSocket, disconnectSocket };