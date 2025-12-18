# 🌳 Tree View Visualizer using React Flow

A **Tree View Visualizer** built with **React** and **React Flow** that dynamically renders hierarchical tree structures with a centered root node, properly aligned child nodes, and color-coded depth levels.

This project is useful for visualizing:

* Organizational hierarchies
* File/folder structures
* Decision trees
* Dependency graphs

---

## 📸 Preview

<img width="805" height="621" alt="image" src="https://github.com/user-attachments/assets/adcfb6f1-af87-4b02-a238-625bcd68c4d9" />


> Root node remains centered, children are placed symmetrically on left and right, and deeper nodes are auto-aligned to avoid overlap.

---

## ✨ Features

* 🌱 **Root node always centered**
* 🔀 **Left & Right child distribution**
* 🎨 **Color-coded nodes by depth**

  * Root: Blue
  * Intermediate Nodes: Green
  * Leaf/Deep Nodes: Orange
* 📐 **Auto-layout to prevent node overlap**
* 🧩 **Supports deep trees (up to 6+ levels)**
* ⚡ Built using **React Flow** for smooth edges & interactions

---

## 🛠 Tech Stack

* **React.js**
* **React Flow**
* **JavaScript (ES6+)**
* **CSS / Inline Styling**

---

## 📂 Project Structure

```
Tree-View-ReactFlow/
│
├── src/
│   ├── components/
│   │   └── TreeView.jsx
│   ├── data/
│   │   └── treeData.js
│   ├── utils/
│   │   └── layoutHelper.js
│   ├── App.js
│   └── index.js
│
├── public/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/aquariusmayankraj/Tree-View-ReactFlow.git
cd Tree-View-ReactFlow
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm start
```

The app will run on: **[http://localhost:3000](http://localhost:3000)**

---

## 🧠 How It Works

1. **Tree data** is defined in a nested JSON structure.
2. Data is recursively traversed to generate:

   * Nodes
   * Edges
3. A **custom layout helper** calculates:

   * X-axis spacing
   * Depth-based Y-axis levels
4. Root node is force-centered.
5. Child nodes are placed left and right symmetrically.

---

## 🎯 Use Cases

* Visualizing hierarchical data
* Interview / DSA tree visualization
* Admin dashboards
* Educational tools

---

## 📌 Future Improvements

* 🔍 Zoom-to-node feature
* 🖱 Drag & drop tree editing
* 📝 Editable node labels
* 🌈 Theme switcher (Dark / Light)
* 💾 Export tree as JSON or Image


