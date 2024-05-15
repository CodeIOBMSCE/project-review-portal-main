import React from "react";
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
	TableCaption,
	TableContainer,
	Menu,
	Tag,
	MenuButton,
	MenuList,
	MenuItem,
	HStack,
	VStack,
	Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export default function ReviewOption() {
	return (
		<Box>
			<Flex mb={3}>
				<Menu>
					<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
						Actions
					</MenuButton>
					<MenuList>
						<MenuItem>Review 1</MenuItem>
						<MenuItem>Review 2</MenuItem>
						<MenuItem>Review 3</MenuItem>
						<MenuItem>Final Review</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
			<TableContainer size="sm">
				<Text fontSize="18px" fontWeight={500}>
					Rubrics
				</Text>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th style={{ width: "50px" }}>Criteria</Th>
							<Th style={{ width: "100px" }}>Excellent</Th>
							<Th style={{ width: "100px" }}>Good</Th>
							<Th style={{ width: "100px" }}>Unsatisfactory</Th>
							<Th style={{ width: "100px" }}>Points</Th>
						</Tr>
					</Thead>
					<Tbody fontSize="12px">
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
					</Tbody>
					<Tfoot></Tfoot>
				</Table>
			</TableContainer>
		</Box>
	);
}
