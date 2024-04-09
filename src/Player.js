import { Lightning, Colors } from "@lightningjs/sdk";

export default class Player extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: Colors("blue").get(),
        text: {
          text: "Player page",
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
}
