import { Composition } from "remotion";
import { MyComposition } from "./MyComposition";

export const RemotionRoot: React.FC = () => {
   return (
      <>
         <Composition
            id="MyComposition"
            durationInFrames={150}
            fps={30}
            width={1920}
            height={1080}
            component={MyComposition}
         />
      </>
   );
};
