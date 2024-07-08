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
	Card,
	CardHeader,
	CardBody,
	Tag,
	CardFooter,
	HStack,
	Text,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ProjectList(props) {
	const navigate = useNavigate();
	const handleProjectCardClicks = () => {
		navigate("/project");
	};

	const generateProjectCards = () => {
		return props.projectData.map((project) => (
			<Card
				// maxW="sm" maxH="sm"
				p={2}
				key={project.id}
				boxShadow="dark-lg"
				h="350px"
				w="auto">
				<Box
					bgGradient={
						project.tags[0] == "AAT"
							? "linear(to-r, teal.500, blue.500)"
							: project.tags[0] == "MP1" || project.tags[0] == "MP2"
							? "linear(to-r, teal.500, blue.500)"
							: "linear(to-r, teal.500, blue.500)"
					}
					borderRadius="md"
					h="40%"
					position="relative">
					<HStack justify="space-between" p={2} mb="auto">
						{project.tags.map((tag, index) => (
							<Tag key={index} fontSize="12px">
								{tag}
							</Tag>
						))}
					</HStack>
					<CardHeader
						fontWeight="500"
						fontSize="15px"
						color="white"
						pb={1}
						mt="auto"
						px={2}
						overflow="hidden"
						noOfLines={3}
						position="absolute"
						bottom="0"
						left="0"
						right="0"
						onClick={handleProjectCardClicks}>
						{project.title}
					</CardHeader>
				</Box>
				<CardBody px={2} pt={2} pb={0} onClick={handleProjectCardClicks}>
					<Text
						color="gray.500"
						fontWeight="400"
						fontSize="13"
						noOfLines={7}
						textAlign="justify">
						{project.description}
					</Text>
				</CardBody>
				<CardFooter px={2} pt={1} pb={1} align="center">
					<Tag fontSize="15px" mr="auto">
						Guide: {project.guide}
					</Tag>
					<Button
						m={0}
						size="sm"
						variant="solid"
						bgGradient="linear(to-r, teal.400, blue.400)"
						color="white"
						onClick={handleProjectCardClicks}
						_hover={{ background: "teal", color: "white" }}>
						Open
					</Button>
				</CardFooter>
			</Card>
		));
	};
	return (
		<SimpleGrid
			spacing={[10, 20, 10]}
			width={"80%"}
			px={[5, 10, 20]}
			pt={10}
			mx="auto"
			columns={[1, 2, 3]}>
			{generateProjectCards()}
		</SimpleGrid>
	);
}
