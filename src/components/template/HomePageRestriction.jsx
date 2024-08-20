import { Typography } from "@mui/material";

function HomePageRestriction() {
  return (
    <>
      <Typography component="h6" variant="h6" color="primary" mb={3}>
        Restrictions
      </Typography>

      <Typography component="p" variant="p" mb={4}>
        Prohibited items. Merchants may only offer to sell items expressly
        permitted by their agreement with Uber. A merchant cannot offer
        specially regulated or illicit items, like cannabidiol (CBD) and
        tetrahydrocannabinol (THC), on their Uber Eats menu.
      </Typography>
    </>
  );
}

export default HomePageRestriction;
