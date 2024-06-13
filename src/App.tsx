import { Box, useSteps, Flex } from "@chakra-ui/react"
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form"

import Stepper from "./components/Base/Stepper"
import PersonalInfo from "./components/StepsForms/PersonalInfo"
import SubscriptionInfo from "./components/StepsForms/SubscriptionInfo"
import AddOns from "./components/StepsForms/AddOns"
import Summary from "./components/StepsForms/Summary"
import Actions from "./components/Base/Actions"

import { BillingCycle, SubscriptionPlan, type FormSteps } from "./utils"

const steps = [
  { description: "Your info" },
  { description: "Select plan" },
  { description: "Add-ons" },
  { description: "Summary" },
]

function App() {
  const methods = useForm<FormSteps>({
    defaultValues: {
      plan: SubscriptionPlan.Arcade,
      billed: BillingCycle.Monthly,
    },
  })
  const {
    activeStep,
    goToNext,
    goToPrevious,
    setActiveStep,
    activeStepPercent,
  } = useSteps({
    index: 0,
    count: steps.length,
  })

  const onSubmit: SubmitHandler<FormSteps> = async (data) => {
    // Simulate server delay
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log(data)
        resolve()
      }, 2000),
    )
  }

  async function handleNext() {
    const isValid = await methods.trigger()
    isValid ? goToNext() : null
  }

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfo />
      case 1:
        return <SubscriptionInfo />
      case 2:
        return <AddOns billed={methods.watch("billed")} />
      case 3:
        return (
          <Summary
            data={methods.getValues() as FormSteps}
            goToPlanStep={() => setActiveStep(1)}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <Flex
        minH="100vh"
        p="16px"
        align={{ base: "flex-start", md: "center" }}
        justify="center"
      >
        <Flex
          w="full"
          maxW="940px"
          bg="ui.white"
          p={{ base: "24px", md: "16px" }}
          rounded="lg"
          boxShadow="md"
          mt={{ base: "99px", md: "0" }}
          mb={{ base: "85px", md: "0" }}
          gap="16px"
          h="unset"
        >
          <Stepper activeStep={activeStep} steps={steps} />

          <FormProvider {...methods}>
            <Flex
              as="form"
              onSubmit={methods.handleSubmit(onSubmit)}
              pt={{ base: "6px", md: "40px" }}
              pb="16px"
              mx="auto"
              w="full"
              maxW="450px"
              flexDir="column"
              justify="space-between"
            >
              <Box h="full">{renderStep()}</Box>
              {!methods.formState.isSubmitSuccessful && (
                <Actions
                  activeStepPercent={activeStepPercent}
                  goToPrevious={goToPrevious}
                  onNext={handleNext}
                />
              )}
            </Flex>
          </FormProvider>
        </Flex>
      </Flex>
    </>
  )
}

export default App
