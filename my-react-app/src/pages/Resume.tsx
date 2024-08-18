import React from "react";
import { Container, Button, Center } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

const Resume: React.FC = () => {
  return (
    <Container>
      <Center>
        <Button
          component="a"
          href="https://docs.google.com/document/d/1AfyetAPTr0x9UEfcnXV7LvWgqlnbYmetNXsP6QqOhN4/export?format=pdf"
          rel="noopener noreferrer"
          leftSection={<IconDownload size={16} />}
          variant="outline"
          my="md"
        >
          Download
        </Button>
      </Center>

      <div
        style={{
          height: "160vh",
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1AfyetAPTr0x9UEfcnXV7LvWgqlnbYmetNXsP6QqOhN4/preview"
          width="100%"
          height="100%"
          title="Resume"
        ></iframe>
      </div>
    </Container>
  );
};

export default Resume;
