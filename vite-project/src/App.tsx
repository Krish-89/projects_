
// STEP 1: Component Structure
// - Game (parent component)
//   └─ Board (manages the game board)
//      └─ Square (individual cells)

// STEP 2: State Management
// - Create state for:
//   - squares[] (array to track board state)
//   - xIsNext (boolean to track next player)
//   - winner (to store winner status)
//   - history (array to store game moves) [optional]

// STEP 3: Square Component Implementation
// - Create a button component
// - Accept value prop (X, O, or null)
// - Accept onClick handler
// - Style the square (CSS)

// STEP 4: Board Component Implementation
// - Create 3x3 grid using Square components
// - Pass values and click handlers to each Square
// - Style the board layout (CSS)

// STEP 5: Game Logic
// - Implement handleClick function to:
//   - Update squares array
//   - Toggle player turns
//   - Prevent overwriting filled squares
//   - Prevent moves after game ends

// STEP 6: Winner Calculation
// - Create calculateWinner function to check:
//   - All rows
//   - All columns
//   - Both diagonals

// STEP 7: Game Status Display
// - Show current player's turn
// - Display winner when game ends
// - Show draw status when no moves remain

// STEP 8: Additional Features (Optional)
// - Add game history
// - Add reset button
// - Add move counter
// - Add score tracking
// - Add animations

// STEP 9: Styling
// - Style components using CSS
// - Make it responsive
// - Add hover effects
// - Add transitions


function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
