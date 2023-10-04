import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonComp() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={() => console.log("text clicked")}>
        Text
      </Button>
      <Button
        variant="contained"
        onClick={() => console.log("Contained clicked")}
      >
        Contained
      </Button>
      <Button
        variant="outlined"
        onClick={() => console.log("Outlined clicked")}
      >
        Outlined
      </Button>
    </Stack>
  );
}
