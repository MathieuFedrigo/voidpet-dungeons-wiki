/* eslint-disable react-native/no-inline-styles */
import Rive from "@rive-app/react-canvas";

import { getRiveResource } from "../boss/boss.rive";
import { RiveId } from "../boss/boss.type";

type Props = { resourceName: RiveId; size: number };
export const RiveView = ({ resourceName, size }: Props) => (
  <Rive
    src={getRiveResource(resourceName)}
    stateMachines="idle"
    style={{ width: size, height: size }}
  />
);
