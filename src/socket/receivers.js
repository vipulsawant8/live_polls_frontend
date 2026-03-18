import POLL_EVENTS from "@/socket/events.js";
import { socketUpdatePoll, /* voteAcceptedMessage, voteRejectedMessage,*/ setMessage /*, socketClosePoll*/, selectPollByID } from "../app/features/poll/pollSlice.js";
import notify from "@/utils/notify.js";
import { useSelector } from "react-redux";

const registerPollReceivers = (socket, dispatch) => {

	if (!socket) return;

	socket.on(POLL_EVENTS.UPDATE_POLL_DATA, ({ poll }) => {
		dispatch(socketUpdatePoll(poll));
	});

	socket.on(POLL_EVENTS.VOTE_ACCEPTED, ({ message }) => {
		dispatch(setMessage({ type: "success", message: message || "Vote Counted" }));
		notify.success(message || "Vote Counted!");
	});

	socket.on(POLL_EVENTS.VOTE_REJECTED, ({ message }) => {
		dispatch(setMessage({ type: "danger", message: message || "Vote Rejected" }));
		notify.error(message || "Vote Rejected");
	});

	socket.on(POLL_EVENTS.POLL_CLOSED, ({ pollID }) => {
		const poll = useSelector(selectPollByID(pollID));
		dispatch(socketUpdatePoll({ ...poll, open: false }));
		dispatch(setMessage({ type: "danger", message: "Poll Closed or Expired" }));
		notify.error("Poll Closed or Expired");
	});
	
	socket.on(POLL_EVENTS.ADD_POLL, ({ poll, name }) => {
		dispatch(socketUpdatePoll(poll));
	});
	
	socket.on(POLL_EVENTS.CLOSE_POLL, ({ poll, name }) => {
		dispatch(socketUpdatePoll(poll));
		dispatch(setMessage({ type: "success", message: `Poll "${poll.title}" closed by owner ${name}` }));
		notify.success(`Poll "${poll.title}" closed by owner ${name}`);
	});
};

const unregisteredPollReceivers = (socket) => {

	if (!socket) return;

	socket.off(POLL_EVENTS.UPDATE_POLL_DATA);
	socket.off(POLL_EVENTS.VOTE_ACCEPTED);
	socket.off(POLL_EVENTS.VOTE_REJECTED);
	socket.off(POLL_EVENTS.POLL_CLOSED);
	socket.off(POLL_EVENTS.ADD_POLL);
	socket.off(POLL_EVENTS.CLOSE_POLL);
};

export { registerPollReceivers, unregisteredPollReceivers };