import React from 'react';

export default function WaterfrontDropdown(props) {
  return (
    <div>
      Select a Waterfront
      {/* this component should have a prop called setWaterfront, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setWaterfront function */}
      {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
      <select>
        <option>Dock</option>
        <option>Sunset</option>
        <option>Boats</option>
      </select>
    </div>
  );
}
