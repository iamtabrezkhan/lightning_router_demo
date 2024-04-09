import { Lightning } from "@lightningjs/sdk";

export default class Player extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff00ffff,
        text: {
          text: "Player page",
          textColor: 0xffffffff,
        },
      },
    };
  }

  _getFocused() {
    this.tag("Background");
  }
}
