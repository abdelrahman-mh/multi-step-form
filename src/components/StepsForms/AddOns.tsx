import {
  Heading,
  Text,
  FormControl,
  Checkbox,
  Flex,
  Box,
  VStack,
} from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"

import {
  addOnsDataOrdered,
  addOnPrices,
  BillingCycle,
  type AddOnsForm,
} from "../../utils"

export default function AddOns({ billed }: { billed: BillingCycle }) {
  const { register, watch } = useFormContext<AddOnsForm>()
  console.log(watch())

  return (
    <>
      <Heading>Pick add-ons</Heading>
      <Text>Add-ons help enhance your gaming experience.</Text>

      <VStack mt={{ base: "25px", md: "40px" }} spacing="16px">
        {addOnsDataOrdered.map((addOn) => (
          <FormControl key={addOn.addOn}>
            <Checkbox variant="addOn" size="lg" {...register(addOn.addOn)}>
              <Flex
                align="center"
                flexWrap="wrap"
                justify="space-between"
                w="full"
              >
                <Box>
                  <Text fontSize="16px" color="ui.main" fontWeight="500">
                    {addOn.addOn}
                  </Text>
                  <Text
                    fontSize={{ base: "12px", md: "14px" }}
                    color="ui.coolGray"
                  >
                    {addOn.desc}
                  </Text>
                </Box>
                <Text
                  color="ui.purplishBlue"
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  +${addOnPrices[billed][addOn.addOn]}/
                  {billed === BillingCycle.Monthly ? "mo" : "yr"}
                </Text>
              </Flex>
            </Checkbox>
          </FormControl>
        ))}
      </VStack>
    </>
  )
}
