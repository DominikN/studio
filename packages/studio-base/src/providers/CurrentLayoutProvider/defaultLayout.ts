// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

// import { LayoutData } from "@foxglove/studio-base/context/CurrentLayoutContext/actions";
// import { defaultPlaybackConfig } from "@foxglove/studio-base/providers/CurrentLayoutProvider/reducers";

// /**
//  * This is loaded when the user has no layout selected on application launch
//  * to avoid presenting the user with a blank layout.
//  */
// export const defaultLayout: LayoutData = {
//   configById: {
//     "3D!18i6zy7": {
//       layers: {
//         "845139cb-26bc-40b3-8161-8ab60af4baf5": {
//           visible: true,
//           frameLocked: true,
//           label: "Grid",
//           instanceId: "845139cb-26bc-40b3-8161-8ab60af4baf5",
//           layerId: "foxglove.Grid",
//           size: 10,
//           divisions: 10,
//           lineWidth: 1,
//           color: "#248eff",
//           position: [0, 0, 0],
//           rotation: [0, 0, 0],
//           order: 1,
//         },
//       },
//     },
//     "RawMessages!os6rgs": {},
//     "ImageViewPanel!3mnp456": {},
//   },
//   globalVariables: {},
//   userNodes: {},
//   playbackConfig: { ...defaultPlaybackConfig },
//   layout: {
//     first: "3D!18i6zy7",
//     second: {
//       first: "ImageViewPanel!3mnp456",
//       second: "RawMessages!os6rgs",
//       direction: "column",
//       splitPercentage: 30,
//     },
//     direction: "row",
//     splitPercentage: 70,
//   },
// } as const;

import { LayoutData } from "@foxglove/studio-base/context/CurrentLayoutContext/actions";
// import { defaultPlaybackConfig } from "@foxglove/studio-base/providers/CurrentLayoutProvider/reducers";

// const DEFAULT_LAYOUT_URL = 'http://localhost:8089/Default.json';

const fetchJSON = (url: string): Promise<LayoutData> => {
  return fetch(url, { mode: 'no-cors'})
    .then(response => response.json())
    .catch(error => error);
};

let defaultLayout: LayoutData;
// fetchJSON('http://localhost:8080/Default.json')
fetchJSON('http://localhost:8080/RosbotTeleop.json')
  .then(data => {
    defaultLayout = data;
  });

export { defaultLayout };
