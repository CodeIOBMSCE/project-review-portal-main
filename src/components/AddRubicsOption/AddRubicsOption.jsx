import React, { useState, useRef, useEffect } from "react";
import {
	Box,
	Text,
	FormControl,
	Input,
	Textarea,
	VStack,
	Select,
	FormLabel,
	Button,
	Center,
	HStack,
	SimpleGrid,
	Flex,
} from "@chakra-ui/react";

export default function AddRubicsOption() {
	const [noOfReviews, setNoOfReviews] = useState();
	const [nextButton, setNextButton] = useState(2);
	const [typeOfReview, setTypeOfReview] = useState("");
	const [courseCode, setCourseCode] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const prevNoOfReviews = useRef(noOfReviews);

	const handleNextClick = () => {
		console.log(nextButton, noOfReviews);
		if (nextButton <= noOfReviews) {
			if (nextButton == noOfReviews) {
				setTypeOfReview("Final Review");
			} else if (nextButton == 1) {
				setTypeOfReview("Review 1");
			} else if (nextButton == 2) {
				setTypeOfReview("Review 2");
			} else if (nextButton == 3) {
				setTypeOfReview("Review 3");
			}
			setNextButton(nextButton + 1);
		}
	};

	const handleSubmit = () => {
		//Database code
		console.log(noOfReviews);

		if (noOfReviews != undefined) {
			setNextButton(2);
			setTypeOfReview(noOfReviews == 1 ? "Final review" : "Review 1");
			setCourseCode("");
			setIsSubmitted(true);
		}
	};

	return (
		<Flex justify="center" align="center">
			<Box w="50%" h="70%" m="auto" pb={8}>
				<Text mb={4} fontSize="18px" textAlign="center" fontWeight={500}>
					Add Rubics
				</Text>
				<FormControl w="full">
					<Box mb={3}>
						<Flex align="center" mb={3} w="30%">
							<FormLabel for="noofreviews">Total no of reviews</FormLabel>
							<Input
								name="noofreviews"
								value={noOfReviews}
								max="4"
								onChange={(e) => setNoOfReviews(e.target.value)}
								w="45px"
								border="0.5px solid grey"
							/>
						</Flex>
						<Flex align="center" mb={3} w="40%">
							<FormLabel for="coursecode">Course code</FormLabel>
							<Input
								name="coursecode"
								w="50%"
								value={courseCode}
								onChange={(e) => setCourseCode(e.target.value)}
								border="0.5px solid grey"
							/>
						</Flex>
						<Button
							size="sm"
							bg="black"
							onClick={handleSubmit}
							color="white"
							_hover={{}}>
							Submit
						</Button>
					</Box>

					<Text fontSize="18px" fontWeight={500}>
						{typeOfReview}
					</Text>
					<VStack columns={3} spacing={3} w="full" mt={3} h="55px">
						<Box w="full">
							<FormLabel for="criteria" fontSize="14px">
								Criteria
							</FormLabel>
							<Input name="criteria" w="full" border="0.5px solid grey" />
						</Box>
						<Box w="full">
							<FormLabel for="excellent" fontSize="14px">
								Excellent
							</FormLabel>
							<Input name="excellent" w="full" border="0.5px solid grey" />
						</Box>
						<Box w="full">
							<FormLabel for="good" fontSize="14px">
								Good
							</FormLabel>
							<Input name="good" w="full" border="0.5px solid grey" />
						</Box>
						<Box w="full">
							<FormLabel for="unsatisfactory" fontSize="14px">
								Unsatisfactory
							</FormLabel>
							<Input name="unsatisfactory" w="full" border="0.5px solid grey" />
						</Box>
						<Box w="full">
							<FormLabel for="markshare" fontSize="14px">
								Marks Share
							</FormLabel>
							<Input name="markshare" w="full" border="0.5px solid grey" />
						</Box>
						<Flex justify="flex-end" w="full" mt={2}>
							<Box>
								<Button size="sm" bg="grey" mr={3} color="white" _hover={{}}>
									Append
								</Button>
								<Button
									size="sm"
									bg="grey"
									mr={3}
									color="white"
									_hover={{}}
									{...(isSubmitted && { onClick: handleNextClick })}>
									Next
								</Button>
								<Button size="sm" bg="black" color="white" _hover={{}}>
									Save
								</Button>
							</Box>
						</Flex>
					</VStack>
				</FormControl>
			</Box>
		</Flex>
	);
}
