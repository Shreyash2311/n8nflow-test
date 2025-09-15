// GOOD CODE EXAMPLE – Follows all 20 rules

/**
 * Helper function to format user objects.
 * Ensures clean data structure for downstream nodes.
 */
function formatUser(user) {
  return {
    id: user.id,
    name: user.name.trim(),
    email: user.email.toLowerCase(),
  };
}

try {
  
  const BASE_URL = "https://jsonplaceholder.typicode.com"; // (9) UPPER_CASE constant
  const userId = 1;

  
  const apiUrl = `${BASE_URL}/users/${userId}`;

  
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}`); // (13) meaningful error
  }

  const data = await response.json();

  
  const formattedUser = formatUser(data);

  
  return [
    {
      json: formattedUser,
    },
  ];
} catch (error) {
  
  console.error("Error fetching user:", error.message); 
  throw error;
}
//asdas
// (6) 2-space indentation, (7) max line length ≤100, (8) camelCase variables
// (10) semicolons used consistently
// (16) never mutating input directly
// (18) reusable helper function defined at top
// (19) ready for ESLint validation
// (20) can be checked automatically in PR pipeline
