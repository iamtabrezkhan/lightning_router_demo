import { Lightning, Router } from "@lightningjs/sdk";

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff00ffff,
        text: {
          text: "Main page",
          textColor: 0xffffffff,
        },
      },
    };
  }

  _init() {
    Router.navigate("home");
  }
}
