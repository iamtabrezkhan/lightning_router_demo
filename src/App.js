import { Utils, Router } from "@lightningjs/sdk";
import Home from "./Home";
import Player from "./Player";
import Main from "./Main";

export default class App extends Router.App {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static _template() {
    return {
      ...super._template(),
    };
  }

  _setup() {
    Router.startRouter(
      {
        root: "home",
        routes: [
          {
            path: "$",
            component: Main,
          },
          {
            path: "home",
            component: Home,
          },
          {
            path: "player",
            component: Player,
          },
        ],
      },
      this
    );
  }

  _init() {}
}
