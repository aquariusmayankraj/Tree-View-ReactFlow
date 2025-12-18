import React, { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const NODE_WIDTH = 140;
const NODE_HEIGHT = 60;
const HORIZONTAL_GAP = 40;
const VERTICAL_GAP = 120;

/* 🎨 Node Colors */
const getNodeColor = (id, hasChildren) => {
  if (id === "root") return "#1d4ed8";   // Blue
  if (hasChildren) return "#16a34a";     // Green
  return "#f59e0b";                      // Orange
};

/* 🔢 Subtree width calculation */
const getSubtreeWidth = (node, collapsed) => {
  if (collapsed[node.id] || !node.children || node.children.length === 0) {
    return NODE_WIDTH;
  }

  return Math.max(
    node.children.reduce(
      (sum, child) => sum + getSubtreeWidth(child, collapsed),
      0
    ) +
      HORIZONTAL_GAP * (node.children.length - 1),
    NODE_WIDTH
  );
};

/* 🌳 Build Tree */
const buildTree = (
  node,
  x,
  y,
  nodes,
  edges,
  collapsed
) => {
  const hasChildren = node.children?.length > 0;
  const subtreeWidth = getSubtreeWidth(node, collapsed);

  // 👉 Center node over its subtree
  const nodeX = x + subtreeWidth / 2 - NODE_WIDTH / 2;

  nodes.push({
    id: node.id,
    data: { label: node.label },
    position: { x: nodeX, y },
    style: {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      background: getNodeColor(node.id, hasChildren),
      color: "#fff",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    },
  });

  if (collapsed[node.id] || !hasChildren) return;

  let childX = x;

  node.children.forEach((child) => {
    const childWidth = getSubtreeWidth(child, collapsed);

    buildTree(
      child,
      childX,
      y + VERTICAL_GAP,
      nodes,
      edges,
      collapsed
    );

    edges.push({
      id: `${node.id}-${child.id}`,
      source: node.id,
      target: child.id,
      animated: true,
    });

    childX += childWidth + HORIZONTAL_GAP;
  });
};

const TreeLayout = ({ data }) => {
  const [collapsed, setCollapsed] = useState({});

  const nodes = [];
  const edges = [];

  /* 🔥 ROOT FIXED CENTER */
  const totalWidth = getSubtreeWidth(data, collapsed);
  buildTree(data, -totalWidth / 2, 0, nodes, edges, collapsed);

  const onNodeClick = (_, node) => {
    setCollapsed((prev) => ({
      ...prev,
      [node.id]: !prev[node.id],
    }));
  };

  return (
    <div style={{ width: "100%", height: "100vh", background: "#f1f5f9" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{ padding: 0.3 }}
      >
        <Background gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default TreeLayout;
