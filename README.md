# AngularattackWorkspace

##Todos:
1. Workspace creation - done
2. App setup creation - done
3. Setup the prod deployment [Live demo](https://mohanramphp.github.io/angularattack-workspace/) - done
4. Core, Shared and Game module intial setup. - done
5. App and Game module routing configuration. - done
6. Game, board and square setup - done
7. Logic to handle the game by keeping state in board component - done
8. Uplifting the state to game component + history tracking for the game - done
9. Declaring game models + refactoring and fixing the history state issue - done
10. Add state management to the application. Handle data changes seperately from components - done

    1. Identify actions in the application.
        ```
        [GAME] Reset,
        [GAME] Handle Coin Placement
        [GAME] Calculate Winner
        [GAME] Jump To
        ```

    2. Frame the app model
    3. handle the actions in reducer
11. Create a library to serve the common component for game (game-preview) - done
12. Improve the look and feel for - in progress
    1. Game review
    2. Board and Square
13. add effects to persist the game data

# Application commands
1. To run the app in local environment
> npm run app:dev
2. To build, run below command
> npm run app:prod
3. To build and deploy to github
> npm run app:deploy
