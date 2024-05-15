import React, { useState } from "react";
import {
	Box,
	Flex,
	Button,
	IconButton,
	Heading,
	Image,
	Stack,
	SimpleGrid,
	Input,
	Tag,
	CardFooter,
	Textarea,
	HStack,
	Text,
} from "@chakra-ui/react";
import { EditIcon, CloseIcon } from "@chakra-ui/icons";

export default function ProductOption() {
	const [editOpen, setEditOpen] = useState(false);
	const [tempTitle, setTempTitle] = useState("");
	const [tempDescription, setTempDescription] = useState("");
	const [title, setTitle] = useState("#Project title");
	const [description, setDescription] = useState("#Project description");

	const handleChange = (e, inputContent) => {
		if (inputContent === "title") setTempTitle(e.target.value);
		else if (inputContent === "description") setTempDescription(e.target.value);
	};

	const handleClick = (clickType) => {
		if (clickType === "edit") setEditOpen(true);
		else if (clickType === "close") setEditOpen(false);
	};
	const handleSubmit = () => {
		if (tempTitle != "") setTitle(tempTitle);
		if (tempDescription != "") setDescription(tempDescription);
		setTempTitle("");
		setTempDescription("");
		setEditOpen(false);
	};
	return (
		<Box>
			<Flex
				justify="flex-end"
				// borderRadius="10px"
				mb={5}
				pb={4}
				align="center"
				borderBottom="2px solid rgba(0, 0, 0, 0.1)">
				<IconButton
					w="auto"
					// bgGradient="linear(to-r, teal.400, blue.400)"
					bg="teal"
					color="white"
					h="20px"
					onClick={() => handleClick("edit")}
					p={3}
					icon={<EditIcon />}></IconButton>
			</Flex>
			{editOpen && (
				<Box mt={3} mb={10} w="full">
					<Flex
						justify="space-between"
						borderRadius="10px"
						my={3}
						align="center">
						<Text fontSize="18px" fontWeight={500}>
							Edit
						</Text>
						<IconButton
							size="sm"
							color="rgba(0, 0, 0, 0.2)"
							bg="white"
							p={0}
							onClick={() => handleClick("close")}
							icon={<CloseIcon />}
							_hover={{}}
							_focus={{ background: "white" }}></IconButton>
					</Flex>
					<Input
						fontSize="14px"
						value={tempTitle}
						onChange={(e) => handleChange(e, "title")}
						placeholder="Enter title"
						border="0.5px solid grey"
						mb={3}
					/>
					<Textarea
						fontSize="14px"
						value={tempDescription}
						h="200px"
						onChange={(e) => handleChange(e, "description")}
						placeholder="Enter description"
						border="0.5px solid grey"
					/>

					<Button mt={4} size="sm" fontSize="13px" onClick={handleSubmit}>
						Submit
					</Button>
				</Box>
			)}
			<Text fontSize="18px" mb={3} fontWeight={500}>
				{title}
			</Text>
			<Text fontSize="15px" whiteSpace="pre-wrap">
				{description}
			</Text>
		</Box>
	);
}
