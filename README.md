# Beer Tab Dispenser

Welcome to Enrique's implementation of "The Beer Tap Dispenser" application. This document will give you tips on how to use the app, how to make it run, how to test it, and try it.

## How do I make it run?

We'll start by cloning the repo, since you're here, you know how to do that, but just in case:

    git clone https://github.com/EnriqueMartinezAsensi/beer-dispenser.git

Once downloaded, run `npm i` and make sure to have a running copy of the backend running on Docker.

Commands:

- `npm run dev` starts the development server.
- `npm run test` runs the vitest tests.
- `npm run coverage` returns information on the tests coverage.

But, this app is responsive, how about testing it on my actual phone?
Very simple, go to `/src/api/apiConnection.ts` and change on line 4
the word `localhost` for your computer IP. It should look like this:

    baseURL:  "http://192.168.0.103:8002/api",

Then run:

    npm run dev:host

And like so, using your phone connected to the same net as the pc, you'll be able to find the app by writing your computer IP at the phone's browser.

## Technologies

For this project the following technologies were chosen, and for the following reasons:

- Vite: Well known, light-weight, flexible, uses HMR (Hot Module Replacement), well suited for an SPA.
- TypeScript: It creates a robust ecosystem, favors maintainability, the project is cleanly organized, while lowering the development time, since bugs are found in compilation time and not in runtime.
- React-Router: The most know, used and documented routing system for React. Also has the biggest community around it.
- Axios: Api calls are short, clear, and clean. Favors maintainability, handles JSON's automatically, timeouts are easy to implement, and it also increases compatibility with old browsers.
- MUI: Easy to integrate modules, tested, responsive, and they all follow a11y rules. If handled carefully, it does not generate too much coupling.
- Zustand: It's most likely the most comfortable way to create context. It's stores are very clean, simple and readable.
- Styled-components: IMHO, the clearest way to have all your CSS organized and compartmentalized, it avoids interferences between different folders as the project grows. It also is the easiest way to generate dynamic styles.
- Vitest: Since we're using Vite, Vitest for testing is the go-to option.

Some may think, why not use React Query(TanStack Query)? Well, the app will handle low number of requests, has no pagination and really, no need to keep a cache. That said if this was a real growing app, I’d 100% use it.

## Design and creation process

First, I scribbled down the first ideas while reading the requisite document, and playing with the backend, then scribbled the different views of the web while transforming the document to a pseudo user stories and then the routes were thought out:
[Excalidraw's file.](https://excalidraw.com/#json=RQylpAXpP6GsceDqOrrfF,_UwfuUB23uYXN06ZOWj6Hw)
Then the project structure was laid out:

- Folders are created following clear paths (api, components, pages, etc)
- Types are set and defined following the requisites.
- The main pages are created and routed.
- A protected page divides the user pages from the admin pages, granting the admin access to all.
- A layout is created.
- The app is then atomized to its intended final components.

At this point and as tests were added, a final design was needed, there so a basic Figma file was created containing a very simple view of the landing using a mobile first design paradigm.

[Figma file.](https://www.figma.com/design/tde5LuQW3LesDqqIDhoSxX/Beer-dispenser?node-id=0-1&t=BsUTKoLMnb5QeSmP-1)
After some theming the design is implemented.
Then testing is developed while slowly improving the small issues found on UX while using and trying the app, until finishing.

## The struggles...

You never know how many components you need for an app until it is done. That has not been much a problem, but having a bit more instinct is always needed.

Vitest is a good testing library, but not the greatest. Testing has been a struggle, and I'm very happy I've been able to take it as far as I have.
