import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Player } from "@remotion/player";

export const MyVideo = () => {
   const frame = useCurrentFrame();
   const { fps } = useVideoConfig();

   const scale = spring({
      fps,
      frame,
   });

   <div
      style={{
         flex: 1,
         textAlign: "center",
         fontSize: "7em",
      }}>
      <div style={{ transform: `scale(${scale})` }}>Hello World!</div>
   </div>;

   return (
      <Player
         component={MyVideo}
         durationInFrames={120}
         compositionWidth={1920}
         compositionHeight={1080}
         fps={30}
      />
   );
};
