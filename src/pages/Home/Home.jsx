import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectList from "../../components/ProjectList/ProjectList";

const projectData = [
	// Define your project data here
	{
		id: 1,
		title:
			"Machine Learning-based Predictive Maintenance System for Industrial Applications",
		tags: ["AAT", "6th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Rekha G S",
	},
	{
		id: 2,
		title:
			"Dynamic Control of Distal Spatial Mode Pattern Output From Multimode Fiber Using Integrated Coherent Network",
		tags: ["MP1", "4th sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Sonika Sharma",
	},
	{
		id: 3,
		title:
			"Non-Orthogonal Multiple Access in Multi-Cell Networks: Theory, Performance, and Practical Challenges",
		tags: ["MP1", "6th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Namratha",
	},
	{
		id: 4,
		title:
			"Non-Coherent Massive MIMO-OFDM Down-Link Based on Differential Modulation",
		tags: ["AAT", "6th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Rajeshwari",
	},
	{
		id: 5,
		title:
			"Comparative Study of Forecasting Global Mean Sea Level Rising using Machine Learning",
		tags: ["MP2", "5th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Vikranth",
	},
	{
		id: 6,
		title:
			"GIS analysis for defining sea level rise effects on Sicily coasts for the end of the 21st century",
		tags: ["MAP", "8th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "John Doe",
	},
	{
		id: 7,
		title:
			"An Explore of Virtual Reality for Awareness of the Climate Change Crisis: A Simulation of Sea Level Rise",
		tags: ["MAP", "8th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "John Doe",
	},
	{
		id: 8,
		title: "Comparison of effective greenhouse gases and global warming",
		tags: ["AAT", "6th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Rekha G S",
	},
	{
		id: 9,
		title: "Forecasting Global Mean Sea Level Rise using Autoregressive Models",
		tags: ["MP1", "7th sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Sonika Sharma",
	},
	{
		id: 10,
		title:
			"The Paths to Resilient Shorelines: An Engineering Analysis of Sea Level Rise Planning from the Gulf Coast to Mid-Atlantic",
		tags: ["MP1", "6th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Namratha",
	},
	{
		id: 11,
		title:
			"Urban Planning in Response to Sea Level Rise and Future Urbanization in Southern Florida",
		tags: ["AAT", "6th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Rajeshwari",
	},
	{
		id: 12,
		title:
			"A comparative study to the 2011/2013 water quality assessments in the Pasquotank Watershed in Northeastern North Carolina with a sea level rise component ",
		tags: ["MP2", "5th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "Vikranth",
	},
	{
		id: 13,
		title:
			"Impending impact of climate change on present and future generations",
		tags: ["MAP", "8th Sem"],
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel facilis excepturi tenetur unde accusamus eaque libero alias! Libero, iure?",
		guide: "John Doe",
	},

	// Add more project objects as needed
];

export default function Home() {
	return (
		<div>
			<Navbar />
			<ProjectList projectData={projectData} />
		</div>
	);
}
