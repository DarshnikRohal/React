# 🚀 Day 12 – State Management with Recoil ⚛️

## 📚 What I Learned Today

Today I explored **Recoil**, a modern state management library for React that’s lightweight and intuitive.

### 🧩 Key Concepts

#### 🧱 Atoms
- The smallest piece of state in Recoil.
- Can be shared and updated across components.

#### 🧮 Selectors
- Pure functions that derive data from atoms.
- Helpful for computed/derived state.

#### ⚙️ Hooks
- `useRecoilState` → read/write atom values.
- `useRecoilValue` → read-only access.
- `useSetRecoilState` → write-only access.

---

## 🧠 Key Takeaways

- Recoil is **simpler than Redux** for small to medium apps.
- Atoms allow **fine-grained control** over individual state pieces.
- Selectors help **optimize performance** by memoizing derived state.

---

## 💻 Project Snapshot

I built a simple counter app using Recoil that:

- 🧱 Stores the count in an **atom**.
- 🔁 Shows **doubled value** using a **selector**.
- ➕ Supports **increment/decrement** actions via buttons.

---

## 📸 Output Screenshot

![Day 12 Output](./day12-screenshot.png)
