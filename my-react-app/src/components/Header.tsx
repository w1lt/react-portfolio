import { Link, useLocation } from "react-router-dom";
import { Flex, Group, Text, UnstyledButton, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Paper withBorder p="sm" my="md">
        <Text fw={300} size="md" ta="center">
          ~ i'm open to summer '25 internship roles! ~
        </Text>
      </Paper>

      <Flex mt="xl" align="center" justify={isMobile ? "center" : "flex-start"}>
        {!isMobile && (
          <>
            <UnstyledButton component={Link} to="/">
              <Text fw={300} size="md">
                Will
              </Text>
            </UnstyledButton>
            <Text mx="lg">•</Text>
          </>
        )}

        <Group gap="lg">
          <UnstyledButton
            component={Link}
            to="/"
            style={{
              color: "inherit",
            }}
            fw={location.pathname === "/" ? 500 : 200}
          >
            home
          </UnstyledButton>
          <UnstyledButton
            component={Link}
            to="/other"
            style={{
              color: "inherit",
            }}
            fw={location.pathname === "/other" ? 500 : 200}
          >
            other
          </UnstyledButton>
        </Group>
      </Flex>
    </>
  );
};

export default Header;
