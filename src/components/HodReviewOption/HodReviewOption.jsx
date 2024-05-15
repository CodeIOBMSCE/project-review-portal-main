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
	VStack,
	Text,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function HodReviewOption() {
	const [approval, setApproval] = useState(true);

	return (
		<Box>
			{!approval && (
				<Flex justify="space-between">
					<Text>Send the project for HOD's approval</Text>
					<Button
						size="sm"
						p={2}
						bg="teal"
						color="white"
						_hover={{}}
						_focus={{ background: "teal" }}>
						Send
					</Button>
				</Flex>
			)}
			{!approval && (
				<Box>
					<Text fontSize="18px" fontWeight={500} mb={2}>
						Your project has been approved!
					</Text>
					<Text fontSize="14px">Comments</Text>
					<Text fontSize="13px">
						Project shows promising development, minor adjustments needed for
						perfection.
					</Text>
				</Box>
			)}
			<Flex align="center">
				<Spinner mr={2} size="sm" />
				<Text fontSize="18px" fontWeight={500}>
					Waiting for approval
				</Text>
			</Flex>
		</Box>
	);
}
