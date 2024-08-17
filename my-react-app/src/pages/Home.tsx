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
import { projects, experience } from "../assets/data/home"; // Import the data
import { useMediaQuery } from "@mantine/hooks";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <Text fw={200} mt="xl" mb="sm" size="xl">
        About Me
      </Text>
      <Text c="dimmed" size="md">
        Hi, I'm Will. I'm a CS student at the Univeristy of Kansas and a
        passionate software developer with a strong background in web
        development.
      </Text>

      <Text c="dimmed" size="md" mb="xl" mt="sm">
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

      {/* Experience Section */}
      <Text fw={200} mt="xl" mb="sm" size="xl">
        Experience
      </Text>

      <Paper withBorder p="lg">
        {experience.map((exp, index) => (
          <div key={index}>
            <Text size="md">
              {exp.role} at {exp.company}
            </Text>
            <Text c="dimmed" size="sm">
              {exp.duration}
            </Text>
            <Text mt="sm" c="dimmed">
              <ul style={{ marginTop: "0.5rem" }}>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </Text>
          </div>
        ))}
      </Paper>
    </Container>
  );
};

export default Home;
