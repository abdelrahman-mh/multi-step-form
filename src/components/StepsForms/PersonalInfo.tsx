import {
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"

import {
  namePattern,
  emailPattern,
  phonePattern,
  type PersonalInfoFrom,
} from "../../utils"

export default function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PersonalInfoFrom>()

  return (
    <>
      <Heading variant="stepTitle">Personal info</Heading>
      <Text variant="planDesc">
        Please provide your name, email address, and phone number.
      </Text>
      <Flex mt={{ base: "25px", md: "40px" }} gap="20px" direction="column">
        <FormControl isInvalid={!!errors.name}>
          <Flex justify="space-between" align="center" wrap="wrap">
            <FormLabel
              color="ui.main"
              fontSize={{ base: "13px", md: "16px" }}
              fontWeight="500"
            >
              Name
            </FormLabel>
            {errors.name && (
              <FormErrorMessage mb="8px">
                {errors.name.message}
              </FormErrorMessage>
            )}
          </Flex>
          <Input
            id="name"
            {...register("name", {
              required: "This filed is required",
              pattern: namePattern,
            })}
            placeholder="e.g. Stephen King"
            type="text"
          />
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <Flex justify="space-between" align="center" wrap="wrap">
            <FormLabel
              color="ui.main"
              fontSize={{ base: "13px", md: "16px" }}
              fontWeight="500"
            >
              Email Address
            </FormLabel>
            {errors.email && (
              <FormErrorMessage mb="8px">
                {errors.email.message}
              </FormErrorMessage>
            )}
          </Flex>
          <Input
            id="email"
            {...register("email", {
              required: "This filed is required",
              pattern: emailPattern,
            })}
            placeholder="e.g. stephenking@lorem.com"
            type="text"
          />
        </FormControl>
        <FormControl isInvalid={!!errors.phone}>
          <Flex justify="space-between" align="center" wrap="wrap">
            <FormLabel
              color="ui.main"
              fontSize={{ base: "13px", md: "16px" }}
              fontWeight="500"
            >
              Phone Number
            </FormLabel>
            {errors.phone && (
              <FormErrorMessage mb="8px">
                {errors.phone.message}
              </FormErrorMessage>
            )}
          </Flex>
          <Input
            id="phone"
            {...register("phone", {
              required: "This filed is required",
              pattern: phonePattern,
            })}
            placeholder="e.g. +1 234 567 890"
            type="text"
          />
        </FormControl>
      </Flex>
    </>
  )
}
