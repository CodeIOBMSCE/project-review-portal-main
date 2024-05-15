import React from "react";
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
import Navbar from "../../components/Navbar/Navbar";
import ProductOption from "../../components/ProjectOption/ProjectOption";
import ProjectSidebar from "../../components/ProjectSidebar/ProjectSidebar";
import DocumentOption from "../../components/DocumentOption/DocumentOption";
import ReviewOption from "../../components/ReviewOption/ReviewOption";
import HodReviewOption from "../../components/HodReviewOption/HodReviewOption";
export default function Project() {
	return (
		<Box>
			<Navbar />

			<Flex>
				<Box w="60%" ml="10%">
					<Tabs position="relative" variant="unstyled">
						<TabList borderBottom="2px solid rgba(0, 0, 0, 0.1)">
							<Tab fontSize="xl" mr={7} p={3}>
								Project
							</Tab>
							<Tab fontSize="xl" mr={7} p={3}>
								Documents
							</Tab>
							<Tab fontSize="xl" mr={7} p={3}>
								Review
							</Tab>
							<Tab fontSize="xl" mr={7} p={3}>
								HOD Review
							</Tab>
						</TabList>
						<TabIndicator
							mt="-1.5px"
							height="3px"
							// bg="teal.500"
							bgGradient="linear(to-r, teal.400, blue.400)"
							borderRadius="1px"
						/>
						<TabPanels border="2px solid rgba(0, 0, 0, 0.1)">
							<TabPanel>
								<ProductOption />
							</TabPanel>
							<TabPanel>
								<DocumentOption />
							</TabPanel>
							<TabPanel>
								<ReviewOption />
							</TabPanel>
							<TabPanel>
								<HodReviewOption />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>

				<Box
					border="2px solid rgba(0, 0, 0, 0.1)"
					borderRadius="10px"
					mr="10%"
					ml="auto"
					mt="50px"
					w="18%"
					h="500px"
					p={5}>
					<ProjectSidebar />
				</Box>
			</Flex>
		</Box>
	);
}
