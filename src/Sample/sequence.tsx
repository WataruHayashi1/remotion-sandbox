import { interpolate, Sequence, useCurrentFrame } from 'remotion'

const Title: React.FC<{ title: string }> = ({ title }) => {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' })

  return (
    <div style={{ opacity }}>{title}</div>
  )
}

export const SequenceTest = () => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
        backgroundColor: "white",
      }}
    >
      <Sequence from={0} durationInFrames={40}>
        <Title title="Hello" />
      </Sequence>
      <Sequence from={40}>
        <Title title="World" />
      </Sequence>
    </div>
  );
};