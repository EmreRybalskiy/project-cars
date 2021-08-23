// import MediaCard from 'components/MediaCard/MediaCard';
import MediaCard from 'components/MediaCard/MediaCard';
import React, { FC } from 'react';

const MediaPage: FC = ({ location: { state } }: any) => (
  <MediaCard
    id={state.id}
    key={state.id}
    image={state.image}
    brand={state.brand}
    color={state.color}
    year={state.year}
    engineType={state.engineType}
    fuelType={state.fuelType}
    transmission={state.transmission}
  />
);

export default MediaPage;
