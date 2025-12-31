"use server"

export async function getGitHubContributions() {
  const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

  // Architectural Guard: Early exit if environment is misconfigured
  if (!GITHUB_TOKEN) {
    console.error("CRITICAL: GITHUB_ACCESS_TOKEN is missing from environment variables.");
    return { error: "Configuration Error", data: null };
  }

  const query = `
    query($userName: String!) {
  user(login: $userName) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
        months {
          name
          totalWeeks
          firstDay
        }
      }
    }
  }
}
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: "sushanto171" },
      }),
      next: { revalidate: 86400 } // ISR: 24-hour cache TTL
    });

    // Handle HTTP-level errors (4xx, 5xx)
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`GitHub API HTTP Error: ${response.status} - ${errorText}`);
      return { error: `GitHub API responded with status ${response.status}`, data: null };
    }

    const result = await response.json();

    // Handle GraphQL-level errors (e.g., user not found)
    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      return { error: result.errors[0].message, data: null };
    }

    return {
      data: result.data.user.contributionsCollection.contributionCalendar,
      error: null
    };

  } catch (error) {
    // Catch network failures or parsing errors
    console.error("Fetch Exception:", error);
    return {
      error: error instanceof Error ? error.message : "An unexpected network error occurred",
      data: null
    };
  }
}