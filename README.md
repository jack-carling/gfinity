# Gfinity Front-end Assignment

Assignment for Gfinity. First time using Nuxt.js and Tailwind CSS. Responsive design based on Figma sketch provided, but optimized for mobiles.

## Preview Lobby

![](https://user-images.githubusercontent.com/72305598/152375796-377df7ac-119f-4f2d-be5b-54ff59055012.gif)

Flyup menu is dynamic and can be altered by changing the `data` array in `components/Menu.vue` which will render all the elements in their correct positions to retain animation on open/close.

Number of people in queue is animated, and increases or decreases by a random number between 1-10 every five seconds.

## Preview Search Page

![](https://user-images.githubusercontent.com/72305598/152375807-45ab6f7f-effd-4aac-9c9b-2986c78b590e.gif)

When on the search/ready pages the avatar is pulsing, and the timer is either ticking up or down.

The `/search` page also contains the queue total as well as an animated `Searching...` text which is reused to make the meta-title dynamic. After a random interval between 30-60 seconds, the user is redirected to the `/ready` page.

## Preview Ready Page

![](https://user-images.githubusercontent.com/72305598/152375803-909ae647-7254-4b34-a19e-739bdfc88366.gif)

The user will be redirected back from the `/ready` page unless accepting the match (which doesn't work) when the timer reaches 0. The game mode picked in the flyup menu will be displayed in the text.

## Assignment Message

Thank you for your time thus far interviewing with us. We've created this assignment to resemble something we work on routinely.

This micro-app is intended to simulate a 1v1 matchmaking experience in which you've created a matchmaking lobby to find a match.
You're able to invite teammates or play by yourself, set various match settings, and ultimately join the queue to find an opponent.
There are 3 phases to this process - configuring your lobby, joining the queue, and accepting your match. We've also paired a style guide to help you further amplify the experience with other assets, animations, or interactions.

Within this repository, you'll find the foundation of the project created with Nuxt to help you get started. Ideally, Nuxt should use its SSR mode to serve the project.

If you have any comments or questions about the design, please use the commenting feature within Figma as our team will watch your project to assist with anything you need. If you have any other general questions, please feel free to send me an email to mike.stevens@gfinity.net and ask.

Once completed, please _do not_ push commits to the original project. Please fork into your own repository, or push commits to a new origin of your choosing. In order to fork, log into a Bitbucket account and select the "+" sign on the far left of the screen.

We really appreciate you taking the time to work on this and look forward to working with you in the future.

## Figma

![](https://user-images.githubusercontent.com/72305598/152376808-6705b29f-06e6-412a-9298-9ba08fcdf66c.png)

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
