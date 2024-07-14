import { interpolate, useCurrentFrame } from "remotion";

export const Title: React.FC<{ title: string }> = ({ title }) => {
   const frame = useCurrentFrame();

   const opacity = interpolate(frame, [0, 60], [0, 1], {
      extrapolateRight: "clamp",
   });

   return (
      <div
         style={{
            opacity: opacity,
            fontSize: "7rem",
            textAlign: "center",
         }}>
         {title}
      </div>
   );
};
