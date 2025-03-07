"use client";

import React from "react";
import { Box } from "@mui/material";
import MobileTechStack from "../../components/MobileTechStack/MobileTechStack";
import MobileApplicationDevelopmentProcess from "../../components/MobileApplicationDevelopmentProcess/MobileApplicationDevelopmentProcess";
import MobileAppDevelopmentSolutions from "../../components/MobileAppDevelopmentSolutions/MobileAppDevelopmentSolutions";
import MobileApplicationOverview from "../../components/MobileApplicationOverview/MobileApplicationOverview";

const MobileAppDevelopment = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 }, px: { xs: 1, md: 2 } }}>
      <MobileAppDevelopmentSolutions />
      <MobileApplicationOverview />
      <MobileTechStack />
      <MobileApplicationDevelopmentProcess />
    </Box>
  );
};

export default MobileAppDevelopment;