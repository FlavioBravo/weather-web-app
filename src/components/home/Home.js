import React, { useState } from 'react';

import { AddName } from './AddName';
import { Grid } from './Grid';

export const Home = ({ defaultCities = [] }) => {

    const [cities, setCities] = useState( defaultCities );

    return (
      <>
          <h2>Weather Web App</h2>
          <AddName setCities={ setCities } />
          <hr />

          <ol>
              {
                  cities.map( city  => (
                      <Grid 
                          key={ city }
                          city={ city }
                      />
                  ))
              }
          </ol>

      </>
  )
}
