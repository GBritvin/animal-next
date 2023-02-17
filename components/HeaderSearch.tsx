import {
  Autocomplete,
  Burger,
  Group,
  Header,
  createStyles,
} from "@mantine/core";
import React from "react";
import { Search } from "tabler-icons-react";
import { useBooleanToggle } from "@mantine/hooks";

const USE_STYLES = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface THeaderSearchProps {
  links: Array<{ link: string; label: string }>;
  toggleMenu: any
}

/**
 *
 * @param root0
 * @param root0.links
 * @param togleHand.togleHand
 * @param togleHand
 * @example
 */
export default function HeaderSearch({
  links,
  toggleMenu,
}: THeaderSearchProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = USE_STYLES();

  const burgerHandler = () => {
    toggleMenu();
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} className={classes.header} mb={20}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={burgerHandler} size="sm" />
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<Search size={16} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
        </Group>
      </div>
    </Header>
  );
}
