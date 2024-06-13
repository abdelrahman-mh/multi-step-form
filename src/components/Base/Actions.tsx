import { Flex, Button } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"

interface ActionsProps {
  activeStepPercent: number
  goToPrevious: () => void
  onNext: () => void
}

export default function Actions({
  activeStepPercent,
  goToPrevious,
  onNext,
}: ActionsProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext()
  return (
    <Flex
      pos={{ base: "absolute", md: "static" }}
      bottom="0"
      left="0"
      bg="ui.white"
      w="full"
      p={{ base: "15px", md: "0" }}
      justify="space-between"
    >
      {activeStepPercent > 0 && (
        <Button isLoading={isSubmitting} onClick={goToPrevious} variant="back">
          Go Back
        </Button>
      )}
      {activeStepPercent < 1 && (
        <Button
          size={{ base: "md", md: "lg" }}
          isLoading={isSubmitting}
          variant="primary"
          ml="auto"
          onClick={onNext}
        >
          Next Step
        </Button>
      )}
      {activeStepPercent === 1 && (
        <Button
          size={{ base: "md", md: "lg" }}
          isLoading={isSubmitting}
          ml="auto"
          variant="confirm"
          type="submit"
        >
          Confirm
        </Button>
      )}
    </Flex>
  )
}
