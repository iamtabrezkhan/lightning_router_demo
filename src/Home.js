import { Lightning, Router, Colors } from "@lightningjs/sdk";

export default class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: Colors("red").get(),
        text: {
          text: "Home page",
          textColor: 0xffffffff,
          fontFace: "Regular",
          fontSize: 48,
        },
      },
    };
  }

  _getFocused() {
    this.tag("Background");
  }

  _handleBack() {
    Router.navigate("player");
  }
}
