import {
  SimpleGrid,
  Paper,
  Group,
  Badge,
  Text,
  Flex,
  Container,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { projects } from "../assets/data/home"; // Import the data
import { useMediaQuery } from "@mantine/hooks";
import { Helmet } from "react-helmet";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <Helmet>
        <title>Will Whitehead</title>
      </Helmet>
      <Text fw={200} mt="xl" mb="sm" size="xl">
        About Me
      </Text>
      <Text size="md" fw={300}>
        Hi, I'm Will. I'm a CS student at the Univeristy of Kansas and a
        passionate software developer with a strong background in web
        development.
      </Text>

      <Text size="md" mb="xl" mt="sm" fw={300}>
        I'm currently working on creating <u>CSjobs</u> and <u>Tickget</u>. I'm
        excited to start my next semester at KU and am open to summer '25
        internship roles.
      </Text>

      {/* Projects Section */}
      <Text fw={200} mt="xl" mb="sm" size="xl">
        Projects
      </Text>

      <SimpleGrid cols={isMobile ? 1 : 2} spacing="lg">
        {projects.map((project, index) => (
          <Paper
            key={index}
            shadow="none"
            p="lg"
            radius="md"
            withBorder
            component="a"
            href={project.link}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Flex justify="space-between">
              <Text size="md">{project.title}</Text>
              <IconExternalLink size={18} />
            </Flex>

            <Text size="sm" c="dimmed" mt="xs">
              {project.description}
            </Text>

            <Group mt="sm" gap={7}>
              {project.tags.map((tag, i) => (
                <Badge variant="outline" key={i}>
                  {tag}
                </Badge>
              ))}
            </Group>
          </Paper>
        ))}
      </SimpleGrid>
      <Text ta="center" mt="md" c="dimmed">
        + more on my{" "}
        <a
          href="https://github.com/w1lt"
          target="_blank"
          style={{
            color: "inherit",
          }}
        >
          GitHub
        </a>
      </Text>
    </Container>
  );
};

export default Home;
