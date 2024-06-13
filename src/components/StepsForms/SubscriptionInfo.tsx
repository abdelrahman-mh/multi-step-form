import {
  Box,
  Heading,
  Text,
  HStack,
  useRadioGroup,
  Switch,
  useRadio,
  FormLabel,
  Flex,
  Image,
  FormControl,
} from "@chakra-ui/react"
import {
  subPlanDataOrdered,
  BillingCycle,
  billingCyclePrices,
  type SubscriptionPlan,
  type SubscriptionInfoForm,
} from "../../utils"
import { forwardRef, type ReactNode } from "react"
import { useController, useFormContext } from "react-hook-form"

// Custom radio card component
const RadioCard = forwardRef<
  HTMLInputElement,
  { children: ReactNode; value: SubscriptionPlan }
>(({ children, value, ...rest }, ref) => {
  const { getInputProps, getRadioProps } = useRadio({ ...rest, value })
  const input = getInputProps({ ref })
  const checkbox = getRadioProps()

  return (
    <Box as="label" w="full">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="lg"
        _checked={{
          bg: "ui.alabaster",
          borderColor: "ui.purplishBlue",
        }}
        _hover={{
          borderColor: "ui.purplishBlue",
        }}
        transition="ease"
        transitionDuration="100ms"
        px={4}
        py={5}
      >
        {children}
      </Box>
    </Box>
  )
})

export default function SubscriptionInfo() {
  const { control, setValue, watch } = useFormContext<SubscriptionInfoForm>()

  // Watch for changes in billing cycle
  const currentBilledCycle = watch("billed", BillingCycle.Monthly)

  const { field } = useController({
    name: "plan",
    control,
  })

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
    name: "plan",
  })
  const group = getRootProps()

  return (
    <>
      <Heading>Select your plan</Heading>
      <Text>You have the option of monthly or yearly billing.</Text>

      <HStack
        {...group}
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "10px", md: "20px" }}
        justifyContent="space-between"
        mt={{ base: "25px", md: "40px" }}
      >
        {subPlanDataOrdered.map((plan) => (
          <RadioCard
            key={plan.plan}
            value={plan.plan}
            {...getRadioProps({ value: plan.plan })}
          >
            <Flex
              flexDir={{ base: "row", md: "column" }}
              align="flex-start"
              gap="15px"
              justify="flex-start"
            >
              <Image src={plan.img} />
              <Box mt={{ md: "30px" }}>
                <Text color="ui.main" fontWeight="bold">
                  {plan.plan}
                </Text>
                <Text color="ui.coolGray" fontSize="16px">
                  ${billingCyclePrices[currentBilledCycle][plan.plan]}/
                  {currentBilledCycle === BillingCycle.Monthly ? "mo" : "yr"}
                </Text>
                {currentBilledCycle === BillingCycle.Yearly && (
                  <Text fontWeight="400" fontSize="14px" color="ui.main">
                    2 months free
                  </Text>
                )}
              </Box>
            </Flex>
          </RadioCard>
        ))}
      </HStack>

      <FormControl
        as={Flex}
        mt="40px"
        align="center"
        justify="center"
        gap="20px"
        bg="ui.magnolia"
        py="10px"
        rounded="lg"
      >
        <FormLabel
          m="0"
          color={
            currentBilledCycle === BillingCycle.Monthly
              ? "ui.main"
              : "ui.coolGray"
          }
        >
          Monthly
        </FormLabel>
        <Switch
          variant="billed"
          isChecked={currentBilledCycle === BillingCycle.Yearly}
          onChange={() =>
            setValue(
              "billed",
              currentBilledCycle === BillingCycle.Monthly
                ? BillingCycle.Yearly
                : BillingCycle.Monthly,
            )
          }
        />
        <FormLabel
          m="0"
          color={
            currentBilledCycle === BillingCycle.Yearly
              ? "ui.main"
              : "ui.coolGray"
          }
        >
          Yearly
        </FormLabel>
      </FormControl>
    </>
  )
}
