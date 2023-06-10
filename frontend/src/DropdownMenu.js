import React, { useState } from 'react';

const AdminDropdown = () => {
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleSelectAdmin = (admin) => {
    setSelectedAdmin(admin);
  };

  const admins = ['Admin 1', 'Admin 2', 'Admin 3', 'Admin 4'];

  return (
    <div>
      <h2>Admin Dropdown Menu</h2>
      <select value={selectedAdmin} onChange={(e) => handleSelectAdmin(e.target.value)}>
        <option value="">-- Select an admin --</option>
        {admins.map((admin) => (
          <option key={admin} value={admin}>
            {admin}
          </option>
        ))}
      </select>
      {selectedAdmin && <p>Selected admin: {selectedAdmin}</p>}
    </div>
  );
};

export default AdminDropdown;
