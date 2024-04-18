import React, { useRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Svg, Circle, Text as SvgText, G, Line } from 'react-native-svg';
import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';

const Graph = () => {
  const svgRef = useRef(null);
  const [graphData, setGraphData] = useState({
    nodes: [],
    links: []
  });

  useEffect(() => {
    const names = [
      'Home',
      'Setting',
      'Personal',
      'Education',
      'Room booking',
      'Dormitory booking',
      'Health',
      'Transportation',
      'Library',
      'Profile',
      'Card',
      'Bank',
      'Enroll',
      'Schedule',
      'Exam',
      'Inform',
      'Transcript',
      'Study room',
      'Entertainment room',
      'Booking Status',
      'Dorm booking',
      'Service',
      'Repairing',
      'Cleaning',
      'Change a room',
      'Mental health',
      'Body health',
      'Campus Bus',
      'Public Bus',
      'Book reservation',
      'Book Tracking',
      'My Booking'
    ];

    const nodes = names.map((name, index) => ({
      id: index,
      collapsed: false,
      childLinks: [],
      name: name,
      x: 0, // Initial x position
      y: 0, // Initial y position
    }));

    const links = [
          ...Array.from({ length: 8 }, (_, i) => ({
            source: 0,
            target: i + 1
          })),
          // Links from node 2 to nodes 9-11
          ...Array.from({ length: 3 }, (_, i) => ({
            source: 2,
            target: i + 9
          })),
          // Links from node 3 to nodes 12-16
          ...Array.from({ length: 5 }, (_, i) => ({
            source: 3,
            target: i + 12
          })),
          // Links from node 4 to nodes 17-19
          ...Array.from({ length: 3 }, (_, i) => ({
            source: 4,
            target: i + 17
          })),
          // Links from node 5 to nodes 20-21
          ...Array.from({ length: 2 }, (_, i) => ({
            source: 5,
            target: i + 20
          })),
          // Links from node 21 to nodes 22-24
          ...Array.from({ length: 3 }, (_, i) => ({
            source: 21,
            target: i + 22
          })),
          // Links from node 6 to nodes 25-26
          ...Array.from({ length: 2 }, (_, i) => ({
            source: 6,
            target: i + 25
          })),
          // Links from node 7 to nodes 27-28
          ...Array.from({ length: 2 }, (_, i) => ({
            source: 7,
            target: i + 27
          })),
          // Links from node 8 to nodes 29-31
          ...Array.from({ length: 3 }, (_, i) => ({
            source: 8,
            target: i + 29
          }))
    ];

    // Set the graph data
    setGraphData({ nodes, links });
  }, []);

  useEffect(() => {
    if (graphData.nodes.length > 0 && graphData.links.length > 0 && svgRef.current) {
      const nodes = graphData.nodes;
      const links = graphData.links;
      const svg = svgRef.current;
  
      // Initialize node positions
      nodes.forEach(node => {
        node.x = Math.random() * svg.width; // Set initial x position randomly within SVG width
        node.y = Math.random() * svg.height; // Set initial y position randomly within SVG height
      });
  
      const simulation = forceSimulation(nodes)
        .force('link', forceLink(links).id(d => d.id))
        .force('charge', forceManyBody().strength(-50))
        .force('center', forceCenter(svg.width / 2, svg.height / 2)) // Center the nodes within the SVG
        .on('tick', () => {
          // Update node positions
          setGraphData(prevData => ({
            ...prevData,
            nodes: prevData.nodes.map(node => ({
              ...node,
              x: Math.max(0, Math.min(svg.width, node.x)), // Ensure nodes stay within SVG bounds
              y: Math.max(0, Math.min(svg.height, node.y)) // Ensure nodes stay within SVG bounds
            }))
          }));
        });
  
      return () => {
        simulation.stop();
      };
    }
  }, [graphData]);
  
  // Function to toggle node collapse
  const toggleCollapse = node => {
    const updatedNodes = [...graphData.nodes];
    const targetNode = updatedNodes.find(n => n.id === node.id);
    targetNode.collapsed = !targetNode.collapsed;

    setGraphData({ ...graphData, nodes: updatedNodes });
  };

  return (
    <View>
      <Svg width="400" height="400" ref={svgRef}>
        {graphData.links.map((link, index) => (
          <Line
            key={index}
            x1={graphData.nodes[link.source].x}
            y1={graphData.nodes[link.source].y}
            x2={graphData.nodes[link.target].x}
            y2={graphData.nodes[link.target].y}
            stroke="gray"
            strokeWidth="2"
          />
        ))}
        {graphData.nodes.map((node, index) => (
          <G key={index} onPress={() => toggleCollapse(node)}>
            <Circle
              cx={node.x}
              cy={node.y}
              r={10}
              fill={!node.childLinks.length ? 'green' : node.collapsed ? 'red' : 'yellow'}
            />
            <SvgText
              x={node.x}
              y={node.y}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="black"
              fontSize="8"
            >
              {node.name}
            </SvgText>
          </G>
        ))}
      </Svg>
    </View>
  );
};

export default Graph;
