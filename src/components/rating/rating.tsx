import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const labels: {
  [key in 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5]: string;
} = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value as 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5]}`;
}

export default function HoverRating() {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState<number>(-1);

  const getLabel = (hover: number, value: number | null) => {
    if (hover !== -1 && hover in labels) {
      return labels[hover as keyof typeof labels];
    } else if (value !== null && value in labels) {
      return labels[value as keyof typeof labels];
    }
    return '';
  };

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(_, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && <Box sx={{ ml: 2 }}>{getLabel(hover, value)}</Box>}
    </Box>
  );
}
