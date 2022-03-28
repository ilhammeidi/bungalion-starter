import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha, lighten } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Demo() {
  const yes = true;
  const bg = {
    background: 'cyan'
  };
  const color = {
    color: 'green'
  };
  const hail = (radius) => ({
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    bgcolor: (theme) => lighten(theme.palette.background.paper, 0.2),
    overflow: 'hidden',
    borderRadius: radius,
    textAlign: 'center',
    boxShadow: 1,
    fontWeight: 'bold',
    '& > div': {
      bgcolor: 'secondary.light',
    },
    '&:hover': {
      '& > div': {
        background: 'pink',
      },
    },
  });

  return (
    <Box
      className="hail"
      sx={{
        ...hail(10),
        ...(yes && bg),
        ...color,
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          123 Main St, Phoenix AZ
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          $280,000 — $310,000
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          <ErrorOutlineIcon />
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
    </Box>
  );
}
