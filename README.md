# 169Pi Mini AI Workspace

> **Frontend Developer Interview Assignment**  
> A modern, responsive React application demonstrating state management, search functionality, and UI/UX best practices.

![React](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.12-06B6D4) ![Zustand](https://img.shields.io/badge/Zustand-5.0.8-orange) ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF)

## 🚀 Live Demo

[View Live Application](https://169-pi-mini-ai-workspace.vercel.app/) <!-- Add your deployment URL here -->

## 📋 Assignment Overview

This project showcases a **Mini AI Workspace** with the following key features:

### ✨ Core Features

- **📝 Message Management**: Display, filter, and organize AI workspace messages
- **📌 Pin/Unpin**: Save important messages to memory with persistent storage
- **🔍 Real-time Search**: Instant filtering across title, description, tags, and author
- **📱 Responsive Design**: Mobile-first approach with optimal UX across all devices
- **💾 State Persistence**: LocalStorage integration for pinned messages

### 🎯 Technical Highlights

- **Modern React** with Hooks and functional components
- **TypeScript** for type safety and better developer experience
- **Zustand** for lightweight state management with persistence
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for consistent, accessible UI components
- **Mobile-first responsive design** with breakpoint optimization

## 🛠️ Tech Stack

| Technology       | Purpose          | Version |
| ---------------- | ---------------- | ------- |
| **React**        | UI Framework     | 19.1.1  |
| **TypeScript**   | Type Safety      | 5.8.3   |
| **Vite**         | Build Tool       | 7.1.2   |
| **Tailwind CSS** | Styling          | 4.1.12  |
| **Zustand**      | State Management | 5.0.8   |
| **shadcn/ui**    | UI Components    | Latest  |
| **Lucide React** | Icons            | 0.542.0 |

## 🏗️ Architecture

### State Management

```typescript
// Zustand store with persistence
interface MessageStore {
  messages: Message[];
  searchQuery: string;
  togglePin: (id: number) => void;
  setSearchQuery: (query: string) => void;
}
```

### Component Structure

```
src/
├── components/
│   ├── Body.tsx              # Main layout container
│   ├── MainArea.tsx          # Content area wrapper
│   ├── SearchSection.tsx     # Search input with real-time filtering
│   ├── MessagesSection.tsx   # Messages container with count
│   ├── MessagesContainer.tsx # Message list with empty states
│   ├── MessageCard.tsx       # Individual message display
│   ├── MemorySidebar.tsx     # Pinned messages sidebar
│   ├── MemoryCardsContainer.tsx # Pinned message list
│   ├── MemoryCard.tsx        # Pinned message display
│   └── ui/                   # shadcn/ui components
├── store/
│   └── messageStore.ts       # Zustand store with persistence
├── data/
│   └── alpie_frontend_dataset.json # Sample data
└── hooks/
    └── useDebounce.ts        # Custom hook for search optimization
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/parshurambagade/169Pi-mini-ai-workspace.git
   cd 169Pi-mini-ai-workspace
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
```

## 🔧 Key Implementation Details

### State Management with Zustand

```typescript
// Persistent store with localStorage
export const useMessageStore = create<MessageStore>()(
  persist(
    (set, get) => ({
      messages: initialMessages,
      searchQuery: "",
      togglePin: (messageId: number) => {
        set((state) => ({
          messages: state.messages.map((message) =>
            message.id === messageId
              ? { ...message, pinned: !message.pinned }
              : message
          ),
        }));
      },
      // ... other actions
    }),
    {
      name: "message-store",
      partialize: (state) => ({
        messages: state.messages.map(({ id, pinned }) => ({ id, pinned })),
      }),
    }
  )
);
```

### Real-time Search Implementation

```typescript
// Memoized search to prevent infinite loops
const filteredMessages = useMemo(() => {
  if (!searchQuery.trim()) return messages;

  const query = searchQuery.toLowerCase();
  return messages.filter(
    (message) =>
      message.title.toLowerCase().includes(query) ||
      message.description.toLowerCase().includes(query) ||
      message.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      message.author.toLowerCase().includes(query)
  );
}, [messages, searchQuery]);
```

### Responsive Layout

```tsx
// Mobile-first responsive grid
<div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6">
  <main className="order-2 lg:order-1 lg:col-span-9">
    <MainArea />
  </main>
  <aside className="order-1 lg:order-2 lg:col-span-3">
    <MemorySidebar />
  </aside>
</div>
```

## 📱 Responsive Breakpoints

| Screen Size                 | Layout                 | Features                                  |
| --------------------------- | ---------------------- | ----------------------------------------- |
| **Mobile** (< 640px)        | Single column, stacked | Compact design, touch-optimized           |
| **Tablet** (640px - 1024px) | Enhanced spacing       | Better typography, improved touch targets |
| **Desktop** (> 1024px)      | Two-column grid        | Sidebar layout, optimal content density   |

## 🧪 Testing Considerations

### Manual Testing Checklist

- [ ] Search functionality works across all fields
- [ ] Pin/unpin persists after page reload
- [ ] Responsive design on mobile, tablet, desktop
- [ ] Empty states display correctly
- [ ] All interactive elements are accessible

### Cross-browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔮 Future Enhancements

- [ ] Virtual scrolling for large datasets
- [ ] Advanced search filters (date range, tags)
- [ ] Drag & drop message organization
- [ ] Export/import functionality
- [ ] Real-time collaboration features
- [ ] PWA capabilities

## 👨‍💻 Developer Experience

### Code Quality

- **ESLint**: Strict TypeScript rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Full type safety
- **Component Composition**: Reusable, testable components

### Development Tools

- **Vite**: Fast HMR and build times
- **TypeScript**: IntelliSense and error catching
- **Tailwind CSS**: Rapid UI development

## 📄 License

This project is created as an interview assignment for 169Pi.

---

## 👤 Developer

**Parshuram Bagade**

- GitHub: [@parshurambagade](https://github.com/parshurambagade)
- LinkedIn: [parshurambagade](https://linkedin.com/in/parshuram-bagade)

---

_This project demonstrates proficiency in modern React development, state management, responsive design, and frontend best practices suitable for a senior frontend developer role._
