import { Group, ActionIcon, Text, Divider } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <Divider mt="xl" />
      <Group justify="space-between" my="lg">
        <Text c="dimmed">© Will Whitehead</Text>
        <Group>
          <ActionIcon
            variant="outline"
            component="a"
            href="https://www.linkedin.com/in/willwhitehead122/" // Replace with your LinkedIn profile URL
            target="_blank"
            size="sm"
          >
            <IconBrandLinkedin />
          </ActionIcon>
          <ActionIcon
            variant="outline"
            component="a"
            href="https://github.com/w1lt" // Replace with your GitHub profile URL
            target="_blank"
            size="sm"
          >
            <IconBrandGithub />
          </ActionIcon>
        </Group>
      </Group>
    </>
  );
};

export default Footer;
