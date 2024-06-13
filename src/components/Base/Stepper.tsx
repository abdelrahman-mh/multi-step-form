import {
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react"

interface Props {
  activeStep: number
  steps: Array<{ description: string }>
}

const StepperComponent = ({ activeStep, steps }: Props) => {
  const orientation: "horizontal" | "vertical" | undefined = useBreakpointValue(
    { base: "horizontal", md: "vertical" },
  )
  return (
    <>
      <Box
        hideFrom="md"
        bgImage={{
          base: "url('images/bg-sidebar-mobile.svg')",
          md: "none",
        }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="absolute"
        w="full"
        h="173px"
        top="0"
        left="0"
        zIndex={-1}
      />
      <Box
        h={{ md: "568px" }}
        bgImage={{
          md: "url('images/bg-sidebar-desktop.svg')",
        }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos={{ base: "absolute", md: "static" }}
        w="full"
        flexBasis="274px"
        rounded="lg"
        p={{ md: "40px 32px" }}
        top={{ base: "0", md: "auto" }}
        left={{ base: "0", md: "auto" }}
        mt={{ base: "32px", md: "0" }}
      >
        <Stepper
          index={activeStep}
          orientation={orientation}
          gap={{ base: "16px", md: "30px" }}
          w="min-content"
          mx={{ base: "auto", md: "0" }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepNumber />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <Box flexShrink="0" hideBelow="md">
                <StepTitle>step {index + 1}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  )
}

export default StepperComponent
