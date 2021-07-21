import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  page: number;
  pageCount: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const Pagination: React.FC<Props> = ({ page = 0, pageCount, handleNext, handlePrev }) => {
  return (
    <Stack direction="row" justifyContent="center" paddingY={10} width="100%">
      {page > 1 && pageCount >= page ? (
        <Button rounded="full" onClick={handlePrev}>
          Prev
        </Button>
      ) : null}
      <Stack
        alignItems="center"
        backgroundColor="gray.700"
        height="40px"
        justifyContent="center"
        rounded="full"
        width="50px"
      >
        <Text>{page}</Text>
      </Stack>
      {page < pageCount - 1 ? (
        <Button rounded="full" onClick={handleNext}>
          Next
        </Button>
      ) : null}
    </Stack>
  );
};

export default Pagination;
