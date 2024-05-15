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
	Input,
	Text,
} from "@chakra-ui/react";
export default function DocumentOption() {
	const [tempReportLink, setTempReportLink] = useState("");
	const [tempPptLink, setTempPptLink] = useState("");
	const [reportLink, setReportLink] = useState("");
	const [pptLink, setPptLink] = useState("");

	const handleReportButtonClick = () => {
		// Open report link
		if (reportLink != "") window.open(reportLink);
	};

	const handlePptButtonClick = () => {
		if (pptLink != "") window.open(pptLink);
	};

	const handleSubmit = () => {
		setReportLink(tempReportLink);
		setPptLink(tempPptLink);
		setTempReportLink("");
		setTempPptLink("");
	};
	const handleChange = (e, inputContent) => {
		if (inputContent === "report") setTempReportLink(e.target.value);
		else if (inputContent === "ppt") setTempPptLink(e.target.value);
	};

	return (
		<Box px={4}>
			<Flex justify="space-between" my={5}>
				<Box
					p={2}
					w="45%"
					borderRadius="10px"
					textAlign="center"
					border="2px solid rgba(0, 0, 0, 0.2)"
					onClick={handleReportButtonClick}
					cursor="pointer"
					color="white"
					// bgGradient="linear(to-r, teal.500, blue.400)"
					bg="teal">
					<Text fontSize="18px">Report</Text>
				</Box>
				<Box
					p={2}
					w="45%"
					borderRadius="10px"
					textAlign="center"
					border="2px solid rgba(0, 0, 0, 0.2)"
					onClick={handlePptButtonClick}
					cursor="pointer"
					color="white"
					// bgGradient="linear(to-r, teal.500, blue.400)"
					bg="teal">
					<Text fontSize="18px">PPT</Text>
				</Box>
			</Flex>
			<Box mt={10} w="full">
				<Text mb={3} fontSize="14px">
					Provide the Google Drive links for the files
				</Text>
				<Input
					value={tempReportLink}
					fontSize="14px"
					onChange={(e) => {
						handleChange(e, "report");
					}}
					placeholder="Report Link"
					border="0.5px solid grey"
				/>
			</Box>
			<Box mt={3} w="full">
				<Input
					value={tempPptLink}
					fontSize="14px"
					onChange={(e) => {
						handleChange(e, "ppt");
					}}
					placeholder="PPT Link"
					border="0.5px solid grey"
				/>
			</Box>
			<Button mt={4} onClick={handleSubmit}>
				Submit
			</Button>
		</Box>
	);
}
