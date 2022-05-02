import React from 'react';

export default function CastleDropdown({ setCastleId }) {
  return (
    <div>
      Select a Castle
      {/* this component should have a prop called setCastle, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setCastle function */}
      {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
      <select onChange={(e) => setCastleId(e.target.value)}>
        <option value="castle-1">Serious</option>
        <option value="castle-2">Mysterious</option>
        <option value="castle-3">Regal</option>
      </select>
    </div>
  );
}
