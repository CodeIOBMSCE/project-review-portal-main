import React from "react";
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
	CardHeader,
	CardBody,
	Tag,
	InputGroup,
	HStack,
	VStack,
	InputRightElement,
	Text,
} from "@chakra-ui/react";

let collaborators = [
	"Sandeep G",
	"Rohan A",
	"Suman S",
	"Sagar V H",
	"Manush L",
	"Sanvi P",
];

import { FaCircleUser } from "react-icons/fa6";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
export default function ProjectSidebar() {
	return (
		<Box position="relative">
			<Box mb={3}>
				<Tag
					fontSize="13px"
					bg="black"
					color="white"
					mr={3}
					mb={0}
					ml={0}
					p={2}>
					6th Sem
				</Tag>
				<Tag fontSize="13px" bg="black" color="white" p={2}>
					AAT
				</Tag>
			</Box>
			<Flex align="center" mb={10}>
				<Text mr={2} fontSize="18px" fontWeight={500}>
					Guide:
				</Text>
				<Tag fontSize="13px" bg="grey" color="white" p={2}>
					Rekha G S
				</Tag>
			</Flex>
			<Stack mt={5} spacing={2}>
				<Text fontSize="18px" fontWeight={500}>
					Collaborators
				</Text>
				{collaborators.map((collaborator, index) => (
					<Flex align="center" key={index}>
						<IconButton
							variant="ghost"
							colorScheme="teal"
							aria-label="Profile"
							borderRadius="full"
							size={50}
							mr={1}
							icon={<FaCircleUser />}
						/>
						<Text fontSize="14px">{collaborator}</Text>
					</Flex>
				))}
			</Stack>
			<Box mt={10} mb={0} position="absolute">
				<InputGroup>
					<Input
						placeholder="Add Collaborators"
						pr="4.0rem"
						border="2px solid rgba(0, 0, 0, 0.2)"
					/>
					<InputRightElement width="4.0rem">
						<Button h="1.75rem" bg="grey" color="white" size="sm">
							<AddIcon />
						</Button>
					</InputRightElement>
				</InputGroup>
			</Box>
		</Box>
	);
}
