import { AbsoluteFill, Audio, Sequence } from "remotion";

import bgAudio from "../mp/Горный - Ой Мама.mp3";
import { Title } from "./Titile";

export const MyComposition = () => {
   return (
      <AbsoluteFill
         style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 100,
            backgroundColor: "white",
         }}>
         <Sequence durationInFrames={40}>
            <Title title="Project for" />
         </Sequence>
         <Sequence from={40}>
            <Title title="SuperDuper" />
         </Sequence>
         <Audio volume={0.1} src={bgAudio} />
      </AbsoluteFill>
   );
};
