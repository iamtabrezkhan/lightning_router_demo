import { Lightning, Router } from "@lightningjs/sdk";

export default class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff0000ff,
        text: {
          text: "Home page",
          textColor: 0xffffffff,
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
