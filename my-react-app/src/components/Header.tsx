import { Link, useLocation } from "react-router-dom";
import { Flex, Group, Text, UnstyledButton, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { label: "home", path: "/" },
    { label: "resume", path: "/resume" },
    { label: "other", path: "/other" },
  ];

  return (
    <>
      <Paper withBorder p="sm" my="md">
        <Text fw={300} size="md" ta="center">
          👋 i'm open to summer '25 internship roles!
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
          {navItems.map((item, index) => (
            <UnstyledButton
              key={item.path}
              component={Link}
              to={item.path}
              style={{
                color: "inherit",
                position: "relative",
                fontWeight: location.pathname === item.path ? 600 : 200,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.label}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -2,
                  height: 2,
                  width: hoveredIndex === index ? "100%" : "0%",
                  backgroundColor: "currentColor",
                  transition: "width 0.3s ease",
                }}
              />
            </UnstyledButton>
          ))}
        </Group>
      </Flex>
    </>
  );
};

export default Header;
