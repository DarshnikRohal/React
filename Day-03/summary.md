
---

# 📚 Day 03 - Diving Deeper into React and Vite 🚀

---

## 📁 Understanding Project Structure in React

We explored **two types of React project setups** today:

* 🏗️ **Create React App (CRA)**
* ⚡ **Vite**

Both help in setting up a React app, but the way they **inject React into HTML** differs slightly.

---

## 🏗️ Inside a Basic CRA Project

* **`node_modules/`**: Contains all your libraries (`react`, `react-dom`, etc.).
* **`src/`**: Has your `index.js` and `App.js`.
* **`public/`**:

  * `index.html` → The real star ⭐ (where React gets injected).
  * Other assets like icons and manifest files.

🔵 **Key Point**:
React is injected **inside the `<div id="root"></div>`** of `index.html`.
Everything you see on your page is actually painted inside that single div!

---

## ⚙️ How React Works Internally

* React **creates a Virtual DOM** first.
* Then it **injects** only the necessary changes into the real DOM.
* `index.js` is the **entry point** where:

  ```javascript
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  ```
* Components like `<App />` are not HTML — they are **JSX** (JavaScript + XML) that compile down to real JavaScript.

---

## ⚡ Comparing CRA and Vite

| Feature                | Create React App (CRA)  | Vite              |
| ---------------------- | ----------------------- | ----------------- |
| Where is `index.html`? | In the `public/` folder | Directly at root  |
| How scripts load?      | Injected automatically  | Manually included |
| Startup Speed          | Slower                  | Much Faster 🚀    |

---

## 🛠️ Creating Our First Custom Component

We created a simple custom component:

```jsx
// funcjsx
function Func() {
  return <h1>Darshnik</h1>;
}

export default Func;
```

Then used it inside `App.js` like this:

```jsx
import Func from './Func';
function App() {
  return (
    <div>
      <Func />
    </div>
  );
}
```

📌 **Tips**:

* Component names must start with a **capital letter** (PascalCase).
* Always wrap JSX inside a **single parent element**.

---

## 📋 Best Practices We Learned

* Use `.jsx` extension for components containing JSX.
* Keep JavaScript files as `.js`.
* Always **organize** your folders cleanly — `/components`, `/assets`, etc.
* Never upload `node_modules/` to GitHub (it's auto-generated using `npm install`).

---

## 🌟 Conclusion

Today, we understood **how React actually injects into HTML**,
how **Create React App** and **Vite** differ,
and how to build **custom components** smartly.

✅ We are ready to take bigger steps now! 🚀

---




