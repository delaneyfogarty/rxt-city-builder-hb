import React from 'react';

export default function SkylineDropdown({ setSkylineId }) {
  return (
    <div>
      Select a Skyline
      {/* this component should have a prop called setSkyline, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setSkyline function */}
      {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
      <select onChange={(e) => setSkylineId(e.target.value)}>
        <option value="skyline-1">Pink</option>
        <option value="skyline-2">Busy</option>
        <option value="skyline-3">Foggy</option>
      </select>
    </div>
  );
}
