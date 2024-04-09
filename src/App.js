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
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff000000,
      },
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

  _init() {
    this.tag("Background")
      .animation({
        duration: 15,
        repeat: -1,
        actions: [
          {
            t: "",
            p: "color",
            v: {
              0: { v: 0xfffbb03b },
              0.5: { v: 0xfff46730 },
              0.8: { v: 0xfffbb03b },
            },
          },
        ],
      })
      .start();
  }
}
