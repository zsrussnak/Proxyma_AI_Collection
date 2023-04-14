import {
	LinksText,
	LinksMarketing,
	LinksKnowledge,
	LinksAiAssistance,
	LinksSales,
	LinksSupport,
	LinksSeo,
	LinksOther,
	LinksVideo,
	LinksPersonalized,
	LinksImageGen,
	LinksDesign,
	LinksCodeGen,
	LinksSql,
	LinksWebBuilder,
	LinksDocu,
	LinksSpeech,
	Links3D,
	LinksMusic,
	LinksAiAvatar
} from "../constants";

const Links = () => (
	<>
		<div className="block Text">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="writing"
			>
				General Writing
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksText &&
					LinksText.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Marketing">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="marketing"
			>
				Marketing
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksMarketing &&
					LinksMarketing.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Knowledge">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="knowledge"
			>
				Knowledge
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksKnowledge &&
					LinksKnowledge.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block AiAssistance">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="ai_assistance"
			>
				Ai Assistance
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksAiAssistance &&
					LinksAiAssistance.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Sales">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="sales">
				Sales
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksSales &&
					LinksSales.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Support">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="support"
			>
				Support
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksSupport &&
					LinksSupport.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Seo">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="seo">
				Seo
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksSeo &&
					LinksSeo.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Other">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="other">
				Other
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksOther &&
					LinksOther.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Video">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="video">
				Video Editing/Generation
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksVideo &&
					LinksVideo.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Personalized">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="personalized"
			>
				Personalized Video
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksPersonalized &&
					LinksPersonalized.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block ImageGen">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="image_gen"
			>
				Image Generation
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksImageGen &&
					LinksImageGen.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Design">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="design">
				Design
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksDesign &&
					LinksDesign.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block CodeGen">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="codeGen"
			>
				Code Generation
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksCodeGen &&
					LinksCodeGen.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Sql">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="sql">
				Text to SQL
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksSql &&
					LinksSql.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block WebBuilder">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="WebBuilder"
			>
				Web App Builder
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksWebBuilder &&
					LinksWebBuilder.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Docu">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="Docu">
				Documentation
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksDocu &&
					LinksDocu.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Speech">
			<h1 className="pt-4 m-4 text-3xl font-semibold text-gradient" id="Speech">
				Speech
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksSpeech &&
					LinksSpeech.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block 3d_design">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="3d_design"
			>
				3D Models/Scenes
			</h1>
			<div className="flex flex-wrap flex_grid">
				{Links3D &&
					Links3D.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block Music">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="3d_design"
			>
				Music
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksMusic &&
					LinksMusic.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>

		<div className="block AiAvatar">
			<h1
				className="pt-4 m-4 text-3xl font-semibold text-gradient"
				id="3d_design"
			>
				Ai Avatar
			</h1>
			<div className="flex flex-wrap flex_grid">
				{LinksAiAvatar &&
					LinksAiAvatar.map((item) => (
						<div
							key={item.id}
							className="flex flex-row justify-around m-2 bg-white flex-center oject-contain"
						>
							<a href={item.url} target="_blank" rel="noreferrer noopener">
								<img
									className="max-w-[180px] max-h-[60px] m-4 object-contain"
									src={item.image}
									alt=""
								/>
							</a>
						</div>
					))}
			</div>
		</div>
	</>
);

export default Links;
