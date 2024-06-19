"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledTabs = styled(Tabs)(() => ({
  borderBottom: "1px solid black",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiTabs-flexContainer": {
    justifyContent: "flex-start",
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)({
  textTransform: "none",
  fontFamily: "Space Grotesk, sans-serif",
  fontWeight: 400,
  fontSize: "0.75rem",
  color: "black",
  paddingLeft: 0,
  paddingRight: 20,
  border: "none",
  textDecoration: "none",
  "&.Mui-selected": {
    fontWeight: 800,
    color: "black",
    borderBottom: "none",
    textDecoration: "none",
  },
  "&:hover": {
    fontWeight: 800,
    color: "black",
    textDecoration: "none",
  },
  "&:focus": {
    color: "black",
    textDecoration: "none",
  },
  "&:visited": {
    color: "black",
    textDecoration: "none",
  },
  "&:active": {
    color: "black",
    textDecoration: "none",
  },
  "&::after": {
    content: "none",
  },
  "&:after": {
    content: "none",
  },
  "& .MuiTouchRipple-root": {
    display: "none",
  },
  "&:not(.Mui-selected)": {
    borderBottom: "none",
  },
});

const ChapterNavigation = ({ slug, levelSlug, chapterSlug }) => {
  const path = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(0);

  const tabs = [
    {
      label: "INLEIDING",
      href: `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/inleiding`,
    },
    {
      label: "THEORIE",
      href: `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/theorie`,
    },
    {
      label: "OEFENINGEN",
      href: `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/oefeningen`,
    },
    {
      label: "OPDRACHTEN",
      href: `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/opdrachten`,
    },
    {
      label: "VOORBEELDEN",
      href: `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/voorbeelden`,
    },
  ];

  useEffect(() => {
    const currentTab = tabs.findIndex((tab) => path === tab.href);
    if (currentTab !== -1) {
      setValue(currentTab);
    } else {
      router.replace(
        `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/inleiding`
      );
    }
  }, [path, tabs, router, slug, levelSlug, chapterSlug, supabase]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="w-full">
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="chapter navigation tabs"
      >
        {tabs.map((tab, index) => (
          <StyledTab
            key={index}
            label={tab.label}
            component={Link}
            href={tab.href}
            className="text-black no-underline"
          />
        ))}
      </StyledTabs>
    </Box>
  );
};

export default ChapterNavigation;
