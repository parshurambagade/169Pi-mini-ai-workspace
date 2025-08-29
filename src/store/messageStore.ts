import { create } from "zustand";
import { persist } from "zustand/middleware";
import initialMessages from "../data/alpie_frontend_dataset.json";

export interface Message {
  id: number;
  title: string;
  description: string;
  tags: string[];
  author: string;
  created_at: string;
  pinned: boolean;
}

interface MessageStore {
  // State
  messages: Message[];
  searchQuery: string;

  // Actions
  togglePin: (messageId: number) => void;
  setSearchQuery: (query: string) => void;
  initializeMessages: () => void;

  // Computed functions
  getPinnedMessages: () => Message[];
  getFilteredMessages: () => Message[];
}

export const useMessageStore = create<MessageStore>()(
  persist(
    (set, get) => ({
      // Initial state
      messages: initialMessages,
      searchQuery: "",

      // Computed functions
      getPinnedMessages: () => {
        const state = get();
        return state.messages.filter((message) => message.pinned);
      },

      getFilteredMessages: () => {
        const state = get();
        if (!state.searchQuery.trim()) return state.messages;

        const query = state.searchQuery.toLowerCase();
        return state.messages.filter(
          (message) =>
            message.title.toLowerCase().includes(query) ||
            message.description.toLowerCase().includes(query) ||
            message.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            message.author.toLowerCase().includes(query)
        );
      },

      // Actions
      togglePin: (messageId: number) => {
        set((state) => ({
          messages: state.messages.map((message) =>
            message.id === messageId
              ? { ...message, pinned: !message.pinned }
              : message
          ),
        }));
      },

      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },

      initializeMessages: () => {
        const currentMessages = get().messages;
        // Only initialize if messages are empty (first load)
        if (currentMessages.length === 0) {
          set({ messages: initialMessages as Message[] });
        } else {
          // Merge with initial data, preserving pinned state
          const currentPinnedIds = new Set(
            currentMessages.filter((m) => m.pinned).map((m) => m.id)
          );

          const mergedMessages = (initialMessages as Message[]).map(
            (message) => ({
              ...message,
              pinned: currentPinnedIds.has(message.id),
            })
          );

          set({ messages: mergedMessages });
        }
      },
    }),
    {
      name: "message-store",
      // Only persist messages and their pinned state, not search query
      partialize: (state) => ({
        messages: state.messages.map(({ id, pinned }) => ({ id, pinned })),
      }),
      // Merge persisted pinned state with fresh data on hydration
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.initializeMessages();
        }
      },
    }
  )
);
