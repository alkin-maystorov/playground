import { Button, Grid } from '@chakra-ui/react';
import { ColorTheme } from './ColorTheme';

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  return (
    <Grid pt={2} templateColumns='1fr 1fr' columnGap='3'>
      <ColorTheme />
      <Button>Load</Button>
    </Grid>
  );
}

export default TopBar;
