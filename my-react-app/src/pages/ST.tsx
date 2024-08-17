import { Container, Text } from "@mantine/core";
import { thoughts } from "../assets/data/thoughts";

// Define an interface for the thought structure

const RandomThoughts: React.FC = () => {
  return (
    <>
      <Container>
        <Text fw={200} mt="xl" mb="sm" size="xl">
          Ideas
        </Text>

        {
          // Render the actual content once loaded
          thoughts.map((thought) => (
            <Text my="xs" c="dimmed">
              - {thought}
            </Text>
          ))
        }
      </Container>
    </>
  );
};

export default RandomThoughts;
