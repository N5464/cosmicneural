import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  pulsePhase: number;
  pulseSpeed: number;
  connections: number[];
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  pulsePosition: number;
  pulseSpeed: number;
}

const NeuralNexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initializeNetwork = (width: number, height: number) => {
      const nodeCount = Math.floor((width * height) / 25000); // Adaptive node count based on screen size
      const nodes: Node[] = [];
      const connections: Connection[] = [];

      // Create nodes with random positions and gentle movement
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 100 + 50, // Depth for parallax
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          vz: (Math.random() - 0.5) * 0.1,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          connections: [],
        });
      }

      // Create connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const maxConnections = 3 + Math.floor(Math.random() * 3);
        let connectionCount = 0;

        for (let j = i + 1; j < nodes.length && connectionCount < maxConnections; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200 && Math.random() > 0.7) {
            nodes[i].connections.push(j);
            nodes[j].connections.push(i);
            
            connections.push({
              from: i,
              to: j,
              strength: Math.random() * 0.3 + 0.1,
              pulsePosition: Math.random(),
              pulseSpeed: 0.005 + Math.random() * 0.01,
            });
            
            connectionCount++;
          }
        }
      }

      nodesRef.current = nodes;
      connectionsRef.current = connections;
    };

    const updateNetwork = (width: number, height: number, deltaTime: number) => {
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;

      // Update nodes
      nodes.forEach((node) => {
        // Gentle organic movement
        node.x += node.vx * deltaTime;
        node.y += node.vy * deltaTime;
        node.z += node.vz * deltaTime;

        // Boundary wrapping with smooth transitions
        if (node.x < -50) node.x = width + 50;
        if (node.x > width + 50) node.x = -50;
        if (node.y < -50) node.y = height + 50;
        if (node.y > height + 50) node.y = -50;
        if (node.z < 20) node.z = 120;
        if (node.z > 120) node.z = 20;

        // Update pulse phase
        node.pulsePhase += node.pulseSpeed * deltaTime;
      });

      // Update connections
      connections.forEach((connection) => {
        connection.pulsePosition += connection.pulseSpeed * deltaTime;
        if (connection.pulsePosition > 1) {
          connection.pulsePosition = 0;
        }
      });
    };

    const renderNetwork = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;

      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'; // Very subtle fade
      ctx.fillRect(0, 0, width, height);

      // Render connections
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];

        if (!fromNode || !toNode) return;

        // Calculate depth-based opacity and thickness
        const avgZ = (fromNode.z + toNode.z) / 2;
        const depthFactor = avgZ / 100;
        const baseOpacity = connection.strength * depthFactor * 0.3;

        // Draw base connection line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `rgba(6, 182, 212, ${baseOpacity})`;
        ctx.lineWidth = 0.5 * depthFactor;
        ctx.stroke();

        // Draw pulse along the connection
        const pulseX = fromNode.x + (toNode.x - fromNode.x) * connection.pulsePosition;
        const pulseY = fromNode.y + (toNode.y - fromNode.y) * connection.pulsePosition;
        
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2 * depthFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${baseOpacity * 2})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(34, 211, 238, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render nodes
      nodes.forEach((node) => {
        const depthFactor = node.z / 100;
        const pulseIntensity = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const nodeOpacity = (0.2 + pulseIntensity * 0.3) * depthFactor;
        const nodeSize = (2 + pulseIntensity * 2) * depthFactor;

        // Draw node glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${nodeOpacity * 0.3})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${nodeOpacity})`;
        ctx.fill();
      });
    };

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Set initial background
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgb(15, 23, 42)'; // slate-900
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Initialize network
    initializeNetwork(canvas.width, canvas.height);

    // Start animation
    timeRef.current = performance.now();
    const animateLoop = (currentTime: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const deltaTime = currentTime - timeRef.current;
      timeRef.current = currentTime;

      updateNetwork(canvas.width, canvas.height, deltaTime);
      renderNetwork(ctx, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animateLoop);
    };
    
    animationRef.current = requestAnimationFrame(animateLoop);

    // Handle window resize
    const resizeHandler = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize network on significant size changes
      if (nodesRef.current.length === 0) {
        initializeNetwork(canvas.width, canvas.height);
      }
    };
    
    window.addEventListener('resize', resizeHandler);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: 'rgb(15, 23, 42)' }}
    />
  );
};

export default NeuralNexusBackground;