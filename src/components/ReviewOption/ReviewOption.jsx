import React, { useState } from "react";
import {
	Box,
	Flex,
	Button,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	IconButton,
	TableContainer,
	Menu,
	Tooltip,
	Tag,
	MenuButton,
	MenuList,
	MenuItem,
	HStack,
	VStack,
	Text,
} from "@chakra-ui/react";
import { EditIcon, AddIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
export default function ReviewOption() {
	const [selectedReview, setSelectedReview] = useState("Reviews"); // Initial value

	const handleMenuItemClick = (review) => {
		setSelectedReview(review);
	};

	const navigate = useNavigate();

	const handleRubicsClick = () => {
		navigate("/rubics/add");
	};
	const handleEditClick = () => {
		// navigate("/editrubics")
	};
	return (
		<Box>
			<Flex
				justify="space-between"
				// borderRadius="10px"
				mb={5}
				pb={4}
				align="center"
				borderBottom="2px solid rgba(0, 0, 0, 0.1)">
				<Menu>
					<MenuButton as={Button} w="150px" rightIcon={<ChevronDownIcon />}>
						{selectedReview}
					</MenuButton>
					<MenuList>
						<MenuItem onClick={() => handleMenuItemClick("Review 1")}>
							Review 1
						</MenuItem>
						<MenuItem onClick={() => handleMenuItemClick("Review 2")}>
							Review 2
						</MenuItem>
						<MenuItem onClick={() => handleMenuItemClick("Review 3")}>
							Review 3
						</MenuItem>
						<MenuItem onClick={() => handleMenuItemClick("Final Review")}>
							Final Review
						</MenuItem>
					</MenuList>
				</Menu>

				<Tooltip
					label="Add rubics"
					aria-label="Edit tooltip"
					fontSize="13px"
					borderRadius="5px">
					<IconButton
						w="auto"
						// bgGradient="linear(to-r, teal.400, blue.400)"
						bg="teal"
						color="white"
						h="20px"
						onClick={handleRubicsClick}
						p={3}
						icon={<AddIcon />}></IconButton>
				</Tooltip>
			</Flex>
			<TableContainer size="sm">
				<Text fontSize="18px" fontWeight={500}>
					Rubrics
				</Text>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th style={{ width: "45px" }}>Criteria</Th>
							<Th style={{ width: "45px" }}>Excellent</Th>
							<Th style={{ width: "45px" }}>Good</Th>
							<Th style={{ width: "45px" }}>Unsatisfactory</Th>
							<Th style={{ width: "45px" }}>Points</Th>
							<Th style={{ width: "45px" }}>Points</Th>
						</Tr>
					</Thead>
					<Tbody fontSize="13px">
						<Tr>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Design and Implementation of Program
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Able To fully Design and Implement Program using appropriate
									blockchain concepts in accordance to the given problem
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Able To Moderately Design and Implement Program using
									appropriate blockchain concepts in accordance to the given
									problem
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Not Able to Design and Implement Program using appropriate
									blockchain concepts in accordance to the given Problem
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									37.5% (0-20 marks) PO3
								</Box>
							</Td>
						</Tr>
						<Tr>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Usage of Modern Tool
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>Used efficiently</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>Used adequately</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Used but with errors.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									25% (0-10 marks) PO5
								</Box>
							</Td>
						</Tr>
						<Tr>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>Demonstration</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Demonstrates the functionality of the program with proper
									Input and Output using appropriate Tools for all cases.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Demonstrates the functionality of the program with proper
									Input and Output using appropriate Tools for few cases
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Demonstrates the functionality of the program without proper
									Input and Output using appropriate Tools for few cases.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									12.5% (0-5 marks) PO3
								</Box>
							</Td>
						</Tr>
						<Tr>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>Viva communication</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Able to Answer all Viva Questions of the blockchain Concepts.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Able to Answer few Viva Questions of the blockchain Concepts.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									Able to Not Answer Viva Questions of the blockchain Concepts.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									12.5% (0-5 marks) PO10
								</Box>
							</Td>
						</Tr>
						<Tr>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>Documentation</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									(5) Well written and neatly organized Record showing Input and
									Output
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									(3) Well written and neatly organized Record without showing
									proper Input and Output.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									(2) Well written and not neatly organized Record not showing
									proper Input and Output.
								</Box>
							</Td>
							<Td>
								<Box style={{ whiteSpace: "pre-wrap" }}>
									12.5% (0-5 marks) PO10
								</Box>
							</Td>
						</Tr>
						<Tr>
							<Td></Td>
							<Td></Td>
							<Td></Td>
							<Td fontWeight={500} fontSize="14px">
								Total
							</Td>
							<Td></Td>
						</Tr>
					</Tbody>
					<Tfoot></Tfoot>
				</Table>
			</TableContainer>
		</Box>
	);
}
