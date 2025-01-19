import { useState } from "react";
import "./index.css";

function App() {
  const [value, setValue] = useState(0);
  const [undoElements, setUndoElements] = useState([]); // Undo stack
  const [redoElements, setRedoElements] = useState([]); // Redo stack

  // Handle Increment/Decrement
  const handleValue = (val) => {
    const convertToNumber = Number(val);
    const newValue = value + convertToNumber;

    // Create an event for undo
    const event = {
      previousValue: value, // Current value before change
      convertToNumber, // The change applied
      newValue, // Value after change
    };

    // Update undo stack
    setUndoElements((prev) => [event, ...prev]);

    // Clear redo stack
    setRedoElements([]);

    // Update current value
    setValue(newValue);
  };

  // Handle Undo
  const handleUndoButton = () => {
    if (undoElements.length === 0) return; // No undo actions available

    const [lastAction, ...rest] = undoElements;

    // Create a redo event
    const redoEvent = {
      previousValue: lastAction.newValue,
      convertToNumber: lastAction.convertToNumber,
      newValue: lastAction.previousValue,
    };

    // Update redo stack
    setRedoElements((prev) => [redoEvent, ...prev]);

    // Update undo stack and current value
    setUndoElements(rest);
    setValue(lastAction.previousValue);
  };

  // Handle Redo
  const handleRedoButton = () => {
    if (redoElements.length === 0) return; // No redo actions available

    const [lastAction, ...rest] = redoElements;

    // Create an undo event
    const undoEvent = {
      previousValue: lastAction.previousValue,
      convertToNumber: lastAction.convertToNumber,
      newValue: lastAction.newValue,
    };

    // Update undo stack
    setUndoElements((prev) => [undoEvent, ...prev]);

    // Update redo stack and current value
    setRedoElements(rest);
    setValue(lastAction.newValue);
  };

  return (
    <div>
      <div>
        <h1>Undoable Counter</h1>
        <button onClick={handleUndoButton} disabled={undoElements.length === 0}>
          Undo
        </button>
        <button onClick={handleRedoButton} disabled={redoElements.length === 0}>
          Redo
        </button>
      </div>

      {/* Buttons to modify value */}
      {["-100", "-10", "-1"].map((val, index) => (
        <button key={index} onClick={() => handleValue(val)}>
          {val}
        </button>
      ))}
      <span className="mx-4 text-xl font-bold">{value}</span>
      {["+1", "+10", "+100"].map((val, index) => (
        <button key={index} onClick={() => handleValue(val)}>
          {val}
        </button>
      ))}

      {/* Undo and Redo Values */}
      <div className="mt-4">
        <label className="font-bold">History</label>
        <div className="mt-2">
          {undoElements.map((event, index) => (
            <div key={index}>
              Change: {event.convertToNumber > 0 ? `+${event.convertToNumber}` : event.convertToNumber}, 
              Value Before: {event.previousValue}, 
              Value After: {event.newValue}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
