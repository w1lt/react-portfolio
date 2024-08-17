import { Container, Text } from "@mantine/core";
import { thoughts } from "../assets/data/thoughts";
import { Helmet } from "react-helmet";

const RandomThoughts: React.FC = () => {
  return (
    <>
      <Container>
        <Helmet>
          <title>Will Whitehead - Ideas</title>
        </Helmet>
        <Text fw={200} mt="xl" mb="sm" size="xl">
          Ideas
        </Text>

        {
          // Render the actual content once loaded
          thoughts.map((thought) => (
            <Text my="xs" fw={300}>
              - {thought}
            </Text>
          ))
        }
      </Container>
    </>
  );
};

export default RandomThoughts;
