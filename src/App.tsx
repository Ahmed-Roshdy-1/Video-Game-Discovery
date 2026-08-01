import { Grid, GridItem } from "@chakra-ui/react";


function App() {


  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"`
    }}>
      <GridItem bg="blue.300" area="nav">
        nav
      </GridItem>
      
        <GridItem bg="green.300" area="aside" display={{base : "none", lg : "block"}}>
          aside
        </GridItem>
      
      <GridItem bg="yellow.300" area="main">
        main
      </GridItem>

    </Grid>
   
  )
}

export default App
