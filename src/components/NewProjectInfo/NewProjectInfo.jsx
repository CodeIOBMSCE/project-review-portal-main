import {
	Box,
	Text,
	FormControl,
	Input,
	Textarea,
	VStack,
	Select,
	Button,
	SimpleGrid,
	Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";

let guides = [
	{ id: 1, name: "Dr. Kavitha S" },
	{ id: 2, name: "Dr. Kayarvizhy N" },
	{ id: 3, name: "Dr. Prasad G R" },
	{ id: 4, name: "Dr. Umadevi V" },
	{ id: 5, name: "Basavaraj J" },
	{ id: 6, name: "Madhavi R.P." },
	{ id: 7, name: "Dr. Asha G R" },
	{ id: 8, name: "Dr. K. Panimozhi" },
	{ id: 9, name: "Dr. Latha N.R." },
	{ id: 10, name: "Dr. Manjunath D R" },
	{ id: 11, name: "Dr. Pallavi G B" },
	{ id: 12, name: "Dr. Rajeshwari B S" },
	{ id: 13, name: "Dr. Seema P" },
	{ id: 14, name: "Dr. Selva K S" },
	{ id: 15, name: "Dr. Shyamala G" },
	{ id: 16, name: "Dr. Nandhini V" },
	{ id: 17, name: "Karanam S K" },
	{ id: 18, name: "Lakshmi N" },
	{ id: 19, name: "Ms. Ambuja K" },
	{ id: 20, name: "Namratha M" },
	{ id: 21, name: "Pradeep S" },
	{ id: 22, name: "Prameetha Pai" },
	{ id: 23, name: "Swathi S" },
	{ id: 24, name: "Radhika A D" },
	{ id: 25, name: "Rajeshwari M" },
	{ id: 26, name: "RAMYA K M" },
	{ id: 27, name: "Rekha G S" },
	{ id: 28, name: "Sandhya A K" },
	{ id: 29, name: "Saritha A. N" },
	{ id: 30, name: "Sheetal V A" },
	{ id: 31, name: "Shravya A R" },
	{ id: 32, name: "SNEHA P" },
	{ id: 33, name: "Sneha S B" },
	{ id: 34, name: "Sonika S D" },
	{ id: 35, name: "Sowmya T" },
	{ id: 36, name: "Sunayana S" },
	{ id: 37, name: "Surabhi S" },
	{ id: 38, name: "Syed Akram" },
	{ id: 39, name: "Vikranth B.M" },
];

guides.sort((a, b) => a.name.localeCompare(b.name));
export default function NewProjectInfo() {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		semester: "",
		projectType: "",
		guide: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSelectChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};
	const renderLabel = (value, str) => {
		if (value !== "") {
			return (
				<Text
					position="absolute"
					bottom="73%"
					left="5%"
					zIndex={1}
					bg="white"
					textAlign="left"
					px={1}>
					{str}
				</Text>
			);
		}
	};
	return (
		<Flex justify="center" h="70vh">
			<Box w="60%" h="60%" m="auto" p={5}>
				<Text mb={3} fontSize="22px">
					Create new project
				</Text>
				<FormControl>
					<VStack spacing={5}>
						<Text w="full" fontSize="14px">
							Enter a brief and accurate title for your project.
						</Text>
						<Input
							name="title"
							placeholder="Title"
							value={formData.title}
							onChange={handleChange}
							border="0.5px solid grey"
						/>

						<Text w="full" fontSize="14px">
							Enter a description of not more than 7 lines.
						</Text>
						<Textarea placeholder="Description" border="0.5px solid grey" />
					</VStack>
					<SimpleGrid columns={3} spacing={5} w="full" mt={7} h="55px">
						<Box position="relative">
							{renderLabel(formData.semester, "Semester")}
							<Select
								name="semester"
								placeholder="Select semester"
								border="0.5px solid grey"
								zIndex={0}
								py={1}
								value={formData.semester}
								onChange={(e) =>
									handleSelectChange("semester", e.target.value)
								}>
								<option>1st Sem</option>
								<option>2nd Sem</option>
								<option>3rd Sem</option>
								<option>4th Sem</option>
								<option>5th Sem</option>
								<option>6th Sem</option>
								<option>7th Sem</option>
								<option>8th Sem</option>
							</Select>
						</Box>
						<Box position="relative">
							{renderLabel(formData.projectType, "Project type")}
							<Select
								placeholder="Select type of project"
								name="projectType"
								zIndex={0}
								py={1}
								border="0.5px solid grey"
								value={formData.projectType}
								onChange={(e) =>
									handleSelectChange("projectType", e.target.value)
								}>
								<option>AAT</option>
								<option>MP1</option>
								<option>MP2</option>
								<option>MaP</option>
							</Select>
						</Box>
						<Box position="relative">
							{renderLabel(formData.guide, "Guide")}
							<Select
								name="guide"
								placeholder="Select guide"
								zIndex={0}
								py={1}
								border="0.5px solid grey"
								value={formData.guide}
								onChange={(e) => handleSelectChange("guide", e.target.value)}>
								{guides.map((guide) => (
									<option key={guide.id} size={5}>
										{guide.name}
									</option>
								))}
							</Select>
						</Box>
					</SimpleGrid>
					<Flex justify="flex-end" w="full" mt={5}>
						<Button size="md" _hover={{ background: "teal", color: "white" }}>
							Submit
						</Button>
					</Flex>
				</FormControl>
			</Box>
		</Flex>
	);
}
