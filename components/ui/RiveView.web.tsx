/* eslint-disable react-native/no-inline-styles */
import Rive from "@rive-app/react-canvas";

import { getRiveResource } from "../boss/boss.rive";

export const RiveView = () => (
  <Rive
    src={getRiveResource("bogar")}
    stateMachines="idle"
    style={{ width: 300, height: 300 }}
  />
);
