import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddRubicsOption from "../../components/AddRubicsOption/AddRubicsOption";
import {
	Box,
	Flex,
	Button,
	IconButton,
	Heading,
	Image,
	Stack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	TabIndicator,
} from "@chakra-ui/react";
export default function AddRubics() {
	return (
		<Box>
			<Navbar />
			<AddRubicsOption />
		</Box>
	);
}
