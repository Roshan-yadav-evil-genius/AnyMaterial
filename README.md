Figma Design : https://www.figma.com/file/HeZVvwSFuIDclQOgueVBGu/AnyMaterial?node-id=0%3A1&t=LIIJnbBWeWj0LOL9-1

Database Design : https://drawsql.app/teams/control-1/diagrams/any-material

## Work on frontend

1. go in frontend directory install requirements by > npm install
2. start server to view progress or to work > npm start


## Frontend Design pattern (Atomic structure)

![alt AtomicStructureImage](https://miro.medium.com/v2/resize:fit:720/format:webp/1*PcQ-m317YX6ct9ccBi6H1Q.png)

- Atoms
  - Single, self-contained UI elements with no dependencies on other components.
  - Can include things like buttons, icons, inputs, labels, etc.
  - Focus on simple styling and behavior.


- Molecules
  - Combinations of atoms that make up simple, functional UI components.
  - Can include things like forms, search bars, cards, etc.
  - More complex styling and behavior than atoms.


- Organisms
  - Combinations of molecules and/or atoms that form distinct sections of a page.
  - Can include things like headers, footers, navigation bars, etc.
  - Higher-level styling and behavior than molecules.


- Templates
  - Defines the overarching layout and structure of a page.
  - Can include things like grids, columns, and other layout tools.
  - Provides consistency across pages and projects.


- Pages
  - The final stage of the design pattern, where you assemble all the previous components into a fully functioning web page.
  - Built using templates, organisms, molecules, and atoms.
  - Can include things like home pages, product pages, checkout pages, etc.
