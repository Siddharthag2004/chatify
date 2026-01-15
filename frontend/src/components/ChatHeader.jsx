import { X } from "lucide-react"; // Changed from XIcon to X for better compatibility
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div
      className="flex justify-between items-center bg-slate-800/50 border-b
   border-slate-700/50 max-h-[84px] px-6 py-4 flex-none"
    >
      <div className="flex items-center space-x-3">
        {/* Profile Avatar */}
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full">
            <img 
              src={selectedUser.profilePic || "/avatar.png"} 
              alt={selectedUser.fullName} 
            />
          </div>
        </div>

        {/* User Info */}
        <div>
          <h3 className="text-slate-200 font-medium">{selectedUser.fullName}</h3>
          <p className="text-slate-400 text-xs lg:text-sm">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>

      {/* Close / Back Button */}
      <button onClick={() => setSelectedUser(null)}>
        <X className="w-6 h-6 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer" />
      </button>
    </div>
  );
}
export default ChatHeader;