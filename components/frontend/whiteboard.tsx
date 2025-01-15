'use client';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Shape {
  id: string;
  type: 'rectangle' | 'circle' | 'text';
  x: number;
  y: number;
  width?: number;
  height?: number;
  color: string;
  text?: string;
  fontSize?: number;
  isSelected?: boolean;
}

const DesignBoard: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [tool, setTool] = useState<'select' | 'rectangle' | 'circle' | 'text'>('select');
  const [color, setColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(16);
  const [snapToGrid, setSnapToGrid] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  const addShape = (e: React.MouseEvent) => {
    if (tool === 'select') return;

    const board = boardRef.current;
    if (!board) return;

    const rect = board.getBoundingClientRect();
    const newShape: Shape = {
      id: uuidv4(),
      type: tool,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      width: tool === 'rectangle' || tool === 'circle' ? 100 : undefined,
      height: tool === 'rectangle' ? 60 : undefined,
      color,
      text: tool === 'text' ? 'Edit me' : undefined,
      fontSize: tool === 'text' ? fontSize : undefined,
    };

    setShapes([...shapes, newShape]);
  };

  const selectShape = (id: string) => {
    setShapes((prevShapes) =>
      prevShapes.map((shape) => ({ ...shape, isSelected: shape.id === id }))
    );
  };

  const deleteSelectedShape = () => {
    setShapes((prevShapes) => prevShapes.filter((shape) => !shape.isSelected));
  };

  const saveBoard = () => {
    const boardData = JSON.stringify(shapes);
    localStorage.setItem('designBoard', boardData);
    alert('Board saved!');
  };

  const loadBoard = () => {
    const boardData = localStorage.getItem('designBoard');
    if (boardData) {
      setShapes(JSON.parse(boardData));
      alert('Board loaded!');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-gray-50 min-h-screen">
      {/* Toolbar */}
      <div className="flex items-center justify-between w-full max-w-screen-lg p-4 bg-white rounded-lg shadow-lg">
        {/* Tools */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTool('select')}
            className={`px-4 py-2 rounded-md shadow-md ${
              tool === 'select' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Select
          </button>
          <button
            onClick={() => setTool('rectangle')}
            className={`px-4 py-2 rounded-md shadow-md ${
              tool === 'rectangle' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Rectangle
          </button>
          <button
            onClick={() => setTool('circle')}
            className={`px-4 py-2 rounded-md shadow-md ${
              tool === 'circle' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Circle
          </button>
          <button
            onClick={() => setTool('text')}
            className={`px-4 py-2 rounded-md shadow-md ${
              tool === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Text
          </button>
        </div>

        {/* Options */}
        <div className="flex items-center space-x-4">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 cursor-pointer"
          />
          <select
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="p-2 border rounded-md"
          >
            {[12, 16, 20, 24, 28, 32].map((size) => (
              <option key={size} value={size}>
                Font Size: {size}px
              </option>
            ))}
          </select>
          <button
            onClick={() => setSnapToGrid(!snapToGrid)}
            className={`px-4 py-2 rounded-md shadow-md ${
              snapToGrid ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Snap to Grid
          </button>
        </div>

        {/* Save/Load */}
        <div className="flex items-center space-x-4">
          <button
            onClick={saveBoard}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
          >
            Save
          </button>
          <button
            onClick={loadBoard}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition"
          >
            Load
          </button>
        </div>
      </div>

      {/* Design Board */}
      <div
        ref={boardRef}
        className="relative w-[800px] h-[600px] border border-gray-300 bg-white shadow-lg"
        onClick={addShape}
      >
        {shapes.map((shape) => (
          <div
            key={shape.id}
            onClick={(e) => {
              e.stopPropagation();
              selectShape(shape.id);
            }}
            className={`absolute ${
              shape.isSelected ? 'border-2 border-blue-500' : ''
            }`}
            style={{
              top: shape.y,
              left: shape.x,
              width: shape.width,
              height: shape.height,
              backgroundColor: shape.type !== 'text' ? shape.color : 'transparent',
              color: shape.type === 'text' ? shape.color : undefined,
              fontSize: shape.fontSize,
              borderRadius: shape.type === 'circle' ? '50%' : '0%',
            }}
          >
            {shape.type === 'text' ? shape.text : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignBoard;
