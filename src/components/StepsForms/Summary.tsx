import {
  Heading,
  Box,
  Flex,
  Text,
  Card,
  CardBody,
  StackDivider,
  Stack,
  Button,
  Spinner,
  Image,
  HStack,
} from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import {
  BillingCycle,
  addOnsDataOrdered,
  billingCyclePrices,
  addOnPrices,
  type FormSteps,
} from "../../utils"

interface SummaryProps {
  data: FormSteps
  goToPlanStep: () => void
}

export default function Summary({ data, goToPlanStep }: SummaryProps) {
  const {
    formState: { isSubmitting, isSubmitted },
  } = useFormContext()
  console.log("data", data)
  const billedPeriod = data.billed === BillingCycle.Monthly ? "mo" : "yr"
  const isHaveAddOns = addOnsDataOrdered.some((e) => data[e.addOn])

  function totalCost() {
    let total = billingCyclePrices[data.billed][data.plan]
    if (isHaveAddOns) {
      total += addOnsDataOrdered
        .filter((addOn) => data[addOn.addOn])
        .reduce((acc, addOn) => acc + addOnPrices[data.billed][addOn.addOn], 0)
    }
    return total
  }

  if (isSubmitting) {
    return (
      <Flex w="full" h="full" justify="center" align="center">
        <Spinner size="xl" />
      </Flex>
    )
  }

  if (isSubmitted) {
    return (
      <Flex
        justify="center"
        align="center"
        flexDir="column"
        h="full"
        gap="20px"
      >
        <Image src="/images/icon-thank-you.svg" alt="Thant-You" mb="15px" />
        <Heading color="ui.maim">Thank you!</Heading>
        <Text color="ui.coolGray" textAlign="center" maxW="450px">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Text>
      </Flex>
    )
  }

  return (
    <>
      <Heading mb={4}>Finishing up</Heading>
      <Text mb={6}>Double-check everything looks OK before confirming.</Text>
      <Card mt={{ base: "25px", md: "40px" }} shadow="none" bg="ui.alabaster">
        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <HStack justify="space-between" align="center">
              <Box>
                <Text
                  fontWeight="bold"
                  color="ui.main"
                  fontSize={{ md: "18px" }}
                >
                  {data.plan} ({data.billed})
                </Text>
                <Button
                  variant="link"
                  textDecor="underline"
                  onClick={goToPlanStep}
                  color="ui.coolGray"
                  fontSize={{ base: "16px" }}
                  fontWeight="400"
                  _hover={{ color: "ui.purplishBlue" }}
                >
                  Change
                </Button>
              </Box>
              <Text fontWeight="bold" color="ui.main" fontSize={{ md: "18px" }}>
                ${billingCyclePrices[data.billed][data.plan]}/{billedPeriod}
              </Text>
            </HStack>

            {isHaveAddOns && (
              <Stack spacing={2}>
                {addOnsDataOrdered.map((addOn) =>
                  data[addOn.addOn] ? (
                    <HStack key={addOn.addOn} justify="space-between">
                      <Text color="ui.coolGray">{addOn.addOn}</Text>
                      <Text color="ui.main">
                        +${addOnPrices[data.billed][addOn.addOn]}/{billedPeriod}
                      </Text>
                    </HStack>
                  ) : null,
                )}
              </Stack>
            )}
          </Stack>
        </CardBody>
      </Card>
      <HStack mt="20px" justify="space-between" px={5}>
        <Text color="ui.coolGray">
          Total (per {billedPeriod === "mo" ? "month" : "year"})
        </Text>
        <Text
          fontWeight="bold"
          color="ui.purplishBlue"
          fontSize={{ base: "17px", md: "22px" }}
        >
          {isHaveAddOns && "+"}
          {totalCost()}/{billedPeriod}
        </Text>
      </HStack>
    </>
  )
}
