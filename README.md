# Chess.com - Front End Programming Challenge

Welcome to the [Chess.com](https://chess.com) front end programming challenge!

I have implemented the challenge [live here](https://chess-hightligher.netlify.app/)

# Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

# Application Requirements

1. Create a page with a chessboard and a sidebar.
2. On desktop devices the sidebar should be positioned to the right of the chessboard.
3. On mobile devices the sidebar should be positioned below the chessboard.
4. The chessboard should resize responsively to consume available space.
5. Clicking a chessboard square should highlight the square.
6. Keep track of which squares are clicked and the order in which they're clicked.
7. Display the information collected from step 6 in the sidebar.

# Additional Features

1. Added a reset button that clears highlighted cells
2. Adds a clear icon on the last selected cell that removes the highlight from the cell
3. Adds a style if a cell that was previously selected was clicked again
4. Adds a theme selector that toggles dark and light theme

# Testing

End to End (e2e) testing has been implemented using [Cypress](https://www.cypress.io/) and can be run with `pnpm run test:e2e:dev` during development or `pnpm run test:e2e` on headless after building
