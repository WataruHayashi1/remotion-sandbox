import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Logo } from './HelloWorld/Logo';
import { Subtitle } from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';
import { MyVideo } from './Sample/spring';
import { SequenceTest } from './Sample/sequence';
import { Scene } from './Camera/Scene';
import phone from './Camera/assets/phone.mp4';
import tablet from './Camera/assets/tablet.mp4';

type Device = 'phone' | 'tablet';
const deviceType: Device = 'phone'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Spring"
				component={MyVideo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Sequence"
				component={SequenceTest}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Phone"
				component={Scene}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					videoSrc: deviceType === 'phone' ? phone : tablet,
					baseScale: deviceType === 'phone' ? 1 : 1.8,
				}}
			/>
		</>
	);
};
