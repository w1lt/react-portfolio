import { Group, ActionIcon } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const Footer = () => {
  return (
    <Group justify="center" mt="xl" mb="md">
      <ActionIcon
        variant="outline"
        component="a"
        href="https://www.linkedin.com/in/willwhitehead122/" // Replace with your LinkedIn profile URL
        target="_blank"
        size="sm"
      >
        <IconBrandLinkedin size={18} />
      </ActionIcon>
      <ActionIcon
        variant="outline"
        component="a"
        href="https://github.com/w1lt" // Replace with your GitHub profile URL
        target="_blank"
        size="sm"
      >
        <IconBrandGithub size={18} />
      </ActionIcon>
    </Group>
  );
};

export default Footer;
