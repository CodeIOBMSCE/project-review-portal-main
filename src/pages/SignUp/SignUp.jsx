import { useState } from "react";
import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	chakra,
	Box,
	Avatar,
	FormControl,
	FormHelperText,
	InputRightElement,
	Radio,
	Link,
	RadioGroup,
	HStack,
	Select,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEnvelope = chakra(FaEnvelope);

export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [role, setRole] = useState("Student");
	const [branch, setBranch] = useState("");

	const handleShowPasswordClick = () => setShowPassword(!showPassword);
	const handleShowConfirmPasswordClick = () =>
		setShowConfirmPassword(!showConfirmPassword);

	return (
		<Flex
			flexDirection="column"
			width="100wh"
			height="100vh"
			backgroundColor="gray.200"
			justifyContent="center"
			alignItems="center">
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center">
				<Avatar bg="teal.500" />
				<Heading color="teal.400">Sign Up</Heading>
				<Box minW={{ base: "90%", md: "468px" }} borderRadius="20px">
					<form>
						<Stack
							spacing={4}
							p="1rem"
							backgroundColor="whiteAlpha.900"
							boxShadow="md"
							borderRadius="20px">
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										children={<CFaUserAlt color="gray.300" />}
									/>
									<Input type="text" placeholder="Name" />
								</InputGroup>
							</FormControl>
							<FormControl>
								<Select
									placeholder="Select Branch"
									color="gray.500"
									onChange={(e) => setBranch(e.target.value)}>
									<option value="CSE">Computer Science</option>
									<option value="ECE">Electronics and Communication</option>
									<option value="ME">Mechanical</option>
									<option value="CV">Civil</option>
									<option value="EE">Electrical</option>
								</Select>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										children={<CFaEnvelope color="gray.300" />}
									/>
									<Input type="email" placeholder="Email Address" />
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
										children={<CFaLock color="gray.300" />}
									/>
									<Input
										type={showPassword ? "text" : "password"}
										placeholder="Password"
									/>
									<InputRightElement width="4.5rem">
										<Button
											h="1.75rem"
											size="sm"
											onClick={handleShowPasswordClick}>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
										children={<CFaLock color="gray.300" />}
									/>
									<Input
										type={showConfirmPassword ? "text" : "password"}
										placeholder="Confirm Password"
									/>
									<InputRightElement width="4.5rem">
										<Button
											h="1.75rem"
											size="sm"
											onClick={handleShowConfirmPasswordClick}>
											{showConfirmPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<FormControl as="fieldset">
								<RadioGroup onChange={setRole} value={role}>
									<HStack spacing="24px">
										<Radio value="Student">Student</Radio>
										<Radio value="Teacher">Teacher</Radio>
										<Radio value="HOD">HOD</Radio>
									</HStack>
								</RadioGroup>
							</FormControl>

							<Button
								type="submit"
								variant="solid"
								colorScheme="teal"
								width="full"
								borderRadius="20px">
								Sign Up
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				Already have an account:{" "}
				<Link color="teal.500" href="/login">
					Login
				</Link>
			</Box>
		</Flex>
	);
}
