import { Lightning, Router, Colors } from "@lightningjs/sdk";
import { Device, Lifecycle } from "@firebolt-js/sdk";

export default class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff000000,
      Uid: {
        color: Colors("red").get(),
        text: {
          text: "Getting device uid...",
          textColor: 0xffffffff,
          fontFace: "Regular",
          fontSize: 48,
        },
      },
    };
  }

  async _enable() {
    Lifecycle.ready();
    const uid = await Device.uid();
    console.log("UID: ", uid);
    this.tag("Uid").patch({
      text: {
        text: uid,
      },
    });
  }

  _getFocused() {
    this;
  }

  _handleBack() {
    Router.navigate("player");
  }
}
